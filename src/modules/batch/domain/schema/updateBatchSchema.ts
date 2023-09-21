import Joi from 'joi';

const updateBatchSchema = Joi.object({
  body: Joi.object({
    name: Joi.string().max(50).min(4),
    activity: Joi.string().max(50).min(3),
    geographic_coordinates: Joi.string().min(3),
  }),
  params: Joi.object({
    property_id: Joi.string().uuid().required(),
    area_id: Joi.string().uuid().required(),
  }),
});

export { updateBatchSchema };
