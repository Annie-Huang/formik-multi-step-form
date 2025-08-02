import React, { FC, useState } from 'react';
import { Form, Formik, FormikConfig, FormikHelpers } from 'formik';
import { Values } from './types';
import { Button, Step, StepLabel, Stepper } from '@mui/material';
import { FormikStepProps } from './FormikStep';

// Note: very confusing the naming, this is called FormikStepper which is the highest wrapper.
// Then the FormikStep, which the wrapper for each page of the form section.

// props is the same as props from <Formik> component
// props: FormikConfig<Values> & ExtraProps
export const FormikStepper: FC<FormikConfig<Values>> = ({
  children,
  ...props
}) => {
  // https://github.com/jaredpalmer/formik/issues/3683, if use children directly in the template, you will need to wrap it with <>{children}</>, like the backup below
  // @ts-ignore
  // const childrenArray = React.Children.toArray(
  //   children,
  // ) as React.ReactElement<FormikStepProps>[];
  const childrenArray = children as React.ReactElement<FormikStepProps>[];

  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  console.log('currentChild', currentChild);
  const [completed, setCompleted] = useState(false);

  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

  const onSubmit = async (values: Values, helpers: FormikHelpers<Values>) => {
    if (isLastStep()) {
      await props.onSubmit(values, helpers);
      // Besides call parent onSubmit, we also setComplete to be true so material ui stepper can show the correct value.
      setCompleted(true);
      // helpers.resetForm();
      // setStep(0);
    } else {
      setStep((s) => s + 1);
    }
  };

  return (
    <Formik
      {...props}
      // only the 2nd child got the validationSchema value. After this is added, you cannot move to the 3rd step if you choose millionaire and didn't enter > 1m for money
      validationSchema={currentChild.props.validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form autoComplete='off'>
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}

          {step > 0 && (
            <Button
              disabled={isSubmitting}
              variant='contained'
              color='primary'
              onClick={() => setStep((s) => s - 1)}
              sx={{ mr: 2 }}
            >
              Back
            </Button>
          )}
          <Button
            disabled={isSubmitting}
            variant='contained'
            color='primary'
            type='submit'
          >
            {/*{isLastStep() ? 'Submit' : 'Next'}*/}
            {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

/*
export const FormikStepper: FC<FormikConfig<Values>> = ({
  children,
  ...props
}) => {
  // https://github.com/jaredpalmer/formik/issues/3683, if use children directly in the template, you will need to wrap it with <>{children}</>, like the backup below
  // @ts-ignore
  // const childrenArray = React.Children.toArray(
  //   children,
  // ) as React.ReactElement<FormikStepProps>[];
  const childrenArray = children as React.ReactElement<FormikStepProps>[];

  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  console.log('currentChild', currentChild);

  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

  const onSubmit = async (values: Values, helpers: FormikHelpers<Values>) => {
    if (isLastStep()) {
      await props.onSubmit(values, helpers);
    } else {
      setStep((s) => s + 1);
    }
  };

  return (
    <Formik
      {...props}
      // only the 2nd child got the validationSchema value. After this is added, you cannot move to the 3rd step if you choose millionaire and didn't enter > 1m for money
      validationSchema={currentChild.props.validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form autoComplete='off'>
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child) => (
              <Step key={child.props.label}>
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}

          {step > 0 && (
            <Button
              disabled={isSubmitting}
              variant='contained'
              color='primary'
              onClick={() => setStep((s) => s - 1)}
              sx={{ mr: 2 }}
            >
              Back
            </Button>
          )}
          <Button
            disabled={isSubmitting}
            variant='contained'
            color='primary'
            type='submit'
          >
            {/!*{isLastStep() ? 'Submit' : 'Next'}*!/}
            {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}
          </Button>
        </Form>
      )}
    </Formik>
  );

  /!*  return (
    <Formik
      {...props}
      // only the 2nd child got the validationSchema value. After this is added, you cannot move to the 3rd step if you choose millionaire and didn't enter > 1m for money
      validationSchema={currentChild.props.validationSchema}
      onSubmit={onSubmit}
    >
      <Form autoComplete='off'>
        <Stepper alternativeLabel activeStep={step}>
          {childrenArray.map((child) => (
            <Step key={child.props.label}>
              <StepLabel>{child.props.label}</StepLabel>
            </Step>
          ))}
        </Stepper>

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
        <Button variant='contained' color='primary' type='submit'>
          {isLastStep() ? 'Submit' : 'Next'}
        </Button>
      </Form>
    </Formik>
  );*!/
};
*/

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
