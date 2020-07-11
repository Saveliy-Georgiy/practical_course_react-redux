import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";

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
            <UncontrolledRating/>
            <Accordion
                titleValue={"Menu"}
                collapsed={accordionCollapsed}
                onChange={() => {
                    setAccordionCollapsed(!accordionCollapsed)
                }}
            />
            <UncontrolledAccordion
                titleValue={"Menu"}
            />
            <OnOff on={switchOn} onChange={setSwitchOn}/>

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

export default App;
