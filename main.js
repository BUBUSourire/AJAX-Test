btn.addEventListener('click', (e) => {
    //第一步：使用XMLHttpRequest发请求
    let request = new XMLHttpRequest()
    //配置request，初始化一个请求
    request.open('GET', '/xxx')
    // request.open('GET', 'http://jerry.com:8002/xxx')
    //发送请求
    request.send()
    //监听请求的状态
    request.onreadystatechange = () => {
        if (request.readyState === 4) { //,4表示请求响应都完毕
            if (request.status >= 200 && request.status < 300) {
                console.log('请求成功')
                let string=request.responseText
                let object=JSON.parse(string)//把符合JSON语法的字符串转换成JS对应的值
            } else if (request.status >= 400) {
                console.log('请求失败')
            }
        }
    }
    
})