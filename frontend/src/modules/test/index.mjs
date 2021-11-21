import Emoji from './emoji/emoji.mjs';
import IsEmpty from './isEmpty/isEmpty.mjs'
import Events from '@newkind/events'
import pushkin from './default/pushkin.index.mjs'
import { assert as Assert } from 'chai';  // Using Assert style
import { expect as Expect } from 'chai';  // Using Expect style
import { should as Should } from 'chai';  // Using Should style

let getData = (path) => {
    return new  Promise( resolve => {
        try {
            fetch(path).then(data => {
                data.text().then(data => {
                    resolve(data)
                }).catch(e => {resolve({status: false, error: e})})
            }).catch(e => {resolve({status: false, error: e})})
        } catch (e) {
            resolve({status: false, error: e})
        }
    })
}

export default ( path = false ) => {
  return new Promise(async resolve => {
      try {
          let emoji =  Emoji
          let isEmpty =IsEmpty
          let events = Events
          let assert = Assert
          let expect = Expect
          let should = Should
          if(path) {
              getData(path).then(body => {
                  eval(body)
                  resolve({
                      success: true,
                      status: "true",
                      message: ''
                  })
              }).catch(e => resolve(e))
          } else {
              eval(pushkin)
              resolve({
                  success: true,
                  status: "true",
                  message: ''
              })
          }
      } catch (e) {
          console.error(e)
          resolve({
              success: false,
              status: "not ok",
              message: e
          })
      }
  })
}
