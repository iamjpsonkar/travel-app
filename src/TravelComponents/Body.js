import React from 'react'

export const Body = () => {
    return (
        <div className="bg-info bg-gradient">
        <h1 className="text-center">Welcome!</h1>
        <p className="text-center"> 
            Hi! We are here to provide the safest and the most thrilling travel experience within the pandemic.
        </p>
        <hr/>
        <h2 className="text-center">Covid Awareness Notice</h2>
        <div className="row justify-content-center" >
            <div className="col-md-10 text-center">
                <p>
                    Wearing a mask over your nose and mouth is required on planes, buses, trains and other forms of public transportation traveling into, within, or out of the countries and while indoors at public transports such as airports and stations. Travelers are not required to wear a mask in outdoor areas of a conveyance
                    <br/>
                    <br/>
                    Follow All state and local recommendations and requirements, including mask wearing and social distancing. To ensure safe journey
                </p>
                <button type="button" className="btn btn-primary btn-lg rounded-pill">click to know more</button>
            </div>
        </div>
        
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                </div>
            </div>
            
        </div>
        </div>
    )
}
