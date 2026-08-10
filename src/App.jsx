import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>
// fonts to try: merriweather, georgia, playfair display

const AP_SubjectsData = [
  {
    id: "us-history",
    title: "AP US History",
    category: "History",
    notes: [
      {
        id: "us-history1",
        title: "AP US History Note Set",
        platform: "RemNote",
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
        platform: "RemNote",
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
        platform: "RemNote",
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
        platform: "RemNote",
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
const Categories = [
  {
    id: "math",
    name: "Math",
  },
  {
    id: "comptSci",
    name: "Computer Science",
  },
  {
    id: "science",
    name: "Science",
  },
  {
    id: "history",
    name: "History",
  },
  {
    id: "socialSci",
    name: "Social Sciences",
  },
]
const TeamMembers = {
  Executives: [
    {
      id: "joycef",
      name: "Joyce Fang",
      headshot: "joyce_headshot.png",
      role: "Founder & President",
      bio: "Joyce Fang is a senior at Montgomery Blair High School. She has had numerous leadership positions, serving as State Parliamentarian for FBLA and Editor in Chief of SilverQuest. Outside of school, she enjoys playing flute, trying different foods, and talking to strangers.",
    },
    {
      id: "ciaraf",
      name: "Ciara Feng",
      headshot: "ciara_headshot.png",
      role: "President & Web Design Director",
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
  ],
  CourseManagers: [
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
  ],
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [subjectSearch, setSubjectSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredSubjects = AP_SubjectsData.filter((subject) => {
    const matchesSearch = subject.title.toLowerCase().includes(subjectSearch.toLowerCase());
    const matchesCategory = activeCategory === 'All' || subject.category === activeCategory;
    return matchesSearch && matchesCategory;
  })

  return (
    <>
      {/* HEADER START */}
      <header className="header">
        {/* Logo */}
        <a 
          href="#"
          onClick = {
            (e) => { e.preventDefault(); setCurrentPage('home'); }
          }
        >
          APNoteShare
        </a>        {/* Navigation buttons */}
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
                href="#"
                onClick = {
                  (e) => { e.preventDefault(); setCurrentPage('subjects'); }
                }
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
        )}

        {/* SUBJECTS PAGE */}
        {currentPage === 'subjects' && (
          <div className="page">  
            {!selectedSubject ? (
              /* SUBJECTS */
              <div className="w-full flex flex-col gap-12">
                {/* PAGE TITLE TEXT */}
                <div className="flex flex-col gap-2">
                  <h0>
                    Available Subjects
                  </h0>
                  <h2>Choose a subject to access notes and free resources</h2>          
                </div>

                {/* FILTERING METHODS */}
                <div className="flex flex-col gap-3">
                  {/* SEARCH BAR */}
                  <div className="searchBar">
                    <input
                      type="text"
                      placeholder="Search for a subject..."
                      value={subjectSearch}
                      onChange={(e) => setSubjectSearch(e.target.value)}
                    />
                  </div>

                  {/* CATEGORIES TO FILTER */}
                  <div className="flex justify-center gap-4">
                    {Categories.map((category) => {
                      const isActive = activeCategory === category.name;
                      return (
                        <button
                          key={category.id}
                          className={
                            `category
                            ${activeCategory === category.name ? 'active' : ''}`
                          }
                          onClick={() => {
                            if (activeCategory === category.name) {
                              setActiveCategory('All');
                            } else {
                              setActiveCategory(category.name);
                            }
                          }}
                        >
                          {category.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* SUBJECTS DASHBOARD */}
                <>
                  {[...filteredSubjects]
                    .sort((a, b) => a.title.localeCompare(b.title)) // sort by alphabetical order
                    .map((subject) => (
                      <div 
                        key={subject.id} 
                        className="subjectCard w-full" 
                        onClick={() => setSelectedSubject(subject)}
                      >
                        <h1>{subject.title}</h1>
                      </div>
                    ))}
                </>

                {/* NO MATCHING SUBJECTS MESSAGE (only relevant if something has been entered in the search bar) */}
                {filteredSubjects.length === 0 && (
                  <h2> Sorry, no subjects match your search. </h2>
                )}
              </div>
            ) : (
              /* NOTES DETAIL */
              <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col gap-2">
                  {/* BACK BUTTON */}
                  <div>
                    <button
                      className="backButton"
                      onClick={() => setSelectedSubject(null)}
                    >
                      ← Back to All Subjects
                    </button>
                  </div>

                  {/* SUBJECT NOTES TITLE */}
                  <h0>
                    {selectedSubject.title} Notes
                  </h0>
                </div>

              
                <div className="noteSection">
                  {selectedSubject.notes.length === 0 ? (
                    <h2> Notes incoming, please check in later! </h2>
                  ) : (
                    selectedSubject.notes.map((note) => (
                      <div
                        key = {note.id}
                        className = "container"
                      >
                        <h1>{note.title} ({note.year})</h1>
                        <div>
                          <h2><strong>Platform:</strong> {note.platform}</h2>
                          <h2><strong>Contributor(s):</strong> {note.contributors.join(', ')}</h2>
                        </div>
                        {note.description && <p className="description">{note.description}</p>}
                        
                        <a 
                          href={note.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="buttonBig"
                        >
                          Open Notes
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
            <div className="flex flex-col gap-9">
              {/* OUR MISSION PAGE TITLE */}
              <h0> Our Mission </h0>

              {/* OUR MISSION TEXT */}
              <div className="flex flex-col gap-6">
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
            </div>
          </div>
        )}

        {/* ABOUT OUR TEAM PAGE */}
        {currentPage === 'about-team'&& (
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
                      style={{ width: '300px', height: 'auto' }}
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
                      style={{ width: '300px', height: 'auto' }}
                    />
                    <h3> {member.bio} </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      {/* PAGES END */}
    </>
  )
}

export default App
