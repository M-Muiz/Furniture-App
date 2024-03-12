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
        <h1 className="text-4xl text-white">Subscribe to get attractive offers<br /> on our products</h1>
        <div className="flex items_center bg-white">
          <input type="text" className="bg-transparent p-4" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
