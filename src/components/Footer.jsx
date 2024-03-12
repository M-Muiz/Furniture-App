import footerImg from "../assets/footer.jpg"


const Footer = () => {
  return (
    <div className='px-12 mt-12'>
      <div className="h-[600px] relative">
        <img src={footerImg} alt="footerImg" className="h-full w-full object-cover" />
        <div className="absolute w-[320px] bottom-40 right-48">
          <h1 className="text-4xl font-bold text-white">Our Furniture Review</h1>
          <p className="mt-4 text-white font-semibold">Write your Valuable feedback<br /> about us</p>
        </div>
      </div>
      <div className="h-[200px] bg-[#353434] flex items-center px-24">
        <h1 className="text-2xl text-white px-3 min-w-min">Subscribe to get attractive offers on our products</h1>
        <div className="flex items-center justify-between bg-white p-3 outline-none max-w-max">
          <input type="text" className="bg-transparent w-48" placeholder="youremail@mail.com" />
          <button className="bg-orange-600 rounded-md text-white px-5 py-2">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
