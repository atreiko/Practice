
function createUser(){
    const user = {
        firstName: prompt('Enter your name'),
        lastName: prompt('Enter your surname'),

        getLogin(){
            return (this.firstName).slice(0, 1).toLocaleLowerCase() + this.lastName.toLocaleLowerCase()
        }
    }
    return user   
}

let newUser = createUser()

Object.defineProperty(newUser, 'firstName', {
    configurable: true,
    writable: false,

    set setFirstName(value) {
        this.firstName = value
    },

    get firstName() {
        return this.firstName
    }
})

console.log(newUser);
newUser.setFirstName = 'lolo'
console.log(newUser);


