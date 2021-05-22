import { useSelector } from 'react-redux';
import useFetch from '../hooks/useFetch';

const SeatsSelector = () => {

    const { data: seats, isPending, error } = useFetch('http://localhost:8000/seats');
    const seatsCounter = useSelector(state => state.seatsCounter);
    const seatsTogether = useSelector(state => state.seatsTogether);

    return (
        <div>
            <h1>SeatSelector</h1>
            <p>{seatsCounter} to be selected.</p>
            {seatsTogether && <p>Seats next to each other.</p>}
        </div>
    );
}
 
export default SeatsSelector;