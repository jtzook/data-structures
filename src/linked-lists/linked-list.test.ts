import LinkedList from './linked-list'

describe('linked-list', () => {
  const data = 'll data'

  it('instantiates a linked list with one node', () => {
    const ll = new LinkedList(data)

    expect(ll.head.data).toEqual(data)
    expect(ll.head.next).toBeNull()
  }),
    it('inserts an element into a singly linked list', () => {
      const ll = new LinkedList(data)

      ll.insert('magic')
    })
})
