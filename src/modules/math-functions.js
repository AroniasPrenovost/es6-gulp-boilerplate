// general demo code 
const sum = (a, b) => {
    return a + b;
};

const product = (a, b) => {
    return a * b;
};

const dividend = (a, b) => {
    return (a / b).toFixed(2);
};

const difference = (a, b) => {
    return a - b;
};

const modulus = (a, b) => {
    return a % b;
};

const sqrroot = (a) => {
	return Math.sqrt(a);
}


export {sum, product, dividend, difference, modulus, sqrroot};
