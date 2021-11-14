---
layout: post
title: 'Fully Homomorphic Encryption: the pros and cons'
date: 2021-11-14 14:10 +0200
image: /assets/blog/2021-11-14-fully-homomorphic-encryption-pro-con/cover.svg
description: As the "holy grail" of encryption, FHE certainly has some strong advantages, but it also has its downsides.
author: tvdn
excerpt_separator: '<!--more-->'
---

Estimated reading time: 4 minutes
{:.faded}

<!--more-->

This post is part 3 of the [Fully Homomorphic Encryption] series.

<br>

![fheprocon]{:loading="lazy" width="1345" height="571"}

## Pros

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
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="96"><defs><clipPath id="clip12"><rect x="148" y="398" width="96" height="96"></rect></clipPath></defs><g clip-path="url(#clip12)" transform="translate(-148 -398)"><path d="M158 409 158 481 232 481 232 409ZM226 442 198 442 198 415 226 415ZM192 415 192 442 164 442 164 415ZM164 448 192 448 192 475 164 475ZM198 475 198 448 226 448 226 475Z"></path><path d="M187 426 180 426 180 419 176 419 176 426 169 426 169 430 176 430 176 437 180 437 180 430 187 430 187 426Z"></path><path d="M185.78 456.05 182.95 453.22 178 458.17 173.05 453.22 170.22 456.05 175.17 461 170.22 465.95 173.05 468.78 178 463.83 182.95 468.78 185.78 465.95 180.83 461 185.78 456.05Z"></path><path d="M203 430 203 426 221 426 221 430Z"></path><path d="M203 464 203 460 221 460 221 464Z"></path><path d="M214 456C214 457.105 213.105 458 212 458 210.895 458 210 457.105 210 456 210 454.895 210.895 454 212 454 213.105 454 214 454.895 214 456Z"></path><path d="M214 468C214 469.105 213.105 470 212 470 210.895 470 210 469.105 210 468 210 466.895 210.895 466 212 466 213.105 466 214 466.895 214 468Z"></path></g></svg>
                                                </div>
                                            </div>
                                            <h3 class="flip-box__layer__title">
                                                Operations
                                            </h3>		
                                            <div class="flip-box__layer__description">
                                                The main advantage of FHE is that it supports multiple operations on encrypted data.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div class="flip-card-overlay">
                                        <div class="flip-card-inner">
                                            <div class="flip-box__layer__description">
                                                Additions and multiplications are currently supported, which was impossible before the time of FHE. For example, PHE (Partially Homomorphic Encryption) can handle one of these operations, but not a combination of them. Unfortunately, there are limitations in supporting more types of functions. In the future, it is conceivable that subtractions and divisions will also be supported.
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="96"><defs><clipPath id="clip10"><rect x="438" y="358" width="96" height="96"></rect></clipPath></defs><g clip-path="url(#clip10)" transform="translate(-438 -358)"><path d="M516.547 380.841C505.941 379.996 496.05 375.156 488.875 367.3 487.522 365.732 485.155 365.558 483.587 366.911 483.448 367.031 483.318 367.161 483.198 367.3 476.023 375.156 466.132 379.996 455.526 380.841 453.555 381.026 452.053 382.688 452.068 384.667L452.068 394.32C452.068 415.306 465.415 434.503 483.947 446.382 485.22 447.2 486.853 447.2 488.126 446.382 506.658 434.5 520.005 415.306 520.005 394.32L520.005 384.667C520.02 382.688 518.518 381.026 516.547 380.841ZM513.505 394.32C513.505 411.02 503.556 427.867 486.891 439.396L486.037 439.987 485.184 439.396C468.518 427.866 458.567 411.015 458.567 394.32L458.567 387.069 459.831 386.869C469.248 385.38 478.013 381.135 485.02 374.669L486.036 373.733 487.053 374.669C494.06 381.135 502.824 385.38 512.241 386.869L513.505 387.069Z"></path><path d="M486.036 377.788C479.093 383.86 470.639 387.945 461.567 389.612L461.567 394.32C461.567 409.747 470.694 425.383 486.037 436.33 501.378 425.385 510.505 409.748 510.505 394.32L510.505 389.612C501.433 387.945 492.979 383.86 486.036 377.788ZM483.468 416.833 473.356 406.72 476.792 403.284 483.468 409.96 497.14 396.288 500.576 399.725Z"></path></g></svg>
                                                </div>
                                            </div>
                                            <h3 class="flip-box__layer__title">
                                                Third-Party Processing
                                            </h3>		
                                            <div class="flip-box__layer__description">
                                                Thanks to FHE, the (public) cloud can be used for operations that are highly sensitive.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div class="flip-card-overlay">
                                        <div class="flip-card-inner">
                                            <div class="flip-box__layer__description">
                                                When processing sensitive data, it is often chosen not to leave the data and its processing with an external party - the risk of leaking data is much greater. FHE allows the processor to store and process its data securely in the cloud. This opens the possibility of taking advantage of all the benefits of the cloud.
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="96"><defs><clipPath id="clip11"><rect x="289" y="423" width="96" height="96"></rect></clipPath></defs><g clip-path="url(#clip11)" transform="translate(-289 -423)"><path d="M319.433 459.413C320.102 462.658 323.276 464.747 326.521 464.077 329.767 463.408 331.855 460.234 331.186 456.989 330.516 453.745 327.345 451.656 324.1 452.324 320.854 452.992 318.764 456.164 319.432 459.41 319.433 459.411 319.433 459.412 319.433 459.413Z"></path><path d="M296.414 444.374C296.204 444.021 296.07 443.627 296.022 443.218 295.907 442.295 296.227 441.372 296.888 440.718L295.419 439.361C293.839 440.981 293.544 443.461 294.7 445.406 295.141 446.121 295.743 446.723 296.457 447.164 297.387 447.731 298.408 448.133 299.475 448.351L299.914 446.4C299.074 446.232 298.269 445.92 297.534 445.479 297.081 445.202 296.697 444.824 296.414 444.374Z"></path><path d="M318.034 439.326C318.245 439.679 318.378 440.073 318.425 440.482 318.541 441.405 318.222 442.329 317.56 442.982L319.028 444.34C320.094 443.258 320.604 441.746 320.41 440.24 320.33 439.552 320.104 438.889 319.748 438.295 319.306 437.58 318.705 436.978 317.991 436.535L316.913 438.218C317.367 438.496 317.75 438.876 318.034 439.326Z"></path><path d="M356.541 438.646 356.432 440.646C356.911 440.672 357.379 440.685 357.832 440.685 359.072 440.7 360.31 440.571 361.52 440.3 362.421 440.098 363.281 439.742 364.06 439.247 364.677 438.848 365.202 438.322 365.6 437.705 366.209 436.735 366.465 435.585 366.325 434.449L364.341 434.699C364.379 435.01 364.367 435.324 364.306 435.631 364.238 435.986 364.104 436.325 363.912 436.631 363.664 437.01 363.339 437.333 362.957 437.577 362.371 437.943 361.726 438.205 361.051 438.353 359.569 438.662 358.051 438.761 356.541 438.646Z"></path><path d="M342.841 433.856C342.228 433.157 341.975 432.212 342.157 431.3 342.225 430.945 342.359 430.606 342.551 430.3 342.799 429.921 343.125 429.598 343.506 429.353 344.092 428.987 344.737 428.724 345.412 428.576 346.469 428.343 347.549 428.233 348.631 428.249L348.631 426.249C347.391 426.232 346.153 426.361 344.943 426.632 344.041 426.833 343.18 427.189 342.4 427.684 341.783 428.084 341.258 428.61 340.859 429.227 340.533 429.744 340.306 430.317 340.191 430.917 339.893 432.404 340.294 433.946 341.278 435.1Z"></path><path d="M355.268 466.49C354.183 468.319 354.373 470.633 355.742 472.26 356.187 472.777 356.731 473.199 357.342 473.501 358.098 473.869 358.913 474.103 359.749 474.194 360.204 474.248 360.663 474.275 361.121 474.273 361.766 474.271 362.41 474.229 363.05 474.149L362.8 472.164C361.868 472.292 360.924 472.307 359.988 472.209 359.38 472.146 358.788 471.979 358.237 471.715 357.865 471.533 357.533 471.278 357.262 470.965 357.045 470.707 356.874 470.413 356.756 470.097 356.427 469.227 356.521 468.254 357.01 467.463Z"></path><path d="M379.766 461.474C379.567 460.941 379.278 460.446 378.91 460.012 378.465 459.496 377.921 459.074 377.31 458.771 376.553 458.404 375.739 458.17 374.903 458.078L374.657 460.063C375.265 460.126 375.857 460.293 376.408 460.557 376.781 460.739 377.112 460.995 377.384 461.308 377.601 461.566 377.772 461.859 377.89 462.175 378.139 462.826 378.144 463.544 377.905 464.198L379.794 464.854C380.186 463.759 380.175 462.561 379.763 461.474Z"></path><path d="M366.368 463.579C361.568 465.379 358.104 467.979 358.633 469.394 359.095 470.628 362.451 470.544 366.493 469.304L366.493 487.244 351.677 489.189 344.162 479.131 338.62 468.057 338.609 467.465 346.509 468.86C347.712 469.072 348.923 468.534 349.572 467.5L355.034 458.761C355.877 457.407 355.51 455.631 354.201 454.721L354.201 436.4C358.566 437.036 362.083 436.58 362.343 435.249 362.632 433.769 358.788 431.772 353.755 430.788 348.722 429.804 344.409 430.207 344.12 431.688 343.841 433.117 347.42 435.026 352.201 436.041L352.201 454.194C351.275 454.279 350.441 454.791 349.946 455.578L345.557 462.6 338.149 461.291C337.888 461.249 337.623 461.242 337.36 461.269 336.831 461.219 336.302 461.366 335.874 461.681L322.974 468.427 322.923 468.465 316.97 470.977 309.241 464C308.973 463.76 308.663 463.572 308.327 463.443L308.327 444.454C313.039 443.761 316.613 442.144 316.439 440.724 316.257 439.224 311.983 438.517 306.893 439.139 301.803 439.761 297.825 441.477 298.008 442.974 298.176 444.349 301.796 445.056 306.327 444.682L306.327 463.375C304.753 463.86 303.87 465.528 304.354 467.102 304.514 467.622 304.813 468.088 305.219 468.45L314.363 476.709C315.228 477.49 316.466 477.7 317.54 477.247L326.38 473.518 326.494 473.618 332.822 484.418 326.846 494.538C326.294 495.472 326.289 496.632 326.834 497.57L335.5 512.505C336.332 513.938 338.168 514.426 339.601 513.594 341.034 512.762 341.522 510.926 340.69 509.493L332.906 496.077 340.14 483.831 340.179 483.825 347.922 494.188C348.572 495.057 349.64 495.508 350.716 495.366L367.84 493.119C369.477 492.91 370.635 491.413 370.426 489.775 370.284 488.669 369.539 487.734 368.493 487.349L368.493 468.612C373.184 466.812 376.541 464.27 376.02 462.878 375.491 461.466 371.169 461.78 366.368 463.579Z"></path></g></svg>
                                                </div>
                                            </div>
                                            <h3 class="flip-box__layer__title">
                                                Compromise
                                            </h3>		
                                            <div class="flip-box__layer__description">
                                                FHE can bridge the gap between existing solutions.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div class="flip-card-overlay">
                                        <div class="flip-card-inner">
                                            <div class="flip-box__layer__description">
                                                FHE makes it possible to offer extensive features, while maintaining maximum security. A good example is the comparison between cloud storage providers Dropbox and MEGA. Dropbox offers more features than MEGA, while MEGA offers more security than Dropbox. FHE can bridge this gap.
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="96"><defs><clipPath id="clip9"><rect x="453" y="222" width="96" height="96"></rect></clipPath></defs><g clip-path="url(#clip9)" transform="translate(-453 -222)"><path d="M463 256 470 256 470 260 463 260Z"></path><path d="M463 248 470 248 470 252 463 252Z"></path><path d="M463 264 470 264 470 268 463 268Z"></path><path d="M463 288 470 288 470 292 463 292Z"></path><path d="M463 280 470 280 470 284 463 284Z"></path><path d="M463 272 470 272 470 276 463 276Z"></path><path d="M532 280 539 280 539 284 532 284Z"></path><path d="M532 288 539 288 539 292 532 292Z"></path><path d="M532 272 539 272 539 276 532 276Z"></path><path d="M532 248 539 248 539 252 532 252Z"></path><path d="M532 264 539 264 539 268 532 268Z"></path><path d="M532 256 539 256 539 260 532 260Z"></path><path d="M503 232 507 232 507 239 503 239Z"></path><path d="M519 232 523 232 523 239 519 239Z"></path><path d="M511 232 515 232 515 239 511 239Z"></path><path d="M495 232 499 232 499 239 495 239Z"></path><path d="M479 232 483 232 483 239 479 239Z"></path><path d="M487 232 491 232 491 239 487 239Z"></path><path d="M487 301 491 301 491 308 487 308Z"></path><path d="M479 301 483 301 483 308 479 308Z"></path><path d="M495 301 499 301 499 308 495 308Z"></path><path d="M503 301 507 301 507 308 503 308Z"></path><path d="M511 301 515 301 515 308 511 308Z"></path><path d="M519 301 523 301 523 308 519 308Z"></path><path d="M488 257 514 257 514 283 488 283Z"></path><path d="M524 243 478 243C475.791 243 474 244.791 474 247L474 293C474 295.209 475.791 297 478 297L524 297C526.209 297 528 295.209 528 293L528 247C528 244.791 526.209 243 524 243ZM518 287 484 287 484 253 518 253Z"></path></g></svg>
                                                </div>
                                            </div>
                                            <h3 class="flip-box__layer__title">
                                                Post Quantum Cryptography
                                            </h3>		
                                            <div class="flip-box__layer__description">
                                                The lattice-based cryptography can withstand attacks from a quantum computer.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div class="flip-card-overlay">
                                        <div class="flip-card-inner">
                                            <div class="flip-box__layer__description">
                                                It used to be thought that public-key algorithms could withstand a cryptanalysis attack by quantum computers. Since 2021, this no longer applies to the most popular algorithms. However, it seems that FHE is not (yet) part of this group.
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="96"><defs><clipPath id="clip872389"><rect x="711" y="568" width="96" height="96"></rect></clipPath></defs><g clip-path="url(#clip872389)" transform="translate(-711 -568)"><path d="M793.9 607.1C793.6 607.1 793.3 607.1 793 607.1L790.4 600.1C796.4 596.7 798.5 589.1 795.2 583.1 791.8 577.1 784.2 575 778.2 578.3 775.3 579.9 773.1 582.7 772.3 585.9L763 584.9C762.3 580.5 758.2 577.4 753.8 578.1 749.8 578.7 746.9 582.1 746.9 586.1 746.9 587.5 747.3 588.9 748 590.2L736.8 601.2C734.7 599.6 732.1 598.7 729.4 598.7 722.5 598.7 716.9 604.3 716.9 611.2 716.9 618.1 722.5 623.7 729.4 623.7L731.9 638.7C727.8 640.5 725.9 645.3 727.7 649.4 729.5 653.5 734.3 655.4 738.4 653.6 742.2 652 744.1 647.8 743 643.8L751.8 639.2C757.5 645.5 767.3 646 773.7 640.3 776.9 637.4 778.8 633.2 778.8 628.9 778.8 627.8 778.7 626.6 778.4 625.5L788.1 620.5C791.1 623.9 796.2 624.2 799.6 621.2 803 618.2 803.3 613.1 800.3 609.7 798.4 608.1 796.2 607.1 793.9 607.1L793.9 607.1ZM793.9 610.1C795.2 610.1 796.2 611.1 796.2 612.4 796.2 613.7 795.2 614.7 793.9 614.7 792.6 614.7 791.6 613.7 791.6 612.4 791.6 612.4 791.6 612.4 791.6 612.4 791.6 611.1 792.6 610.1 793.9 610.1L793.9 610.1ZM784.3 581.6C786.2 581.6 787.8 583.2 787.8 585.1 787.8 587 786.2 588.6 784.3 588.6 782.4 588.6 780.8 587 780.8 585.1 780.8 585.1 780.8 585.1 780.8 585.1 780.8 583.2 782.3 581.6 784.3 581.6ZM777.2 593C777.2 592.5 777.5 591.9 777.9 591.6 778.9 590.9 780.1 590.3 781.3 590 782.2 589.7 783.2 589.6 784.2 589.6 785.2 589.6 786.2 589.8 787.1 590 788.3 590.3 789.5 590.9 790.5 591.7 790.9 592 791.2 592.6 791.2 593.1L791.2 595.8 777.2 595.8 777.2 593ZM754.9 581C756.2 581 757.2 582 757.2 583.3 757.2 584.6 756.2 585.6 754.9 585.6 753.6 585.6 752.6 584.6 752.6 583.3 752.6 583.3 752.6 583.3 752.6 583.3 752.6 582.1 753.6 581 754.9 581L754.9 581ZM750.2 588.5C750.2 588.1 750.4 587.8 750.7 587.6 751.4 587.1 752.2 586.8 753 586.6 753.6 586.4 754.3 586.3 754.9 586.3 755.5 586.3 756.2 586.4 756.8 586.6 757.6 586.8 758.3 587.2 759 587.7 759.3 587.9 759.5 588.3 759.5 588.6L759.5 590.4 750.3 590.4 750.3 588.5ZM729.2 603.6C731.1 603.6 732.7 605.2 732.7 607.1 732.7 609 731.1 610.6 729.2 610.6 727.3 610.6 725.7 609 725.7 607.1 725.7 607.1 725.7 607.1 725.7 607.1 725.8 605.2 727.3 603.6 729.2 603.6L729.2 603.6ZM722.2 617.7 722.2 615C722.2 614.5 722.5 613.9 722.9 613.6 723.9 612.9 725.1 612.3 726.3 612 727.2 611.7 728.2 611.6 729.2 611.6 730.2 611.6 731.2 611.8 732.1 612 733.3 612.3 734.5 612.9 735.5 613.7 735.9 614 736.2 614.6 736.2 615.1L736.2 617.8 722.2 617.7ZM739.5 650.3 730.2 650.3 730.2 648.5C730.2 648.1 730.4 647.8 730.7 647.6 731.4 647.1 732.2 646.7 733 646.5 733.6 646.3 734.3 646.2 734.9 646.2 735.5 646.2 736.2 646.3 736.8 646.5 737.6 646.7 738.3 647.1 739 647.6 739.3 647.8 739.5 648.2 739.5 648.5L739.5 650.3ZM732.5 643.3C732.5 642 733.5 641 734.8 641 736.1 641 737.1 642 737.1 643.3 737.1 644.6 736.1 645.6 734.8 645.6 733.6 645.7 732.6 644.6 732.5 643.3L732.5 643.3ZM740.5 640.5C739.2 639.2 737.4 638.4 735.6 638.2L733.1 623.2C735.5 622.4 737.6 620.9 739.1 618.9L748.4 623.8C746.9 627.8 747.2 632.3 749.2 636.1L740.5 640.5ZM750.3 620.1 741.1 615.3C741.5 614 741.7 612.7 741.7 611.3 741.7 608.7 740.9 606.2 739.4 604.1L750.6 593.2C754.4 595.5 759.4 594.4 761.7 590.6 762 590.1 762.2 589.6 762.4 589.1L771.7 590.1C771.9 593.7 773.7 597.1 776.6 599.3L768.4 614.6C761.9 612 754.4 614.3 750.3 620.1L750.3 620.1ZM767.3 623.8C767.3 626.2 765.3 628.1 762.9 628.1 760.5 628.1 758.6 626.2 758.6 623.8 758.6 621.4 760.5 619.5 762.9 619.5 762.9 619.5 762.9 619.5 763 619.5 765.4 619.5 767.3 621.4 767.3 623.8L767.3 623.8ZM771.6 636.9 754.3 636.9 754.3 633.6C754.3 632.9 754.6 632.3 755.2 631.9 756.5 631 757.9 630.3 759.4 629.8 760.6 629.5 761.8 629.3 763 629.3 764.2 629.3 765.4 629.5 766.6 629.8 768.1 630.2 769.6 630.9 770.8 631.9 771.3 632.3 771.7 633 771.7 633.6L771.6 636.9ZM785.8 615.3C785.8 615.9 785.9 616.5 786.1 617.1L776.9 621.9C775.8 619.7 774.1 617.9 772.1 616.5L780.3 601.2C781.6 601.7 783 601.9 784.4 601.9 785.2 601.9 786 601.8 786.8 601.7L789.4 608.7C787 610.1 785.7 612.6 785.8 615.3ZM798.5 619.3 789.2 619.3 789.2 617.5C789.2 617.1 789.4 616.8 789.7 616.6 790.4 616.1 791.2 615.7 792 615.5 792.6 615.3 793.3 615.2 793.9 615.2 794.5 615.2 795.2 615.3 795.8 615.5 796.6 615.7 797.3 616.1 798 616.6 798.3 616.8 798.5 617.2 798.5 617.5L798.5 619.3Z"></path></g></svg>
                                                </div>
                                            </div>
                                            <h3 class="flip-box__layer__title">
                                                Sharing Data
                                            </h3>		
                                            <div class="flip-box__layer__description">
                                                Sensitive business data can be shared through the use of FHE.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div class="flip-card-overlay">
                                        <div class="flip-card-inner">
                                            <div class="flip-box__layer__description">
                                                For example, to enable cross-sector collaboration. This is possible because the calculations of the third-party will always be done on your encrypted data. It is therefore next to impossible that this data will be misused.
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="96"><defs><clipPath id="clip13"><rect x="100" y="285" width="96" height="96"></rect></clipPath></defs><g clip-path="url(#clip13)" transform="translate(-100 -285)"><path d="M144 365 142 365 142 361 114 361 114 365 112 365C109.8 365 108 366.8 108 369 108 371.2 109.8 373 112 373L144 373C146.2 373 148 371.2 148 369 148 366.8 146.2 365 144 365Z"></path><path d="M143.9 345.1C145.1 343.9 145.1 342 143.9 340.9L128.1 325.1C126.9 323.9 125 323.9 123.9 325.1L120 329 140 349 143.9 345.1Z"></path><path d="M167.9 316.9C169.1 318.1 171 318.1 172.1 316.9L176 313 156 293 152.1 296.9C150.9 298.1 150.9 300 152.1 301.1L167.9 316.9Z"></path><path d="M187 352 160 325 166 319 150 303 130 323 146 339 154 331 181 358C182.7 359.7 185.3 359.7 187 358 188.7 356.3 188.7 353.7 187 352Z"></path></g></svg>
                                                </div>
                                            </div>
                                            <h3 class="flip-box__layer__title">
                                                Compliance
                                            </h3>		
                                            <div class="flip-box__layer__description">
                                                FHE can help you stay in compliance with modern laws and regulations.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div class="flip-card-overlay">
                                        <div class="flip-card-inner">
                                            <div class="flip-box__layer__description">
                                                As the penalties for violations of, for example, privacy regulations increase, it is more important than ever to handle information correctly. Because FHE can work with data that will never be readable, violations of the law suddenly become a much smaller risk in the event of a leak.
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

## Cons

<div class="flip-box-container">
    <div class="flip-box-row">
        <div class="flip-box-column">
            <div class="flip-box-column-wrap">
                <div class="flip-box-widget-wrap">
                    <div class="flip-box-element flip-box-widget">
                        <div class="flip-box-widget-container">
                            <div class="flip-card">
                                <div class="flip-card-front con">
                                    <div class="flip-card-overlay">
                                        <div class="flip-card-inner">
                                            <div class="icon-wrapper view-default">
                                                <div class="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="96"><defs><clipPath id="clip89328"><rect x="899" y="432" width="96" height="96"></rect></clipPath></defs><g clip-path="url(#clip89328)" transform="translate(-899 -432)"><path d="M949.006 462.1 949.006 466.1C948.306 466.1 947.706 466 947.006 466 946.338 465.983 945.669 466.017 945.006 466.1L945.006 462.1C941.241 462.285 937.529 463.061 934.006 464.4L935.506 468C934.206 468.5 933.006 469 931.806 469.6L930.306 465.9C928.45 466.81 926.676 467.881 925.006 469.1L920.706 464.8C928.28 459.08 937.515 455.99 947.006 456 971.307 456 991.006 475.699 991.006 500L991.006 504 985.006 504 985.006 500C984.993 495.992 984.352 492.01 983.106 488.2L979.406 489.7C979.006 488.4 978.506 487.2 978.006 486L981.706 484.5C980.195 481.111 978.171 477.974 975.706 475.2L972.906 478C972.024 476.985 971.089 476.017 970.106 475.1L972.906 472.3C970.156 469.744 967.059 467.589 963.706 465.9L962.206 469.6C961.006 469 959.806 468.5 958.506 468L960.006 464.3C956.477 462.994 952.765 462.252 949.006 462.1Z"></path><path d="M910.906 474.8 915.206 479.1C914.104 480.789 913.135 482.561 912.306 484.4L916.006 486C915.506 487.2 915.006 488.5 914.606 489.7L910.906 488.2C909.66 492.01 909.019 495.992 909.006 500L909.006 504 903.006 504 903.006 500C902.986 490.987 905.744 482.188 910.906 474.8Z"></path><path d="M949.806 498.2C950.006 498.3 950.106 498.5 950.306 498.7 951.747 500.408 951.529 502.961 949.821 504.401 948.113 505.842 945.56 505.625 944.12 503.917 944.115 503.911 944.111 503.906 944.106 503.9L913.006 467Z"></path></g></svg>
                                                </div>
                                            </div>
                                            <h3 class="flip-box__layer__title">
                                                Performance
                                            </h3>		
                                            <div class="flip-box__layer__description">
                                                Unfortunately, FHE's performance is not exactly efficient at the moment.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div class="flip-card-overlay">
                                        <div class="flip-card-inner">
                                            <div class="flip-box__layer__description">
                                                For example, in 2011 a simple operation still took seconds to hours. This has improved a lot over the years, but it's not yet at the level of traditional encryption. FHE is still a balancing act between utility, safety, and performance. It is safe but has suboptimal performance.
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
                                <div class="flip-card-front con">
                                    <div class="flip-card-overlay">
                                        <div class="flip-card-inner">
                                            <div class="icon-wrapper view-default">
                                                <div class="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="96"><defs><clipPath id="clip784378"><rect x="761" y="387" width="96" height="96"></rect></clipPath></defs><g clip-path="url(#clip784378)" transform="translate(-761 -387)"><path d="M830.5 397C830.5 392.58 827.37 389 823.5 389 819.63 389 816.5 392.58 816.5 397 816.5 401 819.71 405.84 822.5 406.81 822.495 406.873 822.495 406.937 822.5 407 822.438 409.461 822.776 411.917 823.5 414.27 824.195 416.444 824.533 418.717 824.5 421 824.533 423.283 824.195 425.556 823.5 427.73 823.29 428.45 823.08 429.19 822.91 430.06 822.296 430.168 821.731 430.469 821.3 430.92L810.65 442 803.78 442C799.09 442.35 795.13 446.07 794.18 448.5 793.94 449.13 791.06 455.92 789.18 460.33 788.535 461.854 789.247 463.613 790.77 464.26 791.139 464.422 791.537 464.504 791.94 464.5 793.141 464.501 794.227 463.785 794.7 462.68L798 454.93 798 481 804 481 804 463 807 463 807 481 813 481 813 448.21 825.66 435.08C826.808 433.887 826.772 431.989 825.58 430.84 825.382 430.654 825.16 430.496 824.92 430.37 825.08 429.62 825.27 428.95 825.46 428.27 826.184 425.917 826.522 423.461 826.46 421 826.522 418.539 826.184 416.083 825.46 413.73 824.765 411.556 824.427 409.283 824.46 407 824.465 406.937 824.465 406.873 824.46 406.81 827.29 405.84 830.5 401 830.5 397Z"></path><path d="M813 432.5C813 436.642 809.642 440 805.5 440 801.358 440 798 436.642 798 432.5 798 428.358 801.358 425 805.5 425 809.642 425 813 428.358 813 432.5Z"></path></g></svg>
                                                </div>
                                            </div>
                                            <h3 class="flip-box__layer__title">
                                                Maturity
                                            </h3>		
                                            <div class="flip-box__layer__description">
                                                FHE is still relatively young and is not being quickly adopted by the IT world.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div class="flip-card-overlay">
                                        <div class="flip-card-inner">
                                            <div class="flip-box__layer__description">
                                                IBM, Microsoft, Google, and others are still working hard on the first production ready FHE implementations. There is still a lot to gain in terms of features and performance.
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
                                <div class="flip-card-front con">
                                    <div class="flip-card-overlay">
                                        <div class="flip-card-inner">
                                            <div class="icon-wrapper view-default">
                                                <div class="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="96"><defs><clipPath id="clip87328"><rect x="1062" y="205" width="96" height="96"></rect></clipPath></defs><g clip-path="url(#clip87328)" transform="translate(-1062 -205)"><path d="M1126.3 274.1C1124.8 272.6 1123.9 270.5 1123.9 268.4L1123.3 267.8C1114.2 273.4 1102.6 272.8 1094.1 266.3L1093.8 266.5C1092.7 267.3 1092 268.6 1092 270L1092 279 1128 279 1128 275.8 1126.3 274.1Z"></path><path d="M1135.5 244.5C1140.4 243.7 1143.7 239 1142.9 234.1 1142.1 229.2 1137.4 225.9 1132.5 226.7 1131.1 226.9 1129.8 227.5 1128.7 228.3 1132.8 232.7 1135.2 238.4 1135.5 244.5Z"></path><path d="M1150.2 252.4C1147.6 250.4 1144.6 248.9 1141.4 248.2 1139.5 247.6 1137.5 247.3 1135.5 247.1 1135.3 251.4 1134 255.6 1131.7 259.3L1132.3 259.9C1134.4 259.9 1136.5 260.8 1138 262.3L1140.7 265 1152 265 1152 256C1152 254.6 1151.4 253.2 1150.2 252.4Z"></path><path d="M1145.4 273.9 1136 264.4C1134.7 263.2 1133 262.6 1131.2 263L1127.8 259.7C1130.9 255.7 1132.5 250.9 1132.5 245.9 1132.6 233.3 1122.4 223 1109.7 222.9 1097 222.8 1086.9 233 1086.9 245.6 1086.9 258.2 1097 268.5 1109.7 268.6 1114.7 268.6 1119.6 267 1123.7 263.9L1127.1 267.2C1126.8 268.9 1127.3 270.7 1128.5 272L1138 281.5C1140 283.6 1143.4 283.7 1145.5 281.7 1147.6 279.7 1147.7 276.3 1145.7 274.2 1145.6 274.1 1145.5 274 1145.4 273.9L1145.4 273.9ZM1109.8 227.6C1119.9 227.6 1128 235.7 1128 245.8 1128 250.1 1126.5 254.3 1123.7 257.5 1121.8 256.6 1119.9 255.9 1117.9 255.4 1115.2 254.6 1112.4 254.1 1109.6 254.1 1106.8 254.1 1104 254.6 1101.3 255.4 1099.4 255.9 1097.6 256.6 1095.9 257.6 1089.4 250 1090.3 238.5 1097.9 232 1101.2 229.1 1105.4 227.6 1109.8 227.6Z"></path><path d="M1119.7 241.8C1119.7 247.378 1115.18 251.9 1109.6 251.9 1104.02 251.9 1099.5 247.378 1099.5 241.8 1099.5 236.222 1104.02 231.7 1109.6 231.7 1115.18 231.7 1119.7 236.222 1119.7 241.8Z"></path><path d="M1084 247.1C1082.2 247.3 1080.4 247.6 1078.6 248.2 1075.5 249.1 1072.5 250.6 1069.8 252.4 1068.6 253.2 1068 254.6 1068 256L1068 265 1089.6 265C1090 264.4 1090.5 263.9 1091.1 263.5 1086.8 259 1084.3 253.2 1084 247.1Z"></path><path d="M1084 244.4C1084.3 238.3 1086.8 232.6 1091 228.1 1086.9 225.3 1081.3 226.4 1078.5 230.6 1075.7 234.8 1076.8 240.3 1081 243.1 1081.9 243.7 1082.9 244.1 1084 244.4Z"></path></g></svg>
                                                </div>
                                            </div>
                                            <h3 class="flip-box__layer__title">
                                                Data Gathering
                                            </h3>		
                                            <div class="flip-box__layer__description">
                                                FHE protects users and their data. These cannot be sold easily.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div class="flip-card-overlay">
                                        <div class="flip-card-inner">
                                            <div class="flip-box__layer__description">
                                                If fully implemented, FHE could be the end of targeted advertising. Also, selling anonymous user data and many other ways in which money can be made are at risk of extinction. Users want to be more secure, but they probably aren't willing to pay for it.
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
                                <div class="flip-card-front con">
                                    <div class="flip-card-overlay">
                                        <div class="flip-card-inner">
                                            <div class="icon-wrapper view-default">
                                                <div class="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="96"><defs><clipPath id="clip20"><rect x="705" y="318" width="96" height="96"></rect></clipPath></defs><g clip-path="url(#clip20)" transform="translate(-705 -318)"><path d="M738 348.8C738 353.771 733.971 357.8 729 357.8 724.029 357.8 720 353.771 720 348.8 720 343.829 724.029 339.8 729 339.8 733.971 339.8 738 343.829 738 348.8Z"></path><path d="M786 348.8C786 353.771 781.971 357.8 777 357.8 772.029 357.8 768 353.771 768 348.8 768 343.829 772.029 339.8 777 339.8 781.971 339.8 786 343.829 786 348.8Z"></path><path d="M771 392.2 771 383.2C771 381.8 770.4 380.4 769.2 379.6 766.8 377.6 763.6 376.2 760.4 375.4 758.2 374.8 755.6 374.2 753 374.2 750.6 374.2 748 374.6 745.6 375.4 742.4 376.2 739.4 377.8 736.8 379.6 735.6 380.6 735 381.8 735 383.2L735 392.2 771 392.2Z"></path><path d="M762 362.8C762 367.771 757.971 371.8 753 371.8 748.029 371.8 744 367.771 744 362.8 744 357.829 748.029 353.8 753 353.8 757.971 353.8 762 357.829 762 362.8Z"></path><path d="M793.2 365.6C790.8 363.6 787.6 362.2 784.4 361.4 782.2 360.8 779.6 360.2 777 360.2 774.6 360.2 772 360.6 769.6 361.4 768.4 361.8 767.2 362.2 766 362.8L766 363C766 366.4 764.6 369.6 762.4 371.8 766.2 373 769.2 374.6 771.6 376.4 772.2 377 772.8 377.4 773.2 378.2L795 378.2 795 369.2C795 367.8 794.4 366.4 793.2 365.6Z"></path><path d="M734.4 376.4 734.4 376.4C737.2 374.4 740.4 372.8 743.6 371.8 741.4 369.4 740 366.4 740 363 740 362.8 740 362.8 740 362.6 738.8 362.2 737.6 361.6 736.4 361.4 734.2 360.8 731.6 360.2 729 360.2 726.6 360.2 724 360.6 721.6 361.4 718.4 362.4 715.4 363.8 712.8 365.6 711.6 366.4 711 367.8 711 369.2L711 378.2 732.6 378.2C733.2 377.4 733.6 377 734.4 376.4Z"></path></g></svg>
                                                </div>
                                            </div>
                                            <h3 class="flip-box__layer__title">
                                                Multiple Users
                                            </h3>		
                                            <div class="flip-box__layer__description">
                                                FHE does not have multi-user functionality yet.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div class="flip-card-overlay">
                                        <div class="flip-card-inner">
                                            <div class="flip-box__layer__description">
                                                Because of this flaw, a database could - for example - only support one customer if it is encrypted in its entirety with one key. It is therefore not possible to access only part of the encrypted data with a key. In the future, this may no longer be a problem.
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
                                <div class="flip-card-front con">
                                    <div class="flip-card-overlay">
                                        <div class="flip-card-inner">
                                            <div class="icon-wrapper view-default">
                                                <div class="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="96"><defs><clipPath id="clip17"><rect x="1016" y="376" width="96" height="96"></rect></clipPath></defs><g clip-path="url(#clip17)" transform="translate(-1016 -376)"><path d="M1027.01 389 1033.01 389 1033.01 419 1027.01 419Z"></path><path d="M1053.01 395C1054.11 395 1055.01 395.895 1055.01 397L1055.01 411C1055.01 412.105 1054.11 413 1053.01 413L1047.01 413C1045.9 413 1045.01 412.105 1045.01 411L1045.01 397C1045.01 395.895 1045.9 395 1047.01 395L1053.01 395M1053.01 389 1047.01 389C1042.59 389 1039.01 392.582 1039.01 397L1039.01 411C1039.01 415.418 1042.59 419 1047.01 419L1053.01 419C1057.42 419 1061.01 415.418 1061.01 411L1061.01 397C1061.01 392.582 1057.42 389 1053.01 389Z"></path><path d="M1067.01 389 1073.01 389 1073.01 419 1067.01 419Z"></path><path d="M1093.01 395C1094.11 395 1095.01 395.895 1095.01 397L1095.01 411C1095.01 412.105 1094.11 413 1093.01 413L1087.01 413C1085.9 413 1085.01 412.105 1085.01 411L1085.01 397C1085.01 395.895 1085.9 395 1087.01 395L1093.01 395M1093.01 389 1087.01 389C1082.59 389 1079.01 392.582 1079.01 397L1079.01 411C1079.01 415.418 1082.59 419 1087.01 419L1093.01 419C1097.42 419 1101.01 415.418 1101.01 411L1101.01 397C1101.01 392.582 1097.42 389 1093.01 389Z"></path><path d="M1027.01 429 1033.01 429 1033.01 459 1027.01 459Z"></path><path d="M1053.01 435C1054.11 435 1055.01 435.895 1055.01 437L1055.01 451C1055.01 452.105 1054.11 453 1053.01 453L1047.01 453C1045.9 453 1045.01 452.105 1045.01 451L1045.01 437C1045.01 435.895 1045.9 435 1047.01 435L1053.01 435M1053.01 429 1047.01 429C1042.59 429 1039.01 432.582 1039.01 437L1039.01 451C1039.01 455.418 1042.59 459 1047.01 459L1053.01 459C1057.42 459 1061.01 455.418 1061.01 451L1061.01 437C1061.01 432.582 1057.42 429 1053.01 429Z"></path><path d="M1067.01 429 1073.01 429 1073.01 459 1067.01 459Z"></path><path d="M1093.01 435C1094.11 435 1095.01 435.895 1095.01 437L1095.01 451C1095.01 452.105 1094.11 453 1093.01 453L1087.01 453C1085.9 453 1085.01 452.105 1085.01 451L1085.01 437C1085.01 435.895 1085.9 435 1087.01 435L1093.01 435M1093.01 429 1087.01 429C1082.59 429 1079.01 432.582 1079.01 437L1079.01 451C1079.01 455.418 1082.59 459 1087.01 459L1093.01 459C1097.42 459 1101.01 455.418 1101.01 451L1101.01 437C1101.01 432.582 1097.42 429 1093.01 429Z"></path></g></svg>
                                                </div>
                                            </div>
                                            <h3 class="flip-box__layer__title">
                                                Noise
                                            </h3>		
                                            <div class="flip-box__layer__description">
                                                Lattice-based cryptography, used by FHE, can make data unreadable.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div class="flip-card-overlay">
                                        <div class="flip-card-inner">
                                            <div class="flip-box__layer__description">
                                                Whenever a calculation is made with an encrypted value, the amount of noise in that value grows. There is a point where the value can no longer be used or deciphered. As a result, it is necessary to keep track of how much noise the data contains and possibly re-encrypt it. Most FHE implementations do this automatically.
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
                                <div class="flip-card-front con">
                                    <div class="flip-card-overlay">
                                        <div class="flip-card-inner">
                                            <div class="icon-wrapper view-default">
                                                <div class="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="96"><defs><clipPath id="clip0"><rect x="862" y="192" width="96" height="96"></rect></clipPath></defs><g clip-path="url(#clip0)" transform="translate(-862 -192)"><path d="M870 241.4 870 257.8C870 266.7 877.2 273.9 886.1 273.9 891.7 273.9 896.8 271 899.8 266.3 906.2 271.1 913.9 273.7 921.9 273.7L935 273.7 935.5 273.7 932.6 276.6C931.8 277.4 931.8 278.6 932.6 279.4 933.4 280.2 934.6 280.2 935.4 279.4L941.4 273.4C942.2 272.6 942.2 271.4 941.4 270.6L935.4 264.5C934.7 263.7 933.4 263.6 932.6 264.3 931.8 265 931.7 266.3 932.4 267.1L932.4 267.1 932.5 267.2 934.5 269.3 934.8 269.6 921.9 269.6C914.5 269.6 907.3 267.1 901.5 262.5 901.6 262.3 901.7 262 901.7 261.8L906.3 244.3C908.2 237.3 912.9 231.3 919.3 227.9 923 233.6 925 240.2 925 246.9L925 247.1 922.4 244.5C921.6 243.7 920.4 243.7 919.6 244.5 918.8 245.3 918.8 246.5 919.6 247.3L925.6 253.3C926.4 254.1 927.6 254.1 928.4 253.3L934.5 247.3C935.3 246.5 935.4 245.3 934.6 244.5 933.9 243.7 932.6 243.6 931.8 244.4L931.7 244.5 929 247.2 929 246.9C929 239.6 926.9 232.5 923.1 226.4 925.9 225.4 928.8 224.9 931.8 224.9L949.2 224.9 946.6 227.5C945.8 228.3 945.8 229.6 946.6 230.3 947.4 231 948.7 231.1 949.4 230.3L955.4 224.3C956.2 223.5 956.2 222.3 955.4 221.5L955.4 221.5 949.4 215.4C948.6 214.6 947.4 214.5 946.6 215.3 945.8 216 945.7 217.3 946.5 218.1L946.6 218.2 949.2 220.8 931.7 220.8C927.9 220.8 924.2 221.5 920.6 222.9 915.9 217 909.6 212.5 902.4 210.2 908 206 914.9 203.8 921.9 203.8 923 203.8 923.9 202.9 923.9 201.8 923.9 200.7 923 199.8 921.9 199.8 913 199.8 904.3 203.1 897.6 209 889.7 207.5 881.5 208.5 874.1 212 873.1 212.5 872.6 213.6 873.1 214.6 873.6 215.6 874.7 216.1 875.7 215.6 875.7 215.6 875.7 215.6 875.8 215.6 880.4 213.4 885.4 212.3 890.4 212.3 891.6 212.3 892.8 212.4 894 212.5 880.9 227.5 882.1 250.1 896.6 263.6 893.3 269.4 885.9 271.5 880.1 268.2 876.3 266.1 873.9 262 873.9 257.6L873.9 241.9 873.9 241.6 876.5 244.2C877.3 245 878.5 245 879.3 244.2 880.1 243.4 880.1 242.2 879.3 241.4L873.3 235.4C872.5 234.6 871.3 234.6 870.5 235.4L864.4 241.4C863.6 242.1 863.5 243.4 864.2 244.2 864.9 245 866.2 245.1 867 244.4L867 244.4 867.1 244.3 870 241.4ZM902.5 243.4 898.2 259.6C885.7 246.6 886 226 898.8 213.4 905.9 215.2 912.3 219.1 917 224.8 909.8 228.8 904.6 235.5 902.5 243.4Z"></path></g></svg>
                                                </div>
                                            </div>
                                            <h3 class="flip-box__layer__title">
                                                User Friendliness
                                            </h3>		
                                            <div class="flip-box__layer__description">
                                                FHE can be implemented using only a few lines of code, but the inner workings are difficult to understand.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div class="flip-card-overlay">
                                        <div class="flip-card-inner">
                                            <div class="flip-box__layer__description">
                                                FHE is not beginner-friendly, not user-friendly, and very difficult to understand if you are not a cryptographer. Yet it can be implemented with just a few lines of code and an hour of time. It starts to become difficult when the standard options are not sufficient, and a more advanced implementation is desired.
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

This article is based on a [research report] I wrote for the project "Fully Homomorphic Encryption" commissioned by [SALT Cyber Security]. You can also read this blog post (in Dutch) on their website at [https://salt-security.com/nieuws/fully-homomorphic-encryption-de-voor-en-nadelen/](https://salt-security.com/nieuws/fully-homomorphic-encryption-de-voor-en-nadelen/).
{:.note title="Comment"}

<!-- Links -->

[fully homomorphic encryption]: /fhe

[research report]: /assets/blog/2021-05-04-fully-homomorphic-encryption-what-and-why/Onderzoeksrapport_Thomas van den Nieuwenhoff_S1124775_V1.0_Redacted.pdf
[SALT Cyber Security]: https://salt-security.com/

<!-- Images -->

[fheprocon]: /assets/blog/2021-11-14-fully-homomorphic-encryption-pro-con/fheprocon.svg
