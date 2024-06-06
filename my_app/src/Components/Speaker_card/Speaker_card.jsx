import Styles from './Speaker_card.module.css'
import React from 'react'

function Speaker_card(props) {


    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.subContainerOne}>
                    <div className={Styles.profilePicture}>
                        <img src={props.picture} alt="" />
                    </div>
                    <div className={Styles.bio}>
                        <h2>{props.name}</h2>
                        <p>{props.descreption}</p>
                    </div>
                </div>
                <div className={Styles.subContainerTwo}>
                    
                    <div className={Styles.flagContainer}>
                        {props.languages.map((url, index) => (
                            <img
                            key={index}
                            src={url}
                            alt={`Flag ${index + 1}`}
                            style={{
                                zIndex: props.languages.length - index,
                                right: `${index * 15}px` // Adjust the offset as needed
                            }}
                            />
                        ))}
                    </div>

                    <div className={Styles.detailBtn}>
                        <button>Detail</button>
                    </div>
                </div>
            </div>
            <div className={Styles.waveBorder}>

            </div>
        </>
    )
}

export default Speaker_card