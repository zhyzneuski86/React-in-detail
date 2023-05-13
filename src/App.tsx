import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Ratting, RattingValueType} from "./components/ratting/Ratting";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRatting} from "./UncontrolledRetting/UncontrolledRatting";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function Hello() {

    alert('Hello It-Incubator')
}

//Hello();


function App(props: any) {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RattingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className={"App"}>


            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}

            <UncontrolledAccordion titleValue={"Users"}/>
            {/*<Accordion titleValue={"Menu"}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={() => {*/}
            {/*               setAccordionCollapsed(!accordionCollapsed)*/}
            {/*           }}/>*/}

            {/*<Ratting value={ratingValue} onClick={setRatingValue}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
