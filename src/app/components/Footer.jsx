import Image from 'next/image'
const Footer = () => {

  return (

    <footer className="text-gray-400 backdrop-filter lg:px-48 pt-10 lg:pb-4">
        <h1 className='uppercase text-white text-xl'>connect with me</h1>
        <hr color="red"></hr>
        <div className="md:ml-auto md:flex md:flex-wrap items-center text-base py-5 md:p-0">
          <a href="https://www.behance.net/nikitahirani" className="mr-4 font-montserrat text-white  hover:underline hover:transition-all hover:ease-in-out">Behance</a>
          <a href="https://www.linkedin.com/in/nikita-hirani-40174a170/" className="mr-4 font-montserrat  text-white  hover:underline hover:transition-all hover:ease-in-out">Linked In</a>
          <a href="https://www.instagram.com/graphicsbynikita/" className="font-montserrat  text-white  hover:underline hover:transition-all hover:ease-in-out mr-4">Instagram</a>
          <a href="/resume.pdf" className="font-montserrat  text-white  hover:underline hover:transition-all hover:ease-in-out mr-4">Resume</a>
        </div>
    </footer>

  );
};

export default Footer;
