import React, { Component } from 'react';
import axios from 'axios';
import CourseCard from './CourseCard'

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
			url: `https://www.udemy.com/api-2.0/courses/?page_size=20&search=${this.state.searchField}`,
			headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization':
					'Basic MzdmcXlJMWJCZWJQdmZjaVhCcFhKU0JxQ2NMOHdhcWEzcUhSdUVqTTpXUVBOdHYyTFZock5RNFZTR1Y4OEVQcmFyVFk2bmgyQ0UwcmtIMlRobDhDMEt6Yk1jNnNxenZHUGY0UEprR29VeHkxMDE1bUNvNUxwV3RFdEZFcjkzVmtub2U5VUM5WjZjTUN4YzNBZEV5U2VlTnJYYjluaWJtN2lscUp1emwyWQ=='
            }
		})
			.then(response => {
                this.setState({ courses: response.data.results })
                console.log(`courses: ${this.state.courses}`)
			})
            //.then(courses => this.setState({ courses: courses }));
	};

	render() {
        const courseList = this.state.courses.map(course => {
            return <CourseCard key={course.id} course={course} />
        });

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
                <div>{courseList}</div>
			</div>
		);
	}
}

// get /api-2.0/courses/?page=100&search=node
