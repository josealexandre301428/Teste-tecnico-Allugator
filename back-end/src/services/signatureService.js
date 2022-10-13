const db = require('../database/models');


const signatureService = {
  async getById(id) {
   const result =  await db.Signature.findOne({ where: { userId: id } });
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
    return saleId;

  }
}

module.exports = signatureService;