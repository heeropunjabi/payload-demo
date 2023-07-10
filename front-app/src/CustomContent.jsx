import React, { useEffect } from 'react';
import { Skeleton } from 'antd';

export default function CustomContent({ locale }) {
    
    console.log('locale', locale);
    const [content, setContent] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    const getLabel = (label) => (content[label] || label)
    
    
    useEffect(() => { 
        fetch("http://localhost:3000/api/landingPage?locale=" + locale).then(res => res.json()).then(data => {
            console.log('data', data);
            const docs = data.docs;
            const tempContent = {};
            for (let i = 0; i < docs.length; i++) {
                if (docs[i]["_status"] === "published") {
                tempContent[docs[i].label] = docs[i].displayed || docs[i].label 
                }
                
                
            }
            console.log('tempContent', tempContent);
            setContent(tempContent);

        }).finally(() => { 
            setLoading(false);
        });
    }, [locale]);
    return (
        loading ? <Skeleton active /> :
        <div>
            <h3> { getLabel("LANDING_PAGE_HEADER") } </h3>
            <h4>{ getLabel("LANDING_PAGE_HEADER_2") }</h4>
                <p> { getLabel("LANDING_PAGE_PARAGRAPH") }</p>
        </div>
    )
}