import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';

function App() {
    return (
        <div className="min-h-screen bg-slate-100 py-10 font-sans text-slate-800">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
                <Header />
                <main className="p-8 space-y-8">
                    <About />
                    <Experience />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Education />
                        <Skills />
                    </div>
                    <Languages />
                </main>
            </div>
        </div>
    );
}

export default App;