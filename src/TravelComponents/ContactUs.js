import React from 'react'

export const ContactUs = () => {
    return (
        <div>
            <div className="container">
                <br/>
                <div className="row text-center">
                    <div className="col-sm-3 bg-info rounded-pill p-5">
                        <h2>Keep in touch</h2>
                        <p>
                            Want to keep in toch? We love words from you. Here is how you can contact us.
                        </p>
                    </div>
                
                    <div className="col-sm-3 offset-sm-1 bg-danger rounded-pill p-5">
                        <h2 className="text-primary">Call Us</h2>
                        <p className="text-light"> 
                        Stuck with doubts? Pick up the phone to get our support.
                        </p>
                        <hr/>
                        <p className="text-primary">+912143657698</p>
                    </div>
                    <div className="col-sm-3 offset-sm-1 bg-info rounded-pill p-5">
                        <h2 className="text-primary">Visit Us</h2>
                        <p className="text-light"> 
                        TravelPro Box 564,<br/> Hogwarts Mars</p>
                        <hr/>
                        <p className="text-primary">travelpro@gmail.com</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
