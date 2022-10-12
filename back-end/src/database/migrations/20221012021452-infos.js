'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('infos', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      productId: {
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
      marca: {
        allowNull: false,
        type: Sequelize.STRING,
        field: `marca`,
      },
      armazenamento: {
        allowNull: false,
        type: Sequelize.STRING,
        field: `armazenamento`,
      },
      tela: {
        allowNull: false,
        type: Sequelize.STRING,
        field: `tela`,
      },
      cameraFrontal: {
        type: Sequelize.STRING,
        allowNull: false,
        field: `camera_frontal`,
      },
      cameraTraseira: {
        type: Sequelize.STRING,
        allowNull: false,
        field: `camera_traseira`,
      },
      processador: {
        type: Sequelize.STRING,
        allowNull: false,
        field: `processador`,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('infos');
  }
};
