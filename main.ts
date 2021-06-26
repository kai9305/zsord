namespace SpriteKind {
    export const FR = SpriteKind.create()
    export const FR2 = SpriteKind.create()
    export const TY = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    tiles.setTilemap(tilemap`層級5`)
    殭屍 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 e 7 . . . . . . . 
        . . . . . 7 e e e 7 . . . . . . 
        . . . . 7 e e e e e 7 . . . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . 7 9 b f . 2 b 8 7 . . . . 
        . . . . 7 . . c c . 7 . . . . . 
        . . . . 8 7 9 7 7 8 7 . . . . . 
        . . . . . c c c c 2 . . . . . . 
        . . . . . 2 c 2 c c b f b 2 . . 
        . . . . . c c 2 2 c . . . . . . 
        . . . . . c 2 c c 2 e 2 e f . . 
        . . . . . 2 c c 2 c . . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        `, SpriteKind.FR)
    殭屍2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . 7 2 f 2 2 2 7 . . . . . 
        . . . . 7 f f 2 1 2 7 . . . . . 
        . . . . 7 2 f 2 f 2 7 . . . . . 
        . . . . 7 a a f 2 f 7 . . . . . 
        . . . . 7 a 2 2 2 a 7 . . . . . 
        . . . . . 7 7 f 7 2 . . . . . . 
        . . . . . 2 7 7 7 7 7 7 7 f . . 
        . . . . . 7 2 2 7 2 . . . . . . 
        . . . . . 2 2 7 2 7 7 7 7 2 . . 
        . . . . . 7 2 2 7 7 . . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        `, SpriteKind.FR2)
    殭屍2.setVelocity(50, 50)
    殭屍.setVelocity(50, 50)
    殭屍2.setBounceOnWall(true)
    殭屍.setBounceOnWall(true)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedWest, function (sprite, location) {
    _55 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f 6 f 7 f 7 . . . . . . . 
        . . . 7 f f 6 f f . . . . . . . 
        . . . f 7 f 7 6 f 6 7 f . . . . 
        . . . 6 f 6 f 7 f . . . . . . . 
        . . . e e e e e . . . . . . . . 
        . . e e e e e f . . . . . . . . 
        . . e e e e e e . . . . . . . . 
        . . . e e e 4 4 . . . . . . . . 
        . . . f f 6 7 f . . . f c . . . 
        . . . 7 f f f 7 e e f c 1 f f 2 
        . . . f 7 6 7 f . . f 1 f . . . 
        . . . 7 6 f 6 7 . . c c . . . . 
        . . . . e . e . . . f f . . . . 
        . . . . e . e . . . . . . . . . 
        `, SpriteKind.TY)
    _55.setPosition(122, 38)
    tiles.setTilemap(tilemap`層級6`)
    殭屍 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 e 7 . . . . . . . 
        . . . . . 7 e e e 7 . . . . . . 
        . . . . 7 e e e e e 7 . . . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . 7 9 b f . 2 b 8 7 . . . . 
        . . . . 7 . . c c . 7 . . . . . 
        . . . . 8 7 9 7 7 8 7 . . . . . 
        . . . . . c c c c 2 . . . . . . 
        . . . . . 2 c 2 c c b f b 2 . . 
        . . . . . c c 2 2 c . . . . . . 
        . . . . . c 2 c c 2 e 2 e f . . 
        . . . . . 2 c c 2 c . . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        `, SpriteKind.FR)
    殭屍2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . 7 2 f 2 2 2 7 . . . . . 
        . . . . 7 f f 2 1 2 7 . . . . . 
        . . . . 7 2 f 2 f 2 7 . . . . . 
        . . . . 7 a a f 2 f 7 . . . . . 
        . . . . 7 a 2 2 2 a 7 . . . . . 
        . . . . . 7 7 f 7 2 . . . . . . 
        . . . . . 2 7 7 7 7 7 7 7 f . . 
        . . . . . 7 2 2 7 2 . . . . . . 
        . . . . . 2 2 7 2 7 7 7 7 2 . . 
        . . . . . 7 2 2 7 7 . . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        `, SpriteKind.FR2)
    殭屍2.setVelocity(50, 50)
    殭屍.setVelocity(50, 50)
    殭屍.setBounceOnWall(true)
    殭屍2.setBounceOnWall(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TY, function (sprite, otherSprite) {
    game.setDialogTextColor(4)
    game.splash("恭喜過關")
    game.over(true, effects.bubbles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FR, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FR2, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    tiles.setTilemap(tilemap`層級3`)
    projectile = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e 8 e 8 e . . . . . . . 
        . . . . 8 e 8 e 8 . . . . . . . 
        . . 8 8 8 8 8 8 8 8 8 . . . . . 
        . . . . d d d d d . . . 2 . . . 
        . . . d d f d f d d . 2 2 2 . . 
        . . . d d d 3 d d d . 2 2 2 . . 
        . . . . d 2 2 2 d . . . 4 . . . 
        . . d . f f f f f . . . 4 . . . 
        . . d d f f f f f d d d 4 . . . 
        . . . . f f f f f . . . 4 . . . 
        . . . . f f f f f . . . 4 . . . 
        . . . . . d . d . . . . 4 . . . 
        . . . . . d . d . . . . . . . . 
        `, SpriteKind.Food)
    projectile.follow(myEnemy)
    殭屍 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 e 7 . . . . . . . 
        . . . . . 7 e e e 7 . . . . . . 
        . . . . 7 e e e e e 7 . . . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . 7 9 b f . 2 b 8 7 . . . . 
        . . . . 7 . . c c . 7 . . . . . 
        . . . . 8 7 9 7 7 8 7 . . . . . 
        . . . . . c c c c 2 . . . . . . 
        . . . . . 2 c 2 c c b f b 2 . . 
        . . . . . c c 2 2 c . . . . . . 
        . . . . . c 2 c c 2 e 2 e f . . 
        . . . . . 2 c c 2 c . . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        `, SpriteKind.FR)
    殭屍2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . 7 2 f 2 2 2 7 . . . . . 
        . . . . 7 f f 2 1 2 7 . . . . . 
        . . . . 7 2 f 2 f 2 7 . . . . . 
        . . . . 7 a a f 2 f 7 . . . . . 
        . . . . 7 a 2 2 2 a 7 . . . . . 
        . . . . . 7 7 f 7 2 . . . . . . 
        . . . . . 2 7 7 7 7 7 7 7 f . . 
        . . . . . 7 2 2 7 2 . . . . . . 
        . . . . . 2 2 7 2 7 7 7 7 2 . . 
        . . . . . 7 2 2 7 7 . . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        `, SpriteKind.FR2)
    殭屍2.setVelocity(50, 50)
    殭屍.setVelocity(50, 50)
    殭屍2.setBounceOnWall(true)
    殭屍.setBounceOnWall(true)
})
let projectile: Sprite = null
let 殭屍2: Sprite = null
let 殭屍: Sprite = null
let myEnemy: Sprite = null
let _55: Sprite = null
game.splash("", "暗屍尋明:ZSORD")
info.startCountdown(90)
info.setLife(3)
tiles.setTilemap(tilemap`層級1`)
myEnemy = sprites.create(img`
    . . . . . . . f . . . . . . . . 
    . . . . f . . f . . f . . . . . 
    . . . . f . . f . . f . . . . . 
    . . . . f . . f . . f . . . . . 
    . . . e e e e e e e e e . . . . 
    . . . e e e f e f e e e . . . . 
    . . . e e e e 4 e e e e . . . . 
    . . . . f e e e e e f . . . . . 
    . . . . . f e f e f . . . . . . 
    . . . . f d c d c d f . . 4 . . 
    . 4 4 4 f c d c d c f 4 4 4 . . 
    . 4 . . f c d c d c f . . . . . 
    . . . . f c d c d c f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . 4 . 4 . . . . . . . 
    . . . . . 4 4 . 4 4 . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(myEnemy, 100, 100)
scene.cameraFollowSprite(myEnemy)
殭屍 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . 7 e 7 . . . . . . . 
    . . . . . 7 e e e 7 . . . . . . 
    . . . . 7 e e e e e 7 . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . 7 9 b f . 2 b 8 7 . . . . 
    . . . . 7 . . c c . 7 . . . . . 
    . . . . 8 7 9 7 7 8 7 . . . . . 
    . . . . . c c c c 2 . . . . . . 
    . . . . . 2 c 2 c c b f b 2 . . 
    . . . . . c c 2 2 c . . . . . . 
    . . . . . c 2 c c 2 e 2 e f . . 
    . . . . . 2 c c 2 c . . . . . . 
    . . . . . . 7 . 7 . . . . . . . 
    `, SpriteKind.FR)
殭屍2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . 7 2 f 2 2 2 7 . . . . . 
    . . . . 7 f f 2 1 2 7 . . . . . 
    . . . . 7 2 f 2 f 2 7 . . . . . 
    . . . . 7 a a f 2 f 7 . . . . . 
    . . . . 7 a 2 2 2 a 7 . . . . . 
    . . . . . 7 7 f 7 2 . . . . . . 
    . . . . . 2 7 7 7 7 7 7 7 f . . 
    . . . . . 7 2 2 7 2 . . . . . . 
    . . . . . 2 2 7 2 7 7 7 7 2 . . 
    . . . . . 7 2 2 7 7 . . . . . . 
    . . . . . . 7 . 7 . . . . . . . 
    . . . . . . 7 . 7 . . . . . . . 
    . . . . . . 7 . 7 . . . . . . . 
    `, SpriteKind.FR2)
殭屍.setPosition(159, 111)
殭屍2.setPosition(155, 113)
殭屍2.setVelocity(50, 50)
殭屍.setVelocity(50, 50)
殭屍2.setBounceOnWall(true)
殭屍.setBounceOnWall(true)
