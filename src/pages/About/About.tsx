const AboutMeIntro = () => {
  return (
    <div className="p-10">
      <h3 className="text-3xl font-bold p-5">
        I'm Mike, a Full-stack Software Engineer with a passion for web
        development.
      </h3>
      <div className="text-xl p-5 leading-8">
        My fascination with state-of-the-art technology guided me around the
        world. As a full-stack software developer, I adeptly integrate
        sophisticated front-end design with efficient back-end systems. My
        technical arsenal includes advanced tools like TypeScript, Vite, C#
        .NET, and AWS, enhancing my creations with style, speed, and
        scalability.
      </div>
    </div>
  );
};

const ThingsIEnjoy = () => {
  return (
    <div className="p-10">
      <h3 className="text-3xl p-5 font-bold">
        Some things I enjoy off the clock:
      </h3>
      <ul className="list-disc list-inside">
        <li className="m-2 text-2xl">Taking trips to Japan</li>
        <li className="m-2 text-2xl">Being with friends</li>
        <li className="m-2 text-2xl">Relaxing at local coffee shops</li>
        <li className="m-2 text-2xl">日本を語勉強している</li>
      </ul>
    </div>
  );
};

export default function About() {
  return (
    <div className="grid lg:grid-flow-col grid-flow-row gap-4 text-indigo-100">
      <AboutMeIntro />
      <div className="w-px bg-indigo-100 m-5 lg:block hidden" />
      <div className="h-px bg-indigo-100 m-5 lg:hidden block" />
      <ThingsIEnjoy />
    </div>
  );
}
