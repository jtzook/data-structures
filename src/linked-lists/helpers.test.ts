import { removeDups } from './helpers'
import LinkedList from './linked-list'

describe('linked-list helpers', () => {
  describe('removeDups', () => {
    const inputList = [
      'luna',
      'maui',
      'callie',
      'callie',
      'otto',
      'luna',
      'luna',
      'luna',
      'maui'
    ]

    it('removes duplicates from an unsorted singly-linked list', () => {
      const ll = LinkedList.fromArray(inputList)

      removeDups(ll)

      expect(LinkedList.toArray(ll)).toEqual(['luna', 'maui', 'callie', 'otto'])
    })
  })
})
