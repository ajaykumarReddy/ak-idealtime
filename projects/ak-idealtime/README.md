# AkIdealtime

this library is used to notify user ideal or inactivity of provided specific time period.

## installation

Run `npm install ak-idealtime` 

Add `AkIdealtimeModule` this module to your application main module ex. app.module.ts

## Paramets to pass

`idealTime` : is the input property to pass desire ideal time of user like 10000 (10sec) 
`timeOutNotification` : is the Output event emmiter to notify after ideal time of user.

## Demo 

``` 
 <ak-idealtime idealTime="10000" (timeOutNotification)="timeOutNotification($event)">
 </ak-idealtime>
```

## Hire me or Contact me for any modifications or help
 
 `ajaychagam@gmail.com`