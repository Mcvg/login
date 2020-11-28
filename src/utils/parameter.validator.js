const { body } = require('express-validator');

const username = (parameter) => {
  return body(parameter)
    .exists()
    .withMessage(`The value ${parameter} is required`)
    .matches(/^[a-zA-Zá-úÁ-Úä-üÄ-ÜñÑ\s0-9]*$/, 'i')
    .withMessage(`The value ${parameter} must be a valid username`)
    .trim()
    .escape();
};

const password = (parameter) => {
  return body(parameter)
    .exists()
    .withMessage(`The value ${parameter} is required`)
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'gm')
    .withMessage(
      `The value ${parameter} must be a valid password, with numbers, letters, special characters and at least 8 characters`
    )
    .trim()
    .escape();
};

module.exports = { username, password };
