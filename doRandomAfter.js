function doRandomAfter(seconds) {
    let timeForSetTimeout = seconds * 1000
    let promise = new Promise((res, rej)=>{
        setTimeout(()=>{
            return res(Math.random())
        }, timeForSetTimeout)
    })
    return promise
}