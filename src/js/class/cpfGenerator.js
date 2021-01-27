class cpfGenerator {
    constructor() {
        this.cpf = [];
        this.cpfString = "";
    }
    
    init() {
        this.randomNum();
        this.generatesFirstCheckDigit();
        this.generatesSecondCheckDigit();
        this.generatesString();
        return(this.cpfString);
    }

    randomNum() {
        for(let i = 0; i < 9; i++) {
            this.cpf.push(Math.floor((Math.random() * 10)));
        }
    }

    generatesFirstCheckDigit() {
        let count = 10;
        let result = 0;

        this.cpf.forEach(function(value) {    
            result += value * count;
            count--;
        })

        result = ((result * 10 ) % 11) > 9 ? 0 : ((result * 10 ) % 11);

        this.cpf.push(result);
    }

    generatesSecondCheckDigit() {
        let count = 11;
        let result = 0;

        this.cpf.forEach(function(value) {    
            result += value * count;
            count--;
        })

        result = ((result * 10 ) % 11) > 9 ? 0 : ((result * 10 ) % 11);

        this.cpf.push(result);
    }


    generatesString() {
        this.cpf.splice(3, 0, '.');
        this.cpf.splice(7, 0, '.');
        this.cpf.splice(11, 0, '-');
        this.cpfString = this.cpf.join("");
    }
}

export {cpfGenerator};