        // Simple script to update time and add interactivity
        function updateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                hour12: false 
            }) + ' IST';
            const dateString = now.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
            
            document.getElementById('time-value').textContent = timeString;
            document.getElementById('date-value').textContent = dateString;
        }

        // Update time every second
        setInterval(updateTime, 1000);
        updateTime(); // Initial call

        // Add button interactivity
        document.getElementById('detected').addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });

        document.getElementById('not-detected').addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });

        // Simulate data updates
        function simulateDataUpdate() {
            const speed = Math.floor(Math.random() * 20) + 75; // 75-95 km/h
            const temp = Math.floor(Math.random() * 10) + 28; // 28-38°C
            const humidity = Math.floor(Math.random() * 20) + 60; // 60-80%
            const distance = Math.floor(Math.random() * 200) + 100; // 100-300m
            const sound = Math.floor(Math.random() * 20) + 65; // 65-85 dB
            
            document.getElementById('speed-value').textContent = speed + ' km/h';
            document.getElementById('temp-value').textContent = temp + '°C';
            document.getElementById('humidity-value').textContent = humidity + '%';
            document.getElementById('distance-value').textContent = distance + 'm';
            document.getElementById('sound-value').textContent = sound + ' dB';
        }

        // Update data every 5 seconds
        setInterval(simulateDataUpdate, 5000);
 