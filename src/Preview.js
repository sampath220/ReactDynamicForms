import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import './index.css'
export default class Preview extends Component {
    state = {
        forms: [
            {
                "id": '',
                'fields': []
            }
        ],
        form: { id: '', fields: [] },
        isRendered: false,
        isSubmit: false
    }
    componentDidMount() {

        Axios.get(`http://localhost:5001/` + this.props.user)
            .then(res => res.data)
            .then(data => { this.setState({ forms: data }) })
            .catch(err => console.log(err))

    }
    render() {
        return (
            <div className="textbox">
                <form onSubmit={(e) => this.handleClick(e)} >
                    <div style={{ display: "flex" }}>
                        <div >
                            {this.state.forms.map(form => {
                                return <div>
                                    <input type="button" name={form.formName} value={form.formName} onClick={() => this.setState({ form: form, isSubmit: false })} />
                                </div>
                            })}
                        </div>
                        <div style={{ border:"solid red 1px",margin: "auto",padding:"20px" }}>
                            {!this.state.isSubmit && this.getForm()}
                            {this.state.isRendered && <input type="submit" value="submit" />}
                        </div>
                    </div>
                </form>

            </div>
        )
    }
    getForm = () => {
        return this.state.form.fields.map(field => {
            this.state.isRendered = true;
            return <div><label>{field.name} : </label><input type={field.type} name={field.name} required={field.isrequired} /><br /></div>
        })


    }
    handleClick = (e) => {
        e.preventDefault();
        this.setState({ isSubmit: true, isRendered: false })

    }
}
