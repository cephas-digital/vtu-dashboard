

const ChatArea = ({ contact, newMessage, setNewMessage, onSendMessage, messageEndRef }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      onSendMessage()
    }
  }

  const formatMessageDate = (dateString) => {
    if (dateString) {
      return dateString
    }

    const today = new Date()
    return today.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })
  }

  // Group messages by date
  const groupedMessages = contact.messages.reduce((groups, message) => {
    const date = message.date || "Today"
    if (!groups[date]) {
      groups[date] = []
    }
    groups[date].push(message)
    return groups
  }, {})

  return (
    <div className="flex-1 flex flex-col h-full  bg-white rounded-md mr-5 ">
      {/* Header */}
      <div className="lg:flex md:flex grid gap-2 justify-between items-center p-4 border-b   border-gray-200  lg:w-[750px] md:w-[450px] w-[250px]">
        <div className="flex items-center">
          <img src={contact.img} alt={contact.name} className="w-10 h-10 rounded-full mr-3" />
          <div>
            <h2 className="font-semibold text-gray-800">{contact.name}</h2>
            <p className="text-xs text-gray-500">
              {contact.status === "online" ? "Online" : `Last seen today at ${contact.lastSeen}`}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="bg-[#95bc95] text-black text-sm font-medium rounded-md w-[100px]">New Customer</button>
          <button className="text-blue-600 text-sm font-medium">View Profile</button>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 lg:w-[720px] md:w-[450px] w-[250px]">
        {Object.entries(groupedMessages).map(([date, messages]) => (
          <div key={date}>
            <div className="flex justify-center my-4">
              <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full shadow-sm">
                {formatMessageDate(date)}
              </span>
            </div>

            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"} mb-4`}>
                <div
                  className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg px-4 py-2 ${
                    message.isUser ? "bg-white border border-gray-200 text-gray-800" : "bg-blue-600 text-white"
                  }`}
                >
                  <p>{message.text}</p>
                  <div
                    className={`text-xs mt-1 flex justify-end ${message.isUser ? "text-gray-500" : "text-blue-200"}`}
                  >
                    {message.time}
                    {message.isUser && (
                      <span className="ml-1">
                        {message.status === "read" && (
                          <svg className="h-3 w-3 text-blue-500 inline" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>

      {/* Message input */}
      <div className=" m-2 p-2 mt-[150px] h-[55px] border-2 border-[#eeeded] rounded-md  lg:w-[720px] md:w-[450px] w-[200px]">
        <div className="flex items-center">
          <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
            <svg className="h-6 w-6 bg-[#e0e0f2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg> 
          </button>
          <div className="flex mx-2  ">
            <input
              type="text"
              placeholder="Your message..."
              className="w-[850px] rounded-md focus:outline-none  "
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="p-2 rounded-md absolut flex gap-5  bg-[#c6fff1] w-[100px] h-[40px] text-white " onClick={onSendMessage}>
              <h3 className="text-black">Send</h3>
            <svg className="h-5 w-5 text-black  " viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ChatArea

