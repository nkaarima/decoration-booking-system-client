import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import { imageUpload } from '../../utility';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router';

const SignUp = () => {

    const {signUp, updateUser,googleLogin} = use(AuthContext);
     const navigate= useNavigate();

     const {register, handleSubmit, formState:errors} = useForm();

     const handleFormSubmit = async (data) => {

         try{

           console.log(data);

          const {name,email,image,password} = data;
          const imageFile= image[0];

          const imagePath= await imageUpload(imageFile);

          console.log('Image Path is:',imagePath);

          await signUp(email,password);
          
          await updateUser(name,imagePath)
           toast.success('SignUp is successfull')
            navigate('/') 
            
           } catch(error) {

                toast.error(error.message)
            }

    }

    const handleGoogleLogin = () => {
    
             googleLogin()
             .then(() => {
                 
                navigate('/');
             })
    
             .catch(error => {
                toast.error(error.message);
             })
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
                </form>
                
                 <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                                             <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                             Login with Google
                                     </button>
                 
                 
                                     <p className="text-center mt-2.5">Already have an account?<Link to="login" className="text-blue-500">Login</Link></p>
        </div>
    );
};

export default SignUp;