import LinkedList from './linked-list'

describe('linked-list', () => {
  const data = 'll data'

  it('instantiates a linked-list with one node', () => {
    const ll = new LinkedList(data)

    expect(ll.head.data).toEqual(data)
    expect(ll.next).toBeNull()
  })
})
