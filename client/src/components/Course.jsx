import React, { Component } from 'react';
import axios from 'axios';

import Container from '@material-ui/core/Container';

export default class Course extends Component {
  state = {
    courseContent: []
  };

  componentDidMount() {
    console.log('component did mount')
    let courseID = 1672410;
    axios({
      method: 'get',
      url: `https://www.udemy.com/api-2.0/courses/${courseID}/public-curriculum-items/?page_size=1000`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization:
          'Basic MzdmcXlJMWJCZWJQdmZjaVhCcFhKU0JxQ2NMOHdhcWEzcUhSdUVqTTpXUVBOdHYyTFZock5RNFZTR1Y4OEVQcmFyVFk2bmgyQ0UwcmtIMlRobDhDMEt6Yk1jNnNxenZHUGY0UEprR29VeHkxMDE1bUNvNUxwV3RFdEZFcjkzVmtub2U5VUM5WjZjTUN4YzNBZEV5U2VlTnJYYjluaWJtN2lscUp1emwyWQ=='
      }
    }).then(response => {
      console.log(`componentDidMount axios response🐸: ${response}`);
      this.setState({ courseContent: response.data.results });
      console.log(`course: ${this.state.courseContent}`);
    });
  }
  render() {
    console.log(`course💥: 
    ${this.state.courseContent}`);
    const courseContentList = this.state.courseContent.map(item => {
        return <li key={item.id}>{item.title} </li>
    });
    return (
      <Container>
        <h1>Single Course</h1>
        <ul>
            {courseContentList}
        </ul>
      </Container>
    );
  }
}
