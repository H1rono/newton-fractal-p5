class Complex {
    public re: number;
    public im: number;

    constructor(re: number, im: number) {
        this.re = re;
        this.im = im;
    }

    static fromNumber(n: number): Complex {
        return new Complex(n, 0);
    }

    magSq(): number {
        return this.re * this.re + this.im * this.im;
    }

    distSq(o: Complex | number): number {
        let x = typeof o === "number" ? Complex.fromNumber(o) : o;
        return this.sub(x).magSq();
    }

    conj(): Complex {
        return new Complex(this.re, -this.im);
    }

    conjMut(): Complex {
        this.im *= -1;
        return this;
    }

    neg(): Complex {
        return new Complex(-this.re, -this.im);
    }

    negMut(): Complex {
        this.re *= -1;
        this.im *= -1;
        return this;
    }

    add(o: Complex | number): Complex {
        let x = typeof o === "number" ? Complex.fromNumber(o) : o;
        return new Complex(this.re + x.re, this.im + x.im);
    }

    addMut(o: Complex | number): Complex {
        let x = typeof o === "number" ? Complex.fromNumber(o) : o;
        this.re += x.re;
        this.im += x.im;
        return this;
    }

    sub(o: Complex | number): Complex {
        let x = typeof o === "number" ? Complex.fromNumber(o) : o;
        return new Complex(this.re - x.re, this.im - x.im);
    }

    subMut(o: Complex | number): Complex {
        let x = typeof o === "number" ? Complex.fromNumber(o) : o;
        this.re -= x.re;
        this.im -= x.im;
        return this;
    }

    mul(o: Complex | number): Complex {
        let x = typeof o === "number" ? Complex.fromNumber(o) : o;
        return new Complex(this.re * x.re - this.im * x.im, this.re * x.im + this.im * x.re);
    }

    mulMut(o: Complex | number): Complex {
        let x = typeof o === "number" ? Complex.fromNumber(o) : o;
        const re = this.re * x.re - this.im * x.im;
        const im = this.re * x.im + this.im * x.re;
        this.re = re;
        this.im = im;
        return this;
    }

    div(o: Complex | number): Complex {
        let x = typeof o === "number" ? Complex.fromNumber(o) : o;
        const numer = this.mul(x.conj());
        const denom = x.magSq();
        return new Complex(numer.re / denom, numer.im / denom);
    }

    divMut(o: Complex | number): Complex {
        let x = typeof o === "number" ? Complex.fromNumber(o) : o;
        this.mulMut(x.conj());
        const denom = x.magSq();
        this.re /= denom;
        this.im /= denom;
        return this;
    }
}

export default Complex;
