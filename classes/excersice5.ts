/*
    Необходимо сделать корзину (Cart) на сайте, которая имееет список продуктов (Product), добавленных в корзину
    и переметры доставки (Delivery). Для Cart реализовать методы:
        - Добавить продукт в корзину
        - Удалить продукт из корзины по ID
        - Посчитать стоимость товаров в корзине
        - Задать доставку
        - Checkout - вернуть что всё ок, если есть продукты и параметры доставки

    Product: id, название и цена
    Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
 */


/* --- Доставка --- */
interface IAddress {
    city: string;
    street: string;
    house: string;
    flat: string;
}

class Delivery {
    date: Date;

    constructor(date: Date) {
        this.date = date;
    }
}

class HomeDelivery extends Delivery {
    address: IAddress;

    constructor(date: Date, address: IAddress) {
        super(date);
        this.address = address;
    }
}

class PickPointDelivery extends Delivery {
    pick_point_id: number;

    constructor(date: Date, pick_point_id: number) {
        super(date);
        this.pick_point_id = pick_point_id;
    }
}
/* --------------- */

class Product {
    id: number;
    price: number;

    constructor(id: number, price: number) {
        this.id = id;
        this.price = price;
    }
}

class CartProduct extends Product {
    count: number = 0;

    constructor(id: number, price: number, count?: number | undefined) {
        super(id, price);

        if (typeof count === 'number') {
            this.count = count;
        }
    }

    increaseCount() {
        this.count++;
    }

    decreaseCount() {
        this.count--;
    }
}

class Cart {
    private delivery: HomeDelivery | PickPointDelivery;
    private products_sum: number = 0;
    private products: CartProduct[] = [];

    getProducts(): CartProduct[] {
        return this.products;
    }

    addProduct(product: CartProduct): void {
        const cart_product = this.products.find(p => p.id === product.id);

        if (cart_product) {
            cart_product.increaseCount();
        } else {
            product.increaseCount();
            this.products.push(product);
        }
    }

    deleteProduct(product_id: number): void {
        this.products.forEach((product, index) => {
            if (product.id === product_id) {
                this.products.splice(index, 1);
            }
        });
    }

    calculateProductsSum(): void {
        let sum = 0;

        /*
            ToDo почитать про такой подход, реализовать count * price
            this.products
                .map((p: Product) => p.price)
                .reduce((p1: number, p2: number) => p1 + p2);
        */

        this.products.forEach((product) => {
            sum += product.price * product.count;
        });

        this.products_sum = sum;
    }

    getProductsSum(): number {
        return this.products_sum;
    }

    setDelivery(delivery: HomeDelivery | PickPointDelivery) {
        this.delivery = delivery;
    }

    checkout(): void {
        if (!this.delivery) {
            throw new Error('Не выбрана доставка.');
        }
        if (!this.products.length) {
            throw new Error('В корзине нет товаров.');
        }
    }
}

// --- Корзина 1 с доставкой до дома ---
const cart1 = new Cart();

const product1 = new CartProduct(1, 666);
const product2 = new CartProduct(2, 777);
const product3 = new CartProduct(3, 888);

const home_delivery = new HomeDelivery(
    new Date(),
    {
        city: 'Moscow',
        street: 'Maksimova',
        house: '12',
        flat: '13'
    }
);

cart1.addProduct(product1);
cart1.addProduct(product1);
cart1.addProduct(product2);
cart1.addProduct(product3);

cart1.deleteProduct(2);

cart1.setDelivery(home_delivery);
cart1.calculateProductsSum();

console.log('cart1 products', cart1.getProducts());
console.log('products_sum', cart1.getProductsSum());

cart1.checkout();

// --- Корзина 2 с доставкой до пункта выдачи ---
const cart2 = new Cart();
//cart2.setDelivery(new PickPointDelivery(new Date(), 13));
cart2.addProduct(new CartProduct(4, 999));

cart2.checkout();
