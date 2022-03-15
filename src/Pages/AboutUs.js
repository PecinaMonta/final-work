import { Link } from "react-router-dom";
import AboutusAddress from "../Components/AboutusAddress";
import AboutusMission from "../Components/AboutusMission";
import AboutusContacts from "../Components/AboutusContacts";
import GoogleMap from "../Components/GoogleMap";

function AboutUs() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 my-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item nav-link">
                <Link className="subsequenceColour" to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active nav-link" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
                style={{marginRight: "3px", backgroundColor: "#ffa900"}}
              >
                Mission
              </button>
              <button
                class="nav-link"
                id="nav-address-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-address"
                type="button"
                role="tab"
                aria-controls="nav-address"
                aria-selected="false"
                style={{marginRight: "3px", backgroundColor: "#ffa900"}}
              >
                Address
              </button>
              <button
                class="nav-link"
                id="nav-summary-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-summary"
                type="button"
                role="tab"
                aria-controls="nav-summary"
                aria-selected="false"
                style={{marginRight: "3px", backgroundColor: "#ffa900"}}
              >
                Contacts
              </button>
            </div>
          </nav>
          
          {/* tab augšas beigas, sākas product daļa */}
          <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <AboutusMission />
          </div>
          <div
            className="tab-pane fade"
            id="nav-address"
            role="tabpanel"
            aria-labelledby="nav-address-tab"
          >
            <div class="container pt-4">
            <div class="row">
              <div class="col">
              <AboutusAddress />
              </div>
              <div class="col">
              <GoogleMap />
              </div>
            </div>
          </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-summary"
            role="tabpanel"
            aria-labelledby="nav-summary-tab"
          >
            <AboutusContacts />
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
