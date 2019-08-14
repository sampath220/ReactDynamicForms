import React, { Component } from 'react'

export default class Length extends Component {
    render() {
        return (
            <div>
                <label>{this.props.type === "number" ? "Minvalue : " : "Minlength : "}</label>
                <input type="number" name="min" placeholder="Length" /><br />
                <label>{this.props.type === "number" ? "Maxvalue : " : "Maxlength : "}</label>
                <input type="number" name="max" placeholder="Length" /><br />
            </div>
        )
    }
}
