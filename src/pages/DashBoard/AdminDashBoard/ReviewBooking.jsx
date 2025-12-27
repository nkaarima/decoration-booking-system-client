import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import ReviewBookingRow from '../Tables/Admin/ReviewBookingRow';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Loading';

const ReviewBooking = () => {

    const axiosSecure=useAxiosSecure();
   
    const {data : bookings = [], isLoading} = useQuery({

        queryKey: ['booking'],
        queryFn: async () => {
            const result = await axiosSecure.get('/all-bookings')
            return result.data
        }

    })

    if(isLoading)
    {
        return <Loading></Loading>
    }

    
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