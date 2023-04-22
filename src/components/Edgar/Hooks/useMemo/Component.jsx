import React, { memo } from 'react'

function Component(props) {
	function sum() {
		console.log("get total...")
		let total = 0
		const t1 = performance.now()
		for (let i = 0; i <= props.count; i++) {
			total += i;
		}
		const t2 = performance.now()
		console.log(t2-t1)
		return total;
	}

	return (
		<div>
			<h2>Total : {sum()}</h2>
		</div>
	)
}

export default memo(Component, (prevProps, nextProps) => {
	if (prevProps.count === nextProps.count) {
		return true;
	}
	return false;
})

// 10 = 55

// (n + 1) * (n/2)