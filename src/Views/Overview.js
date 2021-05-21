import { Space, Typography } from 'antd';

const { Title, Text } = Typography;

const Overview = () => {
    return (
        <div>
            <Title level={2} style={{fontWeight: 700}}>Twoja rezerwacja przebiegła pomyślnie!</Title>

            <Space direction='vertical' size={0} style={{marginBottom: '2em'}}>
                <Text style={{fontSize: '24px', marginBottom: 0}}>Wybrałeś miejsca:</Text>

                <Text style={{fontSize: '16px'}}>-rząd x1, miejsce y1 (id1)</Text>
                <Text style={{fontSize: '16px'}}>-rząd x2, miejsce y2 (id2)</Text>
                <Text style={{fontSize: '16px'}}>-rząd x3, miejsce y3 (id3)</Text>
            </Space>

            <Title level={3} style={{fontWeight: 700}}>Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.</Title>
        </div>
    );
}
 
export default Overview;