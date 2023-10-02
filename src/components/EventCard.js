import React from 'react';
export default function EventCard(props) {
    const evtObj = props.evtObj;
    function titleCase(str) {
        str = str.toLowerCase();
        let wordArr = str.split(' ');
        // eslint-disable-next-line
        wordArr = wordArr.map((word) => {
            if (word[0]!== undefined) {
            return (word[0].toUpperCase() + word.substring(1));
            }
        })
        return wordArr.join(' ');
    }
    
    if (evtObj.imageCount === 1) {
        return (
            <div className='card my-3 rounded-0 event-card'>
                <div className='card-body event'>
                    <h2 className='event-title'>{titleCase(evtObj.title)}</h2>
                    <p className='event-author'>{evtObj.author}</p>
                    <p className='event-date'>{evtObj.date}</p>
                    <img className='event-img1' alt='post' src={evtObj.imageUrl || './img/otterlarger.png'}></img>
                    <p className='event-detail'>{evtObj.detail}</p>
                </div>
            </div>
        )
    } else if (evtObj.imageCount > 1 & evtObj.imageCount < 4) {
        return (
            <div className='card my-3 rounded-0 event-card'>
                <div className='card-body event'>
                    <h2 className='event-title'>{titleCase(evtObj.title)}</h2>
                    {/* <p className='event-author'>{evtObj.author}</p> */}
                    <p className='event-date'>{evtObj.date}</p>
                    <img className='event-img' alt='post' src={evtObj.imageUrl || './img/otterlarger.png'}></img>
                    <img className='event-img' alt='post' src={evtObj.imageUrl2 || './img/otterlarger.png'}></img>
                    <img className='event-img' alt='post' src={evtObj.imageUrl3 || './img/otterlarger.png'}></img>
                    <p className='event-detail'>{evtObj.detail}</p>
                </div>
            </div>
        );
    } else if (evtObj.imageCount > 3 & evtObj.imageCount < 7) {
        return (
            <div className='card my-3 rounded-0 event-card'>
                <div className='card-body event'>
                    <h2 className='event-title'>{titleCase(evtObj.title)}</h2>
                    {/* <p className='event-author'>{evtObj.author}</p> */}
                    <p className='event-date'>{evtObj.date}</p>
                    <img className='event-img' alt='post' src={evtObj.imageUrl || './img/otterlarger.png'}></img>
                    <img className='event-img' alt='post' src={evtObj.imageUrl2 || './img/otterlarger.png'}></img>
                    <img className='event-img' alt='post' src={evtObj.imageUrl3 || './img/otterlarger.png'}></img>
                    <img className='event-img' alt='post' src={evtObj.imageUrl4 || './img/otterlarger.png'}></img>
                    <img className='event-img' alt='post' src={evtObj.imageUrl5 || './img/otterlarger.png'}></img>
                    <img className='event-img' alt='post' src={evtObj.imageUrl6 || './img/otterlarger.png'}></img>
                    <p className='event-detail'>{evtObj.detail}</p>
                </div>
            </div>
        );
    }  
    else if (evtObj.imageCount > 6) {
        return (
                <div className='card my-3 rounded-0 event-card'>
                    <div className='card-body event'>
                        <h2 className='event-title'>{titleCase(evtObj.title)}</h2>
                        {/* <p className='event-author'>{evtObj.author}</p> */}
                        <p className='event-date'>{evtObj.date}</p>
                        <img className='event-img' alt='post' src={evtObj.imageUrl || './img/otterlarger.png'}></img>
                        <img className='event-img' alt='post' src={evtObj.imageUrl2 || './img/otterlarger.png'}></img>
                        <img className='event-img' alt='post' src={evtObj.imageUrl3 || './img/otterlarger.png'}></img>
                        <img className='event-img' alt='post' src={evtObj.imageUrl4 || './img/otterlarger.png'}></img>
                        <img className='event-img' alt='post' src={evtObj.imageUrl5 || './img/otterlarger.png'}></img>
                        <img className='event-img' alt='post' src={evtObj.imageUrl6 || './img/otterlarger.png'}></img>
                        <img className='event-img' alt='post' src={evtObj.imageUrl7 || './img/otterlarger.png'}></img>
                        <img className='event-img' alt='post' src={evtObj.imageUrl8 || './img/otterlarger.png'}></img>
                        <img className='event-img' alt='post' src={evtObj.imageUrl9 || './img/otterlarger.png'}></img>
                        <p className='event-detail'>{evtObj.detail}</p>
                    </div>
                </div>
        );
    } else {
        return (
            <div className='card my-3 rounded-0 event-card'>
                <div className='card-body event row'>
                    <h2 className='event-title'>{titleCase(evtObj.title)}</h2>
                    <p className='event-author'>{evtObj.author}</p>
                    <p className='event-date'>{evtObj.date}</p>
                    <p className='event-detail'>{evtObj.detail}</p>
                </div>
            </div>
        )
    }
}