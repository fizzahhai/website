import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-purple-100">
      <h1 className="text-4xl font-bold mb-4 text-purple-900">hi! i'm fizzah haider</h1>
      <p className="text-lg mb-8 text-center max-w-xl text-purple-950">
        welcome to my site~
      </p>
      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-2 text-purple-950">about me</h2>
  <ul className="list-disc list-inside text-purple-950 mt-2">
    <li>
      i'm currently an incoming second-year at the university of waterloo studying mathematical physics (bsc). besides my interest in math and physics, i also enjoy listening to music, cooking, and the occasional programming - its why i intend to minor in computing! this site is actually one of my newest projects (a work in progress).
    </li>
    <li>
      i'm proficient in <strong>python, java, racket, figma, autoCAD, adobe, canva, and sketchup</strong>, and always striving to learn new skills!
    </li>
  </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-purple-950">projects</h2>
        <ul className="list-disc list-inside text-purple-950">
          <li>
          <strong>reWat</strong>: designed a mobile app during the <strong>impact 2024 hackathon</strong> using <strong>figma</strong>, with a 3d keychain prototype built using <strong>autocad</strong>. focused on promoting sustainable habits among students and incentivizing eco-friendly actions through a points-based system, campus challenges, and local partnerships. presented our fully fleshed-out design prototype to a panel of judges
          </li>
          <li>
          <strong>snake game</strong>: built a fully functioning custom version of the classic snake game alongside a classmate using <strong>java, canva</strong>, and <strong>figma</strong>. designed custom graphics and implemented game mechanics from scratch.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-purple-950">experience</h2>
        <ul className="list-disc list-inside text-purple-950">
          <li>
            <span className="font-bold">undergraduate researcher</span> , york university (2025 - present)<br />
            assisting in creating an AI model using <strong>python</strong>. 
          </li>
          <li>
          <span className="font-bold">team member</span> , waterloo rocketry (2024 - present)<br />
          contributed to collaborative engineering discussions and design reviews focused on propulsion + RocketCAN
          developed introductory understanding of rocketry principles and design processes through exposure to <strong>CAD modeling</strong>, simulation tools, and test planning.
          </li>
          <li>
            <span className="font-bold">front end developer</span> , intelligent learning machines (2022 - 2023)<br />
worked closely with senior employees to translate design concepts into functional systems for users,  designing visually appealing and accessible interactive interfaces. conducted user research and usability testing to ensure seamless interactions, and improved website navigation and usability through user centered design principles, increasing user retention. worked with <strong>figma, adobe, vscode. </strong>
          </li>
          <li>
            <span className="font-bold">tutor</span> (2021 - present)<br />
            privately tutored high school students STEM subjects (advanced calculus, physics, chemistry, algebra) up to a first-year university level
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-purple-950">contact me</h2>
        <p className="text-purple-950">
          email: <a href="mailto:f3haider@uwaterloo.ca" className="text-purple-950 underline">f3haider@uwaterloo.ca</a>
        </p>
      </section>
    </div>
  );
}