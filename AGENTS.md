# LoginX Data

## Objectif

- Préparer une première présence en ligne pour l’activité freelance sur `loginxdata.com`, en anticipation de futures missions.
- Prendre la première maquette du propriétaire, intégrée dans `public/index.html`, comme base. Valider ensemble le contenu, la langue et la présentation de l’expertise. Utiliser uniquement des références, projets et résultats confirmés.
- Traiter LinkedIn et la prospection dans un chantier séparé.

## Site et hébergement

- Garder une vitrine statique, légère, responsive et accessible en HTML et CSS. Ajouter du JavaScript selon les besoins.
- Utiliser le skill `sites:sites`, lorsqu’il est disponible, pour le design et la vérification de la vitrine. Travailler dans ce projet local.
- Prévoir un déploiement sur Cloudflare Pages avec intégration Git et `public/` comme dossier de sortie. Le site est servi sans compilation. Tester en local avec `python3 -m http.server 8000 --directory public`.

## Contact et visibilité

- Prévoir une boîte professionnelle sur `@loginxdata.com` et configurer l’authentification du domaine selon le fournisseur choisi.
- Pour le formulaire, prévoir un point d’entrée serveur, des champs limités au nécessaire, une validation côté serveur, un plafond de taille et de fréquence des soumissions et une vérification Turnstile via Siteverify avant tout envoi. Garder les secrets côté serveur et hors de Git.
- Pour le SEO et la visibilité dans les réponses génératives (GEO), privilégier un contenu factuel en HTML, une structure de titres claire, des métadonnées renseignées et une URL canonique au lancement. Ajouter des données structurées si elles décrivent le contenu visible.

[Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/) · [Turnstile](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/) · [Google Search et IA générative](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
