import style from '../Components/InterativeRating.module.css'
import thanks from '../assets/illustration-thank-you.svg'
import { HiOutlineArrowSmLeft } from "react-icons/hi";

export const Thankyou = ({rating,isSubmit }) => {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.modal}>
                    <div className={style.thanksImage}>
                        <img src={thanks} alt="illustration-thank-you" />
                    </div>
                    <div className={style.rating}>
                        <p >You selected {rating} out of 5</p>
                    </div>
                    <h1 id={style.idtitle} className={style.title}>Thank you!</h1>
                    <p id={style.idDescription} className={style.description}> We appreciated you taking time to give rating....   If you ever need more support, dont hesitate to get in touch.</p>
                    <button  onClick={() => isSubmit(false)} className={style.reset} type="">Back</button>
                </div>
            </div>
        </>
    )
}
