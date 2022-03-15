function GoogleMap() {

    return (
        <div>
            
            <div className="map-responsive">
                <iframe src="https://maps.google.com/maps?q=%C4%B6engarags&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="600"
                    height="450"
                    frameBorder="0"
                    title="googleMap"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"></iframe>
            </div>
        </div>
    )
}

export default GoogleMap