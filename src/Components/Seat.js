import { useState } from "react";

const Seat = ({ seat, onSeatSelection }) => {
   
    const [seatViewRefresh, setSeatViewRefresh] = useState(false);

    const onSeatClicked = () => {
        onSeatSelection(seat);
        // refresh view of Seat component
        setSeatViewRefresh(!seatViewRefresh)
    }

    return (
        <div 
            className={`seat ${seat.reserved ? 'seat-reserved' : ''} ${seat.selected ? 'seat-selected' : ''}`} 
            style={{gridColumn: `${seat.cords.y + 1}`, gridRow: `${seat.cords.x + 1}`}}
            onClick={() => onSeatClicked()}
            >
            <p>x: {seat.cords.x}, y: {seat.cords.y}</p>
        </div>
    );
}
 
export default Seat;