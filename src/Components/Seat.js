import { useState } from "react";

const Seat = ({ seat, onSeatSelection }) => {
    
    const [seatSelected, setSeatSelected] = useState(false);

    const onSeatClicked = () => {
        onSeatSelection(seat);
        if (seat.selected) {
            setSeatSelected(true);
        } else {
            setSeatSelected(false);
        }
    }

    return (
        <div 
            className={`seat ${seat.reserved ? 'seat-reserved' : ''} ${seatSelected ? 'seat-selected' : ''}`} 
            style={{gridColumn: `${seat.cords.y + 1}`, gridRow: `${seat.cords.x + 1}`}}
            onClick={() => onSeatClicked()}
            >
            <p>x: {seat.cords.x}, y: {seat.cords.y}</p>
        </div>
    );
}
 
export default Seat;