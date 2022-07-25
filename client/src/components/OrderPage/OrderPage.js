import React from 'react'
import { Formik, Form, Field} from 'formik'
import { Button } from '@mui/material'
import './OrderPage.scss'
const OrderPage = () => {
  return (
    <div className='orderpage__main'>

      <h1> my information</h1>
      <div className='orderpage__input_container'>
        <hr/>
        <Formik
          initialValues = {{ firstName: '', lastName: '', country: '', postalCode: '', address: '', email: '', phoneNumber: '', city:''}}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}>
          {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          }) => (
            <Form>
              <div className = 'orderpage__input_name'>
                <Field
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  placeholder = "First Name"
              />

                <Field
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  placeholder = "Last Name"
              />
              </div>

              <div className='orderpage__input_name'>
                <Field
                    type="text"
                    name="country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.country}
                    placeholder = "Country"
                />
                <Field
                    type="text"
                    name= "city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                    placeholder = "City"
                />
              </div>

              <div className='orderpage__input_name'>
                  <Field
                      type="text"
                      name="postalCode"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.postalCode}
                      placeholder = "Postal / Zip Code"
                  />
                  <Field
                      type="text"
                      name= "address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                      placeholder = "Address"
                  />
            </div>

            <div className='orderpage__input_name'>
                  <Field
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder = "Email"
                  />
                  <Field
                      type="text"
                      name= "phoneNumber"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                      placeholder = "Phonenumber"
                  />
            </div>
            <Button type = "submit" variant = "contained"> To payment </Button>
            </Form>
          )}
          </Formik>
        </div>
    </div>
  )
}

export default OrderPage