// ------------------- Простые типы -------------------
let revenue: number = 1000;
let bonus: number = 500;
let comment: string = 'asdf';
let is_default: boolean = true;

let result: number = revenue + bonus;

console.log('result', result);

// ------------------- Функции -------------------

function getFullName(name: string, surname: string): string {
    return name + ' ' + surname;
}

console.log('getFullName', getFullName('Anton', 'Tarasov'));

const getFullNameArrow = (name: string, surname: string): string => {
    return name + ' ' + surname;
};

console.log('getFullNameArrow', getFullNameArrow('Anton', 'Tarasov'));

// ------------------- Объект -------------------
const user = {
    name: 'Anton',
    surname: 'Tarasov',
    city: 'Moscow'
};

const getFullnameObject = (user: { name: string, surname: string }): string => {
    // Не смотря на то, что у объекта user есть и другие свойства, обратиться к ним из-за ограничения типов нельзя =)
    // Т.е. обращение к user.city вызовет ошибку.
    return user.name + ' ' + user.surname;
};

console.log('getFullnameObject', getFullnameObject(user));

const office_info: {
    officeId: number;
    isOpened: boolean;
    contacts: {
        phone: string;
        email: string;
        address: {
            city: string;
        }
    }
} = {
    officeId: 45,
    isOpened: false,
    contacts: {
        phone: '+79100000000',
        email: 'my@email.ru',
        address: {
            city: 'Москва'
        }
    }
};

// ------------------- Массив -------------------
// Указание что это массив именн строк
const skills: string[] = ['dev', 'devops', 'testing'];

const result_skills = skills
    .filter((skill: string) => skill !== 'devops')
    .map(skill => skill + '! ')
    .reduce((a, b) => a + b);

console.log('result_skills', result_skills);

// ------------ Tuples кортежи ------------
const skill: [number, string] = [1, 'dev'];

// Массив менять можно, например skill.push('допустимо'); Но обратиться к skill[2] по прежнему будет нельзя.

// ДЕСТРУКТУРИЗАЦИЯ
const [skill_id, skill_name] = skill;
console.log(skill_id, skill_name);

// SPREAD оператор на типы. Ограничение число, строка и сколько угодно boolean.
const new_skill: [number, string, ...boolean[]] = [2, 'front', true, false, true];

// ------------ Readonly ------------
// Защита от изменений как const только у массивов объектов, классов.
// new_skills[0] = 'other'; new_skills.push('other') будут приводить к ошибке.
const new_skills: readonly string[] = ['back', 'front'];

// ------------ Enum ------------
// Если не указывать значения, то значениям присвоятся цифры от 0.
// Можно задать первое значение и последующим будет применен автоинкремент.
enum status_codes {
    SUCCESS = 1,
    IN_PROGRESS,
    FAILED,
    COMPUTED = computeStatus()
}

enum string_status_codes {
    SUCCESS = 'success',
}

function computeStatus() {
    return 4 + 5;
}

console.log('status_codes some', string_status_codes.SUCCESS);
console.log('status_codes computed', status_codes.COMPUTED);

const response = {
    message: 'Платёж прошел',
    status: 0
};

if (response.status === status_codes.SUCCESS) {
    console.log('enum ok');
}

function action(status: status_codes) {
    console.log('action status', status);
}

action(status_codes.FAILED);

// Можно enum объявить через const. Это влияет на то, в какой js все это перекомпилируется.
const enum statuses {
    SUCCESS,
    FAILED
}
