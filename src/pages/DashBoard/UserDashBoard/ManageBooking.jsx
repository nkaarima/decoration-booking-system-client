import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import BookingTableRow from '../Tables/Users/BookingTableRow';
import useAuth from '../../../hooks/useAuth'
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Loading';

const ManageBooking = () => {

  const {user} = useAuth();

   const axiosSecure= useAxiosSecure();

   const {data: bookings = [], isLoading} = useQuery({
    
       queryKey:['bookings',user?.email],
       enabled: !!user?.email,
       queryFn: async () =>
       {
        const result= await axiosSecure.get(`/my-bookings/${user?.email}`)
        //console.log(result.data)
        return result.data
       }

   })

   if(isLoading)
   {
    return <Loading></Loading>
   }


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