import express from "express";
import dotenv from "dotenv";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const JWT_SECRET = "your_secret_key";

const users = [
  {
    id: 1,
    username: "testuser",
    password: "System123!", // Pre-hash the password for security
  },
];

app.use(express.json());

app.get("/login", async (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const user = users.find((u) => u.username === username);

  console.log(user);

  if (!user) {
    res.status(401).json({ message: "Invalid username or password" });
    return;
  }

  // Check if the password matches
  if (password !== user.password) {
    res.status(401).json({ message: "Invalid username or password" });
    return;
  }

  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
    expiresIn: "1h",
  });

  // If everything is valid, return a success response
  res.status(200).json({ message: "Login successful", token });
});

app.get("/api", (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
