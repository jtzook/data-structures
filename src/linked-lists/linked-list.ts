class LLNode {
  constructor(public data: any = null, public next: LLNode = null) {}
}

class LinkedList {
  head: LLNode

  constructor(data: any) {
    this.head = new LLNode(data)
  }

  public insert(data: any) {
    const node = new LLNode(data)

    if (!this.head) {
      this.head = node
    } else if (!this.head.next) {
      this.head.next = node
    } else {
      // find last node

      let cur = this.head.next

      while (cur?.next) {
        cur = cur.next
      }

      cur.next = node
    }
  }

  public remove(data: any) {
    if (this.head.data === data) {
      // data is in first node

      this.head = this.head.next
    } else if (this.head.next) {
      // data is in later nodes

      let prev = this.head
      let cur = this.head.next

      while (cur && cur.data !== data) {
        prev = cur
        cur = cur.next
      }

      if (cur?.data === data) {
        prev.next = cur.next
        cur = null
      }
    }
  }

  public static toArray(ll: LinkedList = null) {
    const elements = []

    let cur = ll.head

    while (cur) {
      elements.push(cur.data)

      cur = cur.next
    }

    return elements
  }
}

export default LinkedList
