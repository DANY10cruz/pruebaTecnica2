import { Schema, model } from "mongoose";

const employeSchema = new Schema(
  {
    codigo: { type: Number, required: true },
    nombre: { type: String, required: true },
    apellido1: { type: String, required: true },
    apellido2: { type: String, required: true },
    codigo_departamento: {
      type: Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const employeModel = new model("employe", employeSchema);
export default employeModel;
