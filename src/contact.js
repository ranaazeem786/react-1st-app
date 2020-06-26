import React from 'react';


function Contact(props) {
   return (
       <div>
           <hi>My contact number is {props.mycontact} and my email is {props.myemail}.</hi>
       </div>
   )
}

export default Contact;