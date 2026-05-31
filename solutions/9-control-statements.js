// BEGIN
function getTotalAmount(wallet,currency) {
    let totalAmountofMoney = 0
    for (const money of wallet) {
        if (money.slice(0,3) === currency) {
            totalAmountofMoney += Number(money.slice(4))
        }
    }
    return totalAmountofMoney
}

export default getTotalAmount
// END

