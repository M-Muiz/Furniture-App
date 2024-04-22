import stars from "../assets/stars.svg"
import sr from "../assets/thumb.svg"

const DarkBox = () => {
  return (
    <div className='bg-black text-white flex w-[94%] mt-28 p-16 mx-auto'>
      <div className="">
        <h1 className='font-bold text-4xl'>Our Dedication to<br /> Your Satisfaction</h1>
        <p className='text-white mt-4 poppin w-1/2 py-3'>Your surroundings have a profound impact on your mood. Discover how our high-quality furniture can transform your space into a haven of comfort and happiness. Create an environment that nurtures your well-being and elevates your spirits with the perfect blend of style and coziness.</p>

        <div className="flex gap-4">
          <img src={stars} alt="" />
          <img src={stars} alt="" />
        </div>


      </div>


      <div className="">

        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <img src={sr} alt="" />
              <h1 className="text-2xl font-semibold">Quality Craftsmanship</h1>
            </div>
            <p className="font-semibold text-sm">Our furniture is meticulously handcrafted to stand the test of time, ensuring it can be enjoyed for generations to come.</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <img src={sr} alt="" />
              <h1 className="text-2xl font-semibold">Quality Craftsmanship</h1>
            </div>
            <p className="font-semibold text-sm">Our furniture is meticulously handcrafted to stand the test of time, ensuring it can be enjoyed for generations to come.</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <img src={sr} alt="" />
              <h1 className="text-2xl font-semibold">Quality Craftsmanship</h1>
            </div>
            <p className="font-semibold text-sm">Our furniture is meticulously handcrafted to stand the test of time, ensuring it can be enjoyed for generations to come.</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default DarkBox
