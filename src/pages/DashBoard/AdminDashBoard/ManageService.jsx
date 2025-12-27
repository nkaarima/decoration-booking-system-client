import React from 'react';
import { useForm } from 'react-hook-form';
import { imageUpload } from '../../../utility';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthContext';
import useAuth from '../../../hooks/useAuth';
import DecorationTableRow from '../Tables/Admin/DecorationTableRow';
import Loading from '../../Loading';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import ErrorPage from '../../ErrorPage';


const ManageService = () => {

    const {user} = useAuth();

    const {register,handleSubmit,reset} = useForm();

    const axiosInstance = useAxiosSecure();

    const queryClient = useQueryClient();

    const {isError,mutateAsync,reset:mutationReset} = useMutation({
 
      mutationFn: async (decorationService) => await axiosInstance.post('/service', decorationService),
      onSuccess: data => {

         console.log(data);
         toast.success('Saved to database')
         mutationReset()
         queryClient.invalidateQueries(['allServices'])
      
        },

        onError:error => {
          toast.error(error)
          

        }
  })

  

    const handleFormSubmit = async (data) => {

         //console.log(data);

         const {serviceName, serviceImage, cost,unit, serviceCategory,description,email} =data;

         const imageFile= serviceImage[0];
         
        try{

          const image= await imageUpload(imageFile);

        const decorationService={
            serviceName, 
            image, 
            cost:Number(cost) ,
            unit,
             serviceCategory,
             description,
             email
        }
          
         await mutateAsync(decorationService)
         reset();
        
        } catch(error) {

             toast.error(error.message);
        }

         
    }


    const {data:serviceData =[],isLoading} = useQuery({

       queryKey:['allServices'],
       queryFn: async () =>  {

          const result =await axiosInstance.get('/all-services')
          return result.data
       }
    })
      
      if(isLoading)
      {
        return <Loading></Loading>
      }

      if(isError)
      {
        return <ErrorPage></ErrorPage>
      }
    return (
      
        <div>
            <div className="card bg-base-100 shrink-0 shadow-2xl w-full mx-auto mb-8 max-w-sm ">
              <h1 className="text-large font-bold p-2 text-center">Create Decoration Service</h1>
                <form onSubmit={handleSubmit(handleFormSubmit)} className="card-body">
                    <fieldset className="fieldset grid grid-cols-1 md:grid-cols-2 gap-2 text-small">

                            <label className="label">Service Name</label>
                            <input type="text" className="input"
                            {...register('serviceName')}
                            
                            />

                            <label className="label">Service Image</label>
                            <input type="file" className="input"
                            {...register('serviceImage')} />

                            <label className="label">Cost</label>
                            <input type="text" className="input"
                            
                             {...register('cost')}/>

                             <label className="label">Unit</label>
                             <input type="text" className="input"
                              {...register('unit')}
                             />

                            <label className="label">Service Category</label>
                            <input type="text" className="input"
                             {...register('serviceCategory')} />

                            <label className="label">Description</label>
                            <input type="text" className="input"
                             {...register('description')} />

                            <label className="label">Created By email</label>
                            <input type="text" className="input" defaultValue={user?.email} disabled
                              {...register('email')} />
                    </fieldset>
                         
                           <button className="btn bg-primary mt-4 text-small">Create Package</button>

                </form>
   
            </div>

             <div>
                <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Service Name</th>
        <th>Service Category</th>
        <th>Price</th>
        <th>Unit</th>
        <th>Update</th>
        <th>Cancel</th>
      </tr>
    </thead>
    <tbody>

        {serviceData.map(service => <DecorationTableRow key={service._id} service={service} />)}
     

    </tbody>
    
  </table>
             </div>
        </div>

    );
};

export default ManageService;