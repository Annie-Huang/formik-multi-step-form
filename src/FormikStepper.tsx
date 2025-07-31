import React, { FC, useState } from 'react';
import { Form, Formik, FormikConfig } from 'formik';
import { Values } from './types';
import { Button } from '@mui/material';

// props is the same as props from <Formik> component
// props: FormikConfig<Values> & ExtraProps
export const FormikStepper: FC<FormikConfig<Values>> = ({
  children,
  ...props
}) => {
  // https://github.com/jaredpalmer/formik/issues/3683, if use children directly in the template, you will need to wrap it with <>{children}</>, like the backup below
  // @ts-ignore
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];

  return (
    <Formik {...props}>
      <Form autoComplete='off'>
        {currentChild}

        {step > 0 && (
          <Button
            variant='contained'
            color='primary'
            onClick={() => setStep((s) => s - 1)}
          >
            Back
          </Button>
        )}
        <Button type='submit'>Next</Button>
      </Form>
    </Formik>
  );
};

/*
export const FormikStepper: FC<FormikConfig<Values>> = ({
  children,
  ...props
}) => {
  return (
    <Formik {...props}>
      <Form autoComplete='off'>
        {/!* Have to wrap children with react fragment: https://github.com/jaredpalmer/formik/issues/3683 *!/}
        <>{children}</>
      </Form>
    </Formik>
  );
};
*/
