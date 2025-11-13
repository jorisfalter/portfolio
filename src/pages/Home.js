import React from "react";

function Home() {
  return (
    <div>
      Welcome to My Portfolio!{" "}
      <a
        href="https://portfolio-e3s6.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link to this page
      </a>
      .{" "}
      <a
        href="https://github.com/jorisfalter"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link to Github
      </a>
      .
      {/*for copy pasting purposes: <a href="" target="_blank" rel="noopener noreferrer"></a> */}
      <p>
        I build fun, exciting projects. I build things which spark excitement
        and energy. I build things which help people dream.
      </p>
      <h3>Tags</h3>
      <p>
        Tools:{" "}
        <i>
          Notion, Jira, Confluence, Cloudflare, Airtable, Sendgrid, Postmark,
          Convertkit, Github, Heroku, Render, Vercel, Fly.io, Make.com, ...
        </i>
      </p>
      <p>
        Tech:{" "}
        <i>Google Apps Script, Node, React, Next, EJS, MongoDB, Python,...</i>{" "}
      </p>
      <p>
        AI (and related):{" "}
        <i>
          ChatGPT API, Llama API, Replicate, Dall-e, Elevenlabs,
          Stable-Diffusion, Cursor, Claude, Langchain, Ollama, ...
        </i>{" "}
      </p>
      <p>
        Social: <i>LinkedIn, Twitter</i>
      </p>
      <h3>Projects</h3>
      <p>
        Project 1: ChatGPT wrapper in{" "}
        <a
          href="https://www.ai-juniors.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI-Juniors.
        </a>
      </p>
      <p>
        Project 2: Frontend development for{" "}
        <a
          href="https://www.reggiohome.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reggio-Home
        </a>{" "}
        (using Next).
      </p>
      <p>
        Project 3:{" "}
        <a
          href="https://aicoach-f874501ff53a.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI Coach
        </a>
        , with a Python backend.{" "}
      </p>
      <p>
        Project 4: FlightRadar API usage for{" "}
        <a
          href="https://www.wheredoesthea380fly.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          wheredoesthea380fly
        </a>
        , Node backend, MongoDB, Mapbox.
      </p>
      <p>
        Project 5: FlightAware API usage for{" "}
        <a
          href="https://www.flightsforflaneurs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          FlightsForFlaneurs
        </a>
        , Node backend, MongoDB.
      </p>
      <p>
        Project 6:{" "}
        <a
          href="https://news.ycombinator.com/item?id=40128970"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Vertical Like the Japanese
        </a>
        : in Google Apps Script.
      </p>
      <p>
        Project 7: Raspberry Pi Project which turns a light on when a specific
        bascule bridge in the Netherlands opens. Hardware in micro python +
        Small scraping part because the Dutch government didn't gave me api
        access. Then it deploys to{" "}
        <a
          href="https://bridgeopen-0fd60d885493.herokuapp.com/ledstatus"
          target="_blank"
          rel="noopener noreferrer"
        >
          a website I host on Heroku
        </a>
        , where the Raspberry gets the bridge status from. First hardware app
        I've built, looking for inspiration for follow-up projects.
      </p>
      <p>
        Project 8: Automatic check if new jobs are posted to a freelance
        platform. Sends emails with new jobs content using Postmark.{" "}
      </p>
      <p>
        Project 9: Notion tool to reread my goals, principles, marketing plans,
        project plans, ... with a Python backend.{" "}
      </p>
      <p>
        Project 10: A selection of (sometimes irritating) marketing Tools.
        Active on my{" "}
        <a
          href="https://www.jorisfalter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          personal blog
        </a>
        .
      </p>
      <ul>
        <li>A popup which appears if you stay idle on the page</li>
        <li>The tab context changing when you're on another tab</li>
        <li>...</li>
      </ul>
      <p>
        Project 11: The project I got the most attention with up to now:{" "}
        <a
          href="https://randomairport.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          RandomAirport
        </a>
        . A NodeJS backend and a React frontend. And a Notion(!) database. Uses
        the Google Maps API. High dependency on Jetphotos.{" "}
      </p>
      <p>
        Project 12:{" "}
        <a
          href="https://samedayblocker.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SameDayBlocker
        </a>
        : A Google Calendar integration in Apps Script.
      </p>
      <p>
        Project 13: Not sure if the name 'project' worthy, but I made a{" "}
        <a
          href="https://jorisfalter.github.io/qwixxdice/"
          target="_blank"
          rel="noopener noreferrer"
        >
          digital dice
        </a>{" "}
        when we didn't have a physical one.
      </p>
      <p>
        Project 14:{" "}
        <a
          href="https://expatareas-2c28a4908ab7.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ExpatAreas
        </a>
        , a map of interesting places to live (unfinished).
      </p>
      <p>
        Project 15: Copenhagen Marathon: A tool which allowed me to constantly
        track the resale platform of Copenhagen Marathon and eventually buy a
        ticket. Using Pushover App for Push Notifs, and first time using
        Cloudflare Workers, Cloudflare KV storage and Cloudflare email service.
        Way better solution compared to VisualPing.
      </p>
      <p>
        Project 16: A{" "}
        <a
          href="https://pitchdeckgenerator.fly.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pitch Deck Content Generator
        </a>{" "}
        based on the Antler program's pitchdeck template. This is an exploration
        project to check if we can go to a full-fletched pitchdeck generator.
        Built with Chatgpt API, using NodeJS. First time usage of Webflow to
        design the UI, using a{" "}
        <a
          href="https://webflow.com/templates/html/devtask-marketplace-website-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          DEVTask template
        </a>
        . First time using Fly.io.
      </p>{" "}
      <p>
        Project 17: Link Summary Chrome Extension:{" "}
        <a
          href="https://chromewebstore.google.com/detail/hover-summary/aclmlajdkcnegianablildjnelpplpbm "
          target="_blank"
          rel="noopener noreferrer"
        >
          Chrome Extension Store
        </a>{" "}
        get summaries of headlines by hovering over them.
      </p>{" "}
      <p>
        Project 18: Mini project to rebuild a{" "}
        <a
          href="https://www.rijkswaterstaat.nl/water/waterbeheer "
          target="_blank"
          rel="noopener noreferrer"
        >
          Dutch government website on water management
        </a>{" "}
        into{" "}
        <a
          href="https://waterbeheer-front-e6a87c6ea5d4.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          something a 5 year old could understand,
        </a>{" "}
        so my spouse can use it in her classroom. It will probably get outdated
        pretty soon when the Dutch government updates their original page.
      </p>{" "}
      <p>
        Project 19: Important Date Tracker:{" "}
        <a
          href="https://datetracker.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          In Production Testing now
        </a>
        . In NextJS,SqLiteCloud.io, Deployed on Vercel, Tanstack Reacttable,
        Postmark. Abandoned.
      </p>{" "}
      <p>
        Project 20: Truck Mapping{" "}
        <a
          href="https://truckrouting.fly.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          POC
        </a>
        . Fly.io, NodeJS, Google Maps API.
      </p>
      <p>
        Project 21: Scraping a FB Expat group to do trends analysis
        <a href="" target="_blank" rel="noopener noreferrer"></a>.{" "}
      </p>{" "}
      <p>
        Project 22: A{" "}
        <a
          href="https://weekendaway.fly.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          dashboard
        </a>{" "}
        with the next 10 planes landing at Schiphol. Schiphol API and
        Flightradar24 API.
      </p>{" "}
      <p>
        Project 23: An app which allows to see your{" "}
        <a
          href="https://twitter-followers.fly.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter followers
        </a>
        . Built using Fly.io, Apify, Twitter (X), Stripe, React.
      </p>
      <p>
        Project 24: An app which generates and curates{" "}
        <a
          href="https://www.aidreamhouse.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI Dreamhouses
        </a>
        . Built with Replicate, Flux, TypeScript, Next.js.
      </p>
      <p>
        Project 25:{" "}
        <a
          href="https://www.airtraveltechjobs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Air Travel Tech Jobs
        </a>{" "}
        - A platform listing interesting travel companies. Static website.
      </p>
      <p>
        Project 26: My passion for{" "}
        <a
          href="https://www.1000headlines.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Good Marketing Copy
        </a>{" "}
        in a curated list growing to 1000 headlines. Built with Next.js,
        TypeScript
      </p>
      <p>
        Project 27: A start to my{" "}
        <a
          href="https://jorisfalter.github.io/dataWorks/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Automation Agency Website
        </a>
        . Static website
      </p>
      <p>
        Project 28: A RAG application test which indexes the Berkshire Hathaway
        annual reports{" "}
        <a
          href="https://www.berkshire-bot.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Berkshire-Bot
        </a>
        . Backend in Python.
      </p>{" "}
      <p>
        Project 29: <a href="" target="_blank" rel="noopener noreferrer"></a>
        Pushup Counter (Coming Soon). Uses Supabase, Python, Waha.{" "}
      </p>{" "}
      <p>
        Project 30: <a href="" target="_blank" rel="noopener noreferrer"></a>
        Plane Above Me (Coming Soon){" "}
      </p>{" "}
      <p>
        Project 31: <a href="" target="_blank" rel="noopener noreferrer"></a>
        ...{" "}
      </p>
    </div>
  );
}

export default Home;
