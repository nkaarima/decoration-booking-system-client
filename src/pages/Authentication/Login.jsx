import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router';

const Login = () => {

   const {register, handleSubmit} = useForm();

   const {login} = use(AuthContext);

   const navigate=useNavigate();

   const handleFormSubmit = (data) => {
  
     const {email,password} = data;

     login(email,password)
     .then(() => {

         toast.success('Login successful');
         navigate('/');
     })
     .catch(error => {
         
         toast.error(error.message);
     })

   }
  

    return (
        
          <div className="card bg-base-100 w-full max-w-sm  mx-auto shrink-0 shadow-2xl">
                    <h1 className="text-large font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit(handleFormSubmit)} className="card-body">

                    <fieldset className="fieldset">
                    <label className="label">Email</label>

                    <input type="email" className="input" 
                          placeholder="Email"
                           {...register('email')} />
                    
                    
                    <label className="label">Password</label>
                    <input type="password" className="input" 
                           placeholder="Password"
                             {...register('password')} />
                    

                    <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>

                    <p>New to this place?<Link to="signup">Signup</Link></p>
                </form>


        </div>
    );
};

export default Login;