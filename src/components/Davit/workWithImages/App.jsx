import React, { useState } from "react"
import Style from "../workWithImages/App.module.css"
import { Parallax } from "react-parallax"
import Car_bg from "../workWithImages/Images/car_bg.jpg"
import data from "./data.json"
import Car from "./Car/Car"


function App() {
	const [car, setcar] = useState(data)

	return (
		<div className={Style.App}>
			<Parallax strength={600} bgImage={Car_bg}>
				<div className={Style.content}>
					<div className={Style.text_content}>Welcome To Mercedes-Benz Official Website</div>
				</div>
			</Parallax>
			<div className={Style.container}>
				{car.map((elem) => {
					return <Car car={elem} key={elem.id} />
				})}
			</div>
		</div>
	)
}
export default App;