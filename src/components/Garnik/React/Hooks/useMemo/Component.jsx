import React, {memo} from 'react'

 function Component(props) {
	function sum() {
		let total = (props.count + 1) * (props.count / 2)
	  return total;
	}
	
	return (
		<div>
    <h2>Total: {sum()}</h2>
		</div>
	)
}

export default memo(Component, (prevProps, nextProps) => {
	if (prevProps.count === nextProps.count) {
		return true
	}
	  return false
})
