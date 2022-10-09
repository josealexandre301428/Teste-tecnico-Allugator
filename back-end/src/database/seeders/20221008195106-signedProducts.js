module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('signed_products', [
      {
        signature_id: 1,
        product_id: 2,
        quantity: 1,
      },
    ], {});
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('signed_products', null, {});
  },
};