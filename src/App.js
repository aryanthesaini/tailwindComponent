import './App.css';
import main from './main.png';
import background from './background.png';
function App() {
  return (
    <>
      <div className='p-[20rem]'>
        <div className='max-w-[15rem] mx-auto relative cursor-pointer'>
          <div className='aspect-[1/1.5] grid items-end rounded-b-full overflow-hidden transition duration-300  ease-in-out hover:scale-110 '>
            <img
              src={background}
              className='max-w-full block absolute aspect-square object-cover top-auto left-0 right-0 bottom-0 w-[100%] mx-auto rounded-full'
              alt=''
            />
            <img
              src={main}
              className=' h-[250px] max-w-full block relative z-2 left-[1rem] scale-230  transition duration-300  ease hover:-translate-y-[1.5rem] hover:scale-230'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
