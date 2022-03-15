import Category from '../Components/Category'
import '../Components/Category.css'
import { Link } from "react-router-dom";

function Categories() {

    const category1 = {
        image: '/Img/club.jpg',
        title: 'Wildcats moto club',
        description: 'The nice warmth of the summer months allows just about any vacation activities without weather-based interruptions. You can plan just about anything without fear of extreme cold or snow getting in the way. Easier Packing – Partly thanks to the weather, the summer allows for simpler packing. Luckily there is a range of incredible destinations that are just begging to be explored, with cities, beaches, islands, and even safari locations having hot weather throughout the month of January. Read on to find out my top picks for warm places to go on holiday in January so you can start your New Year off with a bang!',
    }

    const category2 = {
        image: '/Img/Shop.jpg',
        title: 'Shop',
        description: 'Winter vacation is a time to relax and celebrate the time in the company of your family and friends. ... Winter vacations usually consist of 15 days and include 2 important festivals which are Christmas and New year. So, the holiday season is full of festival flavors. Winter wonderland vacations don’t always have to be about skiing. If you’d like to enjoy a wintertime adventure but you aren’t into skiing, or if you’re part of a family that includes skiers and non-skiers alike, you’ll find a number of resorts across the globe that cater to all types of travelers. At these resorts, there are a host of activities that are sure to please just about everyone.',
    }

    const category3 = {
        image: '/Img/repair.jpg',
        title: 'Repair',
        description: 'Hiking/walking tourism is considered to be special interest tourism and a challenge for local development. ... Hiking trails allow rest, enjoyment, and contact with nature. Furthermore, trails allow for proximity to the local population and its heritage, thus interconnecting to cultural tourism.Hiking sometimes involves bushwhacking and is sometimes referred to as such. This specifically refers to difficult walking through dense forest, undergrowth, or bushes where forward progress requires pushing vegetation aside. In extreme cases of bushwhacking, where the vegetation is so dense that human passage is impeded, a machete is used to clear a pathway. The Australian term bushwalking refers to both on and off-trail hiking. Common terms for hiking used by New Zealanders are tramping (particularly for overnight and longer trips), walking or bushwalking.',
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
