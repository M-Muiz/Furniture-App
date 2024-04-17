import footerImg from "../assets/footer.jpg"


const Footer = () => {
  return (
    <div className='px-12 mt-12'>
      <div className="h-[600px] relative">
        <img src={footerImg} alt="footerImg" className="h-full w-full object-cover" />
        <div className="absolute w-[320px] bottom-32 right-48">
          <h1 className="text-4xl font-bold text-white">Our Furniture Review</h1>
          <p className="mt-4 text-white font-semibold">Write your Valuable feedback<br /> about us</p>
        </div>
      </div>
      <div className="h-auto py-14 bg-[#353434] flex items-center justify-center gap-16 px-24">
        <h1 className="text-2xl text-white px-3 min-w-min">Subscribe to get attractive <br /> offers on our products</h1>
        <div className="flex items-center justify-between bg-white p-3 outline-none w-1/3">
          <input type="text" className="bg-transparent w-48 outline-none" placeholder="youremail@mail.com" />
          <button className="bg-orange-600 rounded-md text-white px-5 py-2">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
