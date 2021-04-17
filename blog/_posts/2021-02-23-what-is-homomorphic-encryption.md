---
layout: post
title: "Fully Homomorphic Encryption: wat en waarom?"
image: /assets/blog/2021-02-23-what-is-homomorphic-encryption/cover.svg
description: >
  Homomorphic Encryption is considered the holy grail of encryption, but what is it and how can it be used?
author: tvdn
excerpt_separator: <!--more-->
---

Misschien heb je er al wel eens van gehoord, maar waarschijnlijk zegt het je nog niets: *Homomorphic Encryption*. Kort samengevat is het een vorm van encryptie waarbij gegevens in een cijfertekst kunnen worden omgezet, terwijl ze geanalyseerd kunnen worden alsof ze nog in de oorspronkelijke vorm zijn. Klinkt interessant? Lees dan vooral verder!

Geschatte leestijd: 3 minuten
{:.faded}

<!--more-->

- Table of Contents
{:toc}

## Wat is *Homomorphic Encryption*?

*Homomorphic Encryption* (Homomorfe Encryptie)
: De omzetting van gegevens in cijfertekst die kunnen worden geanalyseerd en verwerkt alsof ze nog in de oorspronkelijke vorm zijn [^wiki2021].

*Homomorphic Encryption* (HE) maakt het dus mogelijk om (bepaalde) berekeningen te maken met *versleutelde* tekst [^wiki2019]. Dit proces ziet er als volgt uit:

![Homomorphic Encryption processing diagram][heprocdiag]{:loading="lazy" width="542" height="254"} [^hall2018]

De getallen '7' en '5' worden cryptografisch omgewerkt naar onleesbare cijfertekst. Vervolgens worden deze cijferteksten bij elkaar opgeteld en is het cryptografisch mogelijk om het leesbare (*plaintext*) antwoord te achterhalen.
{:.figcaption}

HE kan verschillende encryptievormen gebruiken, die verschillende soorten computaties uit kunnen voeren [^wiki2021]. Welke vorm van encryptie gebruikt wordt, dicteert of de encryptie volledig homomorf (FHE) is of slechts deels (PHE).

*Homomorphic Encryption* maakt het mogelijk om gegevens in versleutelde vorm te verwerken zonder ze te hoeven ontcijferen.
{:.note title="Notitie"}

### FHE vs. PHE

Wanneer de encryptievorm volledig homomorf is (ook wel de "heilige graal" van encryptie genoemd), kan het voor elk gewenst doel gebruikt worden [^wiki2021][^armk2015][^will2015]. *Partially Homomorphic Encryption* (PHE) kan slechts gebruikt worden voor optellingen óf multiplicaties, niet beide. FHE ondersteund dit wél en heeft bovendien de potentie om nog veel meer te ondersteunen. Naast FHE en PHE zijn er nog een aantal andere categoriën van HE. Zo bestaat er *Somewhat Homomorphic Encryption* (SWHE) en *Leveled Fully Homomorphic Encryption* (LFHE). Dit zijn verschillende combinaties van HE waarin extra functionaliteit is toegevoegd.

*Partially Homomorphic Encryption* verschilt van *Fully Homomorphic Encryption* doordat het optellingen óf vermenigvuldigingen kan ondersteunen, niet beide.
{:.note title="Notitie"}

## De geschiedenis

> Wel of niet toevoegen?

## De voor- en nadelen

Als de "heilige graal" van encryptie heeft FHE natuurlijk een aantal sterke kanten, maar ook zeker een aantal zwakheden.

### Ondersteunde operaties

Het grootste voordeel van FHE is dat het meerdere operaties (momenteel alleen optellingen en vermenigvuldigingen) ondersteund op versleutelde data [^will2015]. Dit bespaart niet alleen de moeite van iets moeten ontcijferen voordat het gebruikt kan worden, maar de veiligheid van de data wordt vors verhoogd. Omdat de data nooit naar een leesbare vorm omgewerkt hoeven te worden, kan alleen de versleutelde vorm gestolen worden. Het blijft uiteraard belangrijk om óók versleutelde data goed te beschermen tegen diefstal. Het jammere is dat er momenteel beperkingen zijn met betrekking tot het ondersteunen van een breed scala aan bewerkingen/functies, ookal zouden deze wel mogelijk moeten zijn. De met FHE beveiligde data zou natuurlijk altijd nog ontcijferd kunnen worden om niet-ondersteunde operaties op los ta laten. Dit is alleen niet erg praktisch en je verliest dan het hele voordeel van "altijd versleuteld zijn".

### Onbetrouwbare verwerkers

Doordat de versleutelde data nooit ontcijferd hoeft te worden, kunnen berekeningen die normaal alleen op eigen hardware plaats zouden vinden, uitbesteed worden aan een onbetrouwbare partij zoals een publieke cloudprovider [^will2015]. Denk hierbij aan het verwerken van zeer gevoelige gegevens (zowel business als privacy). In de meest serieuze gevallen wordt er dan gekozen om de data *on-premise* te houden. FHE staat de verwerker toe om zijn data veilig in de cloud op te slaan én te verwerken. Dit opent de deur om gebruik te maken van alle voordelen die dergelijke providers kunnen bieden.

### Prestaties

In een paper uit 2011 schrijven Gentry en Halevi [^gentry2011] dat simpele operaties seconden tot uren kunnen duren, afhankelijk van de veiligheidsgraad. De prestaties van FHE zijn dus niet bepaal efficiënt. Will en Ko [^will2015]. Het lijkt er echter niet op dat het prestatieprobleem sindsdien is opgelost. In een paper uit 2020 [^rahman2020] wordt nog steeds een groot verschil tussen het verwerken van ontcijferde en homomorf versleutelde data beschreven. Ook de blogpost van Ravital Solomon [^solomon2020] omschrijft problemen rondom de efficiëntie van FHE. Om deze reden is HE *momenteel* nog altijd een evenwichtsoefening tussen nut, veiligheid en prestaties. In onderstaande figuur is te zien hoe deze factoren zich verhouden. Er wordt natuurlijk actief gewerkt aan de prestaties van FHE en er worden ook echt grote vooruitgangen geboekt [^obrien2021]. Maar, zelfs wanneer er in de toekomst een extreem efficiënte FHE wordt gevonden, blijven er problemen [^armk2015]. Het is bijvoorbeeld niet mogelijk om een operatie op versleutelde data af te breken. Het volledige proces moet doorlopen worden, wat veel tijd in beslag neemt.

![Veiligheid versus nut versus prestaties voor homomorfe encryptie][hevenn]{:loading="lazy" width="500"} [^will2015]

### Compromis

### Volwassenheid

### Verzamelen van data

### Ondersteunen van meerdere gebruikers

### Cryptografische ruis

### Post-kwantum cryptografie

### Verschillende implementaties

### Bruikbaarheid

### Data-inkomsten genereren

### Regelgeving

## De bedrijfstoepassingen

### Praktijkvoorbeelden

#### IBM

#### Chrome & Edge

#### Microsoft ElectionGuard

### Theoretische toepassingen

#### IOT

#### Genomica

#### E-health

#### Schoolverlaters

#### Privacy bij advertenties

#### Financiële privacy

#### Forensische beeldherkenning

Dit artikel is gebaseerd op een onderzoeksrapport wat ik geschreven heb voor het project "Fully Homomorphic Encryption" in opdracht van SALT Cyber Security. [Onderzoeksrapport_Thomas van den Nieuwenhoff_S1124775_V1.0_Redacted.pdf](/assets/blog/2021-02-23-what-is-homomorphic-encryption/Onderzoeksrapport_Thomas van den Nieuwenhoff_S1124775_V1.0_Redacted.pdf)
{:.note title="Opmerking"}

<!-- Sources -->
[^wiki2021]: "Homomorphic Encryption", *Wikipedia, The Free Encyclopedia*, 2021. [Online]. Available: [https://en.wikipedia.org/w/index.php?title=Homomorphic_encryption&oldid=1002934075](https://en.wikipedia.org/w/index.php?title=Homomorphic_encryption&oldid=1002934075).
[^wiki2019]: "Wikipedia-bijdragers", *Wikipedia, de vrije encyclopedie*, 2019. [Online]. Available: [https://nl.wikipedia.org/w/index.php?title=Homomorfe_encryptie&oldid=54824375](https://nl.wikipedia.org/w/index.php?title=Homomorfe_encryptie&oldid=54824375).
[^hall2018]: R. Hallman et al., "Building Applications with Homomorphic Encryption", 2018. Available: [https://homomorphicencryption.org/wp-content/uploads/2018/10/CCS-HE-Tutorial-Slides.pdf](https://homomorphicencryption.org/wp-content/uploads/2018/10/CCS-HE-Tutorial-Slides.pdf).
[^armk2015]: F. Armknecht, C. Boyd, C. Carr, K. Gjøsteen, A. Jäschke, C.A. Reuter and M. Strand, "A Guide to Fully Homomorphic Encryption", *International Association for Cryptologic Research*, 2015. Available: [https://eprint.iacr.org/eprint-bin/getfile.pl?entry=2015/1192&version=20160914:161519&file=1192.pdf](https://eprint.iacr.org/eprint-bin/getfile.pl?entry=2015/1192&version=20160914:161519&file=1192.pdf).
[^will2015]: M. Will and R. Ko, "A guide to homomorphic encryption", in *The Cloud Security Ecosystem*, R. Ko and R. Choo, Ed. 2015.
[^gentry2011]: C. Gentry and S. Halevi, "Implementing Gentry's Fully-Homomorphic Encryption Scheme", *IBM Research*, 2011. Available: [https://eprint.iacr.org/2010/520.pdf](https://eprint.iacr.org/2010/520.pdf).
[^rahman2020]: M.S. Rahman, I. Khalil, M. Atiquzzaman and X. Yi, "Towards privacy preserving AI based composition framework in edge networks using fully homomorphic encryption", *Engineering Applications of Artificial Intelligence*, vol. 94, 2020. Available: [https://www.sciencedirect.com/science/article/abs/pii/S0952197620301512](https://www.sciencedirect.com/science/article/abs/pii/S0952197620301512).
[^solomon2020]: R. Solomon, "An Intro to Fully Homomorphic Encryption for Engineers", *NuCypher*, 2020. [Online]. Available: [https://blog.nucypher.com/an-engineers-guide-to-fully-homomorphic-encryption/](https://blog.nucypher.com/an-engineers-guide-to-fully-homomorphic-encryption/). [Accessed: 04-Feb-2021].
[^obrien2021]: C. O'Brien, "IBM bets homomorphic encryption is ready to deliver stronger data security for early adopters", *VentureBeat*, 2021. [Online]. Available: [https://venturebeat.com/2021/04/03/ibm-bets-homomorphic-encryption-is-ready-to-deliver-stronger-data-security-for-early-adopters/](https://venturebeat.com/2021/04/03/ibm-bets-homomorphic-encryption-is-ready-to-deliver-stronger-data-security-for-early-adopters/). [Accessed: 7-Apr-2021].

<!-- Pictures -->
[heprocdiag]: /assets/blog/2021-02-23-what-is-homomorphic-encryption/heprocdiag.jpg
[hevenn]: /assets/blog/2021-02-23-what-is-homomorphic-encryption/hevenn.png
