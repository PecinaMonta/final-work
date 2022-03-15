import DestinationPage from '../Components/DestinationPage';
import { Link } from "react-router-dom";


function ClubEnd() {
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
                                <Link className="subsequenceColour" to="/summerdestination">Categories</Link>
                            </li>
                            <li className="breadcrumb-item active nav-link" aria-current="page">
                                Club
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <DestinationPage
                title='Club'
                text='Motorcycling culture is something that riders enjoy no matter how different they are in terms of religion, gender, language, race, or skin color. Our Club Wildcats accept all. With us, you’re not a price tag. The moment you walk through our doors, you become part of a family. To become a member of Wildcats Moto Club you need to register. Established in 1987, Wildcats is enjoyed by many riders of various skill levels from beginners to Pros, both young and old. '
                categoryName='Club'
                categoryLink='/club'
                
            >
            </DestinationPage>
        </div>
    )
}
export default ClubEnd;