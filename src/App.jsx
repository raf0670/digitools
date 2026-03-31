import { Suspense } from 'react';
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import ToolsSection from './components/tools/ToolsSection'

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {

  const toolsPromise = fetchData();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<div className='flex gap-5 justify-center items-center p-10'>
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
      </div>}>
        <ToolsSection toolsPromise={toolsPromise}></ToolsSection>
      </Suspense>
    </>
  )
}

export default App