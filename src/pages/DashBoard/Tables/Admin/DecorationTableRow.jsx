import React, { useState } from 'react';
import EditService from '../../../../components/Modal/EditService';
import DeleteService from '../../../../components/Modal/DeleteService';

const DecorationTableRow = ({data}) => {

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
          
          <div>{data?.serviceName}</div>      
        </td>
       
        <td>
          {data?.serviceCategory}
          
          <br />
        </td>

        <td>{data?.cost}</td>
        <td>{data?.unit}</td>

        <td>
          <button onClick={() => setIsEdit(true)} className="btn bg-green-200 rounded-lg">Update</button>
           <EditService isEdit={isEdit} closeEditModal= {closeEditModal} data={data} />
        </td>

        <td>
          <button onClick={()=> setIsDelete(true)} className="btn bg-red-500 rounded-lg">Delete</button>
          <DeleteService isDelete={isDelete} closeDeleteModal={closeDeleteModal} data={data}></DeleteService>
        </td>
          
      </tr>
    );
};

export default DecorationTableRow;