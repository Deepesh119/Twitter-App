import React from 'react';
import "../App.css";
import { FaTwitter} from "react-icons/fa";
import {Link} from "react-router-dom";

const Front = () => {
    return (
        <>
        <div className="Entrypoint">
           <div className="LoginLeft">
           <FaTwitter id="coloriconone"/>
           <h4 className="Heading">Life's not about a job, it's about purpose.</h4>
           </div>
           <div className="LoginRight">
               <FaTwitter id="coloricon"/>
               <h1 className="Marginheading"><strong>Happening Now</strong></h1>
               <h3 className="Marginheadingone"> Join Twitter Today</h3>
               <div className="gmaildiv"><p className="write"><Link to="Final"><strong>Sign in as Deepesh Giri</strong></Link></p></div>
               <div className="gmaildiv"><p className="write"><strong>Sign in with Apple</strong></p></div>
               <div className="gmaildiv"><p className="write"><strong>Sign in with Email or phone</strong></p></div>
               <p className="writetwo">By signing up, you agree to the<a href="https://twitter.com/en/tos"> Terms of Service</a> and <a href="https://twitter.com/en/privacy">Privacy Policy</a>, including <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">Cookie Use.</a></p>
           </div>
           <div className="LoginBottom">
            <div className="LoginBottomone">
               <h6><a href="https://about.twitter.com/en">About</a></h6>
               <h6><a href="https://help.twitter.com/en">Help Center</a></h6>
               <h6><a href="https://twitter.com/en/tos">Term of Service</a></h6>
               <h6><a href="https://twitter.com/en/privacy">Privacy Policy</a></h6>
               <h6><a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">Cookies Policy</a></h6>
               <h6><a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo">Add Info</a></h6>
               <h6><a href="https://blog.twitter.com/">Blog</a></h6>
               <h6><a href="https://status.twitterstat.us/">Status </a></h6>
               <h6><a href="https://careers.twitter.com/">Career</a></h6>
               <h6><a href="https://about.twitter.com/en/who-we-are/brand-toolkit">Brand Resource</a></h6>
               <h6><a href="https://ads.twitter.com/login?ref=gl-tw-tw-twitter-advertise">Advertsing</a></h6>
               <h6><a href="https://marketing.twitter.com/en_gb">Marketting</a></h6>
               <h6><a href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness">Twitter For Business</a></h6>
               <h6><a href="https://developer.twitter.com/en">For Developers</a></h6>
               <h6><a href="https://twitter.com/i/directory/profiles">Directory</a></h6>
             </div>
               <div className="LoginBottomtwo">
               <h5>© 2021 Twitter, Inc.</h5>    
               </div>
               

           </div>
        </div>
        </>
    )
}

export default Front;
