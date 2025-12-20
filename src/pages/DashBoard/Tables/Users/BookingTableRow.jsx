import React from 'react';

const BookingTableRow = ({booking}) => {
 
   console.log(booking);
   

    return (

      <tr>
       
        <td>
          
          <div className="font-bold">{booking?.serviceName}</div>      
        </td>
       
        <td>
          {booking?.serviceCategory}
          
          <br />
        </td>

        <td>{booking?.decorationCost}</td>
        <td>
          <button className="btn bg-red-200 rounded-lg">Cancel</button>
        </td>
        <td>
          <button className="btn bg-green-400 rounded-lg">Update</button>
        </td>

        <td>
          <button className="btn rounded-lg">Pay</button>
        </td>
      </tr>

   
       
    


    );
};

export default BookingTableRow;