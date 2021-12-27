class MyIterator {
    constructor(data) {
        this.index = 0
        this.data = data
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if(this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    this.index = 0
                    return {
                        done: true,
                        value: void 0
                    }
                }
            }
        }
    }
}

const iterator = new MyIterator(['This', 'is', 'iterator'])
//todo: uncomment it -->
for (const val of iterator) {
    console.log('value: ', val);
}
// ? result:
// value:  This
// value:  is
// value:  iterator


//@ts-check                                         
// function* generator(collection) {
//     let index = 0
//     while (index < collection.length) {
//         yield collection[index++]
//     }
// }

// const gen = generator(['This', 'is', 'iterator'])

// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
//? result:
// value:  This
// value:  is
// value:  iterator