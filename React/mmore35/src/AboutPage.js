

const AboutPage = () => {
    return (
        <div className="h-screen">
            <section className="flex h-14">
        <h1 className="MainText text-3xl">Michael Morel</h1>
        {/* TODO: Fullstack software engeneer */}
            </section>
       <body className="">
        <section className="MainText">
            I am currently in my final semester at <span className="text-violet-800 font-bold">LSU</span> graduating in May 2022.
        </section>
        </body>
        <p>
        <section className="MainText">
         My name is Michael Morel. My love for tech and software has lead me to study software engineering. This website is a record of my favorite and most notable projects. I specialize in C# and React, with experience in many other languages. This website was made using React and TailwindCSS! 
        </section> 
        {/* TODO: put made using on new line */}
        </p>
        </div>
    );
};
  
export default AboutPage;