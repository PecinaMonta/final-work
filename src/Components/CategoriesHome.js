function CategoriesHome(props) {
    const img = props.img;
    const title = props.title;
    const description = props.description;

    return (
        <div>
            <div className="row">
                <div className="col-3">
                    <img style={{marginBottom: "20px"}} src={img} />
                </div>
                <div className="col-9">
                    <h5 className="card-title">
                        <h4>{title}</h4>
                    </h5>
                    <p className="text" style={{textAlign: "justify"}}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default CategoriesHome;