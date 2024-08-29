import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { axiosFetch } from '../../utils';
import { CheckoutForm } from '../../components';
import './Pay.scss';

const stripePromise = loadStripe("pk_test_51Pr2Ed06OtPAi7rBF4tUMsw31cb7863QALRqR5k0KZrqN5CexL6agO244UxdnljCcdtgM1C3VvUwnffbcOviXKcR00Re3IdmBQ");

const Pay = () => {
  const { _id } = useParams();
  const [clientSecret, setClientSecret] = useState('');
  
  useEffect(() => {
    ( async () => {
      try {
        const { data } = await axiosFetch.post(`/orders/create-payment-intent/${_id}`);
        setClientSecret(data.clientSecret);
      }
      catch({response}) {
        console.log(response);
      }
    })();
    window.scrollTo(0, 0)
  }, []);

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

 return (
    <div className='pay'>
      <h2>Pay Securely with Stripe</h2>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}

export default Pay
