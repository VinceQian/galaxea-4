import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {getStorage, ref as storageRef, uploadBytes, getDownloadURL} from 'firebase/storage';

export default function Form(props) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState(props.currentUser.displayName);
    const [detail, setDetail] = useState('');
    const [imageFile, setImageFile] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imageFile2, setImageFile2] = useState('');
    const [imageUrl2, setImageUrl2] = useState('');
    const [imageFile3, setImageFile3] = useState('');
    const [imageUrl3, setImageUrl3] = useState('');
    const [imageFile4, setImageFile4] = useState('');
    const [imageUrl4, setImageUrl4] = useState('');
    const [imageFile5, setImageFile5] = useState('');
    const [imageUrl5, setImageUrl5] = useState('');
    const [imageFile6, setImageFile6] = useState('');
    const [imageUrl6, setImageUrl6] = useState('');
    const [imageFile7, setImageFile7] = useState('');
    const [imageUrl7, setImageUrl7] = useState('');
    const [imageFile8, setImageFile8] = useState('');
    const [imageUrl8, setImageUrl8] = useState('');
    const [imageFile9, setImageFile9] = useState('');
    const [imageUrl9, setImageUrl9] = useState('');
    const [imageCount, setImageCount] = useState(0);
    const [date, setDate] = useState(new Date().toISOString().slice(0,10));
    const navigateTo = useNavigate();

    const handleUserInfo = (event) => {
        if (event.target.checked) {
            setAuthor("一位不愿透露姓名的？同学");
        } else {
            setAuthor(props.currentUser.displayName);
        }
        props.getFormCallback({title,author,date,detail,imageUrl,imageUrl2,imageUrl3,imageUrl4,imageUrl5,imageUrl6,imageUrl7,imageUrl8,imageUrl9,imageCount},false);
    } 

    const handleName = (event) => {
        setTitle(event.target.value);
        props.getFormCallback({title,author,date,detail,imageUrl,imageUrl2,imageUrl3,imageUrl4,imageUrl5,imageUrl6,imageUrl7,imageUrl8,imageUrl9,imageCount},false);
    }

    const handleDate = (event) => {
        setDate(event.target.value);
        props.getFormCallback({title,author,date,detail,imageUrl,imageUrl2,imageUrl3,imageUrl4,imageUrl5,imageUrl6,imageUrl7,imageUrl8,imageUrl9,imageCount},false);
    }

    const handleIntro = (event) => {
        setDetail(event.target.value);
        props.getFormCallback({title,author,date,detail,imageUrl,imageUrl2,imageUrl3,imageUrl4,imageUrl5,imageUrl6,imageUrl7,imageUrl8,imageUrl9,imageCount},false);
    }

    const handleImg = (event) => {
        if (event.target.files.length >0 && event.target.files[0]) {     
            const imgFile = event.target.files[0];
            setImageFile(imgFile);
            setImageUrl(URL.createObjectURL(imgFile));
        } else setImageUrl('');

        if (event.target.files.length >1 && event.target.files[1]) {     
            const imgFile = event.target.files[1];
            setImageFile2(imgFile);
            setImageUrl2(URL.createObjectURL(imgFile));
        } else setImageUrl2('');

        if (event.target.files.length >2 && event.target.files[2]) {     
            const imgFile = event.target.files[2];
            setImageFile3(imgFile);
            setImageUrl3(URL.createObjectURL(imgFile));
        } else setImageUrl3('');
        if (event.target.files.length >3 && event.target.files[3]) {     
            const imgFile = event.target.files[3];
            setImageFile4(imgFile);
            setImageUrl4(URL.createObjectURL(imgFile));
        } else setImageUrl4('');
        if (event.target.files.length >4 && event.target.files[4]) {     
            const imgFile = event.target.files[4];
            setImageFile5(imgFile);
            setImageUrl5(URL.createObjectURL(imgFile));
        } else setImageUrl5('');
        if (event.target.files.length >5 && event.target.files[5]) {     
            const imgFile = event.target.files[5];
            setImageFile6(imgFile);
            setImageUrl6(URL.createObjectURL(imgFile));
        } else setImageUrl6('');
        if (event.target.files.length >6 && event.target.files[6]) {     
            const imgFile = event.target.files[6];
            setImageFile7(imgFile);
            setImageUrl7(URL.createObjectURL(imgFile));
        } else setImageUrl7('');
        if (event.target.files.length >7 && event.target.files[7]) {     
            const imgFile = event.target.files[7];
            setImageFile8(imgFile);
            setImageUrl8(URL.createObjectURL(imgFile));
        } else setImageUrl8('');
        if (event.target.files.length >8 && event.target.files[8]) {     
            const imgFile = event.target.files[8];
            setImageFile9(imgFile);
            setImageUrl9(URL.createObjectURL(imgFile));
        } else setImageUrl9('');
        setImageCount(event.target.files.length);
        props.getFormCallback({title,author,date,detail,imageUrl,imageUrl2,imageUrl3,imageUrl4,imageUrl5,imageUrl6,imageUrl7,imageUrl8,imageUrl9,imageCount},false);
    }

    const handleUpload = async(event)=>{
        event.preventDefault(); 
        if (imageUrl) {
            const storage = getStorage();
            const currentDate = new Date();
            let imgRef = storageRef(storage,"users/"+currentDate.getTime()+"1");
            uploadBytes(imgRef,imageFile)
                .then(() => {
                    getDownloadURL(imgRef)
                        .then((downloadUrl) => {
                            console.log("img1: "+downloadUrl);
                            setImageUrl(downloadUrl);
                        });
                }).then(() => {
                    if (imageUrl2) {
                        imgRef = storageRef(storage,"users/"+currentDate.getTime()+"2");
                        uploadBytes(imgRef,imageFile2)
                            .then(() => {
                                getDownloadURL(imgRef)
                                    .then((downloadUrl) => {
                                        console.log("img2: "+downloadUrl);
                                        setImageUrl2(downloadUrl);
                                    });
                            }).then(() => {
                                if (imageUrl3) {
                                    imgRef = storageRef(storage,"users/"+currentDate.getTime()+"3");
                                    uploadBytes(imgRef,imageFile3)
                                        .then(() => {
                                            getDownloadURL(imgRef)
                                                .then((downloadUrl) => {
                                                    console.log("img3: "+downloadUrl);
                                                    setImageUrl3(downloadUrl);
                                                });
                                        }).then(() => {
                                            if (imageUrl4) {
                                                imgRef = storageRef(storage,"users/"+currentDate.getTime()+"4");
                                                uploadBytes(imgRef,imageFile4)
                                                    .then(() => {
                                                        getDownloadURL(imgRef)
                                                            .then((downloadUrl) => {
                                                                console.log("img4: "+downloadUrl);
                                                                setImageUrl4(downloadUrl);
                                                            });
                                                    }).then(() => {
                                                        if (imageUrl5) {
                                                            imgRef = storageRef(storage,"users/"+currentDate.getTime()+"5");
                                                            uploadBytes(imgRef,imageFile5)
                                                                .then(() => {
                                                                    getDownloadURL(imgRef)
                                                                        .then((downloadUrl) => {
                                                                            console.log("img5: "+downloadUrl);
                                                                            setImageUrl5(downloadUrl);
                                                                        });
                                                                }).then(() => {
                                                                    if (imageUrl6) {
                                                                        imgRef = storageRef(storage,"users/"+currentDate.getTime()+"6");
                                                                        uploadBytes(imgRef,imageFile6)
                                                                            .then(() => {
                                                                                getDownloadURL(imgRef)
                                                                                    .then((downloadUrl) => {
                                                                                        console.log("img6: "+downloadUrl);
                                                                                        setImageUrl6(downloadUrl);
                                                                                    });
                                                                            }).then(() => {
                                                                                if (imageUrl7) {
                                                                                    imgRef = storageRef(storage,"users/"+currentDate.getTime()+"7");
                                                                                    uploadBytes(imgRef,imageFile7)
                                                                                        .then(() => {
                                                                                            getDownloadURL(imgRef)
                                                                                                .then((downloadUrl) => {
                                                                                                    console.log("img7: "+downloadUrl);
                                                                                                    setImageUrl7(downloadUrl);
                                                                                                });
                                                                                        }).then(() => {
                                                                                            if (imageUrl8) {
                                                                                                imgRef = storageRef(storage,"users/"+currentDate.getTime()+"8");
                                                                                                uploadBytes(imgRef,imageFile8)
                                                                                                    .then(() => {
                                                                                                        getDownloadURL(imgRef)
                                                                                                            .then((downloadUrl) => {
                                                                                                                console.log("img8: "+downloadUrl);
                                                                                                                setImageUrl8(downloadUrl);
                                                                                                            });
                                                                                                    }).then(() => {
                                                                                                        if (imageUrl9) {
                                                                                                            imgRef = storageRef(storage,"users/"+currentDate.getTime()+"9");
                                                                                                            uploadBytes(imgRef,imageFile9)
                                                                                                                .then(() => {
                                                                                                                    getDownloadURL(imgRef)
                                                                                                                        .then((downloadUrl) => {
                                                                                                                            console.log("img9: "+downloadUrl);
                                                                                                                            setImageUrl9(downloadUrl);
                                                                                                                        });
                                                                                                                })
                                                                                                        }
                                                                                                    })
                                                                                            }
                                                                                        })
                                                                                }
                                                                            })
                                                                    }
                                                                })
                                                        }
                                                    })
                                            }
                                        })
                                }
                            })
                    }
                })
        }
    }

    const handleSubmit = (event) => {
        props.getFormCallback({title,author,date,detail,imageUrl,imageUrl2,imageUrl3,imageUrl4,imageUrl5,imageUrl6,imageUrl7,imageUrl8,imageUrl9,imageCount},true);
        event.preventDefault(); 
        navigateTo('/home');
    }

    return(
        <div className="col-xl-8">
            <form className="row g-3" onSubmit={handleSubmit}>
                
                <div className="col-12">
                    <label htmlFor="event-input" className="form-label required-field">标题：</label>
                    <input type="text" className="form-control" id="event-input" 
                    placeholder="这是标题..." value={title} onChange={handleName} required />
                </div>

                {/* <div className="col-3 align-self-end form-check form-switch">
                    <input className="form-check-input" type='checkbox' role='switch' id='info-input' onChange={handleUserInfo}></input>
                    <label className='form-check-label' for='info-input'>匿名</label>
                </div> */}

                <div className="col-md-4">
                    <label htmlFor="date-input" className="form-label required-field">日期：</label>
                    <input type="date" id="date-input" className="form-control" 
                    value={date} onChange={handleDate} required />
                </div>

                <div className="col-12">
                    <label htmlFor="intro-input" className="form-label required-field">正文：</label>
                    <textarea className="form-control" id="intro-input" placeholder="添加正文..." 
                    value={detail} onChange={handleIntro} required ></textarea>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto mt-4 mb-3">
                    <label htmlFor="background-image" className="form-label btn btn-light">添加图片</label>
                    <input type="file" className="form-control d-none" id="background-image" onChange={handleImg} multiple/>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto mt-4 mb-4">
                    <button className="btn btn-secondary" type="button" onClick={handleUpload}>上传</button>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto mt-4 mb-4">
                    <button className="btn btn-dark" type="submit">发布！</button>
                </div>
            </form>
        </div>
    )
}