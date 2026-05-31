function Languages() {
    return (
        <section>
            <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">Languages</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center shadow-sm">
                    <span className="block font-bold text-slate-800">English</span>
                    <span className="text-sm text-blue-600">B2 Upper Int.</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center shadow-sm">
                    <span className="block font-bold text-slate-800">German</span>
                    <span className="text-sm text-blue-600">B1 Intermediate</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center shadow-sm">
                    <span className="block font-bold text-slate-800">Ukrainian</span>
                    <span className="text-sm text-blue-600">Native (C1)</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center shadow-sm">
                    <span className="block font-bold text-slate-800">Russian</span>
                    <span className="text-sm text-blue-600">Native (C1)</span>
                </div>
            </div>
        </section>
    );
}

export default Languages;