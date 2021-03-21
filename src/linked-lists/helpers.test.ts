import { removeDups } from './helpers'
import LinkedList from './linked-list'

describe('removeDups', () => {
  const inputList = [
    'luna',
    'maui',
    'Maui',
    'callie',
    'callie',
    'otto',
    'luna',
    'luna'
  ]

  it('removes duplicates from an unsorted singly-linked list', () => {
    const ll = LinkedList.fromArray(inputList)

    removeDups(ll)

    expect(LinkedList.toArray(ll)).toEqual([
      'luna',
      'maui',
      'Maui',
      'callie',
      'otto'
    ])
  })
})
