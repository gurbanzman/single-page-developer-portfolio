import * as yup from "yup";

export const createUserSchema = yup.object().shape({
   fullName: yup.string().trim().required("Full name is required"),
   username: yup.string().trim().required("Username is required"),
   githubURL: yup.string().trim().required("Github is required"),
   gitlabURL: yup.string().trim().required("Gitlab is required"),
   linkedinURL: yup.string().trim().required("Linkedin is required"),
   twitterURL: yup.string().trim().required("Twitter is required"),
   description: yup.string().trim().required("Description is required")
});