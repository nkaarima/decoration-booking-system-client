import React, { useState } from 'react';
import EditService from '../../../../components/Modal/EditService';
import DeleteService from '../../../../components/Modal/DeleteService';


const DecorationTableRow = ({service}) => {

  

    const [isEdit,setIsEdit] = useState(false);

    const [isDelete,setIsDelete] = useState(false);

    const closeEditModal = () => {
        setIsEdit(false);
    }

    const closeDeleteModal = () => {

         setIsDelete(false);
    }
    return (
         <tr>
       
         <td>
          
          <div>{service?.serviceName}</div>      
        </td>
       
        <td>
          {service?.serviceCategory}
          
          <br />
        </td>

        <td>{service?.cost}</td>
        <td>{service?.unit}</td>

        <td>
          <button onClick={() => setIsEdit(true)} className="btn bg-green-200 rounded-lg">Update</button>
           <EditService isEdit={isEdit} closeEditModal= {closeEditModal} service={service} />
        </td>

        <td>
          <button onClick={()=> setIsDelete(true)} className="btn bg-secondary rounded-lg">Delete</button>
          <DeleteService isDelete={isDelete} closeDeleteModal={closeDeleteModal} service={service}></DeleteService>
        </td>
          
      </tr>
    );
};

export default DecorationTableRow;