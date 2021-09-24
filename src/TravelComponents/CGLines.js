import React from 'react'
import { Link } from "react-router-dom";

export const CGLines = () => {
    let astyle={
        color:"black",
        textDecoration:"none"
    }
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-sm-1">
                </div>
                <div id="guideline-wrapper" className="col-sm-11">
                    <div id="guidelines" >
                        <h3  className="text-primary">IMPORTANT : ADHERE TO STATE GUIDELINES</h3>
                        <p>
                            In terms of passes, permits, quarantine regulations, and other criteria, states have issued their travel instructions for inbound and outgoing travellers, Before arrangeing your trip, please read the guidelines of your source and destination states throughly to ensure a hassle-free journey.
                        </p>
                        <hr/>
                        <p>
                            <b>NOTE :</b>
                            These policies were last updated on July 21, 2021, and are subject to change. Passengers should check for any recent information from the relevent authorities and ensure that they are followed.
                        </p>
                    <div id="general">
                        <h3 className="text-primary">General Rules for travel across the country</h3>
                        <p>
                        It is suggested that all passengers download the Aarogya Setu app to their mobile phones.
                        </p>
                        <p>
                        All passengers must wear face coverings or masks and adhere to strict hand, respiratory, and environmental hygiene guidelines.
                        </p>
                        <p>
                        At bus terminals, all passengers must adhere to social distancing standards.
                        </p>
                        <p>
                        Passengers who have a quarantine seal will not be permitted to board the bus.
                        </p>
                    </div>
                    <hr></hr>
                    
                    </div>
                    
                    <div id="state">
                        <div id="state-container">
                            <Link data-bs-toggle="collapse" to="#TamilNadu" aria-expanded="false" className="fs-6"  aria-controls="collapseExample" style={astyle}><h3>TamilNadu</h3></Link>
                            <div className="collapse" id="TamilNadu">
                                <div className="card card-body">
                                    <li>Epass is now required for all visitors entering Tamil Nadu.</li>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        
                        <div id="state-container">
                            <Link data-bs-toggle="collapse" to="#Karnataka" aria-expanded="false" className="fs-6"  aria-controls="collapseExample"style={astyle} ><h3>Karnataka</h3>
                            </Link>
                            <div className="collapse" id="Karnataka">
                                <div className="card card-body">
                                <li>For people travelling from states other than Maharastra and Kerala, no RT-PCR is necessary.</li>
                                <li>Traveling from Maharashtra and Kerela to Karnataka guidelines: Passengers arriving in Karnataka by bus must provide a negative RT-PCR certificate no older than 72 hours or a vaccination certificate for at least one dose of COVID 19 vaccine.</li>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        
                        <div id="state-container">
                        <Link data-bs-toggle="collapse" to="#Kerala" aria-expanded="false" className="fs-6"  aria-controls="collapseExample"style={astyle} ><h3>Kerala</h3>
                        </Link>
                            <div className="collapse" id="Kerala">
                                <div className="card card-body">
                                <li>
                                Vaccination Certificate (At Least first dose certificate) or negative RT-PCR certificate within 72 hours.
                                </li>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        
                        <div id="state-container">
                        <Link data-bs-toggle="collapse" to="#Goa" aria-expanded="false" className="fs-6"  aria-controls="collapseExample" style={astyle} ><h3>Goa</h3>
                        </Link>
                            <div className="collapse" id="Goa">
                                <div className="card card-body">
                                <li>
                                For persons travelling from outside Goa, a complete vaccination certificate or a COVID-19 negative report from an RT-PCR test conducted up to 72 hours is required.
                                </li>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        
                        <div id="state-container">
                        <Link data-bs-toggle="collapse" to="#Telangana" aria-expanded="false" className="fs-6"  aria-controls="collapseExample" style={astyle} ><h3>Telangana</h3>
                        </Link>
                            <div className="collapse" id="Telangana">
                                <div className="card card-body">
                                <li>
                                According to the state government's most recent guidelines, there are no restrictions on interstate travel.
                                </li>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        
                        <div id="state-container">
                        <Link data-bs-toggle="collapse" to="#Maharastra" aria-expanded="false" className="fs-6"  aria-controls="collapseExample" style={astyle} ><h3>Maharastra</h3>
                        </Link>
                            <div className="collapse" id="Maharastra">
                                <div className="card card-body">
                                <li>
                                All travellers must have a COVID-19 negative test result from an RT-PCR test performed up to 48 hours before entering Maharashtra.
                                </li>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        
                        <div id="state-container">
                        <Link data-bs-toggle="collapse" to="#UttarPradesh" aria-expanded="false" className="fs-6"  aria-controls="collapseExample" style={astyle} ><h3>UttarPradesh</h3>
                        </Link>
                            <div className="collapse" id="UttarPradesh">
                                <div className="card card-body">
                                <li>
                                According to the state government's most recent guidelines, there are no restrictions on interstate travel.
                                </li>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        
                        <div id="state-container">
                        <Link data-bs-toggle="collapse" to="#Delhi" aria-expanded="false" className="fs-6"  aria-controls="collapseExample" style={astyle} ><h3>Delhi</h3>
                        </Link>
                            <div className="collapse" id="Delhi">
                                <div className="card card-body">
                                <li>
                                According to the state government's most recent guidelines, there are no restrictions on interstate travel.
                                </li>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        
                        <div id="state-container">
                        <Link data-bs-toggle="collapse" to="#Gujarat" aria-expanded="false" className="fs-6"  aria-controls="collapseExample" style={astyle} ><h3>Gujarat</h3>
                        </Link>
                            <div className="collapse" id="Gujarat">
                                <div className="card card-body">
                                <li>
                                According to the state government's most recent guidelines, there are no restrictions on interstate travel.
                                </li>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        
                        <div id="state-container">
                        <Link data-bs-toggle="collapse" to="#WestBengal" aria-expanded="false" className="fs-6"  aria-controls="collapseExample" style={astyle} ><h3>WestBengal</h3>
                        </Link>
                            <div className="collapse" id="WestBengal">
                                <div className="card card-body">
                                <li>
                                Regulatory authorities will ensure that masks are used and other Covid-19 relevant protocol is followed in all public places, transportation, and other areas.
                                </li>
                                </div>
                            </div>

                        </div>
                        <hr/>
                    </div>
                    <div id="guidelines"> 
                    <div id="general">
                        <h3 className="text-primary" >Instructions to Operators</h3>
                        <p>The seating arrangement on buses/planes is designed to maintain social distancing, which is why only alternating seats are permitted.</p>
                        <p>Both the staffs and the passengers are required to wear masks throughout the journey.</p>
                        <p>While boarding the bus/plane, you may be provided a sanitizer spray by some operators.</p>
                        <p>During boarding, thermal checks are performed, and anyone who registers a high temperature is not permitted to board the bus/plane.</p>
                        <p>Passengers on a bus are no longer provided with a bottle of drinking water.</p>
                        <p>After every journey, each bus/plane is subjected to a thorough cleaning and sanitising procedure.</p>
                        <p>Buses do not stop for drinks or snacks. It goes in a straight line from point A to point B.</p>
                        <p>For their own and others' safety, passengers are asked to follow these Coronavirus precautions, and anybody with symptoms such as the flu, cough, or respiratory difficulties should not board the bus/plane.</p>
                        <p>Most buses/planes prohibit children under the age of ten from boarding.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
