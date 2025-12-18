import axios from "axios";

export const imageUpload = async (imageFile) => {
    const formData = new FormData();
    formData.append('image',imageFile);
    const result= await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imageBB}`,formData);
    
     return result?.data?.data.display_url;


}

export const saveOrUpdateUser = async (userData) => {
  

    const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/user`,userData) ;

    return data;


}