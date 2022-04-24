import { Model, DataTypes } from "sequelize";

const CONSULTATION_TABLE = "consultations";

const ConsultationSchema = {
  id: {
    field: "id_consultation",
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  hour: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  presscription: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  appointmentId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
};

class Consultation extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: CONSULTATION_TABLE,
      modelName: "Consultation",
      timestamps: true,
    };
  }
}

export { CONSULTATION_TABLE, ConsultationSchema, Consultation };
