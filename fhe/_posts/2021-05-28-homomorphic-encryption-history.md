---
layout: post
title: "Fully Homomorphic Encryption: the history"
image: /assets/blog/2021-05-28-homomorphic-encryption-history/cover.svg
description: Fully Homomorphic Encryption isn't something that was cooked up by a cryptographer yesterday. How did we get where we are today?
author: tvdn
excerpt_separator: "<!--more-->"
---

HE already has a considerable history and has been approached in different ways. For years, attempts have been made to get FHE to work without success. Until Craig Gentry at IBM came up with the first completely homomorphic encryption in October 2008.

Estimated reading time: 5 minutes
{:.faded}

<!--more-->

This post is part 2 of the [Fully Homomorphic Encryption] series.

<br>

- Table of Contents
{:toc}

![fhehist]{:loading="lazy" width="860" height="410"}

## Pre-FHE

As far as we know, the idea that homomorphic encryption can be used to protect data has been around for decades [^will2015]. The problem of creating a completely homomorphic encryption was first proposed in 1978 [^rivest1978]. Special encryption functions called "privacy homomorphisms" were proposed. The authors discuss using hardware to process data securely. The data would then only be decrypted on a physically secure processor. This way, the data is always encrypted when it leaves the processor (e.g., when it is moved to memory). The problem with these kinds of chips is that it is custom hardware, expensive to implement, and still requires a decryption key. For more than 30 years it was unclear whether a solution to this problem existed. During that period, a number of partial solutions have emerged [^wiki2021]:

- RSA cryptosystem (unlimited number of modular multiplications);
- ElGamal cryptosystem (unlimited number of modular multiplications);
- Goldwasser-Micali cryptosystem (unlimited number of XOR operations);
- Benaloh cryptosystem (unlimited number of modular additions);
- Paillier cryptosystem (unlimited number of modular additions);
- Sander-Young-Yung system (solved the problem for logarithmic depth switching after more than 20 years) [^sander1999];
- Boneh-Goh-Nissim cryptosystem (unlimited number of addition operations, but maximum of one multiplication) [^boneh2005];
- Ishai-Paskin cryptosystem (polynomial-size branching programs) [^ishai2007].

Homomorphic Encryption has been around as an idea for over 30 years. Back then it was still the intention that physically safe processors would be used.
{:.note title="Note"}

## First-generation FHE

Craig Gentry described the first plausible construct for a completely homomorphic encryption using lattice-based cryptography<sup>1</sup> [^wiki2021][^gentry2009]. Gentry's construction supports both addition and multiplication operations on encrypted texts, from which it is possible to create circuits to perform arbitrary calculations. The construction follows a number of steps in which noise<sup>2</sup> is first introduced and then reduced. This makes it possible to calculate any number of additions and multiplications without increasing the noise too much. The Gentry-Halevi implementation of Gentry’s original cryptosystem reported a timing of approximately 30 minutes per simple bit operation [^gentry2011]. Extensive design and implementation work in the following years has improved the runtime performance of these early implementations by many orders of magnitude.

In 2010, Marten van Dijk, Craig Gentry, Shai Halevi and Vinod Vaikuntanathan [^dijk2010] presented a second fully homomorphic encryption scheme, which uses many of the tools of Gentry's construction.

<sup>1</sup> For a good explanation of lattice-based cryptography, see the Wikipedia page '[Lattice-based cryptography]'.

<sup>2</sup> Because of the cryptographic operations, each ciphertext contains an amount of noise [^wiki2021]. This noise grows when ciphertexts are added or multiplied together, until the noise eventually renders the ciphertext undecipherable.

Craig Gentry was the first to describe a plausible construction for a completely homomorphic encryption. Together with Shai Halevi he managed to set up a construction in which a simple bit operation took about 30 minutes.
{:.note title="Note"}

## Second-generation FHE

The homomorphic cryptosystems currently in use are derived from techniques developed from 2011-2012 by Zvika Brakerski, Craig Gentry, Vinod Vaikuntanathan and others [^wiki2021]. These innovations led to the development of much more efficient, somewhat and completely homomorphic cryptosystems. These include:

- The Brakerski-Gentry-Vaikuntanathan scheme [^brak2011a], building on techniques from Brakerski-Vaikuntanathan [^brak2011b];
- The NTRU<sup>3</sup> based scheme of Lopez-Alt, Tromer and Vaikuntanathan (LTV) [^lopez2013];
- The Brakerski/Fan-Vercauteren schema [^fan2012], which builds on Brakerski’s scale-invariant cryptosystem [^brak2012];
- The NTRU<sup>3</sup> based scheme of Bos, Lauter, Loftus and Naehrig (BLNN) [^bos2013], building on the scale-invariant cryptosystem of LTV and Brakerski [^brak2012].

The security of most of these schemes is based on the hardness of the Ring Learning With Errors or RLWE problem. Except for the LTV and BLLN schemes, which rely on an overloaded [^alb2016] variant of the NTRU computation problem<sup>3</sup> [^cheon2016]. This NTRU variant was subsequently found to be vulnerable to subfield lattice attacks, and therefore these two schemes are not used in practice any more.

All second-generation cryptosystems still follow the basic blueprint of Gentry's original construction. They first construct a somewhat homomorphic cryptosystem and then convert it to a fully homomorphic cryptosystem using bootstrapping.

A distinctive feature of the second generation cryptosystems is that they all show a much slower noise growth during the homomorphic edit calculations. Another feature is that they are efficient enough for many applications, even without calling bootstrapping, instead they operate in leveled FHE mode.

<sup>3</sup> NTRU is an open source public-key cryptosystem that uses lattice-based cryptography to encode and decrypt data [^wiki2020].

All cryptosystems of this generation still follow Gentry's basic blueprint, but exhibit much slower noise growth and are much more efficient.
{:.note title="Note"}

## Third-generation FHE

In 2013, Craig Gentry, Amit Sahai and Brent Waters (GSW) proposed a new technique for building FHE schemes that avoid an expensive "relinearization" step in homomorphic multiplications [^gentry2013]. Zvika Brakerski and Vinod Vaikuntanathan noted that the GSW cryptosystem exhibits an even slower noise growth rate for certain circuit types [^brak2013]. Thus, this gives better efficiency and stronger security. Jacob Alperin-Sheriff and Chris Peikert then described a very efficient bootstrapping technique based on this observation [^alp2014].

These techniques were further improved to develop efficient ring variants of the GSW cryptosystem. This resulted in the FHEW- [^ducas2014] and TFHE-scheme [^carpov2016]. The FHEW scheme was the first to show that by refreshing the encrypted texts after each edit, it is possible to reduce the bootstrapping time to a fraction of a second. FHEW introduced a new method to calculate Boolean ports on encrypted data. This significantly simplified bootstrapping and implemented a variant of the bootstrapping method [^alp2014]. The efficiency of FHEW was further enhanced by the TFHE scheme, which implements a ring variant of the bootstrapping procedure [^gama2014] using a method similar to that in FHEW.

Great leaps in efficiency have been made in the third generation of FHE. The FHEW scheme reduced the bootstrapping time to a fraction of a second and the TFHE scheme built on this.
{:.note title="Note"}

## Fourth-generation FHE

The CKKS scheme [^cheon2017] supports efficient encrypted rounding operations [^wiki2021]. The rounding operation controls the increase in noise in coded multiplication, reducing the number of bootstrapping in a circuit. In Crypto2018, CKKS is focused on as a solution to encrypted machine learning. This is due to a feature of the CKKS scheme that encodes estimated values instead of exact values. When computers store real-valued data, they remember approximate values with long significant bits, not exactly with actual values. The CKKS scheme is designed to deal efficiently with the errors resulting from the approximates. The scheme is known in the machine learning world, which has inherent noise in its structure. Every scheme has its strengths and weaknesses in this way.

Because CKKS works with rounded values, instead of exact values, it is possible that vulnerabilities arise. A 2021 article by Baiyu Li and Daniele Micciancio discusses passive attacks against CKKS [^li2020]. The authors apply the attack to four modern homomorphic encryption libraries (HEAAN, SEAL, HElib and PALISADE) and report that it is possible to recover the secret key in different parameter configurations. According to the article, a possible limitation would require updating the CKKS encryption algorithm to avoid detecting the encryption noise of an encrypted text.

FHE is currently in its fourth generation. This mainly focuses on practical applications and broadening the applicability.
{:.note title="Note"}


This article is based on a [research report] I wrote for the project "Fully Homomorphic Encryption" commissioned by [SALT Cyber Security]. You can also read this blog post (in Dutch) on their website at [https://salt-security.com/nieuws/fully-homomorphic-encryption-de-geschiedenis/](https://salt-security.com/nieuws/fully-homomorphic-encryption-de-geschiedenis/).
{:.note title="Comment"}

<!-- Sources -->
[^wiki2021]: Wikipedia contributors, "Homomorphic Encryption", *Wikipedia, The Free Encyclopedia*, 2021. [Online]. Available: [https://en.wikipedia.org/w/index.php?title=Homomorphic_encryption&oldid=1002934075](https://en.wikipedia.org/w/index.php?title=Homomorphic_encryption&oldid=1002934075).
[^vaik2012]: V. Vaikuntanathan, "Homomorphic Encryption: WHAT, WHY, and HOW", 2012. Available: [https://www.cs.toronto.edu/~vinodv/Homomorphic-MCSS.pptx](https://www.cs.toronto.edu/~vinodv/Homomorphic-MCSS.pptx).
[^sander1999]: T. Sander, A.L. Young, M. Yung, "Non-Interactive CryptoComputing For NC1", pp. 554-566, 1999.
[^boneh2005]: D. Boneh, E.J. Goh, K. Nissim, "Evaluating 2-DNF Formulas on Ciphertexts", *Theory of Cryptography Conference*, 2005. Available: [https://link.springer.com/content/pdf/10.1007/978-3-540-30576-7_18.pdf](https://link.springer.com/content/pdf/10.1007/978-3-540-30576-7_18.pdf).
[^ishai2007]: Y. Ishai, A. Paskin, "Evaluating Branching Programs on Encrypted Data", *Theory of Cryptography*, 2007. Available: [https://link.springer.com/content/pdf/10.1007%2F978-3-540-70936-7_31.pdf](https://link.springer.com/content/pdf/10.1007%2F978-3-540-70936-7_31.pdf).
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
[^alb2016]: M. Albrecht, S. Bai, L. Ducas, "A subfield lattice attack on overstretched NTRU assumptions", *CRYPTO 2016*, 2016. Available: [https://eprint.iacr.org/2016/127.pdf](https://eprint.iacr.org/2016/127.pdf).
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
[Fully Homomorphic Encryption]: /fhe
[research report]: /assets/blog/2021-05-04-fully-homomorphic-encryption-what-and-why/Onderzoeksrapport_Thomas van den Nieuwenhoff_S1124775_V1.0_Redacted.pdf
[SALT Cyber Security]: https://salt-security.com/

<!-- Images -->
[fhehist]: /assets/blog/2021-05-28-homomorphic-encryption-history/fhehist.svg
