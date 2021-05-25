import { Space, Typography } from 'antd';
import { useEffect } from 'react';

const { Title, Text } = Typography;

const Overview = () => {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    useEffect(() => {
        console.log(selectedSeats);
    }, [selectedSeats]);
    
    return (
        <div>
            <Title level={2} style={{fontWeight: 700}}>Twoja rezerwacja przebiegła pomyślnie!</Title>

            <Space direction='vertical' size={0} style={{marginBottom: '2em'}}>
                <Text style={{fontSize: '24px', marginBottom: 0}}>Wybrałeś miejsca:</Text>

                {selectedSeats && selectedSeats.map(seat => (
                    <Text key={seat.id} style={{fontSize: '16px'}}>-rząd {seat.cords.x}, miejsce {seat.cords.y} ({seat.id})</Text>
                ))}
            </Space>

            <Title level={3} style={{fontWeight: 700}}>Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.</Title>
        </div>
    );
}
 
export default Overview;