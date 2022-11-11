function TimePicker(props) {


    return (
        <div className="time-picker">

            {
                props.slots.map(slot => (
                    <div key={slot}>
                        {props.booked.includes(slot)
                            ? <div className="disabled slot">{slot}</div>
                            : <div onClick={() => props.onSelect(slot)}
                                   className={`${props.selectedSlot === slot ? 'slot selected' : 'slot'}`}>{slot}</div>
                        }
                    </div>))
            }

        </div>
    );
}

export default TimePicker;
