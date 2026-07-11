export default function Etec500() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{backgroundImage: 'url(/StockSnap_O23H6MFZTV.jpg)'}}>
      <div className="border-b border-slate-200 bg-cover bg-center" style={{backgroundImage: 'url(/StockSnap_H5CCPV9ZFQ.jpg)'}}>
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-4">
            <a href="/" className="text-sm font-medium text-[#B4985B] hover:underline">
              &larr; All Courses
            </a>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            ETEC 500
          </h1>
          <p className="text-amber-50 mb-2">
            Research Methodologies in Education
          </p>
          <p className="text-sm text-amber-50/80">
            Fall 2025 &middot; Instructor: Dr. Oksana Bartosh &middot; Completed
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 bg-black/60 rounded-lg m-6 backdrop-blur-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#B4985B] mb-6">
            Assignments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="/courses/etec-500/assignment-2"
              className="bg-cover bg-center rounded-lg border border-slate-200 p-6 hover:shadow-lg transition-shadow group"
              style={{backgroundImage: 'url(/StockSnap_H5CCPV9ZFQ.jpg)'}}
            >
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#B4985B] transition-colors">
                A Critical Review of Ateeq et al. (2024)
              </h3>
              <p className="text-amber-50 mb-4">
                A critical review of a quantitative study on AI in education, examining the alignment between its research questions, survey instrument, and claims about academic integrity and holistic assessment.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-amber-50/80">
                  Fall 2025
                </span>
                <span className="px-3 py-1 text-sm font-medium rounded-full text-white" style={{backgroundColor: '#002145'}}>
                  Completed
                </span>
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
