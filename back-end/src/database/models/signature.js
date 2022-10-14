const signature = (sequelize, DataTypes) => {
  const signature = sequelize.define('Signature', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id'
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(9, 3),
      field: 'total_price'
    },
    deliveryAddress: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'delivery_address'
    },
    deliveryNumber: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'delivery_number'
    },
    document: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'document'
    },
    signatureDate: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'signature_date'
    },
  }, {
    timestamps: false,
    tableName: 'signatures',
  });

  signature.associate = (models) => {
    signature.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user'
    });
  }

  return signature;
};

module.exports = signature;
