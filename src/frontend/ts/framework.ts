class Framework{
    public executeRequest(method: string, url: string, data?: any) {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState == 4) {
                if (xmlHttp.status == 200) {
                    let devicesList: Array<Device> = JSON.parse(xmlHttp.responseText);
                    let devicesBox = document.getElementById("devicesBox");
                    devicesBox.innerHTML = `<h4>Devices to show" ${devicesList.length}:</h4>`;
                    for (let device of devicesList) {
                        devicesBox.innerHTML +=  `<h5>${device.id}  -  ${device.name}</h5>`;
                    }
                } else {
                    alert("Request error");
                }
            }
        }
        xmlHttp.open(method, url, true);
        if (data != undefined) {
        xmlHttp.setRequestHeader("Content-Type", "application/json");
            xmlHttp.send(JSON.stringify(data));
        } else {
            xmlHttp.send();
        }
    }
}
