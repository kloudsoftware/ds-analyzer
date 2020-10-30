import {Component, ComponentProps, cssClass, Props, VNode} from "@kloudsoftware/eisen"

export class Index extends Component {

    lifeCycle(): ComponentProps {
        return {};
    }

    render(props: Props): VNode {
        const root = this.app.k("div", {attrs: [cssClass("flex items-center justify-center mt-auto flex-col")]});

        return root;
    }
}
