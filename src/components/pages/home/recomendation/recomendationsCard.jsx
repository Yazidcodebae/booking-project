export default function RecomendationsCard() {
    return (
        <>
            <div className='col-md-4 bg-success p-3'>
                <div className='card-image bg-primary'>
                    <img src='' alt='Foto Ruangan' />
                </div>
                <div className='card-about'>
                    <div className='col-12'>
                        <span>Title</span>
                    </div>
                    <div className='row d-flex justify-content-between'>
                        <div className='col-6'>20/30 Orang</div>
                        <div className='col-6 text-end'>Rp. 100.000/Jam</div>
                    </div>
                </div>
            </div>
            <div className='col-md-4 bg-success p-3'>
                <div className='card-image bg-primary'>
                    <img src='' alt='Foto Ruangan' />
                </div>
                <div className='card-about'>
                    <div className='col-12'>
                        <span>Title</span>
                    </div>
                    <div className='row'>
                        <div className='col-6'>20/30 Orang</div>
                        <div className='col-6'>Rp. 100.000/Jam</div>
                    </div>
                </div>
            </div>
        </>
    );
}
