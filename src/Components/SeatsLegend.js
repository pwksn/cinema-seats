import Seat from "./Seat";
import { Link } from 'react-router-dom'
import { Space, Button, Typography, InputNumber, Checkbox } from 'antd';

const SeatsLegend = ({ onBooking }) => {
    return (
        <div className="seats-legend-box space-align-container" style={{justifyContent: 'space-between'}}>
            <div>
                <div></div>
                <p>Miejsca dostępne</p>
            </div>
            <div>
                <div style={{backgroundColor: '#222'}}></div>
                <p>Miejsca zarezerwowane</p>
            </div>
            <div>
                <div style={{backgroundColor: 'orange'}}></div>
                <p>Twój wybór</p>
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