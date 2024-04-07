const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        buttons.forEach(btn => {
            if (btn !== button) {
                btn.style.filter = 'blur(10px)';
            }
        });
    });

    button.addEventListener('mouseout', () => {
        buttons.forEach(btn => {
            btn.style.filter = 'blur(0px)';
        });
    });
});
