const information = document.getElementById('info')
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`

const render = (text)=>{
    const information = document.getElementById('parentToSon')
    information.innerText = `主进程发来消息：${text}`
}
const func = async () => {
    const response = await window.versions.ping()
    
    render(response) // 打印 'pong'
  }
  
  func()