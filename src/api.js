export const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
      const data = await response.json();
      return data;
    } catch (e) {console.log(e);}
};

export const fetchPost = async (postId) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/"+postId);
      const data = await response.json();
      return data;
    } catch (e) {console.log(e);}
};

export const fetchUser = async (userId) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/"+userId);
      const data = await response.json();
      return data;
    } catch (e) {console.log(e);}
};


export const fetchComments = async (id) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId="+id);
      const data = await response.json();
      return data;
    } catch (e) {console.log(e);}
};
