const SignedProduct = (sequelize, DataTypes) => {
  const SignedProduct = sequelize.define('SignedProduct', {
    signatureId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: 'signature_id'
    },
    productId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: 'product_id'
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    }
  }, {
    timestamps: false,
    tableName: 'signed_products',
  });

  SignedProduct.associate = (models) => {
    models.Product.belongsToMany(models.Signature, {
      through: SignedProduct,
      foreignKey: 'productId',
      otherKey: 'signatureId',
      as: 'signature',
    });

    models.Signature.belongsToMany(models.Product, {
      through: SignedProduct,
      foreignKey: 'signatureId',
      otherKey: 'productId',
      as: 'products',
    });

  };

  return SignedProduct;
}

module.exports = SignedProduct;