import { ABC } from './test'// import from test.js module that we created ourselves, we have to import this module inside index.js because it is our entry point or our main file

import '../styles/index.scss'

const myFunction = () => {
    console.log('This is my Function!')
    console.log('Build after added loaders!');
}
myFunction()

console.log(ABC)


