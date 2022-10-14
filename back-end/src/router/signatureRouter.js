const { Router } = require('express');
const signatureController = require('../controller/signatureController');

const signatureRouter = Router();

signatureRouter.get('/', signatureController.getByUser);
signatureRouter.post('/newSig', signatureController.addSig);
signatureRouter.delete('/delete/:id', signatureController.delete);

module.exports = signatureRouter;