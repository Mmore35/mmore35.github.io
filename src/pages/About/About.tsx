const AboutMeIntro = () => {
  return (
    <div className="p-10">
      <h3 className="text-3xl font-bold p-5">
        I'm Mike, a Fullstack Software Engineer based in Tokyo, Japan.
      </h3>
      <div className="text-xl p-5 leading-8">
        My fascination with state-of-the-art technology guided me to Tokyo, the
        epicenter of innovation. As a full-stack software developer, I adeptly
        integrate sophisticated front-end design with efficient back-end
        systems. My technical arsenal includes advanced tools like TypeScript,
        Vite, C# .NET, and AWS, enhancing my creations with style, speed, and
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
        <li className="m-2 text-2xl">Exploring Japan</li>
        <li className="m-2 text-2xl">Being with friends</li>
        <li className="m-2 text-2xl">Relaxing at local coffee shops</li>
        <li className="m-2 text-2xl">日本語勉強している</li>
      </ul>
    </div>
  );
};

export default function About() {
  return (
    <div className="grid grid-flow-col gap-4 text-indigo-100">
      <AboutMeIntro />
      <div className="w-px bg-indigo-100 m-5" />
      <ThingsIEnjoy />
    </div>
  );
}
