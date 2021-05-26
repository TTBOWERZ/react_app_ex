
// ACTION -> change state 'how many todo items'
const count = () => {
  return {
    type: 'ADD'
  }
}

const del = () => {
  return {
    type: 'SUB'
  }
}

export {count, del};
