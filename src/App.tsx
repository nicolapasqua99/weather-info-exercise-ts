import React from 'react';
import Header from './header';
import CityAdder from './cityselector';
import CityList from './citylist';

function App() {
  return (
    <>
      <Header />
      <CityAdder />
      <CityList />
    </>
  );
}

export default App;
