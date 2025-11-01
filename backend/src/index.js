import express from "express";
import cors from "cors";
import pkg from "pg";

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de PostgreSQL desde variables de entorno
const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "todo_db",
  port: process.env.DB_PORT || 5432,
});

// Crear tabla si no existe
async function initDB() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      completed BOOLEAN DEFAULT FALSE
    );
  `);
}
initDB();

// Rutas CRUD
app.get("/tasks", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM tasks ORDER BY id ASC");
  res.json(rows);
});

app.post("/tasks", async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Falta el título" });
  await pool.query("INSERT INTO tasks (title) VALUES ($1)", [title]);
  res.json({ message: "Tarea agregada" });
});

app.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  await pool.query("UPDATE tasks SET completed=$1 WHERE id=$2", [completed, id]);
  res.json({ message: "Tarea actualizada" });
});

app.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM tasks WHERE id=$1", [id]);
  res.json({ message: "Tarea eliminada" });
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Backend escuchando en puerto ${PORT}`));

