basic.forever(function () {
    if (input.acceleration(Dimension.X) >= -5 && input.acceleration(Dimension.X) <= 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (input.acceleration(Dimension.X) <= 500 && input.acceleration(Dimension.X) > 5) {
        basic.showLeds(`
            . . # . .
            . . . # .
            . # # # #
            . . . # .
            . . # . .
            `)
    } else if (input.acceleration(Dimension.X) <= 1023 && input.acceleration(Dimension.X) > 500) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (input.acceleration(Dimension.X) <= -5 && input.acceleration(Dimension.X) > -500) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # .
            . # . . .
            . . # . .
            `)
    } else if (input.acceleration(Dimension.X) <= -500 && input.acceleration(Dimension.X) >= -1023) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
