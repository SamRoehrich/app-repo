import * as yup from "yup";

export const validUserSchema = yup.object({
  firstName: yup.string().required().min(2),
  lastName: yup.string().required().min(2),
  email: yup.string().required().email(),
  password: yup.string().required().min(1),
  confirmPassword: yup.string().required().min(1),
});
