import ToolCard from './ToolCard';

const Tools = ({ tools, setSelectedTools }) => {

    // const tools = use(toolsPromise);
    // tools.map(tool => console.log(tool));

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 md:w-10/12 mx-auto'>
            {
                tools.map(tool => {
                    return <ToolCard key={tool.id} tool={tool} setSelectedTools={setSelectedTools}></ToolCard>
                })
            }
        </div>
    );
};

export default Tools;