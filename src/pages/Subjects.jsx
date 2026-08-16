import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { AP_SubjectsData, Categories } from '../data/data.js'

export default function Subjects() {
    const { subjectSlug } = useParams();
    const navigate = useNavigate();

    const selectedSubject = subjectSlug
        ? AP_SubjectsData.find((subject) => subject.slug === subjectSlug)
        : null;

    const [subjectSearch, setSubjectSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const filteredSubjects = AP_SubjectsData.filter((subject) => {
        const matchesSearch = subject.title.toLowerCase().includes(subjectSearch.toLowerCase());
        const matchesCategory = activeCategory === 'All' || subject.category === activeCategory;
        return matchesSearch && matchesCategory;
    })

    useEffect(() => {
        if (subjectSlug) {
            window.scrollTo(0, 0);
        } else {
            const savedPosition =
                sessionStorage.getItem('subjectsScrollPosition');
            if (savedPosition !== null) {
                requestAnimationFrame(() => {
                    window.scrollTo(0, Number(savedPosition));
                });
            }
        }
    }, [subjectSlug]);

    return (
        <>
            <Header />
            <main>
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
                        <div className="flex flex-col gap-3">
                        {[...filteredSubjects]
                            .sort((a, b) => a.title.localeCompare(b.title)) // sort by alphabetical order
                            .map((subject) => (
                            <div 
                                key={subject.id} 
                                className="subjectCard w-full" 
                                onClick={() => {
                                    sessionStorage.setItem(
                                        'subjectsScrollPosition',
                                        String(window.scrollY)
                                    );
                                    navigate(`/subjects/${subject.slug}`);
                                }}
                            >
                                <h1>{subject.title}</h1>
                            </div>
                        ))}
                        </div>

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
                            onClick={() => navigate('/subjects')}
                            >
                            ← Back to All Subjects
                            </button>
                        </div>

                        {/* SUBJECT NOTES TITLE */}
                        <h0>
                            {selectedSubject.title} Notes
                        </h0>
                        </div>

                    
                        <div className="flex flex-col gap-4">
                            {selectedSubject.notes.length === 0 ? (
                                <h2> Notes incoming, please check in later! </h2>
                            ) : (
                                selectedSubject.notes.map((note) => (
                                <div
                                    key = {note.id}
                                    className = "noteContainer"
                                >
                                    <h1>{note.title} ({note.year})</h1>
                                    <div>
                                        <h3><span className="highlight-text">Platform:</span> {note.platform}</h3>
                                        <h3><span className="highlight-text">Contributor(s):</span> {note.contributors.join(', ')}</h3>
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
            </main>
            <Footer />
        </>
    )
}