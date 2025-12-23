import React, { useState } from 'react';
import PaymentModal from '../../../../components/Modal/PaymentModal';
import CancelBooking from '../../../../components/Modal/CancelBooking';

const BookingTableRow = ({booking}) => {
 
   console.log(booking);

   const [isOpen,setIsOpen] = useState(false);
   const [isCancel,setIsCancel] = useState(false);
   const closeModal = () => {
      
      setIsOpen(false)
   }

   const closeCancelModal = () => {
     
       setIsCancel(false);
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
          { booking.isPaid ? <button className="btn bg-red-200 rounded-lg">Cannot be Cancelled</button>
             : <>
             
             <button onClick={() => setIsCancel(true)} className="btn bg-red-200 rounded-lg">Cancel</button>
             <CancelBooking isCancel={isCancel} closeCancelModal={closeCancelModal} booking={booking}></CancelBooking>
                         
             </>
          }
          
        </td>

        <td>
           {booking.isPaid ? 
           
           <button className="btn rounded-lg">Paid</button> :  <>
           
            <button onClick={() => setIsOpen(true)} className="btn rounded-lg">Pay</button>
            <PaymentModal isOpen={isOpen} closeModal={closeModal} booking={booking}></PaymentModal>
           
           </>
            }
          

           
          
        </td>
          
      </tr>

   
       
    


    );
};

export default BookingTableRow;