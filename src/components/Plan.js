import React, { useState } from "react";
import Form from "./Form";
import EventCard from "./EventCard";

import {getDatabase, ref as dbRef, push as firebasePush} from 'firebase/database';

export default function Plan(props) {
    const [eventObj,setEventObj] = useState({title:'这是标题...',date:'',author:props.currentUser.displayName,detail:'添加正文...'});

    const getForm = async (formObj,done) => {
        setEventObj(formObj);
        if (done) {
            const db = getDatabase();
            const events = dbRef(db,'Events');
            
            // const storage = getStorage();
            // const imgRef = storageRef(storage,"/userImgs/"+props.currentUser.uid+".jpg")
            // await uploadBytes(imgRef,imgFile);
            // const downloadUrl = await getDownloadURL(imgRef);

            // //await updateProfile(props.currentUser, {photoURL:downloadUrl})
            // //const userDbref = dbRef(getDatabase(),"userData/"+currentUser.uid+"imgUrl");
            // //firebaseSet(userDbRef, downloadUrlString);

            firebasePush(events,formObj);
        }
    }

    // const getForm = (formObj,done) => {
    //     setEventObj(formObj);
    //     if (done) {
    //         const db = getDatabase();
    //         const events = dbRef(db,'Events');
            
    //         const storage = getStorage();
    //         const imgRef = storageRef(storage,"/userImgs/"+props.currentUser.uid+".jpg")
    //         uploadBytes(imgRef,imgFile)
    //             .then(() => {
    //                 getDownloadURL(imgRef)
    //                     .then((downloadUrl) => {
    //                         console.log(downloadUrl);
    //                     });
    //             });

    //         firebasePush(events,formObj);
    //     }
    // }

    return (
    <div className="react-body">
        <div className="container mt-4">
            <div className="row">
                <Form currentUser={props.currentUser} getFormCallback={getForm}/>
                <div className="col-xl-4">
                <label className="form-label">预览：</label>
                    <EventCard evtObj={eventObj}/>
                </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto mt-4 mb-4">
                <button className="btn btn-danger ms-2" onClick={props.signOutCallbk}>注销</button>
            </div>
        </div>
    </div>
    );
}