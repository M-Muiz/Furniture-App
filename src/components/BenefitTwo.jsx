import { TiTick } from "react-icons/ti";
import { FiMessageCircle } from "react-icons/fi";
import benfitTwo from "../assets/benefitTwo.png"
import userTwo from "../assets/userTwo.svg"
import { FaHandHoldingHeart } from "react-icons/fa6";


const BenefitTwo = () => {
    return (
    <div className="flex px-52 mt-20 items-center gap-10">
        <div className="benefitImg w-2/4 relative">
            <img src={benfitTwo} alt="" />

            <div className="shadow-xl bg-white rounded-lg flex items-center justify-between w-96 absolute h-24 px-6 top-14 -left-24">
                <div className="small-img">
                    <img src={userTwo} alt="user" />
                </div>
                <div className="poppin">
                    <h2 className="font-semibold text-2xl">Victor Adams</h2>
                    <p className="text-gray-500">Interior Design and Styling</p>
                </div>
                <div className="rounded-full w-10 h-10 flex items-center justify-center" style={{ background: "#F97316" }}>
                    <FiMessageCircle color="white" fontSize={22} />
                </div>
            </div>

            <div className="rounded-lg w-10 h-10 absolute bottom-56 -left-12 flex items-center justify-center -rotate-12" style={{ background: "#F97316" }}>
                <FaHandHoldingHeart  fontSize={24} color="#fff" />
            </div>

            <div className="shadow-2xl bg-white rounded-lg flex items-center justify-between w-72 absolute h-20 px-2 bottom-0 right-0">

                <div className="rounded-full w-8 h-8 flex items-center justify-center" style={{ border: "2px solid #F97316" }}>
                    <TiTick color="#F97316" fontSize={22} />
                </div>
                <div className="poppin ml-2">
                    <p className="text-black font-semibold">We guarantee your comfort</p>
                </div>
            </div>

        </div>
        <div className="w-2/4">
            <h1 className='inter font-extrabold heading text-black text-5xl'>Elevate Your Mood<br /> with Comfortable<br /> Furniture</h1>
            <li className='text-gray-500 mt-4 poppin pr-10'>Your surroundings have a profound impact on your mood. Discover how our high-quality furniture can transform your space into a haven of comfort and happiness. Create an environment that nurtures your well-being and elevates your spirits with the perfect blend of style and coziness.</li>
            <div className="mt-2 py-3">
                <li className="flex gap-4 items-center">
                    <h4 className="rounded-full p-2 flex items-center justify-center text-white" style={{ background: "#F97316" }}>
                        <TiTick fontSize={22} />
                    </h4>
                    <h5 className="font-bold text-md">Unmatched Comfort</h5></li>

                <li className="flex mt-2 gap-4 items-center">
                    <h4 className="rounded-full p-2 flex items-center justify-center text-white" style={{ background: "#F97316" }}>
                        <TiTick fontSize={22} />
                    </h4>
                    <h5 className="font-bold text-md">Crafted for Quality</h5></li>
                <li className="flex mt-2 gap-4 items-center">
                    <h4 className="rounded-full p-2 flex items-center justify-center text-white" style={{ background: "#F97316" }}>
                        <TiTick fontSize={22} />
                    </h4>
                    <h5 className="font-bold text-md">Stylish Elegance</h5></li>
            </div>

            <button className="rounded-full mt-4 px-8 py-4 bg-black text-white font-semibold cursor-pointer hover:opacity-80">
                Shop Now
            </button>


        </div>
    </div>
    )
}

export default BenefitTwo
