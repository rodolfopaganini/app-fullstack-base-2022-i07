class Main implements EventListenerObject, HandleResponse{
    private framework: Framework = new Framework();

    getDevices() {
        this.framework.executeRequest("GET", "http://localhost:8000/devices", this);
    }

    handleEvent(object: Event): void {
        let eventObject: HTMLElement;
        eventObject = <HTMLElement>object.target;
        if (eventObject.id == "btnGreet") {
            this.getDevices();
        }
        // Add else if for all the other buttons
    }

    loadGrid(devicesList: Array<Device>) {
        console.log("Info arrived from server", devicesList);    
        let devicesBox = document.getElementById("devicesBox");
        let grid:string = "<ul class='collection'>";
        for (let device of devicesList) {
            grid += ` <li class="collection-item avatar">`;

            if (device.type == 1) {
                grid+=`<img src="static/images/light_bulb.png" alt="" class="circle"> `
            } else if (device.type == 2){
                grid+=`<img src="static/images/voice_command.png" alt="" class="circle"> `
            } else if (device.type == 3){
                grid+=`<img src="static/images/music.png" alt="" class="circle"> `
            } else if (device.type == 4){
                grid+=`<img src="static/images/air_conditioner.png" alt="" class="circle"> `
            } else {
                grid+=`<img src="static/images/alarm.png" alt="" class="circle"> `
            }

            grid += ` <span class="title negrita">${device.name}</span>
            <p>${device.description}
            </p>
            <a href="#!" class="secondary-content">
              <div class="switch">
                  <label>
                    Off`;
            if (device.state) {
                grid += `<input id="cb_${device.id}" type="checkbox" checked>`;    
            } else {
                grid += `<input id="cb_${device.id}" type="checkbox">`;    
            }

            grid +=`<span class="lever"></span>
                    On
                  </label>
                </div>
          </a>
          </li>`;
        }
        grid += "</ul>"

        devicesBox.innerHTML = grid;

        for (let device of devicesList) {
            let cb = document.getElementById("cb_" + device.id);
            cb.addEventListener("click", this);
        }
    }
}

window.addEventListener("load", () => {
    let main: Main = new Main();
    let btnGreet = document.getElementById("btnGreet");
    btnGreet.addEventListener("click", main);
});
