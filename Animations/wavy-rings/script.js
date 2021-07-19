(() => {
    const cnv = document.querySelector('canvas')
    const ctx = cnv.getContext('2d')
    let centerX = 0;
    let centerY = 0;

    function init() {
        
        cnv.width = innerWidth
        cnv.height = innerHeight
        centerX = cnv.width / 2 // сместим в центр
        centerY = cnv.height / 2
    }
    init()

    const numberOfRings     = 3
    const ringRadius        = 200
    const ringRadiusOffset  = 7 // Параметр увеличивает радиус каждого нового кольца
    const waveOffset        = 15 
    const colors            = [`#771122`,`#bb1122`, `ff1122`]
    let startAngle          = 0

    function updateRings() {
        for (let i = 0; i < numberOfRings; i++) {
            let radius = i * ringRadiusOffset + ringRadius
            let offsetAngle = i * waveOffset * Math.PI / 180
            drawRing(radius, colors[i], offsetAngle)
        } 
        startAngle >= 360 ? startAngle = 0 : startAngle++  
    }


    const maxWaveAmplitude  = 17
    const numberOfWaves     = 8

    function drawRing(radius, color, offsetAngle) {
        ctx.strokeStyle = color
        ctx.lineWidth = 9;

        ctx.beginPath()
        for (let j = -180; j < 180; j++) { // 360deg 
            let currentAngle  = (j + startAngle) * Math.PI / 180 // Переводим градусы в радианы 
            let displacement  = 0;  
            let now = Math.abs(j) // abs - избавляемся от "-" в значении переменной

            if (now > 70) {
                displacement = (now - 70) / 70
            }
 
            if (displacement >= 1) {
                displacement = 1
            }

            let waveAmplitude = radius + displacement * Math.sin((currentAngle + offsetAngle) * numberOfWaves) * maxWaveAmplitude// колебания 
            let x = centerX + Math.cos(currentAngle) * waveAmplitude; // sin и cos возвращают значение от -1 до 1, потому мы умножаем на 200, чтоб увеличить диаметр круга 
            let y = centerY + Math.sin(currentAngle) * waveAmplitude;
            j > -180 ? ctx.lineTo(x, y) : ctx.moveTo(x, y) 
        }
        ctx.closePath() 
        ctx.stroke()
    }

    function loop() {
        cnv.width |= 0; // ctx.clearRect(0, 0, width, height) - очищение канваса
        updateRings()
        requestAnimationFrame(loop)
    }
    loop()

    window.addEventListener('resize', init)

})()