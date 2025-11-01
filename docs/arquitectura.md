# Arquitectura todo-app

La aplicación está compuesta por tres servicios ejecutados en contenedores Docker:
- **db** (PostgreSQL): almacena las tareas.
- **backend** (Node.js + Express): API REST que gestiona las tareas.
- **frontend** (Nginx + HTML/JS): interfaz web.

Comunicación:
Frontend (8080) ⇄ Backend (3000) ⇄ Base de datos (5432)
