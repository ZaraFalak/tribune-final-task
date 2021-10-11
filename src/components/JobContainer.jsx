import React from 'react'
import "../stylesheets/JobContainer.scss"

const JobContainer = (props) => {
    console.log(props);
    return (

        <div className="job_container">

<div className="job"> 
<div className="image_container">
<span><img className="image_1" src={props.src} alt="" /></span>
</div>

    
<div className="side_text">
    <h3>{props.title}</h3>
    
    <div className="details">
        <img className="bag_logo" src="https://cdn3.iconfinder.com/data/icons/other-icons/48/briefcase-512.png" alt="logo" />
        <p>Segment</p>

        <img className="location_logo" src="https://media.istockphoto.com/vectors/map-pin-vector-glyph-icon-vector-id1193451471?k=20&m=1193451471&s=612x612&w=0&h=ve7JRaMvw6L1HBiDOTVwfbhHALPPH-nCMCgG0Z_z5NY=" alt="" />
        
        <p>London,Uk</p>

        <img className="clock_logo" src="https://cdn-icons-png.flaticon.com/512/109/109613.png" alt="" />
        
        <p>11 hours</p>

        <img className="money_logo" src="https://media.istockphoto.com/vectors/vector-image-of-a-flat-isolated-icon-dollar-sign-currency-exchange-vector-id1151557689?k=20&m=1151557689&s=612x612&w=0&h=SgftvPGhI2jYVS02mC65yWuff_SDNNrTM1wcV6Cpln8=" alt="" />
        
        <p>$54k - $45k</p>

        <button className="Full_time">Full Time</button>

        <button className="apply_job">Apply Job</button>

    </div>
    </div>               

</div>

</div>
    )
}

export default JobContainer
