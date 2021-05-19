---
layout: post
title: "Fully Homomorphic Encryption: de geschiedenis"
image: /assets/blog/2021-05-18-homomorphic-encryption-history/cover.svg
description: Fully Homomorphic Encryption isn't something that was cooked up by a cryptographer yesterday. How did we get where we are today?
author: tvdn
excerpt_separator: "<!--more-->"
---

HE heeft al een behoorlijke geschiedenis en is op verschillende manieren aangevlogen [^wiki2021]. Er is jarenlang geprobeerd om FHE werkend te krijgen, zonder succes [^vaik2012]. Totdat Craig Gentry bij IBM in oktober 2008 de eerste volledig homomorfe encryptie had bedacht.

Geschatte leestijd: 5 minuten
{:.faded}

<!--more-->

- Table of Contents
{:toc}

## Pre-FHE

Voor zover men weet, bestaat het idee dat homomorfe encryptie gebruikt kan worden voor het beschermen van data al decennia [^will2015]. Het probleem van het vormen van een volledig homomorfe encryptie, werd voor het eerste voorgesteld in 1978 [^rivest1978]. Er werden speciale encryptie functies genaamd “privacy homomorphisms” voorgesteld. De auteurs bespreken het gebruiken van hardware om data veilig te verwerken. De data zouden dan alleen ontcijferd worden op een fysiek veilige processor. Op deze manier wordt de data altijd versleuteld wanneer het de processor verlaat (bv. wanneer het naar het geheugen wordt verplaatst). Het probleem met deze soort chips, is dat het op maat gemaakte hardware is, duur om te implementeren en altijd nog een decoderingssleutel nodig heeft. Voor meer dan 30 jaar was het onduidelijk of er een oplossing bestond. In die periode zijn er een aantal gedeeltelijke oplossingen verschenen (Wikipedia contributors, 2021):

- RSA-cryptosysteem (onbeperkt aantal modulaire vermenigvuldigingen);
- ElGamal cryptosysteem (onbeperkt aantal modulaire vermenigvuldigingen);
- Goldwasser-Micali cryptosysteem (onbeperkt aantal XOR-operaties);
- Benaloh cryptosysteem (onbeperkt aantal modulaire toevoegingen);
- Paillier cryptosysteem (onbeperkt aantal modulaire toevoegingen);
- Sander-Young-Yung-systeem (loste na meer dan 20 jaar het probleem op voor logaritmische diepteschakelingen) (Sander, Young, & Yung, 1999, pp. 554-566);
- Boneh-Goh-Nissim cryptosysteem (onbeperkt aantal optelbewerkingen, maar maximaal één vermenigvuldiging) (Boneh, Goh, & Nissim, 2005);
- Ishai-Paskin cryptosysteem (vertakkingsprogramma’s van polynoomgrootte) (Ishai & Paskin, 2007).

## Eerste generatie FHE

Craig Gentry beschreef de eerste plausibele constructie voor een volledig homomorfe encryptie met behulp van op roosters gebaseerd cryptografie<sup>1</sup> [^wiki2021][^gentry2009]. Gentry’s constructie ondersteunt zowel optel- als vermenigvuldigingsbewerkingen op versleutelde teksten, van waaruit het mogelijk is om schakelingen te maken voor het uitvoeren van willekeurige berekeningen. De constructie volgt een aantal stappen waarin eerst ruis<sup>2</sup> wordt geïntroduceerd en vervolgens wordt gereduceerd. Hierdoor is het mogelijk om een willekeurig aantal optellingen en vermenigvuldigen te berekenen zonder de ruis te veel te verhogen. De Gentry-Halevi implementatie van Gentry’s originele cryptosysteem rapporteerde een timing van ongeveer 30 minuten per simpele bit operatie [^gentry2011]. Uitgebreide ontwerp- en implementatiewerkzaamheden in de daaropvolgende jaren, hebben de runtime-prestaties van deze vroege implementaties met vele ordes van grootte verbeterd.

In 2010 presenteerde Marten van Dijk, Craig Gentry, Shai Halevi en Vinod Vaikuntanathan [^dijk2010] een tweede volledig homomorf encryptieschema, wat veel van de tools van Gentry’s constructie gebruikt.

<sup>1</sup> Zie voor een goede uitleg van op roosters gebaseerde cryptografie de Wikipediapagina ‘[Lattice-based cryptography]’.

<sup>2</sup> Door de cryptografische bewerkingen bevat elke cijfertekst een hoeveelheid ruis [^wiki2021]. Deze ruis groeit wanneer cijferteksten bij elkaar opgeteld of met elkaar vermenigvuldigd worden, totdat de ruis de cijfertekst uiteindelijk niet meer ontcijferbaar maakt.

## Tweede generatie FHE

De homomorfe cryptosystemen die momenteel worden gebruikt, zijn afgeleid van technieken die vanaf 2011-2012 zijn ontwikkeld door Zvika Brakerski, Craig Gentry, Vinod Vaikuntanathan en anderen [^wiki2021]. Deze innovaties leidden tot de ontwikkeling van veel efficiëntere enigszins en volledig homomorfe cryptosystemen. Deze omvatten:

- Het Brakerski-Gentry-Vaikuntanathan-schema [^brak2011a], voortbouwend op technieken van Brakerski-Vaikuntanathan [^brak2011b];
- Het op NTRU<sup>3</sup> gebaseerde schema van Lopez-Alt, Tromer en Vaikuntanathan (LTV) [^lopez2013];
- Het Brakerski/Fan-Vercauteren-schema [^fan2012], wat voortbouwt op Brakerski’s schaal-invariante cryptosysteem [^brak2012];
- Het op NTRU<sup>3</sup> gebaseerde schema van Bos, Lauter, Loftus en Naehrig (BLNN) [^bos2013], voortbouwend op het schaal-invariante cryptosysteem van LTV en Brakerski [^brak2012].

De beveiliging van de meeste van deze schema’s, is gebaseerd op de hardheid van het (Ring) Leren Met Fouten (Engels: Ring Learning With Errors of RLWE) probleem. Behalve de LTV- en BLLN-schema’s, want die vertrouwen op een overbelaste [^alb2016] variant van het NTRU-rekenprobleem<sup>3</sup> [^cheon2016]. Deze NTRU-variant bleek vervolgens kwetsbaar te zijn voor sub-veldroosteraanvallen, en daarom worden deze twee schema’s in de praktijk niet meer gebruikt.

Alle cryptosystemen van de tweede generatie volgen nog steeds de basisblauwdruk van de oorspronkelijke constructie van Gentry. Ze construeren namelijk eerst een ietwat homomorf cryptosysteem en converteren het vervolgens naar een volledig homomorf cryptosysteem met behulp van ‘bootstrapping’.

Een onderscheidend kenmerk van de tweede generatie cryptosystemen is dat ze allemaal een veel langzamere groei van de ruis vertonen tijdens de homomorfe edit-berekeningen. Een ander kenmerk is dat ze efficiënt genoeg zijn voor veel toepassingen, zelfs zonder ‘bootstrapping’ aan te roepen, in plaats daarvan opereren ze in de ‘leveled’ FHE-modus.

<sup>3</sup> NTRU is een open source public-key cryptosysteem wat op roosters gebaseerde cryptografie gebruikt om gegevens te coderen en decoderen [^wiki2020].

## Derde generatie FHE

In 2013 stelden Craig Gentry, Amit Sahai en Brent Waters (GSW) een nieuwe techniek voor, voor het bouwen van FHE-schema’s die een dure stap van ‘relinearisering’ bij homomorfe vermenigvuldigingen vermijden [^gentry2013]. Zvika Brakerski en Vinod Vaikuntanathan merkten op dat het GSW-cryptosysteem, voor bepaalde typen schakelingen, een nog langzamere groeisnelheid van ruis vertoont [^brak2013]. Dit geeft dus een betere efficiëntie en sterkere beveiliging. Jacob Alperin-Sheriff en Chris Peikert beschreven vervolgens een zeer efficiënte ‘bootstrapping’-techniek op basis van deze observatie [^alp2014].

Deze technieken werden verder verbeterd om efficiënte ringvarianten van het GSW-cryptosysteem te ontwikkelen. Hier kwamen het FHEW- [^ducas2014] en TFHE-schema [^carpov2016] uit voort. Het FHEW-schema was het eerste wat aantoonde dat door de versleutelde teksten na elke bewerking te vernieuwen, het mogelijk is om de ‘bootstrapping’-tijd terug te brengen tot een fractie van een seconde. FHEW introduceerde een nieuwe methode om Booleaanse poorten op versleutelde gegevens te berekenen. Hiermee werd ‘bootstrapping’ aanzienlijk vereenvoudigt en werd een variant van de ‘bootstrapping’-methode geïmplementeerd [^alp2014]. De efficiëntie van FHEW werd verder verbeterd door het TFHE-schema, wat een ringvariant van de ‘bootstrapping’-procedure [^gama2014] implementeert met behulp van een methode die vergelijkbaar is met die in FHEW.

## Vierde generatie FHE

Het CKKS-schema [^cheon2017] ondersteunt efficiënte afrondings-bewerkingen in versleutelde toestand [^wiki2021]. De afrondings-bewerking regelt de toename van de ruis bij gecodeerde vermenigvuldiging, waardoor het aantal ‘bootstrapping’ in een schakeling wordt verminderd. In Crypto2018 is op CKKS gefocust als een oplossing voor versleutelde machine learning. Dit komt door een kenmerk van het CKKS-schema dat geschatte waarden codeert in plaats van exacte waarden. Wanneer computers gegevens met een reële waarde opslaan, onthouden ze waarden bij benadering met lange significante bits, niet exact met werkelijke waarden. Het CKKS-schema is ontworpen om efficiënt om te gaan met de fouten die voortvloeien uit de benaderingen. Het schema is bekend bij machine learning, wat inherent ruis in zijn structuur heeft. Ieder schema heeft zo zijn sterke en zwakke punten.

Doordat CKKS met afgeronde waarden werkt, in plaats van exacte is het mogelijk dat hierdoor kwetsbaarheden ontstaan. Een artikel uit 2021 van Baiyu Li en Daniele Micciancio bespreekt passieve aanvallen tegen CKKS [^li2020]. De auteurs passen de aanval toe op vier moderne homomorfe encryptie libraries (HEAAN, SEAL, HElib en PALISADE) en melden dat het mogelijk is om de geheime sleutel te herstellen in verschillende parameter-configuraties. Volgens het artikel zou een mogelijke beperking, het bijwerken van het encryptiealgoritme van CKKS vereisen om te voorkomen dat de encryptieruis van een versleutelde tekst wordt achterhaald.


Dit artikel is gebaseerd op een onderzoeksrapport wat ik geschreven heb voor het project "Fully Homomorphic Encryption" in opdracht van SALT Cyber Security. [Onderzoeksrapport_Thomas van den Nieuwenhoff_S1124775_V1.0_Redacted.pdf]()
{:.note title="Opmerking"}

<!-- Sources -->
[^wiki2021]: Wikipedia contributors, "Homomorphic Encryption", *Wikipedia, The Free Encyclopedia*, 2021. [Online]. Available: [https://en.wikipedia.org/w/index.php?title=Homomorphic_encryption&oldid=1002934075](https://en.wikipedia.org/w/index.php?title=Homomorphic_encryption&oldid=1002934075).
[^vaik2012]: V. Vaikuntanathan, "Homomorphic Encryption: WHAT, WHY, and HOW", 2012. Available: [https://www.cs.toronto.edu/~vinodv/Homomorphic-MCSS.pptx](https://www.cs.toronto.edu/~vinodv/Homomorphic-MCSS.pptx).
[^will2015]: M. Will and R. Ko, "A guide to homomorphic encryption", in *The Cloud Security Ecosystem*, R. Ko and R. Choo, Ed. 2015.
[^rivest1978]: R.L. Rivest, L. Adleman, M.L. Dertouzos, "On Data Banks and Privacy Homomorphisms", *Foundations of Secure Computation*, 1978. Available: [https://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=EA7BED6BE588981303D0EEC5C2EDDB0B?doi=10.1.1.500.3989&rep=rep1&type=pdf](https://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=EA7BED6BE588981303D0EEC5C2EDDB0B?doi=10.1.1.500.3989&rep=rep1&type=pdf).
[^gentry2009]: C. Gentry, "Fully Homomorphic Encryption Using Ideal Lattices", *41st ACM Symposium on Theory of Computing (STOC)*, 2009. Available: [https://www.cs.cmu.edu/~odonnell/hits09/gentry-homomorphic-encryption.pdf](https://www.cs.cmu.edu/~odonnell/hits09/gentry-homomorphic-encryption.pdf).
[^gentry2011]: C. Gentry, S. Halevi, "Implementing Gentry's Fully-Homomorphic Encryption Scheme", 2011. [Online]. Available: [https://eprint.iacr.org/2010/520.pdf](https://eprint.iacr.org/2010/520.pdf).
[^dijk2010]: M. van Dijk, C. Gentry, S. Halevi, V. Vaikuntanathan, "Fully Homomorphic Encryption over the Integers", *Eurocrypt 2010*, 2010. Available: [https://eprint.iacr.org/2009/616.pdf].
[^brak2011a]: Z. Brakerski, C. Gentry, V. Vaikuntanathan, "Fully Homomorphic Encryption without Bootstrapping", *ITCS 2012*, 2011. Available: [https://eprint.iacr.org/2011/277.pdf](https://eprint.iacr.org/2011/277.pdf).
[^brak2011b]: Z. Brakerski, V. Vaikuntanathan, "Efficient Fully Homomorphic Encryption from (Standard) LWE", *FOCS 2011*, 2011. Available: [https://eprint.iacr.org/2011/344.pdf](https://eprint.iacr.org/2011/344.pdf).
[^lopez2013]: A. Lopez-Alt, E. Tromer, V. Vaikuntanathan, "On-the-Fly Multiparty Computation on the Cloud via Multikey Fully Homomorphic Encryption", *STOC 2012*, 2013. Available: [https://eprint.iacr.org/2013/094.pdf](https://eprint.iacr.org/2013/094.pdf).
[^wiki2020]: Wikipedia contributors, "NTRU", *Wikipedia, The Free Encyclopedia*, 2020. [Online]. Available: [https://en.wikipedia.org/w/index.php?title=NTRU&oldid=997278152](https://en.wikipedia.org/w/index.php?title=NTRU&oldid=997278152).
[^fan2012]: J. Fan, F. Vercauteren, "Somewhat Practical Fully Homomorphic Encryption", 2012. [Online]. Available: [https://eprint.iacr.org/2012/144.pdf](https://eprint.iacr.org/2012/144.pdf).
[^brak2012]: Z. Brakerski, "Fully Homomorphic Encryption without Modulus Switching from Classical GapSVP", *CRYPTO 2012*, 2012. Available: [https://eprint.iacr.org/2012/078.pdf](https://eprint.iacr.org/2012/078.pdf).
[^bos2013]: J. Bos, K. Lauter, J. Loftus, M. Naehrig, "Improved Security for a Ring-Based Fully Homomorphic Encryption Scheme", *IMACC 2013*, 2013. Available: [https://eprint.iacr.org/2013/075.pdf](https://eprint.iacr.org/2013/075.pdf).
[^alb2016]: M. Albrecht, S. Bai, L. Ducas, "A subfield lattice attack on overstreched NTRU assumptions", *CRYPTO 2016*, 2016. Available: [https://eprint.iacr.org/2016/127.pdf](https://eprint.iacr.org/2016/127.pdf).
[^cheon2016]: J.H. Cheon, J. Jeong, C. Lee, "An algorithm for NTRU problems and cryptanalysis of the GGH multilinear map without a low-level encoding of zero", *LMS Journal of Computation and Mathematics*, vol. 19, no. A, pp. 255-266, 2016. Available: [https://www.cambridge.org/core/journals/lms-journal-of-computation-and-mathematics/article/an-algorithm-for-ntru-problems-and-cryptanalysis-of-the-ggh-multilinear-map-without-a-lowlevel-encoding-of-zero/230ECFEEE6AF4D8027FF3E13998D560C](https://www.cambridge.org/core/journals/lms-journal-of-computation-and-mathematics/article/an-algorithm-for-ntru-problems-and-cryptanalysis-of-the-ggh-multilinear-map-without-a-lowlevel-encoding-of-zero/230ECFEEE6AF4D8027FF3E13998D560C).
[^gentry2013]: C. Gentry, A. Sahai, B. Waters, "Homomorphic Encryption from Learning with Errors: Conceptually-Simpler, Asymptotically-Faster, Attribute-Based", *CRYPTO 2013*, 2013. Available: [https://eprint.iacr.org/2013/340.pdf](https://eprint.iacr.org/2013/340.pdf).
[^brak2013]: Z. Brakerski, V. Vaikuntanathan, "Lattice-Based FHE as Secure as PKE", *ITCS 2014*, 2013. Available: [https://eprint.iacr.org/2013/541.pdf](https://eprint.iacr.org/2013/541.pdf).
[^alp2014]: J. Alperin-Sheriff, C. Peikert, "Faster Bootstrapping with Polynomial Error", *CRYPTO 2014*, 2014. Available: [https://eprint.iacr.org/2014/094.pdf](https://eprint.iacr.org/2014/094.pdf).
[^ducas2014]: L. Ducas, D. Micciancio, "FHEW: A Fully Homomorphic Encryption library", 2014. [Online]. Available: [https://github.com/lducas/FHEW/tree/0959af8daf6635a5e69013f6db7120c6d39e2319](https://github.com/lducas/FHEW/tree/0959af8daf6635a5e69013f6db7120c6d39e2319).
[^carpov2016]: S. Carpov, I. Chillotti, N. Gama, M. Georgieva, M. Izabachene, "TFHE: Fast Fully Homomorphic Encryption Library", 2016. [Online]. Available: [https://tfhe.github.io/tfhe/](https://tfhe.github.io/tfhe/). [Accessed 9 February 2021].
[^gama2014]: N. Gama, M. Izabachene, P.Q. Nguyen, X. Xie, "Structural Lattice Reduction: Generalized Worst-Case to Average-Case Reductions and Homomorphic Cryptosystems", *EUROCRYPT 2016*, 2014. Available: [https://eprint.iacr.org/2014/283.pdf](https://eprint.iacr.org/2014/283.pdf).
[^cheon2017]: J.H. Cheon, A. Kim, M. Kim, Y. Song, "Homomorphic Encryption for Arithmetic of Approximate Numbers", *ASIACRYPT 2017*, pp. 409-437, 2017. Available: [https://link.springer.com/content/pdf/10.1007%2F978-3-319-70694-8_15.pdf](https://link.springer.com/content/pdf/10.1007%2F978-3-319-70694-8_15.pdf).
[^li2020]: B. Li, D. Micciancio, "On the Security of Homomorphic Encryption on Approximate Numbers", 2020. [Online]. Available: [https://eprint.iacr.org/2020/1533.pdf](https://eprint.iacr.org/2020/1533.pdf).

<!-- Links -->
[Lattice-based cryptography]: https://en.wikipedia.org/wiki/Lattice-based_cryptography
