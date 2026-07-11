export default function ConductingTutorial() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{backgroundImage: 'url(/StockSnap_O23H6MFZTV.jpg)'}}>
      <header className="sticky top-0 z-50 w-full flex flex-row items-center justify-between py-6 px-8" style={{backgroundColor: '#002145'}}>
        <a href="/" className="text-4xl font-bold text-white whitespace-nowrap hover:text-[#B4985B] transition-colors">MET ePortfolio</a>
        <p className="text-base text-[#B4985B] text-right max-w-2xl">UBC Master of Educational Technology &middot; Shingo Kawamura</p>
      </header>

      <div className="border-b border-slate-200 bg-cover bg-center" style={{backgroundImage: 'url(/StockSnap_H5CCPV9ZFQ.jpg)'}}>
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="mb-4">
            <a href="/courses/etec-510" className="text-sm font-medium text-[#B4985B] hover:underline">
              &larr; ETEC 510
            </a>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Creating an Animated Conducting Tutorial
          </h1>
          <p className="text-amber-50 mb-4">
            An instructional video on conducting technique for high school students, built with an animated puppet using Adobe Illustrator, Character Animator, and ElevenLabs.
          </p>
          <div className="text-sm text-amber-50 mb-4">
            <p>Shingo Kawamura &middot; ETEC 510: Design of Technology-Supported Learning Environments</p>
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-12 bg-black/60 rounded-lg m-6 backdrop-blur-sm">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#B4985B] mb-6">
            The Video
          </h2>
          <div className="relative w-full rounded-lg overflow-hidden border border-slate-200" style={{paddingBottom: '56.25%'}}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Hzaoa12cobw"
              title="Conducting Tutorial Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#B4985B] mb-6">
            Reflection
          </h2>
          <p className="text-amber-50 mb-6">
            For this assignment, I created an instructional video on conducting technique for high school students. Rather than filming myself, I developed an animated puppet using Adobe Illustrator, Character Animator, and ElevenLabs for voice cloning. This multi-tool approach was inspired by AI-generated spokesperson videos I had seen on YouTube, and I was intrigued by the potential for creating reusable instructional content for future "flipped classroom" exercises.
          </p>
          <p className="text-amber-50 mb-6">
            My prior experience with creative software (Logic Pro, Final Cut Pro, Sibelius, and SketchUp) provided a foundation for learning Character Animator. While each program has unique features, I found that familiarity with common workflows across professional creative applications gave me both the patience and practical understanding to navigate a new tool. It's similar to driving different makes of cars: there is a typical layout and design logic in these applications that transfers between platforms, even when the specific buttons and menus differ. I supplemented this experiential knowledge with YouTube tutorials and, critically, AI-assisted troubleshooting. When I encountered technical problems, I took screenshots and uploaded them to AI assistants for diagnosis. For example, when eye pupil tracking failed, the AI identified that I needed to correctly label layers and enable independent shape movement. This visual troubleshooting proved remarkably effective for issues difficult to describe in text.
          </p>
          <p className="text-amber-50 mb-6">
            The most significant technical challenge was animating the precise gestures required for demonstrating conducting patterns. The wrist flick, the critical element that creates a clear ictus, or beat point, for musicians, demanded careful attention. For each arm position in the 4-beat pattern, I created two baton angles in Illustrator and assigned them a 'cycle' property to create the impression of wrist movement. This solution is something I'm particularly proud of, as it captures the essential motion without requiring dozens of individually drawn frames. However, it highlighted a fundamental constraint: complex gestures require detailed drawings and multiple frames, which is time-consuming. I invested a significant amount of time in this project, with much of that dedicated to creating and refining the movement sequences.
          </p>
          <p className="text-amber-50 mb-6">
            This raises an uncomfortable tension between my initial rationale for choosing animation (reusability and scalability across multiple instructional videos) and the practical reality of production time. While future videos using the same puppet will be faster to produce, each new conducting technique will still require uniquely designed arm positions and movements. The question I'm wrestling with is whether the time investment is justified by the pedagogical benefits and long-term efficiency gains.
          </p>
          <p className="text-amber-50 mb-6">
            From a pedagogical standpoint, the animated format presents both opportunities and uncertainties. Some students who saw early iterations found the puppet "creepy," which was honest and valuable feedback. I continue to refine the design to make it more engaging and friendly, as student reception is crucial for instructional effectiveness. The ElevenLabs voice clone, created using a lower-tier model and a shorter audio sample, sounds similar to my voice but not exact. This limitation excites me because it pushes me to continue developing the system. I'm approaching this project with the spirit of kaizen: small, iterative improvements over time rather than expecting perfection on the first attempt.
          </p>
          <p className="text-amber-50 mb-6">
            What I find most compelling about this approach is its potential for creating a consistent library of tutorials. I plan to continue developing the puppet for my own curiosity and interest. It seems like a worthwhile investment because it has genuine potential for "flipped classroom" exercises where students can review foundational concepts independently. However, I remain uncertain whether students will find the format more or less engaging than watching a real teacher. The "creepy" feedback suggests that the uncanny valley effect may interfere with learning for some students, even as others might appreciate the novelty.
          </p>
          <p className="text-amber-50 mb-6">
            Despite these constraints and uncertainties, I view this project as valuable exploration of emerging instructional technologies. The technical and creative learning process has been meaningful in itself, and the challenges I encountered were integral to understanding both the affordances and limitations of this medium for teaching movement-based skills. If I were to start over, I would approach the project similarly. The learning curve and iterative problem-solving were necessary to discover what these tools can and cannot do.
          </p>
        </section>

        <section className="mb-12 bg-cover bg-center rounded-lg border border-slate-200 p-8" style={{backgroundImage: 'url(/StockSnap_H5CCPV9ZFQ.jpg)'}}>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            View Full Assignment
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="/etec510-conducting-tutorial.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 hover:opacity-90 text-white font-medium rounded-lg transition-colors"
              style={{backgroundColor: '#002145'}}
            >
              &#128196; View Full Document
            </a>
            <a
              href="https://youtu.be/Hzaoa12cobw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 hover:opacity-90 text-white font-medium rounded-lg transition-colors"
              style={{backgroundColor: '#002145'}}
            >
              &#9654;&#65039; Watch on YouTube
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
