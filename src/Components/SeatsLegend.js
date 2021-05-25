import { Link } from 'react-router-dom'
import { Space, Button, Typography } from 'antd';

const SeatsLegend = ({ onBooking }) => {

    const { Text } = Typography;

    return (
        <div className="seats-legend-box space-align-container" style={{justifyContent: 'space-between'}}>
            <div>
                <div></div>
                <Text>Liczba miejsc:</Text>
            </div>
            <div>
                <div style={{backgroundColor: '#222'}}></div>
                <Text>Liczba miejsc:</Text>
            </div>
            <div>
                <div style={{backgroundColor: 'orange'}}></div>
                <Text>Liczba miejsc:</Text>
            </div>
            <div className="space-align-block">
                <Space align="center">
                    <Link to="/overview">
                        <Button block size="large" onClick={onBooking}>
                            Rezerwuj
                        </Button>
                    </Link>
                </Space>
            </div>
        </div>
    );
}
 
export default SeatsLegend;