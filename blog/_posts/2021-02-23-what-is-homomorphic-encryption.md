---
layout: post
title: "Fully Homomorphic Encryption: wat en waarom?"
image: /assets/blog/2021-02-23-what-is-homomorphic-encryption/cover.svg
description: >
  Homomorphic Encryption is considered the holy grail of encryption, but what is it and how can it be used?
author: tvdn
excerpt_separator: <!--more-->
last_modified_at: 2020-04-02
---

Misschien heb je er al wel eens van gehoord, maar waarschijnlijk zegt het je nog niets: *Homomorphic Encryption*. Kort samengevat is het een vorm van encryptie waarbij gegevens in een cijfertekst kunnen worden omgezet, terwijl ze geanalyseerd kunnen worden alsof ze nog in de oorspronkelijke vorm zijn. Klinkt interessant? Lees dan vooral verder!

<!--more-->

- Table of Contents
{:toc .large-only}

## Wat is *Homomorphic Encryption*?

*Homomorphic Encryption* (Homomorfe Encryptie)
: De omzetting van gegevens in cijfertekst die kunnen worden geanalyseerd en verwerkt alsof ze nog in de oorspronkelijke vorm zijn [^wiki2021].

*Homomorphic Encryption* (HE) maakt het dus mogelijk om (bepaalde) berekeningen te maken met *versleutelde* tekst [^wiki2019]. Dit proces ziet er als volgt uit:

![Homomorphic Encryption processing diagram][heprocdiag]{:loading="lazy"} [^hall2018]

De getallen '7' en '5' worden cryptografisch omgewerkt naar onleesbare cijfertekst. Vervolgens worden deze cijferteksten bij elkaar opgeteld en is het cryptografisch mogelijk om het leesbare (*plaintext*) antwoord te achterhalen.
{:.figcaption}

HE kan verschillende encryptievormen gebruiken, die verschillende soorten computaties uit kunnen voeren [^wiki2021]. Welke vorm van encryptie gebruikt wordt, dicteert of de encryptie volledig homomorf (FHE) is of slechts deels (PHE).

*Homomorphic Encryption* maakt het mogelijk om gegevens in versleutelde vorm te verwerken zonder ze te hoeven ontcijferen.
{:.note title="Notitie"}

### FHE vs. PHE

Wanneer de encryptievorm volledig homomorf is (ook wel de "heilige graal" van encryptie genoemd), kan het voor elk gewenst doel gebruikt worden [^wiki2021][^armk2015][^will2015]. *Partially Homomorphic Encryption* (PHE) kan slechts gebruikt worden voor optellingen óf multiplicaties, niet beide. FHE ondersteund dit wél en heeft bovendien de potentie om nog veel meer te ondersteunen. Naast FHE en PHE zijn er nog een aantal andere categoriën van HE. Zo bestaat er *Somewhat Homomorphic Encryption* (SWHE) en *Leveled Fully Homomorphic Encryption* (LFHE). Dit zijn verschillende combinaties van HE waarin extra functionaliteit is toegevoegd.

*Partially Homomorphic Encryption* verschilt van *Fully Homomorphic Encryption* doordat het optellingen óf vermenigvuldigingen kan ondersteunen, niet beide.
{:.note title="Notitie"}

<!-- Sources -->
[^wiki2021]: "Homomorphic Encryption", *Wikipedia, The Free Encyclopedia*, 2021. [Online]. Available: [https://en.wikipedia.org/w/index.php?title=Homomorphic_encryption&oldid=1002934075](https://en.wikipedia.org/w/index.php?title=Homomorphic_encryption&oldid=1002934075).
[^wiki2019]: "Wikipedia-bijdragers", *Wikipedia, de vrije encyclopedie*, 2019. [Online]. Available: [https://nl.wikipedia.org/w/index.php?title=Homomorfe_encryptie&oldid=54824375](https://nl.wikipedia.org/w/index.php?title=Homomorfe_encryptie&oldid=54824375).
[^hall2018]: R. Hallman et al., "Building Applications with Homomorphic Encryption", 2018. [Online]. Available: [https://homomorphicencryption.org/wp-content/uploads/2018/10/CCS-HE-Tutorial-Slides.pdf](https://homomorphicencryption.org/wp-content/uploads/2018/10/CCS-HE-Tutorial-Slides.pdf).
[^armk2015]: F. Armknecht et al., "A Guide to Fully Homomorphic Encryption", International Association for Cryptologic Research, 2015. [Online]. Available: [https://eprint.iacr.org/eprint-bin/getfile.pl?entry=2015/1192&version=20160914:161519&file=1192.pdf](https://eprint.iacr.org/eprint-bin/getfile.pl?entry=2015/1192&version=20160914:161519&file=1192.pdf).
[^will2015]: M. Will and R. Ko, "A guide to homomorphic encryption", in *The Cloud Security Ecosystem*, R. Ko and R. Choo, Ed. 2015.

<!-- Pictures -->
[heprocdiag]: /assets/blog/2021-02-23-what-is-homomorphic-encryption/heprocdiag.jpg