import React from 'react';
import Center from '../components/Center';
import Image from '../components/Image';

function makeProgression(props, title, items) {
  return [
    ...items.map((activeItem, activeIndex) =>
      <Center wide {...props}>
        <h3>{title}</h3>
        <ul>
          {items.map((item, i) =>
            <li
              key={i}
              style={{ opacity: i === activeIndex ? 1 : .5 }}
            >
              {item}
            </li>
          )}
        </ul>
      </Center>
    )
  ];
}

export default function getSlides() {
  return [
    <Center alt>
      <h1>Tech</h1>
    </Center>,
    <Center alt>
      <h1>Fun</h1>
    </Center>,
    <Center wide >
      <img src={require('./ada.gif')} width='100%' />
    </Center>,
    <Center wide >
      <img src={require('./game.jpg')} height='100%' />
    </Center>,
    <Center wide >
      <img src={require('./ut1.jpg')} style={{position: 'absolute', left: 0, top: 0, width: '100vw', height: '100vh'}} />
    </Center>,
    <Center wide >
      <img src={require('./ut2.jpg')} style={{position: 'absolute', left: 0, top: 0, width: '100vw', height: '100vh'}} />
    </Center>,
    <Center wide >
      <img src={require('./ut4.jpg')} style={{position: 'absolute', left: 0, top: 0, width: '100vw', height: '100vh'}} />
    </Center>,
    <Center wide >
      <img src={require('./ut6.jpg')} style={{position: 'absolute', left: 0, top: 0, width: '100vw', height: '100vh'}} />
    </Center>,
    <Center wide >
      <img src={require('./ut3.jpg')} style={{position: 'absolute', left: 0, top: 0, width: '100vw', height: '100vh'}} />
    </Center>,
    <Center wide >
      <img src={require('./utcapture.jpg')} width='100%' />
    </Center>,
    <Center wide >
      <img src={require('./utcapture3.jpg')} width='100%' />
    </Center>,
    <div style={{
      width: '100vw',
      height: '100vh',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        width: '50vw',
        height: '100vh',
        color: '#181818',
        backgroundColor: '#f8f8f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2>UT助手</h2>
      </div>
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '50vw',
        height: '100vh',
        color: '#f8f8f8',
        backgroundColor: '#181818' ,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2>ADA</h2>
      </div>
    </div>,
    <Center wide >
      <img src={require('./uttime.jpg')} width='100%' />
    </Center>,
    <Center wide>
      <img src={require('./uttime.jpg')} width='100%' style={{ opacity: .25 }} />
      <div style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, height: '100vh' }}>
        <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }}>
          <h1 style={{ alignSelf: 'center' }}>查询所有课程时间</h1>
        </div>
      </div>
    </Center>,
    <Center wide >
      <img src={require('./utlocation.png')} width='100%' />
    </Center>,
    <Center wide>
      <img src={require('./utlocation.png')} width='100%' style={{ opacity: .25 }} />
      <div style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, height: '100vh' }}>
        <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }}>
          <h1 style={{ alignSelf: 'center' }}>查询多大建筑物的位置</h1>
        </div>
      </div>
    </Center>,
    <Center wide >
      <img src={require('./utlibrary.jpg')} width='100%' />
    </Center>,
    <Center wide>
      <img src={require('./utlibrary.jpg')} width='100%' style={{ opacity: .25 }} />
      <div style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, height: '100vh' }}>
        <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }}>
          <h1 style={{ alignSelf: 'center' }}>查询图书馆开放时间</h1>
        </div>
      </div>
    </Center>,
    <Center wide >
      <img src={require('./utarticle.jpg')} width='85%' />
    </Center>,
    <Center wide>
      <img src={require('./utarticle.jpg')} width='85%' style={{ opacity: .25 }} />
      <div style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, height: '100vh' }}>
        <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }}>
          <h1 style={{ alignSelf: 'center' }}>匹配小助手历史文章</h1>
        </div>
      </div>
    </Center>,
    <Center alt>
      <h1>Automation</h1>
    </Center>,
    <Center alt>
      <h1>IOS(location)</h1>
    </Center>,
    ...makeProgression({ alt: true }, 'Todos', [
      '微信JSSDK - Justin',
      'uoftada.com添加博客系统 - Arie',
      'UT助手添加ADA logo - Arie/水/皮卡',
      '寻找附近餐馆IOS - Jerry',
      '一次coding算法比赛',
      '一次海报/摄影/视频展',
      '...'
    ]),
    ...makeProgression({ alt: true }, 'Summary', [
      'Fun',
      'Missions(UT助手,Automation,IOS)',
      'How'
    ]),
    <Center wide alt>
      <img src={require('./onepiece.jpg')} style={{position: 'absolute', left: 0, top: 0, width: '100vw', height: '100vh'}} />
    </Center>
  ];
}
