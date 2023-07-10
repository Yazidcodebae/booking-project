import heroImage from "../../../../assets/img/hero.svg";
import "../../../../assets/css/home.css";
import Finding from "./finding";
export default function Hero() {
    return (
        <>
            <div className='hero'>
                <div className='hero-image'>
                    <img src={heroImage} alt='' />
                    <div>
                        <Finding />
                    </div>
                </div>
            </div>
        </>
    );
}
