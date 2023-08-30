import React, { useState } from "react";
import EventCard from "./EventCard";
import { getDatabase, ref, set as firebaseSet } from 'firebase/database';

export default function Home(props) {

    const [postData,setPostData] = useState(props.postData);

    const addCard = (title) => {

        const updateCards = postData.map((card) => {
            if (card.title !== title) {
              return card;
            }
            const update = card;
            update[props.currentUser.uid] = true;
            return update;
        })
        setPostData(updateCards);
        const db = getDatabase();
        const events = ref(db, 'Events');
        firebaseSet(events,updateCards);
    }
    
    const publicPosts = props.postData.map((post) => {
        
        if (!post[props.currentUser.uid]){
            return (
                <EventCard evtObj={post} isSaved={false} key={post.id} evtBtnCallbk={addCard}/>
            )
        }
    })

    return (
        <div className="react-body mt-4 mx-2">
            <div className="container-fluid mr-0">
                <div className="row justify-content-around">
                    <div className="col-lg col-sm-12">
                        <div className="my-2 p-2">
                            {publicPosts}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}