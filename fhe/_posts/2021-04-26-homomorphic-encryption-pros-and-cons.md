---
layout: post
title: "Fully Homomorphic Encryption: de voor- en nadelen"
date: 2021-04-26 17:06 +0000
description: Although Fully Homomorphic Encryption is set to solve many problems, it also causes new ones. What are the pros and cons?
author: tvdn
# excerpt_separator: "<!--more-->"
---

Als de "heilige graal" van encryptie heeft FHE natuurlijk een aantal sterke kanten, maar ook zeker een aantal zwakheden.

## Ondersteunde operaties

Het grootste voordeel van FHE is dat het meerdere operaties (momenteel alleen optellingen en vermenigvuldigingen) ondersteund op versleutelde data [^will2015]. Dit bespaart niet alleen de moeite van iets moeten ontcijferen voordat het gebruikt kan worden, maar de veiligheid van de data wordt vors verhoogd. Omdat de data nooit naar een leesbare vorm omgewerkt hoeven te worden, kan alleen de versleutelde vorm gestolen worden. Het blijft uiteraard belangrijk om óók versleutelde data goed te beschermen tegen diefstal. Het jammere is dat er momenteel beperkingen zijn met betrekking tot het ondersteunen van een breed scala aan bewerkingen/functies, ookal zouden deze wel mogelijk moeten zijn. De met FHE beveiligde data zou natuurlijk altijd nog ontcijferd kunnen worden om niet-ondersteunde operaties op los ta laten. Dit is alleen niet erg praktisch en je verliest dan het hele voordeel van "altijd versleuteld zijn".

## Onbetrouwbare verwerkers

Doordat de versleutelde data nooit ontcijferd hoeft te worden, kunnen berekeningen die normaal alleen op eigen hardware plaats zouden vinden, uitbesteed worden aan een onbetrouwbare partij zoals een publieke cloudprovider [^will2015]. Denk hierbij aan het verwerken van zeer gevoelige gegevens (zowel business als privacy). In de meest serieuze gevallen wordt er dan gekozen om de data *on-premise* te houden. FHE staat de verwerker toe om zijn data veilig in de cloud op te slaan én te verwerken. Dit opent de deur om gebruik te maken van alle voordelen die dergelijke providers kunnen bieden.

## Prestaties

In een paper uit 2011 schrijven Gentry en Halevi [^gentry2011] dat simpele operaties seconden tot uren kunnen duren, afhankelijk van de veiligheidsgraad. De prestaties van FHE zijn dus niet bepaal efficiënt. Will en Ko [^will2015]. Het lijkt er echter niet op dat het prestatieprobleem sindsdien is opgelost. In een paper uit 2020 [^rahman2020] wordt nog steeds een groot verschil tussen het verwerken van ontcijferde en homomorf versleutelde data beschreven. Ook de blogpost van Ravital Solomon [^solomon2020] omschrijft problemen rondom de efficiëntie van FHE. Om deze reden is HE *momenteel* nog altijd een evenwichtsoefening tussen nut, veiligheid en prestaties. In onderstaande figuur is te zien hoe deze factoren zich verhouden. Er wordt natuurlijk actief gewerkt aan de prestaties van FHE en er worden ook echt grote vooruitgangen geboekt [^obrien2021]. Maar, zelfs wanneer er in de toekomst een extreem efficiënte FHE wordt gevonden, blijven er problemen [^armk2015]. Het is bijvoorbeeld niet mogelijk om een operatie op versleutelde data af te breken. Het volledige proces moet doorlopen worden, wat veel tijd in beslag neemt.

![Veiligheid versus nut versus prestaties voor homomorfe encryptie][hevenn]{:loading="lazy" width="500"} [^will2015]

## Compromis

## Volwassenheid

## Verzamelen van data

## Ondersteunen van meerdere gebruikers

## Cryptografische ruis

## Post-kwantum cryptografie

## Verschillende implementaties

## Bruikbaarheid

## Data-inkomsten genereren

## Regelgeving



Dit artikel is gebaseerd op een onderzoeksrapport wat ik geschreven heb voor het project "Fully Homomorphic Encryption" in opdracht van SALT Cyber Security. [Onderzoeksrapport_Thomas van den Nieuwenhoff_S1124775_V1.0_Redacted.pdf]()
{:.note title="Opmerking"}

<!-- Sources -->
[^gentry2011]: C. Gentry and S. Halevi, "Implementing Gentry's Fully-Homomorphic Encryption Scheme", *IBM Research*, 2011. Available: [https://eprint.iacr.org/2010/520.pdf](https://eprint.iacr.org/2010/520.pdf).
[^rahman2020]: M.S. Rahman, I. Khalil, M. Atiquzzaman and X. Yi, "Towards privacy preserving AI based composition framework in edge networks using fully homomorphic encryption", *Engineering Applications of Artificial Intelligence*, vol. 94, 2020. Available: [https://www.sciencedirect.com/science/article/abs/pii/S0952197620301512](https://www.sciencedirect.com/science/article/abs/pii/S0952197620301512).
[^solomon2020]: R. Solomon, "An Intro to Fully Homomorphic Encryption for Engineers", *NuCypher*, 2020. [Online]. Available: [https://blog.nucypher.com/an-engineers-guide-to-fully-homomorphic-encryption/](https://blog.nucypher.com/an-engineers-guide-to-fully-homomorphic-encryption/). [Accessed: 04-Feb-2021].
[^obrien2021]: C. O'Brien, "IBM bets homomorphic encryption is ready to deliver stronger data security for early adopters", *VentureBeat*, 2021. [Online]. Available: [https://venturebeat.com/2021/04/03/ibm-bets-homomorphic-encryption-is-ready-to-deliver-stronger-data-security-for-early-adopters/](https://venturebeat.com/2021/04/03/ibm-bets-homomorphic-encryption-is-ready-to-deliver-stronger-data-security-for-early-adopters/). [Accessed: 7-Apr-2021].
