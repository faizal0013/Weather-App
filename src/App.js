import DisplayWeatherDetail from './components/DisplayWeatherDetail';
import Scenery from './components/Scenery';

const App = () => {
  return (
    <>
      <section className="flex justify-center items-center bg-zinc-300 h-screen w-screen drop-shadow-2xl">
        <Scenery />
        <DisplayWeatherDetail />
      </section>
    </>
  );
};

export default App;
