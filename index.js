'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

var _sulaymaniyah = _interopRequireDefault(require("./data/sulaymaniyah.json"));

var _erbil = _interopRequireDefault(require("./data/erbil.json"));

var _kirkuk = _interopRequireDefault(require("./data/kirkuk.json"));

var _taqtaq = _interopRequireDefault(require("./data/taqtaq.json"));

var _akre = _interopRequireDefault(require("./data/akre.json"));

var _duhok = _interopRequireDefault(require("./data/duhok.json"));

var _halabja = _interopRequireDefault(require("./data/halabja.json"));

var _jalawla = _interopRequireDefault(require("./data/jalawla.json"));

var _khanaqin = _interopRequireDefault(require("./data/khanaqin.json"));

var _qara_hanjir = _interopRequireDefault(require("./data/qara_hanjir.json"));

var _shekhan = _interopRequireDefault(require("./data/shekhan.json"));

var _tuz_khurma = _interopRequireDefault(require("./data/tuz_khurma.json"));

var _zakho = _interopRequireDefault(require("./data/zakho.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Today = new Date(Date.now()).getDate();
const Month = new Date(Date.now()).getMonth() + 1;

function tConvert(time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time + ' AM'];

    if (time.length > 1) {
        // If time format correct
        time = time.slice(1); // Remove full string match value

        time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM

        time[0] = +time[0] % 12 || 12; // Adjust hours
    }

    return time.join(''); // return adjusted time or original string
}

function KUprayer(city) {
    // set array of prayer times for each city to the parameter if parameter is em then throw error 
    if (typeof city !== 'string') {
        throw new Error('City must be a string');
    }

    if (city == 'sulaymaniyah') {
        city = {
            city: 'sulaymaniyah',
            prayerTimes: _sulaymaniyah.default
        };
    } else if (city == 'erbil') {
        city = {
            city: 'erbil',
            prayerTimes: _erbil.default
        };
    } else if (city == 'kirkuk') {
        city = {
            city: 'kirkuk',
            prayerTimes: _kirkuk.default
        };
    } else if (city == 'taqtaq') {
        city = {
            city: 'taqtaq',
            prayerTimes: _taqtaq.default
        };
    } else if (city == 'akre') {
        city = {
            city: 'akre',
            prayerTimes: _akre.default
        };
    } else if (city == 'duhok') {
        city = {
            city: 'duhok',
            prayerTimes: _duhok.default
        };
    } else if (city == 'halabja') {
        city = {
            city: 'halabja',
            prayerTimes: _halabja.default
        };
    } else if (city == 'jalawla') {
        city = {
            city: 'jalawla',
            prayerTimes: _jalawla.default
        };
    } else if (city == 'khanaqin') {
        city = {
            city: 'khanaqin',
            prayerTimes: _khanaqin.default
        };
    } else if (city == 'qaraHanjir') {
        city = {
            city: 'qaraHanjir',
            prayerTimes: _qara_hanjir.default
        };
    } else if (city == 'shekhan') {
        city = {
            city: 'shekhan',
            prayerTimes: _shekhan.default
        };
    } else if (city == 'tuzKhurma') {
        city = {
            city: 'tuzKhurma',
            prayerTimes: _tuz_khurma.default
        };
    } else if (city == 'zakhoo') {
        city = {
            city: 'zakhoo',
            prayerTimes: _zakho.default
        };
    } else {
        throw new Error('City is not found');
    }

    let TodayPrayer = {
        Fajr: '',
        Sunrise: '',
        Dhuhr: '',
        Asr: '',
        Maghrib: '',
        Isha: ''
    };
    let MonthPrayer = [];
    let nowPrayer = {
        Time: '',
        Name: ''
    };
    let nextPrayer;
    const Hour = new Date(Date.now()).getHours();
    let Minute = new Date(Date.now()).getMinutes();
    Minute = Minute.toString().length == 1 ? '0' + Minute : Minute; // add 0 to minute if it is single digit because the time format is HH:MM`

    let forrmat;

    function GetPrayer(date) {
        var _city, _city$prayerTimes;

        /// get prayer times by date 
        (_city = city) === null || _city === void 0 ? void 0 : (_city$prayerTimes = _city.prayerTimes) === null || _city$prayerTimes === void 0 ? void 0 : _city$prayerTimes.map(day => {
            /// map on array of prayer times
            if (date == 'Today') {
                if (day.day == Today.toString() && day.month == Month.toString()) {
                    if (Hour >= parseInt(day.time[0].split(':').shift()) && Hour <= parseInt(day.time[1].split(':').shift())) {
                        nowPrayer = {
                            Time: tConvert(day.time[0]),
                            Name: 'Fajr'
                        };
                        nextPrayer = {
                            Time: tConvert(day.time[1]),
                            Name: 'Sunrise'
                        };
                    } else if (Hour >= parseInt(day.time[1].split(':').shift()) && Hour <= parseInt(day.time[1].split(':').shift()) + 1) {
                        nowPrayer = {
                            Time: tConvert(day.time[1]),
                            Name: 'Sunrise'
                        };
                        nextPrayer = {
                            Time: tConvert(day.time[2]),
                            Name: 'Dhuhr'
                        };
                    } else if (Hour >= parseInt(day.time[1].split(':').shift()) + 1 && Hour <= parseInt(day.time[2].split(':').shift())) {
                        nowPrayer = {
                            Time: '',
                            Name: ''
                        };
                        nextPrayer = {
                            Time: tConvert(day.time[2]),
                            Name: 'Dhuhr'
                        };
                    } else if (Hour >= parseInt(day.time[2].split(':').shift()) && Hour <= parseInt(day.time[3].split(':').shift())) {
                        nowPrayer = {
                            Time: tConvert(day.time[2]),
                            Name: 'Dhuhr'
                        };
                        nextPrayer = {
                            Time: tConvert(day.time[3]),
                            Name: 'Asr'
                        };
                    } else if (Hour >= parseInt(day.time[3].split(':').shift()) && Hour <= parseInt(day.time[4].split(':').shift())) {
                        nowPrayer = {
                            Time: tConvert(day.time[3]),
                            Name: 'Asr'
                        };
                        nextPrayer = {
                            Time: tConvert(day.time[4]),
                            Name: 'Maghrib'
                        };
                    } else if (Hour >= parseInt(day.time[4].split(':').shift()) && Hour <= parseInt(day.time[5].split(':').shift())) {
                        nowPrayer = {
                            Time: tConvert(day.time[4]),
                            Name: 'Maghrib'
                        };
                        nextPrayer = {
                            Time: tConvert(day.time[5]),
                            Name: 'Isha'
                        };
                    } else if (Hour >= parseInt(day.time[5].split(':').shift()) && Hour <= 23) {
                        nowPrayer = {
                            Time: tConvert(day.time[5]),
                            Name: 'Isha'
                        };
                        nextPrayer = {
                            Time: tConvert(day.time[0]),
                            Name: 'Fajr'
                        };
                    } else if (Hour >= 0 && Hour <= parseInt(day.time[0].split(':').shift())) {
                        nowPrayer = {
                            Time: '',
                            Name: ''
                        };
                        nextPrayer = {
                            Time: tConvert(day.time[0]),
                            Name: 'Fajr'
                        };
                    } else {
                        nowPrayer = {
                            Time: '',
                            Name: ''
                        };
                        nextPrayer = {
                            Time: '',
                            Name: ''
                        };
                    }

                    if (forrmat == '12') {
                        return TodayPrayer = {
                            Fajr: tConvert(day.time[0]),
                            Sunrise: tConvert(day.time[1]),
                            Dhuhr: tConvert(day.time[2]),
                            Asr: tConvert(day.time[3]),
                            Maghrib: tConvert(day.time[4]),
                            Isha: tConvert(day.time[5])
                        };
                    } else {
                        return TodayPrayer = {
                            Fajr: day.time[0],
                            Sunrise: day.time[1],
                            Dhuhr: day.time[2],
                            Asr: day.time[3],
                            Maghrib: day.time[4],
                            Isha: day.time[5]
                        };
                    }
                }
            } else if (date == 'Tomorrow') {
                if (day.day === (Today + 1).toString() && day.month === Month.toString()) {
                    return TodayPrayer = {
                        Fajr: day.time[0],
                        Sunrise: day.time[1],
                        Dhuhr: day.time[2],
                        Asr: day.time[3],
                        Maghrib: day.time[4],
                        Isha: day.time[5]
                    };
                }
            } else if (date == 'ThisMonth') {
                if (day.month === Month.toString()) {
                    return MonthPrayer.push(day);
                }
            }
        });
    }

    console.log('KUprayer loaded');
    return {
        res: {},
        allDays: function () {
            var _city2;

            this.res = (_city2 = city) === null || _city2 === void 0 ? void 0 : _city2.prayerTimes;
            return this;
        },
        format: function (format) {
            forrmat = format;
            console.log(forrmat);
            return this;
        },
        date: function (date) {
            GetPrayer(date);

            if (date == 'Today') {
                this.res = {
                    TodayPrayer,
                    nowPrayer,
                    nextPrayer,
                    city: city.city
                };
                return this;
            } else if (date == 'Tomorrow') {
                this.res = TodayPrayer;
                return this;
            } else if (date == 'ThisMonth') {
                this.res = MonthPrayer;
                return this;
            } else if (date !== 'Today' && date !== 'Tomorrow' && date !== 'ThisMonth' && date !== 'NextMonth') {
                throw new Error('Date should be Today, Tomorrow, ThisMonth or NextMonth');
            } else {
                throw new Error('Invalid Date');
            }
        }
    };
}

var _default = KUprayer;
exports.default = _default;