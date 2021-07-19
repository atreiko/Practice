enum Membership {
    Simple,
    Standard,
    Premium
}
// * Мы можем получить индекс enum:
const membership = Membership.Standard
console.log(membership); //!: 1

// * Reverse Enum - когда мы получаем наш enum по ключу:
const reverseMembership = Membership[2]
console.log(reverseMembership); //!: Premium

// ===== ===== ===== =====

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}
// * Получим наше строковое значение по ключу INSTAGRAM:
const social = SocialMedia.INSTAGRAM
console.log(social);

