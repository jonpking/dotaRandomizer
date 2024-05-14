import './App.css';
import { useEffect, useState } from 'react';
import HeroGroup, { Hero } from './components/HeroGroup';
import FilterGroup from './components/FilterGroup';

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
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          minHeight: '90vh',
        }}
      >
        <div className="pageGrid">
          <HeroGroup
            heroes={heroArray.filter((hero) => hero.primary_attr === 'str')}
            title="STRENGTH"
          />
          <HeroGroup
            heroes={heroArray.filter((hero) => hero.primary_attr === 'agi')}
            title="AGILITY"
          />
          <HeroGroup
            heroes={heroArray.filter((hero) => hero.primary_attr === 'int')}
            title="INTELLIGENCE"
          />
          <HeroGroup
            heroes={heroArray.filter((hero) => hero.primary_attr === 'all')}
            title="UNIVERSAL"
          />
        </div>
      </div>
      <FilterGroup />
    </div>
  );
}

export default App;
