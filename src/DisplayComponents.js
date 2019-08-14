import React, { Component } from 'react'
import Textbox from './InputComponents/Textbox'
import Radiobutton from './InputComponents/Radiobutton'

export default class DisplayComponents extends Component {
    render() {
        return (
            <div className="display">
                {this.printComponent() }
            </div>
        )
    }
    printComponent = () => {
        return this.props.id.map(id => {
            if (id === 1){

                return <Textbox handleSubmit={(object)=>{this.props.handleSubmit(object)}}/>
            }
            else if (id === 2){
                
                return <Radiobutton handleSubmit={(object)=>{this.props.handleSubmit(object)}}/>
            }
            
            
        })
    }
}
