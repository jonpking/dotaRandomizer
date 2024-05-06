import { useEffect, useState } from 'react';

function App() {
  const [heroArray, setHeroArray] = useState([]);

  useEffect(() => {
    fetch('https://api.opendota.com/api/heroes').then((res) => {
      res.json().then((data) => {
        setHeroArray(data);
      });
    });
  }, []);

  return <></>;
}

export default App;
