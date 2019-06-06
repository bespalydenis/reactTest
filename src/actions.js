// ALL POST REQUEST________________________________________________________
export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });
//_________________________________________________________________________



// POST SINGLE REQUEST_____________________________________________________
export const REQUEST_API_POST = "REQUEST_API_POST";
export const RECEIVE_API_POST = "RECEIVE_API_POST";

export const requestApiPost = (id) => {
  return { type: REQUEST_API_POST, id }
}
export const receiveApiPost = (data) => ({ type: RECEIVE_API_POST, data });
//_________________________________________________________________________
