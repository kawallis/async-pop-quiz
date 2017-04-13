function timer (cb) {
    
    setTimeout(() => {
        cb();
    }, 5000);
}
    

module.exports = timer;