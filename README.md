# TODO App - Sistema de Gestión de Tareas
## Descripción
Sistema creado para la gestion de las tareas de los estudiantes, para falicitar sus actividades
## Arquitectura
La aplicación está compuesta por tres servicios ejecutados en contenedores Docker:

db (PostgreSQL): almacena las tareas.
backend (Node.js + Express): API REST que gestiona las tareas.
frontend (Nginx + HTML/JS): interfaz web.
Comunicación: Frontend (8080) ⇄ Backend (3000) ⇄ Base de datos (5432)
## Tecnologías
- Backend: Node.js + Express + PostgreSQL
- Frontend: HTML + CSS + JavaScript + Nginx
- Orquestación: Docker + Docker Compose
## Requisitos Previos
- Docker 20+
- Docker Compose 2+
- Git
## Instalación y Ejecución
### 1. Clonar repositorio
git clone https://github.com/KevinMedina29/todo-app.git
### 2. Levantar servicios
cd todo-app
docker-compose up -d --build
### 3. Acceder a la aplicación
Frontend: http://localhost:8080

Backend: http://localhost:3000
## Comandos Útiles
bash
# Construir imágenes
docker-compose build
# Levantar servicios
docker-compose up -d
# Ver logs de todos los servicios
docker-compose logs -f
# Ver logs de un servicio específico
docker-compose logs -f backend
# Detener servicios
docker-compose down
# Detener Y eliminar volúmenes
docker-compose down -v
# Ver estado de servicios
docker-compose ps
# Ejecutar comando en contenedor
docker-compose exec backend sh
## Estructura del Proyecto
todo-app/
├─ backend/
│  ├─ src/
│  │  ├─ index.js
│  ├─ package.json
│  └─ Dockerfile
│  └─ .dockerignore
├─ frontend/
│  ├─ index.html
│  ├─ nginx.conf
│  ├─ styles.css
│  └─ Dockerfile
├─ docs
│  └─ arquitectura.md
└─ .gitignore
├─ docker-compose.yml
└─ README.md

## API Endpoints
GET /tasks → Obtener tareas

POST /tasks → Crear tarea (body: { "title": "..." })

PUT /tasks/:id → Actualizar tarea (body: { "completed": true })

DELETE /tasks/:id → Eliminar tarea
## Autor
- Estudiante: Kevin Alexander Medina Moran
