class Vehicle {
    property: string; // public
    private property2: string; // доступно только в этом классе
    protected property3: string; // доступно и в дочернем классе
    #property4: string; // способ указаная приватности в нативном js - new WeakMap()

    private method(){}
    protected method2(){
        this.#property4 = 'asdf';
    }

    // Не смотря на то, что объект приходит из вне, мы все равно можем обратиться к его приватному свойству таким образом.
    isEqualProperty(vehicle: Vehicle): void {
        console.log(this.#property4 === vehicle.#property4);
    }
}

const vehicle = new Vehicle();
vehicle.isEqualProperty(vehicle);
