import React from 'react';
import ReactDOM from 'react-dom';



document.addEventListener('DOMContentLoaded', function(){
    
    class Typewriter extends React.Component {
        
        render(){
            return <div>
                <p>nanana</p>
            </div>
        }
    }
    
    
    class App extends React.Component {
        render(){
            return <Typewriter>demo</Typewriter>;
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});