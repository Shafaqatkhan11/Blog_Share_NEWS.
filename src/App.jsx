


import { useState } from 'react';
import Navbars from './Navbars';
import Newsboard from './Components/Newsboard';

import Contact from "./Components/Contact";



function App() {
  const [category, setCategory] = useState('');

  return ( 
    <>
   {/* <Typewriter
      options={{
        strings: [
          "React Js Developer",
          "Node js Devloper",
          "Javascript Developer",
          "Front End Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    >
      </Typewriter> */}
    
    <Navbars setCategory={setCategory}/>
    <Newsboard category={category}/>
    </>
  );
}

export default App;