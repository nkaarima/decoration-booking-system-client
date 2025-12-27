import React from 'react';

const TodayProjectRow = ({project}) => {
     const {customer,serviceDate,location} = project;
    
     return (
        <tr>
            <td>
              {customer.name}
            </td>

            <td>
               
              {serviceDate}
             
            </td>

            <td>
               
            {location}
             
            </td>
        </tr>
    );
};

export default TodayProjectRow;