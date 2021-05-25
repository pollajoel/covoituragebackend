const Joi = require('joi');

exports.validate = function (data) {
    const userSchemaValidation = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string(),
        email: Joi.string().email().required(),
        isAdmin: Joi.boolean().required(),
        age: Joi.number().required(),
        password: Joi.string().required(),
    });
    return userSchemaValidation.validate(data);

}