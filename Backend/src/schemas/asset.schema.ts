import Joi from "joi";

const createSchema = Joi.object({
    userId: Joi.string().required().trim(),
    image: Joi.string().required().trim(),
    name: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    type: Joi.string().required().trim(),
    amount: Joi.number().required(),
    roi: Joi.number().required(),
    purpose: Joi.string().required().trim(),
    timeline: Joi.string().required().trim(),
    shares: Joi.number().required(),
    size: Joi.string().required().trim(),
    pofoUrl: Joi.string().required().trim(),
    aoiUrl: Joi.string().required().trim(),
    locUrl: Joi.string().required().trim(),
    cocUrl: Joi.string().required().trim()
});

const buySchema = Joi.object({
    assetId: Joi.string().required().trim(),
    userId: Joi.string().required().trim(),
    shares: Joi.number().required()
});

export {
    createSchema,
    buySchema
}