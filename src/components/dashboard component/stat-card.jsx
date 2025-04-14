import arrowfall from '../../Cacrassets/ArrowFall.png'
import arrowrise from '../../Cacrassets/Arrowrise.png'



export default function StatCard({ title, value, change, isPositive, bgColor }) {
    return (
      <div className={`${bgColor} rounded-lg p-4`}>
        <div className="text-sm text-gray-600 mb-1">{title}</div>
        <div className="flex items-end justify-between">
          <div className="text-3xl font-bold text-gray-900">{value}</div>
          <div className={`flex items-center gap-2 text-xs ${isPositive ? "text-green-600" : "text-red-600"}`}>
            {change}
            {isPositive ? (
                <img src={arrowfall} alt="" />
            ) : (
             <img src={arrowrise} alt="" className='w-[21px] h-[10px]'/>
            )}
          </div>
        </div>
      </div>
    )
  }
  
  