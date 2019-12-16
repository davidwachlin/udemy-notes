import React, { Component } from 'react';
import axios from 'axios';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default class Course extends Component {
  state = {
    course: {},
    courseContent: []
  };

  getCourse(courseID) {
    console.log(`from getCourse, course id: ${courseID}`)
    axios({
        method: 'get',
        url: `https://www.udemy.com/api-2.0/courses/${courseID}/`,
        headers: {
          'Access-Control-Allow-Origin': '*',
          Authorization:
            'Basic MzdmcXlJMWJCZWJQdmZjaVhCcFhKU0JxQ2NMOHdhcWEzcUhSdUVqTTpXUVBOdHYyTFZock5RNFZTR1Y4OEVQcmFyVFk2bmgyQ0UwcmtIMlRobDhDMEt6Yk1jNnNxenZHUGY0UEprR29VeHkxMDE1bUNvNUxwV3RFdEZFcjkzVmtub2U5VUM5WjZjTUN4YzNBZEV5U2VlTnJYYjluaWJtN2lscUp1emwyWQ=='
        }
      }).then(response => {
        console.log(`getCourse axios response🐸: ${response.data}`);
        this.setState({ course: response.data });
        console.log(`course: ${this.state.course}`);
      });
  }

  componentDidMount() {
    console.log(`course id: ${this.props.match.params.id}`)
    let courseID = this.props.match.params.id;
    this.getCourse(courseID)
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
    const courseContentList = this.state.courseContent.map(item => {
        return <li key={item.id}>{item.title} </li>
    });
    return (
      <Container>
        <h1>{this.state.course.title}</h1>
        {/* <h2>{this.state.course.visible_instructors[0].name}</h2> */}
        <h1>{this.props.match.params.id}</h1>
        <ul>
            {courseContentList}
        </ul>
      </Container>
    );
  }
}
