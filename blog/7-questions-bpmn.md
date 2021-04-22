---
author: 'Alessandro Turco'
writtenBy: 'Alessandro Turco'
authorBio: 'Alessandro Turco has a PhD in Applied Math from the International School of Advanced Studies (SISSA) of Trieste 
and a Master in Management from the School of Management of Milan Polytechnic (MIP). 
He has been working for ESTECO SpA for ten years, starting as a researcher for the Numerical Method Group. He is now the 
project manager of Cardanit, the BPM solution from ESTECO.'
authorAvatar: '/images/Alessandro-Turco.png'
layout: blog_layout.njk
title: "7 questions every business analyst asks about BPMN"
tag: "The BPMN standard"
date: '2020-04-07'
seoTitle: 'BPMN modeling | Analyze processes more efficiently'
seoDescription: 'Business Process Modeling and Notation explained  in seven easy points for business analysts.'
seoImage: '/assets/img/blog/BPM-Life-cycle.png'
sitemap:
changefreq: weekly

---

1\. Why BPMN modeling?
----------------------

As you landed on this page, chances are you already know what Business Process Modeling and Notation is. In this post we focus on modeling with BPMN for two main reasons: BPMN is good for modeling and enables other steps and techniques of the BPM cycle. We’d also like to show you how working with this standard may help you analyze processes more efficiently with the use of the Cardanit editor.

2\. What’s the difference between a process and a project?
----------------------------------------------------------

Despite there are several analogies between the two of them, their difference lies in the fact that a project is one-shot endeavor with a start and an end, while a process is a cycle, and repeats itself frequently. This is the reason why processes require constant management: every improvement (less costs or more value) can be tested from the next iteration and they compound over time. Indeed, Business Process Management (BPM) is a cycle too.

3\. Which are the steps in Business Process Management?
-------------------------------------------------------

The BPM cycle is usually represented by a circle of activities. Although a circle does not have a start and an end, you may have already encountered the BPM cycle portrayed with numbered steps.

<Image
        src="/images/BPM-Life-cycle.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />

**In a few words the five steps are:**

1.  **Design:** where you identify the process and/or possible improvements.
2.  **Modeling:** the process is then drawn with a technique of your choice, however, we recommend using a BPMN editor to work on the following steps.
3.  **Execution:** somebody needs to work sooner or later.
4.  **Monitoring:** you measure the effectiveness of the process.
5.  **Optimization:** measures and insights are transformed into concrete actions for the next process iteration.

Truth is that all these activities can run in parallel and a BPM initiative can start from any of those. Moreover, it is possible to skip one or to jump across them.

The most recent techniques in process management are shortcuts through the above cycle. On one side, Process Mining, which is a way to skip modeling and exploiting the monitoring phase as much as possible. On the other, [Process Simulation](http://www.bpsim.org/), which helps you optimizing processes without executing them in the real world.

4\. What are the main BPMN elements and when should I use them?
---------------------------------------------------------------

The BPMN standard is conceptually simple, but incredibly expressive.

<Image
        src="/images/BPMN-elements.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />

**If you want to know its basics, you just need to learn what the four shapes represent:**

*   **Circles.** These are events. Something that happens without work. There are start events, end events and intermediate events like timers.
*   **Rectangles.** They are activities, atomic units of work, self-contained and well-defined.
*   **Diamonds.** Diamonds are gateways that split or join paths in your workflow.
*   **Arrows.** Also known as connections between elements. Plain arrows are sequence flows that indicate what to do next.

BPMN allows you to further specify your modeling elements by characterizing them with icons. There are a dozen of possible Activities, more than twenty Events, a few Gateways and three kinds of Arrows. All the icons are pretty intuitive and you can understand a lot about a process just looking at BPMN models.

5\. Can I use hierarchical modeling?
------------------------------------

Here’s another BPMN powerful feature: hierarchical modeling. The standard allows you to show the big picture in a compact canvas and specify the details in sub-models drawn elsewhere. If your process is really complex, you can iterate this procedure as much as you wish. There is no limit. The BPMN element used for this are special Activities called Sub-Process and Call Activity. Watch this clip to learn how to use Call Activity in Cardanit.
<div class="video-container">
    <iframe width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/l-sMgTmpsa0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
</div>

6\. How can I pass my processes to another editor?
--------------------------------------------------

The graphical representation is just half of what Business Process Model and Notation can do for you. BPMN defines standardized formats to transform the drawn model into an XML file. Not only is the sequence of activities recorded in the XML file, but also the position of the elements in the canvas is well set in stone. This allows you to export the model drawn from one software and re-import it into another tool. If you’re interested in how this actually works on a bigger scale, you can watch how Cardanit performs with other tools. [This is the recording](https://www.youtube.com/watch?v=koa8IFMWlvo) of 2019 demo organized by the [Model Interchange Working Group (MIWG)](http://www.omgwiki.org/bpmn-miwg/doku.php) and the [Object Management Group (OMG)](https://www.omg.org/) where different vendors do exactly this import-export procedure.

And there’s more: the XML file also contains hidden attributes with the necessary information to integrate the model with enterprise systems and automate the process. We’d like to think this is the real reason behind the success of BPMN: the XML translation is the link between Business and IT. Thanks to BPMN, Business and IT can speak the same language and work directly on the same process model: requirements are explicit, no further translations are required, execution semantic is incorporated in the model drawing and everything is ready for automation. Process Simulation is also enabled by the XML transcription. Indeed, it is possible to add some further lines to the XML and exploit BPSim simulation capabilities, which is something we are going to talk about in other posts soon.

<Image
        src="/images/quotes-Cardanit-BPMN-mobile.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />

7\. Is modeling enough?
-----------------------

Why do you write a to-do list? Because it’s easier to do things if you see them in an ordered and structured way. The same applies to processes. A well-drawn process model is an information radiator. Everybody can understand their role, responsibilities and the value of their actions for the big picture. In Cardanit you can complement this view with a true user manual for your process. If you fill the description attribute of each element in your BPMN model, we create a docx/pdf document well-formatted with step-by-step instructions and information that can help the actors of the process to work more effectively.

Since you manage and continuously improve processes, it is important to keep track of the changes you implemented and the ones you want to enforce in the future.

Cardanit can help you keep abreast of all the variants of the same process model together and to spot easily the differences among them thanks to its peculiar feature, Version history.
