import React, { useState } from 'react';
import EditService from '../../../../components/Modal/EditService';

const DecorationTableRow = ({data}) => {

    const [isEdit,setIsEdit] = useState(false);

    const closeEditModal = () => {
        setIsEdit(false);
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
          <button className="btn bg-red-500 rounded-lg">Cancel</button>
        </td>
          
      </tr>
    );
};

export default DecorationTableRow;