export const getRockets = async () => {
  const response = await fetch("https://api.spacexdata.com/v3/rockets");
  const data = await response.json();
  return data;
};
