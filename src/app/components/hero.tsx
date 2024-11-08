import React from 'react'
import content from '@/app/assets/WorkTogetherImage.png'
import Image from "next/image"
import Apple from '@/app/assets/Apple.png'
import Microsoft from '@/app/assets/microsoft 1.png'
import Slack from '@/app/assets/Slack.png'
import Google from '@/app/assets/Group 246.png'
    
     

const HeroSection = () => (
    <section className="bg-[#043873] py-[140px] px-[220px] text-[#FFFFFF]">
      <div className="flex justify-center items-center gap-16">
        <div className="w-[656px]">
          <h2 className="text-[64px] font-bold leading-[77.45px] tracking-[-0.02em]">
            Get More Done with Whitepace
          </h2>
          <p className="text-lg leading-[30px] tracking-[-0.02em] font-normal mt-4">
            Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
          </p>
          <button className="bg-[#4F9CF9] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center mt-6">
            Try Whitepace Free
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
  
        <div className="w-[824px] h-[549px] bg-[#C4DEFD] flex items-center justify-center">
        </div>
      </div>
    </section>
  );

  
//Project Management section
  const ProjectManagement = () => (
    <section className="bg-[#FFFFFF] py-[140px] px-[220px] text-black">
      <div className="flex justify-center items-center gap-16">
        <div className="w-[656px]">
          <h2 className="text-[64px] font-bold leading-[77.45px] tracking-[-0.02em]">
            Project Management
          </h2>
          <p className="text-lg leading-[30px] tracking-[-0.02em] font-normal mt-4">
            Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
          </p>
          <button className="bg-[#4F9CF9] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center mt-6">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
  
        <div className="w-[824px] h-[549px] bg-[#C4DEFD] flex items-center justify-center">
        </div>
      </div>
    </section>
  );


  
const WorkTogether = () => (
  <section className="bg-[#FFFFFF] py-[140px] px-[220px] text-black">
    <div className="flex justify-center items-center gap-16">
      
      <div className="w-[824px] h-[549px] flex items-center justify-center">
        <Image src={content} alt="content" className="object-contain" />
      </div>
      
      <div className="w-[656px]">
        <h2 className="text-[64px] font-bold leading-[77.45px] tracking-[-0.02em]">
          Work Together
        </h2>
        <p className="text-lg leading-[30px] tracking-[-0.02em] font-normal mt-4">
          With Whitepace, share your notes with your colleagues and collaborate on them.
          You can also publish a note to the internet and share the URL with others.
        </p>
        <button className="bg-[#4F9CF9] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center mt-6">
          Try it now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
);


const UseExtension = () => (
  <section className="bg-[#043873] py-[140px] px-[220px] text-[#FFFFFF]">
    <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-16">
      
      <div className="lg:w-[656px] text-center lg:text-left">
        <h2 className="text-[48px] lg:text-[64px] font-bold leading-[1.2] tracking-[-0.02em]">
          Use As Extension
        </h2>
        <p className="text-lg leading-[30px] tracking-[-0.02em] mt-4">
          Use the web clipper extension, available on Chrome and Firefox, to save web pages or 
          take screenshots as notes.
        </p>
        <button className="bg-[#4F9CF9] hover:bg-blue-700 text-[#FFFFFF] font-bold py-3 px-6 rounded-lg flex items-center mt-6 mx-auto lg:mx-0">
          Let's Go
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="w-full lg:w-[824px] h-[400px] lg:h-[549px] bg-[#C4DEFD] flex items-center justify-center">
       
      </div>

    </div>
  </section>
);





    const Customize = () => (
        <section className="bg-[#FFFFFF] py-[140px] px-[220px] text-black flex justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8 max-w-screen-xl">
            
            <div className="w-full lg:w-[824px] h-[400px] lg:h-[549px] bg-[#C4DEFD] flex items-center justify-center">
            </div>
      
            <div className="w-full lg:w-[656px] text-center lg:text-left">
              <h2 className="text-[48px] lg:text-[64px] font-bold leading-tight tracking-[-0.02em]">
                Customize it to your needs
              </h2>
              <p className="text-lg leading-[30px] tracking-[-0.02em] mt-4">
                Customize the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown).
                Or create your own scripts and plugins using the Extension API.
              </p>
              <button className="bg-[#4F9CF9] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center mt-6 mx-auto lg:mx-0">
                Let's Go
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
      
          </div>
        </section>
      );

    const AccessEverywhere = () => (
        <section className="py-[100px] px-[20px] md:px-[220px] bg-[#043873] text-[#FFFFFF]">
          <div className="text-center">

          <h1 className="text-[32px] md:text-[72px] mb-6 font-inter font-bold leading-[87.14px] tracking-[-0.02em] text-center">
  Your work, everywhere you are
</h1>
<p className="font-inter text-[16px] md:text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-center mx-auto max-w-[800px]">
  Access your notes from your computer, phone, or tablet by synchronising with various services, including whitepace, Dropbox, and OneDrive. 
  The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
</p>
            <div className="flex justify-center py-5 px-10">
              <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 flex items-center justify-center">
                Try Taskey
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      );
      


       const OurSponsers = () => (
<section className="py-[100px] px-[20px] md:px-[220px] bg-[#FFFFFF] text-black ">
<div className="text-center">
  <h1 className=" mb-10 font-inter text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-center">
    Our Sponsors
  </h1>
 
 <div className="flex gap-20">
    <div className="flex justify-between ">
      <Image src={Apple} alt="Apple" width={55.47} height={68} objectFit="contain" />
    </div>

    <div className="flex justify-between ">
      <Image src={Microsoft} alt="Microsoft" width={287} height={62} objectFit="contain" />
    </div>

    <div className="flex justify-between ">
      <Image src={Slack} alt="Slack" width={280} height={71} objectFit="contain" />
    </div>

    <div className="flex justify-between ">
      <Image src={Google} alt="Google" width={221} height={69.81} objectFit="contain" />
    </div>
  </div>
</div> 


</section>
);
 
const LandingPage = () => (
    <div>
      <HeroSection />
      <ProjectManagement />
      <WorkTogether />
      <UseExtension/>
      <Customize/>
      <AccessEverywhere/>
      <OurSponsers/>
    </div>
  );
  
  export default LandingPage;


