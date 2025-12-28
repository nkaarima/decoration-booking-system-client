import React from 'react';

const DecoratorInfoTableRow = ({decorator}) => {

    const {name,email,speciality,skills,rating_num,accountStatus} = decorator
    return (
       <tr>

        <td>
            {name}
        </td>

         <td>
            {email}
        </td>

        <td>
            {speciality}
        </td>

        <td>
            {skills}
        </td>

        <td>
            {rating_num}
        </td>

        <td>
            {accountStatus}
        </td>
       </tr>
    );
};

export default DecoratorInfoTableRow;