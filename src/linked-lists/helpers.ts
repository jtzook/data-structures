import LinkedList from './linked-list'

// remove duplicates from a singly-linked list
export const removeDups = (ll: LinkedList) => {
  let prev = ll.head

  const seen = new Set([prev.data])

  while (prev.next) {
    let cur = prev.next

    if (seen.has(cur.data)) {
      prev.next = cur.next
      cur = null
    } else {
      seen.add(cur.data)
      prev = cur
    }
  }
}
