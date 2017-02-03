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
    </Center>,
    <Center alt>
      <h1>Tech 2017</h1>
      <h3>www.chocoluffy.com/ADA2016/</h3>
    </Center>,
    <Center wide >
      <img src="https://ww4.sinaimg.cn/large/006y8lVagy1fcds0614pej30rq08iaax.jpg" width='100%' />
    </Center>,
    <Center wide>
      <img src="https://ww4.sinaimg.cn/large/006y8lVagy1fcds0614pej30rq08iaax.jpg" width='100%' style={{ opacity: .25 }} />
      <div style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, height: '100vh' }}>
        <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }}>
          <h1 style={{ alignSelf: 'center' }}>添加ADA头像</h1>
        </div>
      </div>
    </Center>,
    <Center wide >
      <img src="https://ww2.sinaimg.cn/large/006y8lVagy1fcds6868i0j30wc1jw44r.jpg" height='100%' />
    </Center>,
    <Center wide>
      <img src="https://ww2.sinaimg.cn/large/006y8lVagy1fcds6868i0j30wc1jw44r.jpg" height='100%' style={{ opacity: .25 }} />
      <div style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, height: '100vh' }}>
        <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }}>
          <h1 style={{ alignSelf: 'center' }}>adaize.uoftada.com</h1>
        </div>
      </div>
    </Center>,
    <Center wide >
      <img src="https://ww3.sinaimg.cn/large/006y8lVagy1fcdtj0xfb6j31bg150wls.jpg" height='100%' />
    </Center>,
    <Center wide>
      <img src="https://ww3.sinaimg.cn/large/006y8lVagy1fcdtj0xfb6j31bg150wls.jpg" height='100%' style={{ opacity: .25 }} />
      <div style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, height: '100vh' }}>
        <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }}>
          <h1 style={{ alignSelf: 'center' }}>ADA Blog</h1>
        </div>
      </div>
    </Center>,
    <Center wide >
      <img src="https://ww1.sinaimg.cn/large/006y8lVagy1fcdsaylembj31kw0xrguf.jpg" height='100%' />
    </Center>,
    <Center wide>
      <img src="https://ww1.sinaimg.cn/large/006y8lVagy1fcdsaylembj31kw0xrguf.jpg" height='100%' style={{ opacity: .25 }} />
      <div style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, height: '100vh' }}>
        <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }}>
          <h1 style={{ alignSelf: 'center' }}>AirLoft学习小组</h1>
        </div>
      </div>
    </Center>,
    <Center alt>
      <h1>One more thing...</h1>
    </Center>,
    <Center wide >
      <img src="https://ww3.sinaimg.cn/large/006y8lVagy1fcdsg5iv2rj31hc0u0jss.jpg" width='100%' />
    </Center>,
    <Center wide>
      <img src="https://ww3.sinaimg.cn/large/006y8lVagy1fcdsg5iv2rj31hc0u0jss.jpg" width='100%' style={{ opacity: .25 }} />
      <div style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, height: '100vh' }}>
        <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }}>
          <h1 style={{ alignSelf: 'center' }}>鲸语whalesper</h1>
        </div>
      </div>
    </Center>,
    ...makeProgression({ alt: true }, 'ADA 2016', [
      'UT助手',
      'Automation',
      'IOS'
    ]),
    ...makeProgression({ alt: true }, 'ADA 2017', [
      'Social',
      'Machine Learning'
    ]),
    ...makeProgression({ alt: true }, 'Todos', [
      '鲸语 | 树洞 - Luffy',
      '微信头像story teller - Luffy Arie',
      'Memory chatbot - Arie',
      '一次coding算法比赛',
      '一次海报/摄影/视频展',
      '还有各种好玩的活动呀喂٩(´0`)۶',
      '...'
    ])
  ];
}
