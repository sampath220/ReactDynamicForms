import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Length from './ValidationFields.js/Length'

export default class Textbox extends Component {
    constructor() {
        super();
        this.state = { isChecked: false, isCreated: false,optionSelected:"text"}
    }

    render() {
        return (
            <div className="textbox">
                {!this.state.isCreated ?
                    <form id="textbox" onSubmit={(e) => this.handleSubmit(e)} >
                        <label>TextBox Name : </label><input type="text" required name="name" placeholder="text" /><br />
                        <label>Type : </label><select name="type" onChange={(e)=>this.handleSelect(e)}>
                            <option value="text">text</option>
                            <option value="email">email</option>
                            <option value="password">password</option>
                            <option value="number">number</option>
                            <option value="checkbox">checkbox</option>
                        </select><br/>
                        {!(this.state.optionSelected==="email" || this.state.optionSelected==="checkbox") && <Length type={this.state.optionSelected}/>}
                        <label>IsRequired : </label><input type="checkbox" name="isrequired" onChange={(e) => this.handleChecked(e)} /><br />
                        {this.state.isChecked ? <input type="text" name="error" required placeholder="Enter Error Message" /> : null}<br />
                        <input className="button" type="submit" name="Add" value="Add"/>
                    </form> :
                    <Redirect to="/createform" />
                }
            </div>
        )
    }
    handleSelect(e){
        this.setState({optionSelected:e.target.value})
    }
    handleChecked(e) {
        this.setState({
            isChecked: e.target.checked
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let jsonObject = {};
        for (const [key, value] of formData.entries()) {
            jsonObject[key + ""] = value;
        }
        this.setState({ isCreated: true })
        this.props.handleSubmit(jsonObject)
    }
}

