import React, { Component } from 'react'

export default class Home extends Component {
    state = {
        searchField: ''
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
                <form>
                <input type="text"></input>
                <button>Search</button>
                </form>
            </div>
        )
    }
}
