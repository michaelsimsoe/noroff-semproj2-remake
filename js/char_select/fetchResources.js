const URL = 'https://www.anapioficeandfire.com/api/';

export async function getResource(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return await data[0];
  } catch (error) {
    console.log(
      'There has been a problem with your fetch operation: ',
      error.message
    );
  }
}

export async function getCharacter(name) {
  const nameURL = `${URL}characters?name=${encodeURI(name)}`;
  return await getResource(nameURL);
}

export async function getHouse(name) {
  const nameURL = `${URL}houses?name=${encodeURI(name)}`;
  return await getResource(nameURL);
}
