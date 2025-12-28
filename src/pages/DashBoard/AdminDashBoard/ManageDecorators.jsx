import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Loading from '../../Loading';
import DecoratorInfoTableRow from '../Tables/Admin/DecoratorInfoTableRow';


const ManageDecorators = () => {

    const {register, handleSubmit,reset} = useForm();
    const axiosSecure= useAxiosSecure();
    const queryClient= useQueryClient();

    const {data: decorators = [], isLoading} = useQuery({

        queryKey:['decorator-account'],
        queryFn: async () => {
            const result= await axiosSecure.get('/all-decorators')
            return result.data
        } 
    })

    const {mutateAsync} = useMutation({

        mutationFn: async (decoratorInfo) => await axiosSecure.post('/create-decorator',decoratorInfo),
        onSuccess: () => {
            toast.success('Data has been saved')
            queryClient.invalidateQueries(['decorator-account'])

        }
    })

    const handleFormSubmit = async (data) => {
      
         //console.log(data);

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

         try{
            await mutateAsync(decoratorInfo)
            reset();
         } catch(error)
         {
            toast.error(error);
         }

    }

    if(isLoading)
    {
        return <Loading></Loading>
    }


    return (
        <div>
              <div className="card bg-base-100 shrink-0 shadow-2xl mt-26 w-full mx-auto mb-8 max-w-sm ">
              <h1 className="text-large font-bold p-2 text-center">Create Decorators</h1>
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
                         
                           <button className="btn bg-primary mt-4 text-small">Save Decorator Info</button>

                </form>
   
            </div>

            <div className="overflow-x-auto">
                <table className="table">
             
                        
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Speciality</th>
                    <th>Skills</th>
                    <th>Rating</th>
                    <th>AccountStatus</th>
                    
                </tr>
                </thead>
     
            <tbody>

                 {decorators.map(decorator => <DecoratorInfoTableRow key={decorator._id} decorator={decorator} />)}
            </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageDecorators;