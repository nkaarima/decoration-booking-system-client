import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import ReviewBookingRow from '../Tables/Admin/ReviewBookingRow';

const ReviewBooking = () => {

    const axiosSecure=useAxiosSecure();
    const [bookings,setBookings] = useState([]);

    axiosSecure.get('/all-bookings')
    .then(data => {
         setBookings(data.data);
    })
    return (
        <div>
             <table className="table">
   

        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Service Category</th>
            <th>Cost</th>
            <th>Payment Status</th>
        </tr>
        </thead>
        <tbody>

           {
            bookings.map(booking => <ReviewBookingRow key={booking._id} booking={booking}></ReviewBookingRow>)
           }
   
       
    </tbody>
    
  </table>
        </div>
    );
};

export default ReviewBooking;