import { ConfigProvider, Layout, Select } from 'antd';
import React, { useState } from 'react';

import CustomContent from './CustomContent';

const { Header, Footer,  Content } = Layout;



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

const footerStyle = {
  textAlign: 'center',
  color: 'black',
  backgroundColor: 'rgb(245, 245, 245)',
  borderTop: '1px solid rgba(0, 21, 41, 0.14)',
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  height: 64,
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
            Select Language: &nbsp;

            <Select
              defaultValue="en"
              style={{ width: 120 }}
              onChange={(value) => setLocale(value)}
              options={[
                { label: 'English', value: 'en' },
                { label: 'French', value: 'fr' },
                { label: 'Spanish', value: 'es'}
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
