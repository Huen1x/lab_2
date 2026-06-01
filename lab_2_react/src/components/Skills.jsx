function Skills() {
    const skillsList = [
        "JavaScript, TypeScript", "Node.js (Nest.js, Express.js)", "Python (FastAPI)", 
        "PostgreSQL, MySQL", "MongoDB, Redis", "Git, GitHub, Docker", "RestAPI, SOLID, SCRUM"
    ];

    return (
        <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white border-b-2 border-slate-200 dark:border-slate-700 pb-2 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
                {skillsList.map((skill, index) => (
                    <span key={index} className="bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition cursor-default">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default Skills;