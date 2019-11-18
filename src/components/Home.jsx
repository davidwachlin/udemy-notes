import React, { Component } from 'react';
import axios from 'axios';

const CLIENT_ID = '37fqyI1bBebPvfciXBpXJSBqCcL8waqa3qHRuEjM';
const CLIENT_SECRET =
	'WQPNtv2LVhrNQ4VSGV88EPrarTY6nh2CE0rkH2Thl8C0KzbMc6sqzvGPf4PJkGoUxy1015mCo5LpWtEtFEr93Vknoe9UC9Z6cMCxc3AdEySeeNrXb9nibm7ilqJuzl2Y';

const API = `Authorization: Basic {BASE64_ENCODED(${CLIENT_ID}:${CLIENT_SECRET})}" https://www.udemy.com/api-2.0/courses/?page=100&search=`;
// GET request for remote image

const AUTH =
	'Basic MzdmcXlJMWJCZWJQdmZjaVhCcFhKU0JxQ2NMOHdhcWEzcUhSdUVqTTpXUVBOdHYyTFZock5RNFZTR1Y4OEVQcmFyVFk2bmgyQ0UwcmtIMlRobDhDMEt6Yk1jNnNxenZHUGY0UEprR29VeHkxMDE1bUNvNUxwV3RFdEZFcjkzVmtub2U5VUM5WjZjTUN4YzNBZEV5U2VlTnJYYjluaWJtN2lscUp1emwyWQ==';
//API = "Authorization: Basic {BASE64_ENCODED(CLIENT_ID:CLIENT_SECRET)}" https://www.udemy.com/api-2.0/courses


export default class Home extends Component {
	state = {
		courses: [],
		searchField: ''
	};

	handleChange = e => {
		const newSearch = e.target.value;
		this.setState({ searchField: newSearch });
		console.log(this.state.searchField);
	};

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state.searchField);
		axios({
            method: 'get',
            mode: 'no-cors',
			url: `https://www.udemy.com/api-2.0/courses/?page=100&search=${this.state.searchField}`,
			headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization':
					'Basic MzdmcXlJMWJCZWJQdmZjaVhCcFhKU0JxQ2NMOHdhcWEzcUhSdUVqTTpXUVBOdHYyTFZock5RNFZTR1Y4OEVQcmFyVFk2bmgyQ0UwcmtIMlRobDhDMEt6Yk1jNnNxenZHUGY0UEprR29VeHkxMDE1bUNvNUxwV3RFdEZFcjkzVmtub2U5VUM5WjZjTUN4YzNBZEV5U2VlTnJYYjluaWJtN2lscUp1emwyWQ=='
            }
            // withCredentials: true,
            // credentials: 'same-origin',
		})
			.then(response => {
				console.log(response);
				response.json();
			})
			.then(courses => this.setState({ courses: courses }));
	};
	// componentDidMount() {
	// 	axios
	// 		.get(
	// 			`https://www.udemy.com/api-2.0/courses/?page=100&search=${this.state.searchField}`, { crossorigin: true}
	// 		)
	// 		.then(response => {
	// 			console.log(response);
	// 			response.json();
	// 		})
	// 		.then(courses => this.setState({ courses: courses }));
	// }

	render() {
		return (
			<div>
				<h1>Home</h1>
				<form>
					<input onChange={this.handleChange} type='text'></input>
					<input
						type='submit'
						value='Search'
						onClick={this.handleSubmit}></input>
					<p>search: {this.state.searchField}</p>
				</form>
			</div>
		);
	}
}

// get /api-2.0/courses/?page=100&search=node
