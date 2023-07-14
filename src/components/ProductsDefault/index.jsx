//** === Products Default === */
import { FaCircleXmark } from 'react-icons/fa6'
import './style/productDefault.css'

export function ProductsDefault() {
  return (
    <aside className="productDefault flex flex-col right-0 p-3  bg-[#f2f2f2]">
      <div className=" p-3 flex justify-between items-center">
        <h2 className="font-medium text-xl">Details</h2>
        <button className="p-1">
          <FaCircleXmark />
        </button>
      </div>
    </aside>
  )
}
