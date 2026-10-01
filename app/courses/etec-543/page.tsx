export default function Etec543() {
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
            ETEC 543
          </h1>
          <p className="text-amber-50 mb-2">
            Understanding Learning Analytics
          </p>
          <p className="text-sm text-amber-50/80">
            Winter 2026 Term 1 &middot; In Progress
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 bg-black/60 rounded-lg m-6 backdrop-blur-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#B4985B] mb-6">
            Assignments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="bg-cover bg-center rounded-lg border border-slate-200 p-6"
              style={{backgroundImage: 'url(/StockSnap_H5CCPV9ZFQ.jpg)'}}
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                Task 2B: Get Your Hands Dirty &ndash; Explore Some &lsquo;Real&rsquo; Data
              </h3>
              <p className="text-amber-50 mb-4">
                Exploring anonymized Canvas data from a past offering of the course: what each of five datasets records, which variables can join them, what should be cleaned, and what teaching and learning questions the data could answer.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-amber-50/80">
                  Winter 2026 Term 1 &middot; Task
                </span>
                <span className="px-3 py-1 text-sm font-medium rounded-full text-white" style={{backgroundColor: '#002145'}}>
                  In Progress
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
