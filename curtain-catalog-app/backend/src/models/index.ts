import { DataTypes, Model, Sequelize } from 'sequelize';

export class Curtain extends Model {
  public id!: number;
  public name!: string;
  public width!: number;
  public height!: number;
  public fabricPricePerMeter!: number;
  public installationPricePerMeter!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initializeModels = (sequelize: Sequelize) => {
  Curtain.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      width: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      height: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      fabricPricePerMeter: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      installationPricePerMeter: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'curtains',
    }
  );
};