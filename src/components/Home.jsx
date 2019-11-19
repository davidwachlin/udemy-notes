import React, { Component } from 'react';
import axios from 'axios';
import CourseCard from './CourseCard'
import data from '../data'

import GridList from '@material-ui/core/GridList'
import TextField from '@material-ui/core/GridList'

export default class Home extends Component {
	state = {
		courses: [...data],
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
                console.log(response.data.results)
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
                <GridList>{courseList}</GridList>
			</div>
		);
	}
}

// get /api-2.0/courses/?page=100&search=node
