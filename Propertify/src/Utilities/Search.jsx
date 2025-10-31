import "./Search.css"

export default function Search(){
    return (
        <div className="container">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            <div className="search-card">
                <h4 className="search-text"><img src="/Logo.jpg" height={30} width={30} className="image-container"></img> Search</h4>
                <div className="input-container">
                    <div className="input">
                        <label for="language">Location</label>
                        <select name="language" id="language">
                            <option value="BLR">Bangalore</option>
                            <option value="MUM">Mumbai</option>
                            <option value="CCU">Kolkata</option>
                        </select>

                    </div>
                    <div className="input">
                        <label for="language">Type</label>
                        <select name="language" id="language">
                            <option value="1">1 BHK</option>
                            <option value="2">2 BHK</option>
                            <option value="3">3 BHK</option>
                            <option value="any">Any</option>
                        </select>
                    </div>
                </div>
                <a href={`/SearchedPage`}><button type="button" className="btn btn-primary btn-sm">Search</button></a>
            </div>
        </div>
    )
}