import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
// import data from '../data';


import {
    FETCH_JOBS,
    LIKE_JOB,
    CLEAR_LIKED_JOBS
} from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';

const JOB_QUERY_PARAMS = {
    publisher : '4201738803816157',
    format : 'json',
    v: '2',
    latlong: 1,
    radius : 10,
    q: 'javscript',
    key : 'AIzaSyBvDKSk33eIr-lSx3akKubXLFfxbkPEanU'
};

const buildJobUrl = (zip) => {
    const query = qs.stringify({...JOB_QUERY_PARAMS, l : zip}); //pick everything in the job_query params object and put it here
    return `${JOB_ROOT_URL}${query}`;
    
};


export const fetchJobs = (region, callback) =>  async (dispatch) => {
    try{
        // let zip = await reverseGeocode(region);
        // const url = buildJobUrl(zip);

        // let {data} = await axios.get(url);
    let data = {  
        "version":2,
        "query":"java",
        "location":"austin, tx",
        "dupefilter":true,
        "highlight":false,
        "radius":25,
        "start":1,
        "end":10,
        "totalResults":547,
        "pageNumber":0,
        "results":[  
            {  
                "jobtitle":"Java Developer",
                "company":"XYZ Corp",
                "city":"Austin",
                "state":"TX",
                "country":"US",
                "formattedLocation":"Austin, TX",
                "source":"Dice",
                "date":"Mon, 02 Aug 2017 16:21:00 GMT",
                "snippet": `looking for an object-oriented Java Developer... Java Servlets,
                  HTML, JavaScript, AJAX, Struts, Struts2, JSF) desirable. Familiarity with
                  Tomcat and the Java...`,
                "url":"http://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
                "onmousedown":"indeed_clk(this, '0000');",
                "latitude":30.27127,
                "longitude":-97.74103,
                "jobkey":"12345",
                "sponsored":false,
                "expired":false,
                "indeedApply":true,
                "formattedLocationFull":"Austin, TX",
                "formattedRelativeTime":"11 hours ago"
            },
    
            {  
                "jobtitle":"Ruby Developer",
                "company":"Facebook inc",
                "city":"Austin",
                "state":"TX",
                "country":"US",
                "formattedLocation":"Soweto, TX",
                "source":"Dice",
                "date":"Mon, 02 Aug 2017 16:21:00 GMT",
                "snippet": `looking for a midlevel Ruby and Rails developer,
                  HTML, JavaScript, AJAX, Struts, Ruby Rails, JSx) desirable.`,
                "url":"http://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
                "onmousedown":"indeed_clk(this, '0000');",
                "latitude":30.27127,
                "longitude":-97.74103,
                "jobkey":"12346",
                "sponsored":false,
                "expired":false,
                "indeedApply":true,
                "formattedLocationFull":"Austin, TX",
                "formattedRelativeTime":"2 days ago"
            },
            {  
                "jobtitle":"Javascript Developer",
                "company":"Oasis Inc",
                "city":"Austin",
                "state":"TX",
                "country":"US",
                "formattedLocation":"Austin, TX",
                "source":"Dice",
                "date":"Mon, 02 Jan 2018 05:24:00 GMT",
                "snippet": `looking for a Javascript Developer,
                  HTML, JavaScript, AJAX, Struts, Struts2, JSF) desirable. Familiarity with
                  React and the Angular...`,
                "url":"http://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
                "onmousedown":"indeed_clk(this, '0000');",
                "latitude":30.27127,
                "longitude":-97.74103,
                "jobkey":"12347",
                "sponsored":false,
                "expired":false,
                "indeedApply":true,
                "formattedLocationFull":"Austin, TX",
                "formattedRelativeTime":"3 hours ago"
            },
            {  
                "jobtitle":"Golang Developer",
                "company":"Go corps",
                "city":"Austin",
                "state":"TX",
                "country":"US",
                "formattedLocation":"Austin, TX",
                "source":"Dice",
                "date":"Mon, 02 oct 2017 16:21:00 GMT",
                "snippet": `looking for an object-oriented GOlang developer,
                  HTML, JavaScript, AJAX, Css, Struts2, JSF) desirable.`,
                "url":"http://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
                "onmousedown":"indeed_clk(this, '0000');",
                "latitude":30.27127,
                "longitude":-97.74103,
                "jobkey":"12348",
                "sponsored":false,
                "expired":false,
                "indeedApply":true,
                "formattedLocationFull":"Austin, TX",
                "formattedRelativeTime":"23 hours ago"
            }
        ]
    }
        

        dispatch({type : FETCH_JOBS, payload : data});
        callback();
                
    }

   catch(err){
       console.log('ooops');
        console.log(err);
   }

    
};


export const likeJob = (job) => {
    return {
        payload : job,
        type : LIKE_JOB
    }
}


export const clearLikedJobs = () => {
    return {type : CLEAR_LIKED_JOBS};
};

