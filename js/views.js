/* CONTENU des rubriques. Les blocs todo(...) sont des emplacements à compléter : remplace-les par ton contenu. */
const todo=t=>`<div class="todo"><b>À compléter</b>${t}</div>`;
const dl=r=>`<dl class="dl">${r.map(([a,b])=>`<dt>${a}</dt><dd>${b}</dd>`).join("")}</dl>`;

const proj=p=>p.titre
 ?`<article><h2>${p.titre}</h2><p class="meta">${p.meta}</p>${dl(p.rows)}<h3>Comment ça fonctionne</h3><div class="feat">${p.feat.map(f=>`<div class="f"><h4>${f[0]}</h4><p>${f[1]}</p></div>`).join("")}</div><p style="margin-top:1.4em">Vidéos et code détaillé : <a href="${p.lien[1]}" target="_blank" rel="noopener">${p.lien[0]}</a></p>${todo(p.todo)}</article>`
 :p.todo?todo(p.todo):`<div class="todo"><b>BUT 2</b>${p.soon}</div>`;

const V={
apropos:()=>`<h1>À propos</h1>
<p class="lead">Je m’appelle Alexandre Antunes, j’ai 18 ans et je suis étudiant en BUT Informatique à l’IUT de Montpellier-Sète.</p>
${todo("Ajoute ta photo (portrait ou plan de travail) ici.")}
<p>Titulaire d’un baccalauréat général avec les spécialités NSI et Mathématiques, obtenu avec la mention Très Bien, j’ai développé très tôt un goût pour la résolution de problèmes techniques.</p>
<p>Curieux et autodidacte, j’aime prendre de l’avance, me documenter et poser des questions pour comprendre en profondeur plutôt que d’apprendre par cœur.</p>
<h2>Pourquoi le BUT Informatique ?</h2>
<p>Je l’ai choisi pour son équilibre entre théorie et pratique. Cette formation prépare au travail en entreprise, se concentre sur les compétences réellement utiles et aborde les enjeux actuels de l’informatique.</p>
<p>Elle me permet de mettre immédiatement en application ce que j’apprends dans des situations concrètes, ce qui correspond à ma façon d’apprendre. C’est le fruit d’une longue réflexion.</p>
<h2>La personne qui m’a marqué</h2>
<p>Mon professeur de NSI en première et terminale m’a marqué par sa pédagogie et son approche des problèmes informatiques. Il m’a fourni du travail supplémentaire pour que je continue à progresser, et il appliquait dès que possible les notions vues en cours à des situations réelles.</p>
<p>Il m’a confirmé que j’apprenais mieux par la pratique et a toujours alimenté ma curiosité avec de nombreux travaux pratiques atypiques qui m’ont mis à l’épreuve.</p>`,

projets:()=>`<h1>Projets</h1>
<p class="lead">Chaque projet suit le même format, pour que cette page reste simple à compléter au fil du BUT.</p>
${D.projets.map(proj).join("")}`,

passions:()=>`<h1>Passions</h1>
<p class="lead">Ce qui m’occupe en dehors des cours, et ce que ça m’apprend.</p>
${dl([
 ["Informatique","Un goût pour la résolution de problèmes techniques, et une vraie attirance pour l’informatique embarquée."+todo("Raconte ce qui t’y a mené : premiers projets, outils préférés, ce que tu explores hors des cours.")],
 ["Football","L’esprit d’équipe et la persévérance."+todo("Ajoute ton club, ton poste, ou une anecdote qui montre ce que le sport t’apporte.")],
 ["Ingénierie","La résolution de problèmes et les diagrammes d’exigences pour cadrer un projet."+todo("Cite un objet, un montage ou un projet qui t’a donné envie de comprendre comment ça marche.")]
])}`,

parcours:()=>`<h1>Parcours et expériences</h1>
<ol class="tl">
<li><span class="when">Lycée</span><strong>Baccalauréat général, mention Très Bien</strong><br>Spécialités NSI et Mathématiques.</li>
<li><span class="when">Date à compléter</span><strong>Deux stages dans une boutique d’informatique</strong><br>Dépannage matériel : diagnostiquer, puis résoudre.${todo("Nom de la boutique, durée, missions précises, ce que tu en as retenu.")}</li>
<li><span class="when">2026 – 2027</span><strong>BUT 1 Informatique, IUT de Montpellier-Sète</strong><br>Semestre 1 : première version de ce portfolio.${todo("Ajoute les SAÉ, les ressources et les compétences travaillées.")}</li>
<li class="next"><span class="when">2027 – 2028</span><strong>BUT 2</strong><br>À venir.${todo("Parcours choisi, nouveaux projets, stage ou alternance.")}</li>
</ol>`,

methode:()=>`<h1>Qualités et méthode de travail</h1>
${dl([
 ["En groupe","Attentif, je propose des suggestions au bon moment, je respecte les exigences et je soutiens toujours mes suggestions avec des arguments. La chatière connectée m’a fait comprendre que les projets en groupe sont faits pour moi : j’y ai été extrêmement productif et passionné. J’arrive aussi à bien comprendre les besoins du client."],
 ["En autonomie","Je me renseigne et me documente, je progresse de façon régulière et je suis une démarche structurée : identifier un problème, brainstormer, organiser mes idées, puis passer à la conception."]
])}
${todo("Ajoute un exemple concret d’une situation où cette méthode a fonctionné.")}`,

contact:()=>`<h1>Contact</h1>
<p class="lead">Une question, un projet, une idée ? Écris-moi.</p>
${dl([
 ["Courriel",`<a href="mailto:alexandre.antunes@etu.umontpellier.fr">alexandre.antunes@etu.umontpellier.fr</a>`],
 ["GitHub",`<a href="https://github.com/reachsss" target="_blank" rel="noopener">github.com/reachsss</a>`],
 ["Ville","Montpellier"]
])}
${todo("Ajoute ton profil LinkedIn et un lien pour télécharger ton CV.")}`
};
