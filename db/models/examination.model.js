import { Model, DataTypes } from "sequelize";

const EXAMINATION_TABLE = "examinations";

const ExaminationSchema = {
  id: {
    field: "id_examination",
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  type: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  consultationId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
};

class Examination extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: EXAMINATION_TABLE,
      modelName: "Examination",
      timestamps: true,
    };
  }
}

export { EXAMINATION_TABLE, ExaminationSchema, Examination };
