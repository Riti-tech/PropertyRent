import "./SearchCard.css"

export default function SearchCard({IMGurl,Name,Address,Price,Sqft,BHK,ContactNumber}){
    return (
        <>
            {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> */}
            <div className="content-container">
                <img src={IMGurl} height={150} width={150}></img>
                <div className="data-container-parent">
                    <h4>{Name}</h4>
                    {Address}
                    <div class="data-container">
                        <div>{Price}/month</div>
                        <div>{Sqft}</div>
                        <div>{BHK}</div>
                    </div>
                    <div className="the-contact-submit">
                        {ContactNumber}
                        <a href="#"><button class="button-submit" role="button">View</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}