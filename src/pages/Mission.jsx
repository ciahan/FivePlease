import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function Mssion() {
    return (
        <>
            <Header />
            <main>
                <div className = "page">
                    <div className="flex flex-col gap-9">
                        {/* OUR MISSION PAGE TITLE */}
                        <h0> Our Mission </h0>

                        {/* OUR MISSION TEXT */}
                        <div className="flex flex-col gap-8">
                            <h2>
                            <span className="highlight-text">keytofive.org</span> was created with a very simple goal in mind.
                            However, to explain how it was created, we must start at the very beginning. 
                            </h2>
                            <div className="flex gap-4 items-center">
                            <h2>
                                In freshman year, I was trying to find resources for my APUSH class
                                (anybody who took it knows how many acts there were!). However, as I tried to
                                scour the internet for free notes, I was constantly blocked by paywalls. 
                            </h2>
                            <img
                                src={'/About/about1.png'}
                                style={{width: '200px', height: 'auto'}}
                            />
                            </div>
                            <div className="flex gap-4 items-center">
                            <img
                                src={'/About/about2.png'}
                                style={{width: '200px', height: 'auto'}}
                            />
                            <h2>
                                The cheapest textbooks at the local bookstore cost over $20 each.
                                When I tried the local library, many of the books I wanted were checked out
                                with months-long wait times.
                            </h2>
                            </div>
                            <div className="flex gap-4 items-center">
                            <h2>
                                I wanted something to change. So, throughout the past couple of years, Ciara
                                and I have been writing notes for all of the different APs that we took, from
                                AP Gov to AP Bio. I would often share these notes to Discord servers, with the
                                hope that some students would be able to find these resources helpful in their
                                own journey. 
                            </h2>
                            <img
                                src={'/About/about3.png'}
                                style={{width: '200px', height: 'auto'}}
                            />
                            </div>
                            <div className="flex gap-4 items-center">
                            <img
                                src={'/About/about4.png'}
                                style={{width: '200px', height: 'auto'}}
                            />
                            <h2>
                                During the summer of junior year, I realized that something could be done to
                                help make these notes available to all students across the world. Students that
                                couldn’t afford textbooks or resources could use our notes and become successful
                                exam takers. That was how the idea of <span className="highlight-text">keytofive.org</span> started. 
                            </h2>
                            </div>
                            <div className="flex gap-4 items-center">
                            <h2>
                                Of course, we needed help to help make this project successful. We recruited our
                                friends and also students that we met along our academic journeys to help with
                                our mission of making AP exam success achievable for all. 
                            </h2>
                            <img
                                src={'/About/about5.png'}
                                style={{width: '200px', height: 'auto'}}
                            />
                            </div>
                            <h2>
                            We truly believe that financial barriers shouldn't determine students’ access to
                            resources. FivePlease! exists to break these barriers and give all students the
                            opportunity to succeed, regardless of their background. 
                            </h2>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}