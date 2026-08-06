import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const AP_SubjectsData = [
  {
    id: "us-history",
    title: "AP US History",
    category: "History",
    notes: [
      {
        id: "us-history1",
        title: "AP US History Note Set",
        platform: "remnote",
        contributors: ["Ciara Feng",],
        year: "2024",
        description: "",
        url: "https://remnote.com/a/AP-Bio/69dca40ff4246e2792279730",
      },
    ],
  },
  {
    id: "us-gov",
    title: "AP US Government",
    category: "History",
    notes: [
      {
        id: "us-gov1",
        title: "AP US Government Note Set",
        platform: "remnote",
        contributors: ["Ciara Feng",],
        year: "2025",
        description: "",
        url: "https://remnote.com/a/AP-Gov/69fd42041fc7a5f616eac4db",
      },
    ],
  },
  {
    id: "psych",
    title: "AP Psychology",
    category: "Social Sciences",
    notes: [
      {
        id: "psych-1",
        title: "AP Psychology Note Set",
        platform: "remnote",
        contributors: ["Ciara Feng",],
        year: "2025",
        description: "Please note that the unit organization is grouped differently in this note set for study purposes compared to the official College Board curriculum structure, but covers the same content.",
        url: "https://remnote.com/a/AP-Psych/69dca69ea5790b8b48f89c2f",
      },
    ],
  },
  {
    id: "world-history",
    title: "AP World History",
    category: "History",
    notes: [
    ],
  },
  {
    id: "micro",
    title: "AP Microeconomics",
    category: "Social Sciences",
    notes: [
    ],
  },
  {
    id: "macro",
    title: "AP Macroeconomics",
    category: "Social Sciences",
    notes: [
    ],
  },
  {
    id: "calc-bc",
    title: "AP Calculus BC",
    category: "Math",
    notes: [
    ],
  },
  {
    id: "stat",
    title: "AP Statistics",
    category: "Math",
    notes: [
    ],
  },
  {
    id: "compt-sci-a",
    title: "AP Computer Science A",
    category: "Computer Science",
    notes: [
    ],
  },
  {
    id: "bio",
    title: "AP Biology",
    category: "Science",
    notes: [
      {
        id: "bio-1",
        title: "AP Biology Note Set",
        platform: "remnote",
        contributors: ["Ciara Feng",],
        year: "2025",
        description: "",
        url: "https://remnote.com/a/AP-Bio/69dca40ff4246e2792279730",
      },
    ],
  },
  {
    id: "physics-c-mech",
    title: "AP Physics C: Mechanics",
    category: "Science",
    notes: [
    ],
  },
  {
    id: "physics-c-elec",
    title: "AP Physics C: Electricity and Magnetism",
    category: "Science",
    notes: [
    ],
  },
  {
    id: "chem",
    title: "AP Chemistry",
    category: "Science",
    notes: [
    ],
  },
  /*
  {
    id: "",
    title: "",
    category: "",
    notes: [
      {
        id: "",
        title: "",
        platform: "",
        contributors: [],
        year: "",
        description: "",
        url: "",
      },
    ],
  },
  */
]

const TeamMembers = [
  {
    id: "joycef",
    name: "Joyce Fang",
    headshot: "joyce_headshot.png",
    role: "Founder and President",
    bio: "Joyce Fang is a senior at Montgomery Blair High School. She has had numerous leadership positions, serving as State Parliamentarian for FBLA and Editor in Chief of SilverQuest. Outside of school, she enjoys playing flute, trying different foods, and talking to strangers.",
  },
  {
    id: "ciaraf",
    name: "Ciara Feng",
    headshot: "ciara_headshot.png",
    role: "President and Web Design Director",
    bio: "Hiiii im Ciarawr <3",
  },
  {
    id: "rebeccal",
    name: "Rebecca Lemiesa",
    headshot: "rebecca_headshot.png",
    role: "Content Director",
    bio: "",
  },
  {
    id: "alicez",
    name: "Alice Zhang",
    headshot: "",
    role: "Recruitment Director",
    bio: "Alice Zhang is a rising junior at Wayzata High School. Outside of school, she enjoys playing the piano, reading, doing martial arts, and ice skating. Her favorite AP Class was Music Theory. In school, she leads the Biology Club and Neuroscience Club, and occasionally goes on side quests with her friends to the woods and ponds by her school.",
  },
  {
    id: "liyah",
    name: "Liya Henock",
    headshot: "liya_headshot.png",
    role: "Social Media Director",
    bio: "Hi, my name is Liya Henok, I am a Junior at Montgomery Blair HS, and a little about me is that I love driving go-karts,  my fav dessert is tiramisu, I have played violin for 6 years and I play soccer, basketball, and volleyball!"
  },
  {
    id: "ruth",
    name: "Ruth",
    headshot: "",
    role: "AP Gov Course Manager",
    bio: "",
  },
  {
    id: "",
    name: "Karizma",
    headshot: "",
    role: "AP Psych Course Manager",
    bio: "",
  },
  /*
  {
    id: "",
    name: "",
    headshot: "",
    role: "",
    bio: "",
  },
  */
]

function App() {
  const [count, setCount] = useState(0) // SHOULD DELETE THIS LINE LATER
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <>
      {/* HEADER START */}
      <header className="header">
        {/* Logo */}

        {/* Navigation buttons */}
        <nav className="navButtons">
          <a 
            href="#"
            onClick = {
              (e) => { e.preventDefault(); setCurrentPage('home'); }
            }
          >
            Home
          </a>
          <a
            href="#"
            onClick = {
              (e) => { e.preventDefault(); setCurrentPage('subjects'); }
            }
          >
            Subjects
          </a>
          <div className="navItemWithDropdown">
            <span> About </span>
            <div className="dropdownMenu">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setCurrentPage('about-main'); }}
              >
                Our Mission
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setCurrentPage('about-team'); }}
              >
                Meet the Team
              </a>
            </div>
          </div>
        </nav>
      </header>
      {/* HEADER END */}

      {/* PAGES */}
      <main>
        {/* HOME PAGE */}
        {currentPage === 'home'&& (
          <div className = "page">
            <>
              <h1>
                Free AP Exam Resources for Every Student
              </h1>
              <h2>
                Access comprehensive study notes, practice resources, and exam prep materials, all completely free. We believe every student deserves the tools to succeed.
              </h2>
            </>
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
            </div>
          </div>
        )}

        {/* SUBJECTS PAGE */}
        {currentPage === 'subjects' && (
          <div className="page">  
            {!selectedSubject ? (
              <>
                <h1>Available Subjects</h1>
                <h2>Choose a subject to access notes and free resources</h2>          
                {/* SUBJECTS DASHBOARD */}
                <>
                  {[...AP_SubjectsData]
                    .sort((a, b) => a.title.localeCompare(b.title))
                    .map((subject) => (
                      <div 
                        key={subject.id} 
                        className="subjectCard w-full" 
                        onClick={() => setSelectedSubject(subject)}
                      >
                        <span>{subject.category}</span>
                        <h2>{subject.title}</h2>
                        <div>View Notes</div>
                      </div>
                    ))}
                </>
              </>
            ) : (
              /* NOTES DETAIL */
              <div className="subjectDetail">
                {/* BACK BUTTON */}
                <button onClick={() => setSelectedSubject(null)}>Back</button>
                <h1> {selectedSubject.title} Notes </h1>
                <div className="noteSection">
                  {selectedSubject.notes.length === 0 ? (
                    <p> Notes incoming! Please check in later! </p>
                  ) : (
                    selectedSubject.notes.map((note) => (
                      <div
                        key = {note.id}
                        className = "container"
                      >
                        <h4>{note.title} ({note.year})</h4>

                        <p><strong>Platform:</strong> {note.platform}</p>
                        <p><strong>Contributor(s):</strong> {note.contributors.join(', ')}</p>
                        {note.description && <p className="description">{note.description}</p>}
                        
                        <a 
                          href={note.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="viewLinkButton"
                        >
                          Open Notes on RemNote ↗
                        </a>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ABOUT OUR MISSION PAGE */}
        {currentPage === 'about-main'&& (
          <div className = "page">
            <h1>
              Our Mission
            </h1>
            <h2>
              AP Note Share was created with a simple goal: to make high-quality AP exam preparation accessible to all students, regardless of their financial situation.
            </h2>
            <h2>
              All notes are hosted on RemNote for easy studying with spaced repetition. We also curate free resources from across the web to help you prepare for your exams.
            </h2>
            <h2>
              Everything here is 100% free — no sign-ups, no subscriptions, no hidden costs.
            </h2>
          </div>
        )}

        {/* ABOUT OUR TEAM PAGE */}
        {currentPage === 'about-team'&& (
          <div className = "page">
            <h1>
              Meet the Team
            </h1>
            {TeamMembers.map((member) => (
              <>
                <h1 key={member.id}>
                  {member.name}
                </h1>
                <h2> {member.role} </h2>
                <img
                  src={`/Headshots/${member.headshot}`}
                  style={{ width: '300px', height: 'auto' }}
                />
                <p> {member.bio} </p>
              </>
            ))}
            <h2>
              AP Note Share was created with a simple goal: to make high-quality AP exam preparation accessible to all students, regardless of their financial situation.
            </h2>
            <h2>
              All notes are hosted on RemNote for easy studying with spaced repetition. We also curate free resources from across the web to help you prepare for your exams.
            </h2>
            <h2>
              Everything here is 100% free — no sign-ups, no subscriptions, no hidden costs.
            </h2>
          </div>
        )}

      </main>
    </>
  )
}

export default App
