import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello from users routes");
});

router.get("/users", (req, res) => {
  res.send("Users");
});

router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User ${id}`);
});

router.post("/users", (req, res) => {
  res.send("User created");
});

router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User ${id} updated`);
});

router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User ${id} deleted`);
});

export default router;
