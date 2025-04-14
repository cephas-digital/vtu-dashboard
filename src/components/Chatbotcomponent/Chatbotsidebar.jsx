"use client"

const Sidebar = ({ contacts, selectedContact, onSelectContact, searchQuery, setSearchQuery }) => {
  return (
    <div className="w-1/4 border-r border-gray-200 h-full flex flex-col  rounded-md">
      

      <div className="p-4 border-b border-gray-200 bg-white">
        <h2 className="text-md font-semibold  text-gray-800">Contacts</h2>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto mt-10 ">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className={`flex items-center p-3 cursor-pointer border-[#fafafa] border-2 rounded-md   bg-white hover:bg-gray-100 ${
              selectedContact.id === contact.id ? "bg-gray-100" : ""
            }`}
            onClick={() => onSelectContact(contact)}
          >
            <div className="relative">
              <img src={contact.img} alt={contact.name} className="w-10 h-10 rounded-full" />
              {contact.status === "online" && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div className="ml-3">
              <p className="font-medium text-gray-800">{contact.name}</p>
              <p className="text-xs text-gray-500">
                {contact.lastSeen ? `Last seen today at ${contact.lastSeen}` : "Offline"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar

