import React, { useContext, useReducer } from 'react';

export const StateContext = React.createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => {
  return useContext(StateContext);
};
