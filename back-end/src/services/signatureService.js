const db = require('../database/models');
const include = [
  { model: db.Product, as: 'products', through: { attributes: ['quantity'] } },
]

const signatureService = {
  async delete(params) {
    const { id } = params;
    await db.SignedProduct.destroy({ where: { signatureId: id } });
    await db.Signature.destroy({ where: { id } });
    return 'ok';
   },

  async getByUser(userId) {
   const result =  await db.Signature.findAll({ where: userId, include });
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