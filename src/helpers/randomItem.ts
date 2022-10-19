// create an array of 100 items, food, and animals as strings

const randomItemsArr: string[] = [
  'apple',
  'banana',
  'orange',
  'pear',
  'grape',
  'strawberry',
  'blueberry',
  'pizza',
  'burger',
  'hotdog',
  'taco',
  'cat',
  'dog',
  'bird',
  'fish',
  'rabbit',
]

// create a function that returns a random item from the array
const genRandomItem = () => {
  const randomIndex = Math.floor(Math.random() * randomItemsArr.length)
  return randomItemsArr[randomIndex]
}

const randomItem = genRandomItem()

export default randomItem
