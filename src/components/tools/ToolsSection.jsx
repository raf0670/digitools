import React from 'react';
import Heading from './Heading';
import Tools from './Tools';

const ToolsSection = ({ toolsPromise }) => {
    return (
        <div>
            <Heading></Heading>
            <Tools toolsPromise={toolsPromise}></Tools>
        </div>
    );
};

export default ToolsSection;