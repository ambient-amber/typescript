type payment_status = 'new' | 'paid';

class Payment {
    id: number;
    status: payment_status = 'new';

    constructor(id: number) {
        this.id = id;
    }

    pay() {
        this.status = 'paid';
    }
}

class PersistedPayment extends Payment {
    database_id: number;
    paid_at: Date;

    // super должен быть выше первого упоминания this.
    constructor() {
        const id = Math.random();
        super(id);
    }

    // При переопределении метода его параметры должны расширять параметры родительского метода, поэтому date опционален.
    // override подчеркивает перезапись метода. Если удалить метод у родительского класса, то здесь будет ошибка.
    override pay(date?: Date) {
        // Родительская часть метода.
        super.pay();
        this.paid_at = new Date();
    }
}

class HttpError extends Error {
    code: number;

    constructor(message: string, code?: number) {
        super(message);

        this.code = code ?? 500;
    }
}