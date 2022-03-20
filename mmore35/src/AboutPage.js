

const AboutPage = () => {
    return (
        <div className="h-screen relative">
            <div className="">
                <div className="inset-x-0 top-0 h-ten"/>
        <h1 className="MainText text-3xl">
            Michael Morel
        </h1>
        <h1 className="MainText text-2xl">
            FullStack Software Engeneer
        </h1>
       <body className="">
        <section className="MainText">
            I am currently in my final semester at <span className="text-violet-800 font-bold">LSU</span> graduating in May 2022.
        </section>
        </body>
        <p>
        <section className="MainText">
         My name is Michael Morel. My love for tech and software has lead me to study software engineering. This website is a record of my favorite and most notable projects. I specialize in C# and React, with experience in many other languages. 
        </section> 
        <section className="MainText font-bold">
         This website was made using React and TailwindCSS! 
        </section> 
        </p>
        {/* TODO: Later, Make page look nicer, more graphics and variability */}
        </div>
        </div>
    );
};
  
export default AboutPage;