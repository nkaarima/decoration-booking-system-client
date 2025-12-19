import { useEffect, useState } from "react";
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure";
import useDataLoading from "./useDataLoading";

const useRole =  () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [role, setRole] = useState(null);
    const {dataLoading,setDataLoading}= useDataLoading();

    useEffect(() => {
    
         axiosSecure.get(`/user/role/${user?.email}`)
            .then(data => {
                const userRole= data.data.role;
                setRole(userRole);
                setDataLoading(false);
            })
  



    },[axiosSecure, user?.email,setDataLoading])

    
     return [role,dataLoading]

}

export default useRole;