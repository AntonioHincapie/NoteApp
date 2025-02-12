## Prerequisites

### **System Requirements**

- **Node.js**: v18.17.0 or later
- **npm**: v9.6.7 or later (comes with Node.js)
- **Docker**: v20.10.0 or later (optional for containerized setup)

---

## Installation and Setup

### Linux/macOS environment automation

After step 1, navigate to the root folder of the proyect:

```bash
sudo chmod +x note-app.sh
./note-app.sh
```

### Step 1: Clone the Repository

```bash
git clone https://github.com/Hincapie-6667c1.git
cd note-app
```

### Step 2: Backend Setup

1. Navigate to the `backend` folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following content:

   ```env
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```
   The backend will run on [http://localhost:5000](http://localhost:5000).

### Step 3: Frontend Setup

1. Navigate to the `frontend` folder:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```
   The frontend will run on [http://localhost:3000](http://localhost:3000).

### Step 4: Using Docker (Optional)

1. Ensure Docker is installed and running on your system.
2. Build and run the Docker containers:
   ```bash
   docker-compose up --build
   ```
3. The backend and frontend will be accessible at the following URLs:
   - Backend: [http://localhost:5000](http://localhost:5000)
   - Frontend: [http://localhost:3000](http://localhost:3000)

---

## Scripts

### Backend Scripts

| Command            | Description                       |
| ------------------ | --------------------------------- |
| `npm start`        | Starts the backend server.        |
| `npm run db:init`  | Initializes the database schema.  |
| `npm run db:reset` | Drops and recreates the database. |

### Frontend Scripts

| Command     | Description                         |
| ----------- | ----------------------------------- |
| `npm start` | Starts the frontend dev server.     |
| `npm build` | Builds the frontend for production. |

---

## API Endpoints

### **Backend API (http://localhost:5000)**

| Method | Endpoint                 | Description               |
| ------ | ------------------------ | ------------------------- |
| POST   | `/api/notes`             | Create a new note.        |
| GET    | `/api/notes/active`      | Get all active notes.     |
| GET    | `/api/notes/archived`    | Get all archived notes.   |
| GET    | `/api/notes/all`         | Get all notes.            |
| PATCH  | `/api/notes/:id/archive` | Archive/unarchive a note. |
| DELETE | `/api/notes/:id`         | Delete a note.            |

---

## Troubleshooting

### Common Issues

1. **Port conflicts:**

   - Make sure ports `5000` and `3000` are not in use by other applications.

2. **Docker issues:**
   - Run `docker ps` to ensure containers are running.
   - Check logs with `docker-compose logs`.

---

## License

This project is licensed under the [MIT](./LICENSE) License. See the LICENSE file for details.

---

## Author

## 👤 **Marco Antonio Hincapié Montes**

- GitHub: [@AntonioHincapie](https://github.com/AntonioHincapie)

- LinkedIn: [LinkedIn](https://www.linkedin.com/in/antoniohincapie/)
