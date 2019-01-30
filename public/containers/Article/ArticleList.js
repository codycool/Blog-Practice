import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { List, Avatar, Icon } from 'antd';

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

ReactDOM.render(
  <div style={{ margin: 50 }}>
  <List
    itemLayout="vertical"
    size="large"
    split='false'
    dataSource={listData}
    //footer={<div><b>ant design</b> footer part</div>}
    renderItem={item => (
      <div style={{
        boxShadow: '3px 3px 7px #9a9292', minWidth: '400px', maxWidth: '700px', marginTop: 50, border: '1px solid ', padding: 20, borderColor: 'white'}}>
      <List.Item
        key={item.title}
        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
        //extra={<img width={200} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        
      </List.Item>
        <img height='250px' width='100%' alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
        {item.content}
      </div>
    )}
  />
  </div>,
  document.getElementById('container')
);