import { BsFillPlayFill } from 'react-icons/bs';
import heroImg from '../assets/hero.png';
import location from "../assets/location.svg";
import box from "../assets/box.svg";
import secure from "../assets/secure.svg";
import thumb from "../assets/thumb.svg";

const Hero = () => {
    return (
        <>
            <div className='flex justify-between px-52 mt-24 relative pb-12'>
                <div className="w-6/12 py-4">
                    <h1 className="inter text-6xl font-extrabold heading">
                        Perfect <br /> Harmony: <br /> Comfort & Style
                    </h1>
                    <p className='text-gray-400 poppin mt-5 tracking-wider leading-loose'>
                        Explore furniture that harmoniously combines comfort <br />  and style to elevate your home
                    </p>
                    <div className="flex items-center gap-4 poppin mt-6">
                        <button className='rounded-full w-40 text-sm font-medium p-3 border-2 text-black border-black transition duration-500 hover:opacity-80 hover:scale-110 hover:transition hover:duration-500'>
                            Explore Our Offers
                        </button>
                        <button className='flex items-center gap-2'>
                            <span className='shadow-md rounded-full p-2'>
                                <BsFillPlayFill />
                            </span>
                            <p className='text-gray-400 text-sm hover:text-orange-400 '>Watch Video</p>
                        </button>
                    </div>
                </div>
                <div className="heroImg">
                    <img src={heroImg} alt="heroImg" />
                </div>

                <div className="h-28 rounded-full w-4/6 shadow-lg bg-white absolute bottom-0 flex items-center justify-between px-14">
                    <div>
                        <h4 className='font-semibold text-gray-500 text-xl'>Comfort</h4>
                        <div className="flex items-center gap-1">
                            <img src={location} alt="location" />
                            <h3 className='font-semibold text-gray-400 text-lg'>Cozy Seating</h3>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-semibold text-gray-500 text-xl'>Quality Assurance</h4>
                        <div className="flex items-center gap-1">
                            <img src={thumb} alt="thumb" />
                            <h3 className='font-semibold text-gray-400 text-lg'>Cozy Seating</h3>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-semibold text-gray-500 text-xl'>Free Shipping</h4>
                        <div className="flex items-center gap-1">
                            <img src={box} alt="box" />
                            <h3 className='font-semibold text-gray-400 text-lg'>No-Cost Delivery</h3>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-semibold text-gray-500 text-xl'>Secure Checkout</h4>
                        <div className="flex items-center gap-1">
                            <img src={secure} alt="secure" />
                            <h3 className='font-semibold text-gray-400 text-lg'>Secure Payments</h3>
                        </div>

                    </div>
                    <div>

                        <button className='rounded-full w-40 mr-10 text-sm font-medium p-3 border-2 text-black border-black transition duration-500 hover:opacity-80 hover:scale-110 hover:transition hover:duration-500'>
                            See More
                        </button>
                    </div>

                </div>
            </div>
            <div className="w-5/6 flex items-center justify-between gap-4 mx-auto px-36 mt-20">
                <h2 className="font-bold text-2xl text-gray-400">Lowe’s</h2>
                <h2 className="font-bold text-2xl text-gray-400">DeWalt</h2>
                <h2 className="font-bold text-2xl text-gray-400">Home Depot</h2>
                <h2 className="font-bold text-2xl text-gray-400">IKEA</h2>
                <h2 className="font-bold text-2xl text-gray-400">Makita</h2>
                <h2 className="font-bold text-2xl text-gray-400">3M</h2>
            </div>
        </>
    )
}

export default Hero