import React, { FC } from 'react';
import { Form, Formik, FormikConfig } from 'formik';
import { Values } from './types';

// props is the same as props from <Formik> component
// props: FormikConfig<Values> & ExtraProps
export const FormikStepper: FC<FormikConfig<Values>> = ({
  children,
  ...props
}) => {
  return (
    <Formik {...props}>
      <Form autoComplete='off'>
        {/* Have to wrap children with react fragment: https://github.com/jaredpalmer/formik/issues/3683 */}
        <>{children}</>
      </Form>
    </Formik>
  );
};
