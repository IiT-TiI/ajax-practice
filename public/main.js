loadcss.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('get','style.css');
    request.onload= ()=>{
        console.log('succeed')
        const style=document.createElement('style')
        style.innerHTML=request.response
        document.head.appendChild(style)
    } 
    request.onfali= ()=>{
        console.log('failed')
    } 
    request.send()
}

loadjs.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('get','2.js');
    request.onload= ()=>{
        console.log('succeed')
        const script=document.createElement('script')
        script.innerHTML=request.response
        document.head.appendChild(script)
    } 
    request.onfali= ()=>{
        console.log('failed')
    } 
    request.send()
}

loadhtml.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('get','3.html');
    request.onload= ()=>{
        console.log('succeed')
        const div=document.createElement('div')
        div.innerHTML=request.response
        document.body.appendChild(div)
    } 
    request.onfali= ()=>{
        console.log('failed')
    } 
    request.send()
}

loadxml.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('get','4.xml');
    request.onload= ()=>{
        console.log('succeed')
        const dom=request.responseXML
        const text=dom.getElementsByTagName('warning')[0].textContent.trim()
        alert('xml内容为：'+text);
    } 
    request.onfali= ()=>{
        console.log('failed')
    } 
    request.send()
}

loadjson.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('get','5.json');
    request.onload= ()=>{
        console.log('succeed')
        const json=request.response
        console.log(json)
        alert(json)
    } 
    request.onfali= ()=>{
        console.log('failed')
    } 
    request.send()
}


