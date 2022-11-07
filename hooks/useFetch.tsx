import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [requestUrl, setRequestUrl] = useState(url);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (requestUrl) {
      fetch(requestUrl)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, []);

  return [data, setRequestUrl];
};

export default useFetch;
