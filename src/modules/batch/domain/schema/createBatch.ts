import Joi from 'joi';

const createBatchSchema = Joi.object({
  body: Joi.object({
    name: Joi.string().required().max(50).min(4),
    activity: Joi.string().required().max(50).min(3),
    geographic_coordinates: Joi.string().required().min(3),
  }),
  params: Joi.object({
    property_id: Joi.string().uuid().required(),
  }),
});

export { createBatchSchema };
