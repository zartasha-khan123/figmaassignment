import Image from 'next/image'
import logo from '@/app/assets/Logo.png'

const Navbar = () => {
  return (
    <>
    <div className="bg-blue-900 flex justify-between py-4 px-[220px] w-[1920px] h-[92px] items-center">
      <div className="w-[191px] h-[34px]">
        <Image src={logo} alt="Logo"></Image>
        </div>
           
        

        <div className="w-[737.5px] h-[60px] flex justify-between items-center">
            <div className='w-[549px] h-[23px]'>
                <ul className='flex flex-row justify-between text-white'>
                    <li>Products</li>
                    <li>Solution</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                </ul>
        </div>
        
        <div className="w-[126px] h-[60px]">
          <button className="px-10 py-4 rounded-lg bg-[#FFE492]">LOGIN
          
          </button>
        </div>
        </div>

    </div>
    </>
  );
};



export default Navbar
