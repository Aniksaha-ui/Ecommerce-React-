import { useParams } from "react-router-dom";
import useAxios from "./useAxios";

const useApi = () => {
  const { id } = useParams();
  const axiosClient = useAxios();

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
  };
};

export default useApi;
