const db = require('../database/models');

const include = [
  { model: db.Product, as: 'products', through: { attributes: ['quantity'] } },
]


const signatureService = {
  async getByUser(userId) {
   const result =  await db.Signature.findAll({ where: userId });
   return result;
  },

  async addSig(data) {
    const { cartItems, ...sign } = data;
    console.log(cartItems);
    const signId = await db.Signature.create(
      { ...sign, signatureDate: new Date() },
      { raw: true },
    );
    await Promise.all(
      cartItems.map((product) =>
        db.SignedProduct.create({
          signatureId: signId.id,
          productId: product.id,
        })),
    );
    return signId;

  }
}

module.exports = signatureService;