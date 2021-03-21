class LLNode {
  constructor(public data: any = null, public next: LLNode = null) {}
}

class LinkedList {
  head: LLNode

  constructor(data: any) {
    this.head = new LLNode(data)
  }

  insert(data: any) {
    this.head.next = new LLNode(data)
  }
}

export default LinkedList
