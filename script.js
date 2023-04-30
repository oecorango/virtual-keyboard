const KEY_CODE = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight',
];

const KEY_CODE_COMMAND = [
  'Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight',
];

const BUTTONS_RUS_DOWN = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl',
];
const BUTTONS_RUS_CAPS = [
  'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl',
];
const BUTTONS_RUS_SHIFT = [
  'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl',
];
const BUTTONS_RUS_SHIFT_CAPS = [
  'ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl',
];

const BUTTONS_EN_DOWN = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl',
];
const BUTTONS_EN_CAPS = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl',
];
const BUTTONS_EN_SHIFT = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl',
];
const BUTTONS_EN_SHIFT_CAPS = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl',
];

// -------------инициализируем клавиатуру в DOM-----------------
const BODY = document.querySelector('body');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');

textarea.className = 'input-text';
keyboard.className = 'keyboard';
BODY.append(textarea);
BODY.append(keyboard);

function initKey() {
  for (let i = 0; i < KEY_CODE.length; i += 1) {
    if (i === 14 || i === 29 || i === 42 || i === 55) {
      const row = document.createElement('div');
      row.className = 'row';
      keyboard.append(row);
    }
    const keyboardKey = document.createElement('div');
    keyboardKey.className = `keyboard-key ${KEY_CODE[i]}`;

    const keyRuDown = `<span class="keyDown">${BUTTONS_RUS_DOWN[i]}</span>`;
    const keyRuShift = `<span class="keyShift hidden">${BUTTONS_RUS_SHIFT[i]}</span>`;
    const keyRuCaps = `<span class="caps hidden">${BUTTONS_RUS_CAPS[i]}</span>`;
    const keyRuShiftCaps = `<span class="shiftCups hidden">${BUTTONS_RUS_SHIFT_CAPS[i]}</span>`;

    const keyRu = document.createElement('span');
    keyRu.className = 'rus';
    keyRu.innerHTML = keyRuDown + keyRuShift + keyRuCaps + keyRuShiftCaps;

    const keyEnDown = `<span class="keyDown">${BUTTONS_EN_DOWN[i]}</span>`;
    const keyEnShift = `<span class="keyShift hidden">${BUTTONS_EN_SHIFT[i]}</span>`;
    const keyEnCaps = `<span class="caps hidden">${BUTTONS_EN_CAPS[i]}</span>`;
    const keyEnShiftCaps = `<span class="shiftCups hidden">${BUTTONS_EN_SHIFT_CAPS[i]}</span>`;

    const keyEn = document.createElement('span');
    keyEn.className = 'en hidden';
    keyEn.innerHTML = keyEnDown + keyEnShift + keyEnCaps + keyEnShiftCaps;

    keyboardKey.append(keyRu, keyEn);
    keyboard.append(keyboardKey);
  }
}

initKey();

// -----Изменяем значения кнопок от нажатия шифт и капс-----------
const keyboardKey = document.querySelectorAll('.keyboard-key');
const btnCaps = document.querySelectorAll('.caps');
const btnDown = document.querySelectorAll('.keyDown');
const btnShift = document.querySelectorAll('.keyShift');
const btnShiftCaps = document.querySelectorAll('.shiftCups');

let pressCapsLock = 'off';

const keyCaps = () => {
  btnCaps.forEach((elem) => {
    elem.classList.remove('hidden');
  });
};

const keyShift = () => {
  btnShift.forEach((elem) => {
    elem.classList.remove('hidden');
  });
};

const keyDown = () => {
  btnDown.forEach((elem) => {
    elem.classList.remove('hidden');
  });
};

const keyShiftCaps = () => {
  btnShiftCaps.forEach((elem) => {
    elem.classList.remove('hidden');
  });
};

const keyHidden = () => {
  btnShiftCaps.forEach((elem) => {
    elem.classList.add('hidden');
  });
  btnDown.forEach((elem) => {
    elem.classList.add('hidden');
  });
  btnShift.forEach((elem) => {
    elem.classList.add('hidden');
  });
  btnCaps.forEach((elem) => {
    elem.classList.add('hidden');
  });
};

// ивент на капслок (нажатие и отжим)
document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.code === 'CapsLock' && pressCapsLock === 'off') {
    keyHidden();
    keyCaps();
    pressCapsLock = 'on';
  } else if (event.code === 'CapsLock' && pressCapsLock === 'on') {
    keyHidden();
    keyDown();
    pressCapsLock = 'off';
  }
});

// ивент на шифт нажатие
document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && pressCapsLock === 'on') {
    keyHidden();
    keyShiftCaps();
  } else if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight')) {
    keyHidden();
    keyShift();
  }
});

// ивент на шифт отжатие
document.addEventListener('keyup', (event) => {
  event.preventDefault();
  if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && pressCapsLock === 'on') {
    keyHidden();
    keyCaps();
  } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    keyHidden();
    keyDown();
  }
});

// подсвечиваем нужатую клавишу
document.addEventListener('keydown', (event) => {
  event.preventDefault();
  for (let i = 0; i < KEY_CODE.length; i += 1) {
    if (event.code === KEY_CODE[i] && event.code !== 'CapsLock') {
      keyboardKey[i].classList.add('active');
      if (KEY_CODE_COMMAND.indexOf(event.code) === -1) {
        textarea.value += BUTTONS_RUS_DOWN[i];
      }
    }
    if (event.code === KEY_CODE[i] && event.code === 'CapsLock') {
      keyboardKey[i].classList.toggle('active');
    }
  }
});

// убираем подсветку с клавиши
document.addEventListener('keyup', (event) => {
  event.preventDefault();
  for (let i = 0; i < KEY_CODE.length; i += 1) {
    if (event.code === KEY_CODE[i] && event.code !== 'CapsLock') {
      setTimeout(() => {
        keyboardKey[i].classList.remove('active');
      }, 100);
    }
  }
});

// -------------меняем раскладку клавиатуры----------------------
const keyRus = document.querySelectorAll('.rus');
const keyEn = document.querySelectorAll('.en');

const changeKeyLanguage = () => {
  keyRus.forEach((event) => {
    event.classList.toggle('hidden');
  });
  keyEn.forEach((event) => {
    event.classList.toggle('hidden');
  });
};

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  if ((event.code === 'ControlLeft' && event.altKey) || (event.code === 'AltLeft' && event.ctrlKey)) {
    changeKeyLanguage();
  }
});
