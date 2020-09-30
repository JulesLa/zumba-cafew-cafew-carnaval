function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    ennemies.forEach(ennemy => {
        const rand = Math.floor(Math.random()*4)

        if (rand === 1)
            ennemy.turnLeft(rotateAngle * 2);
        if (rand === 2)
            ennemy.turnRight(rotateAngle * 2);
        if (rand === 3)
            ennemy.accelerate(moveDistance);
        if (rand === 4)
            ennemy.decelerate(moveDistance);
        ennemy.move()
    })

    player1.move();
    controls.update();
}