const costOfService = document.querySelector('.costOfService')
const rangeSlider = document.querySelector('#customRange1')
const perInput = document.querySelector('#percentageInput')
const tipInput = document.querySelector('#tip')
const billInput = document.querySelector('#bill')
// buttons

const calculate = document.querySelector('#calculate')
const reset = document.querySelector('#reset')

calculate.addEventListener('click', () => {
    if (isNaN(perInput.value) || isNaN(costOfService.value)) {
        alert('Please enter a number')
        return
    }
    else {
        let percentage = toNumber(perInput.value)
        let cost = toNumber(costOfService.value)
        let tip = (percentage/100) * cost
        tipInput.value = tip
        billInput.value = tip + cost
        console.log(tip)
        return
    }
})


reset.addEventListener('click', () => {
    rangeSlider.value = 15
    perInput.value = 15
    costOfService.value = 0
    billInput.value = 0
    tipInput.value = 0
})



function toNumber(string) {
    let number = parseInt(string, 10)
    return number
}

