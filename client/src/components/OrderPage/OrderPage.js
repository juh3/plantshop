import React from 'react'
import { Formik, Form, Field} from 'formik'
import { Button } from '@mui/material'
import './OrderPage.scss'
import { IconButton } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const OrderPage = ({ cart, changeQuantity }) => {
  if( cart?.length === 0) {
    return( 
    <div className='empty__shoppingcart'>
      <div className='wrapper'>
        <p> Cart is empty! Check the shop for options.</p>
        <img src = "\images\fineASSDOGGO.jpg" alt = "This is fine meme with plants"/>
      </div>
    </div>
    )
  }
  let total_sum = 0
  const getTotal = (quantity, price) => {
    const total = Math.round(quantity*price*100)/100
    return <p> {total} € </p>
  }

  total_sum = cart?.reduce( (previousValue, currentValue) =>
  currentValue.quantity*currentValue.price + previousValue ,total_sum
  )
  total_sum = Math.round(total_sum*100)/100
  return (
    <div className='orderpage__main'>

      
        <div className='orderpage__total'>
          <h1 style={{ }}> Order Information</h1>
          <hr style= {{ marginLeft: '2rem', marginRight: '2rem'}}/>

          <table>
            <thead>
              <tr>
                <th colSpan = "1"> Product</th>
                <th colSpan="1"></th>
                <th colSpan="1"> Description</th>
                <th colSpan = "1"> Quantity</th>
                <th colSpan = "1"> Total</th>
              </tr>
            </thead>
            {cart.map((product) => (
              <tbody>
                <tr>
                  <td>
                    <img style = {{width: '200px', height: '200px', marginTop: '1rem', marginBottom: '1rem', borderRadius: '2%'}} src = {product.imageUrl} alt = "product" />
                  </td>
                  <td style={{ display: 'flex', flexDirection: 'column', marginLeft: '3rem', marginTop: '1rem', width: '10vw'}}>
                    <p style= {{ fontFamily: 'Roboto, sans serif', fontSize:'35px'}}> {product.name}</p>
                    <p style= {{ fontFamily: 'Roboto, sans serif', fontSize:'20px'}}> {product.family}</p>
                  </td>
                  <td>
                    <p style={{marginLeft: '2rem', marginRight: '2rem', fontFamily: 'Roboto'}}> {product.description}</p>
                  </td>
                  <td>
                    <span style={{ fontWeight: '600', fontSize: '25px'}}>
                      <IconButton id ='itembutton' onClick = { () => {changeQuantity('decrement', product.id, 1)}}>
                        <RemoveIcon />
                      </IconButton>
                    {product.quantity}

                      <IconButton id ='itembutton' onClick = { () => {changeQuantity('increment', product.id, 1)}}>
                        <AddIcon />
                      </IconButton>
                    </span>
                  </td>
                  <td>
                    <p style={{ marginLeft: '6rem', fontWeight: '600', fontSize: '25px'}}> {getTotal(product.quantity, product.price)}</p>
                  </td>
                </tr>
              </tbody>
              ))}
            </table>
        <p style={{ float:'right', marginRight: '2rem', fontFamily: 'Roboto', fontSize: '25px', fontWeight:'600'}}> Total sum: {total_sum} €</p>
         
        </div>

        <h1>My Information</h1>
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
        <hr style={{ marginTop: '3rem'}}/>

    </div>
  )
}

export default OrderPage