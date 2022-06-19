import { celebrate, Joi, Segments } from 'celebrate';


//! validar o corpo da request para criar candidate
export const bodyCreateCandidateValidation = () => {
    return celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            rg: Joi.string().required(),
            political_party: Joi.string().required(),
            number_political_party: Joi.string().max(2).min(2).required(),
            birth_city: Joi.string().required(),
            date_birthday: Joi.date().required(),
            city: Joi.string().required()
        }
    })
}
