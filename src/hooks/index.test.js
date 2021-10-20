const index = require("./index")
// @ponicode
describe("index.useTasks", () => {
    test("0", () => {
        let callFunction = () => {
            index.useTasks("INBOX")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.useTasks(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.useTasks("4.0.0-beta1\t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.useTasks("NEXT_7")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.useTasks(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.useTasks(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.useProjects", () => {
    test("0", () => {
        let callFunction = () => {
            index.useProjects()
        }
    
        expect(callFunction).not.toThrow()
    })
})
