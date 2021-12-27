class SimpleMembership {
    constructor(name){
        this.name = name
        this.cost = 50
    }
}

class StandardMembership {
    constructor(name){
        this.name = name
        this.cost = 150
    }
}

class PremiumMembership {
    constructor(name){
        this.name = name
        this.cost = 450
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: SimpleMembership,
        premium: PremiumMembership
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name)

        member.type = type
        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return member
    }
}

const factory = new MemberFactory()

const members = [
    factory.create('Bolocode', 'simple'),
    factory.create('Zolo', 'premium'),
    factory.create('Buzz', 'standard'),
    factory.create('Jiri', 'premium'),
    factory.create('Newbie')
]

// console.log(members);

members.forEach(m => {
    m.define()
})
