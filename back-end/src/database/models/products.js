const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(9, 3),
      allowNull: false,
    },
    urlImage: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'url_image'
    },
  }, {
    timestamps: false,
    tableName: 'products',
  });

  Product.associate = (models) => {
    Product.hasOne(models.Infos, {
      foreignKey: 'id', as: 'infoProduct'
    });
  }

  return Product;
};

module.exports = Product;