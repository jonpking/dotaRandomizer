import { useEffect, useState } from 'react';
import HeroGroup, { Hero } from './components/HeroGroup';

function heroSort(a: Hero, b: Hero) {
  if (a.localized_name < b.localized_name) {
    return -1;
  }
  if (a.localized_name > b.localized_name) {
    return 1;
  }
  return 0;
}

function App() {
  const [heroArray, setHeroArray] = useState<Hero[]>([]);

  console.log(heroArray);

  useEffect(() => {
    fetch('https://api.opendota.com/api/heroes').then((res) => {
      res.json().then((data) => {
        setHeroArray(data.sort(heroSort));
      });
    });
  }, []);

  return (
    <>
      <HeroGroup
        heroes={heroArray.filter((hero) => hero.primary_attr === 'str')}
      />
      <HeroGroup
        heroes={heroArray.filter((hero) => hero.primary_attr === 'agi')}
      />
      <HeroGroup
        heroes={heroArray.filter((hero) => hero.primary_attr === 'int')}
      />
      <HeroGroup
        heroes={heroArray.filter((hero) => hero.primary_attr === 'all')}
      />
    </>
  );
}

export default App;
