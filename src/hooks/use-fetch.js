import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    localStorage.setItem("isLightMode", true);
    const getData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => console.log(error));
    };
    getData();
  }, [url]);
  return data;
};

export default useFetch;
