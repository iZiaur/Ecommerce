import { useState } from 'react';
import { toast } from 'react-toastify';
import "./NewsLetter.css"

function NewsLetter(){
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (!email) {
            toast.error("Please enter your email address.");
            return;
        }
        toast.success("Thank you for subscribing! Your email has been added.");
        setEmail('');
    };

    return(
        <div className="newsletter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input 
                    type="email" 
                    placeholder="Your Email id" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSubscribe}>Subscribe</button>
            </div>
        </div>
    )

}


export default NewsLetter;