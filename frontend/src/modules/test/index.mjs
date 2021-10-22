import Emoji from './emoji/emoji.mjs';
import IsEmpty from './isEmpty/isEmpty.mjs'
import Events from '@newkind/events'
import pushkin from './default/pushkin.index.mjs'
import { assert as Assert } from 'chai';  // Using Assert style
import { expect as Expect } from 'chai';  // Using Expect style
import { should as Should } from 'chai';  // Using Should style

let getData = async (path) => {
    try {
        let data = await fetch(path)
        data = await data.text()
        return data
    } catch (e) {
        return e
    }
}

export default ( path = false ) => {
  return new Promise(async (resolve, reject) =>{
      try {
          let body = (path)
                ? await getData(path)
                : pushkin
          let emoji =  Emoji
          let isEmpty =IsEmpty
          let events = Events
          let assert = Assert
          let expect = Expect
          let should = Should

          eval(body)
          resolve({
              success: true,
              status: "true",
              message: ''
          })
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
