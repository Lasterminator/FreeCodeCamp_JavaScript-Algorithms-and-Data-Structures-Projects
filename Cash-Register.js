
const checkCashRegister = (price, cash, cid) => {
    
    let changeDue = Math.round((cash - price) * 100)
    
    const currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000]
    
    const changeArry = []
    
    cid.forEach(x => (x[1] = Math.round(x[1] * 100)))
  
    
    const gotCash = cashInReg => {
      const sum = cashInReg.filter((x, i) => changeDue >= currency[i])
      return sum.reduce((prev, curr) => prev + curr[1], 0)
    }
  
    
    if (gotCash(cid) < changeDue)
      return { status: 'INSUFFICIENT_FUNDS', change: [] }
    
    if (gotCash(cid) === changeDue) {
      
      cid.forEach(x => (x[1] /= 100))
      return { status: 'CLOSED', change: cid }
    }
  
    
    for (let i = cid.length - 1; i > -1; i--) {
      let value = 0
      while (cid[i][1] > 0 && changeDue >= currency[i]) {
        
        changeDue -= currency[i]
        cid[i][1] -= currency[i]
        
        value += currency[i]
      }
      
      if (value) changeArry.push([cid[i][0], value])
    }
    
    changeArry.forEach(x => (x[1] /= 100))
    return { status: 'OPEN', change: changeArry }
  }
  