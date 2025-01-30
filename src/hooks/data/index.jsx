import axios from "axios";
const PORT = import.meta.env.VITE_BACKEND;


export const getUser = async(id) => {
   try {
      const user = await axios.get(`${PORT}/user/${id}`);
      return user;
   } catch (error) {
      console.error(error);
   }
}

export const addUser = async(data) => {
   try {
      const newUser = await axios.post(`${PORT}/users`,data);   
      return newUser;
   } catch (error) {
      console.error(error);
   }
}
