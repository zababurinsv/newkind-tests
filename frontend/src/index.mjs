import test from './modules/test/index.mjs'
import Mocha from './modules/mocha/mocha.min.js'
import eruda from './modules/eruda/eruda.js'
import css from './modules/mocha/mocha.min.css.mjs'
import erudaDom from 'eruda-dom'
let mochaHtml =`<div id="tests" style="position: relative"><ul id="mocha"></ul></div><style>${css}</style>`;

export let tests = async ( path = false, devTool = true ) => {
    try {
        if(devTool) {
            eruda.init()
            eruda.add(erudaDom);
        }
        Mocha.setup('bdd');
        (path)
            ? await test(path)
            : await test()
        document.body.insertAdjacentHTML('beforeend', mochaHtml)
        Mocha.run()
    } catch (e) {
        return {
            success: false,
            status: "false",
            message: e
        }
    }
}

export let devTool = async () => {
    try {
        eruda.init()
        eruda.add(erudaDom);
        return {
            success: true,
            status: "true",
            message: ''
        }
    } catch (e) {
        return {
            success: false,
            status: "false",
            message: e
        }
    }
}

export let list = async (
    url = (location.hostname === "localhost")
    ? 'http://localhost:6542/tests/list.json'
    : 'https://zababurinsv.github.io/tests/list.json') => {

    try {
        let tests = await fetch(url)
        return tests.json()
    } catch (e) {
        return {
            success: false,
            status: "false",
            message: e
        }
    }
}

export default {
    "name": "z-events",
    "version": "1.0.0",
    "manifest_version": "1.0.0",
    "device": "desktop",
    "description": "init module",
    "main": "/",
    "author": "Zababurin Sergey",
    "license": "GPL-3.0-only",
    "scripts": {
        "devTool": devTool,
        "tests": tests,
        "Mocha": Mocha,
        "css":css
    },
}
