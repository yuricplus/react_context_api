import React, { useState, useContext } from 'react';

import UserContext from "../../context/user";
import ShowList from '../../components/showList'

const Home: React.FC = () => {
  const [list, setList] = useState<string>('');
 
  const {setState: setGlobalState} = useContext(UserContext);

  function handleSubmit(){
    setGlobalState({list});
  }

  return (
    <form>
      <h2>Create List</h2>
      <input 
        placeholder="Create list" 
        type="text"
        onChange={(e) => setList(e.target.value)}
      />
      <button onClick={(e) => {
        e.preventDefault();
        handleSubmit()
      }}>Enter</button>
      <ShowList/>
    </form>
  )
}

export default Home;