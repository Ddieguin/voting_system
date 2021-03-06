import { celebrate, Joi, Segments } from 'celebrate';

//! número eleitoral brasileiro restringe-se a no máximo e no mínimo duas casas decimais
export const bodyUpdateVoteValidation = () => {
    return celebrate({
        [Segments.BODY]: {
            number_political_party: Joi.string().required().min(2).max(2) //! two chars
        }
    })
}


