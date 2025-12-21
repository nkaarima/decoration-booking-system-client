import { Dialog,DialogPanel,DialogTitle } from '@headlessui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const EditService = ({isEdit,closeEditModal,data}) => {
    const {register, handleSubmit} = useForm()

    const {_id:id,serviceName,serviceCategory,cost,unit} = data || {};

    const axiosSecure= useAxiosSecure();

    const handleFormSubmit = async (data) => 
    {
      
         console.log('The data is here',data);

         const {serviceName,serviceCategory,price,unit} = data;

         const dataToBeUpdated = {
            serviceName,
            serviceCategory,
            price:Number(price),
            unit
         }

         await axiosSecure.put(`edit-service/${id}`,dataToBeUpdated);

         toast.success('Edit is saved');

         closeEditModal();
            
         
    }
    return (
        <div>
             <Dialog open={isEdit} as="div" className="relative z-10 focus:outline-none" onClose={closeEditModal}>
                    
                      <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                         
                            <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                              <DialogTitle
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                              >
                                Edit Service Info
                              </DialogTitle>

                              <form onSubmit={handleSubmit(handleFormSubmit)}>

            
                              <div className="mt-2">
                                <label>Name: </label>
                               <input type="text" className="text-sm text-gray-500"
                               
                                 defaultValue={serviceName}

                                 {...register('serviceName')}
                               
                               ></input>
                                 
                                
                              </div>
            
                              <div className="mt-2">
                                 <label>Category: </label>
                                <input type="text" className="text-sm text-gray-500"
                               
                                 defaultValue={serviceCategory}

                                 {...register('serviceCategory')}
                               
                               ></input>
                               
                              </div>
            
                               <div className="mt-2">
                                 <label>Price: </label>
                                <input type="text" className="text-sm text-gray-500"
                               
                                 defaultValue={cost}

                                 {...register('price')}
                               
                               ></input>
                              </div>
            
                               <div className="mt-2">
                                <label>Unit: </label>
                                 <input type="text" className="text-sm text-gray-500"
                               
                                 defaultValue={unit}

                                 {...register('unit')}
                               
                               ></input>
                              </div>
            
            
                              <div className="mt-4">
                                <button
                                  type="submit"
                                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                >
                                 Edit
                                </button>
            
                                
                              </div>
            
                               </form>
                            </DialogPanel>          
                          
                        </div>
                      </div>
            
                    </Dialog>
        </div>
    );
};

export default EditService;