import React, { Component } from 'react';
import axios from 'axios';

import Container from '@material-ui/core/Container';

export default class Course extends Component {
  ComponentDidMount() {
    axios({
      method: 'get',
      url: `https://www.udemy.com/api-2.0/courses/?page_size=20&search=${this.state.searchField}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization:
          'Basic MzdmcXlJMWJCZWJQdmZjaVhCcFhKU0JxQ2NMOHdhcWEzcUhSdUVqTTpXUVBOdHYyTFZock5RNFZTR1Y4OEVQcmFyVFk2bmgyQ0UwcmtIMlRobDhDMEt6Yk1jNnNxenZHUGY0UEprR29VeHkxMDE1bUNvNUxwV3RFdEZFcjkzVmtub2U5VUM5WjZjTUN4YzNBZEV5U2VlTnJYYjluaWJtN2lscUp1emwyWQ=='
      }
    });
  }
  render() {
    return <Container></Container>;
  }
}
