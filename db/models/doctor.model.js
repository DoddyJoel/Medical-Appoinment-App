/**
 * Sequelize has two forms to define models
 * -Calling sequelize.define(modelName, attributes, options)
 * -Extending Model and calling init(attributes, options)
 */
import { Model, DataTypes } from "sequelize";

const DOCTOR_TABLE = "doctor";

const DoctorSchema = {
  id: {
    field: "id_doctor",
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
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class Doctor extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: DOCTOR_TABLE,
      modelName: "Doctor",
      timestamps: true,
    };
  }
}

export { DOCTOR_TABLE, DoctorSchema, Doctor };
