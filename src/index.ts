//vendor
import { VApp, Renderer, cssClass, Props } from "@kloudsoftware/eisen"

//own
import { Index } from "./components/helloeisen/Index";
import {Navbar} from "./components/navbar/Navbar";

const app = new VApp("target", new Renderer());
app.init();

const container = app.createElement("div", undefined, app.rootNode, [cssClass("")]);

const navMnt = app.mountComponent(new Navbar(app), container, new Props(app));
const routerMnt = app.createElement("div", undefined, container);

const router = app.useRouter(routerMnt);
router.registerRoute("/", new Index(app))
router.resolveRoute(document.location.pathname).catch(() => router.resolveRoute("/"));

