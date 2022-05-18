// Неудачные примеры наследования
class Users extends Array<User> {

}

class Payment2 {}

class UserWithPayment extends Payment2 {
    // Переход от одной предметной области к другой. Нарушение DDD. Платеж - домен, пользователь - другой домен.
    // Лучше использовать композицию.
}

// Удачные примеры композии
class UserList {
    users: User[];

    push(user: User) {
        this.users.push(user);
    }
}

// Агрекационный класс, без нарушения доменных областей пользователя и платежа.
class UserWithPayment2 {
    user: User;
    payment: Payment2;

    constructor(user: User, payment: Payment2) {
        this.user = user;
        this.payment = payment;
    }
}
