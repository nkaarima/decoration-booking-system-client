import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import PaymentHistoryRow from '../Tables/Users/PaymentHistoryRow';
import { useParams } from 'react-router';

const PaymentHistory = () => {

    const {email} = useParams();

    const axiosSecure= useAxiosSecure();
   
    console.log(email);

    const [paymentData,setPaymentData] = useState([]);



    useEffect(() => {

     axiosSecure.get(`/payment-info/${email}`)
     .then(data => {

          console.log(data.data);     
          setPaymentData(data.data)
     })



    }, [axiosSecure,email])



    return (
         <div className="overflow-x-auto w-11/12 mx-auto mt-3.5">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Transaction ID</th>
        <th>Service Name</th>
        <th>Service Category</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>

        {paymentData.map(payment=> <PaymentHistoryRow key={payment._id} payment={payment}></PaymentHistoryRow>)}
     

    </tbody>
    
  </table>
</div>
    );
};

export default PaymentHistory;