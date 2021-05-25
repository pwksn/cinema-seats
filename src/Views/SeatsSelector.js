import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../hooks/useFetch';
import { Typography } from 'antd';
import Seat from '../Components/Seat';

const SeatsSelector = () => {

    const { data: seats, isPending, error } = useFetch('http://localhost:8000/seats');
    const { Text } = Typography;
    const seatsCounter = useSelector(state => state.seatsCounter);
    const seatsTogether = useSelector(state => state.seatsTogether);
    let selectedSeats = [];

    useEffect(() => {
        console.log(seats);
    }, [seats]);

    const onSeatSelection = (seat) => {
        if (!seat.reserved && !seat.selected) {
            seat.selected = true;
            selectedSeats.push(seat);
        } else if (!seat.reserved && seat.selected) {
            seat.selected = false;
            const index = selectedSeats.indexOf(seat);
            if (index > -1) {
                selectedSeats.splice(index, 1);
            }
        }
        console.log(selectedSeats);
        // console.log(seat);
    }


    return (
        <div className="seats-box">
            {seats && seats.map(seat => (
                <Seat key={seat.id} seat={seat} onSeatSelection={(seat) => onSeatSelection(seat)}/>
            ))}
            {isPending && <Text style={{fontSize: '24px', gridColumn: '1 / -1'}}>Czekaj...</Text>}
            {error && <Text style={{fontSize: '24px', gridColumn: '1 / -1'}}>Nie udało się pobrać danych. :(</Text>}
        </div>
    );
}
 
export default SeatsSelector;