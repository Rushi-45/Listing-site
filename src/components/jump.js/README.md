# Installation
> `npm install --save @types/jump.js`

# Summary
This package contains type definitions for jump.js (https://github.com/callmecavs/jump.js).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jump.js.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jump.js/index.d.ts)
````ts
// Type definitions for jump.js 1.0
// Project: https://github.com/callmecavs/jump.js
// Definitions by: rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = jump;

declare function jump(target: string | Element | number, opts?: jump.Options): void;

declare namespace jump {
    type TransitionFunc = (t: number, b: number, c: number, d: number) => number;
    interface Options {
        duration?: number | ((distance: number) => number) | undefined;
        offset?: number | undefined;
        callback?(): void;
        easing?: TransitionFunc | undefined;
        a11y?: boolean | undefined;
    }
}

````

### Additional Details
 * Last updated: Thu, 08 Jul 2021 16:23:02 GMT
 * Dependencies: none
 * Global values: none

# Credits
These definitions were written by [rhysd](https://rhysd.github.io).
