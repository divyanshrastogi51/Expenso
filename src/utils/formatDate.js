const formatDate = (data) => {
  const date = new Date(data);
  return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
};

export default formatDate;
