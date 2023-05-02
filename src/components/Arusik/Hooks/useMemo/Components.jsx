import React ,{ memo } from 'react'

function Components(props) {


    function sum() {
        console.log("get total")
        let total = 0
        for (let i = 0; i < props.count; i++) {
            total += i
        }
        return total
    }
  return (
    <div>
        <h2>Total : {sum()}</h2>
    </div>
  )
}


export default memo(Components, (prevProps,nextProps) => {
    console.log({prevProps,nextProps})
    return true
})
