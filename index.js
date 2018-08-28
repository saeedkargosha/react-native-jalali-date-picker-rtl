const PersianCalendarPicker = require('./PersianCalendarPicker');

const numbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

Object.defineProperty(String.prototype, 'PersianNumber', {
    value() {
        const num = this.toString();
        let i = 0;
        const len = num.length;
        let res = '';
        for (; i < len; i++) {
            if (numbers[num.charAt(i)]) {
                res += numbers[num.charAt(i)];
            } else {
                res += num.charAt(i);
            }
        }
        return res;
    },
    enumerable: false
});

module.exports = PersianCalendarPicker;