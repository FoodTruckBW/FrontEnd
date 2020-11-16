
import * as yup from 'yup'

export default yup.object().shape({ 
    name: yup.string().required("You must enter a name for this order").min(2, "Username must be 2 characters"), 
    size: yup.string().required("Size of Pizza is required!"), 
    sauce: yup.string().required("You must choose a sauce"), 
    pepperoni: yup.boolean(),
    cheese:yup.boolean().oneOf([true], "You must select a topping"),
    meatLovers:yup.boolean(),
    veggieLovers:yup.boolean()
})