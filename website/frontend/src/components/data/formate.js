const { Component } = require("react")
 

function changeDatumFormat(datum2) {
    let year = ""
    let month = ""
    let day = ""
    
    console.log(datum2)
    year = datum2.slice(0,4)
    month = datum2.slice(4,6)
    day = datum2.slice(6,8)

    const datum3 = day + "." + month + "." + year
    console.log(datum3)
    return datum3;
}

function changeTimeFormat(time2) {
  let hours = ""
  let minutes = ""
  let seconds = ""

  hours = time2.slice(0,2)
  minutes = time2.slice(2,4)
  seconds = time2.slice(4,6)

  const time3 = hours + ":" + minutes + ":" + seconds

  return time3;
}