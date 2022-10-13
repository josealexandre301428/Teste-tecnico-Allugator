const { Router } = require('express');
const signatureController = require('../controller/signatureController');

const signatureRouter = Router();

signatureRouter.post('/newSig', signatureController.addSig)

module.exports = signatureRouter;