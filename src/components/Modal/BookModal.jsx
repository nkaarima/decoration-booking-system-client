import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const BookModal = ({serviceData,closeModal, isOpen}) => {

    const {_id: decorationServiceId,cost:decorationCost,serviceName,serviceCategory} = serviceData || {};

    const {register, handleSubmit} = useForm();

    const {user} = useAuth();

    const axiosSecure= useAxiosSecure();


    const handleFormSubmit =  async (data) => {

        console.log(data);
        closeModal();

        const {bookingDate,location} = data;

        const serviceDate= new Date(bookingDate);

        console.log(data);
       
         const bookingData= {
            
           decorationServiceId,
           serviceName,
           serviceCategory,
           decorationCost,
            serviceDate,
           location,
           customer: {
             name: user?.displayName,
             email: user?.email
           }

         }

         await axiosSecure.post('/my-bookings',bookingData)
         .then(res => {
           
            if(res.data.insertedId)
            {
               toast.success('Booking has been placed')
            }
         })

         .catch(error => {
          toast.error(error.message)
         })
       
      
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
                      Name: {user?.displayName}
                    </p>
                  </div>

                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Email: {user?.email}
                    </p>
                  </div>

                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Service Name: {serviceName}
                    </p>
                  </div>

                   <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Category: {serviceCategory}
                    </p>
                  </div>

                   <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Price: BDT {decorationCost}
                    </p>
                  </div>

                    <form onSubmit={handleSubmit(handleFormSubmit)}>

                    <div className="mt-2 text-gray-500">
                    <label>Date</label>
                    <input type="date"
                     {...register('bookingDate')} ></input>
                  </div>

                  <div className="mt-2 text-gray-500">
                    <label>Location</label>
                    <input type="text" className="border-2 ml-2.5 rounded-lg"
                    {...register('location')}></input>
                  </div>


                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Place booking
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

export default BookModal;