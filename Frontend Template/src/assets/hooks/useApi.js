import { useParams } from "react-router-dom";
import useAxios from "./useAxios";

const useApi = () => {
  const { id } = useParams();
  const axiosClient = useAxios();

  /** get localstorage value */
  const getLocalStorageValue = () => {
    return {
      token: localStorage.getItem("token")
        ? localStorage.getItem("token")
        : null,
      email: localStorage.getItem("email")
        ? localStorage.getItem("email")
        : null,
      role: localStorage.getItem("role") ? localStorage.getItem("role") : null,
    };
  };

  /** calling login api */

  const login = async (data) => {
    const response = await axiosClient.apiClient("POST", "login", data);
    if (response) {
      if (response?.data?.success === true) {
        return response;
      }
    }
    return null;
  };
  /** calling login api */

  
  /** calling category api */
  const getAllCategory = async (keyword, pageNumber) => {
    const response = await axiosClient.apiClient(
      "GET",
      `category/all?keyword=${keyword}&page=${pageNumber}`
    );

    console.log(response, "response from all category");
  };
  /** calling category api */

  return {
    login,
    getAllCategory,
    getLocalStorageValue,
  };
};

export default useApi;
