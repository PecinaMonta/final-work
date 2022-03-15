import Category from '../Components/Category'
import '../Components/Category.css'
import { Link } from "react-router-dom";

function Categories() {

    const category1 = {
        image: '/Img/club.jpg',
        title: 'Wildcats moto club',
        description: 'Motorcycling culture is something that riders enjoy no matter how different they are in terms of religion, gender, language, race, or skin color. Our Club Wildcats accept all. With us, you’re not a price tag. The moment you walk through our doors, you become part of a family. To become a member of Wildcats Moto Club you need to register. Established in 1987, Wildcats is enjoyed by many riders of various skill levels from beginners to Pros, both young and old. ',
    }

    const category2 = {
        image: '/Img/Shop.jpg',
        title: 'Shop',
        description: 'Wildcats Shop is areas premier motorcycle and powersports dealership. Located in Kengarags, Riga, Wildcats Shop Mall is just minutes from Rigas city center. Wildcats Shop has thousands of new and used motorcycles (scooters and dirt bikes), powersports vehicles (all-terrain vehicles, personal watercraft, and snowmobiles), and power equipment (generators, snow blowers, and lawn equipment) in-stock from some of the best manufacturers in the industry.',
    }

    const category3 = {
        image: '/Img/repair.jpg',
        title: 'Repair',
        description: 'At Wildcats Repair, we understand the importance of keeping your motorcycles in great condition. This is why we offer our two-wheeler tune-up services. With our help, you can ensure your rides optimal performance and stay road-worthy longer.Our services include motorcycle repair, motorcycle service, ATV repair, watercraft repair, dirt bike repair. Our team consists of specialists. Just come to us and we will help you.',
    }

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
                                Categories
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
           
           
            <Link to='/clubend' style={{ textDecoration: "none", fontSize: "20px" }}><h4 className="nav-link title-centered" style={{ marginTop: "15px", borderTop: "4px solid #ffa300"}}>{category1.title}</h4></Link>
            <Category image={category1.image} title={category1.title} description={category1.description}></Category>
            
            <Link to='/shopend' style={{ textDecoration: "none", fontSize: "20px" }}><h4 className="nav-link title-centered" style={{ marginTop: "15px", borderTop: "4px solid #ffa300"}}>{category2.title}</h4></Link>
            <Category image={category2.image} title={category2.title} description={category2.description}></Category>
            
            <Link to='/repairend' style={{ textDecoration: "none", fontSize: "20px" }}><h4 className="nav-link title-centered" style={{ marginTop: "15px", borderTop: "4px solid #ffa300"}}>{category3.title}</h4></Link>
            <Category image={category3.image} title={category3.title} description={category3.description}></Category>
        </div>

    )
}
export default Categories;
