'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('signatures', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        field: 'user_id',
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        },
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 3),
      },
      delivery_address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      delivery_number: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      document: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      signature_date: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('signatures');
  }
};
