import React from 'react';
import ReactDOM from 'react-dom';
import Typewriter from './typewriter.jsx'



document.addEventListener('DOMContentLoaded', function(){
      
    class App extends React.Component {
        render(){
            return <Typewriter/>;
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});