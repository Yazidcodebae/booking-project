import RecomendationsCard from "./recomendationsCard";

export default function Recomendation() {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='header-recomendation pt-4 text-center px-5 mx-5'>
                                <h2>Recomendation Vanue</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Consequatur, sit mollitia
                                </p>
                            </div>
                            <div className='card-recomendations bg-danger'>
                                <div className='row d-flex gap-3'>
                                    <RecomendationsCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
