import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import MakeUserDecoratorRow from '../Tables/Admin/MakeUserDecoratorRow';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Loading';


const MakeUserDecorator = () => {
    const axiosSecure= useAxiosSecure();

    const {data : customers = [], isLoading} = useQuery({
    
        queryKey:['customers'],
        queryFn: async () => {

            const result =await axiosSecure.get('/all-customers')
            return result.data;
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
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
        </tr>
        </thead>
        <tbody>

            {
                customers.map(customer => <MakeUserDecoratorRow key={customer._id} customer={customer}></MakeUserDecoratorRow>)
            }
   
       
    </tbody>
    
  </table>
        </div>
    );
};

export default MakeUserDecorator;