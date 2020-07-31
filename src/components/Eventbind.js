import React, { Component } from 'react';

class Eventbind extends Component {
    constructor(props){
        super(props)
        this.state={
            message:'Hello'
        }
    }
    clickHandler(){
        this.setState(
            {
                message:'Goodbye'
            }
        )
    }
    render() {
        return (
            <div>
               { this.state.message}
                <button onClick={this.clickHandler.bind(this)}>Click</button>
            </div>
        );
    }
}

export default Eventbind;