---
layout: post
title: "Fully Homomorphic Encryption: what and why?"
date: 2021-02-23 02:00 +0200
image: /assets/blog/2021-02-23-fully-homomorphic-encryption-what-and-why/cover.svg
description: >
  Homomorphic Encryption is considered the holy grail of encryption, but what is it and how can it be used?
author: tvdn
excerpt_separator: <!--more-->
---

You may have heard of it, but it probably doesn't mean anything to you yet: *Homomorphic Encryption*. In short, it is a form of encryption in which data can be converted into a ciphertext, while they can be analyzed as if they were still in their original form. Sounds interesting? Then read on!

Estimated reading time: 2 minutes
{:.faded}

<!--more-->

- Table of Contents
{:toc}

## What is *Homomorphic Encryption*?

*Homomorphic Encryption*
: The conversion of data into ciphertext that can be analyzed and processed as if they were still in its original form [^wiki2021].

*Homomorphic Encryption* (HE) therefore makes it possible to make (certain) calculations with *encrypted* text [^wiki2019]. This process looks like this:

![heprocdiag]{:loading="lazy" width="542" height="254"} [^hall2018]

The numbers '7' and '5' are cryptographically converted into illegible numerical text. These ciphertexts are then added together, and it is cryptographically possible to find out the readable (*plaintext*) answer.
{:.figcaption}

An *evaluation key* is needed to apply functions to encrypted data [^armk2015]. In addition, a secret key is needed with which data can be deciphered. These two operations are separated by two different keys security wise.
{:.note title="Comment"}

*Homomorphic Encryption* makes it possible to process data in encrypted form without having to decrypt it.
{:.note title="Note"}

### FHE vs. PHE

HE can use different encryption forms, which can perform different types of computations [^wiki2021]. What form of encryption is used dictates whether the encryption is completely homomorphic (FHE) or only partially so (PHE). When the encryption form is completely homomorphic (also called the "holy grail" of encryption), it can be used for any purpose [^wiki2021][^armk2015][^will2015]. *Partially Homomorphic Encryption* (PHE) can only be used for additions or multiplications, not both. FHE **does** support this and has the potential to support much more. In addition to FHE and PHE, there are a number of other categories of HE. For example, there is *Somewhat Homomorphic Encryption* (SWHE) and *Leveled Fully Homomorphic Encryption* (LFHE). These are different combinations of HE in which additional functionality has been added.

*Partially Homomorphic Encryption* differs from *Fully Homomorphic Encryption* because it can support additions or multiplications, not both.
{:.note title="Note"}

## The history

![fhehist]{:loading="lazy" width="860" height="410"}

HE already has quite a history and has been approached in different ways [^wiki2021]. There has been years of trying to get FHE working, without success [^vaik2012]. Until Craig Gentry came up with the first fully homomorphic encryption at IBM in October 2008.

Want to know more? Then read my (upcoming) [**blog post about the history of FHE**](){:.btn .disabled}.
{:.read-more}

## The pros and cons

![fheprocon]{:loading="lazy" width="1345" height="571"}

A revolutionary, but still young technology like FHE of course has many advantages and disadvantages. An example of this is the advantage that encrypted data can be processed, but the performance of this process is leaps behind what we are used to.

Want to know more? Then read my [**blog post about the pros and cons of FHE**](){:.btn .disabled}.
{:.read-more}

## The business applications

There are a number of parties such as IBM and Microsoft that are investing heavily in FHE and its applications. IBM, for example, has implemented FHE at a Brazilian bank to protect the privacy of their customers in an AI project. Among other things, Microsoft uses FHE in an interesting way in their Edge browser.

Want to know more? Then read my [**blog post about FHE's business applications**](){:.btn .disabled}.
{:.read-more}


This article is based on a [research report] I wrote for the project "Fully Homomorphic Encryption" commissioned by [SALT Cyber Security]. You can also read this blog post (in Dutch) on their website at [https://salt-security.com/nieuws/fully-homomorphic-encryption-wat-en-waarom/](https://salt-security.com/nieuws/fully-homomorphic-encryption-wat-en-waarom/).
{:.note title="Comment"}

<!-- Sources -->
[^wiki2021]: "Homomorphic Encryption", *Wikipedia, The Free Encyclopedia*, 2021. [Online]. Available: [https://en.wikipedia.org/w/index.php?title=Homomorphic_encryption&oldid=1002934075](https://en.wikipedia.org/w/index.php?title=Homomorphic_encryption&oldid=1002934075).
[^wiki2019]: "Wikipedia-bijdragers", *Wikipedia, de vrije encyclopedie*, 2019. [Online]. Available: [https://nl.wikipedia.org/w/index.php?title=Homomorfe_encryptie&oldid=54824375](https://nl.wikipedia.org/w/index.php?title=Homomorfe_encryptie&oldid=54824375).
[^hall2018]: R. Hallman et al., "Building Applications with Homomorphic Encryption", 2018. Available: [https://homomorphicencryption.org/wp-content/uploads/2018/10/CCS-HE-Tutorial-Slides.pdf](https://homomorphicencryption.org/wp-content/uploads/2018/10/CCS-HE-Tutorial-Slides.pdf).
[^armk2015]: F. Armknecht, C. Boyd, C. Carr, K. Gjøsteen, A. Jäschke, C.A. Reuter and M. Strand, "A Guide to Fully Homomorphic Encryption", *International Association for Cryptologic Research*, 2015. Available: [https://eprint.iacr.org/eprint-bin/getfile.pl?entry=2015/1192&version=20160914:161519&file=1192.pdf](https://eprint.iacr.org/eprint-bin/getfile.pl?entry=2015/1192&version=20160914:161519&file=1192.pdf).
[^will2015]: M. Will and R. Ko, "A guide to homomorphic encryption", in *The Cloud Security Ecosystem*, R. Ko and R. Choo, Ed. 2015.
[^vaik2012]: V. Vaikuntanathan, "Homomorphic Encryption: WHAT, WHY, and HOW", 2012. Available: [https://www.cs.toronto.edu/~vinodv/Homomorphic-MCSS.pptx](https://www.cs.toronto.edu/~vinodv/Homomorphic-MCSS.pptx).

<!-- Pictures -->
[heprocdiag]: /assets/blog/2021-02-23-fully-homomorphic-encryption-what-and-why/heprocdiag.jpg
[fhehist]: /assets/blog/2021-02-23-fully-homomorphic-encryption-what-and-why/fhehist.svg
[fheprocon]: /assets/blog/2021-02-23-fully-homomorphic-encryption-what-and-why/fheprocon.svg

<!-- Links -->
[research report]: /assets/blog/2021-02-23-fully-homomorphic-encryption-what-and-why/Onderzoeksrapport_Thomas van den Nieuwenhoff_S1124775_V1.0_Redacted.pdf
[SALT Cyber Security]: https://salt-security.com/
