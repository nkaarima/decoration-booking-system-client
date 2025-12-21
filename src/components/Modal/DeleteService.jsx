import { Dialog,DialogPanel,DialogTitle } from '@headlessui/react';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const DeleteService = ({isDelete, closeDeleteModal, data}) => {

    const {_id:id} = data || {};

    const axiosSecure = useAxiosSecure();

    const handleDelete = async () => {
 
        const result= await axiosSecure.delete(`/delete-service/${id}`);

        closeDeleteModal();

        console.log(result);

    }
    return (
        <div>
             <Dialog open={isDelete} as="div" className="relative z-10 focus:outline-none" onClose={closeDeleteModal}>
                                
                                  <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                     
                                        <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                          <DialogTitle
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                          >
                                            Are you sure you want to delete?
                                          </DialogTitle>
        
                        
                                          <div className="mt-4">
                                            <button onClick={handleDelete}
                                              type="submit"
                                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            >
                                            Delete
                                            </button>
                        
                                            
                                          </div>
                        
                                        </DialogPanel>          
                                      
                                    </div>
                                  </div>
                        
                                </Dialog>
        </div>
    );
};

export default DeleteService;