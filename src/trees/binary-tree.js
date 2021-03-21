class TreeNode {
  constructor(val, left, right) {
    this.val = val ? val : 0
    this.left = left ? left : null
    this.right = right ? right : null
  }

  get tree() {
    return new TreeNode(this.val, this.left, this.right)
  }

  get preOrderTraversal() {
    return TreeNode.getPreOrderTraversal(this.tree)
  }

  get inOrderTraversal() {
    return TreeNode.getInOrderTraversal(this.tree)
  }

  get height() {
    return TreeNode.getHeight(this.tree)
  }

  static getHeight(tn) {
    if (TreeNode.isLeaf(tn.left) && TreeNode.isLeaf(tn.right)) {
      return 1
    }

    const leftHeight = tn.left ? TreeNode.getHeight(tn.left) + 1 : 0
    const rightHeight = tn.right ? TreeNode.getHeight(tn.right) + 1 : 0

    return Math.max(leftHeight, rightHeight)
  }

  static isLeaf(tn) {
    return !tn?.left && !tn?.right
  }

  static getPreOrderTraversal(tn) {
    if (!tn.left && !tn.right) {
      return [tn.val]
    }

    const left = tn.left ? tn.left.preOrderTraversal : []
    const right = tn.right ? tn.right.preOrderTraversal : []

    return [tn.val, ...left, ...right]
  }

  static getInOrderTraversal(tn) {
    if (!tn.left && !tn.right) {
      return [tn.val]
    }

    const left = tn.left ? tn.left.inOrderTraversal : []
    const right = tn.right ? tn.right.inOrderTraversal : []

    return [...left, tn.val, ...right]
  }

  insert(val) {
    if (!this.left) {
      this.left = val ? new TreeNode(val) : new TreeNode(-1)
      return
    } else if (!this.right) {
      this.right = val ? new TreeNode(val) : new TreeNode(-1)
      return
    }

    if (TreeNode.isLeaf(this.left) || !this.left.right) {
      this.left.insert(val)
      return
    }

    this.right.insert(val)
  }
}

const buildBinaryTree = (arr) => {
  const inputArr = [...arr]

  if (!inputArr.length) {
    return new TreeNode()
  }

  const tree = new TreeNode(inputArr.shift())

  if (!inputArr.length) {
    return tree
  }

  inputArr.forEach((v) => {
    tree.insert(v)
  })

  return tree
}

const isSymmetric = function (root) {
  if (
    !root?.val ||
    (root.left && !root.right) ||
    (!root.left && root.right) ||
    typeof root.left !== typeof root.right
  ) {
    return false
  } else if (typeof root.left === 'number' && typeof root.right === 'number') {
    return root.left === root.right
  } else if (!root.left && !root.right) {
    return true
  }

  const isLeaf = (tn) => !tn?.left && !tn?.right

  const equalArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false
    }

    return (
      arr1
        .map((v) => {
          const el = arr2.shift()

          return v === el
        })
        .filter((v) => v).length === arr1.length
    )
  }

  const getHeight = (tn, level = 0) => {
    if (isLeaf(tn.left) && isLeaf(tn.right)) {
      return 1
    }

    const leftHeight = tn.left ? getHeight(tn.left, (level += 1)) + level : 0
    const rightHeight = tn.right ? getHeight(tn.right, (level += 1)) + level : 0

    return Math.max(leftHeight, rightHeight)
  }

  const getLevel = (tn, level) => {
    if (!tn) {
      return []
    } else if (level === 1) {
      return [tn.val]
    } else if (level === 2) {
      return [tn.left?.val, tn.right?.val].filter((v) => v)
    }
    level -= 1

    return [...getLevel(tn.left, level), ...getLevel(tn.right, level)]
  }

  const h = getHeight(root)
  // console.log("h", h);
  let i = 2
  while (i < h + 1) {
    const els = getLevel(root, i)
    if (els.length % 2) {
      // append a "null" if missing from
      // bottom right-most leaf
      els.push(-1)
    }
    console.log('els', els, 'level', i)
    const midpoint = Math.floor(els.length / 2)
    const left = els.slice(0, midpoint)
    const right = els.slice(midpoint)
    console.log('left', left)
    console.log('right', right)
    console.log(!equalArrays(left.slice(0), right.slice(0).reverse()))
    if (!equalArrays(left.slice(0), right.slice(0).reverse())) {
      return false
    }
    i += 1
  }

  return true
}

const testInputs = [
  // [[1, 2, 2, null, 3, 3], true],
  // [[1, 2, 2, null], true],
  // [[1, 0], false],
  // [[0, 1], false],
  // [[1, 2, 2, 3, 4, 4, 3], true],
  // [[1, 2, 2, null, 3, null, 3], false],
  // [[2, 3, 3, 4, 5, 4, 5], false],
  // [[1, 2, 3, 4, 5, 6, 7, 8], false],
  [[2, 3, 3, 4, 5, 5, 4, null, null, 8, 9, 9, 8], true]
]

const testResults = testInputs.map((val, idx) => {
  const [inputs, expected] = val

  const tree = buildBinaryTree(inputs)

  // console.log("tree", tree, tree.height);
  const result = isSymmetric(tree)

  return {
    id: idx,
    passed: result === expected,
    inputs: inputs,
    expected: expected,
    actual: result
  }
}, {})

const failedTests = testResults.filter((r) => !r.passed)

console.log(
  `${testInputs.length - failedTests.length} / ${
    testInputs.length
  } tests passed`
)

failedTests.forEach((t) => {
  console.log(`\ntest ${t.id} failed:`)
  console.log(t.inputs)
  console.log(`\texpected: ${t.expected}\n\tactual: ${t.actual}`)
})

let a = [-1, -1, 2, 3, -1]

console.log(a)

let i = 0
while (i) {
  console.log('hi', a.slice(-(i - 1), -i))
  if (a[i] === -1 && a.slice(-(i - 1), -i) !== -1) {
    a.push(-1)
  }
  i += 1
}

console.log(a)
