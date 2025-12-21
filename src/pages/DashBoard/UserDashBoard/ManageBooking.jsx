import React , {useState } from 'react';
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import BookingTableRow from '../Tables/Users/BookingTableRow';

const ManageBooking = () => {

   const {user} = useAuth();
   const axiosSecure= useAxiosSecure();

   const [bookings, setBookings] = useState([]);
  
    axiosSecure.get(`/my-bookings/${user?.email}`)
    .then(res => {
    console.log('The data is',res.data);
    setBookings(res.data);
  
   })


    return (
        <div className="overflow-x-auto w-11/12 mx-auto mt-3.5">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Service Name</th>
        <th>Service Category</th>
        <th>Price</th>
        <th>Cancel</th>
        <th>Update</th>
        <th>Pay</th>
      </tr>
    </thead>
    <tbody>

        {bookings.map(booking => <BookingTableRow key={booking._id} booking={booking}></BookingTableRow>)}
     

    </tbody>
    
  </table>
</div>
    );
};

export default ManageBooking;