import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const PaymentModal = ({booking,isOpen,closeModal}) => {

    const {serviceName,decorationCost,customer,decorationServiceId,location,serviceDate}= booking || {};

    const paymentInfo = {
       customer,
       serviceName,
       decorationCost,
       decorationServiceId,
       location,
       serviceDate

    }

    const axiosSecure=useAxiosSecure();

    const handlePayment =  async () => {

         closeModal();

        const {data} = await axiosSecure.post('/create-checkout-session', paymentInfo)
         
        window.location.href= data.url;
        
    }
   
    return (
        <div>
             <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeModal}>
                    
                      <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                         
                            <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                              <DialogTitle
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                              >
                                Review the decoration service before booking
                              </DialogTitle>
                             
                               <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                  {serviceName}
                                </p>
                              </div>
            
                              <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                  Please pay BDT {decorationCost}
                                </p>
                              </div>
                       
                              <div className="mt-4">
                                <button
                                  type="button"
                                  onClick={handlePayment}
                                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                >
                                  Pay
                                </button>
            
                                
                              </div>
            
                            </DialogPanel>          
                          
                        </div>
                      </div>
            
                    </Dialog>
        </div>
    );
};

export default PaymentModal;