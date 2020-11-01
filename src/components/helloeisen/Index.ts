import {Component, ComponentProps, cssClass, Props, reactive, src, VNode} from "@kloudsoftware/eisen"
import {HttpClient} from "../../plugins/HttpClient";
import {Table} from "../../plugins/Table";
import moment from "moment-timezone";

export class Index extends Component {

    @reactive()
    incInfo: IncInformation[] = [];

    lifeCycle(): ComponentProps {
        const http = this.app.get<HttpClient>("http");
        return {
            mounted(comp: Index): void {
                http.peformGet("/data?oldData=false").then(resp => resp.json().then(value => comp.incInfo = value as IncInformation[]));
            }
        };
    }

    render(props: Props): VNode {
        const root = this.app.k("div", {attrs: [cssClass("flex items-center justify-center mt-auto flex-col")]});
        const header = ["Angriffsziel", "Angegriffener Spieler", "Angreifer", "Angreifendes Dorf", "Angriffstyp", "Angriffsdatum"];

        props.setProp("header", header);

        const data = [];

        this.incInfo.forEach((inc, idx) => {
            data.push(inc.target, inc.targetPlayer, inc.attackingPlayer, inc.source, this.app.k("img", {attrs: [src(inc.attackType)]}), this.getDate(inc));
        });

        props.setProp("data", data);

        this.app.mountSubComponent(new Table(this.app), root, props, this);
        return root;
    }

    getDate(inc: IncInformation): string {
        const date = new Date(inc.arrivingDate);

        return this.nullPrefix(date.getUTCHours()) + ":" + this.nullPrefix(date.getUTCMinutes()) + ":" + this.nullPrefix(date.getUTCSeconds()) + ":" + this.milliPrefix(date.getUTCMilliseconds()) + " " + ((this.nullPrefix(date.getUTCDate())) + "." + (this.nullPrefix(date.getUTCMonth() + 1))) + ".";
    }

    nullPrefix(num: number): string {
        if(num < 10) {
            return "0" + String(num)
        }

        return String(num);
    }

    milliPrefix(num: number): string {
        if(num < 10) {
            return "00" + num;
        }

        if(num < 100) {
            return "0" + num;
        }

        return String(num);
    }

    renderInc(inc: IncInformation): string {
        return inc.target + " " + inc.arrivingDate + " " + inc.targetPlayer + " // " + inc.source + " " + inc.attackingPlayer
    }
}
