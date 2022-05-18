/*
    Необходимо реализовать абстрактный класс Logger с 2-мя методами:
        абстрактным - log(message): void
        printDate - выводящий в log дату
    К нему необходимо сделать реальный класс, который бы имел метод:
        logWithDate, выводящий сначала дату, а потом заданное сообщение
*/

abstract class AbstractLogger {
    abstract log(message: string): void;

    printDate(date: Date): void {
        console.log(date);
    }
}

class MyLogger extends AbstractLogger {
    log(message: string | Date):void {
        console.log(message);
    }

    logMessageWithDate(message: any, date: Date) {
        this.printDate(date);
        this.log(message);
    }
}

const my_logger = new MyLogger();
my_logger.logMessageWithDate('кукусики', new Date());
