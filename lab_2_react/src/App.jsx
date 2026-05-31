import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';

function App() {
    return (
        <div>
            <Header />
            <main>
                <About />
                <Experience />
                <Education />
                <Skills />
                <Languages />
            </main>
        </div>
    );
}

export default App;