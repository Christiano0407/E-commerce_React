//** === Order Cards === Pay === */
import { FaCircleXmark } from 'react-icons/fa6'
import './style/orderCard.css'
//**! ===== Order Card ======= */
export function OrderCard(props) {
  const { id, title, imageUrl, price, handleDelete } = props
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
        <div className="flex-col">
          <p className="text-sm font-light text-black">{title}</p>
          <p className="text-black text-lg font-bold ">${price}</p>
        </div>
      </div>
      <div className="">
        <button className="p-[10px]" onClick={() => handleDelete(id)}>
          <FaCircleXmark />
        </button>
      </div>
    </div>
  )
}
