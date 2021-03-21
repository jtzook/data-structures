import LinkedList from './linked-list'

describe('linked-list', () => {
  let ll
  const initData = 'll data'
  const extraData = 'magic'
  const inputList = [4, 3, 2, 1, 0]

  beforeEach(() => {
    ll = new LinkedList(initData)
  })

  it('instantiates a linked list with one node', () => {
    expect(ll.head.data).toEqual(initData)
    expect(ll.head.next).toBeNull()
  }),
    it('inserts an element into a singly linked list', () => {
      ll.insert(extraData)
      ll.insert(extraData)

      expect(ll.head.next.data).toEqual(extraData)
    }),
    it('populates a linked list from array input', () => {
      ll = LinkedList.fromArray(inputList)

      expect(LinkedList.toArray(ll)).toEqual(inputList)
    }),
    it('returns an empty head node after removing only data node', () => {
      ll.remove(initData)

      expect(ll.head).toBeNull()
    }),
    it('removes an item from a singly linked list', () => {
      ll.insert(extraData)

      ll.remove(extraData)

      expect(ll.head.next).toBeNull()
    })
})
