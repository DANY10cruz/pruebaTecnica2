import employeModel from "../models/employes_model.js";
import departmentModel from "../models/department_model.js";

export const create = async (req, res) => {
  try {
    const { codigo, nombre, apellido1, apellido2 } = req.body;
    const departmentExists = await departmentModel.findOne({
      codigo: codigo,
    });
    console.log(departmentExists);
    if (departmentExists) {
      const employe = new employeModel({
        codigo: codigo,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        codigo_departamento: departmentExists._id,
      });
      const newEmploye = await employe.save();
      res.status(201).json({ Mensaje: "Empleado creado", data: newEmploye });
    }
  } catch (error) {
    console.error("Error al crear departamento:", error);
  }
};

export const getAll = async (req, res) => {
  try {
    const getEmploye = await employeModel
      .find()
      .populate("codigo_departamento");
    res
      .status(200)
      .json({ mensaje: "Leyendo todos los Empleados", data: getEmploye });
  } catch (error) {
    console.error("Error al obtener los Empleados", error);
  }
};

export const getId = async (req, res) => {
  try {
    const { id } = req.params;
    const employedId = await employeModel.findById(id);
    res
      .status(200)
      .json({ Mensaje: "Empleado leido por ID", data: employedId });
  } catch (error) {
    console.error("Error al obtener Empleado por ID:", error);
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { codigo, nombre, apellido1, apellido2, codigo_departamento } =
      req.body;

    const employeId = await employeModel.findByIdAndUpdate(
      id,
      {
        codigo,
        nombre,
        apellido1,
        apellido2,
        codigo_departamento,
      },
      { new: true }
    );
    res
      .status(200)
      .json({ Mensaje: "Empleadi actualizado por ID", data: employeId });
  } catch (error) {
    console.error("Error al actualizar Empleado por ID:", error);
  }
};

export const employeDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const employedId = await employeModel.findByIdAndDelete(id);
    res.status(200).json({
      Mensaje: "Empleado eliminado por ID",
      data: employedId,
    });
  } catch (error) {
    console.error("Error al eliminar Empleado por ID:", error);
  }
};
