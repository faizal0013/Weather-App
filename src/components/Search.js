import { useContext, useState } from 'react';
import NameContext from '../context/name-context';

const Search = () => {
  const [name, setName] = useState('');

  const { nameSubmitHandler } = useContext(NameContext);

  const submitFormHandler = e => {
    e.preventDefault();

    nameSubmitHandler(name);

    setName('');
  };

  const inputHandler = e => {
    setName(e.target.value);
  };

  return (
    <>
      <form
        className="w-64 absolute bottom-52 left-64
                      sm:left-16 md:left-24 lg:left-64"
        onSubmit={submitFormHandler}
      >
        <input
          type="text"
          onChange={inputHandler}
          value={name}
          placeholder="Search..."
          className="bg-transparent border-b-2 border-neutral-50 py-1 px-2 
              drop-shadow-2xl absolute text-lg text-white
              focus:outline-none placeholder:italic placeholder:text-slate-100"
        />
        <button
          type="submit"
          className="absolute bg-sky-500 text-black px-3 py-1 rounded-lg font-bold
          -top-1 left-52 hover:bg-sky-300"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
