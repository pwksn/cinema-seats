import { Space, Button, Typography, InputNumber, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateSeatsCount, updateSeatsTogether } from '../actions';

const Starter = () => {

    const { Text } = Typography;
    const dispatch = useDispatch();

    const onInputChange = (value) => {
        dispatch(updateSeatsCount(value));
    }

    const onCheckboxChange = () => {
        dispatch(updateSeatsTogether());
    }

    return (
        <div className="space-align-block">
            <Space direction="vertical">
                <Space size={75}>
                    <Text>Liczba miejsc:</Text>
                    <InputNumber 
                        size="large" 
                        min={1} 
                        max={100} 
                        defaultValue={1} 
                        onChange={onInputChange}/>
                </Space>
                <Space style={{margin: '16px 0'}}>
                    <Checkbox onChange={() => dispatch(updateSeatsTogether())}>
                        Czy miejsca mają być obok siebie?
                    </Checkbox>
                </Space>
                <Link to="/selection">
                    <Button block>
                        Wybierz miejsca
                    </Button>
                </Link>
            </Space>
        </div>
    );
}
 
export default Starter;