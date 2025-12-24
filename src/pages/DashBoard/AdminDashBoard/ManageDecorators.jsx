import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';


const ManageDecorators = () => {

    const {register, handleSubmit,reset} = useForm();
    const axiosSecure= useAxiosSecure();

    const handleFormSubmit = (data) => {
      
         console.log(data);

         const {name,email,speciality,skills,experience,rating} = data

         const decoratorInfo = {         
                name,
                email,
                speciality,
                skills,
                experience_years:Number(experience),
                rating_num:Number(rating),
                accountStatus:'pending'         

         }
   
         axiosSecure.post('/create-decorator',decoratorInfo)
         .then(data => {
            if(data.data.insertedId)
            {
               toast.success('Data is saved');
            }
            
         })
         reset();

    }


    return (
        <div>
              <div className="card bg-base-100 shrink-0 shadow-2xl mt-26 w-full mx-auto mb-8 max-w-sm ">
              <h1 className="text-large font-bold p-2 text-center">Create Decoration Service</h1>
                <form onSubmit={handleSubmit(handleFormSubmit)} className="card-body">
                    <fieldset className="fieldset grid grid-cols-1 md:grid-cols-2 gap-2 text-small">

                            <label className="label">Name</label>
                            <input type="text" className="input"
                            {...register('name')}/>

                            <label className="label">Email</label>
                            <input type="text" className="input"
                            {...register('email')}/>

        
                            <label className="label">Speciality</label>
                            <input type="text" className="input"
                            
                             {...register('speciality')}/>

                             <label className="label">Skills</label>
                             <input type="text" className="input"
                              {...register('skills')}/>

                               <label className="label">Experience years</label>
                             <input type="text" className="input"
                              {...register('experience')} />

                               <label className="label">Rating</label>
                             <input type="text" className="input"
                              {...register('rating')} />
                           

                            
                    </fieldset>
                         
                           <button className="btn btn-neutral mt-4 text-small">Save Decorator Info</button>

                </form>
   
            </div>
        </div>
    );
};

export default ManageDecorators;