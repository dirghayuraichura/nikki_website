const About = () => {
  return (
    <div id="about" className="min-h-screen w-full">
      <h1 className="flex justify-center macondo-regular text-white text-5xl py-24 lg:py-10 lowercase underline">
        About
      </h1>
      <div className="lg:mx-48 flex-wrap flex" >
      <div className="p-12 md:w-2/3 flex flex-col text-2xl leading-8 md:col-span-8" >
        Hey there ! , I am Nikita, a graphic and UI/UX designer based in Raipur with a
        passion for creating seamless and delightful user experiences.<br></br> I
        especially enjoy working on design operations and systems that help
        bring order to complexity. <br></br>When I am not designing, you can find me
        enjoying music and creating arts !.<br></br><span className="py-8 text-orange-600">Thanks
        for stopping by my portfolio!</span>
      </div>
      
      <div className="p-12 md:w-1/3 flex flex-col space-y-4 ">
        <h1 className="text-3xl border-b-1 border-gray-600">What I like</h1>
        <ol className="pt-5 space-y-4">
        <li>Making Playlist</li>
        <li>Auto Layout</li>
        <li>Digital Painting</li>
        </ol>
        <h1 className="text-3xl border-b-1 border-gray-600">Learning</h1>
        <ol className="pt-5 space-y-4">
        <li>Product Designing</li>
        <li>UX Designing</li>
        </ol>
      </div>
      
        
      
      </div>
    </div>
  );
};

export default About;
