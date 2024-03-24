# eslint-sort-repro

- reproduces https://github.com/mskelton/eslint-plugin-sort/issues/62

Simple repo to reproduce an eslint sorting error.

## Description

- When running `npm run lint` relative path imports of two levels `../../` are not sorted correctly.
However, single layer `../` and three layer `../../../` relative path imports seem to be sorted correctly.
- Also, it appears that the two level sorting issue is only present one directory below `./src`. E.g. [`./src/__mocks__/handler.mjs`](./src/__mocks__/handler.mjs)
contains both two layer and three layer, but is sorted correctly with no complaints from eslint.
- It does not seem to be related to alias paths either, as can be seen in comparing 
[`./src/__mocks__/handler.mjs`](./src/__mocks__/handler.mjs) and [`./src/__mocks__/other-handler.mjs`](./src/__mocks__/other-handler.mjs)

## Steps to reproduce

1. Clone this repo
2. Run `npm install`
3. Run `npm run lint`
4. See error in 
   - [`./src/__mocks__/handler.mjs`](./src/__mocks__/handler.mjs)
   - [`./src/__mocks__/other-handler.mjs`](./src/__mocks__/other-handler.mjs)
   - [`./src/utils/routing.mjs`](./src/utils/routing.mjs)

## Environment details

- node: `v20.11.1`
- npm: `10.2.4`