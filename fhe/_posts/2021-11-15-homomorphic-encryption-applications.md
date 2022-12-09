---
layout: post
title: 'Fully Homomorphic Encryption: the business applications'
date: 2021-11-15 12:00 +0200
image: /assets/blog/2021-11-15-homomorphic-encryption-applications/cover.svg
description: >
  Fully Homomorphic Encryption creates many new ways we can use our encrypted data. What applications are already out there, and what may be possible in the future?
author: tvdn
# excerpt_separator: "<!--more-->"
---

There are not many organizations that already use FHE. Who does (and how), and what is possible?

Estimated reading time: minutes
{:.faded}

<!--more-->

This post is part 4 of the [Fully Homomorphic Encryption] series.

<br>

- Table of Contents
{:toc}

## Current applications

Because Fully Homomorphic Encryption is still in a fairly experimental phase, few organizations are using the technology yet. The companies that already use FHE are, for example, [IBM], [Microsoft] and [Google].

### IBM field trials

IBM says it has implemented FHE in two cases. Once in 2019 at the Brazilian bank [Banco Bradesco](https://banco.bradesco/) [^masters2019] and a second time at a European bank [^salter2020] (the research paper of which has not yet been published). At Banco Bradesco, there was a need for a machine learning model that could work securely with financial data from their customers. This data had to be used to predict whether a specific customer would apply for a loan in the next three months. FHE can help with this issue as it allows the bank to safeguard the privacy of their customers while gaining useful insights about the customer's condition. The customer can then receive a better offer or be helped out in another way.

To achieve this, all financial data and the machine learning model itself are first homomorphically encrypted [^moskovitch2020]. Subsequently, IBM was able to demonstrate that it was possible to perform predictions with the same accuracy as without encryption. Finally, the model was also trained with encrypted data, which showed that it is possible to use FHE to guarantee privacy in this case. This means that it seems quite possible for banks to really start using this technology. This allows them to safely outsource prediction execution to an untrusted environment.

### Password monitoring Edge and Chrome

The most used application of FHE at the moment, is probably the password monitoring function of Microsoft Edge [^lauter2021] and Google Chrome [^pullman2019]. The web browsers offer the functionality of a password vault, so it is important to properly protect information within this function. To encrypt passwords, while retaining the ability to compare them to a database of leaked passwords, homomorphic encryption is used. Microsoft uses a modified version of their SEAL FHE solution in Edge. All passwords (and usernames) are hashed and made unreadable with a traditional form of encryption (see Figure 1) [^lauter2021]. The information is then homomorphically encrypted. The highly encrypted information is sent to the cloud to be compared against huge password databases. The results of this are processed locally by the user to determine whether the checked username and password combination actually exists in the database. If this is the case, the user will see a warning (see Figure 2) [^microsoft]. The implementation in Google Chrome works in a similar way.

![edgeflow]{:loading="lazy" width="1400" height="788"}

Figure 1. Edge Password Monitor HE flow diagram.
{:.figcaption}

![edgepopup]{:loading="lazy" width="666" height="325"}

Figure 2. Edge Password Monitor popup.
{:.figcaption}

### Microsoft ElectionGuard

A final example of FHE in practice is Microsoft's product [ElectionGuard](https://www.electionguard.vote/) [^thornton2020]. It provides a way to verify that election results are correct, and that votes have not been altered, suppressed, or otherwise been tampered with in any way. Individual voters can see that their vote has been registered and that their choice has been correctly added to the final count. Anyone who wants to follow the election can verify that all votes have been tallied correctly to obtain an accurate and fair result. The principle of secret ballots means not only that each person's vote should be private, but must be private so that votes cannot be bought, sold or coerced.

ElectionGuard uses FHE to ensure this. Each voter receives a tracking code to verify that their vote goes through the system unchanged and ends up in the final count. However, this code cannot be used to prove how a vote was cast, it can only be proven that the vote has not been changed. During the count, all encrypted votes can simply be added together, without anyone ever being able to see the content of the vote.

---

## Possible applications

So FHE is already being applied in a number of ways in practice, but what other applications are possible?

<div class="flip-box-container">
  <div class="flip-box-row">
    <div class="flip-box-column">
      <div class="flip-box-column-wrap">
        <div class="flip-box-widget-wrap">
          <div class="flip-box-element flip-box-widget">
            <div class="flip-box-widget-container">
              <div class="flip-card">
                <div class="flip-card-front">
                  <div class="flip-card-overlay">
                    <div class="flip-card-inner">
                      <div class="icon-wrapper view-default">
                        <div class="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="512"><g id="outline"><path d="M256,376a31.789,31.789,0,0,1,22.627,9.373l11.314-11.314a48,48,0,0,0-67.882,0l11.314,11.314A31.789,31.789,0,0,1,256,376Z"></path><path d="M239.029,391.03l11.315,11.313a8,8,0,0,1,11.312,0l11.315-11.313a24,24,0,0,0-33.942,0Z"></path><path d="M454.226,310.059a48,48,0,0,0-67.883,0l11.314,11.314a32,32,0,0,1,45.254,0Z"></path><path d="M403.313,327.03l11.315,11.313a8,8,0,0,1,11.313,0l11.314-11.313a24,24,0,0,0-33.942,0Z"></path><circle cx="256" cy="416" r="8.5"></circle><path d="M184,96H328a8,8,0,0,0,8-8V38a14.015,14.015,0,0,0-14-14H190a14.015,14.015,0,0,0-14,14V88A8,8,0,0,0,184,96ZM288,80H224V72h64ZM192,40H320V80H304V64a8,8,0,0,0-8-8H216a8,8,0,0,0-8,8V80H192Z"></path><path d="M480,120H384a16.019,16.019,0,0,0-16,16v16H336a8,8,0,0,0-7.353,4.849l-18.2,42.477A55.858,55.858,0,0,0,280,184.573V168a8,8,0,0,0-3.562-6.656L232,131.719V112H216v24a8,8,0,0,0,3.562,6.656L264,172.281v12.3a55.616,55.616,0,0,0-21.026,7.481l-45.852-38.21A8,8,0,0,0,192,152H128V112a16.019,16.019,0,0,0-16-16H32a16.019,16.019,0,0,0-16,16V232a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V168h61.1l41.343,34.453a56.224,56.224,0,0,0-5.152,6.636,40.04,40.04,0,0,0-46.623,24.517A55.95,55.95,0,0,0,136.581,296H120a8,8,0,0,0-6.4,3.2L93.237,326.35l-9.268-5.3a8,8,0,0,0-7.938,0l-56,32A8,8,0,0,0,24,368v64a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V368a8,8,0,0,0,3.969-14.946l-32.732-18.7L124,312h17.414A56.069,56.069,0,0,0,192,344h8V466a22.025,22.025,0,0,0,22,22h68a22.025,22.025,0,0,0,22-22V344h8a56,56,0,0,0,7.5-111.5,55.561,55.561,0,0,0-5.931-18.518L341.275,168H368v32a16.019,16.019,0,0,0,16,16h20.9l-4.49,13.47A8,8,0,0,0,408,240h48a8,8,0,0,0,7.589-10.53L459.1,216H480a16.019,16.019,0,0,0,16-16V136A16.019,16.019,0,0,0,480,120ZM112,224H32V208h80Zm0-32H32V112h80ZM80,337.214,105.875,352H54.125ZM88,424H72V400H88Zm32-56v56H104V392a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v32H40V368ZM272,248a8,8,0,1,1-8,8A8.009,8.009,0,0,1,272,248Zm24,218a6.006,6.006,0,0,1-6,6H222a6.006,6.006,0,0,1-6-6V456h80Zm0-26H216V344h80Zm0-112H216V318a6.006,6.006,0,0,1,6-6h68a6.006,6.006,0,0,1,6,6Zm64-40a40.045,40.045,0,0,1-40,40h-8V318a22.025,22.025,0,0,0-22-22H222a22.025,22.025,0,0,0-22,22v10h-8a40,40,0,0,1-5.938-79.559,8,8,0,0,0,6.6-6.051,24,24,0,0,1,33.05-16.334,8,8,0,0,0,10.415-3.764A39.758,39.758,0,0,1,264,200.806v32.57a24,24,0,1,0,16,0V200.805A40.067,40.067,0,0,1,312,240a8,8,0,0,0,8,8A40.045,40.045,0,0,1,360,288Zm24-152h96l.006,40H384Zm35.1,88,2.666-8h20.468l2.666,8ZM480,200H384v-8h96.009v8Z"></path><path d="M72,184a32,32,0,1,0-32-32A32.036,32.036,0,0,0,72,184Zm0-48a16,16,0,1,1-16,16A16.019,16.019,0,0,1,72,136Z"></path><rect x="184" y="264" width="16" height="16"></rect><rect x="216" y="264" width="16" height="16"></rect><rect x="312" y="264" width="16" height="16"></rect><path d="M489.94,384.239l-28.731-7.183a3.632,3.632,0,0,0-.458-.352l-14.095-21.142A8,8,0,0,0,440,352H384a8,8,0,0,0-6.656,3.562l-16,24A7.993,7.993,0,0,0,360,384v40a8,8,0,0,0,8,8h9.376a24,24,0,0,0,45.248,0h10.752a24,24,0,0,0,45.248,0H488a8,8,0,0,0,8-8V392A8,8,0,0,0,489.94,384.239ZM441.052,376H416v-8h19.719Zm-52.771-8H400v8H382.948ZM400,432a8,8,0,1,1,8-8A8.009,8.009,0,0,1,400,432Zm56,0a8,8,0,1,1,8-8A8.009,8.009,0,0,1,456,432Zm24-16h-1.376a24,24,0,0,0-45.248,0H422.624a24,24,0,0,0-45.248,0H376V392h79.015L480,398.246Z"></path></g></svg>
                        </div>
                      </div>
                      <h3 class="flip-box__layer__title">
                        Internet of Things
                      </h3>		
                      <div class="flip-box__layer__description">
                        FHE has the potential to solve the most important problems of IoT: security, storage and computation.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flip-card-back">
                  <div class="flip-card-overlay">
                    <div class="flip-card-inner">
                      <div class="flip-box__layer__description">
                        FHE can be applied to ensure confidentiality, privacy and anonymization. The messages sent by sensors to a base station are homomorphically encrypted at the station and then sent to the cloud for processing.
                      </div>
                      <a class="flip-box__button" href="https://www.kontron.com/download/download?filename=/downloads/white_papers/usecase_homomorphic_encryption-web.pdf&amp;type=collateral" target="_blank">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flip-box-column">
      <div class="flip-box-column-wrap">
        <div class="flip-box-widget-wrap">
          <div class="flip-box-element flip-box-widget">
            <div class="flip-box-widget-container">
              <div class="flip-card">
                <div class="flip-card-front">
                  <div class="flip-card-overlay">
                    <div class="flip-card-inner">
                      <div class="icon-wrapper view-default">
                        <div class="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 64 64" height="512"><path d="M36.657,53.134a1.028,1.028,0,0,0,.173.015,1,1,0,0,0,.984-.828l.172-.987,0-.015,9.85,1.711,0,.016-.171.986a1,1,0,0,0,.814,1.156,1.017,1.017,0,0,0,.172.015,1,1,0,0,0,.985-.829l.171-.986a12.986,12.986,0,0,0-2.191-9.761L46.188,41.6l2.032-1.43a13.072,13.072,0,0,0,3.164-18.213l-1.431-2.033,2.031-1.43a12.984,12.984,0,0,0,5.355-8.452l.171-.985a1,1,0,0,0-1.971-.342l-.171.985L45.516,7.984,45.688,7a1,1,0,1,0-1.971-.344l-.172.986a12.986,12.986,0,0,0,2.19,9.761l1.431,2.032-2.031,1.431a13.069,13.069,0,0,0-3.164,18.213l1.43,2.032-2.033,1.431a12.971,12.971,0,0,0-5.12,7.413c0,.015-.014.027-.017.043a.272.272,0,0,1,0,.028c-.08.319-.159.638-.216.966l-.172.985A1,1,0,0,0,36.657,53.134Zm1.86-3.754a10.961,10.961,0,0,1,1.5-2.767l7.493,1.3A10.946,10.946,0,0,1,48,51.027Zm3.111-18.727,9.756,1.7a10.95,10.95,0,0,1-1.816,3.744l-7.493-1.3A10.957,10.957,0,0,1,41.628,30.653Zm2.158-5.715,7.494,1.3a10.978,10.978,0,0,1,.447,4.137l-9.757-1.7A10.977,10.977,0,0,1,43.786,24.938ZM45.357,9.986l9.485,1.648a10.894,10.894,0,0,1-1.509,2.782l-7.494-1.3A10.951,10.951,0,0,1,45.357,9.986Zm2.013,6.266a11.164,11.164,0,0,1-.6-.945l4.939.858q-.42.363-.88.688L48.8,18.284Zm.948,4.819L49.749,23.1q.324.46.6.944l-4.939-.858q.42-.363.88-.688ZM43.605,37.927q-.322-.461-.6-.944l4.94.858q-.42.363-.88.688L45.036,39.96Zm.948,4.819,1.43,2.032c.216.307.415.623.6.945l-4.94-.858q.42-.363.88-.688Z"></path><path d="M2.938,35.222a3.091,3.091,0,0,0,2.539.232A3.06,3.06,0,0,0,7.3,33.707l.817-2.045A73.844,73.844,0,0,0,8.3,41.13L9.63,57.146A4.009,4.009,0,0,0,6.7,61a1,1,0,0,0,1,1h6a1,1,0,0,0,.995-.9L15.7,51.05l1,10.05a1,1,0,0,0,1,.9h6a1,1,0,0,0,1-1,4.009,4.009,0,0,0-2.926-3.854l1.089-13.063a1,1,0,1,0-1.992-.166l-1.167,14A1,1,0,0,0,20.7,59a2,2,0,0,1,1.732,1H18.609L16.7,40.9a1,1,0,0,0-1.99,0L12.8,60H8.973A2,2,0,0,1,10.7,59a1,1,0,0,0,1-1.083L10.287,40.964a71.951,71.951,0,0,1,.192-13.882L10.7,25.11a1,1,0,0,0-1.923-.482L5.441,32.964a1.05,1.05,0,0,1-.629.6,1.068,1.068,0,0,1-.893-.088,1.108,1.108,0,0,1-.411-1.36L8.4,19.551A3.975,3.975,0,0,1,12.124,17a2.582,2.582,0,0,0,2.58-2.58V14a1,1,0,0,0-.6-.916c-1.27-.556-2.4-3.306-2.4-5.084a4,4,0,0,1,7.939-.717c.363,2.118-.862,5.154-2.34,5.8a1,1,0,0,0-.6.916v.42A2.582,2.582,0,0,0,19.284,17a4.027,4.027,0,0,1,3.728,2.55l4.916,12.64a1.057,1.057,0,0,1-.9,1.435,1.127,1.127,0,0,1-1.091-.745l-3.3-8.252a1,1,0,0,0-1.923.482l.219,1.972c.218,1.971.357,3.971.412,5.946a1,1,0,0,0,1,.972h.028a1,1,0,0,0,.973-1.028q-.02-.653-.049-1.308l.784,1.959a3.132,3.132,0,0,0,3.136,1.993,3.054,3.054,0,0,0,2.579-4.15L24.875,18.825A5.96,5.96,0,0,0,19.284,15a.581.581,0,0,1-.559-.426c2.162-1.453,3.324-5.094,2.888-7.629A6,6,0,0,0,9.7,8c0,1.98,1.055,5.225,2.982,6.567a.583.583,0,0,1-.562.433,5.964,5.964,0,0,0-5.592,3.826L1.644,31.4A3.1,3.1,0,0,0,2.938,35.222Z"></path><path d="M22.057,34.91l-5.61-2.8a1,1,0,0,0-1.228,1.52l5.5,6.875a16.526,16.526,0,0,0,10.99,6.113.906.906,0,0,1,.62.367,1.035,1.035,0,0,1,.187.788l-.442,2.54a5,5,0,0,0,4.072,5.782l11.822,2.054a5.083,5.083,0,0,0,.866.075,5,5,0,0,0,4.916-4.146l7.53-43.351A5.006,5.006,0,0,0,57.209,4.94L45.386,2.887A5,5,0,0,0,39.6,6.958L34.538,36.125a1.022,1.022,0,0,1-.893.832A20.72,20.72,0,0,1,22.057,34.91Zm14.452,1.557L41.575,7.3a3,3,0,0,1,3.469-2.442L56.867,6.911a3,3,0,0,1,2.443,3.468L51.779,53.731a3,3,0,0,1-3.469,2.442L36.487,54.119a3,3,0,0,1-2.442-3.469l.441-2.54a3.035,3.035,0,0,0-.552-2.323,2.89,2.89,0,0,0-1.985-1.159,14.542,14.542,0,0,1-9.668-5.378l-2.656-3.319,1.537.768a22.7,22.7,0,0,0,12.7,2.245A3.033,3.033,0,0,0,36.509,36.467Z"></path><path d="M35.593,17.6a1.026,1.026,0,0,0,.182.016,1,1,0,0,0,.983-.818l.878-4.744a1,1,0,0,0-1.967-.364l-.878,4.744A1,1,0,0,0,35.593,17.6Z"></path><path d="M34.057,18.987l-.372,1.581a1,1,0,0,0,1.947.458L36,19.445a1,1,0,0,0-1.947-.458Z"></path></svg>
                        </div>
                      </div>
                      <h3 class="flip-box__layer__title">
                        Genomics
                      </h3>
                      <div class="flip-box__layer__description">
                        Sharing data while preserving privacy has become a limiting factor of genomics. FHE can be the solution for this.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flip-card-back">
                  <div class="flip-card-overlay">
                    <div class="flip-card-inner">
                      <div class="flip-box__layer__description">
                        DNA and RNA sequences are biometric identifiers. They may contain medically significant information such as a disease risk or sensitive characteristics. This information is often stored in a central database where access is restricted. A number of use cases for sharing genomics data use simple computations and are well suited for FHE.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flip-box-column">
      <div class="flip-box-column-wrap">
        <div class="flip-box-widget-wrap">
          <div class="flip-box-element flip-box-widget">
            <div class="flip-box-widget-container">
              <div class="flip-card">
                <div class="flip-card-front">
                  <div class="flip-card-overlay">
                    <div class="flip-card-inner">
                      <div class="icon-wrapper view-default">
                        <div class="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" height="512"><g id="healthcare-covid19-coronavirus-hand-hearth"><path d="M38,13H35V10a1,1,0,0,0-1-1H30a1,1,0,0,0-1,1v3H26a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h3v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V19h3a1,1,0,0,0,1-1V14A1,1,0,0,0,38,13Zm-1,4H34a1,1,0,0,0-1,1v3H31V18a1,1,0,0,0-1-1H27V15h3a1,1,0,0,0,1-1V11h2v3a1,1,0,0,0,1,1h3Z"></path><path d="M59.73,18.36a4.578,4.578,0,0,0,.03-.53,4.02,4.02,0,0,0-3.18-3.91,4.071,4.071,0,0,0-4.7,2.97l-4.4,12.66a1.632,1.632,0,0,0-.19.09l-8.84,5.18A9.017,9.017,0,0,0,34,42.58V52a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H48a1,1,0,0,0,1-1V53a1,1,0,0,0-1-1V49.8a3.039,3.039,0,0,1,1-2.24l6.76-6.01a4.931,4.931,0,0,0,1.52-2.45l4.34-16.23a3.955,3.955,0,0,0,.14-1.04A4.019,4.019,0,0,0,59.73,18.36Zm-5.94-.88a2.113,2.113,0,0,1,2.38-1.6,2,2,0,0,1,1.59,1.95v.02a4.1,4.1,0,0,0-3.89,3.06l-2.79,8.61a4.2,4.2,0,0,0-1.34-.38ZM47,60H35V54H47ZM59.69,22.35,55.34,38.59a2.981,2.981,0,0,1-.9,1.46l-6.77,6.01A5.056,5.056,0,0,0,46,49.8V52H36V42.58a7.052,7.052,0,0,1,3.46-6.04l8.83-5.17a2,2,0,0,1,2.74.73,2.06,2.06,0,0,1,.2,1.52,2,2,0,0,1-.94,1.21l-5.73,3.31a1,1,0,0,0,1,1.73l5.73-3.31a3.948,3.948,0,0,0,1.87-2.43,4.007,4.007,0,0,0-.4-3.03l-.06-.09,3.09-9.53a2.113,2.113,0,0,1,2.38-1.6,2,2,0,0,1,1.59,1.95A1.722,1.722,0,0,1,59.69,22.35Z"></path><path d="M30,52V42.58a9.017,9.017,0,0,0-4.45-7.76l-8.84-5.19c-.06-.03-.13-.05-.19-.08L12.15,16.96a4.107,4.107,0,0,0-4.73-3.04,4.02,4.02,0,0,0-3.18,3.91,4.578,4.578,0,0,0,.03.53,4.019,4.019,0,0,0-2.03,3.47,4.421,4.421,0,0,0,.13,1.04L6.72,39.09a4.916,4.916,0,0,0,1.52,2.46l6.75,6.01A3.012,3.012,0,0,1,16,49.8V52a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H30a1,1,0,0,0,1-1V53A1,1,0,0,0,30,52ZM6.24,17.83a2,2,0,0,1,1.58-1.95,2.161,2.161,0,0,1,2.42,1.67l4.02,11.59a4.2,4.2,0,0,0-1.34.38l-2.77-8.56a4.149,4.149,0,0,0-3.91-3.11ZM16.32,46.06,9.56,40.05a2.965,2.965,0,0,1-.9-1.47L4.3,22.35a2.121,2.121,0,0,1-.06-.52,2,2,0,0,1,1.58-1.95,2.144,2.144,0,0,1,2.41,1.65l3.07,9.48-.06.09a4.007,4.007,0,0,0-.4,3.03,3.948,3.948,0,0,0,1.87,2.43l5.73,3.31a1,1,0,0,0,1-1.73l-5.73-3.31a2,2,0,0,1-.94-1.21,2.06,2.06,0,0,1,.2-1.52,2,2,0,0,1,2.73-.74l8.84,5.18A7.052,7.052,0,0,1,28,42.58V52H18V49.8A5.03,5.03,0,0,0,16.32,46.06ZM29,60H17V54H29Z"></path><path d="M46.147,5.132A9.994,9.994,0,0,0,32,5.133l0,0h0a9.992,9.992,0,0,0-14.146,0,10.005,10.005,0,0,0,0,14.134l13.44,13.44a1,1,0,0,0,1.414,0l13.44-13.44A10.006,10.006,0,0,0,46.147,5.132ZM32,30.586,19.267,17.853A8,8,0,0,1,24.93,4.2a7.916,7.916,0,0,1,5.653,2.347l.71.71a1,1,0,0,0,1.414,0l.712-.712a7.993,7.993,0,0,1,11.314,0,8,8,0,0,1,0,11.306Z"></path></g></svg>
                        </div>
                      </div>
                      <h3 class="flip-box__layer__title">
                        E-health
                      </h3>		
                      <div class="flip-box__layer__description">
                        Healthcare systems operate in an environment where sensitive information must be protected from leaks, yet available for everyday processing.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flip-card-back">
                  <div class="flip-card-overlay">
                    <div class="flip-card-inner">
                      <div class="flip-box__layer__description">
                        The chance that evil actors are out to steal your data is higher than ever, so it is important to secure systems properly. FHE can help address the balance between risk and information usefulness. Billing and report generation are two applications that can benefit from this.
                      </div>
                      <a class="flip-box__button" href="https://homomorphicencryption.org/white_papers/applications_homomorphic_encryption_white_paper.pdf" target="_blank">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flip-box-column">
      <div class="flip-box-column-wrap">
        <div class="flip-box-widget-wrap">
          <div class="flip-box-element flip-box-widget">
            <div class="flip-box-widget-container">
              <div class="flip-card">
                <div class="flip-card-front">
                  <div class="flip-card-overlay">
                    <div class="flip-card-inner">
                      <div class="icon-wrapper view-default">
                        <div class="icon">
                          <?xml version="1.0"?> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Capa_1" x="0px" y="0px" viewBox="0 0 464 464" style="enable-background:new 0 0 464 464;" xml:space="preserve"> <g> <g> <path d="M456,217.12H353.68v-19.76c-0.005-2.886-1.564-5.546-4.08-6.96L240,128.8V97.44h21.68v11.92c0,4.418,3.582,8,8,8h65.36 c4.418-0.002,7.998-3.585,7.997-8.003c0-0.926-0.162-1.845-0.477-2.717L336,88l6.64-18.24c1.502-4.155-0.648-8.741-4.803-10.243 c-0.871-0.315-1.79-0.476-2.717-0.477h-29.76v-11.6c0-4.418-3.582-8-8-8H240v-9.76c0-4.418-3.582-8-8-8s-8,3.582-8,8v99.12 l-109.6,61.52c-2.516,1.414-4.075,4.074-4.08,6.96v19.76H8c-4.418,0-8,3.582-8,8v209.28c0,4.418,3.582,8,8,8h448 c4.418,0,8-3.582,8-8v-209.2C464,220.702,460.418,217.12,456,217.12z M305.36,89.44l-0.32-0.32V75.36h18.24L320,85.6 c-0.655,1.782-0.655,3.738,0,5.52l3.76,10.24h-46.08v-3.92h19.68C301.778,97.44,305.36,93.858,305.36,89.44z M240,55.44h49.36 v11.92v14.08H240V55.44z M110.32,426.32H16v-193.2h94.32V426.32z M224,426.32h-42v-91.36h42V426.32z M282,426.32h-42v-91.36h42 V426.32z M338,426.32h-40v-99.36c0-4.418-3.582-8-8-8H174c-4.418,0-8,3.582-8,8v99.36h-40v-224l106-59.68L337.68,202l0.32,23.04 V426.32z M448,426.32h-94.32v-193.2H448V426.32z"/> </g> </g> <g> <g> <path d="M232,167.12c-18.526,0.044-33.52,15.074-33.52,33.6c0.044,18.513,15.087,33.484,33.6,33.44 c18.513-0.044,33.484-15.087,33.44-33.6C265.476,182.079,250.481,167.12,232,167.12z M232,218.16 c-9.676-0.044-17.484-7.924-17.44-17.6c0.044-9.613,7.826-17.396,17.44-17.44c9.689,0.044,17.52,7.911,17.52,17.6h0.08 C249.556,210.396,241.676,218.204,232,218.16z"/> </g> </g> <g> <g> <rect x="35.28" y="250.72" width="16" height="32"/> </g> </g> <g> <g> <rect x="74.72" y="250.72" width="16" height="32"/> </g> </g> <g> <g> <rect x="150.32" y="250.72" width="32" height="16"/> </g> </g> <g> <g> <rect x="216" y="250.72" width="32" height="16"/> </g> </g> <g> <g> <rect x="281.68" y="250.72" width="32" height="16"/> </g> </g> <g> <g> <rect x="150.32" y="288" width="32" height="16"/> </g> </g> <g> <g> <rect x="216" y="288" width="32" height="16"/> </g> </g> <g> <g> <rect x="281.68" y="288" width="32" height="16"/> </g> </g> <g> <g> <rect x="35.28" y="313.68" width="16" height="32"/> </g> </g> <g> <g> <rect x="74.72" y="313.68" width="16" height="32"/> </g> </g> <g> <g> <rect x="35.28" y="376.72" width="16" height="32"/> </g> </g> <g> <g> <rect x="74.72" y="376.72" width="16" height="32"/> </g> </g> <g> <g> <rect x="373.28" y="250.72" width="16" height="32"/> </g> </g> <g> <g> <rect x="412.72" y="250.72" width="16" height="32"/> </g> </g> <g> <g> <rect x="373.28" y="313.68" width="16" height="32"/> </g> </g> <g> <g> <rect x="412.72" y="313.68" width="16" height="32"/> </g> </g> <g> <g> <rect x="373.28" y="376.72" width="16" height="32"/> </g> </g> <g> <g> <rect x="412.72" y="376.72" width="16" height="32"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
                        </div>
                      </div>
                      <h3 class="flip-box__layer__title">
                        School leavers
                      </h3>
                      <div class="flip-box__layer__description">
                        Every year, tens of thousands of students drop out of school early. FHE can give schools insight into this problem, while preserving privacy.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flip-card-back">
                  <div class="flip-card-overlay">
                    <div class="flip-card-inner">
                      <div class="flip-box__layer__description">
                        To reduce this problem, it would be useful if a drop-out risk could be calculated for all students. However, it is unlikely that schools have enough data points. This would require bringing together information from schools, hospitals, welfare systems, police and more. This is a big challenge in terms of privacy, but FHE can handle it safely.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flip-box-column">
      <div class="flip-box-column-wrap">
        <div class="flip-box-widget-wrap">
          <div class="flip-box-element flip-box-widget">
            <div class="flip-box-widget-container">
              <div class="flip-card">
                <div class="flip-card-front">
                  <div class="flip-card-overlay">
                    <div class="flip-card-inner">
                      <div class="icon-wrapper view-default">
                        <div class="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" height="512" viewBox="0 0 512 512"><g><g><path d="m438.839 68.112c-6.695 0-12.122 5.427-12.122 12.122s5.427 12.122 12.122 12.122 12.122-5.427 12.122-12.122-5.427-12.122-12.122-12.122z"></path><circle cx="397.423" cy="80.234" r="12.122"></circle><circle cx="356.006" cy="80.234" r="12.122"></circle><path d="m512 59.021c0-15.275-12.428-27.703-27.703-27.703h-456.594c-15.275-.001-27.703 12.427-27.703 27.703v328.642c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-258.51h482v39.65c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5zm-497 55.131v-55.131c0-7.004 5.698-12.703 12.703-12.703h456.594c7.005 0 12.703 5.699 12.703 12.703v55.132h-482z"></path><path d="m504.5 196.302c-4.143 0-7.5 3.358-7.5 7.5v249.18c0 7.003-5.697 12.7-12.7 12.7h-456.6c-7.003 0-12.7-5.697-12.7-12.7v-30.32c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v30.32c0 15.274 12.426 27.7 27.7 27.7h456.6c15.274 0 27.7-12.426 27.7-27.7v-249.18c0-4.142-3.357-7.5-7.5-7.5z"></path><path d="m262.37 289.922h-92.23c-4.143 0-7.5 3.358-7.5 7.5v143.44c0 4.142 3.357 7.5 7.5 7.5h258.6c4.143 0 7.5-3.358 7.5-7.5v-87.997c25.659-3.656 45.455-25.763 45.455-52.416 0-29.201-23.757-52.958-52.957-52.958-25.597 0-47.008 18.256-51.904 42.43h-79.464c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h78.613c2.071 24.621 21.047 44.496 45.257 47.944v80.496h-243.6v-128.44h84.73c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.499-7.5-7.499zm128.41 10.528c0-20.93 17.028-37.958 37.958-37.958s37.957 17.028 37.957 37.958c0 20.91-16.995 37.923-37.898 37.956-.019 0-.038-.003-.057-.003-.02 0-.039.003-.059.003-20.903-.032-37.901-17.046-37.901-37.956z"></path><path d="m241.072 330.872c-1.428-3.471-4.773-5.713-8.526-5.713-.003 0-.005 0-.008 0-3.756.003-7.103 2.25-8.525 5.727-.023.057-.047.115-.068.172l-28.492 74.81c-1.475 3.871.469 8.204 4.34 9.678.878.335 1.78.493 2.668.493 3.021 0 5.87-1.84 7.01-4.833l5.256-13.801h35.426l5.2 13.78c1.462 3.875 5.791 5.833 9.665 4.369 3.875-1.463 5.831-5.79 4.368-9.665l-28.233-74.813c-.026-.069-.053-.137-.081-.204zm-20.633 51.533 12.081-31.72 11.971 31.72z"></path><path d="m382.123 400.921c-4.285 0-8.394-1.71-10.99-4.576-2.781-3.069-7.524-3.302-10.594-.521-3.069 2.781-3.303 7.524-.521 10.594 5.473 6.04 13.529 9.503 22.105 9.503 10.767 0 19.818-6.928 21.522-16.474 1.294-7.245-1.916-16.679-14.803-21.433-5.556-2.049-10.747-4.275-12.62-5.092-.488-.48-.53-1.082-.466-1.534.164-1.144 1.141-2.065 2.68-2.529 5.85-1.761 11.434 2.581 11.632 2.738 3.171 2.619 7.866 2.196 10.517-.958 2.665-3.171 2.255-7.902-.915-10.567-4.319-3.629-14.562-8.889-25.56-5.576-7.146 2.152-12.203 7.809-13.201 14.76-.942 6.561 1.903 12.873 7.426 16.474.332.216.68.405 1.041.566.276.124 6.862 3.055 14.275 5.79 2.754 1.016 5.573 2.79 5.229 4.723-.297 1.659-2.649 4.112-6.757 4.112z"></path><path d="m327.751 410.983c1.048 2.879 3.8 4.938 7.042 4.938 4.143 0 7.5-3.358 7.5-7.5v-71.33c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v20.638c-4.781-2.943-10.404-4.644-16.418-4.644-17.324 0-31.418 14.094-31.418 31.417s14.094 31.418 31.418 31.418c6.209.001 11.998-1.817 16.876-4.937zm-33.294-26.48c0-9.053 7.365-16.417 16.418-16.417s16.418 7.365 16.418 16.417-7.365 16.418-16.418 16.418-16.418-7.365-16.418-16.418z"></path><path d="m428.737 311.056 3.982 3.982c1.465 1.465 3.384 2.197 5.304 2.197 1.919 0 3.839-.732 5.303-2.197 2.93-2.929 2.93-7.677.001-10.606l-3.983-3.983 3.983-3.983c2.929-2.929 2.929-7.678-.001-10.607-2.928-2.929-7.677-2.928-10.606 0l-3.982 3.982-3.982-3.982c-2.93-2.929-7.678-2.929-10.607 0s-2.929 7.678 0 10.606l3.983 3.983-3.982 3.982c-2.93 2.929-2.93 7.677-.001 10.606 1.465 1.465 3.384 2.197 5.304 2.197 1.919 0 3.839-.732 5.303-2.197z"></path><path d="m406.515 146.476h-301.03c-4.143 0-7.5 3.358-7.5 7.5v32.325c0 4.142 3.357 7.5 7.5 7.5h301.029c4.143 0 7.5-3.358 7.5-7.5v-32.325c.001-4.142-3.357-7.5-7.499-7.5zm-7.5 32.325h-286.03v-17.325h286.029v17.325z"></path><path d="m32.325 265.094c0 4.142 3.357 7.5 7.5 7.5h262.643c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-262.643c-4.142 0-7.5 3.358-7.5 7.5z"></path><path d="m110.536 225.269c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h191.932c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"></path><path d="m39.825 304.919h97.985c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-97.985c-4.143 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m39.825 337.244h97.985c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-97.985c-4.143 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m39.825 369.569h47.478c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-47.478c-4.143 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path></g></g></svg>
                        </div>
                      </div>
                      <h3 class="flip-box__layer__title">
                        Ad privacy
                      </h3>		
                      <div class="flip-box__layer__description">
                        While ads are often unwanted, they can be useful when tailored to the needs of the user.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flip-card-back">
                  <div class="flip-card-overlay">
                    <div class="flip-card-inner">
                      <div class="flip-box__layer__description">
                        Many users are concerned about the privacy of their data. Jeckmans et al. sketch a scenario in which a user on a social platform wants product recommendations. The proposed system applies FHE so that friend recommendations can be completely anonymous.
                      </div>
                      <a class="flip-box__button" href="https://research.utwente.nl/en/publications/efficient-privacy-enhanced-familiarity-based-recommender-system">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flip-box-column">
      <div class="flip-box-column-wrap">
        <div class="flip-box-widget-wrap">
          <div class="flip-box-element flip-box-widget">
            <div class="flip-box-widget-container">
              <div class="flip-card">
                <div class="flip-card-front">
                  <div class="flip-card-overlay">
                    <div class="flip-card-inner">
                      <div class="icon-wrapper view-default">
                        <div class="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" height="512" viewBox="0 0 512 512"><g><g><path d="m490.023 266.659c4.142 0 7.5-3.357 7.5-7.5v-246.659c0-6.893-5.607-12.5-12.5-12.5h-355.847c-6.893 0-12.5 5.607-12.5 12.5v226.645h-27.014c-6.327 0-11.992 3.271-15.156 8.75-3.163 5.479-3.163 12.021 0 17.5l14.926 25.852c-8.53 1.163-15.131 8.476-15.131 17.32v14.514c0 3.478 1.032 6.714 2.789 9.442-11.889 5.824-22.692 13.381-31.877 22.444-19.82 19.557-30.735 44.74-30.735 70.91 0 31.601 15.858 61.417 43.506 81.805 3.776 2.784 8.486 4.318 13.262 4.318h57.931 46.169 309.678c6.893 0 12.5-5.607 12.5-12.5v-205.341c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v202.841h-286.097c15.601-15.28 25.867-34.151 29.489-54.698.719-4.079-2.005-7.969-6.084-8.688-4.077-.721-7.969 2.006-8.688 6.084-3.97 22.52-17.478 42.791-38.127 57.302h-101.772c-1.595 0-3.143-.494-4.359-1.391-23.774-17.53-37.41-42.947-37.41-69.732 0-22.126 9.33-43.517 26.271-60.232 11.256-11.106 25.329-19.644 40.954-25.063h48.513c32.929 11.423 57.838 36.405 65.038 67.13.945 4.033 4.977 6.54 9.014 5.591 4.033-.944 6.536-4.98 5.591-9.013-7.26-30.979-29.72-56.878-60.109-71.773 1.754-2.726 2.785-5.96 2.785-9.435v-14.514c0-8.844-6.601-16.158-15.131-17.32l14.926-25.852c3.164-5.479 3.164-12.021 0-17.5s-8.829-8.75-15.156-8.75h-20.495v-224.146h350.847v244.159c-.001 4.143 3.357 7.5 7.499 7.5zm-337.491 41.908v14.514c0 1.379-1.122 2.5-2.5 2.5h-58.231c-1.378 0-2.5-1.121-2.5-2.5v-14.514c0-1.379 1.122-2.5 2.5-2.5h58.231c1.379 0 2.5 1.121 2.5 2.5zm-.361-54.422c1.256 0 1.896.783 2.165 1.25s.628 1.412 0 2.5l-19.152 33.173h-28.536l-19.152-33.173c-.627-1.087-.269-2.033 0-2.5s.909-1.25 2.165-1.25z"></path><path d="m120.917 470.131c4.142 0 7.5-3.357 7.5-7.5v-8.47h1.099c12.716 0 23.061-10.345 23.061-23.061s-10.345-23.061-23.061-23.061h-17.198c-4.445 0-8.061-3.616-8.061-8.061s3.616-8.061 8.061-8.061h30.302c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-14.203v-8.47c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v8.47h-1.099c-12.716 0-23.061 10.345-23.061 23.061s10.345 23.061 23.061 23.061h17.198c4.445 0 8.061 3.616 8.061 8.061s-3.616 8.061-8.061 8.061h-30.302c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h14.203v8.47c0 4.142 3.357 7.5 7.5 7.5z"></path><path d="m460.018 215.588v-72.794c0-5.79-4.71-10.5-10.5-10.5h-19c-5.79 0-10.5 4.71-10.5 10.5v68.294h-13.167v-98.498c0-5.79-4.71-10.5-10.5-10.5h-19c-5.79 0-10.5 4.71-10.5 10.5v98.498h-13.167v-124.657c0-5.79-4.71-10.5-10.5-10.5h-19c-5.79 0-10.5 4.71-10.5 10.5v124.657h-13.167v-41.088c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v41.088h-10v-98.358h10v22.27c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-26.77c0-5.79-4.71-10.5-10.5-10.5h-19c-5.79 0-10.5 4.71-10.5 10.5v102.857h-13.167v-78.151c0-5.79-4.71-10.5-10.5-10.5h-19c-5.79 0-10.5 4.71-10.5 10.5v78.151h-13.167v-52.901c0-5.79-4.71-10.5-10.5-10.5h-19c-5.79 0-10.5 4.71-10.5 10.5v57.401c0 5.79 4.71 10.5 10.5 10.5h284.836c5.789.001 10.499-4.709 10.499-10.499zm-280.836-4.5h-1.893-8.107v-48.401h10zm53.167 0h-10v-73.651h10zm106.335 0h-10v-120.157h10zm53.167 0h-10v-93.998h10zm53.167 0h-7.724-2.276v-63.794h10z"></path><path d="m447.351 313.928h-3.685c-3.704-29.515-28.939-52.428-59.442-52.428-13.838 0-26.585 4.728-36.741 12.635l-2.626-2.623c-1.406-1.404-3.313-2.193-5.3-2.193-.001 0-.003 0-.005 0-1.989.001-3.896.793-5.302 2.2-13.126 13.143-20.654 31.334-20.654 49.908 0 38.944 31.683 70.628 70.627 70.628s70.627-31.684 70.627-70.628c.001-4.142-3.357-7.499-7.499-7.499zm-63.127-37.428c22.217 0 40.708 16.214 44.29 37.428h-41.187l-29.126-29.089c7.349-5.242 16.328-8.339 26.023-8.339zm0 100.556c-30.673 0-55.627-24.955-55.627-55.628 0-12.114 4.066-24.021 11.334-33.636l38.993 38.942c1.406 1.404 3.313 2.193 5.3 2.193h55.124c-3.673 27.141-26.994 48.129-55.124 48.129z"></path><path d="m210.652 285.786h83.984c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-83.984c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m210.652 314.547h83.984c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-83.984c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m222.157 343.309h72.479c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-72.479c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m245.167 372.07h49.47c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-49.47c-4.142 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5z"></path><path d="m246.317 51.814c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-84.219c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m405.848 51.814h46.254c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-46.254c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m405.848 78.275h46.254c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-46.254c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m268.914 463.948h162.772c12.773 0 23.165-10.392 23.165-23.165s-10.392-23.165-23.165-23.165h-162.772c-12.773 0-23.165 10.392-23.165 23.165s10.392 23.165 23.165 23.165zm124.109-31.33h38.664c4.502 0 8.165 3.663 8.165 8.165s-3.663 8.165-8.165 8.165h-38.664zm-124.109 0h109.109v16.33h-109.109c-4.502 0-8.165-3.663-8.165-8.165s3.663-8.165 8.165-8.165z"></path></g></g></svg>
                        </div>
                      </div>
                      <h3 class="flip-box__layer__title">
                        Financial privacy
                      </h3>
                      <div class="flip-box__layer__description">
                        Imagine a scenario where a company wants to make financial predictions using someone else's data, but no one wants to disclose their data or algorithms.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flip-card-back">
                  <div class="flip-card-overlay">
                    <div class="flip-card-inner">
                      <div class="flip-box__layer__description">
                        This is extremely difficult to achieve without FHE. However, by using it, Company A can keep their algorithms to themselves and Company B send their data encrypted to Company A for processing.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<br />

Icons made by [Good Ware], [photo3idea_studio], [srip], [Freepik], [dDara] and [Eucalyp] from [www.flaticon.com](https://www.flaticon.com)
{:.faded}

<br />

This article is based on a [research report] I wrote for the project "Fully Homomorphic Encryption" commissioned by [SALT Cyber Security]. You can also read this blog post (in Dutch) on their website at [https://salt-security.com/nieuws/fully-homomorphic-encryption-de-geschiedenis/](https://salt-security.com/nieuws/fully-homomorphic-encryption-de-geschiedenis/).
{:.note title="Comment"}

<!-- Sources -->

[^masters2019]: O. Masters, _et al._, "Towards a Homomorphic Machine Learning Big Data Pipeline for the Financial Services Sector", 2019. [Online]. Available: [https://eprint.iacr.org/2019/1113.pdf](https://eprint.iacr.org/2019/1113.pdf).
[^salter2020]: J. Salter, "IBM completes successful field trials on Fully Homomorphic Encryption", _Ars Technica_, Jul. 31, 2020. [https://arstechnica.com/gadgets/2020/07/ibm-completes-successful-field-trials-on-fully-homomorphic-encryption/](https://arstechnica.com/gadgets/2020/07/ibm-completes-successful-field-trials-on-fully-homomorphic-encryption/).
[^moskovitch2020]: K. Moskovitch, "Top Brazilian Bank Pilots Privacy Encryption Quantum Computers Can't Break \| by Inside IBM Research \| Medium", _Inside IBM Research_, Jan. 10, 2020. [https://ibm-research.medium.com/top-brazilian-bank-pilots-privacy-encryption-quantum-computers-cant-break-92ed2695bf14](https://ibm-research.medium.com/top-brazilian-bank-pilots-privacy-encryption-quantum-computers-cant-break-92ed2695bf14).
[^lauter2021]: K. Lauter, S. Kannepali, K. Laine, and R. C. Moreno, "Password Monitor: Safeguarding passwords in Microsoft Edge", _Microsoft Research_, Jan. 21, 2021. [https://www.microsoft.com/en-us/research/blog/password-monitor-safeguarding-passwords-in-microsoft-edge/](https://www.microsoft.com/en-us/research/blog/password-monitor-safeguarding-passwords-in-microsoft-edge/).
[^pullman2019]: J. Pullman, K. Thomas, E. Bursztein, "Google Online Security Blog: Protect your accounts from data breaches with Password Checkup", _Google Security Blog_, Feb. 6, 2019.
[^microsoft]: Microsoft, "Protect your online accounts using Password Monitor", _Microsoft Support_. [https://www.microsoft.com/en-us/research/blog/password-monitor-safeguarding-passwords-in-microsoft-edge/](https://www.microsoft.com/en-us/research/blog/password-monitor-safeguarding-passwords-in-microsoft-edge/).
[^thornton2020]: A. Thornton, "What is ElectionGuard?", _Microsoft On the Issues_, Mar. 27, 2020. [https://news.microsoft.com/on-the-issues/2020/03/27/what-is-electionguard/](https://news.microsoft.com/on-the-issues/2020/03/27/what-is-electionguard/).

<!-- Links -->

[fully homomorphic encryption]: /fhe
[ibm]: https://www.ibm.com/security/services/homomorphic-encryption
[microsoft]: https://www.microsoft.com/en-us/research/project/homomorphic-encryption/
[google]: https://github.com/google/fully-homomorphic-encryption
[Good Ware]: https://www.flaticon.com/authors/good-ware
[photo3idea_studio]: https://www.flaticon.com/authors/photo3idea-studio
[srip]: https://www.flaticon.com/authors/srip
[Freepik]: https://www.flaticon.com/authors/srip
[dDara]: https://www.flaticon.com/authors/ddara
[Eucalyp]: https://www.flaticon.com/authors/eucalyp

[research report]: /assets/blog/2021-05-04-fully-homomorphic-encryption-what-and-why/Onderzoeksrapport_Thomas van den Nieuwenhoff_S1124775_V1.0_Redacted.pdf

<!-- Images -->

[edgeflow]: /assets/blog/2021-11-15-homomorphic-encryption-applications/edgeflow.gif
[edgepopup]: /assets/blog/2021-11-15-homomorphic-encryption-applications/edgepopup.png