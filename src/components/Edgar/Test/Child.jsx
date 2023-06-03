import React, {memo} from 'react'

function Child({ sortedArray }) {
	console.log("ok")
	return (
		<div>
			{sortedArray().join(' | ')}
		</div>
	)
}
export default memo(Child)