import React from 'react'

export default class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
			<div> <h1> {this.props.action.id} </h1>	<h2> {this.props.action.created_at} </h2></div>
        );
    }
}