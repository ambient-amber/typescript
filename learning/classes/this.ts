// this ссылается на контекст текущего объекта.
// Пример потери контекста
class ThisClass {
    private date: Date = new Date();

    // Четкое задание контекста через this
    getDate(this: ThisClass) {
        return this.date;
    }

    // У стрелочных функций нет дополнительного контекста, поэтому он не теряется.
    getDateArrow = () => {
        return this.date;
    }
}

const thisClass = new ThisClass();

const this_user = {
    id: 1,
    date: thisClass.getDate.bind(thisClass)// Чтобы исправить потерю контекста .bind(thisClass)
};

console.log(thisClass.getDate());
console.log(this_user.date()); // Что-то не очень понятно как это и зачем

// Пример того, что не всегда стоит применять стрелочные функции.
class ThisClass2 extends ThisClass {
    save() {
        return super.getDateArrow();
    }
}

// Будет ошибка getDateArrow is not a function
console.log(new ThisClass2().save());


// ------------- Типизация this -------------
class ThisClass3 {
    isClass4(): this is ThisClass3 {
        return this instanceof ThisClass3;
    }
}

class ThisClass4 extends ThisClass3{

}

const this_example: ThisClass3 | ThisClass4 = new ThisClass4();

console.log(this_example.isClass4());
// ------------------------------------------
