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
  {
    slug: "building-ai-apps-gemini-vercel",
    title: "How I build apps using Gemini, GitHub & Vercel",
    seoTitle: "The AI Stack: Building SaaS with Gemini & Vercel | Sheridan Jamieson",
    description: "Stop coding from scratch. A guide to the 'AI Stack' workflow that helps people ship production-ready apps in 24 hours using Gemini Pro.",
    publishDate: "2026-01-25",
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
      <p class="mb-4">Often, the first result works logic-wise but looks broken. I don't try to debug the CSS myself. I take a screenshot of the ugly button, paste the image back into Gemini, and say:</p>

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
  }
];
