import Image from "next/image"
import logo from '@/app/assets/Logo.png'


const Footer = () => {
    return (

<footer className="bg-[#043873] text-white py-16 px-8 top-[5195px]">
  <div className="max-w-screen-xl mx-auto">
   
    <div className="grid grid-cols-4 gap-20 mb-8">
    <div className="mb-8 flex flex-col items-start gap-3.75">
      <Image src={logo} alt="Footer logo" />
      <p className="font-inter text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left">
        Whitepace was created for the new ways we live and work. We make a better workspace around the world.
      </p>
    </div>

      <div className="gap-4">
        <h3 className="font-semibold mb-2">Product</h3>
        <ul>
          <li><a href="#" className="text-sm hover:text-gray-400 text-[#FFE492]">Overview</a></li>
          <li><a href="#" className="text-sm hover:text-gray-400">Blog</a></li>
          <li><a href="#" className="text-sm hover:text-gray-400">About Us</a></li>
          <li><a href="#" className="text-sm hover:text-gray-400">Pricing</a></li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Resources</h3>
        <ul>
          <li><a href="#" className="text-sm hover:text-gray-400">Guides & Tutorials</a></li>
          <li><a href="#" className="text-sm hover:text-gray-400">Careers</a></li>
          <li><a href="#" className="text-sm hover:text-gray-400">Customer Stories</a></li>
          <li><a href="#" className="text-sm hover:text-gray-400">Help Center</a></li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Company</h3>
        <ul>
          <li><a href="#" className="text-sm hover:text-gray-400">Media Kit</a></li>
          <li><a href="#" className="text-sm hover:text-gray-400">Start Today</a></li>
          <li><a href="#" className="text-sm hover:text-gray-400">Terms & Privacy</a></li>
        </ul>
      </div>

    
    </div>

    {/* Copyright Section */}
    <div className="w-[1480px] h-0 gap-0 border-t-[1px] border-[#2E4E73] rotate-0 text-center justify-between">
      <p>©2021 Whitepace LLC. All rights reserved.</p>
    </div>
    
  </div>
</footer>
    );
};















  export default Footer;
  