import { init, cleanup } from "../../app.init"
import * as fetch from 'node-fetch'
let routeUrl = "http://localhost:3000/"

beforeEach(() => init())
afterEach(() => cleanup())

describe('Check Endpoint', () => {
    test('Should get default response', async () => {
        let response = await fetch(routeUrl)
        const property = await response.json()
        
        expect(property)
            .toEqual({ message : "Index Page" })
    })
})

