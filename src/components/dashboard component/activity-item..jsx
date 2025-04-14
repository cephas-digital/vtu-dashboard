export default function ActivityItem({ time }) {
    return (
      <div className="flex items-start">
        <div className=" w-6 h-6 bg-[#e8e6e6] rounded-full flex items-center justify-center text-gray-500 mr-3">
      
        </div>
        <div>
          <div className="text-sm">Upgraded to stand-alone.</div>
          <div className="text-xs text-gray-500">{time}</div>
        </div>
      </div>
    )
  }
  
  