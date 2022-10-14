const Infos = (sequelize, DataTypes) => {
  const Infos = sequelize.define('Infos', {
    productId: {
      type: DataTypes.INTEGER,
      field: `product_id`
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
      field: `marca`,
    },
    armazenamento: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: `armazenamento`,
    },
    tela: {
      type: DataTypes.STRING,
      allowNull: false,
      field: `tela`,
    },
    cameraFrontal: {
      type: DataTypes.STRING,
      allowNull: false,
      field: `camera_frontal`,
    },
    cameraTraseira: {
      type: DataTypes.STRING,
      allowNull: false,
      field: `camera_traseira`,
    },
    processador: {
      type: DataTypes.STRING,
      allowNull: false,
      field: `processador`,
    },
  }, {
    timestamps: false,
    tableName: `infos`,
  });

  Infos.associate = (models) => {
    Infos.belongsTo(models.Product, {
      foreignKey: 'id', as: 'productInfo'
    });
  }


  return Infos;
};

module.exports = Infos;