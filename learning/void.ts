// Эммм, непонятно
type voidFunction = () => void;

const f1: voidFunction = () => {

};

const f2: voidFunction = () => {
    return 'something';
};


console.log(f2());
