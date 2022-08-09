
export default function Card(props) {
    // cretaing a conditional display of a badge
    let badgeText 
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    }  else {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge"> {badgeText} </div>}
            <img src={`/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="/star.jpg" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}