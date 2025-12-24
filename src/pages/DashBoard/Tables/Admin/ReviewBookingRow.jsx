import React from 'react';

const ReviewBookingRow = ({booking}) => {

    const {customer,location,serviceCategory,decorationCost,isPaid} = booking || {};
    return (
          <tr>
       
         <td>
          
          <div>{customer.name}</div>      
        </td>
       
        <td>
          {customer.email}
          
          <br />
        </td>

        <td>{location}</td>

             
         <td>
          
         {serviceCategory}
        </td>

        <td>
          
         {decorationCost}
        </td>

         <td>
          
         {isPaid ? <span>Paid</span> : <span>Pay</span> }
        </td>

      </tr>
    );
};

export default ReviewBookingRow;