const createPhoneNum = (arr) => {
    let areaCode = arr.slice(0,3).join('')
    let firstPart = arr.slice(3,6).join('')
    let lastPart = arr.slice(7,10).join('')

    console.log("("+areaCode.toString()+")"+" "+firstPart.toString()+"-"+lastPart.toString()) 
}

createPhoneNum([1,2,3,4,5,6,7,8,9,10])