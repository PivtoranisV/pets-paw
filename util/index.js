export const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const time = `${formattedHours}:${formattedMinutes}`;
  return time;
};
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const fetchCat = async () => {
  const response = await fetch(
    'https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=' + apiKey
  );
  const data = await response.json();
  return data[0];
};

export const fetchBreeds = async () => {
  const response = await fetch(
    'https://api.thecatapi.com/v1/images/search?breed_ids=beng&limit=10&api_key=' +
      apiKey
  );
  const data = await response.json();
  return data;
};

export const sendVote = async (imageId, voteType) => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/votes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify({
        image_id: imageId,
        value: voteType,
      }),
    });

    if (response.ok) {
      console.log('Vote sent successfully');
    } else {
      console.error('Failed to send vote');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export const sendFavorite = async (imageId) => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/favourites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify({
        image_id: imageId,
      }),
    });

    if (response.ok) {
      console.log('Favorite sent successfully');
    } else {
      console.error('Failed to send Favorite');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
