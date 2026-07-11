export default function Etec510() {
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
            ETEC 510
          </h1>
          <p className="text-amber-50 mb-2">
            Design of Technology-Supported Learning Environments
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="/courses/etec-510/conducting-tutorial"
              className="bg-cover bg-center rounded-lg border border-slate-200 p-6 hover:shadow-lg transition-shadow group"
              style={{backgroundImage: 'url(/StockSnap_H5CCPV9ZFQ.jpg)'}}
            >
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#B4985B] transition-colors">
                Creating an Animated Conducting Tutorial
              </h3>
              <p className="text-amber-50 mb-4">
                An instructional video on conducting technique for high school students, built with an animated puppet using Adobe Illustrator, Character Animator, and ElevenLabs.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-amber-50/80">
                  Video project
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
