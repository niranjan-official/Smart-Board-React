import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [value, setValue] = useState(0);
    const [checkboxes, setCheckboxes] = useState({
      switch1: 0,
      switch2: 0,
      switch3: 0,
      switch4: 0,
    });
  
    return (
      <AppContext.Provider value={{ value, setValue, checkboxes, setCheckboxes }}>
        {children}
      </AppContext.Provider>
    );
  };