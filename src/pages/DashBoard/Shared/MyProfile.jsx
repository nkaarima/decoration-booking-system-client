import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';
import Loading from '../../Loading';

const MyProfile = () => {
    const {user} = useAuth();
    const [role,roleLoading] = useRole();
    console.log('The role is',role);
    //console.log(user);

    if(roleLoading)
    {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="flex justify-center mt-25">
                <img src={user?.photoURL} className="w-25 h-25 rounded-[25px]"></img>
            </div>

             <div className="text-small text-center space-y-4 mt-3">
                 <p>Name: {user?.displayName}</p>
                 <p>Email: {user?.email}</p>
                 <p>Role: {role}</p>
             </div>
        </div>
    );
};

export default MyProfile;