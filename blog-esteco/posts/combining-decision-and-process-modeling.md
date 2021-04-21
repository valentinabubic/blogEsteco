---
author: 'Alessandro Turco'
writtenBy: 'Alessandro Turco'
authorBio: 'Alessandro Turco has a PhD in Applied Math from the International School of Advanced Studies (SISSA) of Trieste
and a Master in Management from the School of Management of Milan Polytechnic (MIP). 
He has been working for ESTECO SpA for ten years, starting as a researcher for the Numerical Method Group. He is now the 
project manager of Cardanit, the BPM solution from ESTECO.'
authorAvatar: '/images/Alessandro-Turco.png' 
layout: blog_layout.njk
title: "How combining decision and process modeling can make business analysts’ life easier"
tag: "The DMN standard"
date: '2020-04-07'
seoTitle: 'How combining decision and process modeling can make business analysts’ life easier'
seoDescription: 'Decisions are first-class objects, just like business processes or data, and should be identified, described, modeled, reviewed, and managed in business terms as part of a business architecture'
seoImage: '/assets/img/blog/DMN-elements-post.svg'
sitemap:
    changefreq: weekly
---

"Decisions are first-class objects, just like business processes or data, and should be identified, described, modeled, reviewed, and managed in business terms as part of a business architecture". Taken from the Decision Management Manifesto

Cardanit modeling capabilities now also include Decision Model and Notation (DMN) in addition to Business Process Model and Notation ([BPMN](/7-questions-bpmn)). Later this year, Cardanit editor will also support decision logic and the FEEL language included in the specification. Are you confused by all these acronyms?

In this article we are going to explain the main advantages of the approach, the basic ingredients of the standard, and how Cardanit can help you with all this.

## What is DMN and why does DMN matter?

The Decision Model and Notation (DMN) is a standard written and maintained by the OMG (Object Management Group, an international consortium promoting industry standards).

DMN combines years of expertise in Business Rules management and Decision Optimization into a modern graphical and tabular language. The Object Management Group periodically reviews the standard and the current 1.3 release defines both the appearance and the interchange format learning the lesson of BPMN.


<Image
        src="/images/DMN-elements-post.svg"
        alt="RICHIEDI SVG"
        width={500}
        height={500}
      />

**DMN consists of three parts:**

- a palette of decision modeling graphical elements to visualize dependencies and requirements;
- decision tables and other tabular expressions to specify the rules that produce an output starting from the corresponding inputs;
- a “Friendly Enough Execution Language” (FEEL) to write decision logic with a good trade-off between complexity and readability.


<br>
<Image
        src="/images/quotes-Cardanit-DMN-1.png"
        alt="Cardanit quote DMN"
        width={500}
        height={500}
        media ={40rem}
      />

Whether you want to visualize strategic decision chains and relative KPIs, optimize operational procedures, or to automate and speed up repetitive assessments, DMN is the answer.

While BPMN deployments often require IT intervention, DMN is thought to be in the hands of business users. The process should map all possible paths and BPMN helps in integrating the required systems; the decision layer is responsible for choosing the appropriate path with a set of rules and parameters that can be adjusted without disrupting the underlying process. Moreover, DMN decisions are atomic and self-contained so that they can be tested independently and the tests do not require interactions with the system.


<Image
        src="/images/quotes-Cardanit-DMN-2.png"
        alt="Cardanit quote DMN"
        width={500}
        height={500}
      />

## Should I have to model processes or decisions first?

Business analysts used to have endless discussions about which one should be considered and modeled first (and only, sometimes). This teaches at least one universal lesson: you need both. You can achieve the best of both approaches only by combining them: processes and decisions exist even if you do not model them, but you need to model both if you want to optimize them.


<Image
        src="/images/quotes-Cardanit-DMN-3.png"
        alt="Cardanit quote DMN"
        width={500}
        height={500}
        min-width={40rem} 
      />

## How can I manage complexity with DMN?

Another advantage of DMN is that, once you worked hard to model a decision and its logic, you can reuse it whenever you want in your environment. This usually leads to garbled decision trees where some useful formulas (modeled into Business Knowledge elements) are connected to many decisions, which are then connected one with another with the only requirement of acyclicity.

Does this imply that DMN is too chaotic? The answer is no. The DMN standard introduces a distinction between the overall decision model (called Decision Requirements Graph, DRG) and partial views on specific subsets (called Decision Requirements Diagram, DRD).

This allows you to create huge decision models, where you can reuse business logic freely, and at the same time it lets you draw representations focused on each key decision.

You do not even need to draw the complete DRG, because every connection you draw in a DRD is stored in the DMN model: if you connect two decisions in a diagram, then all the diagrams that visualize both must display the connection. Cardanit supports this feature of the standards and helps you maintain well-ordered models without redundancies.

## I have modeled processes and decisions, now what?

All the graphical elements drawn with BPMN and DMN have their XML transcription, together with their so-called hidden attributes (you can access them with the lateral panel in Cardanit). The XML is the interchange format that allows you to export the model into other modeling tools or automation engines.

Is automation not possible in your environment? Are you not ready for that? Cardanit offers you a way to easily support an organization that is not ready for the digital transformation but wants to start managing their processes. Because processes and decisions exist and even in the most advanced organization people are the engine. Hence, you need a user manual. Cardanit offers you a human-readable model report in PDF and DOCX formats. By means of the “description” attribute available in BPMN and DMN, you can complete the graphical representation with instructions and all the relevant information. You do not need to be a DMN expert to read the report that guides you through the decision tree.
