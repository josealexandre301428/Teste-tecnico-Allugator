const productService = require('../services/productService'); 

const productController = {

  async getAll(_req, res) {
    try {
      const response = await productService.getAll();

      return res.status(200).json(response);
    } catch (error) {
      return error.status
        ? res.status(error.status).json({ message: error.message })
        : res.status(500).json({ message: error.message });
    }

  },

  async getByName(req, res) {
    const { product } = req.body;
    try {
      const response = await productService.getByName(product);

      return res.status(200).json(response);
    } catch (error) {
      return error.status
        ? res.status(error.status).json({ message: error.message })
        : res.status(500).json({ message: error.message });
    }
  }
}

module.exports = productController;