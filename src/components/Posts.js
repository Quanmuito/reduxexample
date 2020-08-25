import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

export class Posts extends Component {
	UNSAFE_componentWillMount() {
		this.props.fetchPosts();
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.newPost) {
			this.props.data.unshift(nextProps.newPost);
		}
	}

	render() {
		console.log("render");
		const postItems = this.props.data.map((post) => (
			<div key={post.id}>
				<h4>{post.title}</h4>
				<p>{post.body}</p>
				<br></br>
			</div>
		));
		return (
			<div>
				<h1>POST</h1>
				{postItems}
			</div>
		);
	}
}

Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	data: PropTypes.array.isRequired,
	new: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	data: state.posts.items,
	newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
