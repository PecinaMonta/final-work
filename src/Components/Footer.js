import SocialFollow from "./SocialFollow";

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center my-4 border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-3">
            <span class="text-muted">
            &copy; 2022 Copyright, Wildcats Moto Club by Monta
            </span>
          </div>
          <div className="col-md-6 p-3">
            <ul className="justify-content-end list-unstyled d-flex">
              <SocialFollow />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
