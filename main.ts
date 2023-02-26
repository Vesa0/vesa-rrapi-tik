input.onButtonPressed(Button.A, function () {
    levizjet = 0
    basic.showNumber(levizjet)
})
input.onGesture(Gesture.Shake, function () {
    levizjet += 1
    basic.showNumber(levizjet)
})
let levizjet = 0
levizjet = 0
basic.showNumber(levizjet)
