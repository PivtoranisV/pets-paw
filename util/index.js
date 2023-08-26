export const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const time = `${formattedHours}:${formattedMinutes}`;
  return time;
};

const apiKey = process.env.API_KEY;

export const fetchCat = async () => {
  const response = await fetch(
    'https://api.thecatapi.com/v1/images/search?api_key=' + apiKey
  );
  const data = await response.json();
  return data[0];
};
