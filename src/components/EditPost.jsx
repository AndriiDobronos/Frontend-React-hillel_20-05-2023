import React from "react";

export default class EditPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {title:''};
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
            .then((response) => response.json())
            .then((json) => this.setState({...json})
            )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.title !== this.state.title) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    title: this.state.title,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => (json));
        }
    }

    showNotifications1 = () => {
        this.setState({notification1:"выполнена успешно"});
    }

    showNotifications2 = () => {
        this.setState({notification2:"выполнена успешно"});
    }

    editTitle = () => {
        this.setState({title:prompt("can be corrected",this.state.title)});
        this.showNotifications1()
    }

    deletePost = () => {
        if (prompt("Are you sure you want to delete the post ?") !== null) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`, {
                method: 'DELETE',
            });
            this.setState({title:''})
            this.showNotifications2()
        }
    }
    onEditHandler = () => {
        document.getElementById("editText").style.color = "red";
    }

    onSaveHandler = () => {
        let title = document.getElementById("editText").textContent;
        document.getElementById("editText").style.color = "black";
        this.setState({title: title});
        this.showNotifications1()
    }

    handleChange(event) {
        this.setState({title: event.target.value});
    }

    render() {
        return <>
        <h3>{this.state.id}.post from user {this.state.userId} : Title:</h3>
            <div className="first-variant">
                <p>The first variant of editing with "modal window":</p>
                    <b>{this.state.title} </b>
                <button onClick={this.editTitle} >Edit title</button>
            </div>

            <div
                contentEditable="true"
                suppressContentEditableWarning={true}
                className="second-variant"
                onClick={this.onEditHandler}
                onBlur={ ()=> { this.onSaveHandler() }}
                >
                <p>The second variant of editing with attribute "contentEditable":</p>
                <b  id={"editText"}>{this.state.title}</b>
            </div>

            <div className="third-variant" >
                <p>The third variant of editing with "input":</p>
                <input type="text"
                       size={70}
                       value={this.state.title}
                       onChange={this.handleChange}
                       onBlur={this.showNotifications1}
                />
            </div>

            <button onClick={this.deletePost} >Delete post</button>
            {this.state.notification1 ? <p style={{color:"red"}} >
                <i style={{color:"blue"}}>notification:</i>
                Операция редактирования {this.state.notification1}
            </p> : null}
            {this.state.notification2 ? <p style={{color:"red"}} >
                <i style={{color:"blue"}}>notification:</i>
                Операция удаления {this.state.notification2}
            </p> : null}
        </>
    }
}
