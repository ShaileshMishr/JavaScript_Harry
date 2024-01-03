class RailwayForm{
    submit() {
        alert(this.name + " Your form is submitted for train number " + this.trainno)
    }
    cancel(){
        alert(this.name + " Your form is cancelled for train number " + this.trainno)
    }
    fill(givenname, trainno) {
        this.name=givenname
        this.trainno =trainno 
    }
}

// create a form for harry
let harryForm = new RailwayForm()
// fill the form with Harry's detail
harryForm.fill("Harry", 12207)

// create a forms for rohan
let rohanForm1 = new RailwayForm()
let rohanForm2 = new RailwayForm()
// fill the forms with Rohan's detail
rohanForm1.fill("Rohan", 22800)
rohanForm2.fill("Rohan", 13450)

harryForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()