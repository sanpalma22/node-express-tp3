import express from "express";
import cors from "cors";
import ProvinceRouter from "./controllers/province-controller.js";


const app = express();
const port = 3000; // El puerto 3000 (http://localhost:3000)
// Agrego los Middlewares
app.use(cors()); // Middleware de CORS.
app.use(express.json()); // Middleware para parsear y comprender JSON.
//
// Endpoints (todos los Routers)


app.use("/api/province", ProvinceRouter);

app.get("/api/provinces",ProvinceRouter)

app.post("/api/provinceP", ProvinceRouter);

app.put("/api/provincePU", ProvinceRouter);

app.delete("/api/provinceD", ProvinceRouter);



// Inicio el Server y lo pongo a escuchar.
//
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})



