# eslint-sort-repro

Simple repo to reproduce an eslint sorting error.

From testing it appears that it's only happening in the `__mocks__` directory of the broken branch, but when 
simplifying the example in another branch, the error does not occur. 

## Branches

- `adam.bannach/with-improper-sorting` - Reproduces the error.
- `adam.bannach/with-proper-sorting` - Does not reproduce the error.