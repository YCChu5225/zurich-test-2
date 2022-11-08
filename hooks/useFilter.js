const useFilter = (name, data) => {
  let filtered;
  if (name) {
    filtered = data.filter((user) => {
      return (
        user[name + "_name"].charAt(0).toLowerCase() ===
        (name === "first" ? "g" : "w")
      );
    });
  } else filtered = data;

  return filtered;
};

export default useFilter;
