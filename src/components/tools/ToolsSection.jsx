import React, { use, useState } from 'react';
import Heading from './Heading';
import Tools from './Tools';
import SelectedSection from './SelectedSection';

const ToolsSection = ({ toolsPromise, selectedTools, setSelectedTools }) => {
    const tools = use(toolsPromise);

    const [toggle, setToggle] = useState("products");

    return (
        <div className='mb-25'>
            <Heading toggle={toggle} setToggle={setToggle} selectedTools={selectedTools}></Heading>
            {
                toggle === "products" ? <div>
                    <div>
                        <Tools tools={tools} selectedTools={selectedTools} setSelectedTools={setSelectedTools}></Tools>
                    </div>
                    <div className='mt-25 hidden'>
                        <SelectedSection selectedTools={selectedTools} setSelectedTools={setSelectedTools}></SelectedSection>
                    </div>
                </div> : <div>
                    <div className='hidden'>
                        <Tools tools={tools} selectedTools={selectedTools} setSelectedTools={setSelectedTools}></Tools>
                    </div>
                    <div className='mt-25'>
                        <SelectedSection selectedTools={selectedTools} setSelectedTools={setSelectedTools}></SelectedSection>
                    </div>
                </div>
            }
        </div>
    );
};

export default ToolsSection;