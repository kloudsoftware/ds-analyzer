import {Attribute, Component, ComponentProps, cssClass, Props, reactive, VNode} from "@kloudsoftware/eisen"

const feather = import('feather-icons');

export class Navbar extends Component {


    @reactive()
    githubIco: string = "";

    lifeCycle(): ComponentProps {
        return {
            mounted(comp: Navbar) {
                feather.then(f => {
                    if (comp.githubIco === "") {
                        comp.githubIco = f.icons.github.toSvg()
                    }
                });
            }
        };
    }

    render(props: Props): VNode {
        const root = this.app.k("div", {attrs: [cssClass("flex flex-row h-16 w-screen")]});
        const githubLink = this.app.k("a", {
                attrs: [
                    cssClass("my-auto mr-4"),
                    new Attribute("href", "https://github.com/kloudsoftware/eisen"),
                    new Attribute("target", "_blank"),
                ]
            },
            [
                this.app.k("svg", {value: this.githubIco, attrs: [cssClass("my-auto")]}),
            ]);

        const navContent = [
            this.app.k("p", {value: "Logo", attrs: [cssClass("my-auto ml-4")]}),
            this.app.k("p", {value: "Docs", attrs: [cssClass("my-auto ml-auto mr-4 cursor-pointer")]}),
            githubLink
        ];

        root.appendChildren(navContent);
        return root;
    }
}
