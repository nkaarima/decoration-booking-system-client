import React, { useState } from 'react';
import PaymentModal from '../../../../components/Modal/PaymentModal';

const BookingTableRow = ({booking}) => {
 
   console.log(booking);

   const [isOpen,setIsOpen] = useState(false);
   const closeModal = () => {
      
      setIsOpen(false)
   }
   

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
          <button onClick={() => setIsOpen(true)} className="btn rounded-lg">Pay</button>
          <PaymentModal isOpen={isOpen} closeModal={closeModal} booking={booking}></PaymentModal>
        </td>
          
      </tr>

   
       
    


    );
};

export default BookingTableRow;