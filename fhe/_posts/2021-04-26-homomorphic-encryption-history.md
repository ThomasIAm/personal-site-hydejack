---
layout: post
title: "Fully Homomorphic Encryption: de geschiedenis"
date: 2021-04-26 17:15 +0000
description: Fully Homomorphic Encryption isn't something that was cooked up by a cryptographer yesterday. How did we get where we are today?
author: tvdn
excerpt_separator: "<!--more-->"
---

HE heeft al een behoorlijke geschiedenis en is op verschillende manieren aangevlogen [^wiki2021]. Er is jarenlang geprobeerd om FHE werkend te krijgen, zonder succes [^vaik2012]. Totdat Craig Gentry bij IBM in oktober 2008 de eerste volledig homomorfe encryptie had bedacht.

Geschatte leestijd: 0 minuten
{:.faded}

<!--more-->

- Table of Contents
{:toc}

## Pre-FHE

Voor zover men weet, bestaat het idee dat homomorfe encryptie gebruikt kan worden voor het beschermen van data al decennia [^will2015]. Het probleem van het vormen van een volledig homomorfe encryptie, werd voor het eerste voorgesteld in 1978 [^rivest1978]. Er werden speciale encryptie functies genaamd “privacy homomorphisms” voorgesteld. De auteurs bespreken het gebruiken van hardware om data veilig te verwerken. De data zouden dan alleen ontcijferd worden op een fysiek veilige processor. Op deze manier wordt de data altijd versleuteld wanneer het de processor verlaat (bv. wanneer het naar het geheugen wordt verplaatst). Het probleem met deze soort chips, is dat het op maat gemaakte hardware is, duur om te implementeren en altijd nog een decoderingssleutel nodig heeft. Voor meer dan 30 jaar was het onduidelijk of er een oplossing bestond. In die periode zijn er een aantal gedeeltelijke oplossingen verschenen (Wikipedia contributors, 2021):
-	RSA-cryptosysteem (onbeperkt aantal modulaire vermenigvuldigingen);
-	ElGamal cryptosysteem (onbeperkt aantal modulaire vermenigvuldigingen);
-	Goldwasser-Micali cryptosysteem (onbeperkt aantal XOR-operaties);
-	Benaloh cryptosysteem (onbeperkt aantal modulaire toevoegingen);
-	Paillier cryptosysteem (onbeperkt aantal modulaire toevoegingen);
-	Sander-Young-Yung-systeem (loste na meer dan 20 jaar het probleem op voor logaritmische diepteschakelingen) (Sander, Young, & Yung, 1999, pp. 554-566);
-	Boneh-Goh-Nissim cryptosysteem (onbeperkt aantal optelbewerkingen, maar maximaal één vermenigvuldiging) (Boneh, Goh, & Nissim, 2005);
-	Ishai-Paskin cryptosysteem (vertakkingsprogramma’s van polynoomgrootte) (Ishai & Paskin, 2007).

## Eerste generatie FHE

## Tweede generatie FHE

## Derde generatie FHE

## Vierde generatie FHE


Dit artikel is gebaseerd op een onderzoeksrapport wat ik geschreven heb voor het project "Fully Homomorphic Encryption" in opdracht van SALT Cyber Security. [Onderzoeksrapport_Thomas van den Nieuwenhoff_S1124775_V1.0_Redacted.pdf]()
{:.note title="Opmerking"}

<!-- Sources -->
[^wiki2021]: "Homomorphic Encryption", *Wikipedia, The Free Encyclopedia*, 2021. [Online]. Available: [https://en.wikipedia.org/w/index.php?title=Homomorphic_encryption&oldid=1002934075](https://en.wikipedia.org/w/index.php?title=Homomorphic_encryption&oldid=1002934075).
[^vaik2012]: V. Vaikuntanathan, "Homomorphic Encryption: WHAT, WHY, and HOW", 2012. Available: [https://www.cs.toronto.edu/~vinodv/Homomorphic-MCSS.pptx](https://www.cs.toronto.edu/~vinodv/Homomorphic-MCSS.pptx).
[^will2015]: M. Will and R. Ko, "A guide to homomorphic encryption", in *The Cloud Security Ecosystem*, R. Ko and R. Choo, Ed. 2015.
[^rivest1978]: R.L. Rivest, L. Adleman, M.L. Dertouzos, "On Data Banks and Privacy Homomorphisms", *Foundations of Secure Computation*, 1978. Available: [https://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=EA7BED6BE588981303D0EEC5C2EDDB0B?doi=10.1.1.500.3989&rep=rep1&type=pdf](https://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=EA7BED6BE588981303D0EEC5C2EDDB0B?doi=10.1.1.500.3989&rep=rep1&type=pdf).
