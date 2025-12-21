import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import React from 'react';
import { Link } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const CancelBooking = ({isCancel,closeCancelModal, booking}) => {
    
    const axiosSecure= useAxiosSecure();
 
    const cancelBooking = async () => {
   
      const id= booking._id
      console.log(id);
      await axiosSecure.delete(`/cancel-booking/${id}`)
      .then(res => {
         console.log('The response is',res);
      } )
      toast.success('Booking has been cancelled');
      closeCancelModal();

    }


    return (
        <div>
             <Dialog open={isCancel} as="div" className="relative z-10 focus:outline-none" onClose={closeCancelModal}>
                    
                      <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                         
                            <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                              <DialogTitle
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                              >
                               Are you sure you want to cancel?
                              </DialogTitle>

            
                              <div className="mt-4">
                                <button onClick={cancelBooking}
                                  type="submit"
                                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                >
                                  Cancel
                                </button>
            
                                
                              </div>
        
                            </DialogPanel>          
                          
                        </div>
                      </div>
            
                    </Dialog>
        </div>
    );
};

export default CancelBooking;