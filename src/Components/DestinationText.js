import '../Components/Category.css'

function DestinationText(props) {
    return (
        <div className="secondcolumn  seasonclass">
            <h3 className="article-title nav-link title-categories">{props.title}</h3>
            <p className="article-text">{props.text}</p>
        </div>
    )
}

export default DestinationText;
