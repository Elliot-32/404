Time = 1000
while input.running_time() < 8000:
    basic.show_leds("""
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . . #
        """)
    basic.pause(Time)
    basic.show_leds("""
        . . # . .
        . # # . .
        # . # . #
        . # . # .
        . # . # .
        """)
    basic.pause(Time)
    if input.running_time() >= 5000:
        Time = 0