import React from 'react';

export default function About(props) {

  return (
    <div className="react-body mt-4 mx-2">
    <div className="container-fluid mr-0">
        <div className="row justify-content-around">
            <div className="col-lg col-sm-12">
                <div className="my-2 p-2">
                    <div className='card my-3 rounded-0 event-card'>
                        <div className='card-body event'>
                            <h1 className='event-title'>关于Galaxea四号机/About Galaxea-4</h1>
                            <p className='event-author'>钱其萩 Qiqiu Qian</p>
                            <p className='event-detail'>欢迎来到Galaxea四号机。尽管定位为个人网站，但也支持作为小型社交平台使用，用户可以直接在网页端上传内容。（虽然我偷偷把新用户注册关了所以现在只有我能上传）<br />
                            网站的布局来源于在UW的Info340项目，是基于JavaScript和React的webapp，尽管之后进行了很多修改，基本只保留了美术元素。<br />
                            网站的本意只是我记录日常的地方，其由来也不过是在网易实习期间摸鱼的产物，不过鉴于现实因素，增加了portfolio，以备不时之需。<br />
                            由于仅供自己使用，网站的功能仍十分简陋，随缘更新。</p>
                            <p className='event-detail'>Welcome to Galaxea-4. Although positioned as a personal website, it supports use as a small social platform, and users can upload content directly on the webapp. (Although I turned off the registration of new users so now only I can upload) <br />
                            The layout of the website comes from my Info340 project at UW. It is a webapp based on JavaScript and React. Although many modifications have been made since then, only the artistic elements are basically retained. <br />
                            The original intention of the website is just a place for me to record my daily life, and it is actually the product of my spare time during my internship at NetEase. However, in view of practical factors, a portfolio has been added in case of need. <br />
                            Since it is only for my own use, the functions of the website are still very simple and may(should) be updated later.</p>
                        </div>
                    </div>
                    <div className='card my-3 rounded-0 event-card'>
                        <div className='card-body event'>
                            <h1 className='event-title'>关于我/About Me</h1>
                            <p className='event-author'>钱其萩 Qiqiu Qian</p>
                            <img className='event-img1' alt='post' src='./img/about.jpeg'></img>
                            <p className='event-detail'>显然，写自我介绍还用发帖自带的格式多少有点摆烂了，不过至少也不算丑吧。<br />
                            我来自中国江苏常州，本科毕业于华盛顿大学大气科学：数据科学专业，现在就读于康奈尔大学的信息科学专业。<br />
                            擅长的技能主要包括数据分析，交互设计，算法和软件开发。主要使用的编程语言有Java，Python，SQL，R，JavaScript和Arduino。<br />
                            爱好游戏，尤其是策略，卡牌和沙盒游戏。我有参与改进过文明6的和而不同mod，也在steam上发布过一些单机游戏的小型mod。<br />
                            除游戏外喜欢旅行，阅读小说和参与桌游。欢迎加我微信号galaxea，或者ins号galaxeaaaa。</p>
                            <p className='event-detail'>Obviously, writing a self-introduction in the format that comes with posting is a bit lame, but at least it's not very ugly... <br />
                            I am from Changzhou, Jiangsu, China. I graduated from the University of Washington with a bachelor's degree in Atmospheric Sciences: Data Science, and now I am in MPS IS program at Cornell University. <br />
                            My skills mainly include data analysis, interactive design, algorithms and software development. The main programming languages ​​used are Java, Python, SQL, R, JavaScript and Arduino. <br />
                            I like games, especially strategy, card and sandbox games. I have participated in improving the Harmony in Diversity mod of Civilization 6, and also released some small mods for some single-player games on Steam. <br />
                            In addition to games, I like traveling, reading novels and playing board games. Welcome to add my WeChat(galaxea), or Instagram(galaxeaaaa) if you have similar hobbies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}