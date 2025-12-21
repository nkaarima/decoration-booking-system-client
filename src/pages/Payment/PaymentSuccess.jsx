import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const PaymentSuccess = () => {

    const [searchParams] = useSearchParams();

    const sessionId=searchParams.get('session_id');

    const axiosSecure=useAxiosSecure();

    useEffect(() => {
        
          if(sessionId)
         {
             axiosSecure.post('/payment-success', {sessionId})
         }
   

    }, [axiosSecure,sessionId])


    return (
        <div>
             <h1 className="text-large font-bold text-center">Payment Successful! Thank You</h1>
        </div>
    );
};

export default PaymentSuccess;