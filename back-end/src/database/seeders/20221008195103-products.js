module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('products', [
      {
        name: 'iPhone 12',
        price: 2.445,
        url_image: 'http://localhost:3001/images/iPhone_12.png',
      },
      {
        name: 'iPhone 13',
        price: 3.197,
        url_image: 'http://localhost:3001/images/iPhone_13.png',
      },
      {
        name: 'iPhone 13 Pro',
        price: 4.397,
        url_image: 'http://localhost:3001/images/iPhone_13_Pro.png',
      },
      {
        name: 'iPhone 13 Pro Max',
        price: 4.397,
        url_image: 'http://localhost:3001/images/iPhone_13_Pro_Max.png',
      },
    ], {});
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};
