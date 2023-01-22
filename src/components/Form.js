import React, { Suspense, useState } from "react";
import './form.css';
import { useTranslation,initReactI18next } from 'react-i18next';
import i18next from 'i18next';

const translationEn = {Email:"Enter your Email"};
const translationFr = {Email:"Entrer votre Email"};

// i18n 
//     .use(initReactI18next)
//     .init(
//         {
//             resources: {
//                 en: {
//                     transalation:translationEn
//                 },

//                 fr: {
//                     transalation: translationFr
//                 },
//             },
//             lng : "en",
//             fallbackLng : "en",
//             interpolation  : {escapeValue:false},
//         }
//     );

i18next.init({
    lng: 'en', // if you're using a language detector, do not define the lng option
    // debug: true,
    resources: {
      en: {
        translation: {
          "Email": "Enter your email"
        }
      },
      fr: {
        translation: {
          "Email": "Entrer votre Email"
        }
      }
    }
  });

function Form()
{
    const { t, i18n } = useTranslation();
    const[lng,setLng]=useState('en');
    const onchanges=(event)=> {
        // 18n.changeLanguage(event.target.value);
        console.log("i came in this function");
        i18next.changeLanguage(event.target.value);
    }
    return(
        <Suspense fallback="Loading...">
        <div className="FormContainer">
            <div className="innerformcontainer">
            <form>
                <label for="email">{t('Email')} </label>
                    <input type="text" placeholder='Enter your email address'/>
                <label for ="password">Password</label>
                <input type="password" placeholder='Enter your Password'/>
              </form>

              <select name="language" onChange={onchanges}>
                <option value="en">English</option>
                <option value="fr">French</option>
              </select>
            </div>
        </div>
        </Suspense>
    );
}
export default Form;