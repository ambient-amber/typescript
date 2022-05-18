let a: number = 5;
let b: string = a.toString();
let c: number = parseInt(b);

let d: string = new String(c).valueOf();
let e: boolean = new Boolean(d).valueOf();

// Преобразование одного объекта к другому
interface UserCast {
    name: string;
    login: string;
    email: string;
}

interface AdminCast {
    name: string;
    role_id: number;
}

const userCast: UserCast = {
    name: 'asdf',
    login: 'asdf',
    email: 'asdf'
};


// Преобразование пользователя в админа через функцию мапинга.
function userToAdmin(user: UserCast): AdminCast {
    return {
        name: user.name,
        role_id: 1
    }
}

userToAdmin(userCast);
