
const arr = [1, 3, '8', {name: 'Tristana'}, [1, 2, '4'], '13']

const filterArray = (array, type) => {
    return array.filter(el => {
        if (typeof el !== type) {
            return type
        }
    })
}

console.log(filterArray(arr, 'object'));