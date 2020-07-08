
        var canvas = document.getElementById("newtonCanvas");
        var context = canvas.getContext("2d");

        function setCanvasSize() {
            canvas.width = canvas.getBoundingClientRect().width;
            canvas.height = canvas.getBoundingClientRect().height;
        }
        canvas.onresize = setCanvasSize;
        setCanvasSize();

        // calculation
        const earthRadius = 6371000;                    // meters
        const mountainHeight = earthRadius * 0.165;     // chosen to match image
        const newtonG = 6.67e-11;                       // grav. constant in SI units
        const earthMass = 5.97e24;                      // kilograms
        const dt = 30;                                  // time step in seconds
        function metersPerPixel() { return earthRadius / (0.355 * canvas.width); }

        let x = 0;
        let y = earthRadius + mountainHeight;
        let vx = 0;
        let vy = 0;
        let timeoutMoveProjectile = null;

        function drawEarthCircle() {
            context.beginPath();
            context.arc(canvas.width/2, canvas.height/2, earthRadius/metersPerPixel(), 0, 2*Math.PI);
            context.strokeStyle = "darkolivegreen";
            context.stroke();

            context.beginPath();
            context.arc(canvas.width/2, canvas.height/2, 7, 0, 2*Math.PI);
            context.fillStyle = "darkolivegreen";
            context.fill();
        }

        function drawProjectile() {
            const pixelX = canvas.width/2 + x/metersPerPixel();
            const pixelY = canvas.height/2 - y/metersPerPixel();
            
            context.clearRect(0, 0, canvas.width, canvas.height);

            drawEarthCircle();

            context.beginPath();
            context.arc(pixelX, pixelY, 3, 0, 2*Math.PI);
            context.fillStyle = "darkorchid";
            context.fill();
        }
        
        function moveProjectile() {
            let r = Math.sqrt(x*x + y*y);
            if (r <= earthRadius) {
                stopProjectile();
                startSimulation.value = "start";
                return;
            }
            
            let accel = newtonG * earthMass / (r * r);  // magnitude of a
            let ax = -accel * x / r;
            let ay = -accel * y / r;
            
            vx += ax * dt;
            vy += ay * dt;
            x  += vx * dt;
            y  += vy * dt;
            
            drawProjectile();
            timeoutMoveProjectile = window.setTimeout(moveProjectile, 1000/30);
        }

        function startProjectile() {
            window.clearTimeout(timeoutMoveProjectile);
            x = 0;
            y = earthRadius + mountainHeight;
            vx = Number(speedInput.value);
            vy = 0;
            moveProjectile();
        }

        function stopProjectile() {
            vx = 0;
            vy = 0;
            window.clearTimeout(timeoutMoveProjectile);
            timeoutMoveProjectile = null;
        }

        function onStart() {
            if(timeoutMoveProjectile) {
                startSimulation.value = "start";
                stopProjectile();
            } else {
                startSimulation.value = "stop";
                startProjectile();
            }
        }

        startSimulation.onclick = onStart;
        drawProjectile();