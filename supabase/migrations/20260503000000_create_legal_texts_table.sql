/*
  # Create Legal Texts Table for Legal Pages Management

  1. New Table
    - `legal_texts`
      - `id` (uuid, primary key) - Unique identifier
      - `key` (text, unique) - Key to identify the legal page (mentions-legales, politique-confidentialite, cgu, cgv)
      - `title` (text) - Page title
      - `content` (text) - Full HTML content of the page
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `legal_texts` table
    - Public read access (anyone can view legal texts)
    - Admin write access (authenticated users can update)

  3. Initial Data
    - Insert default legal texts for each page

  4. IMPORTANT - Permission Fix
    If you encounter "permission denied for table legal_texts" error, run these commands:
    ```sql
    GRANT ALL ON legal_texts TO authenticated;
    GRANT SELECT ON legal_texts TO anon;
    GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;
    ```
    This grants explicit permissions to the authenticated and anon roles.
*/

CREATE TABLE IF NOT EXISTS legal_texts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text NOT NULL UNIQUE,
  title text NOT NULL,
  content text NOT NULL,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE legal_texts ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can view legal texts" ON legal_texts;
DROP POLICY IF EXISTS "Authenticated users can update legal texts" ON legal_texts;
DROP POLICY IF EXISTS "Authenticated users can insert legal texts" ON legal_texts;

-- Create new policies with correct syntax
CREATE POLICY "Public read access to legal_texts"
  ON legal_texts
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can update legal texts"
  ON legal_texts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can insert legal texts"
  ON legal_texts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Insert default legal texts
INSERT INTO legal_texts (key, title, content) VALUES
(
  'mentions-legales',
  'Mentions légales',
  '<h2 class="text-2xl font-bold text-secondary-900 mb-6">Éditeur du site</h2>
  <div class="space-y-3 text-secondary-700 mb-8">
    <p><strong class="text-secondary-900">Nom :</strong> Claire-Elise</p>
    <p><strong class="text-secondary-900">Statut :</strong> Auto-entrepreneur</p>
    <p><strong class="text-secondary-900">Adresse :</strong> [Adresse à compléter]</p>
    <p><strong class="text-secondary-900">Email :</strong> contact@lisewebequine.fr</p>
    <p><strong class="text-secondary-900">SIRET :</strong> [Numéro SIRET à compléter]</p>
  </div>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Hébergement</h2>
  <div class="space-y-3 text-secondary-700 mb-8">
    <p><strong class="text-secondary-900">Hébergeur :</strong> [Nom de l''hébergeur à compléter]</p>
    <p><strong class="text-secondary-900">Adresse :</strong> [Adresse de l''hébergeur]</p>
    <p><strong class="text-secondary-900">Téléphone :</strong> [Numéro de l''hébergeur]</p>
  </div>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Propriété intellectuelle</h2>
  <p class="text-secondary-700 mb-4">
    L''ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par le droit d''auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.
  </p>
  <p class="text-secondary-700 mb-8">
    Les marques, logos et mentions cités appartiennent à leurs propriétaires respectifs.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Protection des données personnelles</h2>
  <p class="text-secondary-700 mb-4">
    Les données collectées sur ce site sont traitées conformément au Règlement Général sur la Protection des Données (RGPD). Pour plus d''informations, consultez notre <a href="/politique-confidentialite" class="text-primary-600 hover:text-primary-700 underline">Politique de confidentialité</a>.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Cookies</h2>
  <p class="text-secondary-700 mb-4">
    Ce site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer vos préférences en matière de cookies à tout moment depuis les paramètres de votre navigateur.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Conditions générales</h2>
  <p class="text-secondary-700">
    L''utilisation de ce site est régie par nos <a href="/cgu" class="text-primary-600 hover:text-primary-700 underline">Conditions générales d''utilisation</a>. En accédant à ce site, vous acceptez ces conditions sans réserve.
  </p>'
),
(
  'politique-confidentialite',
  'Politique de confidentialité',
  '<h2 class="text-2xl font-bold text-secondary-900 mb-6">Introduction</h2>
  <p class="text-secondary-700 mb-8">
    Lise Web Equine s''engage à protéger votre vie privée et à respecter la législation en vigueur, notamment le Règlement Général sur la Protection des Données (RGPD). Cette politique explique comment nous collectons, utilisons et protégeons vos données personnelles.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Données collectées</h2>
  <p class="text-secondary-700 mb-4">Nous collectons les types de données suivants :</p>
  <ul class="list-disc list-inside text-secondary-700 mb-8 space-y-2">
    <li><strong class="text-secondary-900">Données de contact :</strong> nom, prénom, adresse email, numéro de téléphone</li>
    <li><strong class="text-secondary-900">Données de navigation :</strong> adresse IP, type de navigateur, pages visitées</li>
    <li><strong class="text-secondary-900">Données de commande :</strong> informations de paiement, adresse de livraison (si applicable)</li>
    <li><strong class="text-secondary-900">Données de formulaire :</strong> informations communiquées via les formulaires de contact</li>
  </ul>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Finalités du traitement</h2>
  <p class="text-secondary-700 mb-4">Vos données sont utilisées pour :</p>
  <ul class="list-disc list-inside text-secondary-700 mb-8 space-y-2">
    <li>Répondre à vos demandes de contact</li>
    <li>Traiter vos commandes et paiements</li>
    <li>Améliorer nos services et votre expérience utilisateur</li>
    <li>Envoyer des communications commerciales (avec votre consentement)</li>
    <li>Assurer la sécurité du site</li>
  </ul>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Base légale</h2>
  <p class="text-secondary-700 mb-4">Le traitement de vos données est fondé sur :</p>
  <ul class="list-disc list-inside text-secondary-700 mb-8 space-y-2">
    <li>Votre consentement (formulaires de contact, newsletter)</li>
    <li>L''exécution d''un contrat (commandes, prestations)</li>
    <li>Les obligations légales (facturation, comptabilité)</li>
    <li>L''intérêt légitime (amélioration des services, sécurité)</li>
  </ul>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Durée de conservation</h2>
  <p class="text-secondary-700 mb-4">Vos données sont conservées pendant une durée n''excédant pas :</p>
  <ul class="list-disc list-inside text-secondary-700 mb-8 space-y-2">
    <li><strong class="text-secondary-900">3 ans</strong> pour les données de contact</li>
    <li><strong class="text-secondary-900">5 ans</strong> pour les données comptables et fiscales</li>
    <li><strong class="text-secondary-900">Jusqu''à retrait du consentement</strong> pour la newsletter</li>
  </ul>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Partage des données</h2>
  <p class="text-secondary-700 mb-4">
    Nous ne vendons pas vos données à des tiers. Elles peuvent être partagées avec :
  </p>
  <ul class="list-disc list-inside text-secondary-700 mb-8 space-y-2">
    <li>Nos prestataires techniques (hébergement, paiement, email)</li>
    <li>Les autorités compétentes sur demande judiciaire</li>
  </ul>
  <p class="text-secondary-700 mb-8">
    Tous nos prestataires sont sélectionnés avec soin et soumis à des obligations de confidentialité.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Vos droits</h2>
  <p class="text-secondary-700 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
  <ul class="list-disc list-inside text-secondary-700 mb-8 space-y-2">
    <li><strong class="text-secondary-900">Droit d''accès :</strong> connaître les données vous concernant</li>
    <li><strong class="text-secondary-900">Droit de rectification :</strong> modifier vos données inexactes</li>
    <li><strong class="text-secondary-900">Droit à l''effacement :</strong> demander la suppression de vos données</li>
    <li><strong class="text-secondary-900">Droit à la portabilité :</strong> récupérer vos données</li>
    <li><strong class="text-secondary-900">Droit d''opposition :</strong> vous opposer au traitement</li>
    <li><strong class="text-secondary-900">Droit de retrait du consentement :</strong> retirer votre consentement à tout moment</li>
  </ul>
  <p class="text-secondary-700 mb-8">
    Pour exercer ces droits, contactez-nous à : contact@lisewebequine.fr
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Cookies</h2>
  <p class="text-secondary-700 mb-4">
    Ce site utilise des cookies techniques nécessaires au bon fonctionnement du site. Vous pouvez gérer vos préférences via les paramètres de votre navigateur.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Sécurité</h2>
  <p class="text-secondary-700 mb-8">
    Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou destruction.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Modifications</h2>
  <p class="text-secondary-700">
    Cette politique peut être modifiée à tout moment. Nous vous informerons de toute modification importante par email ou via le site.
  </p>'
),
(
  'cgu',
  'Conditions générales d''utilisation',
  '<h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 1 - Objet</h2>
  <p class="text-secondary-700 mb-8">
    Les présentes Conditions Générales d''Utilisation (CGU) régissent l''utilisation du site internet Lise Web Equine. En accédant à ce site, vous acceptez sans réserve les présentes CGU.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 2 - Accès au site</h2>
  <p class="text-secondary-700 mb-4">L''accès au site est gratuit et ouvert à tout utilisateur disposant d''un accès Internet. L''utilisateur s''engage à :</p>
  <ul class="list-disc list-inside text-secondary-700 mb-8 space-y-2">
    <li>Ne pas utiliser le site à des fins illicites ou frauduleuses</li>
    <li>Ne pas perturber le bon fonctionnement du site</li>
    <li>Ne pas introduire de virus ou tout code malveillant</li>
    <li>Respecter la législation en vigueur</li>
  </ul>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 3 - Contenu du site</h2>
  <p class="text-secondary-700 mb-4">
    L''ensemble des éléments du site (textes, images, vidéos, logos, etc.) est protégé par le droit d''auteur. Toute reproduction, représentation, modification, diffusion ou exploitation, totale ou partielle, du site ou de son contenu, sans autorisation préalable, est interdite.
  </p>
  <p class="text-secondary-700 mb-8">
    L''utilisateur s''engage à ne pas reproduire, copier, vendre, exploiter ou utiliser à quelque fin que ce soit les éléments du site.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 4 - Données personnelles</h2>
  <p class="text-secondary-700 mb-4">
    Les données personnelles collectées sur le site font l''objet d''un traitement conforme au Règlement Général sur la Protection des Données (RGPD). Pour plus d''informations, consultez notre <a href="/politique-confidentialite" class="text-primary-600 hover:text-primary-700 underline">Politique de confidentialité</a>.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 5 - Propriété intellectuelle</h2>
  <p class="text-secondary-700 mb-4">
    La structure générale, ainsi que les textes, images, sons, vidéos, logos, chartes graphiques et plus généralement tous les éléments composant le site sont la propriété exclusive de Lise Web Equine ou de ses partenaires.
  </p>
  <p class="text-secondary-700 mb-8">
    Toute reproduction, totale ou partielle, de ce site ou de l''un de ses éléments, sans autorisation expresse, est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 6 - Liens hypertextes</h2>
  <p class="text-secondary-700 mb-4">
    Le site peut contenir des liens vers d''autres sites internet. Lise Web Equine ne peut être tenue responsable du contenu de ces sites tiers et décline toute responsabilité quant à leur accès ou à leur contenu.
  </p>
  <p class="text-secondary-700 mb-8">
    Tout lien hypertexte vers ce site doit faire l''objet d''une autorisation préalable de Lise Web Equine.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 7 - Responsabilité</h2>
  <p class="text-secondary-700 mb-4">
    Lise Web Equine s''efforce de fournir des informations exactes et à jour sur le site. Cependant, elle ne peut garantir l''exactitude, la complétude ou l''actualité des informations diffusées.
  </p>
  <p class="text-secondary-700 mb-4">
    Lise Web Equine décline toute responsabilité pour :
  </p>
  <ul class="list-disc list-inside text-secondary-700 mb-8 space-y-2">
    <li>Toute interruption du site</li>
    <li>Toute erreur ou inexactitude dans les informations</li>
    <li>Tout dommage résultant de l''utilisation du site</li>
    <li>Tout préjudice causé par un tiers via le site</li>
  </ul>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 8 - Cookies</h2>
  <p class="text-secondary-700 mb-4">
    Le site utilise des cookies pour améliorer l''expérience utilisateur et réaliser des statistiques de visite. L''utilisateur peut configurer son navigateur pour refuser les cookies.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 9 - Loi applicable et juridiction</h2>
  <p class="text-secondary-700 mb-8">
    Les présentes CGU sont régies par la loi française. En cas de litige, les tribunaux français seront seuls compétents.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 10 - Modification des CGU</h2>
  <p class="text-secondary-700">
    Lise Web Equine se réserve le droit de modifier les présentes CGU à tout moment. L''utilisateur est invité à les consulter régulièrement. La poursuite de l''utilisation du site après modification vaut acceptation des nouvelles CGU.
  </p>'
),
(
  'cgv',
  'Conditions générales de vente',
  '<h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 1 - Objet</h2>
  <p class="text-secondary-700 mb-8">
    Les présentes Conditions Générales de Vente (CGV) régissent la vente des services et produits proposés par Lise Web Equine. Toute commande passée sur le site implique l''acceptation sans réserve des présentes CGV.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 2 - Produits et services</h2>
  <p class="text-secondary-700 mb-4">
    Les produits et services proposés sont ceux figurant sur le site au moment de la commande. Lise Web Equine se réserve le droit de modifier à tout moment l''assortiment de produits et services.
  </p>
  <p class="text-secondary-700 mb-4">
    Les descriptions et photographies des produits et services sont présentées avec la plus grande précision possible. Cependant, des erreurs ou omissions peuvent involontairement survenir.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 3 - Tarifs</h2>
  <p class="text-secondary-700 mb-4">
    Les prix des produits et services sont indiqués en euros toutes taxes comprises (TTC). Lise Web Equine se réserve le droit de modifier ses prix à tout moment, mais le produit sera facturé sur la base du tarif en vigueur au moment de la validation de la commande.
  </p>
  <p class="text-secondary-700 mb-8">
    Les prix ne comprennent pas les frais de livraison ou de mise en service, sauf mention contraire.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 4 - Commande</h2>
  <p class="text-secondary-700 mb-4">
    Toute commande passée sur le site constitue une offre ferme d''achat. Elle est considérée comme acceptée lors de la confirmation du paiement.
  </p>
  <p class="text-secondary-700 mb-4">
    Lise Web Equine se réserve le droit de refuser ou d''annuler toute commande :
  </p>
  <ul class="list-disc list-inside text-secondary-700 mb-8 space-y-2">
    <li>En cas de non-paiement</li>
    <li>En cas d''indication inexacte du client</li>
    <li>En cas de produit ou service indisponible</li>
    <li>En cas de fraude ou de tentative de fraude</li>
  </ul>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 5 - Paiement</h2>
  <p class="text-secondary-700 mb-4">
    Le paiement est exigible immédiatement à la commande. Le paiement peut être effectué par :
  </p>
  <ul class="list-disc list-inside text-secondary-700 mb-8 space-y-2">
    <li>Carte bancaire (via Stripe)</li>
    <li>Virement bancaire</li>
    <li>Autres moyens de paiement indiqués sur le site</li>
  </ul>
  <p class="text-secondary-700 mb-8">
    Les transactions sont sécurisées. Aucune information bancaire n''est stockée sur nos serveurs.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 6 - Exécution des services</h2>
  <p class="text-secondary-700 mb-4">
    Pour les services de création de sites web (Studio), les délais d''exécution sont communiqués dans le devis ou le bon de commande. Ces délais sont indicatifs et peuvent varier en fonction des éléments fournis par le client.
  </p>
  <p class="text-secondary-700 mb-4">
    Le client s''engage à fournir tous les éléments nécessaires (textes, images, informations) dans les délais impartis. Un retard dans la fourniture de ces éléments peut entraîner un report des délais de livraison.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 7 - Livraison des produits numériques</h2>
  <p class="text-secondary-700 mb-4">
    Pour les produits numériques (modèles de sites), la livraison est effectuée par email ou via un lien de téléchargement, généralement dans les 24 heures suivant la confirmation du paiement.
  </p>
  <p class="text-secondary-700 mb-8">
    Le client est responsable de la sauvegarde des fichiers téléchargés. En cas de perte, Lise Web Equine peut fournir une nouvelle copie pendant une période de 30 jours après l''achat.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 8 - Rétractation et remboursement</h2>
  <p class="text-secondary-700 mb-4">
    Conformément au Code de la consommation, le client dispose d''un délai de 14 jours à compter de la réception du produit ou de la conclusion du contrat pour exercer son droit de rétractation.
  </p>
  <p class="text-secondary-700 mb-4">
    <strong class="text-secondary-900">Exception :</strong> Le droit de rétractation ne s''applique pas aux :
  </p>
  <ul class="list-disc list-inside text-secondary-700 mb-8 space-y-2">
    <li>Services déjà exécutés avec l''accord du client</li>
    <li>Produits numériques déjà téléchargés</li>
    <li>Services sur mesure (Studio) une fois le projet entamé</li>
  </ul>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 9 - Garanties</h2>
  <p class="text-secondary-700 mb-4">
    Lise Web Equine garantit que les produits et services fournis sont conformes à leur description et aux spécifications convenues.
  </p>
  <p class="text-secondary-700 mb-8">
    En cas de non-conformité, le client peut demander une correction ou un remboursement, selon la nature du problème.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 10 - Propriété intellectuelle</h2>
  <p class="text-secondary-700 mb-4">
    Sauf accord contraire, Lise Web Equine reste propriétaire des éléments de conception et du code source jusqu''au paiement intégral. Après paiement complet, les droits d''utilisation sont transférés au client selon les termes du contrat.
  </p>
  <p class="text-secondary-700 mb-8">
    Pour les modèles de site, le client acquiert une licence d''utilisation non exclusive. Lise Web Equine conserve la propriété intellectuelle du modèle.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 11 - Données personnelles</h2>
  <p class="text-secondary-700 mb-8">
    Les données personnelles collectées lors de la commande sont traitées conformément à notre <a href="/politique-confidentialite" class="text-primary-600 hover:text-primary-700 underline">Politique de confidentialité</a>.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 12 - Responsabilité</h2>
  <p class="text-secondary-700 mb-8">
    Lise Web Equine ne peut être tenue responsable pour les dommages indirects résultant de l''utilisation des produits ou services. Sa responsabilité est limitée au montant payé par le client.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 13 - Loi applicable et juridiction</h2>
  <p class="text-secondary-700 mb-8">
    Les présentes CGV sont régies par la loi française. En cas de litige, les tribunaux français seront seuls compétents.
  </p>

  <h2 class="text-2xl font-bold text-secondary-900 mb-6">Article 14 - Modification des CGV</h2>
  <p class="text-secondary-700">
    Lise Web Equine se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur au moment de la commande.
  </p>'
)
ON CONFLICT (key) DO NOTHING;
