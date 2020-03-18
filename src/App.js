import React from 'react';
import SampleForm from '../src/components/sampleForm/sampleForm';
import Header from '../src/components/header/header';
import Sort from '../src/components/sort/sort';
import Filter from '../src/components/filter/filter';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <SampleForm></SampleForm>
      <Sort></Sort>
      <Filter></Filter>
    </div>
  );
}

export default App;
