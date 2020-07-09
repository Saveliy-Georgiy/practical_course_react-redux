import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './Rating';
import Accordion from "./Accordion";
import OnOff from './OnOff';

function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            <Rating
                value={ratingValue}
                onClick={setRatingValue}
            />

            <Accordion
                titleValue={"Menu"}
                collapsed={accordionCollapsed}
                onChange={() => {
                    setAccordionCollapsed(!accordionCollapsed)
                }}
            />

            <OnOff on={switchOn} onChange={setSwitchOn}/>

        </div>
    );
}

export default App;
