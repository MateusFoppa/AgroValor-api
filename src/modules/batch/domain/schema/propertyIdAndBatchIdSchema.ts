import Joi from 'joi';

const propertyIAndBatchIdSchema = Joi.object({
  params: Joi.object({
    property_id: Joi.string().uuid().required(),
    batch_id: Joi.string().uuid().required(),
  }),
});

export { propertyIAndBatchIdSchema };
