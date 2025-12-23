import React from 'react';

const PaymentHistoryRow  = ({payment}) => { 
    return (
         <tr>
       
        <td>
          
          <div className="font-bold">{payment?.transactionId}</div>      
        </td>
       
        <td>
          {payment?.name}
          
          <br />
        </td>

        <td>{payment?.category}</td>
        <td>{payment?.price}</td>
          
      </tr>   
       
    );
};

export default PaymentHistoryRow ;