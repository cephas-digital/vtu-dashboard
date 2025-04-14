export default function ProfileItem({ name, role }) {
    return (
      <div className="flex items-start">
        <div className="flex-shrink-0 w-6 h-6 bg-[#e8e6e6] rounded-full flex items-center justify-center text-gray-500 mr-3">
         
        </div>
        <div>
          <div className="text-sm">{name}</div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
      </div>
    )
  }
  
  