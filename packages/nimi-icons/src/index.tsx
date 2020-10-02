/*
 * Copyright 2020 Tom Bazarnik et al.
 * Licensed under the GNU General Public License v2.0 w/Classpath exception
 * See LICENSE for details.
 */
import * as React from 'react'
import { ReactComponent as IronBlood } from './nations/ironblood.svg'
import { ReactComponent as Bilibili } from './nations/bilibili.svg'
import { ReactComponent as Collab } from './nations/collab.svg'
import { ReactComponent as DragonEmpiry } from './nations/dragonempiry.svg'
import { ReactComponent as EagleUnion } from './nations/eagleunion.svg'
import { ReactComponent as Neptunia } from './nations/neptunia.svg'
import { ReactComponent as NorthernParliament } from './nations/northernparliament.svg'
import { ReactComponent as RoyalNavy } from './nations/royalnavy.svg'
import { ReactComponent as SakuraEmpire } from './nations/sakuraempire.svg'
import { ReactComponent as IrisLibre } from './nations/irislibre.svg'
import { ReactComponent as VichyaDominion } from './nations/vichyadominion.svg'
import { ReactComponent as SardegnaEmpire } from './nations/sardegnaempire.svg'
import { ReactComponent as Universal } from './nations/universal.svg'

export interface NationIconProps {
    type: string
    [key: string]: any
}

export const toLower = (input: string) => input.normalize("NFD").replace(/[\u0300-\u036f ]/g, "").toLowerCase()

export const Icon = (props: NationIconProps): JSX.Element | null => {
    const type = toLower(props.type)
    const svgProps = (({ type, ...o }) => o)(props)
    switch (type) {
        case 'bilibili':
            return <Bilibili {...svgProps} />
        case 'collab':
            return <Collab {...svgProps} />
        case 'hololive':
            return <Collab {...svgProps} />
        case 'utawarerumono':
            return <Collab {...svgProps} />
        case 'dragonempiry':
            return <DragonEmpiry {...svgProps} />
        case 'roc':
            return <DragonEmpiry {...svgProps} />
        case 'eagleunion':
            return <EagleUnion {...svgProps} />
        case 'uss':
            return <EagleUnion {...svgProps} />
        case 'irislibre':
            return <IrisLibre {...svgProps} />
        case 'ffnf':
            return <IrisLibre {...svgProps} />
        case 'ironblood':
            return <IronBlood {...svgProps} />
        case 'kms':
            return <IronBlood {...svgProps} />
        case 'neptunia':
            return <Neptunia {...svgProps} />
        case 'hdn':
            return <Neptunia {...svgProps} />
        case 'northernparliament':
            return <NorthernParliament {...svgProps} />
        case 'sn':
            return <NorthernParliament {...svgProps} />
        case 'royalnavy':
            return <RoyalNavy {...svgProps} />
        case 'hms':
            return <RoyalNavy {...svgProps} />
        case 'sakuraempire':
            return <SakuraEmpire {...svgProps} />
        case 'ijn':
            return <SakuraEmpire {...svgProps} />
        case 'sardegnaempire':
            return <SardegnaEmpire {...svgProps} />
        case 'rn':
            return <SardegnaEmpire {...svgProps} />
        case 'universal':
            return <Universal {...svgProps} />
        case 'vichyadominion':
            return <VichyaDominion {...svgProps} />
        case 'mnf':
            return <VichyaDominion {...svgProps} />
        default:
            return null
    }
}

export {
    Bilibili,
    Bilibili as BilibiliIcon,
    Collab,
    Collab as Utawarerumono,
    Collab as KizunaAI,
    Collab as Hololive,
    Collab as CollabIcon,
    Collab as UtawarerumonoIcon,
    Collab as KizunaAIIcon,
    Collab as HololiveIcon,
    DragonEmpiry,
    DragonEmpiry as ROC,
    DragonEmpiry as DragonEmpiryIcon,
    DragonEmpiry as ROCIcon,
    EagleUnion,
    EagleUnion as USS,
    EagleUnion as EagleUnionIcon,
    EagleUnion as USSIcon,
    IrisLibre,
    IrisLibre as FFNF,
    IrisLibre as IrisLibreIcon,
    IrisLibre as FFNFIcon,
    IronBlood,
    IronBlood as Ironblood,
    IronBlood as KMS,
    IronBlood as IronBloodIcon,
    IronBlood as KMSIcon,
    Neptunia,
    Neptunia as HDN,
    Neptunia as NeptuniaIcon,
    Neptunia as HDNIcon,
    NorthernParliament,
    NorthernParliament as SN,
    NorthernParliament as NorthernParliamentIcon,
    NorthernParliament as SNIcon,
    RoyalNavy,
    RoyalNavy as HMS,
    RoyalNavy as RoyalNavyIcon,
    RoyalNavy as HMSIcon,
    SakuraEmpire,
    SakuraEmpire as IJN,
    SakuraEmpire as SakuraEmpireIcon,
    SakuraEmpire as IJNIcon,
    SardegnaEmpire,
    SardegnaEmpire as RN,
    SardegnaEmpire as SardegnaEmpireIcon,
    SardegnaEmpire as RNIcon,
    Universal,
    Universal as UniversalIcon,
    VichyaDominion,
    VichyaDominion as MNF,
    VichyaDominion as VichyaDominionIcon,
    VichyaDominion as MNFIcon
}
