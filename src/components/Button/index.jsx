import { Component } from "react";

export class Button extends Component{
    render(){
        const {text, onClick}=this.props
        return (
            <button className ="botao" onClick={onClick} >
                {text}

            </button>
        )
    }
}