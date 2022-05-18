// Отличи от интерфейса в том, что он частично может реализовывать методы и свойства, а не только их объявлять.
// Принцип фреймворков, которые создают базу для использования.
abstract class AbstractController {
    abstract handle(req: any): void;

    handleWithLog(req: any): void {
        console.log('start');
        this.handle(req);
        console.log('end');
    }
}

class ThisUserController extends AbstractController {
    handle(req: any): void {
        console.log(req);
    }
}

const this_user_controller = new ThisUserController();
this_user_controller.handleWithLog('request');
