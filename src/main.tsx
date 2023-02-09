import React from "react";
import ReactDOM from "react-dom/client";
import Sketch from "react-p5";
import p5Types from "p5";

import Complex from "./Complex";

type Pixel = {
    lastFrame: number | undefined;
    z: Complex;
};

interface ComponentProps {
    canvasSize: number;
}

const MySketch = ({ canvasSize }: ComponentProps) => {
    const pixels: Pixel[][] = [];
    const answers: Complex[] = [];

    const next = (z: Complex): Complex => {
        // z^3 - 1 = 0
        // z_{n+1} = z_n - (z_n^3 - 1) / 3z_n^2 = 2/3 z_n + 1/3z_n^2
        const lhs = z.mul(2 / 3);
        const rhs = Complex.fromNumber(1 / 3).divMut(z.mul(z));
        return lhs.add(rhs);
    };

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(canvasSize, canvasSize).parent(canvasParentRef);
        p5.noStroke();
        p5.colorMode(p5.HSB, 255);
        p5.frameRate(2);
        const center = canvasSize / 2;
        for (var y = 0; y < canvasSize; ++y) {
            const row: Pixel[] = [];
            for (var x = 0; x < canvasSize; ++x) {
                const re = (x - center) / center;
                const im = (y - center) / center;
                const p = {
                    lastFrame: undefined,
                    z: new Complex(re, im),
                };
                row.push(p);
            }
            pixels.push(row);
        }
        answers.push(new Complex(1, 0));
        answers.push(new Complex(-1 / 2, p5.sqrt(3) / 2));
        answers.push(new Complex(-1 / 2, -p5.sqrt(3) / 2));
    };

    const draw = (p5: p5Types) => {
        p5.colorMode(p5.HSB);
        p5.background(0);
        p5.loadPixels();
        for (var y = 0; y < canvasSize; ++y) {
            for (var x = 0; x < canvasSize; ++x) {
                const pixel = pixels[y][x];
                if (typeof pixel.lastFrame === "number") {
                    const b = 255 * (1 - pixel.lastFrame / p5.frameCount);
                    var ansI = 0;
                    const calcDistSq = (index: number): number => pixel.z.distSq(answers[index]);
                    for (var i = 0; i < answers.length; ++i) {
                        if (calcDistSq(i) < calcDistSq(ansI)) {
                            ansI = i;
                        }
                    }
                    const h = 255 * (ansI / answers.length);
                    if (x === 300 && y === 300) {
                        console.log(h);
                    }
                    p5.set(x, y, p5.color(h, 255, b));
                    continue;
                }
                pixel.z = next(pixel.z);
                for (var i = 0; i < answers.length; ++i) {
                    if (pixel.z.distSq(answers[i]) === 0) {
                        pixel.lastFrame = p5.frameCount;
                        break;
                    }
                }
                p5.set(x, y, 0);
            }
        }
        p5.updatePixels();
    };

    return <Sketch setup={setup} draw={draw} />;
};

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
        <React.StrictMode>
            <MySketch canvasSize={720} />
        </React.StrictMode>
    );
});
