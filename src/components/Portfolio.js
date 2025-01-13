import React from 'react';

export default function Portfolio(props) {

  return (
    <div className="react-body mt-4 mx-2">
    <div className="container-fluid mr-0">
        <div className="row justify-content-around">
            <div className="col-lg col-sm-12">
                <div className="my-2 p-2">
                    <div className='card my-3 rounded-0 event-card'>
                        <div className='card-body event'>
                            <h1 className='event-title'>iName</h1>
                            <h6 className='event-date'>2024 Fall at Cornell INFO 5355</h6>
                            <h6 className='event-date'>with Shreayaa Nadagudy Srinivasan, Chaowei Xiao, Ariel Zou</h6>
                            <h4>Overview</h4>
                            <h6 className='event-detail'>iName helps people learn and remember names correctly, supporting better communication and respect for cultural identity. The project focuses on making social and professional interactions smoother for non-English speakers.</h6>
                            <h4>Poster</h4>
                            <img className='event-img1' alt='post' src='./img/iName/poster.png'></img>
                            <h4>Showcase Video</h4>
                            <h6 className='event-detail'>If the video cannot load, <a href="https://youtu.be/_PM-9N6PkmA?feature=shared" target="_blank" rel="noopener noreferrer">view it here</a>.</h6>
                            <iframe className='event-img1' height="500" src="https://www.youtube.com/embed/_PM-9N6PkmA?si=Au-5fj6ZIBPSR40A" title="iName video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <h4>Prototype</h4>
                            <h6 className='event-detail'>If the prototype cannot load, <a href="https://www.figma.com/proto/lRslyd0UDVnszmOx3pHFdX/iName-Prototype?page-id=761%3A2195&node-id=761-2196&starting-point-node-id=761%3A2196&t=LHO2Dn5cd7yOVfn2-1" target="_blank" rel="noopener noreferrer">view it here</a>.</h6>
                            <iframe className='event-img1' height="1000" src="https://embed.figma.com/proto/lRslyd0UDVnszmOx3pHFdX/iName-Prototype?page-id=761%3A2195&node-id=761-2196&starting-point-node-id=761%3A2196&embed-host=share" title="iName" allowfullscreen></iframe>
                            <h6 className='event-detail'>The project won most socially-impactful award at the showcase. I directed and editted the showcase video, and mainly responsible for the Groups functions of the prototype.</h6>
                        </div>
                    </div>
                    <div className='card my-3 rounded-0 event-card'>
                        <div className='card-body event'>
                            <h1 className='event-title'>Exploring Exoplanets</h1>
                            <h6 className='event-date'>2023 Spring at UW CSE 412</h6>
                            <h6 className='event-date'>with Mike Liang, Yezhen Chen, Victoria Wei</h6>
                            <h4>Overview</h4>
                            <h6 className='event-detail'>This project provides an interactive exploration of exoplanet characteristics through a series of visualizations. Users can analyze and compare exoplanets across multiple dimensions.</h6>
                            <h4>Prototype</h4>
                            <h6 className='event-detail'>The prototype below is a brief one and only shows part of the project. For full version or if the prototype cannot load, <a href="https://observablehq.com/d/012abfdb867a7fc6" target="_blank" rel="noopener noreferrer">view it here</a>.</h6>
                            <iframe width="100%" height="1660" frameborder="0" src="https://observablehq.com/embed/ea1849f6034d4c41@3022?cells=G1des%2Cviewof+exoplanets%2CG1des2%2Cviewof+exoplanets_var%2CG1%2CG2des%2Cviewof+selectPlanetName%2Cplots" title='exoplanet'></iframe>
                        </div>
                    </div>
                    <div className='card my-3 rounded-0 event-card'>
                        <div className='card-body event'>
                            <h1 className='event-title'>Events Share</h1>
                            <h6 className='event-date'>2022 Autumn at UW INFO 340</h6>
                            <h6 className='event-date'>with Danny Yue, Yezhen Chen, Chaowei Xiao</h6>
                            <h4>Overview</h4>
                            <h6 className='event-detail'>This webapp is a place for users to share events. Users can log in to the website, create a card for an event and publish it. All published cards will be displayed on the homepage, and all users can browse these events and save interesting ones to their own list. Besides, users have their own profile, where they can upload personal info and private records that only themselves can see.</h6>
                            <h4>Webapp</h4>
                            <h6 className='event-detail'>If the webapp cannot load, <a href="https://event-map-group-ba8.web.app" target="_blank" rel="noopener noreferrer">view it here</a>.</h6>
                            <iframe width="100%" height="1300" frameborder="0" src="https://event-map-group-ba8.web.app" title='eventsshare'></iframe>
                            <h6 className='event-detail'>Our team become good friends after this project, and the project is also the predecessor of Galaxea-4. I made the home and plan pages of the app.</h6>
                        </div>
                    </div>
                    <div className='card my-3 rounded-0 event-card'>
                        <div className='card-body event'>
                            <h1 className='event-title'>Badminter</h1>
                            <h6 className='event-date'>2021 Summer at UW INFO 200</h6>
                            <h6 className='event-date'>with Haonan Zheng, Alvin Zhu</h6>
                            <h4>Overview</h4>
                            <h6 className='event-detail'>Badminter addresses the challenge of finding suitable badminton opponents and booking available courts easily. It helps players connect with others at their skill level, reserve courts nearby, and engage with the badminton community. For gym managers, it simplifies court management and improves customer interactions.</h6>
                            <h4>Poster</h4>
                            <img className='event-img1' alt='post' src='./img/Badminter/poster.png'></img>
                            <h4>Prototype</h4>
                            <h6 className='event-detail'>If the prototype cannot load, <a href="https://www.figma.com/proto/I79jzDBlMOrcuCzzMI8nYg/Badminter-1.0?page-id=0%3A1&node-id=47-697&viewport=241%2C48%2C0.15&scaling=scale-down&starting-point-node-id=47%3A697&t=lXvifBIQrglhb1hP-1" target="_blank" rel="noopener noreferrer">view it here</a>.</h6>
                            <iframe className='event-img1' height="1000" src="https://embed.figma.com/proto/I79jzDBlMOrcuCzzMI8nYg/Badminter-1.0?page-id=0%3A1&node-id=47-697&viewport=241%2C48%2C0.15&scaling=scale-down&starting-point-node-id=47%3A697&embed-host=share" title="Badminter" allowfullscreen></iframe>
                            <h6 className='event-detail'>I made the poster, and mainly responsible for the low fidelity and mid fidelity prototype. As the first HCI design I made, it has some shortcomings, but worth remembering.</h6>
                        </div>
                    </div>
                    <div className='card my-3 rounded-0 event-card'>
                        <div className='card-body event'>
                            <h1 className='event-title'>Pokemon</h1>
                            <h6 className='event-date'>2021 Winter at UW CSE 163</h6>
                            <h6 className='event-date'>Individual project</h6>
                            <h4>Overview</h4>
                            <h6 className='event-detail'>This project uses BeautifulSoup to create a csv pokedex from the offical website, and provides interactive exploration of the data through three visualizations.</h6>
                            <h4>Code</h4>
                            <h6 className='event-detail'> <a href="https://colab.research.google.com/drive/10W6alwdrNgz3jgWfK6SFTvBgfy1Tproj?usp=sharing" target="_blank" rel="noopener noreferrer">View code here</a>.</h6>
                            <h4>Interface</h4>
                            <h6 className='event-detail'>If the interface cannot load, <a href="https://galaxeaa-pokemon.hf.space" target="_blank" rel="noopener noreferrer">view it here</a>.</h6>
                            <iframe className='event-img1' width="850" height="750" frameborder="0" src="https://galaxeaa-pokemon.hf.space" title='pokemon' allowfullscreen></iframe>
                            <h6 className='event-detail'>This is my first university project and I really like the topic I chose. The original project is just code, and later I deployed the interface.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}