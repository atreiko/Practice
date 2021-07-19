
function createUser() {
    const user = Object.create({}, {
        firstName: {
            value: prompt('Enter your name'),
            enumerable: true,
            writable: true,
            configurable: true
        },
        lastName: {
            value: prompt('Enter your surname'),
            enumerable: true,
            writable: false
        },
        birthday: {
            value: prompt('dd.mm.yyyy').split('.').reverse().join('-'),
            enumerable: true,
            writable: true,
            configurable: true
        },
        getLogin: {
            get() {
                return this.firstName.toLowerCase().slice(0, 1) + this.lastName.toLowerCase()
            },
        },
        setFirstName: {
            value: function (value) {
                this.firstName = value
            }
        },
        getAge: {
            get() {
                if (this.birthday !== null) {
                    const now = new Date()
                    const userDate = new Date(this.birthday)
                    return now.getFullYear() - userDate.getFullYear()
                }
            }
        }
    })
    return user
} 

const newUser = createUser()
console.log(newUser);
newUser.setFirstName('papa')
console.log(newUser);
console.log(newUser.getAge);