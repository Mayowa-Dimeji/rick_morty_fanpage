// async await function to rick and morty api  and export data object or should i saved to local storage?
async function getData() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data.results;
    // Return the array of characters
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return []; // Return an empty array in case of error
  }
}

export default getData;
