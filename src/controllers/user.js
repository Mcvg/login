const { validationResult } = require('express-validator');
const { validatorError, serverError } = require('../utils/errors');

exports.sum = (req, res, next) => {
  buildOperationProcess(req, res, 'Sum');
};

const buildOperationProcess = (req, res, operationType) => {
  validateParams(req);
  try {
    sendResponse(res);
  } catch (e) {
    serverError(e);
  }
};

const validateParams = (req) => {
  const errorList = validationResult(req);
  if (!errorList.isEmpty()) {
    validatorError();
  }
};

const sendResponse = (res) =>
  res.status(201).json({ data: operationResult, message: 'User login succesfully!' });
