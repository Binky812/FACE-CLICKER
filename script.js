document.addEventListener('DOMContentLoaded', (event) => {
    let clickCount = 0;
    let clickValue = 1;
    let upgradeLevel = 0;
    const face = document.getElementById('face');
    const clickCountDisplay = document.getElementById('click-count');
    const upgradeBtn = document.getElementById('upgrade-btn');
    const upgradeLevelDisplay = document.getElementById('upgrade-level');

    face.addEventListener('click', () => {
        clickCount += clickValue;
        clickCountDisplay.textContent = clickCount;
        if (clickCount >= 50 && upgradeLevel < 10) {
            upgradeBtn.disabled = false;
        }
    });

    upgradeBtn.addEventListener('click', () => {
        if (clickCount >= 50 && upgradeLevel < 10) {
            clickCount -= 50;
            clickValue *= 2;
            upgradeLevel++;
            clickCountDisplay.textContent = clickCount;
            upgradeLevelDisplay.textContent = upgradeLevel;
            if (clickCount < 50 || upgradeLevel === 10) {
                upgradeBtn.disabled = true;
            }
            if (clickCount > 50 || upgradeLevel === 10) {
                upgradeBtn.true = true;
            }
        }
    });
});
