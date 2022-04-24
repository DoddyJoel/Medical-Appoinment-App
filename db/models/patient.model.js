import { Model, DataTypes } from "sequelize";
const PATIENT_TABLE = "patients";

const PatientSchema = {
  id: {
    field: "id_patient",
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  fullname: {
    field: "full_name",
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  doctorId: {
    field: "doctor_id",
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class Patient extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PATIENT_TABLE,
      modelName: "Patient",
      timestamp: true,
    };
  }
}

export { PATIENT_TABLE, PatientSchema, Patient };
