import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('https://api.opendota.com/api/heroes').then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  }, []);

  return <></>;
}

export default App;
