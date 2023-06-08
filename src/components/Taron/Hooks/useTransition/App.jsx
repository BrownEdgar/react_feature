import axios from "axios";
import { useEffect, useState, useTransition } from "react";
import Photos from "./Photos";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setPhotos(res.data));
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    startTransition(() => setsearchValue(value));
  };

  const handleSubmit = (e) => {
    e.preventDefaul();
  };

  const dataFilter = (photos, searchValue) =>
    photos.filter((photo) => photo?.title.includes(searchValue));

  return (
    <div>
      <h1>useTransition hook</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
      </form>
      {isPending && <h1>Loading...</h1>}
      <Photos photos={dataFilter(photos, searchValue)} />
    </div>
  );
}
