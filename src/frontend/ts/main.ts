class Main implements EventListenerObject{
    private framework: Framework = new Framework();

    getDevices() {
        this.framework.executeRequest("GET", "http://localhost:8000/devices");
    }

    handleEvent(object: Event): void {
        let eventObject: HTMLElement;
        eventObject = <HTMLElement>object.target;
        if (eventObject.id == "btnGreet") {
            this.getDevices();
        }
        // Add else if for all the other buttons
    }
}

window.addEventListener("load", () => {
    let main: Main = new Main();
    let btnGreet = document.getElementById("btnGreet");
    btnGreet.addEventListener("click", main);
});
