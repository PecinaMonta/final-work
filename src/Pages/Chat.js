import { Link } from "react-router-dom";

function Chat() {
    return (
        <div>
            <div className="row">
        <div className="col-sm-12 my-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item nav-link">
                 
                <Link  className="subsequenceColour" to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active nav-link" aria-current="page">
                Chat
              </li>
            </ol>
          </nav>
        </div>
      </div>
            <div className="container py-3">

                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 col-lg-8">

                        <div className="card" style={{ borderRadius: "20px", borderTop: "10px solid #ffa900"}}>
                            <div className="card-header text-uppercase text-center p-3" style={{ borderRadius: "10px", backgroundColor: "#ffa900"}}>
                                <h5 className="mb-0 d-flex justify-content-center">Chat with us</h5>
                            </div>
                            <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ position: "relative", height: "500px",  width: "700px" }}>

                            
                            </div>
                            <div className="card-footer text-muted justify-content-start pt-2" style={{ borderRadius: "20px", backgroundColor: "#ffa900"}}>
                                <ul className="mb-1 " style={{ padding: "0px"}}>
                                    <div className="input pb-2">
                                    <input type="text" className="form-control" placeholder="Username"/>
                                    </div>
                                    <div className="form-outline form-white">
                                        <textarea className="form-control" id="message" rows="3" placeholder="Message"></textarea>
                                        <label className="form-label" for="message"></label>
                                    </div>
                                </ul>
                                <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-secondary btn-s btn-rounded float-end">Send message</button>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Chat