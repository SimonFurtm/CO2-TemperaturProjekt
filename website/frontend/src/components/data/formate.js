 
class Formate{
  changeDatumFormat(datum2) {
    let year = ""
    let month = ""
    let day = ""
    
    year = datum2.slice(0,4)
    month = datum2.slice(4,6)
    day = datum2.slice(6,8)

    const datum3 = day + "." + month + "." + year
    return datum3;
}

  changeTimeFormat(time2) {
    let hours = ""
    let minutes = ""
    let seconds = ""
    if(time2.length == 6){
    hours = time2.slice(0,2)
    minutes = time2.slice(2,4)
    seconds = time2.slice(4,6)
    }else{
    hours = time2.slice(0,1)
    minutes = time2.slice(1,3)
    seconds = time2.slice(3,5)
    }

    const time3 = hours + ":" + minutes + ":" + seconds

    return time3;
  }
}

const formate = new Formate();
export default formate;
