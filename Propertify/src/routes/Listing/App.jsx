import BackgroundImage from "../Homepage/BackgroundImage"
import Search from "../../Utilities/Search" 
import Footer from "../../Utilities/Footer"
import Header from "../../Utilities/Header"
import "./App.css"

function App2() {

  return (
    <>
        
        
        <div id="property_listing_container0"><Header/></div>

        <div id="property_listing_container1">
            <img id="skyscraper" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/1200px-Dubai_Marina_Skyline.jpg"/>

            <div id="property_listing_container2">
                <div id="property_listing_container3">
                    <h1>List Property </h1>
                    <form action="/action_page.php" id="containing_form">
                        <label htmlFor="property_name">Property Name:</label>
                        <input type="text" id="property_name" name="property_name" className="login_input"/>
                        <label htmlFor="location">Location:</label>
                        <input type="text" id="location" name="location" className="login_input"/>
                        <label htmlFor="monthly_rent">Monthly Rent:</label>
                        <input type="text" id="monthly_rent" name="monthly_rent" className="login_input"/>
                        <label htmlFor="area">Area (in sqft):</label>
                        <input type="text" id="area" name="area" className="login_input"/>

                        <div className="property_listing_container4">
                            <label> Type:</label>
                            <select name="language" id="language" className="bhk_type">
                                <option value="1">1 BHK</option>
                                <option value="2">2 BHK</option>
                                <option value="3">3 BHK</option>
                                <option value="any">Any</option>
                            </select>
                        </div>

                        
                        <label htmlFor="phone">Phone no:</label>
                        <input type="text" id="phone" name="phone" className="login_input"/>
                        <label htmlFor="ImageURL">ImageURL:</label>
                        <input type="text" id="ImageURL" name="ImageURL" className="login_input"/>

                        <input type="submit" value="Add Property" id="listing_button" className="submit_button"/>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default App2
