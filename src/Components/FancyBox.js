import '../Components/Category.css'

function FancyBox(props) {
    return (
        <div className="row">
            <div className="row">
                <a href="/Img/club.jpg" data-fancybox="gallery">
                    <img src="/Img/club.jpg" className="imgSeason" alt="img"/>
                </a>
            </div>
            <div className="row">
                <div className="col-4">
                    <a href='/Img/shop.jpg' data-fancybox="gallery">
                        <img src='/Img/shop.jpg' className="image-season" />
                    </a>
                </div>
                <div className="col-4">
                    <a href="/Img/club.jpg" data-fancybox="gallery">
                        <img src="/Img/club.jpg" className="image-season" />
                    </a>
                </div>
                <div className="col-4">
                    <a href="/Img/club.jpg" data-fancybox="gallery">
                        <img src="/Img/club.jpg" className="image-season" />
                    </a>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <a href="/Img/shop.jpg" data-fancybox="gallery">
                        <img src="/Img/shop.jpg" className="image-season" />
                    </a>
                </div>
                <div className="col-4">
                    <a href="/Img/club.jpg" data-fancybox="gallery">
                        <img src="/Img/club.jpg" className="image-season" />
                    </a>
                </div>
                <div className="col-4">
                    <a href="/Img/club.jpg" data-fancybox="gallery">
                        <img src="/Img/club.jpg" className="image-season" />
                    </a>
                </div>
            </div>

            
        </div>
    )
}

export default FancyBox;