
  

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

```

### how to use it

###

```bash

import KUprayer from 'kurdistan-prayer-times'

```

**For Vanila Js** import from cdn to your js file

```bash

import KUprayer from 'https://cdn.jsdelivr.net/npm/kurdistan-prayer-times@1.0.7/index.es.js'

```

or

```bash

import KUprayer from 'kurdistan-prayer-times/index.es.js'

```

if you recieve Failed to resolve module specifier error then

select node_modules from your project folder

```bash
import KUprayer from "../../../node_modules/kurdistan-prayer-times/index.es.js";
```
# Get The Prayer Data
pass a string of city name from above list and call date function

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

// note that format function  must be before date function

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
# All Days / Month
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
....

```
