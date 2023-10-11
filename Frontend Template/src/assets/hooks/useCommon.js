const useCommon = () => {

    const tryLogin = (response) => {
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("email",response.data.user.email);
        localStorage.setItem("token",response.data.user.role);
    }

    return {tryLogin}

}

export default useCommon;
