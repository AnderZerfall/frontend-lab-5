import { LinkType } from "../domain/constants/LinkType"


export const getLinkByType = (type: LinkType, link: string) => {
    return type === LinkType.Default ? link : `${type}:${link}`
}