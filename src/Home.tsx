import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Field, FormikHelpers, FormikValues } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-mui';
import * as Yup from 'yup';
import { mixed, number } from 'yup';
import { FormikStepper } from './FormikStepper';
import { Values } from './types';
import { FormikStep } from './FormikStep';

// const INITIAL_FORM_STATE: FormikValues = {
const INITIAL_FORM_STATE: Values = {
  firstName: '',
  lastName: '',
  millionaire: false,
  money: 0,
  description: '',
};
const FORM_VALIDATION = Yup.object().shape({
  // money: mixed().when('millionaire', {
  //   is: true,
  //   then: number().required().min(
  //     1_000_000, // this is the same as 1000000
  //     'Because you said you are a millionaire you need to have 1 million',
  //   ),
  //   otherwise: number().required(),
  // }),

  // https://stackoverflow.com/questions/54919228/conditional-validation-with-yup-and-formik
  money: mixed().when('millionaire', ([millionaire]) => {
    if (millionaire) {
      return number().required().min(
        1_000_000, // this is the same as 1000000
        'Because you said you are a millionaire you need to have 1 million',
      );
    }
    return number().required();
  }),
});

export const Home = () => {
  return (
    <Card>
      <CardContent>
        {/*<Typography variant='h1'>Hello Youtube!!!</Typography>*/}
        <FormikStepper
          initialValues={{ ...INITIAL_FORM_STATE }}
          // validationSchema={FORM_VALIDATION}
          onSubmit={function (
            // values: FormikValues,
            // formikHelpers: FormikHelpers<FormikValues>,

            values: Values,
            formikHelpers: FormikHelpers<Values>,
          ): void | Promise<any> {
            throw new Error('Function not implemented.');
          }}
        >
          <FormikStep>
            <Field
              name='firstName'
              component={TextField}
              label='First Name'
              variant='standard'
            />
            <Field
              name='lastName'
              component={TextField}
              label='Last Name'
              variant='standard'
            />
            <Field
              name='millionaire'
              type='checkbox'
              component={CheckboxWithLabel}
              Label={{ label: 'I am a millionaire' }}
            />
          </FormikStep>
          <FormikStep validationSchema={FORM_VALIDATION}>
            <Field
              name='money'
              type='number'
              component={TextField}
              label='All the money I have'
              variant='standard'
            />
          </FormikStep>
          <FormikStep>
            <Field
              name='description'
              component={TextField}
              label='Description'
              variant='standard'
            />
          </FormikStep>
        </FormikStepper>
      </CardContent>
    </Card>
  );

  /*  return (
    <Card>
      <CardContent>
        {/!*<Typography variant='h1'>Hello Youtube!!!</Typography>*!/}
        <FormikStepper
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={FORM_VALIDATION}
          onSubmit={function (
            // values: FormikValues,
            // formikHelpers: FormikHelpers<FormikValues>,

            values: Values,
            formikHelpers: FormikHelpers<Values>,
          ): void | Promise<any> {
            throw new Error('Function not implemented.');
          }}
        >
          <div>
            <Field
              name='firstName'
              component={TextField}
              label='First Name'
              variant='standard'
            />
            <Field
              name='lastName'
              component={TextField}
              label='Last Name'
              variant='standard'
            />
            <Field
              name='millionaire'
              type='checkbox'
              component={CheckboxWithLabel}
              Label={{ label: 'I am a millionaire' }}
            />
          </div>
          <div>
            <Field
              name='money'
              type='number'
              component={TextField}
              label='All the money I have'
              variant='standard'
            />
          </div>
          <div>
            <Field
              name='description'
              component={TextField}
              label='Description'
              variant='standard'
            />
          </div>
        </FormikStepper>
      </CardContent>
    </Card>
  );*/

  /*  return (
    <Card>
      <CardContent>
        {/!*<Typography variant='h1'>Hello Youtube!!!</Typography>*!/}
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={FORM_VALIDATION}
          onSubmit={function (
            // values: FormikValues,
            // formikHelpers: FormikHelpers<FormikValues>,

            values: Values,
            formikHelpers: FormikHelpers<Values>,
          ): void | Promise<any> {
            throw new Error('Function not implemented.');
          }}
        >
          {/!* Turn off auto complete for the form. *!/}
          <Form autoComplete='off'>
            <div>
              <Field
                name='firstName'
                component={TextField}
                label='First Name'
                variant='standard'
              />
              <Field
                name='lastName'
                component={TextField}
                label='Last Name'
                variant='standard'
              />
              <Field
                name='millionaire'
                type='checkbox'
                component={CheckboxWithLabel}
                Label={{ label: 'I am a millionaire' }}
              />
            </div>
            <div>
              <Field
                name='money'
                type='number'
                component={TextField}
                label='All the money I have'
                variant='standard'
              />
            </div>
            <div>
              <Field
                name='description'
                component={TextField}
                label='Description'
                variant='standard'
              />
            </div>
          </Form>
        </Formik>
      </CardContent>
    </Card>
  );*/
};
