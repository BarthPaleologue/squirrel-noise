"use strict";
exports.__esModule = true;
exports.seededSquirrelNoise = exports.squirrelNoise = void 0;
/**
 * Outputs a pseudo-random number between 0 and 1 based on the seed and the step
 * @param seed the seed of the noise
 * @param step the step of the noise
 * @see https://www.youtube.com/watch?v=LWFzPP8ZbdU
 */
function squirrelNoise(seed, step) {
    var BIT_NOISE1 = 0x68E31DA4;
    var BIT_NOISE2 = 0xB5297A4D;
    var BIT_NOISE3 = 0x1B56C4E9;
    var mangled_bits = step;
    mangled_bits *= BIT_NOISE1;
    mangled_bits += seed;
    mangled_bits ^= mangled_bits >> 8;
    mangled_bits += BIT_NOISE2;
    mangled_bits ^= mangled_bits << 8;
    mangled_bits *= BIT_NOISE3;
    mangled_bits ^= mangled_bits >> 8;
    return mangled_bits / (Math.pow(2, 31) - 1);
}
exports.squirrelNoise = squirrelNoise;
/**
 * Creates a seeded random number generator with the given seed
 * @param seed the seed of the noise
 */
function seededSquirrelNoise(seed) {
    return function (step) { return squirrelNoise(seed, step); };
}
exports.seededSquirrelNoise = seededSquirrelNoise;
