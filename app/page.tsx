export default function Home() {
  const courses = [
    {
      slug: "etec-500",
      code: "ETEC 500",
      title: "Research Methodologies in Education",
      term: "",
      status: "Completed",
    },
    {
      slug: "etec-510",
      code: "ETEC 510",
      title: "Design of Technology-Supported Learning Environments",
      term: "",
      status: "Completed",
    },
    {
      slug: "etec-565",
      code: "ETEC 565",
      title: "Ethical, Critical, and Professional Use of Generative AI in Teaching and Learning",
      term: "Summer 2026",
      status: "In Progress",
    },
  ];

  const placeholders = [
    { code: "Future Course", note: "Coming soon" },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{backgroundImage: 'url(/StockSnap_O23H6MFZTV.jpg)'}}>
      <header className="sticky top-0 z-50 w-full flex flex-row items-center justify-between py-6 px-8" style={{backgroundColor: '#002145'}}>
        <a href="/" className="text-4xl font-bold text-white whitespace-nowrap hover:text-[#B4985B] transition-colors">MET ePortfolio</a>
        <p className="text-base text-[#B4985B] text-right max-w-2xl">UBC Master of Educational Technology &middot; Shingo Kawamura</p>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 bg-black/60 rounded-lg m-6 backdrop-blur-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#B4985B] mb-2">
            Courses
          </h2>
          <p className="text-amber-50 mb-6">
            Coursework and assignments from my journey through the UBC Master of Educational Technology program, curated by course.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <a
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="bg-cover bg-center rounded-lg border border-slate-200 p-6 hover:shadow-lg transition-shadow group"
                style={{backgroundImage: 'url(/StockSnap_H5CCPV9ZFQ.jpg)'}}
              >
                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[#B4985B] transition-colors">
                  {course.code}
                </h3>
                <p className="text-amber-50 mb-4">
                  {course.title}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-amber-50/80">
                    {course.term}
                  </span>
                  <span className="px-3 py-1 text-sm font-medium rounded-full text-white" style={{backgroundColor: '#002145'}}>
                    {course.status}
                  </span>
                </div>
              </a>
            ))}
            {placeholders.map((placeholder, i) => (
              <div
                key={i}
                className="rounded-lg border border-dashed border-slate-400 p-6 bg-white/10 flex flex-col items-center justify-center text-center"
              >
                <h3 className="text-xl font-semibold text-amber-50/60 mb-1">
                  {placeholder.code}
                </h3>
                <p className="text-amber-50/50 text-sm">
                  {placeholder.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
