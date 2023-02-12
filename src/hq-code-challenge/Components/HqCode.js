import style from "./Hqcode.module.css";
import image from "../assets/image-qr-code.png";

export default function BannerHqCode() {
    return (
        <>
            <div className={style.container}>
                <div className={style.card}>
                    <div>
                        <img
                            className={style.image}
                            src={image}
                            alt="image-qr-code" />
                        <div className={style.title} >
                            <h2>Improve yout front-end skills by build projects</h2>
                            <div className={style.description}>
                                <p>Scan the HQ code to visit Front-en Mentor and take yout coding skills to the next level</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
