import { Post } from '../types';

export const posts: Post[] = [
  {
    title: 'Polar Bears, Coffee and Cardistry',
    date: 'Mar 01, 2026',
    slug: 'three-things',
    body: '',
    richHtml: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Three Things That Are Mine</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');
  :root {
    --bg: #0e1117; --surface: #161b24; --text: #e8ddd0; --muted: #8a7f74;
    --white: #f4ede4; --ice: #a8c8d8; --coffee: #c4854a; --card: #d4b896;
    --glow-ice: rgba(168,200,216,0.12); --glow-coffee: rgba(196,133,74,0.12);
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background-color: var(--bg); color: var(--text);
    font-family: 'Lora', Georgia, serif; font-size: 1.125rem;
    line-height: 1.9; overflow-x: hidden;
  }
  body::before {
    content: ''; position: fixed; inset: 0;
    background-image:
      radial-gradient(ellipse 80% 50% at 50% -10%, rgba(168,200,216,0.07) 0%, transparent 60%),
      url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    background-size: cover, 256px; pointer-events: none; z-index: 0;
  }
  .page { position: relative; z-index: 1; max-width: 700px; margin: 0 auto; padding: 0 2rem; }
  .hero { padding: 5rem 0 5rem; animation: rise 1.4s cubic-bezier(0.22,1,0.36,1) both; }
  .hero-eyebrow { display: inline-block; font-size: 0.7rem; letter-spacing: 0.35em; text-transform: uppercase; color: var(--ice); margin-bottom: 2rem; opacity: 0.8; }
  h1 { font-family: 'DM Serif Display', Georgia, serif; font-size: clamp(3rem,8vw,5.5rem); font-weight: 400; line-height: 1.05; color: var(--white); margin-bottom: 2rem; }
  h1 em { font-style: italic; color: var(--ice); }
  .hero-sub { color: var(--muted); font-style: italic; font-size: 1.05rem; max-width: 420px; }
  .section { padding: 4.5rem 0; border-top: 1px solid rgba(255,255,255,0.06); animation: rise 1s ease both; }
  .section-label { display: flex; align-items: center; gap: 1rem; margin-bottom: 2.5rem; }
  .section-num { font-family: 'DM Serif Display', serif; font-size: 4rem; line-height: 1; opacity: 0.08; color: var(--white); user-select: none; }
  .section-title { font-family: 'DM Serif Display', serif; font-size: 1.8rem; font-weight: 400; line-height: 1.2; }
  .section-title.ice { color: var(--ice); }
  .section-title.coffee { color: var(--coffee); }
  .section-title.card { color: var(--card); }
  p { margin-bottom: 1.7rem; color: var(--text); }
  p.opener::first-letter { font-family: 'DM Serif Display', serif; font-size: 4rem; line-height: 0.75; float: left; margin: 0.1em 0.12em 0 0; color: var(--white); }
  em { font-style: italic; color: rgba(232,221,208,0.85); }
  strong { font-weight: 500; color: var(--white); }
  .pull { font-family: 'DM Serif Display', serif; font-style: italic; font-size: 1.45rem; line-height: 1.5; color: var(--white); padding: 2rem 0 2rem 2rem; margin: 2.5rem 0; border-left: 2px solid; opacity: 0.9; }
  .pull.ice { border-color: var(--ice); color: var(--ice); }
  .pull.coffee { border-color: var(--coffee); color: var(--coffee); }
  .pull.card { border-color: var(--card); color: var(--card); }
  .closing { padding: 4rem 0 8rem; border-top: 1px solid rgba(255,255,255,0.06); }
  .closing h2 { font-family: 'DM Serif Display', serif; font-size: 2rem; font-weight: 400; color: var(--white); margin-bottom: 2rem; }
  .fin { margin-top: 4rem; text-align: center; font-size: 0.7rem; letter-spacing: 0.4em; text-transform: uppercase; color: var(--muted); }
  .ornament { text-align: center; color: var(--muted); font-size: 1.1rem; letter-spacing: 0.5em; margin: 1rem 0 2.5rem; opacity: 0.4; }
  @keyframes rise { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
  .section:nth-child(2) { animation-delay: 0.1s; }
  .section:nth-child(3) { animation-delay: 0.2s; }
  .section:nth-child(4) { animation-delay: 0.3s; }
  .closing { animation: rise 1s 0.35s ease both; }
  .section.s-ice { background: radial-gradient(ellipse 60% 30% at 80% 50%, var(--glow-ice), transparent); }
  .section.s-coffee { background: radial-gradient(ellipse 60% 30% at 20% 50%, var(--glow-coffee), transparent); }
</style>
</head>
<body>
<div class="page">
  <header class="hero">
    <span class="hero-eyebrow">A personal essay</span>
    <h1>Three Things<br>That Are <em>Mine</em></h1>
    <p class="hero-sub">On polar bears, the religion of coffee, and learning to talk with a deck of cards.</p>
  </header>
  <section class="section s-ice">
    <div class="section-label">
      <span class="section-num">I</span>
      <h2 class="section-title ice">The Bear</h2>
    </div>
    <p class="opener">I cannot explain, fully, why the polar bear is my animal. It arrived as these things do — not chosen, but recognized, the way you recognize a song you've somehow never heard. I must have been young, staring at a photograph or a screen, when something in me went <em>yes</em>, quietly and completely, and never went back.</p>
    <p>Maybe it's the scale of them — the sheer, unhurried enormity. A polar bear doesn't apologize for the space it takes up. It moves across ice like the ice belongs to it, which, of course, it does. There's a confidence there that isn't arrogance; it's just the deep, settled authority of a creature that knows exactly where it belongs in the world. I find that quietly extraordinary.</p>
    <div class="pull ice">"There is something in the polar bear's stillness that feels like wisdom you can't quite access through words — only through the act of watching."</div>
    <p>But I think what really holds me isn't the power — it's the <strong>aesthetic</strong>. The white of them against blue ice, the way the Arctic light hits their fur and makes it glow almost gold at the edges. They are the most visually perfect creature I have ever seen. Clean, massive, effortless. When I see a picture, I still feel that quiet <em>yes</em> in my chest, all these years later. Some things don't need to be explained. They just need to be yours.</p>
  </section>
  <section class="section s-coffee">
    <div class="section-label">
      <span class="section-num">II</span>
      <h2 class="section-title coffee">The Cup</h2>
    </div>
    <p class="opener">Coffee is not a drink for me. I want to say that plainly before anything else. It is a <em>practice</em>. A ceremony. The first thing I do every morning, before I am fully a person again, is stand in the kitchen and begin the ritual — the grind, the bloom, the slow pour — and it is in these minutes that the day actually starts. Not when the alarm went off. Now.</p>
    <p>The smell comes first, and the smell alone is nearly enough. There's something that happens when ground coffee meets hot water — a dark, roasted bloom of scent that has no real equivalent anywhere in the sensory world. It smells like <strong>beginning</strong>. It smells like a door opening. I have read that scent is the sense most tightly wired to memory and emotion, and I believe it entirely, because that smell doesn't just reach my nose — it reaches something further in.</p>
    <div class="pull coffee">"The warmth of a cup settling into both hands is one of the small, unremarkable miracles I refuse to take for granted."</div>
    <p>And then the feeling — the mug, warm, held in both hands, the heat spreading into your palms and then your wrists and then somehow your whole chest. I am not an effusive person, generally. But that first sip in a quiet morning hits something that I can only call <em>joy</em>. Not the electric kind. The settled kind. The kind that says: you are here, you have today, this is good.</p>
    <p>I love the aesthetic of it too — the deep brown, the crema swirled on top, the ceramic, the steam. I love a good coffee shop the way other people love churches: the low light, the quiet industry, the sense that everyone here has quietly agreed to be present for a moment. I always feel slightly more like myself inside one. Coffee is not what I drink. It's part of how I understand being awake.</p>
  </section>
  <section class="section">
    <div class="section-label">
      <span class="section-num">III</span>
      <h2 class="section-title card">The Deck</h2>
    </div>
    <p class="opener">I picked up cardistry about a year ago, maybe less, on a completely ordinary afternoon when I watched a video of someone doing something with a deck of cards that my brain simply refused to accept as real. The cards moved like water. Like something between physics and hallucination. I watched it four times. Then I went and bought a deck.</p>
    <p>I should say, clearly, that I am not good at it yet. I drop the cards. I lose the packet. I attempt a Sybil cut and produce something closer to a small indoor disaster. But here is the strange and genuine thing: I don't mind. The failure is oddly satisfying in its own right — each fumble tells me something specific about my hands, my grip, my timing, and there's a pleasure in that kind of close, physical self-knowledge that I wasn't expecting.</p>
    <div class="pull card">"There's something meditative about the click of the cards, the shuffle, the way your hands start to learn something before your mind catches up."</div>
    <p>Cardistry, I've come to understand, is a <em>new</em> hobby in the truest sense — not just new to me, but young as art forms go, still inventing its own vocabulary. The moves have names like <strong>The Werm</strong>, the Anaconda, the One-Handed Tornado, names that feel chosen by people who were having fun, which I suspect they were. There's a playfulness to the culture of it that I appreciate. Nobody is taking themselves too seriously. Everyone started by dropping cards.</p>
    <p>What I didn't anticipate is how well it fills a certain kind of time — the in-between moments, the thinking moments, the sitting-with-a-cup-of-coffee-and-just-existing moments. My hands do something, and my mind is freed to wander. The deck has become a fidget, a meditation, a conversation piece, and occasionally, on good days, something that looks almost like it was meant to look. I'm new to it. I plan to stay.</p>
  </section>
  <section class="closing">
    <div class="ornament">· · ·</div>
    <h2>What Ties Them Together</h2>
    <p>I have thought, idly, about what these three things share — the bear, the cup, the cards — and I think the honest answer is: they each ask me to <em>slow down</em>. The bear cannot be rushed. Coffee resists being rushed; treat it as fuel and you miss the whole point. And cardistry will punish impatience with a cascade of fifty-two cards on the floor every single time.</p>
    <p>They also each carry a particular aesthetic weight that I respond to without quite being able to articulate why. The white and blue of the Arctic. The darkness and warmth of a good cup. The crisp, geometric elegance of a well-handled deck. These things are beautiful to me in a way that feels <strong>personal</strong>, not universal — not beautiful because everyone agrees, but beautiful because something in me decided, at some point, that they were.</p>
    <p>And I think that's what it means to have a <em>thing</em>. Not just a preference or a hobby, but something that quietly shapes how you move through the world, what you reach for when the day is long, what makes you feel, without fanfare or announcement, most like yourself. The polar bear. The coffee. The cards. These are mine. I'm happy to have them.</p>
    <p class="fin">— fin —</p>
  </section>
</div>
</body>
</html>`,
  },
  {
    title: 'On the texture of slow mornings',
    date: 'Feb 24, 2026',
    slug: 'slow-mornings',
    body: `
      <p>There is a particular quality of light that only exists before 8am in winter — thin, almost silvery, the kind that makes everything look like a memory. I've been waking before my alarm lately, not out of anxiety, but out of some quiet pull toward that light.</p>
      <p>I've started keeping the phone face-down until the coffee is made. It's a small thing. But the distance between sleep and the day feels longer now, more inhabited. I take twenty minutes sitting at the kitchen table doing nothing in particular. Watching steam. Listening to the building breathe.</p>
      <p>I wonder sometimes if productivity culture has robbed us of the texture of hours. Not every hour should be optimized. Some should just be lived in, like a room you sit in because you like how it feels, not because you have somewhere to be.</p>
    `,
  },
  {
    title: 'What I think about when I think about focus',
    date: 'Feb 09, 2026',
    slug: 'on-focus',
    body: `
      <p>Focus is not the absence of distraction. I used to believe it was — that if I could just eliminate every interruption, concentration would arrive like weather. It doesn't work that way.</p>
      <p>Focus is more like a conversation you're having with a single idea. You have to be interested in it. You have to find it worth your full attention. And that interest can't be forced; it has to be cultivated, often through small rituals, through clearing space, through beginning.</p>
      <p>The hardest part of any deep work session is always the first five minutes. There's a friction to entry that feels almost physical. But once inside — once the idea has you — time softens and the question of whether you're focused stops mattering entirely.</p>
    `,
  },
  {
    title: 'Notes from a weekend without plans',
    date: 'Jan 19, 2026',
    slug: 'unplanned-weekend',
    body: `
      <p>I kept the calendar empty on purpose. No commitments, no obligations, no loose ends converted into to-dos. Just forty-eight hours with no shape.</p>
      <p>Saturday morning I walked without a destination and ended up at a bookstore I'd never been in. I bought a novel by someone I'd never heard of, based entirely on the color of the cover. I read it in a single sitting, which I haven't done in years. The book was strange and quiet and I'm still thinking about it.</p>
      <p>There's something important in unstructured time that I keep forgetting. The mind needs room to wander. Not every thought needs to be useful. Some things only surface when you're not looking for them.</p>
    `,
  },
  {
    title: "A few things I've changed my mind about",
    date: 'Jan 04, 2026',
    slug: 'changed-mind',
    body: `
      <p>I used to think that confidence came before action — that you waited until you felt ready, and then you moved. I've since learned the opposite is true almost universally. Confidence is a byproduct, not a precondition. You become capable of something by doing it imperfectly, repeatedly, until you're not.</p>
      <p>I used to think consistency meant sameness. Now I think it just means showing up, even when the quality varies, even when the mood isn't right. A rough day in the practice still counts. Probably more than a good day.</p>
      <p>I used to believe solitude was a sign of something lacking. I now think it's one of the more generative states available — not isolation, but chosen aloneness. The difference matters enormously.</p>
    `,
  },
  {
    title: 'The year I stopped explaining myself',
    date: 'Dec 29, 2025',
    slug: 'stop-explaining',
    body: `
      <p>Somewhere around mid-year I noticed I was narrating my choices to people who hadn't asked. Explaining why I'd ordered what I ordered at dinner. Justifying a creative decision no one had questioned. Preemptively defending preferences that were perfectly ordinary.</p>
      <p>I started watching for the impulse. It came from somewhere anxious — a desire to be understood before being misread, a fear of being judged for something before getting the chance to contextualize it. The explanations were armor I was putting on to defend an attack that wasn't coming.</p>
      <p>I've been practicing letting choices land without commentary. It's harder than it sounds. But there's a kind of quiet authority in simply doing something and letting it be what it is.</p>
    `,
  },
];
