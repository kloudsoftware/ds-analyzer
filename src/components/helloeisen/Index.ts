import {Component, ComponentProps, cssClass, Props, VNode} from "@kloudsoftware/eisen"

export class Index extends Component {

    lifeCycle(): ComponentProps {
        return {};
    }

    render(props: Props): VNode {
        const root = this.app.k("div", {attrs: [cssClass("flex items-center justify-center mt-auto flex-col")]});
        const header = this.app.k("h1", {value: "eisen", attrs: [cssClass("text-4xl")]});
        const subtitle = this.app.k("h2", {value: "a modern declarative, reactive UI-Framework", attrs: [cssClass("text-2xl")]});


        root.appendChild(header);
        root.appendChild(subtitle);
        return root;
    }
}
