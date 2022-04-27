interface UserInterface {
    name: string,
    age: number

    log: (message: string) => string; // просто для примера. Объект не место для методов.
}

interface RoleInterface {
    role_id: number
}

interface UserWithRole extends UserInterface, RoleInterface {
    created_at: Date
}

let userByInterface: UserWithRole = {
    name: 'Anton',
    age: 32,
    role_id: 1,
    created_at: new Date(),

    log(message) {
        return message
    }
};

// ------------ Индексные свойства ------------
// Справочник абонентов - сколько угодно элементов пользователей, где ключ - обязательно число
interface UserDictionary {
    [index: number]: User
}