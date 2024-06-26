---
layout: post
title: 'Fully Homomorphic Encryption: what and why?'
date: 2021-05-04 12:52 +0200
image: /assets/blog/2021-05-04-fully-homomorphic-encryption-what-and-why/cover.svg
description: >
  Homomorphic Encryption is considered the holy grail of encryption, but what is it and how can it be used?
author: tvdn
excerpt_separator: <!--more-->
---

You may have heard of it, but it probably doesn't mean anything to you yet: _Homomorphic Encryption_. In short, it is a form of encryption in which data can be converted into a ciphertext, while they can be analyzed as if they were still in their original form. Sounds interesting? Then read on!

Estimated reading time: 2 minutes
{:.faded}

<!--more-->

This post is part 1 of the [Fully Homomorphic Encryption] series.

> Fully Homomorphic Encryption is the holy grail of encryption.
>
> &mdash; <cite>Daniele Micciancio</cite>
{:.lead}

- Table of Contents
{:toc}

## What is _Homomorphic Encryption_?

_Homomorphic Encryption_
: The conversion of data into ciphertext that can be analyzed and processed as if they were still in its original form [^wiki2021].

_Homomorphic Encryption_ (HE) therefore makes it possible to make (certain) calculations with _encrypted_ text [^wiki2019]. This process looks like this:

![heprocdiag]{:loading="lazy" width="542" height="254"} [^hall2018]

The numbers '7' and '5' are cryptographically converted into illegible numerical text. These ciphertexts are then added together, and it is cryptographically possible to find out the readable (_plaintext_) answer.
{:.figcaption}

An _evaluation key_ is needed to apply functions to encrypted data [^armk2015]. In addition, a secret key is needed with which data can be deciphered. These two operations are separated by two different keys security wise.
{:.note title="Comment"}

_Homomorphic Encryption_ makes it possible to process data in encrypted form without having to decrypt it.
{:.note title="Note"}

<details>
  <summary class="accordion">Want to know more?</summary>
  <div style="position:relative;padding-top:56.25%;">
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/5Mhbaeuv5fk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
  </div>
</details>

### FHE vs. PHE

HE can use different encryption forms, which can perform different types of computations [^wiki2021]. What form of encryption is used dictates whether the encryption is completely homomorphic (FHE) or only partially so (PHE). When the encryption form is completely homomorphic (also called the "holy grail" of encryption), it can be used for any purpose [^wiki2021][^armk2015][^will2015]. _Partially Homomorphic Encryption_ (PHE) can only be used for additions or multiplications, not both. FHE **does** support this and has the potential to support much more. In addition to FHE and PHE, there are a number of other categories of HE. For example, there is _Somewhat Homomorphic Encryption_ (SWHE) and _Leveled Fully Homomorphic Encryption_ (LFHE). These are different combinations of HE in which additional functionality has been added.

_Partially Homomorphic Encryption_ differs from _Fully Homomorphic Encryption_ because it can support additions or multiplications, not both.
{:.note title="Note"}

## The history

![fhehist]{:loading="lazy" width="860" height="410"}

HE already has quite a history and has been approached in different ways [^wiki2021]. There has been years of trying to get FHE working, without success [^vaik2012]. Until Craig Gentry came up with the first fully homomorphic encryption at IBM in October 2008.

Want to know more? Then read my [**blog post about the history of FHE**](/fhe/2021-05-27-homomorphic-encryption-history).
{:.read-more}

## The pros and cons

![fheprocon]{:loading="lazy" width="1345" height="571"}

A revolutionary, but still young technology like FHE of course has many advantages and disadvantages. An example of this is the advantage that encrypted data can be processed, but the performance of this process is leaps behind what we are used to.

Want to know more? Then read my [**blog post about the pros and cons of FHE**](/fhe/_posts/2021-11-14-fully-homomorphic-encryption-pro-con).
{:.read-more}

## The business applications

There are a number of parties such as IBM and Microsoft that are investing heavily in FHE and its applications. IBM, for example, has implemented FHE at a Brazilian bank to protect the privacy of their customers in an AI project. Among other things, Microsoft uses FHE in an interesting way in their Edge browser.

Want to know more? Then read my [**blog post about FHE's business applications**](/fhe/_posts/2021-11-15-homomorphic-encryption-applications).
{:.read-more}

This article is based on a [research report] I wrote for the project "Fully Homomorphic Encryption" commissioned by [SALT Cyber Security]. You can also read this blog post (in Dutch) on their website at [https://salt-security.com/nieuws/fully-homomorphic-encryption-wat-en-waarom/](https://salt-security.com/nieuws/fully-homomorphic-encryption-wat-en-waarom/).
{:.note title="Comment"}

<!-- Sources -->

[^wiki2021]: Wikipedia contributors, "Homomorphic Encryption", _Wikipedia, The Free Encyclopedia_, 2021. [Online]. Available: [https://en.wikipedia.org/w/index.php?title=Homomorphic_encryption&oldid=1002934075](https://en.wikipedia.org/w/index.php?title=Homomorphic_encryption&oldid=1002934075).
[^wiki2019]: Wikipedia-bijdragers, "Homorfe Encryptie", _Wikipedia, de vrije encyclopedie_, 2019. [Online]. Available: [https://nl.wikipedia.org/w/index.php?title=Homomorfe_encryptie&oldid=54824375](https://nl.wikipedia.org/w/index.php?title=Homomorfe_encryptie&oldid=54824375).
[^hall2018]: R. Hallman et al., "Building Applications with Homomorphic Encryption", 2018. Available: [https://homomorphicencryption.org/wp-content/uploads/2018/10/CCS-HE-Tutorial-Slides.pdf](https://homomorphicencryption.org/wp-content/uploads/2018/10/CCS-HE-Tutorial-Slides.pdf).
[^armk2015]: F. Armknecht, C. Boyd, C. Carr, K. Gjøsteen, A. Jäschke, C.A. Reuter and M. Strand, "A Guide to Fully Homomorphic Encryption", _International Association for Cryptologic Research_, 2015. Available: [https://eprint.iacr.org/eprint-bin/getfile.pl?entry=2015/1192&version=20160914:161519&file=1192.pdf](https://eprint.iacr.org/eprint-bin/getfile.pl?entry=2015/1192&version=20160914:161519&file=1192.pdf).
[^will2015]: M. Will and R. Ko, "A guide to homomorphic encryption", in _The Cloud Security Ecosystem_, R. Ko and R. Choo, Ed. 2015.
[^vaik2012]: V. Vaikuntanathan, "Homomorphic Encryption: WHAT, WHY, and HOW", 2012. Available: [https://www.cs.toronto.edu/~vinodv/Homomorphic-MCSS.pptx](https://www.cs.toronto.edu/~vinodv/Homomorphic-MCSS.pptx).

<!-- Pictures -->

[heprocdiag]: /assets/blog/2021-05-04-fully-homomorphic-encryption-what-and-why/heprocdiag.jpg
[fhehist]: /assets/blog/2021-05-27-homomorphic-encryption-history/fhehist.svg
[fheprocon]: /assets/blog/2021-11-14-fully-homomorphic-encryption-pro-con/fheprocon.svg

<!-- Links -->

[research report]: /assets/blog/2021-05-04-fully-homomorphic-encryption-what-and-why/Onderzoeksrapport_Thomas van den Nieuwenhoff_S1124775_V1.0_Redacted.pdf
[SALT Cyber Security]: https://salt-security.com/
[Fully Homomorphic Encryption]: /fhe
