// Неудачные примеры наследования
class Users extends Array<User> {

}

class Payment {}

class UserWithPayment extends Payment {
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
    payment: Payment;

    constructor(user: User, payment: Payment) {
        this.user = user;
        this.payment = payment;
    }
}
