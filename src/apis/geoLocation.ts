export const getGeoLocation = async (word: string) => {
  const response = await fetch(
    'https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode' +
      `?query=${word}`,
  );

  return response.json();
};
