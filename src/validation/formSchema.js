import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['Small', 'Medium', 'Large'], 'Please choose a size.'),
    sausage: yup.boolean(),
    onions: yup.boolean(),
    ham: yup.boolean(),
    pineapple: yup.boolean(),
    instructions: yup
        .string()
})

export default formSchema;