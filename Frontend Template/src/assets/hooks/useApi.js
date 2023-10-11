import { useParams } from "react-router-dom";
import useAxios from "./useAxios";

const useApi = () => {
    const { id } = useParams();
    const axiosClient = useAxios();

    /** calling login api */
    
     const login = async (data) => {
        const response = await axiosClient.apiClient("POST","login",data);
        if(response){
            if(response?.data?.success===true){
                return response;
            }
        }
      }
    /** calling login api */


     return {
        login
     }
}

export default useApi;