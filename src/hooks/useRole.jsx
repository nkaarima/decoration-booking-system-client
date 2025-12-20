import { useEffect, useState } from "react";
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure";


const useRole =  () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [role, setRole] = useState(null);
    const [roleLoading,setRoleLoading] = useState(true);

    useEffect(() => {

        if(!user?.email) return;
    
         axiosSecure.get(`/user/role/${user?.email}`)
            .then(data => {
                const userRole= data.data.role;
                setRole(userRole);
                setRoleLoading(false);
            })
  



    },[axiosSecure, user?.email])

    
     return [role,roleLoading]

}

export default useRole;