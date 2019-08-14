import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
export default class Radiobutton extends Component {
    constructor() {
        super()
        this.state = { isClicked: false, data: [], optionValue: "", isCreated: false,description:"" }
    }

    render() {
        return (
            <div>
                {!this.state.isCreated ?
                <form className="textbox" onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Enter description : </label>
                    <input type="text" placeholder="enter description" name="radiobutton" onChange={(e)=>this.setState({description:e.target.value})}/><br />
                    <label>Click to add options : </label>
                    <input type="button" value="+" onClick={(e) => this.handleAddClick(e)} /><br />
                    {this.state.data.length > 0 && this.print()}
                    {this.state.isClicked && this.addOption()}
                    {this.state.data.length > 0 && <input type="submit" value="Add to form" />}
                </form>:
                <Redirect to="/createform" />
                }
            </div>
        )
    }
    handleSubmit(e) {
        e.preventDefault();
        let jsonObject = {"name":this.state.description,"options":this.state.data,"type":"radiobutton"};
        this.setState({ isCreated: true })
        console.log(jsonObject)
        this.props.handleSubmit(jsonObject)
    }
    handleAddClick = (e) => {
        this.setState({ isClicked: true })
    }
    handleData() {
        this.setState({
            isClicked: false,
            data: this.state.data.concat(this.state.optionValue)
        })
    }

    addOption() {
        return (
            <div>
                <input type="text" placeholder="enter option value" onChange={(e) => this.setState({ optionValue: e.target.value })} />
                <input type="button" name="add" value="Add" onClick={() => this.handleData()} />
            </div>
        )
    }
    print() {
        return (
            <div>
                {console.log("fdhug")}
                {
                    this.state.data.map(value => {
                        return (<div><input type="radio" name={value} /><label>{value}</label></div>)
                    })
                }
            </div>
        )
    }
}
