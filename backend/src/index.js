import "dotenv/config";
import server from "./server.js";
import { conexion } from "../conexion/conexionbd.js";

try {
  const port = process.env.PORT || 3100;
  conexion();
  server.listen(port, () => {
    console.log(`escuchando por el puerto ${port}`);
  });
} catch (error) {}
