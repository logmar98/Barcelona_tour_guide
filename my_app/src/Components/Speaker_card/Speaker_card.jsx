import Styles from './Speaker_card.module.css'
import React, { useState } from 'react'

function Speaker_card(props) {
    const [details, setDetails] = useState(false)

    const openDetail = (event) => {
        if (event.target.id === 'details' || event.target.id === 'closeDetail' || event.target.id === 'openDetail') {
            setDetails(!details)
        }
    }

    const openLink = (url) => {
        window.open(url, '_blank');
    };
    const openGmail = (email) => {
        const subject = 'Hello';
        const body = 'I am intersted?';
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank');
    };
    const callPhoneNumber = (number) => {
        window.location.href = `tel:${number}`;
    };

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
                            src={'https://unpkg.com/language-icons/icons/' + url +'.svg'}
                            alt={`Flag ${index + 1}`}
                            style={{
                                zIndex: props.languages.length - index,
                                right: `${index * 15}px` // Adjust the offset as needed
                            }}
                            />
                        ))}
                    </div>

                    <div className={Styles.detailBtn}>
                        <button id='openDetail' onClick={(e) => openDetail(e)}>Detail</button>
                    </div>
                </div>
            </div>
            <div className={Styles.waveBorder}></div>
            {details && (
                <div id='details' onClick={(e) => openDetail(e)} className={Styles.details}>
                    <div className={Styles.detailsContainer}>
                        <div style={{height: `150px`,width: `150px`}} className={Styles.profilePicture}>
                            <img src={props.picture} alt="" />
                        </div>
                        <h1 style={{fontSize: `3.5em`,margin: `0`}}>{props.name}</h1>
                        <h3>Registration #: {props.id}</h3>
                        <div className={Styles.detailsFlag}>
                            {props.languages.map((url, index) => (
                                <>
                                    <img
                                    key={index}
                                    src={'https://unpkg.com/language-icons/icons/' + url +'.svg'}
                                    alt={`Flag ${index + 1}`}
                                    />
                                    <h3>{url}</h3>
                                </>
                            ))}
                        </div>
                        <p>{props.description}</p>
                        <div className={Styles.detailBtns}>
                            <div className={Styles.inDetailBtn}>
                                <button onClick={() => openLink(props.website)}>Visit website</button>
                            </div>
                            <div className={Styles.inDetailBtn}>
                                <button onClick={() => openGmail(props.email)}>Send email</button>
                            </div>
                            <div className={Styles.inDetailBtn}>
                                <button onClick={() => callPhoneNumber(props.number)}>Call</button>
                            </div>
                            <div className={Styles.inDetailBtn}>
                                <button onClick={(e) => openDetail(e)} id='closeDetail' style={{backgroundColor: `#FCFAFA`, color: `#A02323`}}>Outher guides</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Speaker_card