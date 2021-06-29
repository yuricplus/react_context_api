import React, { useContext, useState } from "react";

import UserContext from "../../context/user";

const ShowList: React.FC = () => {
  const { setState, state } = useContext(UserContext);

  return (
    <div>
      <h2>Lista</h2>
      
      <strong>{state.list}</strong>
    </div>
  )
}

export default ShowList;