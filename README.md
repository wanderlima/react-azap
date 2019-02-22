# ⚡ React AZap

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Dependencies](https://img.shields.io/david/wanderlima/react-azap.svg)](https://david-dm.org/wanderlima/react-azap)
[![DevDependencies](https://img.shields.io/david/dev/wanderlima/react-azap.svg)](https://david-dm.org/wanderlima/react-azap?type=dev)

An easy to use React UI lib boilerplate.

## Highlights

 1. **Dev environment** with [Storybook]([Storybook](https://storybook.js.org/))
 2. [Styled Components](https://www.styled-components.com/)
 3. [Plop](https://plopjs.com/) Component generator
 4. [Jest](https://jestjs.io/) + [Enzyme](https://airbnb.io/enzyme/)

## Get Started

```
git clone https://github.com/wanderlima/react-azap my-lib
cd my-lib
rm -rf .git
git init
```

### Development
```
npm i
npm start
```

### Tests
Run tests of your components using:
```
npm test
```

### Component Generator
Use the Plop Component Generator to start a new component [ Class | Functional Stateless | Functional Stateful ].
```
npm run generator
```
A new component will be generated with all required files and an import & export will be added to src/components/index.js.

*ATTENTION:* Update the reference if you delete/rename your component on src/components/index.js.


***
#### License
Copyright (c) 2019 Wander Lima
Licensed under the [MIT license](LICENSE).
***
Project created by [Wander Lima](https://atah.com.br).
