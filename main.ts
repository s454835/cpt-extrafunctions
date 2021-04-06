input.onButtonPressed(Button.A, function () {
    basic.showString("Created by: Tim")
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 6))
})
