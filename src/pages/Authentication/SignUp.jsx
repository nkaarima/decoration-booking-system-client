import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import { imageUpload } from '../../utility';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router';

const SignUp = () => {

    const {signUp, updateUser} = use(AuthContext);
     const navigate= useNavigate();

     const {register, handleSubmit, formState:errors} = useForm();

     const handleFormSubmit = async (data) => {

         try{

           console.log(data);

          const {name,email,image,password} = data;
          const imageFile= image[0];

          const imagePath= await imageUpload(imageFile);

          console.log('Image Path is:',imagePath);

          const result = await signUp(email,password);
          
          await updateUser(name,imagePath)
           toast.success('SignUp is successfull')
            navigate('/') 
            
           } catch(error) {

                toast.error(error.message)
            }

    }
 

    return (
        
             <div className="card bg-base-100 w-full max-w-sm  mx-auto shrink-0 shadow-2xl">
                    <h1 className="text-large font-bold text-center">SignUp</h1>
                <form onSubmit={handleSubmit(handleFormSubmit)} className="card-body">

                    <fieldset className="fieldset">

                       <label className="label">Name</label>

                    <input type="text" className="input" 
                          placeholder="Full Name"
                           {...register('name', {required:true})} />
                    
                    {errors.email && <p className="text-red-400">Please provide your email</p>}

                    <label className="label">Email</label>

                    <input type="email" className="input" 
                          placeholder="Email"
                           {...register('email', {required:true})} />
                    
                    {errors.email && <p className="text-red-400">Please provide your email</p>}

                    <label className="label">Password</label>
                    <input type="password" className="input" 
                           placeholder="Password"
                             {...register('password', {required:true, minLength:6})} />
                    
                    {errors.password && <p className="text-red-400">Password must be atleast 6 characters long</p>}
                        

                    <label className="label">Profile Image</label>
                    <input type="file" className="input" placeholder="Image"
                      {...register('image')} />

                    <button className="btn btn-neutral mt-4">SignUp</button>
                    </fieldset>

                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
                
           


        </div>
    );
};

export default SignUp;