module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('signatures', [
      {
        user_id: 1,
        total_price: 3.197,
        delivery_address: 'Rua do lazer, Belo Horizonte - MG',
        delivery_number: 123,
        document: 'mg12345678',
        signature_date: new Date(),
      },
    ], {});
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('signatures', null, {});
  },
};
