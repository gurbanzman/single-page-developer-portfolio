// helpers/toastHelper.js

import { toast } from "react-toastify";

export const showToastSuccess = (message) => {
  toast.success(message);
};

export const showToastError = (error) => {
  toast.error(error);
};
