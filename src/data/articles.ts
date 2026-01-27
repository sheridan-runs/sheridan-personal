export interface Article {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  publishDate: string;
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
    publishDate: "2026-01-12", // Changed from Jan 25 to create a 2-week gap
    category: "Software",
    content: `
      <p class="text-xl text-slate-300 leading-relaxed mb-8">
        I’m not a developer and I’ve got next-to-no prior experience in coding, design, or building websites. I’ve also just launched four websites, three of which are functional apps, in the space of a week. Here’s how I ship production-ready apps in 24 hours using the AI Stack.
      </p>

      <hr class="border-slate-800 my-8" />

      <p class="mb-6">
        Up until now, if you wanted to build digital products, you had two options. Pay someone to do it for you or take the time to learn it yourself. Now there is a new option - if you have a clear vision of what you want, you can use AI to build it for you.
      </p>
      <p class="mb-8">
        Here’s my workflow detailing how I use Gemini Pro, Github, and Vercel to launch beautiful websites and web apps for virtually no cost.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">The Tools</h2>
      <div class="grid gap-4 mb-10 not-prose">
        <div class="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
          <strong class="text-emerald-400 block text-lg mb-2">1. The Brain: Gemini Pro</strong>
          <p class="text-slate-400 text-sm">It has a massive context window, meaning I can paste my entire codebase into it so it "knows" my project.</p>
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
        <p class="italic text-slate-300">"I want to build a web app that calculates marathon splits. The website styling should be minimalist, simple and include racing themes. Please give me the code to get started. I’m not a developer so will need specific instructions. Ask questions to clarify any missing details.”</p>
      </div>

      <p class="mb-6">I take that code and create the files directly in a new GitHub repository. Gemini can guide you through how to do this step by step.</p>

      <h3 class="text-xl font-semibold text-white mt-8 mb-4">Step 2: The "Context Dump"</h3>
      <p class="mb-4">Once the basic app is running, I stop guessing. For every new feature, I feed the AI my current reality. I copy the raw text of my code files from Github and paste them into Gemini with a specific instruction and an accompanying screenshot.</p>

      <div class="my-6 bg-slate-900/50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
        <span class="text-xs font-bold text-emerald-500 tracking-widest uppercase mb-2 block">The Prompt</span>
        <p class="italic text-slate-300">"Here is a screenshot of the UI. I need to add a toggle switch that changes the output from Kilometers to Miles. Please provide the FULL updated code and instructions for where to copy/paste this to."</p>
      </div>

      <h3 class="text-xl font-semibold text-white mt-8 mb-4">Step 3: "Vibes Coding" (Iteration)</h3>
      <p class="mb-4">Often, the first result works logic-wise but looks broken. I don't try to debug the styling myself. I take a screenshot of the ugly button, paste the image back into Gemini, and say:</p>

      <div class="my-6 bg-slate-900/50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
        <span class="text-xs font-bold text-emerald-500 tracking-widest uppercase mb-2 block">The Prompt</span>
        <p class="italic text-slate-300">"This toggle looks messy. Make it look like the button in this design reference image. Give me the updated code.”</p>
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
      <ul class="space-y-4 mb-8">
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
        My "training" was practically non-existent by modern standards. Every week consisted of five runs, all run at the exact same medium-hard intensity. There was no structure, no variety—just an attempt to run slightly further than the week before. I didn’t use gels. I didn't understand fueling. I bonked pretty much every single run.
      </p>
      <p class="mb-6">
        On marathon day, I ran to 30km (which was a miracle in itself) and pretty much walked the rest of the way. I crossed the finish line broken. A few months later, I picked up an injury and promptly fell out of love with running.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">The Turning Point (2021)</h2>
      <p class="mb-6">
        Fast forward to 2021. I saw a picture of myself and, frankly, I wasn’t happy with what I was seeing. I had let my exercise habits slip—we had just welcomed our first baby, so I cut myself some slack—but I realized I needed to take action.
      </p>
      <p class="mb-6">
        Enter <strong>Coach Bennett</strong> and the Nike Run Club app. The guided runs voiced by Coach Bennett introduced me to the concept of <em>running properly</em>. For the first time, I learned the difference between easy runs, tempo runs, intervals, and long runs.
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
          <p class="text-slate-300">The breakthrough: <strong>3:22:42</strong>. A well-planned peak week, fine-tuned taper, and strict fueling strategy.</p>
        </div>

        <div class="bg-slate-900/80 p-5 rounded-xl border-l-4 border-emerald-500">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-2xl">🏆</span>
            <strong class="text-emerald-400 text-lg">May 2024: Palmy Return</strong>
          </div>
          <p class="text-white font-medium">Ran a <strong>3:18:39</strong>. That is 1st in my age grade and 51 minutes faster than my time on the same course two years prior.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-white mb-6">The Lesson (And Why I Built 'Run With')</h2>
      <p class="mb-6">
        Reflecting on that first Budapest Marathon, the ridiculous thing is that there was an aid station at 40km filled with flat Coke and lollies. I remember taking on carbs there and feeling instantly better... yet it took me another four years to truly learn the lesson of fueling!
      </p>
      <p class="mb-6">
        I realized that <strong>most runners are stuck in that 2019 phase.</strong> They are running hard, guessing their fueling, and wondering why they aren't getting faster. I wanted to bridge that gap. I wanted to take the lessons I learned—structure, fueling, and community—and make them accessible to everyone.
      </p>

      <div class="bg-[#D4FF00] p-8 rounded-2xl text-center my-12 transform hover:scale-[1.01] transition-transform duration-300 shadow-xl shadow-emerald-900/20">
        <h3 class="text-black font-bold text-2xl mb-4">Ready to stop guessing?</h3>
        <p class="text-black/80 text-lg mb-6 max-w-lg mx-auto">
          Run With Run Club provides the structure, the plan, and the community to take you from "jogger" to "athlete," just like I did.
        </p>
        <a href="https://runwith.club" target="_blank" class="inline-block bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-slate-800 transition-colors">
          Start your journey at Run With ↗
        </a>
      </div>

      <h2 class="text-2xl font-bold text-white mb-6">What's Next?</h2>
      <p class="text-lg text-slate-300 mb-8">
        The most exciting part is that I know I’m still in the first half of this journey. I’ve just signed up for my next marathon, and the goalposts are moving again. Watch this space.
      </p>
    `
  }
];
