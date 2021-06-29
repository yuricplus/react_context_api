import React from 'react';
import { RouterGlobal } from './router';

import GlobalContext from './context';

export const App: React.FC = () => {
  return (
    <GlobalContext>
      <RouterGlobal/>
    </GlobalContext>
  )
}


export default App;