function Experience() {
    return (
        <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white border-b-2 border-slate-200 dark:border-slate-700 pb-2 mb-4">Experience</h2>
            <article className="bg-blue-50 dark:bg-slate-700 border-l-4 border-blue-500 dark:border-blue-400 p-5 rounded-r-lg shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white">MarketReveal — Back-end</h3>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-slate-600 px-2 py-1 rounded">September 2024 - present</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-3">MarketReveal is a project that automatically searches and collects listings from marketplaces like OLX, helping users quickly find the best products at competitive prices.</p>
                <p className="text-sm text-slate-700 dark:text-slate-400 mb-2"><strong className="text-slate-900 dark:text-white">Tech:</strong> TypeScript, Nest.js, GrammyJS, PostgreSQL, Sequlize, Redis, Git, GitHub, Docker, Docker-compose, SOLID, Jira, SCRUM.</p>
                <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1">
                    GitHub link: project
                </a>
            </article>
        </section>
    );
}

export default Experience;