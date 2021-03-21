interface LLNode {
  data: any
  next: LLNode | null
}

class LinkedList {
  head: LLNode | null

  constructor(data: any) {
    this.head = {
      data,
      next: null
    }
  }
}

export default LinkedList
