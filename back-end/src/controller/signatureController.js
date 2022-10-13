const signatureService = require('../services/signatureService'); 

const signatureController = {

  async getByUser(req, res) {
    const  { id } = req.body;
    try {
      const response = await signatureService.getByUser(id);

      return res.status(200).json(response);
    } catch (error) {
      return error.status
        ? res.status(error.status).json({ message: error.message })
        : res.status(500).json({ message: error.message });
    }

  },

  async addSig(req, res) {
    try {
      const response = await signatureService.addSig(req.body);
      return res.status(201).json(response);
    } catch (error) {
      return error.status
        ? res.status(error.status).json({ message: error.message })
        : res.status(500).json({ message: error.message });
    }
  }
}

module.exports = signatureController;