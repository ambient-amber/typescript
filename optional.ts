// Опциональность != string | undefined
type OptionalUser = {
    login: string,
    password?: string
}

interface OptionalUserInterface {
    login: string,
    password?: string
}

const optional_user:OptionalUser = {
    login: 'asdf@asdf.ru'
}

function multiply(first: number, second?: number): number {
    if (second) {
        return first * second;
    }

    return first * first;
}

// --- Optional chain ---
interface UserPro {
    login: string,
    password?: {
        type: 'primary' | 'secondary'
    }
}

function testPass(user: UserPro) {
    // Так можно обращаться к свойству, которого может и не быть. t примет значение type или undefined.
    const t = user.password?.type;
}

function test(param?: string) {
    // Если param null или undefined, то выполнится multiply
    const t = param ?? multiply(5);
}