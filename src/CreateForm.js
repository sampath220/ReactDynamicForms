import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import DisplayComponents from './DisplayComponents';
import axios from "axios";
export default class CreateForm extends Component {
    constructor() {
        super()
        this.state = { formname: "", data: [], id: [], isCreated: false, isSendData: false }
        
    }
    render() {
        return (
            <div >

                <div className="createform">
                    {this.availableComponents()}
                    <DisplayComponents id={this.state.id} handleSubmit={(object) => { this.handleData(object) }} />
                </div>
                {this.state.data.length > 0 && this.formPreview()}
                <br /><br />
                {this.state.isCreated &&
                    <div >
                        <input name="formname" type="text" placeholder="Enter form Name" onChange={(e) => { this.updateFormName(e) }} />
                        <input name="save" type="button" value="save" onClick={(e) => { this.handleClick(e) }} />
                    </div>}
                {this.state.data.length > 0 && !this.state.isCreated && <input type="button" value="Submit Form" onClick={() => { this.handleSubmit() }} />}
                {this.state.isSendData && <Redirect to="/" />}
            </div>
        )
    }
    updateForm(id) {
        this.setState(state =>
            ({ id: this.state.id.concat(id) })
        )
    }
    updateFormName(e) {
        this.state.formname = e.target.value;
    }
    handleData = (jsonObject) => {
        if (jsonObject.name != "") {
            this.setState(state => (
                {
                    data: this.state.data.concat(jsonObject)
                })
            )
        }
    }

    handleSubmit = () => {
        this.setState({ isCreated: true })
    }
    handleClick = (e) => {
        console.log(this.props.user)
        let user=this.props.user;
        axios.post("http://localhost:5001/" + this.props.user, {
            formName: this.state.formname,
            'fields': this.state.data
        })
            .then(this.setState({ isSendData: true })).catch(err => console.log(err))
    }
    availableComponents() {
        return (
            <div className='available'>
                <span onClick={() => this.updateForm(1)}>Textbox</span><br />
                <span onClick={() => this.updateForm(2)}>Radiobutton</span><br />
                <span onClick={() => this.updateForm(3)}>Date</span><br />
                <span onClick={() => this.updateForm(4)}>Button</span><br />
            </div>
        )
    }
    formPreview(){
        return (
            <div>
                {
                    this.state.data.map((field,index) => {
                        return this.print(field,index)
                    })
                }  
            </div>
        )
    }
    print=(field,index)=>{
        return (
            <div className="preview">
                <div style={{padding:"5px",display:"flex",textAlign:"center"}}>
                {field.type!=="checkbox" && <label >{field.name} : </label> }
                {field.type!=="radiobutton" ? <input type={field.type} name={field.name} placeholder={"enter "+field.name} required={field.isrequired}/>
                :field.options.map(value=><div><input type="radio" value={value} /> <label>{value}</label></div>)}
                {field.type==="checkbox" && <label >{field.name} </label> }
                </div>
                <div>
                <input type="button" className="delete" value="delete" onClick={(e)=>{this.removeClick(e,index)}} />
                </div>
            </div>
        )
    }
    removeClick(e,i) {
        e.preventDefault();
        let data = [...this.state.data];
        data.splice(i, 1);
        this.setState({ data });
      }
}
