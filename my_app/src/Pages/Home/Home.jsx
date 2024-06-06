import Styles from './Home.module.css'
import main_img from '../../images/main_image.jpg'
import Speaker_card from '../../Components/Speaker_card/Speaker_card'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Home() {


    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("https://script.google.com/macros/s/AKfycbzY0MaYJKyX68gP3iUWIQqgYOVulpaV_Ws3Bof3G9_cSOHU0_MwIy-_VAvJpRL568xh/exec");
          const { data } = await res.json();
          setData(data.filter(obj => obj.name !== ''));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
    console.log(data);


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
                        <h1 className={Styles.selector}>your language</h1>
                    </div>
                </div>
                <div className={Styles.speakerCardContainer}>
                    {data.map(speaker => (
                        <Speaker_card 
                            key={speaker.id}
                            picture={speaker.picture}
                            id={speaker.id}
                            name={speaker.name}
                            //description={speaker.description}
                            languages={speaker.languages.split(',').map(lang => {})}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
