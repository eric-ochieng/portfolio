'use strict';

const projectTemplates = [
  {
    id: 'organization', number: '01', name: 'Org in Copilot', title: 'Making an organization easier to understand.',
    cardTitle: 'Org in Copilot.<br>Structure into context.', category: 'Systems + AI', filters: ['systems', 'ai'], tags: ['Sensemaking', 'Interaction design'],
    summary: 'Helping people use Copilot to understand management chains, direct reports, roles, and organizational context.',
    role: 'Design DRI (Directly Responsible Individual)', scope: 'Organization and people experiences', contribution: 'I led design for organization understanding, working through the relationship between an overview, team exploration, and individual context. My contribution centered on interaction design, navigation, and making complex information easier to browse.',
    problemTitle: 'A structure is only the beginning.',
    problem: 'An organization chart can show how people are arranged. Understanding an organization also means knowing where to start, how teams relate, and which detail matters to the task at hand. The design challenge was to support exploration without losing the bigger picture.',
    approach: 'I approached this as a context problem: establish a useful starting point, make the next level discoverable, and give people a clear route back. The story below shares that high-level reasoning through a fictional example.',
    decisions: [
      { title: 'Start with a readable overview.', body: 'Give the whole organization a clear starting point before asking someone to choose a specific team. An overview creates orientation and makes the next step more deliberate.' },
      { title: 'Keep context while going deeper.', body: 'Move between organization, team, and person with a visible path. Preserve orientation so that exploring a detail does not require starting again.' },
      { title: 'Make refinement explicit.', body: 'Use understandable filtering and visible selection states. Let people narrow a large space while keeping track of the context they are exploring.' },
      { title: 'Design the edges, too.', body: 'Treat empty results, dismissal, and keyboard navigation as part of the core journey. A useful experience needs clear recovery as well as a strong first view.' }
    ],
    tradeoff: 'An overview provides orientation but cannot carry every relationship. Progressive detail lets the starting view stay readable, while requiring careful navigation and a dependable way back.',
    demoTitle: 'Organization context, directly in Copilot.', demoText: 'Explore the management chain, direct-report results, and profile context supplied for this case study.',
    outcomeTitle: 'A clearer interaction model.',
    outcomes: [{ label: 'My contribution', text: 'Defined design direction for moving between organizational context and deeper exploration.' }, { label: 'Design coverage', text: 'Worked through navigation, refinement, empty states, and accessibility considerations.' }],
    reflection: 'The most valuable design move is often deciding what to reveal first. In a complex system, the route through information matters as much as the information itself.',
    validation: ['Can a person explain where they are after moving into a team?', 'Can they refine the view and return to the wider context?', 'Can the same path be completed with a keyboard and assistive technology?'],
    proofNote: 'Product screenshots are included with permission for this portfolio. Internal research, release plans, and performance data are omitted.',
    visualFormat: 'Approved product screenshots',
    visualNote: 'Product screenshots supplied for portfolio use. Names and interface content are shown as provided.',
    next: 'recap'
  },
  {
    id: 'recap', number: '02', name: 'People & conversation recap', title: 'Finding the thread in a busy conversation.',
    cardTitle: 'Less searching.<br>More understanding.', category: 'AI experiences', filters: ['ai', 'workflows'], tags: ['Conversation recap', 'AI control'],
    summary: 'Bringing conversation context into a people experience, with clear entry points and control over generation.',
    role: 'Design DRI, EMEA', scope: 'Conversation recap experiences', contribution: 'I owned design for conversation recap experiences, including profile entry points, inline responses, and generation controls. The work connected people context with a way to catch up on relevant conversations.',
    problemTitle: 'Getting back into the conversation.',
    problem: 'When context is spread across conversations, catching up becomes a search task. The design challenge was to make a recap accessible in the flow of a people experience and make the behavior of an AI-assisted response understandable.',
    approach: 'I focused on the moments around the summary: how someone starts, where the response appears, and what control they have while it is being generated. Those moments shape whether the experience feels understandable and dependable.',
    decisions: [
      { title: 'Meet people in context.', body: 'Make recap entry points understandable within a person-focused experience. The starting point should help explain whose context is being explored and why.' },
      { title: 'Keep the response in the flow.', body: 'Use an inline response to connect the recap to the action that requested it. Maintain a clear relationship between the prompt, the response, and the next step.' },
      { title: 'Give generation a clear exit.', body: 'Include a stop-generating action. A person should be able to interrupt an AI response instead of waiting for a process they no longer need.' },
      { title: 'Make states understandable.', body: 'A summary, an in-progress response, and unavailable context need distinct explanations. The reconstructed demo explores how those states could be communicated.' }
    ],
    tradeoff: 'A short recap helps people scan, but compression can remove nuance. The illustrative example pairs a concise summary with a path to its fictional source, so readers can examine context.',
    demoTitle: 'A recap people can inspect and extend.', demoText: 'Explore the recap, a prompted response, source interaction, and the error state supplied for this case study.',
    outcomeTitle: 'A connected recap journey.',
    outcomes: [{ label: 'My contribution', text: 'Designed the journey from a people-context entry point to an inline recap response.' }, { label: 'Interaction coverage', text: 'Included generation controls so people could stop an in-progress response.' }],
    reflection: 'An AI experience includes everything before and after the answer. The entry point, the state, and the ability to stop all contribute to how a person understands the response.',
    validation: ['Does the entry point make the scope of the recap understandable?', 'Is the generating state distinguishable from a complete response?', 'Can someone stop generation and understand what happens next?'],
    proofNote: 'Product screenshots are included as supplied for this portfolio. Internal research findings and usage metrics are omitted.',
    visualFormat: 'Product screenshots',
    visualNote: 'Product screenshots supplied for portfolio use. Names and interface content are shown as provided.',
    next: 'accessibility'
  },
  {
    id: 'accessibility', number: '03', name: 'Accessibility leadership', title: 'Leading accessibility from specification through delivery.',
    cardTitle: 'Accessibility leadership.<br>Built into delivery.', category: 'Inclusive design', filters: ['systems', 'workflows'], tags: ['Accessibility', 'Design leadership'],
    summary: 'Leading accessibility across dozens of projects, from detailed specifications to reflow and high-contrast validation.',
    role: 'Accessibility design lead', scope: 'Accessibility leadership across product experiences', contribution: 'I have led accessibility across dozens of projects. This example shows how I translated accessibility requirements into annotated specifications and validated the experience at 200% reflow and in high-contrast mode.',
    problemTitle: 'Accessibility cannot be a final review.',
    problem: 'Complex people experiences need to remain understandable and operable across assistive technologies, zoom and reflow, contrast modes, keyboard input, and different content states. Addressing those needs late creates avoidable product and engineering risk.',
    approach: 'I brought accessibility into the design process through explicit specifications, component-level behavior, and validation of critical views under demanding conditions. The example below shows that work across an organization hierarchy.',
    decisions: [
      { title: 'Specify behavior, not only appearance.', body: 'Document component roles, labels, names, focus behavior, and interaction expectations so design intent can survive implementation.' },
      { title: 'Validate reflow at 200%.', body: 'Check that hierarchy, actions, and contextual profile information remain usable when content reflows and available space is constrained.' },
      { title: 'Design for high-contrast modes.', body: 'Preserve hierarchy and state without relying on color alone, and verify borders, controls, focus, and content separation in high contrast.' },
      { title: 'Make accessibility part of delivery.', body: 'Bring accessibility decisions into design and engineering collaboration early enough to influence components, layouts, and acceptance criteria.' }
    ],
    tradeoff: 'Detailed accessibility specifications require additional design effort, but they reduce ambiguity, prevent regressions, and make inclusive behavior a shared delivery responsibility.',
    demoTitle: 'One example of accessibility leadership.', demoText: 'Review the annotated accessibility specification, 200% reflow behavior, and high-contrast validation supplied for this case study.',
    outcomeTitle: 'Accessibility made actionable.',
    outcomes: [{ label: 'Leadership', text: 'Led accessibility work across dozens of projects and helped teams translate standards into product behavior.' }, { label: 'This example', text: 'Defined accessibility annotations and validated critical organization views at 200% reflow and in high contrast.' }],
    reflection: 'Accessibility leadership is most effective when it changes how a team designs and ships, not only how a finished experience is audited.',
    validation: ['Are names, roles, states, and relationships available to assistive technology?', 'Does the experience remain understandable at 200% reflow?', 'Are controls and hierarchy distinguishable in high-contrast modes?'],
    proofNote: 'Accessibility specifications and validation screenshots are included as supplied for this portfolio.',
    visualFormat: 'Accessibility specification and validation',
    visualNote: 'This example represents one of dozens of projects where I led accessibility work.',
    next: 'sensemaking'
  },
  {
    id: 'sensemaking', number: '04', name: 'Org sensemaking', title: 'Understanding how work really gets done.',
    cardTitle: 'Org sensemaking.<br>From structure to working context.', category: 'Systems + AI', filters: ['systems', 'ai', 'workflows'], tags: ['Org sensemaking', 'AI workflows'],
    summary: 'Helping people understand project teams, collaboration patterns, and the relationships that shape the work.',
    role: 'Product design', scope: 'PeopleIQ and organization sensemaking', contribution: 'I explored an end-to-end organization sensemaking experience that connects an AI on-ramp, a co-creation workspace, organization context, and collaboration patterns.',
    problemTitle: 'The org chart does not explain the work.',
    problem: 'Formal reporting structure is only one part of how a project operates. People also need to understand who contributes, how collaborators connect, where familiarity already exists, and which working groups shape delivery.',
    approach: 'I treated sensemaking as a progressive journey: begin with the person’s question, build a shared workspace, generate a useful project view, and let people move between reporting structure and collaboration dynamics.',
    decisions: [
      { title: 'Start with the job to be done.', body: 'Use a conversational on-ramp so a person can describe the partnership, project, or team they need to understand before choosing a visualization.' },
      { title: 'Create a durable shared space.', body: 'Move from chat into a co-creation workspace where generated context, notes, and project views can live together and evolve.' },
      { title: 'Connect structure with familiarity.', body: 'Pair the formal organization view with relationship signals so people can distinguish known collaborators from useful new connections.' },
      { title: 'Reveal collaboration patterns.', body: 'Show working groups and overlapping pods to make the practical shape of the project visible beyond reporting lines.' }
    ],
    tradeoff: 'A richer view can make hidden relationships legible, but it also introduces more interpretation. The experience needs clear provenance, understandable labels, and room for people to correct the generated model.',
    demoTitle: 'From a question to a working map.', demoText: 'Follow the journey from the on-ramp and co-creation setup to organization context and collaboration pods.',
    outcomeTitle: 'A connected sensemaking concept.',
    outcomes: [{ label: 'Experience model', text: 'Connected conversational intent, a durable workspace, organization context, and collaboration dynamics.' }, { label: 'Design focus', text: 'Explored how AI-generated context can remain inspectable, editable, and useful for real project work.' }],
    reflection: 'Organization understanding becomes more useful when structure and working relationships can be examined together. The goal is not simply to draw a map, but to help someone decide where to begin.',
    validation: ['Can someone move from a broad question to a useful project view?', 'Can they distinguish formal structure from inferred collaboration patterns?', 'Can they inspect and correct the generated organization context?'],
    proofNote: 'Product concept screenshots are included as supplied for this portfolio. Names and interface content are shown as provided.',
    visualFormat: 'Product concept screenshots',
    visualNote: 'Concept screenshots supplied for portfolio use. Names and interface content are shown as provided.',
    next: 'organization'
  }
];

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const projectSlugs = {
  organization: 'organization-understanding',
  recap: 'conversation-recap',
  accessibility: 'accessibility-leadership',
  sensemaking: 'org-sensemaking'
};
const projectOrder = ['organization', 'recap', 'accessibility', 'sensemaking'];
const orderedProjectTemplates = projectOrder.map((id, index) => ({
  ...projectTemplates.find(project => project.id === id),
  number: String(index + 1).padStart(2, '0')
}));
let projects = orderedProjectTemplates;

const hasPublishedValue = value => value && !String(value).trim().startsWith('[');
const publishedValue = (value, fallback) => hasPublishedValue(value) ? escapeHtml(String(value).trim()) : fallback;

function mergePortfolioContent(content) {
  if (!content || typeof content !== 'object' || !Array.isArray(content.projects)) {
    throw new Error('Portfolio content has an invalid shape.');
  }

  projects = orderedProjectTemplates.map(template => {
    const editable = content.projects.find(project => project.slug === projectSlugs[template.id]);
    if (!editable) return template;
    const decisionTitles = String(editable.decisions || '').split('\n').map(value => value.trim()).filter(Boolean);
    const outcome = hasPublishedValue(editable.outcome) ? editable.outcome : editable.result;

    return {
      ...template,
      name: publishedValue(editable.title, template.name),
      title: publishedValue(editable.headline, template.title),
      summary: publishedValue(editable.summary, template.summary),
      role: publishedValue(editable.role, template.role),
      scope: publishedValue(editable.context, template.scope),
      contribution: publishedValue(editable.contribution, template.contribution),
      problem: publishedValue(editable.problem, template.problem),
      decisions: template.decisions.map((decision, index) => ({
        ...decision,
        title: publishedValue(decisionTitles[index], decision.title)
      })),
      outcomes: [
        { label: 'My contribution', text: publishedValue(editable.contribution, template.outcomes[0].text) },
        { label: template.outcomes[1].label, text: publishedValue(outcome, template.outcomes[1].text) }
      ],
      reflection: publishedValue(editable.result, template.reflection)
    };
  });

  const profile = content.profile;
  if (!profile || typeof profile !== 'object') return;
  const identity = document.querySelector('.identity-name');
  if (identity) identity.innerHTML = `${publishedValue(profile.name, 'Eric Ochieng')}<span>${publishedValue(profile.title, 'Product designer')}</span>`;
  const heroDescription = document.querySelector('.hero-description');
  if (heroDescription) heroDescription.innerHTML = publishedValue(profile.intro, heroDescription.innerHTML);
  const heroEyebrow = document.querySelector('.hero .eyebrow');
  if (heroEyebrow) heroEyebrow.innerHTML = `<span class="tiny-dot"></span>${publishedValue(profile.location, 'Nairobi, Kenya')} <span class="eyebrow-separator">/</span> ${publishedValue(profile.title, 'Product designer')}`;
  const aboutIntroduction = document.querySelector('.about-copy .large-copy');
  if (aboutIntroduction) aboutIntroduction.innerHTML = publishedValue(profile.bio, aboutIntroduction.innerHTML);
  const footerName = document.querySelector('.footer-name');
  if (footerName) footerName.innerHTML = `${publishedValue(profile.name, 'Eric Ochieng')}<span>${publishedValue(profile.title, 'Product designer')} · ${publishedValue(profile.location, 'Nairobi')}</span>`;
  const description = document.querySelector('meta[name="description"]');
  if (description && hasPublishedValue(profile.intro)) description.content = profile.intro;
}
const topbar = name => `<div class="mockup-topbar"><span class="window-dot"></span><span class="window-dot"></span><span class="window-dot"></span><span class="mockup-name">${name} / illustrative concept</span></div>`;

function orgMockup(interactive = false) {
  return `<div class="mockup org-mockup org-product-shot"><div class="org-shot-frame"><img src="assets/org-copilot-hierarchy.png" alt="${interactive ? 'Copilot response showing a collapsed management hierarchy' : ''}" ${interactive ? 'data-org-image' : 'aria-hidden="true"'}></div>${interactive ? '<p class="org-shot-caption" data-org-shot-caption>Management chain</p>' : ''}</div>`;
}

function sensemakingMockup(interactive = false) {
  return `<div class="mockup org-mockup org-product-shot"><div class="org-shot-frame"><img src="assets/org-sensemaking-context.png" alt="${interactive ? 'Organization sensemaking workspace showing project context and an org chart' : ''}" ${interactive ? 'data-sensemaking-image' : 'aria-hidden="true"'}></div>${interactive ? '<p class="org-shot-caption" data-sensemaking-shot-caption>Organization context</p>' : ''}</div>`;
}

function accessibilityMockup(interactive = false) {
  return `<div class="mockup org-product-shot accessibility-product-shot"><div class="org-shot-frame"><img src="assets/accessibility-spec.png" alt="${interactive ? 'Annotated accessibility specification for an organization hierarchy' : ''}" ${interactive ? 'data-accessibility-image' : 'aria-hidden="true"'}></div>${interactive ? '<p class="org-shot-caption" data-accessibility-shot-caption>Accessibility specification</p>' : ''}</div>`;
}

function recapMockup(interactive = false) {
  return `<div class="mockup org-product-shot recap-product-shot"><div class="org-shot-frame"><img src="assets/conversation-recap.png" alt="${interactive ? 'Conversation recap displayed in a person profile' : ''}" ${interactive ? 'data-recap-image' : 'aria-hidden="true"'}></div>${interactive ? '<p class="org-shot-caption" data-recap-shot-caption>Conversation recap</p>' : ''}</div>`;
}

function recapReadyContent(interactive = true) {
  const tabs = ['Summary','Decisions','Next steps'].map((t,i) => interactive ? `<button class="${i===0?'selected':''}" data-recap-tab="${i}" aria-pressed="${i===0}">${t}</button>` : `<span class="${i===0?'selected':''}">${t}</span>`).join('');
  return `<div class="recap-tabs" ${interactive?'role="group" aria-label="Explore recap content"':''}>${tabs}</div><div class="summary-lines" data-recap-summary>${recapTabContent(0)}</div><div class="recap-source">${interactive ? '<details><summary><span class="source-icon" aria-hidden="true"></span>View illustrative source <span aria-hidden="true">↗</span></summary><p>Fictional source: a team discussed simplifying an onboarding flow, agreed to prioritize the starting screen, and planned to review a prototype. No real messages are included.</p></details>' : '<span class="source-icon" aria-hidden="true"></span><span>Connected to the conversation ↗</span>'}</div>`;
}

function recapTabContent(index) {
  return [
    '<span class="summary-label">WHAT MATTERS</span><p>The team explored a simpler onboarding flow and agreed on the next design direction.</p><span class="summary-label">WHERE THINGS STAND</span><p>A prototype review is the next step.</p>',
    '<span class="summary-label">DECISION</span><p>Prioritize a clearer starting screen before expanding the rest of the flow.</p><span class="summary-label">CONTEXT</span><p>The team wants the first useful action to be easier to find.</p>',
    '<span class="summary-label">NEXT STEP</span><p>Review the onboarding prototype together.</p><span class="summary-label">FOLLOW-UP</span><p>Capture feedback and agree on the next iteration.</p>'
  ][index];
}

function meetingMockup(interactive = false) {
  return `<div class="mockup meeting-mockup">${topbar('Your workday')}<div class="meeting-body"><p class="meeting-date" data-meeting-date>UP NEXT / ILLUSTRATIVE MEETING</p><h4 class="meeting-title">Design direction review</h4><div class="meeting-details"><span data-meeting-time>10:00 — 10:30</span><span>Studio team</span></div>${interactive?'<div class="meeting-tabs" role="group" aria-label="Meeting context"><button data-meeting-mode="prepare" class="active" aria-pressed="true">Prepare</button><button data-meeting-mode="catchup" aria-pressed="false">Catch up</button></div>':''}<div class="meeting-agenda" data-meeting-agenda>${meetingContent('prepare')}</div><div class="meeting-bottom"><span class="document-chip" data-meeting-document>↗ Prototype overview</span><span class="document-chip" data-meeting-note>↗ Discussion notes</span></div></div></div>`;
}

function meetingContent(mode) {
  return mode === 'prepare' ? '<div class="agenda-label">A USEFUL STARTING POINT</div><div class="agenda-item"><span></span>Review the proposed direction</div><div class="agenda-item"><span></span>Discuss the open questions</div><div class="agenda-item"><span></span>Agree on the next step</div>' : '<div class="agenda-label">WHAT THE TEAM DISCUSSED</div><div class="agenda-item"><span></span>A simpler starting screen</div><div class="agenda-item"><span></span>The direction for the prototype</div><div class="agenda-item"><span></span>A follow-up review with the team</div>';
}

function mockup(id, interactive = false) {
  return {organization:orgMockup,recap:recapMockup,accessibility:accessibilityMockup,sensemaking:sensemakingMockup}[id](interactive);
}

function renderProjectGrid(filter = 'all') {
  const selected = projects.filter(p => filter === 'all' || p.filters.includes(filter));
  const grid = document.querySelector('#project-grid');
  grid.classList.toggle('filtered', filter !== 'all');
  grid.innerHTML = selected.map(p => `<a class="project-card ${p.id==='organization'?'featured':''}" href="#case/${p.id}" aria-label="Read case study: ${p.name}"><div class="project-media" aria-hidden="true">${mockup(p.id)}</div><div class="project-copy"><div class="project-kicker"><span>${p.number}</span> / ${p.category}</div><h3>${p.cardTitle}</h3><p>${p.summary}</p><div class="project-meta">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="project-bottom"><span>Explore the story</span><span class="arrow-circle" aria-hidden="true">↗</span></div></div></a>`).join('');
  document.querySelector('#filter-status').textContent = `${selected.length} ${selected.length===1?'project':'projects'} shown.`;
}

function renderCase(project) {
  const next = projects.find(p=>p.id===project.next);
  const id = project.id;
  const sections = ['The challenge','Design decisions','Contribution & outcome','Reflection'];
  const demoControls = id==='recap' ? '<div class="demo-controls" role="group" aria-label="Explore conversation recap screenshots"><button class="demo-control active" data-recap-shot="recap" aria-pressed="true">Recap</button><button class="demo-control" data-recap-shot="prompt" aria-pressed="false">Prompt response</button><button class="demo-control" data-recap-shot="source" aria-pressed="false">Source</button><button class="demo-control" data-recap-shot="error" aria-pressed="false">Error state</button></div>' : id==='organization' ? '<div class="demo-controls" role="group" aria-label="Explore Org in Copilot screenshots"><button class="demo-control active" data-org-shot="hierarchy" aria-pressed="true">Management chain</button><button class="demo-control" data-org-shot="reports" aria-pressed="false">Direct reports</button><button class="demo-control" data-org-shot="profile" aria-pressed="false">Profile context</button></div>' : id==='accessibility' ? '<div class="demo-controls" role="group" aria-label="Explore accessibility leadership evidence"><button class="demo-control active" data-accessibility-shot="spec" aria-pressed="true">A11y spec</button><button class="demo-control" data-accessibility-shot="reflow" aria-pressed="false">200% reflow</button><button class="demo-control" data-accessibility-shot="contrast" aria-pressed="false">High contrast</button></div>' : id==='sensemaking' ? '<div class="demo-controls" role="group" aria-label="Explore Org sensemaking screenshots"><button class="demo-control" data-sensemaking-shot="onramp" aria-pressed="false">On-ramp</button><button class="demo-control" data-sensemaking-shot="cocreate" aria-pressed="false">Co-create</button><button class="demo-control active" data-sensemaking-shot="context" aria-pressed="true">Org context</button><button class="demo-control" data-sensemaking-shot="pods" aria-pressed="false">Pods</button></div>' : '';
  const visualFormat = project.visualFormat || 'Sanitized design story<br>Reconstructed visuals';
  const visualNote = project.visualNote || 'High-level design thinking only. No confidential screens, team names, research, or metrics.';
  const visualLabel = project.visualFormat ? `${project.name} product screenshots` : `Interactive, fictional ${project.name} demonstration`;
  const demoLabel = project.visualFormat ? 'Product screenshots supplied for this portfolio.' : 'A working illustration, reconstructed for this portfolio.';
  document.querySelector('#case-view').innerHTML = `<article class="section-shell"><div class="case-header"><a class="back-link" href="#work"><span aria-hidden="true">←</span>All selected work</a></div><div class="case-intro"><div><p class="eyebrow">${project.number} / ${project.name}</p><h1 id="case-title" tabindex="-1">${project.title}</h1><p class="case-summary">${project.summary}</p></div><aside class="case-info" aria-label="Project context"><dl><dt>My role</dt><dd>${project.role}</dd></dl><dl><dt>Focus</dt><dd>${project.scope}</dd></dl><dl><dt>Story format</dt><dd>${visualFormat}</dd></dl><p class="case-safe-note">${visualNote}</p></aside></div><figure class="case-visual demo" aria-label="${visualLabel}"><div>${mockup(id,true)}<p class="sr-only" data-demo-status aria-live="polite"></p></div><figcaption class="visual-caption"><p class="eyebrow">Explore the design thinking</p><h3>${project.demoTitle}</h3><p>${project.demoText}</p>${demoControls}<p class="demo-label">${demoLabel}</p></figcaption></figure><div class="case-content"><nav class="case-nav" aria-label="Case study sections"><span>In this story</span>${sections.map((s,i)=>`<a href="#case/${id}/${['challenge','decisions','outcome','reflection'][i]}"><span>0${i+1}</span>${s}</a>`).join('')}</nav><div class="case-sections"><section class="case-section" id="story-challenge"><p class="eyebrow">01 / The challenge</p><h2>${project.problemTitle}</h2><p>${project.problem}</p><div class="contribution-box"><h3>What I owned</h3><p>${project.contribution}</p></div><p>${project.approach}</p></section><section class="case-section" id="story-decisions"><p class="eyebrow">02 / Design decisions</p><h2>Give the complexity<br><em>a useful shape.</em></h2><div class="decision-grid">${project.decisions.map((d,i)=>`<article class="decision-card"><span class="decision-number">0${i+1}</span><h3>${d.title}</h3><p>${d.body}</p></article>`).join('')}</div><div class="tradeoff"><span>The trade-off</span><p>${project.tradeoff}</p></div><details><summary>Questions I would use to evaluate this direction</summary><ul>${project.validation.map(q=>`<li>${q}</li>`).join('')}</ul></details></section><section class="case-section" id="story-outcome"><p class="eyebrow">03 / Contribution & outcome</p><h2>${project.outcomeTitle}</h2><div class="outcome-grid">${project.outcomes.map(o=>`<div class="outcome-item"><span class="fact-label">${o.label}</span><p>${o.text}</p></div>`).join('')}</div><p class="outcome-footnote">${project.proofNote}</p></section><section class="case-section" id="story-reflection"><p class="eyebrow">04 / Reflection</p><h2>What I carry forward.</h2><p>${project.reflection}</p></section></div></div><a class="next-project" href="#case/${next.id}"><div><p class="eyebrow">Next story / ${next.number}</p><h2>${next.name}</h2></div><span class="next-arrow" aria-hidden="true">↗</span></a></article>`;
  document.title = `${project.name} — Eric Ochieng`;
}

let activeCase = null;
let lastRoute = '';

function scrollToElement(element, focus = false) {
  if (!element) return;
  requestAnimationFrame(()=>{
    element.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
    if (focus) element.focus({preventScroll:true});
  });
}

function route(initial = false) {
  const hash = window.location.hash.slice(1) || 'home';
  const [kind,id,section] = hash.split('/');
  const project = kind==='case' ? projects.find(p=>p.id===id) : null;
  const homeView = document.querySelector('#home-view');
  const caseView = document.querySelector('#case-view');
  closeMenu();
  if(project) {
    const changed = activeCase !== id;
    if(changed) renderCase(project);
    homeView.hidden = true;
    caseView.hidden = false;
    activeCase = id;
    if(section && ['challenge','decisions','outcome','reflection'].includes(section)) scrollToElement(document.querySelector(`#story-${section}`));
    else if(changed || lastRoute !== hash) {
      window.scrollTo({top:0,behavior:'instant'});
      if(!initial) document.querySelector('#case-title').focus({preventScroll:true});
    }
  } else {
    const comingFromCase = activeCase !== null;
    activeCase = null;
    homeView.hidden = false;
    caseView.hidden = true;
    document.title = 'Eric Ochieng — Product Design';
    if(hash==='home') window.scrollTo({top:0,behavior:initial?'instant':'smooth'});
    else if(['work','about','approach','main'].includes(hash)) scrollToElement(document.getElementById(hash),hash==='main');
    else if(comingFromCase || initial) window.scrollTo({top:0,behavior:'instant'});
  }
  lastRoute = hash;
}

function closeMenu() {
  document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
  document.querySelector('.menu-toggle').setAttribute('aria-label','Open navigation');
  document.querySelector('#mobile-nav').hidden = true;
}

function announce(message) {
  const status = document.querySelector('[data-demo-status]');
  if(status) status.textContent = message;
}

function setOrgShot(shot) {
  const screenshots = {
    hierarchy: ['assets/org-copilot-hierarchy.png', 'Copilot response showing a management chain'],
    reports: ['assets/org-copilot-reports.png', 'Copilot response showing direct reports'],
    profile: ['assets/org-copilot-profile.png', 'Profile context opened from an organization result']
  };
  const [source, label] = screenshots[shot];
  document.querySelector('[data-org-image]').src = source;
  document.querySelector('[data-org-image]').alt = label;
  document.querySelector('[data-org-shot-caption]').textContent = label;
  document.querySelectorAll('[data-org-shot]').forEach(button => {
    const selected = button.dataset.orgShot === shot;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  announce(`${label} shown.`);
}

function setSensemakingShot(shot) {
  const screenshots = {
    onramp: ['assets/org-sensemaking-onramp.png', 'Conversational on-ramp'],
    cocreate: ['assets/org-sensemaking-cocreate.png', 'Co-creation workspace setup'],
    context: ['assets/org-sensemaking-context.png', 'Organization context and familiarity view'],
    pods: ['assets/org-sensemaking-pods.png', 'Collaboration pods and working relationships']
  };
  const [source, label] = screenshots[shot];
  document.querySelector('[data-sensemaking-image]').src = source;
  document.querySelector('[data-sensemaking-image]').alt = label;
  document.querySelector('[data-sensemaking-shot-caption]').textContent = label;
  document.querySelectorAll('[data-sensemaking-shot]').forEach(button => {
    const selected = button.dataset.sensemakingShot === shot;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  announce(`${label} shown.`);
}

function setRecapShot(shot) {
  const screenshots = {
    recap: ['assets/conversation-recap.png', 'Conversation recap'],
    prompt: ['assets/conversation-recap-prompt.png', 'Prompted response extending the recap'],
    source: ['assets/conversation-recap-source.png', 'Source interaction within the recap'],
    error: ['assets/conversation-recap-error.png', 'Conversation recap error state']
  };
  const [source, label] = screenshots[shot];
  document.querySelector('[data-recap-image]').src = source;
  document.querySelector('[data-recap-image]').alt = label;
  document.querySelector('[data-recap-shot-caption]').textContent = label;
  document.querySelectorAll('[data-recap-shot]').forEach(button => {
    const selected = button.dataset.recapShot === shot;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  announce(`${label} shown.`);
}

function setAccessibilityShot(shot) {
  const screenshots = {
    spec: ['assets/accessibility-spec.png', 'Annotated accessibility specification'],
    reflow: ['assets/accessibility-reflow.png', 'Organization experience validated at 200% reflow'],
    contrast: ['assets/accessibility-high-contrast.png', 'Organization experience validated in high-contrast mode']
  };
  const [source, label] = screenshots[shot];
  document.querySelector('[data-accessibility-image]').src = source;
  document.querySelector('[data-accessibility-image]').alt = label;
  document.querySelector('[data-accessibility-shot-caption]').textContent = label;
  document.querySelectorAll('[data-accessibility-shot]').forEach(button => {
    const selected = button.dataset.accessibilityShot === shot;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  announce(`${label} shown.`);
}

function setRecapState(state) {
  document.querySelectorAll('[data-recap-state]').forEach(b=>{const selected=b.dataset.recapState===state;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
  const content=document.querySelector('[data-recap-content]');
  if(state==='ready') content.innerHTML=recapReadyContent();
  else if(state==='generating') content.innerHTML='<div class="demo-state"><strong>Gathering the thread…</strong><p>A clear in-progress state, with a way to stop.</p><div class="loading-lines" aria-hidden="true"><span></span><span></span><span></span></div><button class="demo-control" data-recap-stop>Stop generating</button></div>';
  else content.innerHTML='<div class="demo-state"><strong>No conversation context available.</strong><p>Explain the missing context and give a useful way forward.</p><button class="demo-control" data-recap-retry>Try the ready example ↗</button></div>';
  announce(`${state==='ready'?'Ready recap':state==='generating'?'Generating recap':'Unavailable context'} state shown.`);
}

document.addEventListener('click',event=>{
  const button=event.target.closest('button');
  if(button?.classList.contains('menu-toggle')) {
    const open=button.getAttribute('aria-expanded')!=='true';
    button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close navigation':'Open navigation');
    document.querySelector('#mobile-nav').hidden=!open;
    return;
  }
  if(!event.target.closest('.site-header')) closeMenu();
  if(button?.dataset.filter) {
    document.querySelectorAll('[data-filter]').forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
    renderProjectGrid(button.dataset.filter);
  }
  if(button?.dataset.orgShot) setOrgShot(button.dataset.orgShot);
  if(button?.dataset.sensemakingShot) setSensemakingShot(button.dataset.sensemakingShot);
  if(button?.dataset.recapShot) setRecapShot(button.dataset.recapShot);
  if(button?.dataset.accessibilityShot) setAccessibilityShot(button.dataset.accessibilityShot);
  if(button?.dataset.recapState) setRecapState(button.dataset.recapState);
  if(button?.hasAttribute('data-recap-tab')) {
    document.querySelectorAll('[data-recap-tab]').forEach(b=>{const selected=b===button;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});
    document.querySelector('[data-recap-summary]').innerHTML=recapTabContent(Number(button.dataset.recapTab));
    announce(`${button.textContent} shown.`);
  }
  if(button?.hasAttribute('data-recap-stop')) {
    document.querySelector('[data-recap-content]').innerHTML='<div class="demo-state"><strong>Generation stopped.</strong><p>You’re in control. Return to a ready example to continue exploring.</p><button class="demo-control" data-recap-retry>Show ready example ↗</button></div>';
    document.querySelectorAll('[data-recap-state]').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false');});
    document.querySelector('[data-recap-retry]').focus();
    announce('Generation stopped.');
  }
  if(button?.hasAttribute('data-recap-retry')) {setRecapState('ready');document.querySelector('[data-recap-state="ready"]').focus();}
  if(button?.dataset.meetingMode) {
    const mode=button.dataset.meetingMode;
    document.querySelectorAll('[data-meeting-mode]').forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
    document.querySelector('[data-meeting-date]').textContent=mode==='prepare'?'UP NEXT / ILLUSTRATIVE MEETING':'CATCH UP / ILLUSTRATIVE MEETING';
    document.querySelector('[data-meeting-time]').textContent=mode==='prepare'?'10:00 — 10:30':'Meeting complete';
    document.querySelector('[data-meeting-agenda]').innerHTML=meetingContent(mode);
    document.querySelector('[data-meeting-document]').textContent=mode==='prepare'?'↗ Prototype overview':'↗ Meeting summary';
    document.querySelector('[data-meeting-note]').textContent=mode==='prepare'?'↗ Discussion notes':'↗ Follow-up notes';
    announce(mode==='prepare'?'Meeting preparation shown.':'Meeting catch-up shown.');
  }
  const anchor=event.target.closest('a[href^="#"]');
  if(anchor?.getAttribute('href')==='#main') {event.preventDefault();scrollToElement(document.querySelector('#main'),true);return;}
  if(anchor && anchor.hash===window.location.hash) {event.preventDefault();route();}
});
document.addEventListener('keydown',event=>{if(event.key==='Escape' && document.querySelector('.menu-toggle').getAttribute('aria-expanded')==='true'){closeMenu();document.querySelector('.menu-toggle').focus();}});
window.addEventListener('hashchange',()=>route());

async function initialize() {
  try {
    let response = await fetch('api/content', { headers: { Accept: 'application/json' } });
    if (!response.ok && window.location.hostname.endsWith('github.io')) {
      response = await fetch('data/content.json?v=20261014-ex-microsoft', { cache: 'no-store', headers: { Accept: 'application/json' } });
    }
    if (!response.ok) throw new Error(`Portfolio content request failed with status ${response.status}.`);
    mergePortfolioContent(await response.json());
  } catch (error) {
    console.error('Could not load editable portfolio content.', error);
    const note = document.querySelector('.work-note');
    if (note) note.textContent = 'Showing the built-in portfolio copy · Editable content is unavailable';
  }
  renderProjectGrid();
  route(true);
}

initialize();
