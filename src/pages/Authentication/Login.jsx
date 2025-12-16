import React from 'react';

const Login = () => {
    return (
        
          <div className="card bg-base-100 w-full max-w-sm  mx-auto shrink-0 shadow-2xl">
                    <h1 className="text-2xl font-bold text-center">SignUp</h1>
                <form onSubmit={handleSubmit(handleFormSubmit)} className="card-body">

                    <fieldset className="fieldset">
                    <label className="label">Email</label>

                    <input type="email" className="input" 
                          placeholder="Email"
                           {...register('email', {required:true})} />
                    
                    
                    <label className="label">Password</label>
                    <input type="password" className="input" 
                           placeholder="Password"
                             {...register('password', {required:true, minLength:6})} />
                    
                 
                        

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

export default Login;