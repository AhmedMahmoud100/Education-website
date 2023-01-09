import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
  const location = useLocation()

  return (
    <>
    <div className="before-back"></div>
      <section className='back'>
        <div className='offset'></div>
        <div className="back-flex">
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
        </div>
      </section>
    </>
  )
}

export default Back
