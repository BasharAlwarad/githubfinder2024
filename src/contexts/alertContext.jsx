import { useContext, createContext, useReducer } from 'react';

const AlertContext = createContext();

const alertReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SHOW_ALERT':
      return { ...state, alert: payload.type, msg: payload.msg };
    case 'REMOVE_ALERT':
      return { alert: null, msg: '' };
    default:
      return state;
  }
};

export const AlertProvider = ({ children }) => {
  const initialState = {
    alert: null,
    msg: '',
  };

  const [{ alert, msg }, dispatch] = useReducer(alertReducer, initialState);

  const showAlert = (msg, type) => {
    dispatch({ type: 'SHOW_ALERT', payload: { msg, type } });

    const timeOut = setTimeout(() => {
      dispatch({ type: 'REMOVE_ALERT' });
      clearTimeout(timeOut);
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert, msg, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  return useContext(AlertContext);
};
