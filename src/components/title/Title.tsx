import React from "react"
import { Container } from "react-bootstrap"

const Title = () => {
  return (
    <Container>
      <h1 className="text-center mt-5">New Year's Resolutions</h1>
      <h3 className="text-center my-2">What are your goals for 2023?</h3>
      <h5>Instruccions:</h5>
      <ul>
        <li>Basically, you can add and delete your goals</li>
        <li>
          Drag and drop your goals to move them from one column to another
        </li>
        <li>The data is saved in the browser's local storage</li>
      </ul>
    </Container>
  )
}

export default Title
