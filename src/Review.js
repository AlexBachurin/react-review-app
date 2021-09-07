import React, { useState, useEffect } from 'react'
import data from './data'
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
export default function Review() {
    //get our data in people array
    const peopleArr = data;
    //store value to toggle which person to show
    const [value, setValue] = useState(0);
    //get person with default value to show on page
    let person = peopleArr[value];
    //destructure default person object
    const { id, image, name, job, text } = person;
    //functionality to switch persons on page
    const nextPerson = () => {
        //check value borders
        if (value === peopleArr.length - 1) {
            setValue(0);
        }
        else {
            //increase value and show next person
            setValue(value + 1);
        }
    }
    //prev person
    const prevPerson = () => {
        //check for value borders
        if (value <= 0) {
            setValue(peopleArr.length - 1);
        } else {
            //decrease value and show prev person
            setValue(value - 1);
        }

    }



    //create person to show on the page
    const personJsx = (
        <article key={id} className="review">
            <div className="img-container">
                <img src={image} alt="name" className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">
                ${text}
            </p>
            <div className="button-container">
                <button onClick={prevPerson} className="prev-btn">
                    <FaChevronLeft />
                </button>
                <button onClick={nextPerson} className="next-btn">
                    <FaChevronRight />
                </button>
            </div >
            <button className="random-btn">surprise me</button>
        </article >
    )


    return (
        <>
            {personJsx}
        </>
    )

}
