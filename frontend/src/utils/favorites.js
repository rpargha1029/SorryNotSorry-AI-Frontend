export const getFavorites = () => {
  const data = localStorage.getItem("favorites");
  return data ? JSON.parse(data) : [];
};

export const saveFavorite = (excuse) => {
  const favorites = getFavorites();

  const exists = favorites.find(
    (item) => item.text === excuse.text
  );

  if (exists) return false;

  favorites.unshift(excuse);

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );

  return true;
};

export const removeFavorite = (id) => {
  const favorites = getFavorites().filter(
    (item) => item.id !== id
  );

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );
};