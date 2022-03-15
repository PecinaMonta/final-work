import HomePageCategories from '../Components/HomePageCategories'
import { Link } from "react-router-dom";


function HomeCategories() {

    const category1 = {
        img: '/Img/club.jpg',
        title: 'Club',
        description: 'Motorcycling culture is something that riders enjoy no matter how different they are in terms of religion, gender, language, race, or skin color. Our Club Wildcats accept all. With us, you’re not a price tag. The moment you walk through our doors, you become part of a family. To become a member of Wildcats Moto Club you need to register. Established in 1987, Wildcats is enjoyed by many riders of various skill levels from beginners to Pros, both young and old. ',
    }

    const category2 = {
        img: '/Img/shop.jpg',
        title: 'Shop',
        description: 'Wildcats Shop is areas premier motorcycle and powersports dealership. Located in Kengarags, Riga, Wildcats Shop Mall is just minutes from Rigas city center. Wildcats Shop has thousands of new and used motorcycles (scooters and dirt bikes), powersports vehicles (all-terrain vehicles, personal watercraft, and snowmobiles), and power equipment (generators, snow blowers, and lawn equipment) in-stock from some of the best manufacturers in the industry.',
    }

    const category3 = {
        img: '/Img/repair.jpg',
        title: 'Repair',
        description: 'At Wildcats Repair, we understand the importance of keeping your motorcycles in great condition. This is why we offer our two-wheeler tune-up services. With our help, you can ensure your rides optimal performance and stay road-worthy longer.Our services include motorcycle repair, motorcycle service, ATV repair, watercraft repair, dirt bike repair. Our team consists of specialists. Just come to us and we will help you.',
    }

    return (
        <div>
            <p><h1 style={{ marginTop: "10px", fontSize: "50px", textAlign: "center", color: "white"}} className="nav-link">WILDCATS MOTO CLUB</h1></p>
            <div className="row d-flex">
                <div className="col">
                    <HomePageCategories img={category1.img} style={{width: '200px',  textAlign: "center",}}/>
                    <Link className="link-primary nav-link"  style={{ width: '340px', textDecoration: "none", fontSize: "35px", textAlign: "center", backgroundColor: "#FF8C00"}} to="/clubend">{category1.title}</Link>
                    <HomePageCategories  description={category1.description}/>
                </div>
                <div className="col">
                    <HomePageCategories img={category2.img} />
                    <Link className="link-primary nav-link"  style={{ width: '340px', textDecoration: "none", fontSize: "35px", textAlign: "center", backgroundColor: "#FF8C00"}} to="/shopend">{category2.title}</Link>
                    <HomePageCategories description={category2.description}/>
                </div>
                <div className="col">
                    <HomePageCategories img={category3.img} />
                    <Link className="link-primary nav-link"  style={{ width: '340px', textDecoration: "none", fontSize: "35px", textAlign: "center", backgroundColor: "#FF8C00"}} to="/repairend">{category3.title}</Link>
                    <HomePageCategories description={category3.description}/>
                </div>
            </div>

        </div>
    )
}

export default HomeCategories;