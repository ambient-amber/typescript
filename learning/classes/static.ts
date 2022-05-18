// Может использоваться в случае singleton

class UserService {
    private static prop1: any;
    static prop2: any;

    static method1() {
        // Обращение к статическим методам и свойствам не через this, а через название класса.
        return UserService.prop1;
    }

    // Типа аналог конструктора только для статичного класса. Здесь не может быть асинхронности.
    static {
        UserService.prop1 = 'asdf';
    }
}

// Без объявления объекта доступа к обычным методам и свойствам нет.
// То же работает наоборот. У инициализированного объекта нет доступа к статическим свойствам и методам.