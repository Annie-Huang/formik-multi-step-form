import { FormikConfig } from 'formik';
import { Values } from './types';

export interface FormikStepProps
  extends Pick<FormikConfig<Values>, 'children' | 'validationSchema'> {}

// Note: without this component, if user click 'I am a millionaire' checkbox, you cannot get into the second page.
export const FormikStep = ({ children, ...props }: FormikStepProps) => {};
