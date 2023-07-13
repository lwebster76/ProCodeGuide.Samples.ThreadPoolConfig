/* 
   Load Testing is primarily concerned with assessing the current performance of your system
   in terms of concurrent useres or requests per second.
   When you want to understand if your system is meeting the performance goals, this is the type of test
   you'll run.
   
   Run a load test to:
   - Assess the current performance of the system under typical and peak load
   - Make sure you are continously meeting the performance standards as you make changes to your system
   
   Can be used to simulate a normal day in your business
 */

import http from 'k6/http';
import {sleep} from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '10s', target: 100 }, // simulate ramp-up traffic 
        { duration: '60s', target: 100 }, // stay 
        { duration: '10s', target: 0 }, // ramp down to 0 users
    ],
    // thresholds: { // checks during the test
    //     http_req_duration: [p(99)<150], // 99% of requests must complete below 150ms
    // },
};

export default () => {
    let response = http.get('http://localhost:5195/WeatherForecast/GetAsync');
    sleep(1);
};