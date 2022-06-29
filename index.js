import suly from './data/sulaymaniyah.json' assert {type: 'json'};
import erbil from './data/erbil.json' assert {type: 'json'};
import kirkuk from './data/kirkuk.json' assert {type: 'json'};
import taqtaq from './data/taqtaq.json' assert {type: 'json'};
import akre from './data/akre.json' assert {type: 'json'};
import duhok from './data/duhok.json' assert {type: 'json'};
import halabja from './data/halabja.json' assert {type: 'json'};
import jalawla from './data/jalawla.json' assert {type: 'json'};
import khanaqin from './data/khanaqin.json' assert {type: 'json'};
import qaraHanjir from './data/qara_hanjir.json' assert {type: 'json'};
import shekhan from './data/shekhan.json' assert {type: 'json'};
import tuzKhurma from './data/tuz_khurma.json' assert {type: 'json'};
import zakhoo from './data/zakho.json' assert {type: 'json'};


const Today = new Date(Date.now()).getDate()
const Month = new Date(Date.now()).getMonth() + 1
function tConvert(time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time + ' AM'];

    if (time.length > 1) { // If time format correct
        time = time.slice(1);  // Remove full string match value
        time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
}
export default function KUprayer(city) {
    // set array of prayer times for each city to the parameter if parameter is em then throw error 

    if (city == 'sulaymaniyah') {
        city = {
            city: 'sulaymaniyah',
            prayerTimes: suly
        };
    } else if (city == 'erbil') {
        city = {
            city: 'erbil',
            prayerTimes: erbil
        };
    }
    else if (city == 'kirkuk') {
        city = {
            city: 'kirkuk',
            prayerTimes: kirkuk
        };
    }
    else if (city == 'taqtaq') {
        city = {
            city: 'taqtaq',
            prayerTimes: taqtaq
        };
    }
    else if (city == 'akre') {
        city = {
            city: 'akre',
            prayerTimes: akre
        };
    }
    else if (city == 'duhok') {
        city = {
            city: 'duhok',
            prayerTimes: duhok
        };
    }
    else if (city == 'halabja') {
        city = {
            city: 'halabja',
            prayerTimes: halabja

        };
    }
    else if (city == 'jalawla') {
        city = {
            city: 'jalawla',
            prayerTimes: jalawla
        };
    }
    else if (city == 'khanaqin') {
        city = {
            city: 'khanaqin',
            prayerTimes: khanaqin
        };
    }
    else if (city == 'qaraHanjir') {
        city = {
            city: 'qaraHanjir',
            prayerTimes: qaraHanjir
        };
    }
    else if (city == 'shekhan') {
        city = {
            city: 'shekhan',
            prayerTimes: shekhan
        };
    }
    else if (city == 'tuzKhurma') {
        city = {
            city: 'tuzKhurma',
            prayerTimes: tuzKhurma
        };
    }
    else if (city == 'zakhoo') {
        city = {
            city: 'zakhoo',
            prayerTimes: zakhoo
        };
    }
    else {
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
    let MonthPrayer = []
    let nowPrayer = {
        Time: '',
        Name: ''
    };
    let nextPrayer;
    const Hour = new Date(Date.now()).getHours()
    let Minute = new Date(Date.now()).getMinutes()
    Minute = Minute.toString().length == 1 ? '0' + Minute : Minute // add 0 to minute if it is single digit because the time format is HH:MM`
    let forrmat;
    console.log(`${Hour}:${Minute}`)
    function GetPrayer(date) { /// get prayer times by date 
        city?.prayerTimes?.map((day => { /// map on array of prayer times
            if (date == 'Today') {
                if (day.day == Today.toString() && day.month == Month.toString()) {
                    if (`${Hour}:${Minute}` >= day.time[0] && `${Hour}:${Minute}` <= day.time[1]) {
                        nowPrayer = {
                            Time: day.time[0],
                            Name: 'Fajr'
                        }
                        nextPrayer = {
                            Time: day.time[1],
                            Name: 'Sunrise'
                        }
                    } else if (`${Hour}:${Minute}` >= day.time[1] && `${Hour}:${Minute}` <= day.time[2]) {
                        nowPrayer = {
                            Time: day.time[1],
                            Name: 'Sunrise'
                        }
                        nextPrayer = {
                            Time: day.time[2],
                            Name: 'Dhuhr'
                        }

                    } else if (`${Hour}:${Minute}` >= day.time[2] && `${Hour}:${Minute}` <= day.time[3]) {
                        nowPrayer = {
                            Time: day.time[2],
                            Name: 'Dhuhr'

                        }
                        nextPrayer = {
                            Time: day.time[3],
                            Name: 'Asr'
                        }
                    }
                    else if (`${Hour}:${Minute}` >= day.time[3] && `${Hour}:${Minute}` <= day.time[4]) {
                        nowPrayer = {
                            Time: day.time[3],
                            Name: 'Asr'
                        }
                        nextPrayer = {
                            Time: day.time[4],
                            Name: 'Maghrib'
                        }
                    }
                    else if (`${Hour}:${Minute}` >= day.time[4] && `${Hour}:${Minute}` <= day.time[5]) {
                        nowPrayer = {
                            Time: day.time[4],
                            Name: 'Maghrib'
                        }
                        nextPrayer = {
                            Time: day.time[5],
                            Name: 'Isha'
                        }

                    }
                    else if (`${Hour}:${Minute}` >= day.time[5] && `${Hour}:${Minute}` <= '23:59') {
                        nowPrayer = {
                            Time: day.time[5],
                            Name: 'Isha'
                        }
                    } else {
                        nowPrayer = {
                            Time: '',
                            Name: ''
                        }
                        nextPrayer = {
                            Time: day.time[0],
                            Name: 'Fajr'
                        }
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
            }
            else if (date == 'Tomorrow') {
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
            }
            else if (date == 'ThisMonth') {
                if (day.month === Month.toString()) {
                    return MonthPrayer.push(day);
                }
            }
            else if (date == 'NextMonth') {
                if (day.month === (Month + 1).toString()) {
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


        }))

    }

    return {
        res: {},
        allDays: city,
        format: function (format) {
            forrmat = format;
            console.log(forrmat)
            return this;
        },
        date: function (date) {
            GetPrayer(date)
            if (date == 'Today') {
                this.res = { TodayPrayer, nowPrayer, nextPrayer, city: city.city }
                return this;
            }
            else if (date == 'Tomorrow') {
                this.res = TodayPrayer
                return this;
            }
            else if (date == 'ThisMonth') {
                this.res = MonthPrayer
                return this;
            } else if (date !== 'Today' && date !== 'Tomorrow' && date !== 'ThisMonth' && date !== 'NextMonth') {
                throw new Error('Date should be Today, Tomorrow, ThisMonth or NextMonth');
            }
            else {
                throw new Error('Invalid Date');
            }

        },

    }
}



