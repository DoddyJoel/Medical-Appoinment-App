import { Doctor, DoctorSchema } from "./doctor.model.js";

export default function setupModels(sequelize) {
  Doctor.init(DoctorSchema, Doctor.config(sequelize));
}
