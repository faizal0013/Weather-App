import { createContext, useState } from 'react';

const NameContext = createContext({
  name: null,
  nameSubmitHandler: function () {},
});

export const NameContextProvider = props => {
  const [name, setName] = useState();

  const nameSubmitHandler = name => {
    setName(name);
  };

  return <NameContext.Provider value={{ name: name, nameSubmitHandler }}>{props.children}</NameContext.Provider>;
};

export default NameContext;
