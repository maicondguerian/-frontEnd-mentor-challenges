import React, { useState } from "react";
import style from "./InterativeRating.module.css";
import star from '../assets/icon-star.svg'
import { Thankyou } from "./Thankyou";

export default function InterativeRating() {

    const [rating, setRating] = useState()
    const [submit, isSubmit] = useState(false)

    const handleSubmit = () => {
        setTimeout(() => {
            isSubmit(true)
        }, 2000)
    }

    
    const handleClick = (e) => {
        setRating(e.target.value)
    }

    const numbers = [1, 2, 3, 4, 5];

    if (submit === true) {
        return (
            <>
                <Thankyou rating={rating}
                isSubmit={isSubmit}/> 
            </>
        )

    }
    return (
        <>
            <div className={style.wrapper}>
                
                <div className={style.modal}>
                    <div>
                        <img src={star} alt="star" className={style.star} />
                    </div>
                    <h1 className={style.title}>How did we do?</h1>
                    <p className={style.description}>
                        Please let us know how we did with your support request.
                        All feedback is appreciated to help us improve uor offering!
                    </p>
                    <div className={style.buttonsGroup} >
                        {numbers.map((number, index) => (
                            <button onClick={e => setRating(e.target.value)} className={style.ratingButtons} value={number} type="">{number}</button>
                        ))}
                    </div>
                    <div className={style.submit}>
                        <button onClick={handleSubmit} className={style.submitButtom} type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}
