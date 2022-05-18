// Перечисление какого типа могут быть параметры
// Сужение типов внутри функции
function logId(id: string|number|boolean) {
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    } else if (typeof id === 'number') {
        console.log(id);
    } else {
        console.log(id);
    }
}

function logError(error: string|string[]) {
    if (Array.isArray(error)) {
        console.log(error.join(', '));
    } else {
        console.log(error.toLowerCase());
    }
}

function logObject(error: {a: number}|{b: number}) {
    if ('a' in error) {
        console.log(error.a);
    } else {
        console.log(error.b);
    }
}

// Случай сужения, когда у параметры пересекаются по одному типу
function logMultipleIds(a: string|number, b: string|boolean) {
    if (a === b) {
        // Если параметры равны, значит они оба являются строками
    } else {
        // Тут уже не понятно, a - либо строка, либо цифра. То же самое с b.
    }
}

// ------------------- Literal type -------------------
// Вместо enum иногда лучше использовать
function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
    return 1;
}

// Приведение к типу. const приводить не надо.
let method = 'post';
fetchWithAuth('/url', method as 'post');
// ----------------------------------------------------

// ------------------- Alias -------------------
type http_method = 'post' | 'get';

function fetchWithAuthAlias(url: string, method: http_method): 1 | -1 {
    return -1;
}

fetchWithAuthAlias('/url', 'post');

// Объект
type User = {
    name: string,
    age: number,
    skills: string[]
};

let alias_user: User = {
    name: 'Anton',
    age: 32,
    skills: ['back', 'front']
};

// Пересечения (intersections)
type Role = {
    id: 1,
    name: string
};

type UserRole = User & Role;

let intersection_alias_user: UserRole = {
    name: 'Anton',
    age: 32,
    skills: ['back', 'front'],
    id: 1
};

// В таком случае name будет перезаписываться, лучше сделать
type NamedUserRole = {
    user: User,
    role: Role
}

let named_alias_user: NamedUserRole = {
    user: {
        name: 'Anton',
        age: 32,
        skills: ['back', 'front']
    },
    role: {
        id: 1,
        name: 'admin'
    }
};

// ------------ Индексные свойства ------------
type UserDictionaryType = {
    [index: number]: User
}
// ---------------------------------------------
