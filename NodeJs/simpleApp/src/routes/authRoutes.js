import { Router } from "express";

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        message: "All information is required for signup",
      });
    }

    const users = JSON.parse(await fs.readFile(usersFile, "utf-8"));

    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      return res.status(409).json({
        message: "User with this email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: users.length + 1,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: "student",
    };

    users.push(newUser);

     const { password: _, ...userData } = newUser;

    await fs.writeFile(usersFile, JSON.stringify(users, null, 2));

    const token = generateToken(newUser);

    return res.status(201).json({
      message: "Signup successful",
      token,
      user: userData,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to complete signup",
    });
  }
});

router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required for login",
      });
    }

    const users = JSON.parse(await fs.readFile(usersFile, "utf-8"));
    const user = users.find((currentUser) => currentUser.email === email);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const { password: userPassword, ...safeUser } = user;
    const token = generateToken(user);

    return res.status(200).json({
      message: "Login successful",
      token,
      user: safeUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to complete login",
    });
  }
});


export default router;