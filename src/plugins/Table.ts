import {Component, ComponentProps, cssClass, Props, VNode} from "@kloudsoftware/eisen"

export class Table extends Component {

    lifeCycle(): ComponentProps {
        return {
            mounted(comp: Component): void {
                comp.props.registerCallback("data", comp.forcedUpdate);
            }
        };
    }

    render(props: Props): VNode {
        const table = this.app.k("table", {attrs: [cssClass("")]});
        const dataHeader = props.getProp("header") as string[] | VNode[];
        const data = props.getProp("data") as string[] | VNode[];

        // @ts-ignore
        const header = this.app.k("tr", {}, dataHeader.map((value: string | VNode): VNode => {
            if (typeof (value) === "string") {
                return this.app.k("th", {value: value})
            }

            return this.app.k("th", {}, [value]);
        }));

        table.appendChild(header);

        const rows: VNode[] = [];

        let countRows = data.length / dataHeader.length;
        let currIdx = 0;
        for (let i = 0; i < countRows; i++) {
            const currentRow: VNode = this.app.k("tr");
            for (let j = 0; j < dataHeader.length; j++) {
                const value = data[currIdx];
                let currentVal: VNode;
                if (typeof (value) === "string" || typeof value == "number") {
                    currentVal = this.app.k("td", {value: String(value).toString()})
                } else {
                    currentVal = value;
                }

                currentRow.appendChild(currentVal);
                currIdx++;
            }
            rows.push(currentRow);
        }


        rows.forEach(row => {
            table.appendChild(row);
        });

        return table;
    }
}
