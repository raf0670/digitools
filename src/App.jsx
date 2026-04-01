import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import ToolsSection from './components/tools/ToolsSection'
import Steps from './components/steps/Steps';
import PricingSection from './components/pricing/PricingSection';
import PreFooter from './components/preFooter/PreFooter';
import Footer from './components/footer/Footer';
import { ToastContainer } from 'react-toastify';

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const [selectedTools, setSelectedTools] = useState([]);

  const toolsPromise = fetchData();

  return (
    <>
      <Navbar selectedTools={selectedTools}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<div className='flex gap-5 justify-center items-center p-10'>
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
      </div>}>
        <ToolsSection toolsPromise={toolsPromise} selectedTools={selectedTools} setSelectedTools={setSelectedTools}></ToolsSection>
      </Suspense>
      <Steps></Steps>
      <PricingSection></PricingSection>
      <PreFooter></PreFooter>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App