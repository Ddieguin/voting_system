import { celebrate, Joi, Segments } from 'celebrate';


export const bodyCreateVoterValidation = () => {
    return celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            rg: Joi.string().required(),
            city: Joi.string().required(),
            date_birthday: Joi.date().required(),
            district: Joi.string().required(),
            birth_city: Joi.string().required()
        }
    })
}