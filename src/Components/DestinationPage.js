import DestinationText from '../Components/DestinationText'
import FancyBox from '../Components/FancyBox'

import '../Components/Category.css'
import { Link } from "react-router-dom";

function DestinationPage(props) {

    return (
            <div className="row">
                <div className="col-6">
                    <FancyBox travelPrice={props.img}></FancyBox>
                </div>
                <div className="col-6">
                    <DestinationText title={props.title} text={props.text}></DestinationText>
                </div>
            </div>
    )
}
export default DestinationPage;

