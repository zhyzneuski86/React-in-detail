import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Ratting} from "./ratting/Ratting";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRatting} from "./UncontrolledRetting/UncontrolledRatting";

function Hello() {

    alert('Hello It-Incubator')
}

//Hello();


function App(props:any) {
    console.log("App rendering")
    return (
        <div className={"App"}>

            <OnOff/>

            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRatting />
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}
            {/*<OnOff on={true}/>*/}
            {/*<OnOff on={false}/>*/}
            {/*<PageTitle title={"This is component"}/>*/}
            {/*<PageTitle title={"My friend"}/>*/}
            {/*Article 1*/}
            {/*<UncontrolledRatting value={3}/>*/}
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            {/*Article 2*/}

            {/*<UncontrolledRatting value={0}/>*/}
            <Ratting value={1}/>
            {/*<UncontrolledRatting value={2}/>*/}
            {/*<UncontrolledRatting value={3}/>*/}
            {/*<UncontrolledRatting value={4}/>*/}
            {/*<UncontrolledRatting value={5}/>*/}
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
