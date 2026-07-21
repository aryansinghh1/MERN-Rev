import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authentication token is required" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedUser = jwt.verify(token, jwtSecret);
    req.user = decodedUser;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
