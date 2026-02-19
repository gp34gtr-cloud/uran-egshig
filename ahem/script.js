document.addEventListener('DOMContentLoaded', () => {

    // ===== ELEMENTS =====
    const floatingBg = document.getElementById('floatingBg');
    const btnSurprise = document.getElementById('btnSurprise');
    const sparkleContainer = document.getElementById('sparkleContainer');
    const surpriseCard = document.getElementById('surpriseCard');
    const reasonsGrid = document.getElementById('reasonsGrid');
    const favCards = document.querySelectorAll('.fav-card');
    const favOverlay = document.getElementById('favOverlay');
    const favClose = document.getElementById('favClose');
    const favDetailBg = document.getElementById('favDetailBg');
    const favDetailIcon = document.getElementById('favDetailIcon');
    const favDetailTitle = document.getElementById('favDetailTitle');
    const favDetailText = document.getElementById('favDetailText');
    const favDetailExtra = document.getElementById('favDetailExtra');
    const btnRespawn = document.getElementById('btnRespawn');
    const respawnArea = document.getElementById('respawnArea');
    const dsBlossoms = document.getElementById('dsBlossoms');
    const dsGlow = document.getElementById('dsGlow');
    const btnProtect = document.getElementById('btnProtect');
    const secretBtn = document.getElementById('secretBtn');
    const secretReveal = document.getElementById('secretReveal');
    const btnTop = document.getElementById('btnTop');
    const introScreen = document.getElementById('introScreen');
    const musicBtn = document.getElementById('musicBtn');
    const musicIcon = document.getElementById('musicIcon');
    const bgMusic = document.getElementById('bgMusic');
    const confettiCanvas = document.getElementById('confettiCanvas');
    const letterText = document.getElementById('letterText');
    const letterCursor = document.getElementById('letterCursor');
    const letterCard = document.getElementById('letterCard');
    const quizCard = document.getElementById('quizCard');
    const quizQuestion = document.getElementById('quizQuestion');
    const quizOptions = document.getElementById('quizOptions');
    const quizFeedback = document.getElementById('quizFeedback');
    const quizProgress = document.getElementById('quizProgress');
    const quizNext = document.getElementById('quizNext');
    const quizResult = document.getElementById('quizResult');
    const quizResultText = document.getElementById('quizResultText');
    const quizRestart = document.getElementById('quizRestart');
    const konamiOverlay = document.getElementById('konamiOverlay');
    const konamiClose = document.getElementById('konamiClose');
    const heroSubtitle = document.getElementById('heroSubtitle');

    // ===== DATA =====
    const reasons = [
        "Your smile lights up my whole day",
        "You make even boring days feel special",
        "Your laugh is my favorite sound",
        "You understand me like no one else",
        "You're the cutest human I know",
        "You make me want to be better",
        "Your kindness inspires me",
        "I feel at home when I'm with you",
        "You're my favorite notification",
        "Your voice calms my anxiety",
        "You share your Oreos with me",
        "You're simply irreplaceable 💗"
    ];

    const favoritesData = {
        oreos: {
            icon: '🍪', title: 'Oreos',
            text: "Your love for Oreos is one of the cutest things about you. The way your eyes light up when you see them... It reminds me that happiness is in the little things.",
            extra: "Just like an Oreo, you're sweet and make everything better. I'd share my last one with you. 🍪",
            bgItems: ['🍪', '•', '🤎', '🖤']
        },
        pink: {
            icon: '💗', title: 'Pink',
            text: "Pink isn't just a color for you — it's a whole vibe. Soft, warm, and full of love. It suits you perfectly because you bring that same warmth everywhere.",
            extra: "My favorite shade of pink? The one that reminds me of you. 💗",
            bgItems: ['💗', '💕', '🩷', '✨']
        },
        minecraft: {
            icon: '⛏️', title: 'Minecraft',
            text: "If we had a Minecraft world together, I'd build you the coziest home. I'd protect you from every creeper. We'd watch blocky sunsets and have a farm with pink sheep.",
            extra: "In a world where you can build anything, I'd build everything for you. ⛏️",
            bgItems: ['⬛', '🟫', '🟩', '💎']
        },
        roblox: {
            icon: '🎮', title: 'Roblox',
            text: "In a world with millions of games and infinite possibilities, I'd find you in every server. Every moment with you is an adventure worth having.",
            extra: "You're my favorite player 2. Always. 🎮",
            bgItems: ['🎮', '🕹️', '⭐', '🎯']
        },
        demonslayer: {
            icon: '🌸', title: 'Demon Slayer',
            text: "Like the cherry blossoms in the anime, your presence is both beautiful and calming. You have a quiet strength that inspires me every day.",
            extra: "My breathing technique would be called 'Love Breathing' — for protecting your smile. 🌸",
            bgItems: ['🌸', '⚔️', '🦋', '✨']
        },
        pinkbuldaak: {
            icon: '🍜', title: 'Pink Buldaak',
            text: "Pink Buldaak — spicy, bold, and unforgettable. Just like you. There's something so cute about the way you enjoy it, and it's become one of my favorite things about you.",
            extra: "If Pink Buldaak had a person, it would be you — a little spicy, a little sweet, and completely irresistible. 🍜🩷",
            bgItems: ['🍜', '🩷', '🌶️', '✨']
        }
    };

    // ===== 1. INTRO SCREEN =====
    setTimeout(() => {
        introScreen.classList.add('fade-out');
        setTimeout(() => {
            introScreen.style.display = 'none';
            startTypewriter();
        }, 800);
    }, 2500);

    // ===== 2. CURSOR HEART TRAIL =====
    let lastHeart = 0;
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastHeart < 80) return;
        lastHeart = now;
        const heart = document.createElement('div');
        heart.className = 'cursor-heart';
        heart.textContent = ['💗', '💕', '🩷', '❤️'][Math.floor(Math.random() * 4)];
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    });

    // ===== 3. TYPEWRITER HERO =====
    const subtitleText = "I made this little world for you.";
    function startTypewriter() {
        let i = 0;
        heroSubtitle.textContent = '';
        const interval = setInterval(() => {
            heroSubtitle.textContent += subtitleText[i];
            i++;
            if (i >= subtitleText.length) clearInterval(interval);
        }, 60);
    }

    // ===== 4. DAYS TOGETHER COUNTER =====
    // !! Change this to your real start date !!
    const startDate = new Date('2024-11-01T00:00:00');
    function updateCounter() {
        const diff = Date.now() - startDate;
        document.getElementById('counterDays').textContent = Math.floor(diff / 86400000);
        document.getElementById('counterHours').textContent = Math.floor((diff % 86400000) / 3600000);
        document.getElementById('counterMinutes').textContent = Math.floor((diff % 3600000) / 60000);
        document.getElementById('counterSeconds').textContent = Math.floor((diff % 60000) / 1000);
    }
    updateCounter();
    setInterval(updateCounter, 1000);

    // ===== 5. LOVE LETTER TYPEWRITER =====
    const letterContent = `Uran Egshig,

I don't know how to say this perfectly, so I'll just say it honestly — you're one of the best things that's ever happened to me.

You make me smile when I don't even expect it. You make me feel understood without even trying. And somewhere along the way, you became my favorite person.

I made this little page because you deserve something that shows how much I think about you. Every section, every word — it's all true.

Thank you for being you. Thank you for letting me be yours.

With everything I have,
Yours 💗`;

    let letterStarted = false;
    function typeLetter() {
        if (letterStarted) return;
        letterStarted = true;
        let i = 0;
        letterText.textContent = '';
        const interval = setInterval(() => {
            letterText.textContent += letterContent[i];
            i++;
            if (i >= letterContent.length) {
                clearInterval(interval);
                letterCursor.style.display = 'none';
            }
        }, 25);
    }

    // ===== 6. QUIZ =====
    const quizQuestions = [
        { q: "What's her favorite color?", options: ["Blue", "Pink", "Purple", "Red"], correct: 1, feedback: "Of course it's pink! 💗" },
        { q: "What's her favorite snack?", options: ["Chips", "Candy", "Oreos", "Popcorn"], correct: 2, feedback: "Oreos all day! 🍪" },
        { q: "Which game does she love most?", options: ["Fortnite", "Among Us", "Roblox", "Minecraft"], correct: 3, feedback: "Minecraft! Building worlds 💎" },
        { q: "Which anime is her favorite?", options: ["Naruto", "One Piece", "Attack on Titan", "Demon Slayer"], correct: 3, feedback: "Demon Slayer! 🌸" },
        { q: "She also loves which platform?", options: ["Steam", "PlayStation", "Roblox", "Xbox"], correct: 2, feedback: "Roblox! 🎮" }
    ];

    let currentQ = 0, score = 0, answered = false;

    function loadQuestion() {
        const q = quizQuestions[currentQ];
        quizQuestion.textContent = q.q;
        quizFeedback.textContent = '';
        quizFeedback.className = 'quiz-feedback';
        quizNext.style.display = 'none';
        answered = false;
        quizOptions.innerHTML = '';
        quizProgress.textContent = `Question ${currentQ + 1} of ${quizQuestions.length}`;
        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.textContent = opt;
            btn.addEventListener('click', () => {
                if (answered) return;
                answered = true;
                if (i === q.correct) {
                    score++;
                    btn.classList.add('correct');
                    quizFeedback.textContent = '✓ ' + q.feedback;
                    quizFeedback.classList.add('correct');
                    launchConfetti();
                } else {
                    btn.classList.add('wrong');
                    quizOptions.querySelectorAll('.quiz-option')[q.correct].classList.add('correct');
                    quizFeedback.textContent = '✗ Not quite! ' + q.feedback;
                    quizFeedback.classList.add('wrong');
                }
                quizNext.style.display = 'block';
            });
            quizOptions.appendChild(btn);
        });
    }

    quizNext.addEventListener('click', () => {
        currentQ++;
        if (currentQ < quizQuestions.length) {
            loadQuestion();
        } else {
            quizCard.style.display = 'none';
            quizResult.style.display = 'block';
            const msgs = [
                "You still have a lot to learn! 😅",
                "Getting there! Keep paying attention 👀",
                "Not bad! You know her pretty well 😊",
                "You know her so well! She'd be proud 💗",
                "PERFECT SCORE! You're obsessed and that's cute 💗🥺"
            ];
            quizResultText.textContent = `You got ${score}/${quizQuestions.length}! ${msgs[Math.min(Math.floor((score / quizQuestions.length) * 4), 4)]}`;
            if (score === quizQuestions.length) launchConfetti();
        }
    });

    quizRestart.addEventListener('click', () => {
        currentQ = 0; score = 0;
        quizCard.style.display = 'block';
        quizResult.style.display = 'none';
        loadQuestion();
    });

    loadQuestion();

    // ===== 7. CONFETTI =====
    const ctx = confettiCanvas.getContext('2d');
    function resizeCanvas() {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let confettiPieces = [];
    let confettiRunning = false;

    function launchConfetti() {
        for (let i = 0; i < 80; i++) {
            confettiPieces.push({
                x: Math.random() * confettiCanvas.width,
                y: -10,
                w: 8 + Math.random() * 8,
                h: 8 + Math.random() * 8,
                color: ['#f48fb1', '#ffa726', '#ffffff', '#ec407a', '#ff9800', '#f8bbd9'][Math.floor(Math.random() * 6)],
                vx: (Math.random() - 0.5) * 4,
                vy: 2 + Math.random() * 3,
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 6
            });
        }
        if (!confettiRunning) animateConfetti();
    }

    function animateConfetti() {
        confettiRunning = true;
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettiPieces = confettiPieces.filter(p => p.y < confettiCanvas.height + 20);
        confettiPieces.forEach(p => {
            p.x += p.vx; p.y += p.vy; p.rotation += p.rotSpeed;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });
        if (confettiPieces.length > 0) {
            requestAnimationFrame(animateConfetti);
        } else {
            confettiRunning = false;
            ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        }
    }

    // ===== 8. MUSIC TOGGLE =====
    let musicPlaying = false;
    musicBtn.addEventListener('click', () => {
        const src = bgMusic.querySelector('source').getAttribute('src');
        if (!src) { musicIcon.textContent = '🎵'; return; }
        if (musicPlaying) {
            bgMusic.pause();
            musicIcon.textContent = '🎵';
        } else {
            bgMusic.play().catch(() => {});
            musicIcon.textContent = '🔇';
        }
        musicPlaying = !musicPlaying;
    });

    // ===== 9. KONAMI CODE =====
    const konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let konamiIndex = 0;
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                konamiIndex = 0;
                konamiOverlay.classList.add('active');
                launchConfetti();
            }
        } else {
            konamiIndex = 0;
        }
        if (e.key === 'Escape') {
            if (favOverlay.classList.contains('active')) closeFavDetail();
            konamiOverlay.classList.remove('active');
        }
    });
    konamiClose.addEventListener('click', () => konamiOverlay.classList.remove('active'));

    // ===== EXISTING: REASON CARDS =====
    function createReasonCards() {
        reasons.forEach((reason, index) => {
            const card = document.createElement('div');
            card.className = 'flip-card';
            card.innerHTML = `
                <div class="flip-card-inner">
                    <div class="flip-card-front"><span>${index + 1}</span></div>
                    <div class="flip-card-back">${reason}</div>
                </div>
            `;
            card.addEventListener('click', () => card.classList.toggle('flipped'));
            card.addEventListener('touchend', (e) => { e.preventDefault(); card.classList.toggle('flipped'); });
            reasonsGrid.appendChild(card);
        });
    }

    // ===== EXISTING: FLOATING BG =====
    function createFloatingElements() {
        const types = ['heart', 'heart-orange', 'oreo', 'petal'];
        for (let i = 0; i < 30; i++) {
            const type = types[Math.floor(Math.random() * types.length)];
            const el = document.createElement('div');
            el.className = 'float-item';
            if (type === 'heart') { el.classList.add('float-heart'); el.textContent = '♥'; }
            else if (type === 'heart-orange') { el.classList.add('float-heart-orange'); el.textContent = '🧡'; }
            else if (type === 'oreo') { el.classList.add('float-oreo'); }
            else { el.classList.add('float-petal'); }
            el.style.left = Math.random() * 100 + '%';
            el.style.animationDuration = (14 + Math.random() * 12) + 's';
            el.style.animationDelay = Math.random() * 15 + 's';
            floatingBg.appendChild(el);
        }
    }

    // ===== EXISTING: SPARKLES =====
    function createSparkles() {
        const colors = ['#ffffff', '#ffa726', '#f48fb1'];
        for (let i = 0; i < 15; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
            const angle = (i / 15) * Math.PI * 2;
            const distance = 60 + Math.random() * 50;
            sparkle.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
            sparkle.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
            sparkle.style.left = '50%';
            sparkle.style.top = '50%';
            sparkleContainer.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 800);
        }
    }

    btnSurprise.addEventListener('click', () => {
        createSparkles();
        launchConfetti();
        setTimeout(() => {
            surpriseCard.classList.add('revealed');
            surpriseCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 400);
    });

    // ===== EXISTING: FAV OVERLAY =====
    function openFavDetail(fav) {
        const data = favoritesData[fav];
        if (!data) return;
        favDetailIcon.textContent = data.icon;
        favDetailTitle.textContent = data.title;
        favDetailText.textContent = data.text;
        favDetailExtra.textContent = data.extra;
        favDetailBg.innerHTML = '';
        for (let i = 0; i < 15; i++) {
            const item = document.createElement('span');
            item.className = 'bg-item';
            item.textContent = data.bgItems[Math.floor(Math.random() * data.bgItems.length)];
            item.style.left = Math.random() * 100 + '%';
            item.style.top = Math.random() * 100 + '%';
            item.style.fontSize = (20 + Math.random() * 30) + 'px';
            item.style.animationDelay = Math.random() * 3 + 's';
            favDetailBg.appendChild(item);
        }
        favOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeFavDetail() {
        favOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    favCards.forEach(card => card.addEventListener('click', () => openFavDetail(card.dataset.fav)));
    favClose.addEventListener('click', closeFavDetail);
    favOverlay.addEventListener('click', (e) => { if (e.target === favOverlay) closeFavDetail(); });

    // ===== EXISTING: ROBLOX RESPAWN =====
    const loveMessages = ['+1 Hug', '+1 Smile', '+1 Oreo', '+1 Kiss', '+1 Cuddle', '+∞ Love', '+1 Heart', '+1 Warmth', '+1 Happiness', '+1 Dream', '+1 Forever', '+1 Us'];
    btnRespawn.addEventListener('click', () => {
        const count = 15 + Math.floor(Math.random() * 8);
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const spawn = document.createElement('div');
                spawn.className = 'love-spawn';
                spawn.textContent = loveMessages[Math.floor(Math.random() * loveMessages.length)];
                spawn.style.left = (10 + Math.random() * 80) + '%';
                spawn.style.bottom = '0';
                respawnArea.appendChild(spawn);
                setTimeout(() => spawn.remove(), 2000);
            }, i * 80);
        }
        launchConfetti();
    });

    // ===== EXISTING: DS BLOSSOMS =====
    function createDSBlossoms() {
        for (let i = 0; i < 25; i++) {
            const petal = document.createElement('div');
            petal.className = 'ds-petal';
            petal.style.left = Math.random() * 100 + '%';
            petal.style.animationDuration = (6 + Math.random() * 6) + 's';
            petal.style.animationDelay = Math.random() * 8 + 's';
            dsBlossoms.appendChild(petal);
        }
    }

    btnProtect.addEventListener('click', () => {
        dsGlow.classList.remove('active');
        void dsGlow.offsetWidth;
        dsGlow.classList.add('active');
        launchConfetti();
        setTimeout(() => dsGlow.classList.remove('active'), 1500);
    });

    secretBtn.addEventListener('click', () => {
        secretBtn.classList.add('hidden');
        secretReveal.classList.add('visible');
        launchConfetti();
    });

    btnTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // ===== SCROLL ANIMATIONS =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'none';
                if (entry.target === letterCard) typeLetter();
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.quote-card, .moment-card, .promise-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    document.querySelectorAll('.timeline-item').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = `translateX(${i % 2 === 0 ? '-40px' : '40px'})`;
        el.style.transition = `all 0.6s ease ${i * 0.12}s`;
        observer.observe(el);
    });

    if (letterCard) {
        letterCard.style.opacity = '0';
        letterCard.style.transform = 'translateY(30px)';
        letterCard.style.transition = 'all 0.6s ease';
        observer.observe(letterCard);
    }

    // ===== INIT =====
    createFloatingElements();
    createReasonCards();
    createDSBlossoms();
});
