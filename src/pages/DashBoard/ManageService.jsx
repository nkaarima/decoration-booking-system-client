import React from 'react';
import { useForm } from 'react-hook-form';
import { imageUpload } from '../../utility';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';
import useAuth from '../../hooks/useAuth';

const ManageService = () => {

    const {user} = useAuth();

    const {register,handleSubmit,reset} = useForm();

    const axiosInstance = useAxiosSecure();

    const handleFormSubmit = async (data) => {

         console.log(data);

         const {serviceName, serviceImage, cost,unit, serviceCategory,description,email} =data;

         const imageFile= serviceImage[0];
         
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
          
        axiosInstance.post('/service', decorationService)
        .then(data => {
            console.log(data.data);
            toast.success('Saved to database');
            reset();
        })

        .catch(error => {

             toast.error(error.message);
        })

         
    }

    return (
      
        <div className="card bg-base-100 w-full mx-auto mt-25 max-w-sm shrink-0 shadow-2xl">
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
                         
                           <button className="btn btn-neutral mt-4 text-small">Create Package</button>

                </form>
   
       </div>
    );
};

export default ManageService;