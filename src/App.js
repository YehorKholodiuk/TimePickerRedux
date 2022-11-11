import './App.css';
import { connect } from 'react-redux';
import TimePicker from './TimePicker';
import { useState } from 'react';
import axios from 'axios';
import { checkSlot } from './actions';

function App(props) {
  const booked = ['10:30 am - 11:00 am', '3:30 pm - 4:00 pm'];
  const slots = [];

  for (let i = 7; i < 11; i++) {
    slots.push(`${i}:00 am - ${i}:30 am`, `${i}:30 am - ${i + 1}:00 am`);
  }

  slots.push(`11:30 am - 12:00 pm`, `12:00 pm - 12:30 pm`);

  for (let i = 1; i <= 7; i++) {
    slots.push(`${i}:00 pm - ${i}:30 pm`, `${i}:30 pm - ${i + 1}:00 pm`);
  }

  const [selectedSlot, setSelectedSlot] = useState('');
  const [respStatus, setRespStatus] = useState(null);


  const onSelect = (slot) => {
    setSelectedSlot(slot);
    props.checkSlot(slot)
  };


  return (
      <div className="App">
        <h1>Talkdoc - Frontend - Component Programming</h1>

        <h3>{props.responseStatus}</h3>

        <TimePicker
            slots={slots}
            booked={booked}
            onSelect={onSelect}
            selectedSlot={selectedSlot}
        />
      </div>
  );
}

const mapStateToProps = state => ({
  responseStatus: state.responseStatus
})

const mapDispatchToProps = dispatch => ({
  checkSlot: (slot) => dispatch(checkSlot(slot))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


