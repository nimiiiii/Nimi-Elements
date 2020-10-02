<p align="center">
  <img src="https://raw.githubusercontent.com/nimiiiii/Nimi/master/icon.png" width="256" title="nimiiiiiiiiiiiiiii~">
</p>

# `nimi-icons`

![npm version](https://img.shields.io/npm/v/nimiiiii/nimi-icons)

This package allows to use Azur Lane popular icons, such as nation logos, as SVG, PNG, WEBP or React components.

## Install

```shell
yarn add @nimiiiii/nimi-icons
```

## Usage

Use one of the available individual icons or use the `<Icon>` React component which accepts any registered label as `type` prop value, other props are passed to the actual `SVGComponent`.

```tsx
import {IronBloodIcon, Icon} from '@nimiiiii/nimi-icons'

export const App = () => <div>
	<IronBloodIcon height={50} width={50} fill={'#555'} />
    <Icon type={'ironblood'} height={50} width={50} fill={'#555'}/>
</div>
```

Or directly use one of the provided icons in various available formats (PNG, SVG, WEBP).

```jsx
import IronBlood_PNG from '@nimiiiii/nimi-icons/dist/nations/ironblood.png'
import IronBlood_SVG from '@nimiiiii/nimi-icons/dist/nations/ironblood.svg'
import IronBlood_WEBP from '@nimiiiii/nimi-icons/dist/nations/ironblood.webp'
```

### Available icons

#### Nations

- Bilibili — `BilibiliIcon`, `Bilibili `
- Collab — `CollabIcon`, `Collab`
  - Hololive — `HololiveIcon`, `Hololive`
  - Kizuna AI — `KizunaAIIcon`, `KizunaAI`
  - Utawarerumono — `UtawarerumonoIcon`, `Utawarerumono`
- Dragon Empiry — `DragonEmpiryIcon`, `DragonEmpiry`, `ROCIcon`, `ROC`
- Eagle Union — `EagleUnionIcon`, `EagleUnion`, `USSIcon`, `USS`
- Iris Libre — `IrisLibreIcon`, `IrisLibre`, `FFNFIcon`, `FFNF`
- Iron Blood — `IronBloodIcon`, `IronBlood`, `KMSIcon`, `KMS`
- Neptunia — `NeptuniaIcon`, `Neptunia`, `HDNIcon`, `HDN`
- Northern Parliament — `NorthernParliamentIcon`, `NorthernParliament`, `SNIcon`, `SN`
- Royal Navy — `RoyalNavyIcon`, `RoyalNavy`, `HMSIcon`, `HMS`
- Sakura Empire — `SakuraEmpireIcon`, `SakuraEmpire`, `IJNIcon`, `IJN`
- Sardegna Empire — `SardegnaEmpireIcon`, `SardegnaEmpire`, `RNIcon`, `RN`
- Universal — `UniversalIcon`, `Universal`
- Vichya Dominion — `VichyaDominionIcon`, `VichyaDominion`, `MNFIcon`, `MNF`

## Credits

Copyright © Tom Bazarnik, Nathan Alo and Ayane Satomi. Licensed under GNU General Public License v2.0 w/Classpath exception.

Azur Lane, the game, and all its assets are Copyright © Yostar. The  developers and contributors are no way affiliated with the game, the  company, nor its partners.


<p align="right">
<i>
"Philosophy Sensei Z23" art by <a href="https://www.pixiv.net/en/users/26379226">しるこ</a> on <a href="https://www.pixiv.net/en/artworks/80256444">pixiv</a>
</i>
</p>

