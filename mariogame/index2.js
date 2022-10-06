const platform = '../image/platform.png' //마리오 이미지를 사용하기 위해 
const hills = '../image/hills.png'
const background = '../image/background.jpg'
const platformSmallTall = '../image/platformSmallTall.png'

const spriteRunLeft = '../image/spriteRunLeft.png'
const spriteRunRight = '../image/spriteRunRight.png'
const spriteStandLeft = '../image/spriteStandLeft.png'
const spriteStandRight = '../image/spriteStandRight.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1200
canvas.height = 800

const gravity = 0.5         //중력 상수 값

class Player {              //플레이어 생성 함수
    constructor() {
        this.speed = 10
        this.position = {   //플레이어 생성 위치
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }

        this.width = 66     //플레이어 크기 지정
        this.height = 150

        this.image = createImage(spriteStandRight)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createImage(spriteStandRight),
                left: createImage(spriteStandLeft),
                cropWidth: 177,
                width: 66
            } ,
            run: {
                right: createImage(spriteRunRight),
                left: createImage(spriteRunLeft),
                cropWidth: 341,
                width: 127.875
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 177
    }
    draw() {                //플레이어 그리는 함수
        c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height)
    }
    update() {              //실시간으로 플레이어 및 중력 적용
        this.frames++

        if (this.frames > 59 && (this.currentSprite == this.sprites.stand.right || this.currentSprite == this.sprites.stand.left)) {
            this.frames = 0     //플레이어 왼쪽 프레임 구현
        }
        else if (this.frames > 29 && (this.currentSprite == this.sprites.run.right || this.currentSprite == this.sprites.run.left)) {
            this.frames = 0     //플레이어 오른쪽 프레임 구현
        }

        this.draw()                     //플레이어 실제 위치 그리기 구현
        this.position.x += this.velocity.x 
        this.position.y += this.velocity.y    
        
        if(this.position.y + this.height + this.velocity.y <= canvas.height) {    //중력 구현
            this.velocity.y += gravity      //윈도우 창 밑창까지 오면 중력 0 되게 만드는 작업
        }
        
    }
}

class Platform {
    constructor({x, y, image}) {
        this.position = {   //물체 생성 위치
            x,
            y
        }        
        this.image = image
        this.width = image.width     //물체 크기 지정
        this.height = image.height

    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class GenericObject {
    constructor({x, y, image}) {
        this.position = {   //물체 생성 위치
            x,
            y
        }        
        this.image = image
        this.width = image.width     //물체 크기 지정
        this.height = image.height

    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
                                  
        
    }
}

function createImage(imageSrc) {
    const image = new Image()
    image.src = imageSrc
    return image
}

let platformImage = createImage(platform)
let platformSmallTallImage = createImage(platformSmallTall)
let player = new Player()
let platforms = []
let genericObjects = []
                   
let currentKey
const keys = {                  //왼쪽 오른쪽 키 누르는것을 검사하기
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}
let scrollOffset = 0


function init() {
    platformImage = createImage(platform)
    player = new Player()
    platforms = [      //물체를 여러개 만들기 위해 객체 배열사용
        new Platform({x: platformImage.width * 4 + 300 -2 + platformImage.width - platformSmallTallImage.width ,y: 500, image: platformSmallTallImage}),
        new Platform({x: -1,y: 690, image: platformImage}),
        new Platform({x: platformImage.width - 3,y: 690, image: platformImage}),
        new Platform({x: platformImage.width * 2 + 100,y: 690, image: platformImage}),
        new Platform({x: platformImage.width * 3 + 300,y: 690, image: platformImage}),
        new Platform({x: platformImage.width * 4 + 300 - 2,y: 690, image: platformImage}),
        new Platform({x: platformImage.width * 5 + 900,y: 690, image: platformImage})
    ]  

    genericObjects = [
        new GenericObject({x:0, y:0, image: createImage(background)}),
        new GenericObject({x: createImage(background).width - 3, y:0, image: createImage(background)}),
        new GenericObject({x:0, y:200, image: createImage(hills)}),
        new GenericObject({x: createImage(hills).width * 2 + 200, y:500, image: createImage(hills)}),
        new GenericObject({x: createImage(hills).width * 3 + 400, y:400, image: createImage(hills)})
    ]

    scrollOffset = 0
}

function animate() {                                //플레이어와 중력구현한 것을 애니매이션 효과로 적용 
    requestAnimationFrame(animate)                  //사용하지 않으면 최종값만 표시되서 움직이는 효과가 없음
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    genericObjects.forEach(genericObject => {
        genericObject.draw()
    })
    
    platforms.forEach((platform) => {   
      platform.draw()
    })                                 //물체는 고정이니깐 한번만 그려줌
    player.update()                     //플레이어는 움직이니깐 움직일때마다 새롭게 그려줌    

    if (keys.right.pressed && player.position.x < 400) {                       //검사 하였으면 왼쪽 오른쪽 부드럽게 움직이는 효과
        player.velocity.x = player.speed
    }
    else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset == 0 && player.position.x > 0) {
        player.velocity.x = -player.speed
    }
    else {
        player.velocity.x = 0

        if (keys.right.pressed) {
            scrollOffset += player.speed
            platforms.forEach((platform) => {
                platform.position.x -= player.speed
            })  
            genericObjects.forEach((genericObject) => {
                genericObject.position.x -= player.speed * 0.66
            })
        }
        else if (keys.left.pressed && scrollOffset > 0) {
            scrollOffset -= player.speed
            platforms.forEach((platform) => {
                platform.position.x += player.speed
            })
            genericObjects.forEach((genericObject) => {
                genericObject.position.x += player.speed * 0.66
            })           
        }
    }
    console.log(scrollOffset)
        // 플랫폼 충돌 감지 될때 애니매이션 효과 물체위로 올라가면 고정되서 마치 위로 올라간것처럼 애니매이션 효과
    platforms.forEach((platform) => {
        if (player.position.y + player.height <= platform.position.y && 
        player.position.y + player.height + player.velocity.y >= 
        platform.position.y && player.position.x + player.width >= platform.position.x
        && player.position.x <= platform.position.x + platform.width)
        {    
        player.velocity.y = 0
        }
    })

    if(keys.right.pressed && currentKey == 'right' && player.currentSprite !== player.sprites.run.right) {
        player.frames = 1
        player.currentSprite = player.sprites.run.right
        player.currentCropWidth = player.sprites.run.cropWidth
        player.width = player.sprites.run.width
    }
    else if (keys.left.pressed && currentKey == 'left' && player.currentSprite !== player.sprites.run.left) {
        player.currentSprite = player.sprites.run.left
        player.currentCropWidth = player.sprites.run.cropWidth
        player.width = player.sprites.run.width
    }
    else if (!keys.left.pressed && currentKey == 'left' && player.currentSprite !== player.sprites.stand.left) {
        player.currentSprite = player.sprites.stand.left
        player.currentCropWidth = player.sprites.stand.cropWidth
        player.width = player.sprites.stand.width
    }
    else if (!keys.right.pressed && currentKey == 'right' && player.currentSprite !== player.sprites.stand.left) {
        player.currentSprite = player.sprites.stand.right
        player.currentCropWidth = player.sprites.stand.cropWidth
        player.width = player.sprites.stand.width
    }

// 챕터 클리어 
    if (scrollOffset > platformImage.width * 5 + 900) {
        console.log('you win')
    }

// 게임오버
    if(player.position.y > canvas.height) {
        init()
    }
}

init()
animate()

window.addEventListener('keydown', ({keyCode}) => {          //플레이어 움직임 구현 키보드 방향키 누를때
    switch (keyCode) {
        case 37:
            console.log('left')
            keys.left.pressed = true    
            currentKey = 'left'       
            break;
    
        case 39:
            console.log('right')
            keys.right.pressed = true
            currentKey = 'right'
            break;

        case 38:
            console.log('up')
            player.velocity.y -= 14
            break;
        
        case 40:
            console.log('down')            
            break;
    }
})

window.addEventListener('keyup', ({keyCode}) => {          //플레이어 움직임 구현 키보드 방향키 땔때
    switch (keyCode) {
        case 37:
            console.log('left')
            keys.left.pressed = false
            break;
    
        case 39:
            console.log('right')
            keys.right.pressed = false            
            break;

        case 38:
            console.log('up')
            break;
        
        case 40:
            console.log('down')            
            break;
    }
})