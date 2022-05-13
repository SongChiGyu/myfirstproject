const platformImg = '../image/platform.png' //마리오 이미지를 사용하기 위해 
const background = '../image/main.jpg'
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1200
canvas.height = 800

const gravity = 0.5         //중력 상수 값

class Player {              //플레이어 생성 함수
    constructor() {
        this.position = {   //플레이어 생성 위치
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }

        this.width = 30     //플레이어 크기 지정
        this.height = 30
    }
    draw() {                //플레이어 그리는 함수
        c.fillStyle = 'red'          //플레이어 현재 색상
        c.fillRect(this.position.x, this.position.y,    //플레이어 어느 지점에서 가로 새로 몇 크기로 그리는지 입력
            this.width, this.height)
    }
    update() {              //실시간으로 플레이어 및 중력 적용
        this.draw() 
        this.position.x += this.velocity.x 
        this.position.y += this.velocity.y    
        
        if(this.position.y + this.height + this.velocity.y <= canvas.height) {    //중력 구현
            this.velocity.y += gravity      //윈도우 창 밑창까지 오면 중력 0 되게 만드는 작업
        }
        else {
            this.velocity.y = 0            //어째보면 바닥을 구현한것과 같은 효과
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

const image = new Image()
image.src = platformImg

console.log(image)

const player = new Player()
// const platform = new Platform()
const platforms = [new Platform({x: -1,y: 690, image}),   //물체를 여러개 만들기 위해 객체 배열사용
                   new Platform({x: image.width -3,y: 690, image})]  

const keys = {                  //왼쪽 오른쪽 키 누르는것을 검사하기
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

let scrollOffset = 0

function animate() {                                //플레이어와 중력구현한 것을 애니매이션 효과로 적용 
    requestAnimationFrame(animate)                  //사용하지 않으면 최종값만 표시되서 움직이는 효과가 없음
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
                                         //플레이어는 움직이니깐 움직일때마다 새롭게 그려줌
    platforms.forEach((platform) => {
      platform.draw()
    })                                 //물체는 고정이니깐 한번만 그려줌
    player.update()    

    if (keys.right.pressed && player.position.x < 400) {                       //검사 하였으면 왼쪽 오른쪽 부드럽게 움직이는 효과
        player.velocity.x = 4
    }
    else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -4
    }
    else {
        player.velocity.x = 0

        if (keys.right.pressed) {
            scrollOffset += 5
            platforms.forEach((platform) => {
                platform.position.x -= 5
            })  
           
        }
        else if (keys.left.pressed) {
            scrollOffset -= 5
            platforms.forEach((platform) => {
                platform.position.x += 5
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

    if (scrollOffset > 2000) {
        console.log('you win')
    }
}

animate()

window.addEventListener('keydown', ({keyCode}) => {          //플레이어 움직임 구현 키보드 방향키 누를때
    switch (keyCode) {
        case 37:
            console.log('left')
            keys.left.pressed = true
            break;
    
        case 39:
            console.log('right')
            keys.right.pressed = true
            break;

        case 38:
            console.log('up')
            player.velocity.y -= 15
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