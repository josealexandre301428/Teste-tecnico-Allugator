module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'José Alexandre',
        email: 'trybe@trybe.com',
        password: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRyeWJlQHRyeWJlLmNvbSIsInBhc3N3b3JkIjoiam9zZVRyeWJlQDEyMyJ9.7Bdxgth2oFw7P37HHOg6cXjaTpatWCnj-ADiKHzdv6U',
        // senha: joseTrybe@123
      },
    ], {});
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
