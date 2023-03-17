import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Ratting} from "./ratting/Ratting";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";

function Hello() {

    alert('Hello It-Incubator')
}

//Hello();


function App(props:any) {
    console.log("App rendering")
    return (
        <div>

            <OnOff/>

            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            {/*<OnOff on={true}/>*/}
            {/*<OnOff on={false}/>*/}
            {/*<PageTitle title={"This is component"}/>*/}
            {/*<PageTitle title={"My friend"}/>*/}
            {/*Article 1*/}
            {/*<Ratting value={3}/>*/}
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*Article 2*/}

            {/*<Ratting value={0}/>*/}
            {/*<Ratting value={1}/>*/}
            {/*<Ratting value={2}/>*/}
            {/*<Ratting value={3}/>*/}
            {/*<Ratting value={4}/>*/}
            {/*<Ratting value={5}/>*/}
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
