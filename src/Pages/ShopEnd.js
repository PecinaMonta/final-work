import DestinationPage from '../Components/DestinationPage';
import { Link } from "react-router-dom";


function ShopEnd() {
    return (
        <div>
            <div className="row">
                <div className="col-sm-12 my-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item nav-link">
                                <Link className="subsequenceColour" to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item nav-link">
                                <Link className="subsequenceColour" to="/winterdestination">Categories</Link>
                            </li>
                            <li className="breadcrumb-item active nav-link" aria-current="page">
                                Shop
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <DestinationPage
                title='Shop'
                text='Wildcats Shop is areas premier motorcycle and powersports dealership. Located in Maskačka, Riga, Wildcats Shop Mall is just minutes from Rigas city center. Wildcats Shop has thousands of new and used motorcycles (scooters and dirt bikes), powersports vehicles (all-terrain vehicles, personal watercraft, and snowmobiles), and power equipment (generators, snow blowers, and lawn equipment) in-stock from some of the best manufacturers in the industry. As part of our sales department, we offer financing for customers, motorcycle leasing (for used Harley-Davidson® and Victory), in-house insurance, and even motorcycle rentals as an EagleRider rental facility. Our parts department is one of the largest in the country carrying everything an enthusiast needs and wants including motorcycle gear, oil, fluids, OEM replacement parts (as well as aftermarket accessories) from the leading manufacturers. In addition, we have a full-service Service Department with factory trained and certified technicians for all of the manufactures we carry and Master Technicians for BMW, Triumph, and Harley-Davidson!'
                categoryName='Shop'
                categoryLink='/categories/shop'
               
            >
            </DestinationPage>
        </div>
    )
}
export default ShopEnd;

