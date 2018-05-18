var Mock = require('mockjs')

/**
 * 登录
 */
Mock.mock('login', 'post', (req) => {
    var param = JSON.parse(req.body);
    if(param.username === param.password){
        return {
            'result': '0',
            'data': {
                token: '1234567890',
                username: 'lan505',
                name: '陈铭'
            },
            'message': ''
        }
    }else{
        return {
            'result': '-1',
            'data': {
            },
            'message': '账号或密码错误'
        }
    }
})

/**
 * 菜单列表
 */
Mock.mock('menu', 'post', (req) => {
    var param = JSON.parse(req.body);
    if(param.username === param.password){
        return {
            'result': '0',
            'data': {
                token: '1234567890',
                username: '陈铭'
            },
            'message': ''
        }
    }else{
        return {
            'result': '-1',
            'data': {
            },
            'message': '账号或密码错误'
        }
    }
})