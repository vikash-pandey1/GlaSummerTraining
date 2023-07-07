let step1 = function () {
    return new Promise(function (resolve, reject) {
        console.log("wait image are going to select");
        setTimeout(function () {
            resolve('photo selected ')
        }, 3000)
    })
}


let step2 = function (photo) {
    return new Promise(function (resolve, reject) {
        console.log('adding filter to ${photo}')
        setTimeout(function () {
            resolve("filter applied on the photo")
        }, 4000)
    })
}

let step3 = function (filte) {
    return new Promise(function (resolve, reject) {
        console.log('wait to added caption');
        setTimeout(function () {
            resolve("caption are added")
        }, 4000)
    })
}

let step4 = function (caption) {
    return new Promise(function (resolve, reject) {
        console.log("wait to uploading");
        setTimeout(function () {
            resolve("photo  uploaded successfully....")
        }, 6000)
    })
}
step1().then(function (photo) {
    console.log(photo);
    return step2(photo)
})
    .then(function (filter) {
        console.log(filter)
        return step3(filter)
    })
    .then(function (caption) {
        console.log(caption)
        return step4(caption)
    })
    .then(function (final) {
        console.log(final)
    })