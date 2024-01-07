input.onButtonPressed(Button.A, function () {
    timeStarted = true
    running = true
    startTime = input.runningTime()
    isWorkTime = true
})
input.onButtonPressed(Button.B, function () {
    running = false
})
let isWorkTime = false
let startTime = 0
let running = false
let timeStarted = false
timeStarted = false
basic.forever(function () {
    if ((running && timeStarted) == true) {
        if (isWorkTime && input.runningTime() - startTime >= 10000) {
            music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
            startTime = input.runningTime()
            isWorkTime = false
        }
        if (isWorkTime == false && input.runningTime() - startTime >= 5000) {
            music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
            startTime = input.runningTime()
            isWorkTime = true
        }
    }
    basic.pause(100)
})
