import './App.css';
//import ChangeProfile from "./components/ChangeProfile.jsx";
import EditPost from "./components/EditPost";
import React from "react";

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {posts:[]};
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((json) => this.setState({posts:[...json]})
            )
    }


    render () {
        return <div className="App">

            {/*<ChangeProfile />*/}

            {this.state.posts.map(content => {
                return <EditPost key={content.id} id={content.id}/>}
            )}

        </div>
    }
}


