import React, { useReducer } from "react";
const initialState = {
  userReservation: {
    name: "",
    lastname: "",
    phoneNumber: "",
    address: "",
    city: "",
    provincie: "",
    country: "",
  },
  packs: [],
  dates: {
    startDate: null,
    endDate: null,
  },
  price: {
    total: 0,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER_RESERVATION":
      return {
        ...state,
        userReservation: {
          ...state.userReservation,
          ...action.payload,
        },
      };
    case "UPDATE_PACKS":
      return {
        ...state,
        packs: [...action.payload],
      };
    case "UPDATE_DATES":
      return {
        ...state,
        dates: {
          ...state.dates,
          ...action.payload,
        },
      };
    case "UPDATE_PRICE":
      return {
        ...state,
        price: {
          ...state.price,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export const ContextForm = React.createContext();

const ProviderForm = ({ children }) => {
  const [formData, dispatch] = useReducer(reducer, initialState);

  const handleInput = (type, valueInput) => {
    const { campo, valor } = valueInput;
    dispatch({
      type,
      payload: {
        [campo]: valor,
      },
    });
  };
  const handleCheckbox = (type, valueInput) => {
    const { valor } = valueInput;
    dispatch({
      type,
      payload: [...valor],
    });
  };

  return (
    <ContextForm.Provider
      value={{
        formData,
        handleInput,
        handleCheckbox,
      }}
    >
      {children}
    </ContextForm.Provider>
  );
};

export default ProviderForm;
