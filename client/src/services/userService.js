import useHandleResponse from '../utilities/handle-response';
import authHeader from '../utilities/auth-header';

export function useGetUsers() {
    const handleResponse = useHandleResponse();
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };
    const getUsers = () => {
        return fetch(
            `${process.env.REACT_APP_API_URL}/users`,
            requestOptions
        )
            .then(handleResponse)
            .catch(error => console.error('error', error))
             
    };

    return getUsers;
}

export function useAttachHashsToUser() {
    const handleResponse = useHandleResponse();
    const attachHashsToUser = ({ type, hashs }) => {
        const requestOptions = {
            method: 'POST',
            headers: authHeader(),
            body: JSON.stringify({ type, hashs })
        };
        return fetch(
            `${process.env.REACT_APP_API_URL}/users`,
            requestOptions
        )
            .then(handleResponse)
            .then(res => console.log(res))
            .catch(error => console.error('error', error))
             
    };

    return attachHashsToUser;
}
