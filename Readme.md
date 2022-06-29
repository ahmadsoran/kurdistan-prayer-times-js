
# kurdistan prayer times js library

## **Cities list**

 - sulaymaniyah
 - erbil
 - kirkuk
 - taqtaq
 - akre
 - duhok
 - halabja
 - jalawla
 - khanaqin
 - qaraHanjir
 - shekhan
 - tuzKhurma
 - zakhoo

## install
```bash
npm i kurdistan-prayer-times
or
https://raw.githubusercontent.com/ahmadsoran/kurdistan-prayer-times-js/master/index.js
```
### how to use it
### 

pass a string of city name from above list  and call date function 
('Today' or 'Tomorrow' or 'ThisMonth') pass one of these strings 
```bash
import KUprayer from 'kurdistan-prayer-times'

const { res } = KUprayer('sulaymaniyah').date('Today')

console.log(res)
// result
TodayPrayer: {
    Fajr: '3:12',
    Sunrise: '4:45',
    Dhuhr: '12:06',
    Asr: '15:52',
    Maghrib: '19:21',
    Isha: '20:31'
  },
  nowPrayer: { Time: '', Name: '' },
  nextPrayer: { Time: '12:06', Name: 'Dhuhr' },
  city: 'sulaymaniyah'
```
## **Fotmat the Times**

by default is 24 **pass a string or num ( 12 )** to format function 
format function work only with today function
```bash
    const { res } = KUprayer('sulaymaniyah').format('12').date('Today')
    // note that format function should be before date function
    
    console.log(res)
    // result
    TodayPrayer: {
    Fajr: '3:12 AM',
    Sunrise: '4:45 AM',
    Dhuhr: '12:06 PM',
    Asr: '3:52 PM',
    Maghrib: '7:21 PM',
    Isha: '8:31 PM'
  },
  nowPrayer: { Time: '', Name: '' },
  nextPrayer: { Time: '3:12', Name: 'Fajr' },
  city: 'sulaymaniyah'

``` 

# All Days / Year

```bash
 const { res } = KUprayer('sulaymaniyah').allDays()   
    console.log(res)
    // result
    {
    day: '9',
    id: 9,
    month: '1',
    time: [ '5:45', '7:06', '12:09', '14:48', '17:09', '18:19' ]
  },
  {
    day: '10',
    id: 10,
    month: '1',
    time: [ '5:45', '7:06', '12:10', '14:49', '17:10', '18:20' ]
  },
```