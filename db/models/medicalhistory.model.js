import { Model, DataTypes } from "sequelize";

const MEDICAL_HISTORY_TABLE = "medicalhistories";

const MedicalHistorySchema = {
  id: {
    field: "id_medicalhistory",
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  dateHistory: {
    field: "date_history",
    allowNull: false,
    primaryKey: true,
    type: DataTypes.DATE,
  },
  diagnostic: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  patientId: {
    field: "patient_id",
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class MedicalHistory extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: MEDICAL_HISTORY_TABLE,
      modelName: "MedicalHistory",
      timestamps: true,
    };
  }
}

export { MEDICAL_HISTORY_TABLE, MedicalHistorySchema, MedicalHistory };
