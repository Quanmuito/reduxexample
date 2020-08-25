import React, { Component } from "react";
import "./sass/main.scss";
import { Provider } from "react-redux";
import store from "./store";
import Posts from "./components/Posts";
import Postform from "./components/Postform";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Postform />
					<hr></hr>
					<Posts />
				</div>
			</Provider>
		);
	}
}

export default App;
