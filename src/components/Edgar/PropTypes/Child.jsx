import React from 'react';
import PropTypes from 'prop-types'

export default function Child(props) {
	return (
		<div>
			<h2>{props.name}</h2>
			<h2>Age: {props.age}</h2>
		</div>
	)
}
// eslint-disable-next-line react/no-typos
Child.defaultProps = {
	name: "Jhon"
}


Child.propTypes = {
	age: PropTypes.number.isRequired,
	bool: PropTypes.bool,
	name: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
	value: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
	}))
}