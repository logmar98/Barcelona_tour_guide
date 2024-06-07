import Styles from './Home.module.css'
import main_img from '../../images/main_image.jpg'
import Speaker_card from '../../Components/Speaker_card/Speaker_card'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Home() {

    const [selectLanguage, setselectLanguage] = useState(false)
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [allLanguages, setAllLanguages] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("https://script.google.com/macros/s/AKfycbxoxCsALr2nil27xbaBM2Avhrl66J7JuabHAq4ustr1X-g3BIUd9WhmiQGcqjFFFj3m/exec");
          const { data } = await res.json();
          setData(data.filter(obj => obj.name !== ''));
          setAllData(data.filter(obj => obj.name !== ''));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
    //console.log(data);

    useEffect(() => {
        // Step 1: Flatten the array of languages
        const flattenedLanguages = data.map(speaker => speaker.languages.split(',')).flat();
    
        // Step 2: Remove duplicates using Set
        const uniqueLanguages = [...new Set(flattenedLanguages)];
    
        // Step 3: Update the state with the unique languages
        setAllLanguages(uniqueLanguages);

      }, [data]); 

    const selectThisLanguage = (e) => {
        if (e.target.innerText === 'any language') {
            setData(allData)
            setselectLanguage(false)
            return
        }
        setData(data.filter(speaker => speaker.languages.includes(e.target.innerText)))
        setselectLanguage(false)
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.imgContainer}>
                <img src={main_img} alt="main image" />
            </div>
            <div className={Styles.mainContent}>
                <div>
                    <h1 className={Styles.mainHeader}>Hire licensed & private Barcelona tour guide</h1>
                    <div className={Styles.chooseLanguage}>
                        <h1>who speaks</h1>
                        <h1 className={Styles.selector} onClick={() => setselectLanguage(!selectLanguage)}>your language<small>▼</small></h1>
                    </div>
                    <div className={Styles.languageContainer}>
                        {selectLanguage && (
                            <div className={Styles.languageList}>
                                <div onClick={(e) => selectThisLanguage(e)} className={Styles.languageListSelect}>
                                    <img src="https://static.vecteezy.com/system/resources/previews/005/261/315/non_2x/language-translation-icon-free-vector.jpg" alt="" />
                                    <h3>any language</h3>
                                </div>
                                {allLanguages.map((language, index) => (
                                    <div onClick={(e) => selectThisLanguage(e)} className={Styles.languageListSelect} key={index}>
                                        <img
                                            src={`https://unpkg.com/language-icons/icons/${language}.svg`}
                                            alt={`Flag ${index + 1}`}
                                        />
                                        <h3>{language}</h3>
                                    </div>
                                ))}
                                
                            </div>
                        )}
                    </div>
                </div>
                <div className={Styles.speakerCardContainer}>
                    {data.map(speaker => (
                        <Speaker_card 
                            key={speaker.id}
                            picture={speaker.picture}
                            id={speaker.id}
                            email={speaker.mail}
                            number={speaker.number}
                            website={speaker.website}
                            name={speaker.name}
                            description={speaker.description}
                            languages={speaker.languages.split(',')}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
