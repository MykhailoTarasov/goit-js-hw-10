const URL_BREEDS = `https://api.thecatapi.com/v1/breeds`;
const URL_CatImg = `https://api.thecatapi.com/v1/images/search`;
const API_KEY =
  'live_pDgONJcJ7xBN5NEffwwqCy92h3eE2UX31MNKBkzl5ysbceXOWZcboEO81c8rkGeZ';

export function fetchBreeds() {
  return fetch(`${URL_BREEDS}?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(`${URL_CatImg}?api_key=${API_KEY}&breed_ids=${breedId}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}