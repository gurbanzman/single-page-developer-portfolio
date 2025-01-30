const customHandleChange = (e, state, setState) => {
  const { name, value } = e.target;
  setState({ ...state, [name]: value });
};

const handleFileChange = (e, setState) => {
  const file = e.target.files[0];
  if (file) {
    setState(file);
  }
};

export { customHandleChange, handleFileChange };
