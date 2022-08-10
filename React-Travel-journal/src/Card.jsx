
export default function Card (props){
    
    return (
        <div className="card">
        
            <img src={props.item.imageUrl} className="image"/>
            <div className="container">
                <div className="country-site">
                   <div className="loc-sign">
                        <p className="location-sign"><i className="fa-solid fa-location-dot"></i></p>
                        <p className="location">{props.item.location}</p> 
                    </div>
                    <a className="view-link" href={props.item.googleMapsUrl}>view map on Google</a> 
                </div>
                <p className="country">{props.item.title}</p> 
                <div className="date">
                    <p className="start-date">{props.item.startDate}</p>
                    <p className="end-date">{props.item.endDate}</p>
                </div>
                <p className="description">{props.item.description}</p>
            </div> 
        </div>
    )
}