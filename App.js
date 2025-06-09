/*
Create following element using React

<div id="parent">
    <div id="child1">
        <h1>Namaste Javascript 1</h1>
        <h2>Namaste Javscript 1</h1>
    </div>
    <div id="child2">
        <h1>Namaste Javascript 2</h1>
        <h2>Namaste Javscript 2</h1>
    </div>
</div>
*/

import React from "react";
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    'div', { id: 'parent' }, [
        React.createElement(
            'div', { id: 'child1' }, [
                React.createElement('h1', {}, 'Namaste Javascript 1'),
                React.createElement('h2', {}, 'Namaste Javascript 1'),
            ]
        ),
        React.createElement(
            'div', { id: 'child2' }, [
                React.createElement('h1', {}, 'Namaste Javascript 2 '),
                React.createElement('h2', {}, 'Namaste Javascript 2'),
            ]
        )
    ]
)

const rootReacts = ReactDOM.createRoot(document.getElementById('root1'));
rootReacts.render(parent);