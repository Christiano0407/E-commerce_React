//** === Card ===  */
import { FaPlus } from 'react-icons/fa'

export function Card() {
  return (
    <div className="bg-white p-2  cursor-pointer w-56 h-60 border-solid border-black  border-[2px] rounded-lg ">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs font-semibold m-2 p-1">
          Electronics
        </span>
        <img
          src="https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="juicyPhone-card-electronics"
          className="w-full h-full object-cover bg-center bg-cover  bg-no-repeat rounded-lg "
        />
        <div className="absolute top-[10px] right-[10px] flex justify-center items-center bg-white w-6 h-6 rounded-full">
          <FaPlus />
        </div>
      </figure>
      <p className="flex justify-between items-center w-[90%] my-0 mx-auto">
        <span className="text-md font-normal">JuicyPhone</span>
        <span className="text-md font-bold">$550</span>
      </p>
    </div>
  )
}
