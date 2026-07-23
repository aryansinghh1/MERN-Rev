import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import fs from "fs/promises";
// import { userPath } from '../index.js';
import User from '../models/User.js';

export const signup = async (req, res) => {
    // const data = req.body;
    try {
        const { firstName, lastName, email, password } = req.body;
        // console.log('Data: ', data);

        if (!firstName || !lastName || !email || !password) {
            res.json({ message: "All informations are required for signup"});
            return;
        }

        // const users = JSON.parse(await fs.readFile( userPath, 'utf-8'));
        // const existingUser = users.find(u => u.email === email);

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            res.json({ message: "User with this email already exists"});
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role: 'student'
        })

        // const newUser = {
        //     id: users.length + 1,
        //     firstName,
        //     lastName,
        //     email,
        //     password: hashedPassword,
        //     role: "student",
        //     courses: []
        // }

        // users.push(newUser);
        // const { password: _, ...userData } = newUser;
        // await fs.writeFile(userPath, JSON.stringify(users, null, 2));
        res.json({
            message: "New User added successfully",
            // data: userData
        });
        return;
    } catch(err) {
        console.log('Error');
        res.json({ message: "Unable to create new user, Please try again!"});
        return;
    }
    
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
     res.json({ message: 'Email and password both are required for Login!'});
     return;
    }
 
    // const users = JSON.parse(await fs.readFile(userPath, 'utf-8'));
    // const user = users.find(u => u.email === email);

    const user = await User.findOne({ email });
 
    if (!user) {
     res.json({ message: "User does not exist" });
     return;
    }
 
    const isMatched = await bcrypt.compare(password, user.password);
 
    if (!isMatched) {
     res.json({ message: "Invalid credentials"});
     return;
    }
 
    const token = jwt.sign(
     {
         id: user.id,
         role: user.role
     },
     process.env.JWT_SECRET,
     { expiresIn: '7d' }
    )
 
    res.json({
     message: "Logged in successfully",
     token
    });
    return;
 }