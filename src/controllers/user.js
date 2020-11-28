const { validationResult } = require('express-validator');
const { validatorError, serverError } = require('../utils/errors');
const User = require('../modules/user');

exports.detail = (req, res, next) => {
  try {
    User.find({}, (err, users) => {
      if (err) return err;

      res.send(users);
    });
  } catch (e) {
    serverError(e);
  }
};

exports.create = (req, res, next) => {
  validateParams(req);

  let user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  user.save(function (err) {
    if (err) console.log(err);

    sendSuccessfullyResponse(res, 'User created successfully.');
  });
};

const validateParams = (req) => {
  const errorList = validationResult(req);
  if (!errorList.isEmpty()) {
    validatorError(errorList);
  }
};

const sendSuccessfullyResponse = (res, message) =>
  res.status(201).json({ message });
