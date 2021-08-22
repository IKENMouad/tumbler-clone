import useHandleResponse from "../utilities/handle-response";
import authHeader from "../utilities/auth-header";

// Receive global messages
export function useGetGlobalMessages() {
  const handleResponse = useHandleResponse();
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  const getGlobalMessages = () => {
    return fetch(
      `${process.env.REACT_APP_API_URL}/api/messages/global`,
      requestOptions
    )
      .then(handleResponse)
      .catch(() => console.log("Could not load Global Chat"));
  };

  return getGlobalMessages;
}

// Send a global message
export function useSendGlobalMessage() {
  const handleResponse = useHandleResponse();

  const sendGlobalMessage = (body) => {
    const requestOptions = {
      method: "POST",
      headers: authHeader(),
      body: JSON.stringify({ body: body, global: true }),
    };

    return fetch(
      `${process.env.REACT_APP_API_URL}/api/messages/global`,
      requestOptions
    )
      .then(handleResponse)
      .catch((err) => {
        console.log(err);
      });
  };

  return sendGlobalMessage;
}

// Get list of users conversations
export function useGetConversations() {
  const handleResponse = useHandleResponse();
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  const getConversations = () => {
    return fetch(
      `${process.env.REACT_APP_API_URL}/api/messages/conversations`,
      requestOptions
    )
      .then(handleResponse)
      .catch((err) => console.log(err));
  };

  return getConversations;
}

// get conversation messages based on
// to and from id's
export function useGetConversationMessages() {
  const handleResponse = useHandleResponse();
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  const getConversationMessages = (id) => {
    return fetch(
      `${process.env.REACT_APP_API_URL}/api/messages/conversations/query?userId=${id}`,
      requestOptions
    )
      .then(handleResponse)
      .catch((err) => console.log(err));
  };

  return getConversationMessages;
}

export function useSendConversationMessage() {
  const handleResponse = useHandleResponse();

  const sendConversationMessage = (id, body) => {
    const requestOptions = {
      method: "POST",
      headers: authHeader(),
      body: JSON.stringify({ to: id, body: body }),
    };

    return fetch(
      `${process.env.REACT_APP_API_URL}/api/messages/`,
      requestOptions
    )
      .then(handleResponse)
      .catch((err) => {
        console.log(err);
      });
  };

  return sendConversationMessage;
}
