import { create } from "zustand";

const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    messages: [],
    setMessages: (messages) => set({ messages }),
    usersWithMessages: null,
    setUsersWithMessages: (usersWithMessages) => set({usersWithMessages})
}))

export default useConversation