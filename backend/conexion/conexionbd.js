import mongoose from "mongoose";

export const conexion = async () => {
  try {
    const linkBase = process.env.BASEDATOS;
    mongoose.connect(linkBase);
    console.log("Conectado a la bd");
  } catch (error) {
    console.error(error);
  }
};
