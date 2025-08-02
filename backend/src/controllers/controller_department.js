import departmentModel from "../models/department_model.js";

export const create = async (req, res) => {
  try {
    const { nombre, codigo } = req.body;

    const newDepartment = new departmentModel({
      codigo: codigo,
      nombre: nombre,
    });
    const savedDepartment = await newDepartment.save();
    res
      .status(201)
      .json({ Mensaje: "Departamento creado", data: savedDepartment });
  } catch (error) {
    console.error("Error al crear departamento:", error);
  }
};

export const getAll = async (req, res) => {
  try {
    const user = await departmentModel.find();
    res
      .status(200)
      .json({ mensaje: "Leyendo todos los Departamentos", data: user });
  } catch (error) {
    console.error("Error al obtener los departamento:", error);
  }
};

export const getId = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = await departmentModel.findById(id);
    res
      .status(200)
      .json({ Mensaje: "Departamento leido por ID", data: userId });
  } catch (error) {
    console.error("Error al obtener departamento por ID:", error);
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, codigo } = req.body;

    const updateId = await departmentModel.findByIdAndUpdate(
      id,
      { nombre, codigo },
      { new: true }
    );

    res
      .status(200)
      .json({ Mensaje: "Departamento actualizado por ID", data: updateId });
  } catch (error) {
    console.error("Error al actualizar departamento por ID:", error);
  }
};

export const departmentDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDepartment = await departmentModel.findByIdAndDelete(id);
    res.status(200).json({
      Mensaje: "Departamento eliminado por ID",
      data: deletedDepartment,
    });
  } catch (error) {
    console.error("Error al eliminar departamento por ID:", error);
  }
};
