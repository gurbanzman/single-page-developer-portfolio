import axios from "axios";
const PORT = import.meta.env.VITE_BACKEND;

export const getUser = async (id) => {
  try {
    const user = await axios.get(`${PORT}/user/${id}`);
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const addUser = async (data) => {
  try {
    const newUser = await axios.post(`${PORT}/users`, data);
    return newUser;
  } catch (error) {
    console.error(error);
  }
};

export const addProject = async (data) => {
  try {
    const newProject = await axios.post(`${PORT}/project`, data);
    return newProject;
  } catch (error) {
    console.error(error);
  }
};

export const getProject = async () => {
  try {
    const allProjects = await axios.get(`${PORT}/projects`);
    return allProjects;
  } catch (error) {
    console.error(error);
  }
};

export const getOneProject = async (id) => {
  try {
    const project = await axios.get(`${PORT}/project/${id}`);
    return project;
  } catch (error) {
    console.error(error);
  }
};

export const updateProject = async (id, data) => {
  try {
    const updatedProject = await axios.put(`${PORT}/project/${id}`, data);
    return updatedProject.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllMessages = async (id) => {
  try {
    const getMessages = await axios.get(`${PORT}/messages/${id}`);
    return getMessages;
  } catch (error) {
    console.error(error);
  }
};

export const postMessages = async (data) => {
  try {
    const newMessage = await axios.post(`${PORT}/messages`, data);
    return newMessage;
  } catch (error) {
    console.error(error);
  }
};
