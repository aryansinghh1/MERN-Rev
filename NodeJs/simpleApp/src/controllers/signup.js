export const signup = async (req, res) => {
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
};