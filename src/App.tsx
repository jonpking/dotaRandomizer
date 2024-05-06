import { useEffect, useState } from 'react';
import HeroGroup from './components/HeroGroup';

function App() {
  const [heroArray, setHeroArray] = useState([]);

  useEffect(() => {
    fetch('https://api.opendota.com/api/heroes').then((res) => {
      res.json().then((data) => {
        setHeroArray(data);
      });
    });
  }, []);

  return (
    <>
      <HeroGroup heroes={heroArray} />
    </>
  );
}

export default App;
