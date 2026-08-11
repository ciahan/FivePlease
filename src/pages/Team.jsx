import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { TeamMembers } from '../data/data.js'

export default function Team() {
    return (
        <>
            <Header />
            <main>
                <div className = "page">
                    <div className="flex flex-col gap-9">
                        <h0> Meet the Team! </h0>

                        {/* Executives */}
                        <div className="flex flex-col items-center">
                            <img
                            src={'/Banners/ExecutivesBanner.png'}
                            style={{ width: '375px', height: 'auto'}}
                            />
                        </div>
                        <div className="teamMembers">
                            {TeamMembers.Executives.map((member) => (
                            <div className="flex flex-col gap-3 items-center">
                                <div
                                key={member.id}
                                className="flex flex-col gap-1"
                                >
                                <h1>
                                    {member.name}
                                </h1>
                                <h2> {member.role} </h2>
                                </div>
                                <img
                                src={`/Headshots/${member.headshot}`}
                                style={{ width: 'auto', height: '400px' }}
                                />
                                <h3> {member.bio} </h3>
                            </div>
                            ))}
                        </div>

                        {/* COURSE MANAGERS */}
                        <div className="flex flex-col items-center">
                            <img
                            src={'/Banners/CourseManagersBanner.png'}
                            style={{ width: '450px', height: 'auto'}}
                            />
                        </div>
                        <div className="teamMembers">
                            {TeamMembers.CourseManagers.map((member) => (
                            <div className="flex flex-col gap-3 items-center">
                                <div
                                key={member.id}
                                className="flex flex-col gap-1"
                                >
                                <h1>
                                    {member.name}
                                </h1>
                                <h2> {member.role} </h2>
                                </div>
                                <img
                                src={`/Headshots/${member.headshot}`}
                                style={{ width: 'auto', height: '400px' }}
                                />
                                <h3> {member.bio} </h3>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}