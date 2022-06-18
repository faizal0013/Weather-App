import jamesWheeler from '../assets/james-wheeler.jpg';

import Search from './Search';

const Scenery = () => {
  return (
    <>
      <div className="w-[50rem] h-[35rem] relative">
        <img src={jamesWheeler} alt="jamesWheeler" className="rounded-2xl opacity-85 h-[35rem] w-[50rem]" />
        <Search />
      </div>
    </>
  );
};

export default Scenery;
