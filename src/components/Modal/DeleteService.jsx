import { Dialog,DialogPanel,DialogTitle } from '@headlessui/react';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Loading from '../../pages/Loading';
import ErrorPage from '../../pages/ErrorPage';

const DeleteService = ({isDelete, closeDeleteModal, service}) => {

    const {_id:id} = service || {};

    const axiosSecure = useAxiosSecure();

    const queryClient= useQueryClient();

    const {isPending,isError,mutateAsync,reset}= useMutation({
   
      mutationFn: async (id) => await axiosSecure.delete(`/delete-service/${id}`),
      onSuccess: () => {

        toast.success('Service is deleted');
        reset();
        queryClient.invalidateQueries(['allServices']);

      }


    })


    if(isPending)
    {
      return <Loading></Loading>
    }

    if(isError)
    {
      return <ErrorPage></ErrorPage>
    }

    const handleDelete = async () => {
 
        await mutateAsync(id)

        closeDeleteModal();

        //console.log(result);

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