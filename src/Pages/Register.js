import { Link } from "react-router-dom";

function Register() {
    return (
        <div>
             <div className="row">
        <div className="col-sm-12 my-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item nav-link">
                 
                <Link className="subsequenceColour" to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active nav-link" aria-current="page">
                Register
              </li>
            </ol>
          </nav>
        </div>
      </div>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10 col-xl-8" >
                            <div className="card" style={{ borderRadius: "20px", borderTop: "10px solid #ffa900"}}>
                                <div className="card-body" style={{ padding: "0"}}>
                                    <h2 className="text-uppercase text-center mb-4 p-3" style={{borderRadius: "10px", backgroundColor: "#ffa900"}}>Join us</h2>

                                    <form>
                                        <div className="form-outline m-4">
                                            <input type="text" id="username" className="form-control form-control-s" placeholder="Username" />
                                            <label className="form-label" for="username"></label>
                                        </div>

                                        <div className="form-outline m-4">
                                            <input type="password" id="password" className="form-control form-control-s" placeholder="Password"/>
                                            <label className="form-label" for="password"></label>
                                        </div>

                                        <div className="form-outline m-4">
                                            <input type="password" id="retypepassword" className="form-control form-control-s" placeholder="Retrype password"/>
                                            <label className="form-label" for="retypepassword"></label>
                                        </div>

                                        <div className="form-outline m-4">
                                            <input type="text" id="firstname" className="form-control form-control-s" placeholder="First name"/>
                                            <label className="form-label" for="firstname"></label>
                                        </div>

                                        <div className="form-outline m-4">
                                            <input type="text" id="lastname" className="form-control form-control-s" placeholder="Last name"/>
                                            <label className="form-label" for="lastname"></label>
                                        </div>

                                        <div className="form-outline m-4">
                                            <input type="email" id="email" className="form-control form-control-s" placeholder="E-mail"/>
                                            <label className="form-label" for="email"></label>
                                        </div>

                                        <div className="form-outline mx-4" style={{paddingBottom: "0"}}>
                                            <select type="text" id="country" className="form-select form-select-md">
                                                <option select>Select Country</option>
                                                <option value="1">Latvia</option>
                                                <option value="2">Lithuania</option>
                                                <option value="3">Estonia</option>
                                            </select>
                                            <label className="form-label" for="country"></label>
                                        </div>
                                        <div className="pt-3 pb-2" style={{ borderRadius: "20px", backgroundColor: "#ffa900"}}>
                                        <div className="form-check d-flex justify-content-center mb-3">
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                                value=""
                                                id="form2Example3cg"
                                            />
                                            <label className="form-check-label" for="check">
                                                Agree with <a href="#!" className="text-body"><u>terms and conditions</u></a>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-center ">
                                        <button type="button" className="btn btn-secondary btn-s btn-rounded float-end">Register</button>
                                        </div>
                                        </div>
                                        

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register