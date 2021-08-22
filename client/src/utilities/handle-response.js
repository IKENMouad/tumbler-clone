import { authenticationService } from "../services/auth.service";

const useHandleResponse = () => {
  const handleResponse = (response) => {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if ([401, 403].indexOf(response.status) !== -1) {
          authenticationService.logout();
          console.log("User Unauthorized");
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      return data;
    });
  };

  return handleResponse;
};

export default useHandleResponse;
