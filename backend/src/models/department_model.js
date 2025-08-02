import { Schema, model } from "mongoose";

const departmentSchema = new Schema(
  {
    codigo: {
      type: Number,
      required: true,
      unique: true, // Asegura que cada código de departamento sea único
    },
    nombre: {
      type: String,
      required: true,
      trim: true, // Elimina espacios en blanco al inicio y final
    },
  },
  {
    timestamps: true, // Añade campos createdAt y updatedAt automáticamente
    versionKey: false,
  }
);

const departmentModel = new model("Department", departmentSchema);

export default departmentModel;
