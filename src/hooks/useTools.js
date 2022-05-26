import { useEffect, useState } from 'react';

const useTools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch('https://limitless-ocean-18440.herokuapp.com/tool')
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [tools]);
  return [tools, setTools];
};

export default useTools;
