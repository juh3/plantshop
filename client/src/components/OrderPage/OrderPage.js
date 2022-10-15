import React from 'react'
import { Formik, Form, Field} from 'formik'
import { Button } from '@mui/material'
import './OrderPage.scss'
import { IconButton } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const OrderPage = ({ cart, changeQuantity, matches }) => {
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
  console.log(matches)
  let total_sum = 0
  const getTotal = (quantity, price) => {
    const total = Math.round(quantity*price*100)/100
    return <p> €{total}</p>
  }

  total_sum = cart?.reduce( (previousValue, currentValue) =>
  currentValue.quantity*currentValue.price + previousValue ,total_sum
  )
  total_sum = Math.round(total_sum*100)/100
  return (
    <div className='orderpage__main'>
      <div className='orderpage__total'>
        <h1> Order Information</h1>
        <hr style= {{ marginLeft: '2rem', marginRight: '2rem'}}/>

        <table>
          <thead>
            <tr>
              <th colSpan = "1"> Product</th>
              {matches && <th colSpan="1"></th>}
              {matches && <th colSpan="1"> Description</th>}
              {matches && <th colSpan = "1"> Quantity</th>}
              {matches && <th colSpan = "1"> Total</th>}
            </tr>
          </thead>
          {cart.map((product) => (
            <tbody>
              <tr>
                <td>
                  <img src = {product.imageUrl} alt = "product" />
                </td>
                <td className='cart__table__productname'>
                  <p className='species'> {product.name}</p>
                  <p className = 'family'> {product.family}</p>
                </td>
                {matches && <td className = 'cart__description'>
                  <p className = 'description'> {product.description}</p>
                </td>}
                <td className='cart__quantitybuttons'>
                  <span>
                    <IconButton id ='itembutton' onClick = { () => {changeQuantity('decrement', product.id, 1)}}>
                      <RemoveIcon />
                    </IconButton>
                    <p>{product.quantity}</p>

                    <IconButton id ='itembutton' onClick = { () => {changeQuantity('increment', product.id, 1)}}>
                      <AddIcon />
                    </IconButton>
                  </span>
                </td>
                <td className='cart__total'>
                  <p> {getTotal(product.quantity, product.price)}</p>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      <p className='total__sum'> Total sum: €{total_sum}</p>
         
      </div>

        
      <div className='orderpage__input_container'>
        <h1>My Information</h1>
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
            <div className = 'orderpage__button'>
              <Button type = "submit" variant = "contained"> To payment </Button>
            </div>
            </Form>
          )}
          </Formik>
          
        </div>
    </div>
  )
}

export default OrderPage