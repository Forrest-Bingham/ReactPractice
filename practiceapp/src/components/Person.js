import React from "react"

const Person = (props) => {


    return (
        <div>
            <h4>Hello my name is {props.name} and I am {props.age} years old </h4>
        </div>
    )
}

export default Person