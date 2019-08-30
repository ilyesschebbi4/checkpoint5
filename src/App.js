import React from 'react';
import Photo from './Photo';
import Image from './img/avatar.jpg'
import Name from './Name';
import MyButton from './Button';

const person = {
  name:
        {
          firstname:'Elyes',
          lastname:'Chebbi'
        },
  
}



function App() {
  return (
    <div>

	    <Photo src={Image}/>

      <Name
         first={person.name.firstname}
          last={person.name.lastname}/>
      <MyButton label = "My Facebook"/>

    </div>
  );
}

export default App;
