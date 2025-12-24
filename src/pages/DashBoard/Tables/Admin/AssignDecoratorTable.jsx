import React from 'react';
import AssignDecoratorTableRow from './AssignDecoratorTableRow';

const AssignDecoratorTable = ({paidUser}) => {

    return (
        <div>
       <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Service Date</th>
        <th>Service Category</th>
        <th>Location</th>
        <th>Decorators</th>
      </tr>
    </thead>
    <tbody>

        {paidUser.map(user=> <AssignDecoratorTableRow key={user._id} user={user}></AssignDecoratorTableRow>)}
     

    </tbody>
    
  </table>
        </div>
    );
};

export default AssignDecoratorTable;