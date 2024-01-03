class RailwayForm{

    constructor(givenname, trainno, address){
        console.log("Constructor called....." + givenname + " " + trainno)
        this.name=givenname
        this.trainno =trainno 
        this.address=address
    }

    preview() {
        alert(this.name + " Your form is for train number " + this.trainno + " and your address is " + this.address)
    }

    submit(){
    alert(this.name + " Your form is submitted for train number " + this.trainno)
    }

    cancel(){
        alert(this.name + " Your form is cancelled for train number " + this.trainno)
        this.trainno=0
    }
}

let harryForm = new RailwayForm("Harry", 12207, "Lucknow")
harryForm.preview()
harryForm.submit()
harryForm.cancel()
harryForm.preview()

let rohanForm = new RailwayForm("Rohan", 12345, "Noida")
rohanForm.submit()
