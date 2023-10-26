let Time = 1000
while (input.runningTime() < 8000) {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . . #
        `)
    basic.pause(Time)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . # .
        `)
    basic.pause(Time)
    if (input.runningTime() >= 5000) {
        Time = 0
    }
}
