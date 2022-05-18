// Опция strictPropertyInitialization в tsconfig.json отвечает за обязательность заполнения всех свойств класса через конструктор.
// В реальных условиях нужно значение false.
// Конструктор всегда возвращает объект.

// get, set кооректирует способ определения и получения свойства. Они не могут быть асинхронными.
// Если нет метода get, то свойство становится readonly.
// Тип параметра у обоих методов связан.

class UserClass {
    name: string;
    created_at: Date = new Date();
    skills: string[];
    _login: string;

    constructor(name: string) {
        this.name = name;
    }

    getLifeTime(): number {
        return new Date().getTime() - this.created_at.getTime();
    }

    // Перегрузка метода
    addSkillClass(skill: string): void;
    addSkillClass(skills: string[]): void;
    addSkillClass(skill_or_skills: string | string[]): void {
        if (!Array.isArray(skill_or_skills)) {
            skill_or_skills = [skill_or_skills];
        }

        skill_or_skills.forEach((skill) => {
            if (this.skills.indexOf(skill) === -1) {
                this.skills.push(skill);
            }
        });
    }

    // названия set, get методов должны отличаться от названия свойства, поэтому свойство _login
    set login(login: string) {
        this._login = 'prefix_' + login;
    }
}

const userclass = new UserClass('asdf');
userclass.addSkillClass('zcxv');
userclass.addSkillClass(['zcxv', 'vcxz']);

// _login при этом станет prefix_login
userclass.login = 'login';
