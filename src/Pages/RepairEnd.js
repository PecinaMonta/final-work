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
                text='Norway is a Nordic country in Northern Europe, the mainland territory of which comprises the western and northernmost portion of the Scandinavian Peninsula. The remote Arctic island of Jan Mayen and the archipelago of Svalbard also form part of Norway.[note 6] Bouvet Island, located in the Subantarctic, is a dependency of Norway; it also lays claims to the Antarctic territories of Peter I Island and Queen Maud Land. The capital and largest city in Norway is Oslo. Norway has a total area of 385,207 square kilometres (148,729 sq mi)[12] and had a population of 5,385,300 in November 2020.[21] The country shares a long eastern border with Sweden at a length of 1,619 km (1,006 mi). It is bordered by Finland and Russia to the north-east and the Skagerrak strait to the south, on the other side of which are Denmark and the United Kingdom. Norway has an extensive coastline, facing the North Atlantic Ocean and the Barents Sea. The maritime influence dominates Norways climate, with mild lowland temperatures on the sea coasts; the interior, while colder, is also a lot milder than areas elsewhere in the world on such northerly latitudes. Even during polar night in the north, temperatures above freezing are commonplace on the coastline. The maritime influence brings high rainfall and snowfall to some areas of the country. Harald V of the House of Glücksburg is the current King of Norway. Jonas Gahr Støre has been prime minister since 2021, replacing Erna Solberg. As a unitary sovereign state with a constitutional monarchy, Norway divides state power between the parliament, the cabinet and the supreme court, as determined by the 1814 constitution. The kingdom was established in 872 as a merger of many petty kingdoms and has existed continuously for 1,150 years. From 1537 to 1814, Norway was a part of the Kingdom of Denmark–Norway, and from 1814 to 1905, it was in a personal union with the Kingdom of Sweden. Norway was neutral during the First World War and remained so until April 1940 when the country was invaded and occupied by Germany until the end of World War II.'
                categoryName='Repair'
                categoryLink='/repairend'
               
            >
            </DestinationPage>
        </div>
    )
}
export default RepairEnd;
