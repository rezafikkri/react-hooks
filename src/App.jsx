import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ThemeContext from './ThemeContext';

function App() {
  const [name, setName] = useState('Reza Sariful Fikri');
  const [imageSrc, setImageSrc] = useState('https://cdn.pixabay.com/photo/2015/12/05/06/20/kid-1077793_960_720.jpg');
  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.title = name;
  }, [name]);

  return (
    <div className={theme}>
      <div className="card">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={imageSrc} onChange={(e) => setImageSrc(e.target.value)} />
        <p>{name}</p>
        <img src={imageSrc} alt={imageSrc} />
      </div>
    </div>
  );
}

export default App
