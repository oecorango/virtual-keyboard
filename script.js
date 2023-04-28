const KEY_CODE = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight',
];

const BUTTONS_RUS = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl',
];
const BUTTONS_EN = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl',
];

const BODY = document.querySelector('body');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');

textarea.className = 'input-text';
keyboard.className = 'keyboard';
BODY.append(textarea);
BODY.append(keyboard);

function initKey() {
  for (let i = 0; i < BUTTONS_RUS.length; i++) {
    const keyboardKey = document.createElement('div');
    keyboardKey.className = `keyboard-key ${KEY_CODE[i]}`;

    const keyRuUp = `<span class="keyUp hidden">${BUTTONS_RUS[i].toLocaleUpperCase()}</span>`;
    const keyRuDown = `<span class="keyDown">${BUTTONS_RUS[i].toLocaleLowerCase()}</span>`;
    const keyRuShift = `<span class="keyShift hidden">${BUTTONS_RUS[i]}</span>`;
    const keyRuCaps = `<span class="caps hidden">${BUTTONS_RUS[i].toLocaleUpperCase()}</span>`;

    const keyRu = document.createElement('span');
    keyRu.className = 'rus';
    keyRu.innerHTML = keyRuUp + keyRuDown + keyRuShift + keyRuCaps;

    const keyEnUp = `<span class="keyUp hidden">${BUTTONS_EN[i].toLocaleUpperCase()}</span>`;
    const keyEnDown = `<span class="keyDown">${BUTTONS_EN[i].toLocaleLowerCase()}</span>`;
    const keyEnShift = `<span class="keyShift hidden">${BUTTONS_EN[i]}</span>`;
    const keyEnCaps = `<span class="caps hidden">${BUTTONS_EN[i].toLocaleUpperCase()}</span>`;

    const keyEn = document.createElement('span');
    keyEn.className = 'en hidden';
    keyEn.innerHTML = keyEnUp + keyEnDown + keyEnShift + keyEnCaps;

    keyboardKey.append(keyRu, keyEn);
    keyboard.append(keyboardKey);
  }
}

initKey();
