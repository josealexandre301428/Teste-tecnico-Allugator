const db = require('../database/models');
const Joi = require('joi');
const ValidateError = require('../middlewares/ValidateError');
const include = [
  { model: db.Product, as: 'products', through: { attributes: ['quantity'] } },
  ]

  const schema = Joi.object({
    userId: Joi.number().required(),
    totalPrice: Joi.number().required(),
    deliveryAddress: Joi.string().required(),
    deliveryNumber:  Joi.number().required(),
    document: Joi.string().required().min(11),
    cartItems: Joi.array().required(),
  }).messages({
    'string.empty': 'All fields must be filled',
    'any.required': 'All fields must be filled',
  });

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
    const { error } = schema.validate(data);
    if (error) throw new ValidateError(400, error.message);

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