import React from 'react'

const About = () => {
    return (
        <>
            <div className="about-section flex gap-12 !px-12 !py-20">

                <div className="about-image"></div>

                <div className="about-info flex flex-col justify-between">

                    <h1 className="about-heading">
                        WE’RE CHANGING <br />
                        THE WAY THINGS <br />
                        GET MADE
                    </h1>

                    <div className="about-details">
                        <div className="about-box">
                            <h2>SUSTAINABILITY</h2>
                            <p>
                                We’re challenging conventional retail,
                                putting an end to dead stock,
                                unconventional waste and more.
                            </p>
                        </div>

                        <div className="divider"></div>

                        <div className="about-box">
                            <h2>MISSION</h2>
                            <p>
                                We’re on a mission to empower creators,
                                create independence in the commercial
                                world and beyond.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
            <div className="values-section">
                <div className="value-box">
                    <span>01</span>
                    <h3>DESIGNED WITH PURPOSE</h3>
                    <p>
                        Every piece begins with intent — balancing form,
                        comfort, and longevity.
                    </p>
                </div>

                <div className="value-box">
                    <span>02</span>
                    <h3>RESPONSIBLE PRODUCTION</h3>
                    <p>
                        Small batches, reduced waste, and mindful sourcing
                        define our process.
                    </p>
                </div>

                <div className="value-box">
                    <span>03</span>
                    <h3>BUILT TO LAST</h3>
                    <p>
                        Quality craftsmanship ensures pieces that remain
                        relevant season after season.
                    </p>
                </div>
            </div>

        </>


    )
}

export default About
