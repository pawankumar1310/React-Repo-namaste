import React from 'react';
import ReactDOM from 'react-dom/client';

//React Element 
const heading = ( 
    <h1 className = 'header'
    tabIndex = "5" > React Element using </h1>
);

const Title = () => ( 
    <h1 className = 'header'
    tabIndex = "5" > React Element using </h1>
);

const Title1 = function(){
    return ( 
    <h1 className = 'header'
    tabIndex = "5" > React Element using </h1>
);
} 

//React Functional Component
const HeadingFunctionalComponent = () => (
<div id='container'>
    <h1 className='heading'>React Functional Component</h1>
</div>
);

const number = 1000;
const reactElement = <span>React Element</span>;
//Component Compositions i.e when you are calling one functional component into another functional component
const HeadingFunctionalComponent2 = () => (
<div id='container'>
    {number}
    {<h5>{number}</h5>}
    {reactElement} 

    {Title()}
    <Title />
    <Title></Title>
    
    <h1 className='heading'>React Functional Component</h1>
</div>
);


const root = ReactDOM.createRoot(document.getElementById('root2'));
//root.render(heading); // To render react element like this.
root.render(<HeadingFunctionalComponent2 />); // To render functional component like this.