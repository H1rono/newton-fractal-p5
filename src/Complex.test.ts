import { assert, expect, test } from "vitest";
import Complex from "./Complex";

test("constructor", () => {
    const c = new Complex(1, 2);
    expect(c.re).toBe(1);
    expect(c.im).toBe(2);
});

test("fromNumber", () => {
    const c = Complex.fromNumber(1);
    expect(c.re).toBe(1);
    expect(c.im).toBe(0);
});

test("magSq", () => {
    const c = new Complex(3, 4);
    expect(c.magSq()).toBe(25);
});

test("conj", () => {
    const c1 = new Complex(1, 2);
    const c2 = c1.conj();
    // c1
    expect(c1.re).toBe(1);
    expect(c1.im).toBe(2);
    // c2
    expect(c2.re).toBe(1);
    expect(c2.im).toBe(-2);
});

test("conjMut", () => {
    const c1 = new Complex(1, 2);
    const c2 = c1.conjMut();
    expect(c1 === c2).toBe(true);
    expect(c1.re).toBe(1);
    expect(c1.im).toBe(-2);
});

test("neg", () => {
    const c1 = new Complex(1, 2);
    const c2 = c1.neg();
    // c1
    expect(c1.re).toBe(1);
    expect(c1.im).toBe(2);
    // c2
    expect(c2.re).toBe(-1);
    expect(c2.im).toBe(-2);
});

test("negMut", () => {
    const c1 = new Complex(1, 2);
    const c2 = c1.negMut();
    expect(c1 === c2).toBe(true);
    expect(c1.re).toBe(-1);
    expect(c2.im).toBe(-2);
});

test("add(Complex)", () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(3, 4);
    const c3 = c1.add(c2);
    // c1
    expect(c1.re).toBe(1);
    expect(c1.im).toBe(2);
    // c2
    expect(c2.re).toBe(3);
    expect(c2.im).toBe(4);
    // c3
    expect(c3.re).toBe(4);
    expect(c3.im).toBe(6);
});

test("add(number)", () => {
    const c1 = new Complex(1, 2);
    const c2 = c1.add(3);
    // c1
    expect(c1.re).toBe(1);
    expect(c1.im).toBe(2);
    // c2
    expect(c2.re).toBe(4);
    expect(c2.im).toBe(2);
});

test("addMut(Complex)", () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(3, 4);
    const c3 = c1.addMut(c2);
    expect(c1 === c3).toBe(true);
    // c1
    expect(c1.re).toBe(4);
    expect(c1.im).toBe(6);
    // c2
    expect(c2.re).toBe(3);
    expect(c2.im).toBe(4);
});

test("addMut(number)", () => {
    const c1 = new Complex(1, 2);
    const c2 = c1.addMut(3);
    expect(c1 === c2).toBe(true);
    // c1
    expect(c1.re).toBe(4);
    expect(c1.im).toBe(2);
});

test("sub(Complex)", () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(3, 4);
    const c3 = c1.sub(c2);
    // c1
    expect(c1.re).toBe(1);
    expect(c1.im).toBe(2);
    // c2
    expect(c2.re).toBe(3);
    expect(c2.im).toBe(4);
    // c3
    expect(c3.re).toBe(-2);
    expect(c3.im).toBe(-2);
});

test("sub(number)", () => {
    const c1 = new Complex(1, 2);
    const c2 = c1.sub(3);
    // c1
    expect(c1.re).toBe(1);
    expect(c1.im).toBe(2);
    // c2
    expect(c2.re).toBe(-2);
    expect(c2.im).toBe(2);
});

test("subMut(Complex)", () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(3, 4);
    const c3 = c1.subMut(c2);
    expect(c1 === c3).toBe(true);
    // c1
    expect(c1.re).toBe(-2);
    expect(c1.im).toBe(-2);
    // c2
    expect(c2.re).toBe(3);
    expect(c2.im).toBe(4);
});

test("subMut(number)", () => {
    const c1 = new Complex(1, 2);
    const c2 = c1.subMut(3);
    expect(c1 === c2).toBe(true);
    // c1
    expect(c1.re).toBe(-2);
    expect(c1.im).toBe(2);
});

test("distSq(Complex)", () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(3, 4);
    const d = c1.distSq(c2);
    // c1
    expect(c1.re).toBe(1);
    expect(c1.im).toBe(2);
    // c2
    expect(c2.re).toBe(3);
    expect(c2.im).toBe(4);
    // d
    expect(d).toBe(8);
});

test("distSq(number)", () => {
    const c1 = new Complex(1, 2);
    const d = c1.distSq(3);
    // c1
    expect(c1.re).toBe(1);
    expect(c1.im).toBe(2);
    // d
    expect(d).toBe(8);
});

test("mul(Complex)", () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(3, 4);
    const c3 = c1.mul(c2);
    // c1
    expect(c1.re).toBe(1);
    expect(c1.im).toBe(2);
    // c2
    expect(c2.re).toBe(3);
    expect(c2.im).toBe(4);
    // c3
    expect(c3.re).toBe(-5);
    expect(c3.im).toBe(10);
});

test("mul(number)", () => {
    const c1 = new Complex(1, 2);
    const c2 = c1.mul(3);
    // c1
    expect(c1.re).toBe(1);
    expect(c1.im).toBe(2);
    // c2
    expect(c2.re).toBe(3);
    expect(c2.im).toBe(6);
});

test("mulMut(Complex)", () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(3, 4);
    const c3 = c1.mulMut(c2);
    expect(c1 === c3).toBe(true);
    // c1
    expect(c1.re).toBe(-5);
    expect(c1.im).toBe(10);
    // c2
    expect(c2.re).toBe(3);
    expect(c2.im).toBe(4);
});

test("mulMut(number)", () => {
    const c1 = new Complex(1, 2);
    const c2 = c1.mulMut(3);
    expect(c1 === c2).toBe(true);
    // c1
    expect(c1.re).toBe(3);
    expect(c1.im).toBe(6);
});

test("div(Complex)", () => {
    const c1 = new Complex(-5, 10);
    const c2 = new Complex(3, 4);
    const c3 = c1.div(c2);
    // c1
    expect(c1.re).toBe(-5);
    expect(c1.im).toBe(10);
    // c2
    expect(c2.re).toBe(3);
    expect(c2.im).toBe(4);
    // c3
    expect(c3.re).toBe(1);
    expect(c3.im).toBe(2);
});

test("div(number)", () => {
    const c1 = new Complex(3, -6);
    const c2 = c1.div(3);
    // c1
    expect(c1.re).toBe(3);
    expect(c1.im).toBe(-6);
    // c2
    expect(c2.re).toBe(1);
    expect(c2.im).toBe(-2);
});

test("divMut(Complex)", () => {
    const c1 = new Complex(-5, 10);
    const c2 = new Complex(3, 4);
    const c3 = c1.divMut(c2);
    expect(c1 === c3).toBe(true);
    // c1
    expect(c1.re).toBe(1);
    expect(c1.im).toBe(2);
    // c2
    expect(c2.re).toBe(3);
    expect(c2.im).toBe(4);
});

test("divMut(number)", () => {
    const c1 = new Complex(3, -6);
    const c2 = c1.divMut(3);
    expect(c1 === c2).toBe(true);
    // c1
    expect(c1.re).toBe(1);
    expect(c1.im).toBe(-2);
});
