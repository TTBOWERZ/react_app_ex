// REDUCER -> how actions transform state to next
const curr_total = (state = 0, action) => {
  switch(action.type){
    case "ADD":
      return state + 1;
    case "SUB":
      return state -1;
  }
}

export default curr_total;
