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
            Fall 2026 &middot; In Progress
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 bg-black/60 rounded-lg m-6 backdrop-blur-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#B4985B] mb-4">
            Course Overview
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-amber-50 mb-6">
              This course examines learning analytics as a technology-enhanced learning field that blends business intelligence, web analytics, educational data mining, and recommender systems. Rather than training data scientists, it targets "scholar practitioner[s]" to critically evaluate LA applications in educational contexts.
            </p>

            <h3 className="text-xl font-semibold text-[#B4985B] mt-8 mb-4">
              Learning Goals
            </h3>
            <ul className="text-amber-50 mb-6 space-y-2 list-disc list-inside">
              <li>Understand how learning analytics developed as a field</li>
              <li>Identify stakeholder perspectives and purposes for LA implementation</li>
              <li>Evaluate LA processes, tools, and claims critically</li>
              <li>Analyze authentic teaching and learning data</li>
              <li>Address ethical considerations in data use</li>
              <li>Gain practical experience with LA tools and interpretation</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#B4985B] mt-8 mb-4">
              Course Structure
            </h3>
            <p className="text-amber-50 mb-6">
              The course uses seven short tasks (5-10% each) and two major assignments (15% and 40%) totaling 100%. Work includes exploring Canvas analytics, investigating analytical methods, evaluating LA tools, and a self-directed "choose your own adventure" project using tools like Gephi or Tableau.
            </p>

            <h3 className="text-xl font-semibold text-[#B4985B] mt-8 mb-4">
              Key Resources
            </h3>
            <p className="text-amber-50 mb-6">
              Required readings include Sclater's <em>Learning Analytics Explained</em> (2017) and the <em>Handbook of Learning Analytics</em> (2017) edited by Lang, Siemens, Wise, and Gašević.
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 border border-slate-300/20 rounded-lg bg-white/5">
          <p className="text-amber-50/70 text-sm">
            Assignments and course work will be added as they are completed throughout the term.
          </p>
        </div>
      </main>
    </div>
  );
}
