const db = require('../database/models');

const include = [
  { model: db.Infos, as: 'infoProduct' },
];

const productService = {
  async getAll() {
   const result =  await db.Product.findAll({ include });
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