# squirrel-noise

`squirrel-noise` is a typescript implementation of Squirrel Eiserloh's noise based RNG explained at GDC (<a href="https://www.youtube.com/watch?v=LWFzPP8ZbdU">Link</a>).

## Installation

Just use `npm i squirrel-noise` to install the package in your project

## Usage

To use squirrel noise, you can do the following :

```ts 
import { squirrelNoise, seededSquirrelNoise } from "squirrel-noise";

let randomValue = squirrelNoise(seed: number, step: number);

let rng = seededSquirrelNoise(seed: number);
let randomValue2 = rng(step: number);
```