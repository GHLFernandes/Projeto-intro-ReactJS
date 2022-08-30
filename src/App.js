import React, { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

const banner = 'imagens/banner.png';

function App() {

  const [ dataForm, setDataForm ] = useState([]);

  const handleSubmit = (submit) => {
    console.log(submit)
    setDataForm([...dataForm, submit])
  }

  return (
    <div className="App">
        <Banner banner={banner}/>
        <Form handleSubmit={submit => handleSubmit(submit)}/>
    </div>
  );
}

export default App;
