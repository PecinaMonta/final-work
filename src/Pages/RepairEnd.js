import DestinationPage from '../Components/DestinationPage';
import { Link } from "react-router-dom";


function RepairEnd() {
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
                                <Link className="subsequenceColour" to="/hiking">Categories</Link>
                            </li>
                            <li className="breadcrumb-item active nav-link" aria-current="page">
                                Repair
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <DestinationPage
                title='Repair'
                text='At Wildcats Repair, we understand the importance of keeping your motorcycles in great condition. This is why we offer our two-wheeler tune-up services. With our help, you can ensure your rides optimal performance and stay road-worthy longer.Our services include motorcycle repair, motorcycle service, ATV repair, watercraft repair, dirt bike repair. Our team consists of specialists. Just come to us and we will help you.'
                categoryName='Repair'
                categoryLink='/repairend'
               
            >
            </DestinationPage>
        </div>
    )
}
export default RepairEnd;
