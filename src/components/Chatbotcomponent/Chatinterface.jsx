"use client"
import { useState, useRef, useEffect } from "react"
import Chatbotsidebar from './Chatbotsidebar'
import ChatArea from "./Chatarea"
import Kunle from '../../Cacrassets/Group 12 (1).png';
import jane from '../../Cacrassets/firstUser.png';
import janet from '../../Cacrassets/Rectangle 3.png'

const initialContacts = [
  {
    id: 1,
    name: "Jane Doe",
    img: jane,
    lastSeen: "10:20 am",
    status: "online",
    messages: [
      {
        id: 1,
        text: "Hi! I'd like to make enquiries about your services.",
        time: "12:55 pm",
        date: "12 March 2023",
        isUser: false,
        status: "read",
      },
      {
        id: 2,
        text: "Hello Jane, thank you for reaching out!",
        time: "12:57 pm",
        isUser: true,
        status: "read",
      },
      {
        id: 3,
        text: "What do you need to know?",
        time: "12:57 pm",
        isUser: true,
        status: "read",
      },
      {
        id: 4,
        text: "I want to know if the price is negotiable, I need about 3 units",
        time: "01:05 pm",
        isUser: false,
        status: "read",
      },
    ],
  },
  {
    id: 2,
    name: "Janet Adesokan",
    img: janet,
    lastSeen: "11:45 am",
    status: "offline",
    messages: [],
  },
  {
    id: 3,
    name: "Kunle Adekunle",
    img: Kunle,
    lastSeen: "09:30 am",
    status: "offline",
    messages: [],
  },
  {
    id: 4,
    name: "Jane Doe",
    img: jane,
    lastSeen: "11:45 am",
    status: "offline",
    messages: [],
  },
  {
    id: 5,
    name: "Janet Adesokan",
    img: janet,
    lastSeen: "09:30 am",
    status: "offline",
    messages: [],
  },
  {
    id: 6,
    name: "Janet Adesokan",
    img: janet,
    lastSeen: "11:45 am",
    status: "offline",
    messages: [],
  },
  {
    id: 7,
    name: "Jane Doe",
    img: jane,
    lastSeen: "09:30 am",
    status: "offline",
    messages: [],
  },
  {
    id: 8,
    name: "Janet Adesokan",
    img: janet,
    lastSeen: "11:45 am",
    status: "offline",
    messages: [],
  },
  {
    id: 9,
    name: "Jane Doe",
    img: jane,
    lastSeen: "09:30 am",
    status: "offline",
    messages: [],
  },
]

const ChatInterface = () => {
  const [contacts, setContacts] = useState(initialContacts)
  const [selectedContact, setSelectedContact] = useState(contacts[0])
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const messageEndRef = useRef(null)

  useEffect(() => {
    scrollToBottom()
  }, [selectedContact])

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleContactSelect = (contact) => {
    setSelectedContact(contact)
  }

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    const updatedContacts = contacts.map((contact) => {
      if (contact.id === selectedContact.id) {
        const updatedMessages = [
          ...contact.messages,
          {
            id: contact.messages.length + 1,
            text: newMessage,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            isUser: true,
            status: "sent",
          },
        ]

        return {
          ...contact,
          messages: updatedMessages,
        }
      }
      return contact
    })

    setContacts(updatedContacts)
    setSelectedContact(updatedContacts.find((c) => c.id === selectedContact.id))
    setNewMessage("")

    setTimeout(scrollToBottom, 100)
  }

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="flex h-full gap-8">
       <Chatbotsidebar
        contacts={filteredContacts}
        selectedContact={selectedContact}
        onSelectContact={handleContactSelect}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ChatArea
        contact={selectedContact}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        onSendMessage={handleSendMessage}
        messageEndRef={messageEndRef}
      />
    </div>
  )
}

export default ChatInterface

