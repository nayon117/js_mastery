//  implement async function to fetch data from an api and handle error using try catch

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Request failed", response.status);
    }
    return await response.json();
  } catch (error) {
    console.log("error fetching data",error);
  }
};

const handleData = (data) => {
  console.log(data);
};

fetchData("https://jsonplaceholder.typicode.com/posts").then(handleData)
