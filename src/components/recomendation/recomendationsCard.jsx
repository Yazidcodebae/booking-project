import Foto1 from "../../assets/images/foto1.jpg";
import Foto2 from "../../assets/images/foto2.jpg";
import Foto3 from "../../assets/images/foto3.jpg";
import { useSelector } from "react-redux";

export default function RecomendationsCard() {
    const recomendations = useSelector(
        (state) => state.recomendation.recomendations
    );

    return (
        <>
            {recomendations.map((item) => (
                <div className='col-md-4 p-3' key={item.id}>
                    <div className='card-image'>
                        <div
                            id={`carouselExampleControls-${item.id}`}
                            className='carousel slide'
                            data-bs-ride='carousel'
                        >
                            <div className='carousel-inner'>
                                <div className='carousel-item active'>
                                    <img src={Foto1} alt='Foto1' />
                                </div>
                                <div className='carousel-item'>
                                    <img src={Foto2} alt='Foto2' />
                                </div>
                                <div className='carousel-item'>
                                    <img src={Foto3} alt='Foto3' />
                                </div>
                            </div>
                            <button
                                className='carousel-control-prev'
                                type='button'
                                data-bs-target={`#carouselExampleControls-${item.id}`}
                                data-bs-slide='prev'
                            >
                                <span
                                    className='carousel-control-prev-icon'
                                    aria-hidden='true'
                                ></span>
                                <span className='visually-hidden'>
                                    Previous
                                </span>
                            </button>
                            <button
                                className='carousel-control-next'
                                type='button'
                                data-bs-target={`#carouselExampleControls-${item.id}`}
                                data-bs-slide='next'
                            >
                                <span
                                    className='carousel-control-next-icon'
                                    aria-hidden='true'
                                ></span>
                                <span className='visually-hidden'>Next</span>
                            </button>
                        </div>
                    </div>
                    <div className='card-about'>
                        <div className='col-12'>
                            <h3>{item.title}</h3>
                        </div>
                        <div className='row d-flex justify-content-between'>
                            <div className='col-6'>
                                <h5>20/30</h5>
                            </div>
                            <div className='col-6 text-end'>
                                <h5>{item.price}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
