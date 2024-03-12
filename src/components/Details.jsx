import { IoCallOutline, IoLogoTwitter } from "react-icons/io5";
import { BsEnvelope } from"react-icons/bs"
import { AiOutlineInstagram, AiFillFacebook, AiFillLinkedin } from"react-icons/ai"

const Details = () => {
    return (
        <div className="border-b-4 flex items-center justify-between px-56 h-16">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 poppin">
                    <IoCallOutline className="text-orang text-1xl font-extrabold"/>
                    <p className="text-sm">0311-238372001</p>
                </div>
                <div className="flex items-center gap-2 poppin">
                    <BsEnvelope className="text-orang text-1xl font-extrabold"/>
                    <p className="text-sm">furniture.com</p>
                </div>
            </div>
            <div className="flex items-center gap-4 text-2xl">
                <AiOutlineInstagram />
                <AiFillFacebook />
                <IoLogoTwitter />
                <AiFillLinkedin />
            </div>
        </div>
    )
}

export default Details