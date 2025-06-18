const URL_BASE = 'http://localhost:3000';
const URL_API = '/api/products/';

export const getAllProducts = async () => {
  try {
    const response = await fetch(URL_BASE + URL_API);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const updateProduct = async body => {
  console.log(body);

  try {
    const response = await fetch(URL_BASE + URL_API, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
