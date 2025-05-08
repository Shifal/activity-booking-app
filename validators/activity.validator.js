import Joi from 'joi';

const activitySchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  location: Joi.string().required(),
  date: Joi.date().required(),
  time: Joi.string().required()
});

const activityArraySchema = Joi.array().items(activitySchema).min(1).required();

export { activitySchema, activityArraySchema };
