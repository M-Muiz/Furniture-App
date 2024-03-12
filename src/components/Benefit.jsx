import { TiTick } from "react-icons/ti";
import { FiMessageCircle } from "react-icons/fi";
import benfit from "../assets/benefit.svg"
import user from "../assets/user.png"
import { LiaUserCheckSolid } from "react-icons/lia";

const Benefit = () => {
    return (
        <div className="flex px-52 mt-20 items-center gap-10">
            <div className="w-2/4">
                <h1 className='inter font-extrabold heading text-black text-5xl'>Elevate Your Space<br /> with Uncompromising <br />Quality</h1>
                <li className='text-gray-500 mt-4 poppin pr-10'>Experience the epitome of furniture quality. Our products are  meticulously crafted with an unwavering commitment to excellence. From the finest materials to expert craftsmanship, each piece embodies durability, comfort, and timeless style. Elevate your space with the assurance of exceptional quality and lasting beauty</li>
                <div className="mt-2 py-3">
                    <li className="flex gap-4 items-center">
                        <h4 className="rounded-full p-2 flex items-center justify-center text-white" style={{ background: "#F97316" }}>
                            <TiTick fontSize={22} />
                        </h4>
                        <h5 className="font-bold text-md">Experience Unparalleled Quality</h5></li>

                    <li className="flex mt-2 gap-4 items-center">
                        <h4 className="rounded-full p-2 flex items-center justify-center text-white" style={{ background: "#F97316" }}>
                            <TiTick fontSize={22} />
                        </h4>
                        <h5 className="font-bold text-md">Built to Last for Generations</h5></li>
                    <li className="flex mt-2 gap-4 items-center">
                        <h4 className="rounded-full p-2 flex items-center justify-center text-white" style={{ background: "#F97316" }}>
                            <TiTick fontSize={22} />
                        </h4>
                        <h5 className="font-bold text-md">Loved by Customers Worldwide</h5></li>
                </div>

                <button className="rounded-full mt-4 px-8 py-4 bg-black text-white font-semibold cursor-pointer hover:opacity-80">
                    Shop Now
                </button>


            </div>
            <div className="benefitImg w-2/4 relative">
                <img src={benfit} alt="" />

                <div className="shadow-xl bg-white rounded-lg flex items-center justify-between w-96 absolute h-24 px-6 top-14 right-2/3">
                    <div className="small-img">
                        <img src={user} alt="user" />
                    </div>
                    <div className="poppin">
                        <h2 className="font-semibold text-2xl">Mark Anderson</h2>
                        <p className="text-gray-500">Furniture Craftsmanship</p>
                    </div>
                    <div className="rounded-full w-10 h-10 flex items-center justify-center" style={{ background: "#F97316" }}>
                        <FiMessageCircle color="white" fontSize={22} />
                    </div>
                </div>

                <div className="rounded-lg w-10 h-10 absolute bottom-56 -left-12 flex items-center justify-center -rotate-12" style={{ background: "#F97316" }}>
                    <LiaUserCheckSolid fontSize={24} color="#fff" />
                </div>

                <div className="shadow-2xl bg-white rounded-lg flex items-center justify-between w-72 absolute h-20 px-2 bottom-0 right-0">

                    <div className="rounded-full w-8 h-8 flex items-center justify-center" style={{ border: "2px solid #F97316" }}>
                        <TiTick color="#F97316" fontSize={22} />
                    </div>
                    <div className="poppin ml-2">
                        <p className="text-black font-semibold">We think about every detail</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Benefit