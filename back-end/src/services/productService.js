const db = require('../database/models');

const productService = {
  async getAll() {
   const result =  await db.Product.findAll({ raw: true });
   return result;
  },

  async getByName(name) {
    const result =  await db.Product.findOne({
      where: { name }, raw: true,
    });
   return result;
  }
}

module.exports = productService;