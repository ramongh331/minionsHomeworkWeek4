const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

// forEach 
  minions.forEach(minion => {
        console.log(minion + ' aqui!')
     })

// Map
const capitalizedMinions = minions.map((value, index) => {
     if (value !== "kevin"){
return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    } else {
        return value
    }
})
console.log(capitalizedMinions)

// Filter
const actuallyCapitalizedMinions = capitalizedMinions.filter((value, index) => {
    if (value !== "kevin"){    
    return value
}
    })
console.log(actuallyCapitalizedMinions)

// Every (NEED HELP UNDERSTANDING THIS ONE)
const allCapitalized = actuallyCapitalizedMinions.every((value, index) => {
        return (value.charAt(0).toUpperCase() + value.slice(1).toLowerCase())
})
console.log(allCapitalized)