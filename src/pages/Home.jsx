import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <div className = "page">
                    {/* INTRO TEXT */}
                    <div className = "main-text">
                    {/* TITLE */}
                    <h0>
                        <span className="highlight-text">Free AP Exam Resources</span>
                        {" "} for {" "}
                        <span className="underline-text">
                        Every Student
                        </span>
                    </h0>
                    {/* TEXT */}
                    <h2>
                        Access comprehensive study notes, practice resources, and exam prep materials, all completely free. We believe every student deserves the tools to succeed.
                    </h2>
                    {/* VIEW SUBJECTS BUTTON */}
                    <a
                        className = "buttonBig"
                        href="/subjects"
                    >
                        <h1> View Subjects → </h1>
                    </a>
                    </div>

                    {/* GET INVOLVED */}
                    <div className = "container">
                    <>
                        <h1>
                        Want to Help Other Students?
                        </h1>
                        <h2>
                        This project is built by students, for students. If you have notes you would like to share or want to volunteer your time to help expand our resources, we would love to hear from you.
                        </h2>
                    </>
                    <div className = "flex gap-5">
                        <div className = "container2 flex-1">
                        <h2> Share Your Notes </h2>
                        <p> Have high-quality notes for an AP subject? Share them with fellow students and help them succeed. </p>
                        </div>
                        <div className = "container2 flex-1">
                        <h2> Volunteer </h2>
                        <p> Help us curate resources, review content, or spread the word about free AP resources. </p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <a
                        className="container2 flex-1"
                        href="mailto:apnoteshare@gmail.com?subject=I%20want%20to%20contribute"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Get in Touch
                        </a>
                        <a
                        className="container2 flex-1"
                        href="https://www.instagram.com/apnoteshare"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Follow us on Instagram
                        </a>
                    </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
   )
}