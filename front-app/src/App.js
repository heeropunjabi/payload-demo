import { ConfigProvider, Layout, Select, Space } from 'antd';
import React, { useState } from 'react';

import CustomContent from './CustomContent';

const { Header, Footer, Sider, Content } = Layout;



const headerStyle = {
  textAlign: 'center',
  color: 'black',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: 'rgb(245, 245, 245)',
  borderBottom: '1px solid rgba(0, 21, 41, 0.14)',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
};
const contentStyle = {
  textAlign: 'center',
  minHeight: '85vh',
  
  color: 'black',
  backgroundColor: 'white',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: 'black',
  backgroundColor: 'white',
  borderTop: '1px solid rgba(0, 21, 41, 0.14)',
};


function App() {
  const [locale, setLocale] = useState('en');


  

  return (
    <ConfigProvider locale={locale}>
    <Layout>
      <Header style={headerStyle}>
        <div>
          <img src="./wci.png" alt="logo" style={{
            position: 'absolute',
            left: '100px',
            top: '7px',
            width: '75px',
            height: '50px',
            }} />
            <Select
              defaultValue="en"
              style={{ width: 120 }}
              onChange={(value) => setLocale(value)}
              options={[
                { label: 'English', value: 'en' },
                { label: 'French', value: 'fr' },
              ]}
            />
          

        </div>
      </Header>
      <Content style={contentStyle}>
          <CustomContent locale={locale} />
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
      </Layout>
      </ConfigProvider>
  );
}

export default App;
