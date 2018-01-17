import React from 'react';

class Typewriter extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            sentencesArr: ['Zdanie nr 1', 'Jakieś inne zdanie', 'Ostatnie zdanie'],
            sentenceNumber: 0,
            chosenSentence: []
        }
    }

    typeSentence = () => {
        let sentence = this.state.sentencesArr[this.state.sentenceNumber];
        let chosenSentence = this.state.chosenSentence.slice();
        let i = 0;
        
        this.interval = setInterval(() => {
            chosenSentence[this.state.sentenceNumber] = sentence.substr(0,i)
            this.setState({
                chosenSentence: chosenSentence
            })

            if (i <= sentence.length+1) {
                i++;
            } else {
                clearInterval(this.interval);                   
                this.nextSentence();
            }
        }, 150)
    }

    nextSentence = () => {

        this.setState({
            chosenSentence: [],
            sentenceNumber: this.state.sentenceNumber+1
        })

        if(this.state.sentenceNumber < this.state.sentencesArr.length){
            this.typeSentence();
        } else {
            clearInterval(this.interval);
            this.setState({
                chosenSentence: this.state.sentencesArr[this.state.sentencesArr.length-1]
            })
        }
    }
    
    
    componentDidMount(){
        this.typeSentence()

    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    
    render(){
        return <div>
            <p className='text'>{this.state.chosenSentence}</p>
        </div>
    }
}


export default Typewriter;