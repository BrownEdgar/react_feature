import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
	<ContentLoader
		speed={2}
		width={700}
		height={460}
		viewBox="0 0 700 460"
		backgroundColor="#bbc3be"
		foregroundColor="#60b6e1"
		{...props}
	>
		<rect x="37" y="85" rx="2" ry="2" width="825" height="38" />
		<rect x="37" y="143" rx="2" ry="2" width="825" height="38" />
		<rect x="36" y="25" rx="2" ry="2" width="825" height="38" />
		<rect x="38" y="201" rx="2" ry="2" width="825" height="38" />
	</ContentLoader>
)

export default MyLoader