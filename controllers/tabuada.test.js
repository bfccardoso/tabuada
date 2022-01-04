const tabuadaController = require('./tabuada')
const sinon = require('sinon')
const req = require('express/lib/request')

describe('tabuada controller', () => {
    it('list', () => {
        const numeros = []
        for(let i=1; i<100; i++){
            numeros.push(i)
        }
        let res = {
            render: function(){}
        }

        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('tabuada/list', {numeros})
        tabuadaController.list({}, res)
    })
    it('calculates the tabuate', () => {
        const tabuadas = []
        const num = 10
        for(let i=1; i<100; i++){
            tabuadas.push({
                i,
                resultado: num*i
            })
        }
        let res = {
            render: function(){}
        }
        
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('tabuada/tabuada', {
            num,
            tabuadas
        })
        tabuadaController.tabuada({params: {num}}, res)
    })
})