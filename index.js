// code your solution here
function superbowlWin(record){

    for (const result in record) {
        if (record.find(record => record.result === "W")) {

            let yearWon = record.find(record => record.result === "W").year
            return yearWon
        }
    }

    return undefined
}
