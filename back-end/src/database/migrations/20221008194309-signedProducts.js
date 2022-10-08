'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('signed_products', {
      signature_id: {
        allowNull: false,
        field: 'signature_id',
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'signatures',
          },
          key: 'id',
        },
      },
      product_id: {
        allowNull: false,
        field: 'product_id',
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'products',
          },
          key: 'id',
        },
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('signed_products');
  }
};
