const testVar = {}

function testFunc() {
  return "hi"
}


let superbowlWin = (records) => {
    let winner = records.find(record => record.result === 'W')
    if (winner){
      return winner.year
    }
}