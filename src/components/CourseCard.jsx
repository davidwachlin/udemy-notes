import React, { Component } from 'react'

export default class CourseCard extends Component {
    render() {
        return (
            <div>
                <p>{this.props.course.title}</p>
            </div>
        )
    }
}
