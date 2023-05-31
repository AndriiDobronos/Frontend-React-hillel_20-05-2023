import React from "react";

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }
    handleSubmit = (event) => {
        event.preventDefault()
        //..
    }
    handleChange = () => {

    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} >
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </form>
            </>
        )
    }
}