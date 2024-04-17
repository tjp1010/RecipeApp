import { useEffect, useState } from "react";

const url = "https://api.spoonacular.com/recipes/complexSearch?";
const API_KEY = "16ddb51eb2f140adb819326a01c44f7d";

export default function Search() {
  const [query, setQuery] = useState("Pizza");
  // Syntax of the useEffect hook
  useEffect(() => {
    // issue with fetch request
    async function fetchFood() {
      const res = await fetch(`${URL}?query =${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
