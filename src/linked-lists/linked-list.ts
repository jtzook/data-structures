class LLNode {
  constructor(public data: any = null) {}
}

class LinkedList {
  head: LLNode
  next: LLNode = null

  constructor(data: any) {
    this.head = {
      data
    }
  }
}

export default LinkedList
