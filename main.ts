function 間隔 () {
    if (input.runningTime() >= 8000) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.pause(Time)
}
let Time = 0
Time = 1000
while (input.runningTime() < 10000) {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . . #
        `)
    間隔()
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . # .
        `)
    間隔()
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        # . . # .
        `)
    間隔()
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . # .
        `)
    間隔()
    if (input.runningTime() >= 5000) {
        Time = 0
    }
}
basic.showLeds(`
    . . # . .
    # # # # #
    # . # . #
    . # . # .
    . # . # .
    `)
