import pkg from '../../package.json'
import test from './modules/test/index.mjs'
import Mocha from './modules/mocha/mocha.min.js'
import eruda from './modules/eruda/eruda.js'
import css from './modules/mocha/mocha.min.css.mjs'
import erudaDom from 'eruda-dom'
let mochaHtml =`<div id="tests" style="position: relative"><ul id="mocha"></ul></div><style>${css}</style>`;

export let tests = ( path = false, custom = false) => {
    return new Promise(async (resolve, reject) => {
        try {
            let url = (location.hostname === "localhost")
                ? `http://localhost:6542/tests${path}`
                : `https://zababurinsv.github.io/tests${path}`

            console.log('Mocha', Mocha)
            Mocha.setup('bdd');

            (path)
                ? await test((custom) ? path: url)
                : await test()
            document.body.insertAdjacentHTML('beforeend', mochaHtml)
            Mocha.checkLeaks();
            Mocha.run()
            resolve(true)
        } catch (e) {
            reject({
                success: false,
                status: "false",
                message: e
            })
        }

    })
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

export let list = (
    url = (location.hostname === "localhost")
    ? 'http://localhost:6542/tests/list.json'
    : 'https://zababurinsv.github.io/tests/list.json') => {
    return new  Promise((resolve, reject) => {
        try {
            fetch(url).then(data => {
                data.text().then(data => {
                    resolve(JSON.parse(data))
                }).catch(e => {resolve({status: false, error: e})})
            }).catch(e => {resolve({status: false, error: e})})
        } catch (e) {
            resolve({
                success: false,
                status: "false",
                message: e
            })
        }
        
    })
}

export default pkg
