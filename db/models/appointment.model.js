import { Model, DataTypes } from "sequelize";

const APPOINTMENT_TABLE = "appointments";

const AppointmentSchema = {
  id: {
    field: "id_appointment",
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  hour: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  dateAppointment: {
    field: "date_appointment",
    allowNull: false,
    type: DataTypes.DATE,
  },
  doctorId: {
    field: "doctor_id",
    allowNull: false,
    type: DataTypes.STRING,
  },
  patientId: {
    field: "patient_id",
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class Appointment extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: APPOINTMENT_TABLE,
      modelName: "Appointment",
      timestamps: true,
    };
  }
}

export { APPOINTMENT_TABLE, AppointmentSchema, Appointment };
