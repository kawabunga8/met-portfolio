export default function Etec500() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{backgroundImage: 'url(/StockSnap_O23H6MFZTV.jpg)'}}>
      <header className="sticky top-0 z-50 w-full flex flex-row items-center justify-between py-6 px-8" style={{backgroundColor: '#002145'}}>
        <a href="/" className="text-4xl font-bold text-white whitespace-nowrap hover:text-[#B4985B] transition-colors">MET ePortfolio</a>
        <p className="text-base text-[#B4985B] text-right max-w-2xl">UBC Master of Educational Technology &middot; Shingo Kawamura</p>
      </header>

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
            Completed
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 bg-black/60 rounded-lg m-6 backdrop-blur-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#B4985B] mb-6">
            Assignments
          </h2>
          <p className="text-amber-50">
            Assignments from this course will be added soon.
          </p>
        </div>
      </main>
    </div>
  );
}
