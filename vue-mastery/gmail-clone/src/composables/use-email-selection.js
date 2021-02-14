import axios from 'axios'
import { reactive } from 'vue'

const emails = reactive(new Set())

export const useEmailSelection = function () {
  const toggle = function (email) {
    if (emails.has(email)) {
      emails.delete(email)
    } else {
      emails.add(email)
    }
  }

  const clear = () => {
    emails.clear()
  }

  const addMultiple = newEmails => {
    newEmails.forEach(email => {
      emails.add(email)
    })
  }

  const forSelected = fn => {
    emails.forEach(email => {
      fn(email)
      axios.put(`http://localhost:3000/emails/${email.id}`, email)
    })
  }

  const markRead = () => forSelected(e => (e.read = true))

  const markUnread = () => forSelected(e => (e.read = false))

  const archive = () => {
    forSelected(e => {
      e.archived = true
    })
    clear()
  }

  return {
    toggle,
    emails,
    clear,
    addMultiple,
    markRead,
    markUnread,
    archive
  }
}

export default useEmailSelection
