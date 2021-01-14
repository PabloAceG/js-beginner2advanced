// TODO: Should C perform different operation depending on buffer/screen
// TODO: What to do with screen after equal operation
// TODO; Errors

window.onload = () => {
    // Numpad
    const key0 = $('#key0');
    const key1 = $('#key1');
    const key2 = $('#key2');
    const key3 = $('#key3');
    const key4 = $('#key4');
    const key5 = $('#key5');
    const key6 = $('#key6');
    const key7 = $('#key7');
    const key8 = $('#key8');
    const key9 = $('#key9');
    // Symbols
    const keyplus  = $('#keyplus');
    const keyminus = $('#keyminus');
    const keymult  = $('#keymult');
    const keydiv   = $('#keydiv');
    const keyc     = $('#keyc');
    const keyequal = $('#keyequal');
    // Screen
    const screen = $('#screen');
    // Number before applying operation
    let buffer = 0;
    let lastOperation = 'none';
    let clear = false;

    const performOperation = () => {
        if (lastOperation !== 'none') {
            // Perform operation
            const num = parseInt(screen.text());
            switch (lastOperation) {
                case '+':
                    buffer += num;
                    break;
                case '-':
                    buffer -= num;
                    break;
                case '*':
                    buffer *= num;
                    break;
                case '/':
                    buffer /= num;
                    break;
            }
            // Update screen value
            screen.text(buffer.toString());
            // Operation already performed
            lastOperation = 'none';
        } else {
            buffer = parseInt(screen.text());
        }
    }

    const clearScreen = () => {
        if (clear) {
            screen.text('');
            clear = false;
        }
    }

    // Numpad interaction. Add numbers to screen
    key0.on('click', () => {
        clearScreen();
        screen.append('0'); 
    });
    key1.on('click', () => {
        clearScreen();
        screen.append('1');
    });
    key2.on('click', () => {
        clearScreen();
        screen.append('2'); 
    });
    key3.on('click', () => {
        clearScreen();
        screen.append('3'); 
    });
    key4.on('click', () => {
        clearScreen();
        screen.append('4'); 
    });
    key5.on('click', () => {
        clearScreen();
        screen.append('5'); 
    });
    key6.on('click', () => {
        clearScreen();
        screen.append('6'); 
    });
    key7.on('click', () => {
        clearScreen();
        screen.append('7'); 
    });
    key8.on('click', () => {
        clearScreen();
        screen.append('8'); 
    });
    key9.on('click', () => {
        clearScreen();
        screen.append('9'); 
    });
    // Other operations
    // Addition
    keyplus.on('click', () => {
        performOperation();
        lastOperation = '+';
        clear = true;
    });
    // Subtraction
    keyminus.on('click', () => {
        performOperation();
        lastOperation = '-';
        clear = true;
    });
    // Multiplication
    keymult.on('click', () => {
        performOperation();
        lastOperation = '*'
        clear = true;
    });
    // Division
    keydiv.on('click', () => {
        performOperation();
        lastOperation = '/';
        clear = true;
    });
    // Equal
    keyequal.on('click', () => {
        performOperation();
    });
    // Delete Content
    keyc.on('click', () => {
        buffer = 0;
        screen.text('');
    });

}

