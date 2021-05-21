import { Space, Button, Typography, InputNumber, Checkbox } from 'antd';
import { Link } from 'react-router-dom';

const Starter = () => {

    const { Text } = Typography;

    const onInputChange = (value) => {
        console.log(value + ' tickets selected.');
    }

    const onCheckboxChange = (e) => {
        console.log(e.target.checked);
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
                    <Checkbox onChange={onCheckboxChange}>
                        Czy miejsca mają być obok siebie?
                    </Checkbox>
                </Space>
                <Link to="/seats">
                    <Button block>
                        Wybierz miejsca
                    </Button>
                </Link>
            </Space>
        </div>
    );
}
 
export default Starter;