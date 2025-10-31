import BackgroundImage from "../Homepage/BackgroundImage"
import Footer from "../../Utilities/Footer"
import Search from "../../Utilities/Search"
import "./App.css"
import SearchCard from "./SearchCard"

export default function App1(){
    return (
        <>
            <BackgroundImage/>
            <div className="search-scroller">
                <SearchCard IMGurl={"https://imagecdn.99acres.com/media1/24056/5/481125082M-1710849302847.jpg"} Name={"Vaishnavi Oasis"} Address={"JP Nagar, Bangalore"} Price={"₹48000"} Sqft={"1570 sqft"} BHK={"3 BHK"} ContactNumber={"9843212345"}/>
                <SearchCard IMGurl={"https://imagecdn.99acres.com/media1/24255/17/485117002M-1712643540661.jpg"} Name={"Brigade Corner Stone"} Address={"Varthur, Bangalore"} Price={"₹52000"} Sqft={"1392 sqft"} BHK={"2 BHK"} ContactNumber={"2847212345"}/>
                <SearchCard IMGurl={"https://imagecdn.99acres.com/media1/24259/4/485184980M-1712657074453.jpg"} Name={"Mangal Murthi Signature"} Address={"Madiwala, Bangalore"} Price={"₹35000"} Sqft={"650 sqft"} BHK={"1 BHK"} ContactNumber={"8841212345"}/>
            </div>
            <Footer/>
        </>
    )
}