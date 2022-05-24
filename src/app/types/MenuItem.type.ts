import { AppRoutes } from "../routes/AppRoutes"
import { MenuIcons } from "./MenuIcons"

export type MenuItem = {
    icon:MenuIcons,
    route: AppRoutes,
    text: string
}