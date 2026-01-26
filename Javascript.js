        // ANTI-THEFT PROTECTION
        document.addEventListener('contextmenu', event => event.preventDefault()); // Disable Right Click
        
        document.onkeydown = function(e) {
            // Disable F12, Ctrl+U, Ctrl+Shift+I (Dev Tools)
            if(event.keyCode == 123) {
               return false;
            }
            if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
               return false;
            }
            if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
               return false;
            }
            if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
               return false;
            }
        }

         // UI SOUND EFFECTS
        // Create audio context
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

        function playClickSound() {
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); // High pitch beep
            oscillator.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.1); // Drop pitch

            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); // Low volume
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.1);
        }

        // Add sound to all buttons
        document.querySelectorAll('button, a').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                // Optional: distinct hover sound could go here
            });
            btn.addEventListener('click', () => {
                if(audioCtx.state === 'suspended') audioCtx.resume();
                playClickSound();
            });
        });
