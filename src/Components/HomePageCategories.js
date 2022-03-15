function HomePageCategories(props) {
    const img = props.img;
    const description = props.description;
    const title = props.title;

    return (

        <div className="card border-2 " style={{backgroundColor: "rgb(250, 250, 250)", height: "318px", width: '340px'}} >
            <img src={img} alt=""/>
            {title}
            <p className="card-text"  style={{backgroundColor: "rgb(250, 250, 250)", textAlign: "center"}}>{description}</p>
        </div>

    )
}


export default HomePageCategories;

