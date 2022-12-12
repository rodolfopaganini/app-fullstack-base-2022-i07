class Framework{
    public executeRequest(method: string, url: string, responseHandler: HandleResponse, data?: any) {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState == 4) {
                if (xmlHttp.status == 200) {
                    let devicesList: Array<Device> = JSON.parse(xmlHttp.responseText);
                    responseHandler.loadGrid(devicesList);
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
