function doAfter(seconds) {
    let timeForSetTimeout = seconds * 1000
    let promise = new Promise((res, rej)=>{
        setTimeout(()=>{
            res()
        }, timeForSetTimeout)
    })
    return promise
}