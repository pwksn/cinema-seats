import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../hooks/useFetch';
import { Typography } from 'antd';
import Seat from '../Components/Seat';
import SeatsLegend from '../Components/SeatsLegend';

const SeatsSelector = () => {

    const { data: seats, isPending, error } = useFetch('http://localhost:8000/seats');
    const { Text } = Typography;
    const seatsCounter = useSelector(state => state.seatsCounter);
    const seatsTogether = useSelector(state => state.seatsTogether);
    const selectedSeats = [];

    useEffect(() => {
        if (seats) {
            findEmptySeats();
        };
    }, [selectedSeats]);

    const onSeatSelection = (seat) => {
        // check if given seat is not already reserved or selected
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
    }

    const findEmptySeats = () => {
        // find all seats that are not reserved
        const allEmptySeats = seats.filter((seat) => {
            return seat.reserved === false;
        });
        // search for any empty seats
        if (!seatsTogether) {
            const proposedSeats = allEmptySeats.slice(0, seatsCounter);
            proposedSeats.forEach(seat => {
                seat.selected = true;
            });
            selectedSeats.push(...proposedSeats);
        } else {
            // try to find empty seats next to each other in the amount of seatsCounter, otherwise find any other empty seats in the amount of seatsCounter
            const seatsFound = [];
            let prev = 0;
            // get only a number from seat ID
            const formattedSeats = allEmptySeats.map(seat => {
                seat.formattedId = seat.id.replace(/\D/g,''); // removes letters from seat ID
                return seat;
            });
            // find consecutive seats, for which the ID is different only by 1
            formattedSeats.forEach((current) => {
                if (current.formattedId - prev !== 1) {
                    seatsFound.push([]);
                }

                seatsFound[seatsFound.length - 1].push(current);

                prev = current.formattedId;
            });
            seatsFound.sort((a, b) => b.length - a.length);

            // if we found enough seats next to each other we can use them, otherwise we should find any other empty seats
            const proposedSeats = seatsFound.find(arr => arr.length === seatsCounter)?.length > 0 ?
                seatsFound.find(arr => arr.length === seatsCounter) : 
                allEmptySeats.slice(0, seatsCounter);

            proposedSeats.forEach(seat => {
                seat.selected = true;
            });
            selectedSeats.push(...proposedSeats);
        }
        
    }

    const onSeatsBooking = () => {
        // save selected seats in localStorage on button click
        localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    }

    return (
        <div className="seats-box">
            {seats && seats.map(seat => (
                <Seat key={seat.id} seat={seat} onSeatSelection={(seat) => onSeatSelection(seat)}/>
            ))}
            {isPending && <Text style={{fontSize: '24px', gridColumn: '1 / -1'}}>Czekaj...</Text>}
            {error && <Text style={{fontSize: '24px', gridColumn: '1 / -1'}}>Nie udało się pobrać danych. :(</Text>}
            {seats && <SeatsLegend onBooking={onSeatsBooking}/>}
        </div>
    );
}
 
export default SeatsSelector;