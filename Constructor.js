class RailwayForm{

    constructor(givenname, trainno){
        console.log("Constructor called....." + givenname + " " + trainno)
        this.name=givenname
        this.trainno =trainno 
    }

    submit() {
        alert(this.name + " Your form is submitted for train number " + this.trainno)
    }
    cancel(){
        alert(this.name + " Your form is cancelled for train number " + this.trainno)
    }
   
}

// create & fill a form for harry
let harryForm = new RailwayForm("Harry", 12207)


// create & fill a form for rohan
let rohanForm1 = new RailwayForm("Rohan", 22340)
let rohanForm2 = new RailwayForm("Rohan", 12345)


harryForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()