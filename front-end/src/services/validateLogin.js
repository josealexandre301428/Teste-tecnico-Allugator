const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const MIN = 6;

export const validateFields = (name, email, password) => {
  const MIN_NAME = 12;

  if (name.length < MIN_NAME) return true;
  if (!emailRegex.test(email)) return true;
  if (password.length < MIN) return true;
};

export const validateLogin = (email, password) => {
  if (!emailRegex.test(email)) return true;
  if (password.length < MIN) return true;
};

export const validateCheckout = (endereco, numero, documento) => {
  const MIN_NAME = 10;

  if (endereco.length < MIN) return true;
  if (numero.length === 0) return true;
  if (documento.length <= MIN_NAME) return true;
};
