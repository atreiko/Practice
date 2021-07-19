
(function(){
    
    body = document.querySelector('body')
    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    // Ширина и выстота канваса будет равна ширине и высоте окна просмотра:
    w = canvas.width = innerWidth, 
    h = canvas.height = innerHeight,
    // Массив, в котором мы храним наши частицы:
    particles = [],
    // Настройки частиц (их свойства):
    properties = {
        bgColor             : 'rgba(17, 17, 19, 1)',
        particleColor       : 'rgba(173, 173, 173, 1)',
        particleRadius      : 3,
        particleCount       : 60,
        particleMaxVelocity : 0.5, // Используем для генерации скорости по оси X и Y
        lineLength          : 150,
        particleLife        : 6

    }

    body.appendChild(canvas);

    window.onresize = function() {
        w = canvas.width = innerWidth  
        h = canvas.height = innerHeight
    }

    class Particle {
        constructor() {
            this.x = Math.random() * w
            this.y = Math.random() * h
            this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity // Получаем скорость от -0.5 до 0.5 (от этого будет зависить в каком направлении будет двигаться частичка)
            this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity 
            this.life = Math.random() * properties.particleLife * 60 // 60 кадров в секунду
        }
        position() { // Метод обновляюший позицию. Запустим его в reDrawParticles для каждой частицы

            // Для того, чтоб частички не вылетали за пределы нашего экрана
            // К позиции по X добавим скорость по X > ширины и скорость по X > 0
            // или текущее положение по X + скорость по X < 0 и скорость по X < 0
            // Если это так - мы умножаем скорость на -1, иначе оставляем скорость по X (так же сделаем и для Y)
            this.x + this.velocityX > w && this.velocityX > 0 || 
            this.x + this.velocityX < 0 && this.velocityX < 0 ? 
            this.velocityX *= -1 : this.velocityX

            this.y + this.velocityY > h && this.velocityY > 0 || 
            this.y + this.velocityY < 0 && this.velocityY < 0 ? 
            this.velocityY *= -1 : this.velocityY

            this.x += this.velocityX
            this.y += this.velocityY 
        }
        reDraw() {
            ctx.beginPath()
            ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2)
            ctx.closePath()
            ctx.fillStyle = properties.particleColor
            ctx.fill()
        }
        reCalcultateLife() { // Вызыввем в reDrawParticles
            if (this.life < 1) { // Если жизнь меньше 1 секунды, значит пересчитаем все параметры частички заново
                this.x = Math.random() * w
                this.y = Math.random() * h
                this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity 
                this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity 
                this.life = Math.random() * properties.particleLife * 60 
            }
            this.life--
        }
    }

    function reDrawBackground() {
        ctx.fillStyle = properties.bgColor;
        ctx.fillRect(0, 0, w, h)
    }

    function drawLines() { // Вызываем в loop
        let x1, y1, x2, y2, opacity, length;
        for (let i in particles) {
            for (let j in particles) {
                x1 = particles[i].x
                y1 = particles[i].y
                x2 = particles[j].x
                y2 = particles[j].y
                // В переменную length запишем расстояние, которую рассчитаем по формуле диагоналей. ( в lineLength - определим какой длинны нам нужны соединения )
                length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
                if (length < properties.lineLength) {
                    opacity = 1 - length / properties.lineLength // чем короче расстояние, тем меньше значение opacity
                    ctx.lineWidth = '0,5'
                    ctx.strokeStyle = `rgba(173, 173, 173, ${ opacity })`
                    ctx.beginPath()
                    ctx.moveTo(x1, y1)
                    ctx.lineTo(x2, y2)
                    ctx.closePath()
                    ctx.stroke()
                }
            } 
        }
    }  

    function reDrawParticles() {
        for(let i in particles) { 
            particles[i].reCalcultateLife()
            particles[i].position()
            particles[i].reDraw()
        }
    }
    
    function loop() {
        reDrawBackground()
        drawLines()
        reDrawParticles()
        requestAnimationFrame(loop) // Обновление анимации (60 раз в секунду)
    }

    function init() {
        for (let i = 0; i < properties.particleCount; i++) {
            particles.push(new Particle)
        }
        loop() 
    }

    init()
}())