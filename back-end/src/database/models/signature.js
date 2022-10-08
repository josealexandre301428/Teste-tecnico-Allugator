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
    signatureDate: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'signature_date'
    },
  }, {
    timestamps: false,
    tableName: 'signature',
  });

  signature.associate = (models) => {
    signature.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user'
    });
  }

  return signature;
};

module.exports = signature;
