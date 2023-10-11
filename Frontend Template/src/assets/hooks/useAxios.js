import axios from "axios";



const useAxios = () => {
  const axiosConfig = {baseURL: "http://localhost:4000/api/v1/"};
  const api = axios.create(axiosConfig);


  api.interceptors.request.use(axiosConfig => {
    return axiosConfig;
  })

  api.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  )

  const apiClient = (method, url, body, headers) => {
    return api
      .request({method, url, data: body, headers})
      .then(response => {
        return response || null;
      })
      .catch(error => {
        console.log(`${error}`);
        if(error.message==='Network Error'){
          console.log(error);   
        }else if(error.message==="Request failed with status code 401"){
         alert("Protected page.Please login with valid user");
        }
        return null;
      });
  }

  return {apiClient};
};

export default useAxios;
