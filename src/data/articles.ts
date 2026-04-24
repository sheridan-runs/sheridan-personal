export interface Article {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  publishDate: string;
  ogImage?: string; // Optional. Falls back to /social-preview.jpg if not set.
  category: "Software" | "Design" | "Finance" | "Running & Training" | "Strategy";
  content: string; // HTML string
}

export const articles: Article[] = [
  // --- ARTICLE 1: AI STACK (Backdated to create cadence) ---
  {
    slug: "building-ai-apps-gemini-vercel",
    title: "How I build apps using Gemini, GitHub & Vercel",
    seoTitle: "The AI Stack: Building SaaS with Gemini & Vercel | Sheridan Jamieson",
    description: "Stop coding from scratch. A guide to the 'AI Stack' workflow that helps people ship production-ready apps in 24 hours using Gemini Pro.",
    publishDate: "2026-01-12",
    category: "Software",
    content: `
      <p class="text-xl text-slate-300 leading-relaxed mb-8">
        I'm not a developer and I've got next-to-no prior experience in coding, design, or building websites. I've also just launched four websites, three of which are functional apps, in the space of a week. Here's how I ship production-ready apps in 24 hours using the AI Stack.
      </p>

      <hr class="border-slate-800 my-8" />

      <p class="mb-6">
        Up until now, if you wanted to build digital products, you had two options. Pay someone to do it for you or take the time to learn it yourself. Now there is a new option - if you have a clear vision of what you want, you can use AI to build it for you.
      </p>
      <p class="mb-8">
        Here's my workflow detailing how I use Gemini Pro, Github, and Vercel to launch beautiful websites and web apps for virtually no cost.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">The Tools</h2>
      <div class="grid gap-4 mb-10 not-prose">
        <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
          <strong class="text-emerald-400 block text-lg mb-2">1. The Brain: Gemini Pro</strong>
          <p class="text-slate-400 text-sm">It digests the entire codebase to understand the architecture, then translates my plain-language instructions into production-ready code.</p>
        </div>
        <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
          <strong class="text-emerald-400 block text-lg mb-2">2. The Vault: GitHub</strong>
          <p class="text-slate-400 text-sm">This is where the code lives. It provides "save points" (commits) so if I break something, I can just rewind time.</p>
        </div>
        <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
          <strong class="text-emerald-400 block text-lg mb-2">3. The Engine: Vercel</strong>
          <p class="text-slate-400 text-sm">It connects to GitHub. Every time I save my code, Vercel automatically updates the live website in less than 30 seconds.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-white mb-6">The Process</h2>
      <p class="mb-6">I don't write code line-by-line. I act as the <strong>Product Manager</strong>, and Gemini acts as the <strong>Senior Engineer</strong>.</p>

      <h3 class="text-xl font-semibold text-white mt-8 mb-4">Step 1: The "Zero to One" Prompt</h3>
      <p class="mb-4">Starting is the hardest part. I don't write the initial code; I ask Gemini to do it.</p>
      
      <div class="my-6 bg-slate-900/50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
        <span class="text-xs font-bold text-emerald-500 tracking-widest uppercase mb-2 block">The Prompt</span>
        <p class="italic text-slate-300">"I want to build a web app that calculates marathon splits. The website styling should be minimalist, simple and include racing themes. Please give me the code to get started. I'm not a developer so will need specific instructions. Ask questions to clarify any missing details."</p>
      </div>

      <p class="mb-6">I take that code and create the files directly in a new GitHub repository. Gemini can guide you through how to do this step by step.</p>

      <h3 class="text-xl font-semibold text-white mt-8 mb-4">Step 2: The "Context Dump"</h3>
      <p class="mb-4">Once the basic app is running, I stop guessing. For every new feature, I feed the AI my current reality. I copy the raw text of my code files from Github and paste them into Gemini with a specific instruction and an accompanying screenshot.</p>

      <div class="my-6 bg-slate-900/50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
        <span class="text-xs font-bold text-emerald-500 tracking-widest uppercase mb-2 block">The Prompt</span>
        <p class="italic text-slate-300">"Here is a screenshot of the UI. I need to add a toggle switch that changes the output from Kilometers to Miles. Please provide the FULL updated code and instructions for where to copy/paste this to."</p>
      </div>

      <h3 class="text-xl font-semibold text-white mt-8 mb-4">Step 3: "Vibe Coding" (Iteration)</h3>
      <p class="mb-4">Often, the first result works logic-wise but looks broken. I don't try to debug the styling myself. I take a screenshot of the ugly button, paste the image back into Gemini, and say:</p>

      <div class="my-6 bg-slate-900/50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
        <span class="text-xs font-bold text-emerald-500 tracking-widest uppercase mb-2 block">The Prompt</span>
        <p class="italic text-slate-300">"This toggle looks messy. Make it look like the button in this design reference image. Give me the updated code."</p>
      </div>

      <h3 class="text-xl font-semibold text-white mt-8 mb-4">Step 4: The Deploy (No Terminal Required)</h3>
      <p class="mb-4">This is the magic part. I don't use a command line.</p>
      <ol class="list-decimal pl-5 space-y-2 text-slate-300 marker:text-emerald-500 mb-8">
        <li>I go to my repository on GitHub.com.</li>
        <li>I open the file I want to change (e.g., <code>App.tsx</code>).</li>
        <li>I click the <strong>Pencil Icon (Edit)</strong>.</li>
        <li>I delete the old code, paste the new AI-generated code, and click <strong>"Commit Changes"</strong>.</li>
      </ol>
      <p class="mb-8">Vercel watches my repository. The moment I hit "Commit," Vercel wakes up, rebuilds the site, and 15 seconds later, the changes are live for the world to see.</p>

      <hr class="border-slate-800 my-10" />

      <h2 class="text-2xl font-bold text-white mb-6">Real World Results</h2>
      <p class="mb-4">Using this exact workflow, I built two tools that would have previously cost me thousands of dollars to outsource:</p>
      <ul class="space-y-4 mb-6">
        <li class="flex items-start gap-3">
          <span class="text-emerald-400 mt-1">➜</span>
          <span>
            <strong><a href="https://sprix.run" class="text-white hover:text-emerald-400 underline decoration-slate-600 underline-offset-4">Sprix.run</a>:</strong> 
            A complex marathon strategy calculator with PDF generation. Built in a weekend.
          </span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-emerald-400 mt-1">➜</span>
          <span>
            <strong><a href="https://spreadsheet.school" class="text-white hover:text-emerald-400 underline decoration-slate-600 underline-offset-4">Spreadsheet.School</a>:</strong> 
            A cheat sheet showcasing how to build the most common Google Sheets functions including a syntax checker to fix broken formulae. Built in 24 hours.
          </span>
        </li>
      </ul>
      <p class="mb-8">
        I later applied this same workflow to build a full <a href="/articles/building-a-coaching-platform-airtable-zapier-strava" class="text-emerald-400 hover:text-white underline decoration-slate-600 underline-offset-4">coaching platform</a> and a <a href="/articles/building-launching-owly-nz-debt-dashboard" class="text-emerald-400 hover:text-white underline decoration-slate-600 underline-offset-4">debt management app</a> — if you want to see the method applied to more complex problems, both builds are worth a read.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">Conclusion</h2>
      <p class="text-lg text-slate-300">
        You no longer have the excuse of "not being technical." If you can write clear instructions and think logically, you are a developer. The barrier to entry has never been lower. Start building (it might even be fun).
      </p>
    `
  },

  // --- ARTICLE 2: RUNNING JOURNEY ---
  {
    slug: "from-jogger-to-athlete-training-journey",
    title: "From Jogger to Athlete: My Training Journey",
    seoTitle: "How Purposeful Training Changed My Running | Sheridan Jamieson",
    description: "I used to run hard every day and never got faster. Here is how switching to purposeful training shaved 51 minutes off my marathon time.",
    publishDate: "2026-01-27",
    category: "Running & Training",
    content: `
      <p class="text-xl text-slate-300 leading-relaxed mb-8">
        I used to run hard all the time. I thought that was the only way to get faster. The reality? I never got faster, and it never felt easier. But when I stopped "just running" and started <strong>training with purpose</strong>, everything changed.
      </p>

      <hr class="border-slate-800 my-8" />

      <h2 class="text-2xl font-bold text-white mb-6">The "Grey Zone" Years (2019)</h2>
      <p class="mb-6">
        In 2019, while traveling across Europe, I made the impulsive decision to run the Budapest Marathon. At that point, I had never even run a half marathon.
      </p>
      <p class="mb-6">
        My "training" was practically non-existent by modern standards. Every week consisted of five runs, all run at the exact same medium-hard intensity. There was no structure, no variety - just an attempt to run slightly further than the week before. I didn't use gels. I didn't understand fueling. I bonked pretty much every single run.
      </p>
      <p class="mb-6">
        On marathon day, I ran to 30km (which was a miracle in itself) and pretty much walked the rest of the way. I crossed the finish line broken. A few months later, I picked up an injury and promptly fell out of love with running.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">The Turning Point (2021)</h2>
      <p class="mb-6">
        Fast forward to 2021. I saw a picture of myself and, frankly, I wasn't happy with what I was seeing. I had let my exercise habits slip - we had just welcomed our first baby, so I cut myself some slack - but I realized I needed to take action.
      </p>
      <p class="mb-6">
        Enter <strong>Coach Bennett and the Nike Run Club app</strong>. The guided runs voiced by Coach Bennett introduced me to the concept of <em>running properly</em>. For the first time, I learned the difference between easy runs, tempo runs, intervals, and long runs.
      </p>
      <p class="mb-6">
        My fitness platform was being rebuilt from the ground up, and for possibly the first time in my life, I was actually enjoying running.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">The Progression</h2>
      <p class="mb-6">Once I embraced purposeful training, the results started compounding.</p>

      <div class="grid gap-4 mb-10 not-prose">
        <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-2xl">📅</span>
            <strong class="text-emerald-400 text-lg">Early 2022: Palmy Marathon</strong>
          </div>
          <p class="text-slate-300">Clocked a <strong>4:09</strong>. Not the sub-4 I wanted, but a ~25-minute PB built off consistent structure.</p>
        </div>

        <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-2xl">📅</span>
            <strong class="text-emerald-400 text-lg">Late 2022: Rotorua Marathon</strong>
          </div>
          <p class="text-slate-300">Crossed in <strong>3:47</strong>. Ticking the sub-4 box was a glorious feeling. The result of chaining training blocks together.</p>
        </div>

        <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-2xl">⚡️</span>
            <strong class="text-emerald-400 text-lg">Oct 2023: Auckland Marathon</strong>
          </div>
          <p class="text-slate-300">The breakthrough: <strong>3:22:42</strong>. A well-planned peak week, fine-tuned taper, and refined fueling strategy.</p>
        </div>

        <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-2xl">🏆</span>
            <strong class="text-emerald-400 text-lg">May 2024: Palmy Return</strong>
          </div>
          <p class="text-white font-medium">Ran a <strong>3:18:39</strong>. 1st in my age grade and 51 minutes faster than my time on the same course two years prior.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-white mb-6">The Lesson (And Why I Built 'Run With')</h2>
      <p class="mb-6">
        Reflecting on that first Budapest Marathon, the ridiculous thing is that there was an aid station at 40km filled with flat Coke and lollies. I remember taking on carbs there and feeling instantly better... yet it took me another four years to truly learn the lesson of fueling!
      </p>
      <p class="mb-6">
        I realized that <strong>most runners are stuck in that 2019 phase.</strong> They are running hard, guessing their fueling, and wondering why they aren't getting faster. I wanted to bridge that gap. I wanted to take the lessons I learned - structure, fueling, and community - and make them accessible to everyone.
      </p>
      <p class="mb-6">
        The most recent proof of what purposeful training produces was a parkrun PB I turned into an <a href="/articles/18-38-parkrun-pb-interactive-race-experience" class="text-emerald-400 hover:text-white underline decoration-slate-600 underline-offset-4">interactive race experience</a> — worth a look if you want to understand what this kind of training actually feels like from the inside.
      </p>

      <div class="bg-[#D4FF00] p-8 rounded-2xl text-center my-12 transform hover:scale-[1.01] transition-transform duration-300 shadow-xl shadow-emerald-900/20">
        <h3 class="text-black font-bold text-2xl mb-4">Ready to stop guessing?</h3>
        <p class="text-black/80 text-lg mb-6 max-w-lg mx-auto">
          Run With Run Club provides the structure, the plan, and the community to take you from "jogger" to "athlete," just like I did.
        </p>
        <a href="https://runwith.club" target="_blank" class="inline-block bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-slate-800 transition-colors">
          Start your journey at Run With Run Club ↗
        </a>
      </div>

      <h2 class="text-2xl font-bold text-white mb-6">What's Next?</h2>
      <p class="text-lg text-slate-300 mb-8">
        The most exciting part is that I know I'm still in the first half of this journey. I've just signed up for my next marathon, and the goalposts are moving again. Watch this space.
      </p>
    `
  },
  
  // --- ARTICLE 3: RUN WITH RUN CLUB BRAND CASE STUDY ---
  {
    slug: "case-study-run-with-run-club-brand",
    title: "Case Study: Designing a 'Digital-First' Running Brand",
    seoTitle: "Building the Run With Run Club Brand Identity | Sheridan Jamieson",
    description: "How we built a visual identity that bridges the gap between 'jogging' and 'athletics'—treating fitness coaching like a software product.",
    publishDate: "2026-02-03", 
    category: "Design",
    content: `
      <p class="text-xl text-slate-300 leading-relaxed mb-8">
        The running industry is generally split into two visual camps: the "traditional club" aesthetic (singlets, clip art, dated) or the "elite" aesthetic (Olympians, unobtainable, perfect). When building <strong>Run With Run Club</strong>, we identified a gap for a third option.
      </p>

      <hr class="border-slate-800 my-8" />

      <p class="mb-6">
        Our target audience isn't trying to make the Olympics, but they aren't just "jogging" either. They are shift workers, tradies, and busy parents who train hard but have real lives. They didn't need a cheerleader. They needed a utility brand.
      </p>
      <p class="mb-8">
        We set out to build a brand that sat at the intersection of <strong>Strava and Streetwear</strong>. Functional, bold, and unapologetically digital.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">1. The Strategy: "Tools, Not Toys"</h2>
      <p class="mb-6">
        The core value proposition of the club is <strong>Structure</strong>. We take the guesswork out of training. Therefore, the brand identity couldn't feel loose or chaotic. It had to feel engineered.
      </p>
      
      <div class="my-8 rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
        <img src="/Hero.webp" alt="Run With Run Club Website Header" class="w-full h-auto" />
        <div class="bg-slate-900/80 p-4 text-sm text-slate-400 italic">
          The aesthetic is "Digital Utility." Clean lines, high contrast, zero fluff.
        </div>
      </div>

      <p class="mb-6">
        <strong>The Vibe:</strong> Technical, Industrial, Data-Driven, Street-Ready.<br>
        <strong>The Mission:</strong> "Stop training for a race you aren't being paid to run. Start training for life."
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">2. Visual Identity: High-Vis Utility</h2>
      <p class="mb-6">
        We avoided the standard "blue and white" club colors. Instead, we looked to technical apparel and night-running culture. We used a deep <strong>Midnight Navy</strong> base to ground the brand, making it feel substantial and modern.
      </p>

      <div class="my-8 rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
        <img src="/Colours.png" alt="Color Palette: Neon Volt and Midnight Navy" class="w-full h-auto" />
      </div>

      <p class="mb-6">
        The accent is <strong>Neon Volt (#D4FF00)</strong>. It's the color of a safety vest or a high-performance super shoe. It signals "Action" and cuts through the noise of a social media feed immediately.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">3. Typography: Industrial Function</h2>
      <p class="mb-6">
        We paired <strong>Space Grotesk</strong> (Headers) with <strong>Inter</strong> (Body).
      </p>
      <p class="mb-6">
        Space Grotesk brings the "streetwear" feel—it's bold, quirky, and feels almost brutalist. It implies that the training plans are built with precision. Inter keeps the communication clear and readable, ensuring that whether you're reading a plan on a phone or a watch, the message lands.
      </p>

      <div class="my-8 rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
        <img src="/Typography.png" alt="Typography: Space Grotesk and Inter" class="w-full h-auto" />
      </div>

      <h2 class="text-2xl font-bold text-white mb-6">4. Service Design: Real Life Rules</h2>
      <p class="mb-6">
        A brand is more than a logo; it's how you communicate. Our documents don't look like medical forms; they look like technical manuals.
      </p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="rounded-xl overflow-hidden border border-slate-700 shadow-xl">
           <img src="/Onboard.png" alt="Onboarding Guide Header" class="w-full h-auto" />
        </div>
        <div class="flex flex-col justify-center bg-slate-800/30 p-6 rounded-xl border border-slate-700">
           <p class="text-slate-300 italic mb-4">"We explicitly include the 'Niggle Rule': If you feel sharp pain... stop. It's better to miss one run than to miss three months."</p>
           <p class="text-sm text-slate-400">This sets the tone immediately: We are partners in longevity. We respect the fact that you have a job to go to tomorrow.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-white mb-6">Conclusion</h2>
      <p class="text-lg text-slate-300 mb-6">
        By treating the coaching service as a brand rather than a hobby, we attracted exactly the right kind of client: people who want results without the rah-rah nonsense. The design system acts as a filter: if you want fluff, go elsewhere. If you want a plan that works, you're in the club.
      </p>
      <p class="text-lg text-slate-300 mb-8">
        The brand system you're looking at here is applied directly inside the <a href="/articles/building-a-coaching-platform-airtable-zapier-strava" class="text-emerald-400 hover:text-white underline decoration-slate-600 underline-offset-4">coaching platform I built to manage athletes</a> — if you're curious how the visual language translates into a real product, that's the next read.
      </p>
      
      <div class="bg-slate-800 p-6 rounded-xl border-l-4 border-[#D4FF00]">
        <h4 class="text-white font-bold mb-2">See the system in action</h4>
        <p class="text-slate-400 mb-4">Check out the live site to see how the visual language works in practice.</p>
        <a href="https://runwith.club" target="_blank" class="text-[#D4FF00] hover:text-white font-medium transition-colors">Visit runwith.club &rarr;</a>
      </div>
    `
  },

  // --- ARTICLE 4: 18:38 RACE EXPERIENCE ---
  {
    slug: "18-38-parkrun-pb-interactive-race-experience",
    title: "I turned my parkrun PB into an interactive experience",
    seoTitle: "18:38 — Turning Race Data into an Interactive Story | Sheridan Jamieson",
    description: "What does a personal best actually feel like from the inside? I built an immersive scroll experience from real GPS and heart rate data to find out.",
    publishDate: "2026-03-07",
    ogImage: "https://5k.runwith.club/og-image.png",
    category: "Running & Training",
    content: `
      <p class="text-xl text-slate-300 leading-relaxed mb-8">
        On 27 February 2026, I ran 18:38 at Palmerston North parkrun. A personal best by 32 seconds. But the number alone doesn't tell you what it felt like — the way the first kilometre locked in before I'd consciously decided anything, the image that surfaced at 4km, the way the final split mirrored the first exactly. I wanted to capture that.
      </p>

      <hr class="border-slate-800 my-8" />

      <p class="mb-6">
        This race was the product of a few years of deliberate training — if you want the full story, I wrote about the <a href="/articles/from-jogger-to-athlete-training-journey" class="text-emerald-400 hover:text-white underline decoration-slate-600 underline-offset-4">journey from jogger to athlete</a> that led here.
      </p>

      <p class="mb-6">
        Numbers on Strava are a record of what happened. They're not the story. After the race I had a FIT file full of 1,119 heart rate data points and a GPS track of the exact route. I started wondering: what if you could <em>scroll through</em> a race the way you'd scroll through a story?
      </p>
      <p class="mb-8">
        The result is <a href="https://5k.runwith.club" target="_blank" class="text-emerald-400 hover:text-white underline decoration-slate-600 underline-offset-4">5k.runwith.club</a> — a single-page experience built from real race data. Here's what went into it and why I think this format matters for running coaches.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">The Data Layer</h2>
      <p class="mb-6">
        The FIT file from my Garmin Forerunner contains more than most people realise. Every second: heart rate, GPS coordinates, cadence, distance. I extracted the raw data and used it to drive everything visual on the page — the HR wave, the GPS route coloured by effort zone, the per-kilometre split cards, the live BPM counter that tracks scroll position.
      </p>
      <p class="mb-8">
        At rest, that data is a spreadsheet. Presented with scroll-driven animation and a real heartbeat audio track, it becomes something closer to re-living the thing.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">The Story Layer</h2>
      <p class="mb-6">
        Data without narrative is just noise. The structural insight from the race — that my first and last kilometre were both 3:37, a perfect symmetry — only means something when you understand what the middle kilometres felt like. The experience is built in five chapters, one per kilometre, each anchored to something specific that was happening in the race.
      </p>
      <p class="mb-6">
        The fourth kilometre section is the one I'm most proud of. The week before, I'd paced my wife Lydia through her own parkrun. At 4km I told her I was letting her go. She told me, <em>"I don't have anything else."</em> Then she dug deeper than she thought she could and finished strong. A week later, at the same point in my own race, that image surfaced. I used it.
      </p>
      <p class="mb-8">
        That's not in any Garmin metric. But it's real, and it matters. The experience tries to hold both things at once: the objective data and the subjective truth.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">The Technical Side</h2>
      <p class="mb-6">
        The whole thing is a single HTML file — no framework, no build step, no backend. The GPS route is rendered on a Canvas element, coloured segment by segment by heart rate. The heartbeat audio is generated by the Web Audio API using oscillators rather than a sound file, so the BPM actually changes as you scroll through the race. The scroll reveal animations are driven by IntersectionObserver.
      </p>

      <div class="my-6 bg-slate-900/50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
        <span class="text-xs font-bold text-emerald-500 tracking-widest uppercase mb-2 block">The Stack</span>
        <ul class="space-y-1 text-slate-300 text-sm">
          <li>→ <strong>FIT file parsing</strong> — Python to extract HR + GPS data</li>
          <li>→ <strong>Canvas API</strong> — GPS route rendered and coloured by HR zone</li>
          <li>→ <strong>Web Audio API</strong> — synthetic lub-DUB heartbeat, BPM tied to scroll</li>
          <li>→ <strong>IntersectionObserver</strong> — scroll reveals, no scroll-jacking</li>
          <li>→ <strong>Vercel + GitHub</strong> — deployed in under a minute</li>
        </ul>
      </div>

      <p class="mb-8">
        Total build time across several sessions: about two hours (with a lot of help from Claude). Cost: $0 (Vercel free tier, existing domain).
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">Why This Matters for Coaching</h2>
      <p class="mb-6">
        The experience at <a href="https://5k.runwith.club" target="_blank" class="text-emerald-400 hover:text-white underline decoration-slate-600 underline-offset-4">5k.runwith.club</a> is a proof of concept for something I think has real value in coaching: <strong>the race recap as a teaching tool</strong>.
      </p>
      <p class="mb-6">
        Most post-race analysis happens in Garmin or Strava — functional tools, but passive ones. You look at the data; the data doesn't speak back. Used carefully and in the right context, an immersive format forces you to sit with each kilometre, to connect the number on the screen to the feeling in your legs. That connection is where learning happens.
      </p>
      <p class="mb-8">
        The format is also shareable in a way a Garmin screenshot isn't. When you send someone a link and they can hear your heart beating and scroll through your race, it creates a very different kind of engagement than a split table.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">What's Next</h2>
      <p class="mb-6">
        I'm wondering whether this kind of experience could be automated for <a href="https://runwith.club" target="_blank" class="text-emerald-400 hover:text-white underline decoration-slate-600 underline-offset-4">Run With</a> athletes — upload your FIT file, get back a personalised race story. The <a href="/articles/building-a-coaching-platform-airtable-zapier-strava" class="text-emerald-400 hover:text-white underline decoration-slate-600 underline-offset-4">coaching platform I built</a> already tracks what athletes do each week; a personalised race recap would be a genuinely differentiated deliverable on top of that.
      </p>
      <p class="mb-6">
        For now, go have a scroll through the experience. Turn the sound on. See if it doesn't feel a little bit like being there.
      </p>

      <div class="bg-slate-800 p-6 rounded-xl border-l-4 border-[#e8341a] my-8">
        <h4 class="text-white font-bold mb-2">Experience the race</h4>
        <p class="text-slate-400 mb-4">Real GPS. Real heart rate. Real story. Best with sound on.</p>
        <a href="https://5k.runwith.club" target="_blank" class="text-[#e8341a] hover:text-white font-medium transition-colors">Open 5k.runwith.club →</a>
      </div>
    `
  },

  // --- ARTICLE 5: RWRC COACHING PLATFORM ---
  {
    slug: "building-a-coaching-platform-airtable-zapier-strava",
    title: "I built a real coaching platform for $0 (almost)",
    seoTitle: "Building a Running Coaching Platform with Airtable, Zapier & Strava | Sheridan Jamieson",
    description: "How I replaced a Google Sheet and a shared PDF with a real athlete management platform using Airtable, Zapier, Strava, and a custom dashboard built with Claude.",
    publishDate: "2026-03-18",
    category: "Software",
    content: `
      <p class="text-xl text-slate-300 leading-relaxed mb-8">
        Run With Run Club now has five athletes. It's not a huge number but it's enough that I can now see where processes and systems will start to break down as the number grows. I realised it was time to stop patching the system and build something proper.
      </p>

      <hr class="border-slate-800 my-8" />

      <p class="mb-6">
        In the early days of coaching, the workflow was simple enough. Each athlete got a weekly training plan sent as a WhatsApp screenshot. They'd message back with how it went. I'd log their feedback in a Google Sheet and use that to plan the following week. It worked fine at one or two athletes.
      </p>
      <p class="mb-6">
        At five, I was starting to feel the friction. Five tabs in a spreadsheet. Five separate WhatsApp conversations to cross-reference. No way to see at a glance how the week was tracking across the group. Manually typing in activity data from messages rather than having it flow in automatically.
      </p>
      <p class="mb-8">
        The system was <em>working</em> but I could see phase two coming. More athletes means the admin compounds fast, and more importantly, the athlete experience suffers when you're spending energy on process rather than coaching. So I spent an afternoon with Claude and built something that actually scales.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">What I built</h2>
      <p class="mb-6">The system has three parts that work together. I used the same <a href="/articles/building-ai-apps-gemini-vercel" class="text-emerald-400 hover:text-white underline decoration-slate-600 underline-offset-4">AI-first build workflow</a> I've applied across all my projects — if you want the method itself, that article lays it out step by step.</p>

      <div class="grid gap-4 mb-10 not-prose">
        <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
          <strong class="text-emerald-400 block text-lg mb-2">Airtable - where the data lives</strong>
          <p class="text-slate-400 text-sm">Three linked tables: Athletes, Sessions (the plan I write each week), and Activities (what athletes actually do). Instead of five spreadsheet tabs, it's one database I can filter any way I want.</p>
        </div>
        <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
          <strong class="text-emerald-400 block text-lg mb-2">Zapier - the connection</strong>
          <p class="text-slate-400 text-sm">An automation watches my Strava club and does two things when an athlete logs a run: sends me a notification and writes the activity data to Airtable. Every run lands in the database within minutes, without me doing anything.</p>
        </div>
        <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
          <strong class="text-emerald-400 block text-lg mb-2">A custom coach dashboard - the view</strong>
          <p class="text-slate-400 text-sm">A password-protected page on my website, built with Claude, that pulls live data from Airtable and shows me every athlete's week in one place.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-white mb-6">The athlete experience</h2>
      <p class="mb-6">
        The thing I'm most pleased about is that from an athlete's perspective, almost nothing has changed. They still get their plan via WhatsApp. They still message me with feedback. They still log their runs on Strava. The system change is entirely on my side.
      </p>
      <p class="mb-6">
        There are two visible improvements for athletes. The first is the welcome experience. New athletes used to get a PDF. Now they get a personalised link that opens a proper branded page covering how we work together, the coaching philosophy, and what to expect. Small thing, but it sets a more intentional tone from day dot.
      </p>
      <p class="mb-8">
        The second is the weekly plan itself. They still receive it as a WhatsApp screenshot, but instead of a green-tinted spreadsheet, it's now a clean, dark-themed table in the Run With brand. Same information, much better presentation. The <a href="/articles/case-study-run-with-run-club-brand" class="text-emerald-400 hover:text-white underline decoration-slate-600 underline-offset-4">brand system</a> was designed specifically to work in this kind of context.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">What the dashboard actually shows me</h2>
      <p class="mb-6">
        For each athlete, each week, I can see the session I prescribed alongside what they actually did. Distance, time, pace. If they moved their Sunday long run to Saturday (which happens constantly, and is the whole point of flexible coaching), the system figures that out and displays it against the right session.
      </p>
      <p class="mb-6">
        Beneath the objective numbers is their feedback, pulled in manually and displayed in italics. So a session row might show: planned 18km long run, actual 18.09km in 101 minutes at 5:33/km, followed by their note: <em>"Felt good. Pick-up at the end was difficult but manageable. Fuelling worked well."</em>
      </p>
      <p class="mb-8">
        At the top of each athlete's section is a four-week compliance percentage — what portion of their prescribed sessions they've completed over the last month. And if it's mid-week and an athlete hasn't logged anything yet, a small flag appears on their header. It's a nudge to check in. Silence sometimes means something's going on.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">The honest bits</h2>
      <p class="mb-6">Not everything went smoothly.</p>

      <div class="space-y-6 mb-10">
        <div class="bg-slate-800/30 p-5 rounded-xl border border-slate-700">
          <strong class="text-white block mb-2">New Zealand timezone.</strong>
          <p class="text-slate-400 text-sm">Runs were showing up in the wrong week. A run logged on Monday morning in NZ was appearing as the previous Sunday. Turned out to be a single line of code that was converting local time to UTC, which in NZ shifts the date back by a day. Claude eventually tracked it down after a few debugging sessions.</p>
        </div>
        <div class="bg-slate-800/30 p-5 rounded-xl border border-slate-700">
          <strong class="text-white block mb-2">Flexible day matching.</strong>
          <p class="text-slate-400 text-sm">My coaching philosophy is that training should fit around real life, athletes swap days all the time, and that's fine. The original logic assumed a run on Tuesday matched the Tuesday session. It doesn't, if the athlete moved their Wednesday session to Tuesday. We rebuilt the matching to look at the whole week and prioritise the explicitly linked session, with day matching as a fallback.</p>
        </div>
        <div class="bg-slate-800/30 p-5 rounded-xl border border-slate-700">
          <strong class="text-white block mb-2">Auto-linking athletes.</strong>
          <p class="text-slate-400 text-sm">Strava only gives Zapier a first name and last initial, no unique ID. So when a run lands in Airtable, I still need to manually link it to the correct athlete record. Takes a few seconds. At five athletes it's fine. At twenty-five, I may need to solve it differently.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-white mb-6">What it cost</h2>

      <div class="grid gap-4 mb-10 not-prose">
        <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700 flex items-center justify-between">
          <strong class="text-white">Airtable:</strong>
          <span class="text-emerald-400 font-mono">Free (for now)</span>
        </div>
        <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700 flex items-center justify-between">
          <strong class="text-white">Zapier Starter:</strong>
          <span class="text-emerald-400 font-mono">~NZ$50/month</span>
        </div>
        <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700 flex items-center justify-between">
          <strong class="text-white">Vercel (dashboard hosting):</strong>
          <span class="text-emerald-400 font-mono">Free</span>
        </div>
        <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700 flex items-center justify-between">
          <strong class="text-white">Claude (the builder):</strong>
          <span class="text-emerald-400 font-mono">Existing subscription</span>
        </div>
      </div>

      <p class="mb-8">
        The Zapier upgrade is the only new cost. Everything else runs on free tiers or tools I was already using. The dashboard itself was built entirely through conversation with Claude. No developer, no agency, no line items for build time.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">Why now, at five athletes</h2>
      <p class="mb-6">
        The honest answer is that five athletes probably didn't require this. I could have kept going with the spreadsheet for a while longer. But there's a version of Run With Run Club that serves twenty-five athletes well, and that version needs better systems and smoother processes. Building it now, while the stakes are low and the complexity is manageable, means the system is proven before it needs to carry real weight.
      </p>
      <p class="mb-8">
        It also just makes the coaching better right now. When I open the dashboard on a Thursday morning and can see at a glance that three athletes have had great weeks, one has gone quiet, and one moved their long run to Saturday, I can respond to what's actually happening rather than trying to reconstruct it from five separate WhatsApp threads.
      </p>

      <div class="bg-[#D4FF00] p-8 rounded-2xl text-center my-12 transform hover:scale-[1.01] transition-transform duration-300 shadow-xl shadow-emerald-900/20">
        <h3 class="text-black font-bold text-2xl mb-4">Interested in structured coaching?</h3>
        <p class="text-black/80 text-lg mb-6 max-w-lg mx-auto">
          Run With Run Club provides adaptive training plans managed through WhatsApp, now backed by a system that actually keeps track of everything.
        </p>
        <a href="https://runwith.club" target="_blank" class="inline-block bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-slate-800 transition-colors">
          Start your journey at Run With Run Club ↗
        </a>
      </div>
    `
  },

  // --- ARTICLE 6: BUILDING AND LAUNCHING OWLY ---
  {
    slug: "building-launching-owly-nz-debt-dashboard",
    title: "I built and launched a SaaS product in two weeks using AI",
    seoTitle: "Building Owly: A SaaS Launch Story Using AI | Sheridan Jamieson",
    description: "The honest story of how I built and launched Owly — a debt dashboard for New Zealanders — in two weeks using Claude, Lovable, and Claude Code.",
    publishDate: "2026-04-13",
    category: "Software",
    content: `
    <p class="text-xl text-slate-300 leading-relaxed mb-8">
      Most "I built X with AI" posts skip the messy bits. This one won't.
    </p>

    <p class="mb-6">
      <a href="https://owly.co.nz" target="_blank" class="text-emerald-400 hover:text-white underline decoration-slate-600 underline-offset-4">Owly</a> is a debt management dashboard for New Zealanders. It helps people see all their borrowing in one place — mortgages, credit cards, car loans, hire purchase, student loans — and build a strategy to pay it off faster. It launched twelve days after I first had the idea.
    </p>

    <hr class="border-slate-800 my-8" />

    <h2 class="text-2xl font-bold text-white mb-6">The idea</h2>
    <p class="mb-6">
      It started with a simple observation. Most Kiwis have no single place to see what they collectively owe. A mortgage with one bank, a car loan with another, a credit card they've half-forgotten about, a hire purchase on something they bought three years ago. The banks only show you their own debt. There's no portfolio view.
    </p>
    <p class="mb-6">
      Quashed solved this problem for insurance — you upload your documents, it reads the key details, and suddenly you can see everything in one place. I thought the same approach could work for loans.
    </p>
    <p class="mb-8">
      The name came quickly. Owly. A wise owl who knows what you owe. The tagline wrote itself: "Know what you owe." I bought owly.co.nz within an hour of having the idea. Owen — the hand-drawn owl mascot I sketched myself — came a few days later.
    </p>

    <h2 class="text-2xl font-bold text-white mb-6">The tools</h2>
    <p class="mb-6">
      I want to be transparent about how this was built because the honest version is more useful than the polished version. If you want the simpler version of this workflow — the zero-to-one method I use for every build — I wrote it up in <a href="/articles/building-ai-apps-gemini-vercel" class="text-emerald-400 hover:text-white underline decoration-slate-600 underline-offset-4">How I build apps using Gemini, GitHub & Vercel</a>. Owly is what happens when you apply that method to something more complex.
    </p>

    <div class="grid gap-4 mb-10 not-prose">
      <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
        <strong class="text-emerald-400 block text-lg mb-2">Claude — the thinking partner</strong>
        <p class="text-slate-400 text-sm">My primary collaborator throughout. Not just for code — for product decisions, naming, copywriting, business model, SEO strategy, and working through edge cases I hadn't considered. The brief for Lovable, the Supabase schema, the repayment strategy logic, the email templates — all of it started as a conversation.</p>
      </div>
      <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
        <strong class="text-emerald-400 block text-lg mb-2">Lovable — the initial UI</strong>
        <p class="text-slate-400 text-sm">Genuinely impressive for getting from zero to something that looks real, fast. But it has a significant lock-in problem — once you enable Lovable Cloud, you can't disconnect it. I hit this wall early and had to eject entirely, connecting the codebase directly to my own Supabase project and deploying via Vercel. Worth knowing before you start.</p>
      </div>
      <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
        <strong class="text-emerald-400 block text-lg mb-2">Claude Code — the builder</strong>
        <p class="text-slate-400 text-sm">Handled everything after the Lovable ejection. All the complex logic — the repayment simulation engine, the interest-only loan calculations, the email alert system, the shared dashboard feature, the PWA setup. Extraordinarily capable when given precise, surgical prompts. The key lesson: tell it exactly what to change and explicitly tell it what not to touch.</p>
      </div>
      <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
        <strong class="text-emerald-400 block text-lg mb-2">Gemini — the cameo</strong>
        <p class="text-slate-400 text-sm">Made an appearance when Claude Code kept breaking mobile formatting. Sometimes a second opinion from a different model is the fastest path forward. Gemini's approach of making extremely targeted, surgical CSS changes without touching any logic was the pattern that finally worked consistently.</p>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-white mb-6">What got built</h2>
    <p class="mb-6">In roughly two weeks, starting from nothing:</p>

    <p class="mb-4">A full debt dashboard supporting eight loan types including interest-only loans, revolving credit, and hire purchase with promo periods. Three repayment strategies — avalanche, snowball, cashflow — with an overpayment simulator that shows how much time and money you save by paying a little extra each fortnight. A debt-free date that updates when you activate a plan.</p>

    <p class="mb-4">An email alert system with four automated functions: refix date alerts at 90 and 30 days out, minimum payment warnings for credit cards going backwards, a quarterly portfolio digest, and a 30-day plan follow-up. All running on pg_cron, all deduplicated so users never get the same email twice.</p>

    <p class="mb-4">A shared read-only dashboard so you can send a link to your partner or financial adviser without them needing an account.</p>

    <p class="mb-4">A PWA so it installs on your homescreen like a native app. Owen on your homescreen.</p>

    <p class="mb-8">An SEO content hub with a credit card payoff calculator, a guide to debt repayment strategies for New Zealanders, and a full FAQ with structured data markup. A Supabase security audit confirming Row Level Security on every table. A GitHub Actions workflow that deploys Edge Functions automatically on every push to main.</p>

    <h2 class="text-2xl font-bold text-white mb-6">What I learned</h2>

    <div class="space-y-6 mb-10">
      <div class="bg-slate-800/30 p-5 rounded-xl border border-slate-700">
        <strong class="text-white block mb-2">Prompting is a skill.</strong>
        <p class="text-slate-400 text-sm">The quality of what AI produces is directly proportional to the quality of what you ask for. Vague briefs produce generic output. Specific, contextual, well-structured prompts produce things that actually work. I got significantly better at this over the two weeks.</p>
      </div>
      <div class="bg-slate-800/30 p-5 rounded-xl border border-slate-700">
        <strong class="text-white block mb-2">AI doesn't replace judgment — it amplifies it.</strong>
        <p class="text-slate-400 text-sm">Every significant product decision was still mine. Should revolving credit be treated like a credit card in the simulation? Is this the right data model for milestones? AI gave me options and analysis. I made the calls.</p>
      </div>
      <div class="bg-slate-800/30 p-5 rounded-xl border border-slate-700">
        <strong class="text-white block mb-2">Eject from lock-in early.</strong>
        <p class="text-slate-400 text-sm">Lovable is great for prototyping. It is not great for owning your own infrastructure. The moment I hit the Lovable Cloud wall I should have ejected immediately. Instead I spent two hours trying to work around it. Lesson learned.</p>
      </div>
      <div class="bg-slate-800/30 p-5 rounded-xl border border-slate-700">
        <strong class="text-white block mb-2">Mobile is harder than it looks.</strong>
        <p class="text-slate-400 text-sm">I had to explicitly fight for every mobile optimisation. AI tools default to building for desktop. The pattern that finally worked: extremely targeted, surgical CSS changes with explicit instructions not to touch any logic.</p>
      </div>
      <div class="bg-slate-800/30 p-5 rounded-xl border border-slate-700">
        <strong class="text-white block mb-2">The owl matters.</strong>
        <p class="text-slate-400 text-sm">Owen is a hand-drawn sketch I did in about ten minutes. He's not perfect — one eye is slightly bigger than the other. But he's mine, and he gives Owly a warmth and character that no AI-generated mascot could replicate. The thing that makes a product feel human is usually something a human actually made.</p>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-white mb-6">What's next</h2>
    <p class="mb-6">
      Owly is in friends-and-family launch now. The next sprint will add a lump sum payment simulator, interest-only support for business loans, payment-free periods for hire purchase, and a break fee calculator for people considering breaking a fixed mortgage early.
    </p>
    <p class="mb-8">
      The longer-term vision is a lead generation platform for mortgage brokers and financial advisers — the free consumer tool funds itself through referrals when users are ready to take action. I also wrote a companion piece to this one — <a href="/articles/why-a-vcfo-built-a-debt-dashboard" class="text-emerald-400 hover:text-white underline decoration-slate-600 underline-offset-4">the vCFO angle on why this tool needed to exist</a> — if you're more interested in the problem than the build.
    </p>

    <div class="bg-slate-800 p-6 rounded-xl border-l-4 border-emerald-500 my-8">
      <h4 class="text-white font-bold mb-2">Try Owly</h4>
      <p class="text-slate-400 mb-4">Free. No bank login required. Owen will be waiting.</p>
      <a href="https://owly.co.nz" target="_blank" class="text-emerald-400 hover:text-white font-medium transition-colors">Visit owly.co.nz →</a>
    </div>

    <p class="text-sm text-slate-500 italic">
      I'm transparent about my use of AI in my work. This post was drafted with Claude based on notes from the actual build process.
    </p>
  `
  },

  // --- ARTICLE 7: WHY A VCFO BUILT OWLY ---
  {
    slug: "why-a-vcfo-built-a-debt-dashboard",
    title: "Why a vCFO built a debt dashboard in his evenings",
    seoTitle: "Why a vCFO Built Owly: A NZ Debt Dashboard | Sheridan Jamieson",
    description: "I spend my days looking at business finances. Here's why I couldn't find a single tool to help New Zealanders manage their personal debt — so I built one.",
    publishDate: "2026-04-14",
    category: "Finance",
    content: `
    <p class="text-xl text-slate-300 leading-relaxed mb-8">
      I spend my days looking at numbers. Cash flow models, loan covenants, interest coverage ratios. As a virtual CFO working with New Zealand businesses, debt is something I understand at a structural level that most people never need to.
    </p>

    <p class="mb-8">
      Which made it all the more frustrating when I went looking for a simple tool to help people in my network get on top of their personal borrowing — and couldn't find one that handled how New Zealanders actually borrow.
    </p>

    <hr class="border-slate-800 my-8" />

    <h2 class="text-2xl font-bold text-white mb-6">The problem with what exists</h2>
    <p class="mb-6">
      The banks have calculators. They show you your repayments. They don't help you pay off faster — because helping you pay off faster isn't particularly good for the bank's revenue.
    </p>
    <p class="mb-6">
      Sorted.org.nz has excellent educational content, but no portfolio view. You can't plug in all your loans and see the full picture in one place.
    </p>
    <p class="mb-6">
      The closest international equivalents — Unbury.me, Undebt.it, and Debt Payoff Planner — are solid tools built for US borrowers. They handle snowball and avalanche strategies well. None of them know what a refix date is. None of them understand that New Zealand student loans are interest-free for NZ-based borrowers. None of them have hire purchase promo periods or revolving credit as a loan type. They're built for a different market, with different products, different defaults, and different norms.
    </p>
    <p class="mb-8">
      None of the tools I found had a simple toggle between Debt Avalanche and Debt Snowball strategies. None surfaced refix date alerts. None handled hire purchase promo rates or interest-only periods in a way that made sense for how Kiwis actually borrow.
    </p>

    <p class="mb-8">So I built one.</p>

    <h2 class="text-2xl font-bold text-white mb-6">The catalyst</h2>
    <p class="mb-6">
      New Zealand's cost of living has been difficult. Interest rates have bitten hard. I kept seeing people — smart, financially engaged people — carrying debt they didn't fully understand, at rates they hadn't reviewed, with no clear strategy for paying it off faster.
    </p>
    <p class="mb-6">
      As a vCFO, I've always believed visibility is the first step to control. You can't manage what you can't see. Most New Zealanders have never seen all their debt in one place, let alone a clear figure for what it costs them every single day.
    </p>
    <p class="mb-6">
      That daily interest cost figure tends to land differently than an annual number buried in a statement. Seeing "$58 a day in interest" on your screen changes how you think about the problem.
    </p>
    <p class="mb-8">
      If you're more interested in how Owly was actually built than why, I wrote the <a href="/articles/building-launching-owly-nz-debt-dashboard" class="text-emerald-400 hover:text-white underline decoration-slate-600 underline-offset-4">full technical build story</a> separately — including the messy bits.
    </p>

    <h2 class="text-2xl font-bold text-white mb-6">What Owly actually does</h2>
    <p class="mb-6">
      Owly is a free debt dashboard for New Zealanders. You add your loans manually — no bank login, no open banking, no sharing credentials with anyone. Your data stays between you and the bird.
    </p>
    <p class="mb-6">
      Once your loans are in, Owly shows you your full debt picture in one place — mortgage, credit cards, car loans, hire purchase, student loans, revolving credit, business loans. Total debt, daily interest cost, weighted average rate, monthly repayments.
    </p>
    <p class="mb-6">
      Three repayment strategies — Avalanche (highest rate first, saves the most money), Snowball (smallest balance first, builds momentum), Cashflow (highest repayment burden first, frees up cash). An overpayment simulator shows you exactly how much time and interest you save by paying a little extra each fortnight.
    </p>
    <p class="mb-6">
      A debt-free date that updates when you commit to a plan. Automated alerts when your fixed rate is coming up for refix. Warnings when a credit card's minimum payment isn't covering the monthly interest. A shared read-only dashboard so your partner or financial adviser can see the full picture without needing an account.
    </p>
    <p class="mb-8">
      And Owen. A hand-drawn owl I sketched myself who lives on every page of the app and keeps a close eye on your debt so you don't have to. The whole thing was built using the <a href="/articles/building-ai-apps-gemini-vercel" class="text-emerald-400 hover:text-white underline decoration-slate-600 underline-offset-4">AI-first build method</a> I've been refining across several projects.
    </p>

    <h2 class="text-2xl font-bold text-white mb-6">The vCFO angle</h2>
    <p class="mb-6">
      People sometimes ask why a business finance person built a personal debt tool.
    </p>
    <p class="mb-6">
      The principles are identical. In business, the first thing I do with any new client is get a complete picture of their debt structure — what they owe, to whom, at what rate, and when it matures. Most businesses don't have this clearly documented. Neither do most households.
    </p>
    <p class="mb-6">
      The strategy follows from the visibility. Once you can see everything, the right moves become clearer. Pay the expensive debt first. Get ahead of refix dates before the bank puts you on a default rate. Don't let minimum payments quietly extend your timeline by a decade.
    </p>
    <p class="mb-8">
      These aren't complex insights. They're just not visible in the tools most people have access to. Owly is an attempt to fix that.
    </p>

    <div class="bg-slate-800 p-6 rounded-xl border-l-4 border-emerald-500 my-8">
      <h4 class="text-white font-bold mb-2">Try Owly</h4>
      <p class="text-slate-400 mb-4">Free. No bank login required. Takes about five minutes to set up.</p>
      <a href="https://owly.co.nz" target="_blank" class="text-emerald-400 hover:text-white font-medium transition-colors">Visit owly.co.nz →</a>
    </div>

    <p class="text-sm text-slate-500 italic">
      Sheridan Jamieson is a vCFO at Nurture and the founder of Owly. He is transparent about his use of AI in his work and writing.
    </p>
  `
  }
];
