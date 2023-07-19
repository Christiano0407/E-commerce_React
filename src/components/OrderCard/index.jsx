//** === Order Cards === Pay === */
import { FaCircleXmark } from 'react-icons/fa6'
import './style/orderCard.css'
//**! ===== Order Card ======= */
export function OrderCard(props) {
  const { id, title, imageUrl, price } = props
  return (
    <div key={id} className="flex justify-between items-center p-3 mb-3 ">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light text-black">{title}</p>
      </div>
      <div className="">
        <p className="text-black text-lg font-bold ">${price}</p>
        <button className="p-[10px]">
          <FaCircleXmark />
        </button>
      </div>
    </div>
  )
}
