import { BehaviorSubject } from "rxjs";
import useHandleResponse from "../utilities/handle-response";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

export const authenticationService = {
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
};

export function useLogin() {
  const handleResponse = useHandleResponse();

  const login = ({ email, password }) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };

    return fetch(`${process.env.REACT_APP_API_URL}/auth/login`, requestOptions)
      .then(handleResponse)
      .then((user) => {
        localStorage.setItem("currentUser", JSON.stringify(user));
        currentUserSubject.next(user);
        return user;
      })
      .catch((error) => console.log("erorr ", error));
  };

  return login;
}

export function useRegister() {
  const register = ({ name, email, password }) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    };

    return fetch(
      `${process.env.REACT_APP_API_URL}/auth/register`,
      requestOptions
    )
      .then((user) => {
        localStorage.setItem("currentUser", JSON.stringify(user));
        currentUserSubject.next(user);

        return user;
      })
      .catch(function (response) {
        console.log("response", response);
        // if (response) {
        //   enqueueSnackbar(response, {
        //     variant: "error",
        //   });
        // } else {
        //   enqueueSnackbar("Failed to Register", {
        //     variant: "error",
        //   });
        // }
      });
  };

  return register;
}

function logout() {
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
}
