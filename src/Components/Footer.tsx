import { Component, ReactNode } from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default class Footer extends Component {
    render(): ReactNode {
        return <footer className="text-center" style={{borderLeft : "1px solid black", paddingLeft:"50px"} }>
            <p>Készitette: Juhász Csenge</p>
        </footer>
    }
}