export default function randomHex() {
    return '0x' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}