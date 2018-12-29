
document.getElementById('button').addEventListener('click', onGetData);

function onGetData() {
    const xhr = new XMLHttpRequest();

    //open 
    xhr.open('GET', 'data.txt', true);

    //console.log("before ready state changed: ", xhr.readyState);

    xhr.onprogress = () => {
        console.log("loading.....")
    }

    //load
    xhr.onload = () => {
        if (xhr.status === 200) {
            document.getElementById('output').innerHTML = `<h1>${xhr.responseText}</h1>`;
        }
    }


    //old syntax
    // xhr.onreadystatechange = () => {
    //     console.log("ready state changed: ", xhr.readyState);
    //     if (xhr.status === 200 && xhr.readyState === 4) {
    //         console.log(xhr.responseText);
    //     }
    // }

    //readyState
    //0 = request not initialized
    //1 = server connection established
    //2 = request received
    //3 = processing request
    //4 = request finished and response is ready

    //any error
    xhr.onerror = () => {
        console.log("Error.....")
    }

    //send
    xhr.send();

}