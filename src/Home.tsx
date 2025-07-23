import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Field, Form, Formik, FormikHelpers, FormikValues } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-mui';

type Values = {
  firstName: string;
  lastName: string;
  millionaire: boolean;
  money: number;
  description: string;
};

const INITIAL_FORM_STATE: Values = {
  firstName: '',
  lastName: '',
  millionaire: false,
  money: 0,
  description: '',
};

export const Home = () => {
  return (
    <Card>
      <CardContent>
        {/*<Typography variant='h1'>Hello Youtube!!!</Typography>*/}
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          onSubmit={function (
            // values: FormikValues,
            // formikHelpers: FormikHelpers<FormikValues>,

            values: Values,
            formikHelpers: FormikHelpers<Values>,
          ): void | Promise<any> {
            throw new Error('Function not implemented.');
          }}
        >
          <Form>
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
            <Field
              name='money'
              type='number'
              component={TextField}
              label='All the money I have'
              variant='standard'
            />
            <Field
              name='description'
              component={TextField}
              label='Description'
              variant='standard'
            />
          </Form>
        </Formik>
      </CardContent>
    </Card>
  );
};
