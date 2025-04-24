// Quiz Data
const quizData = [
  {
    "question": "A 65-year-old man with a history of chronic alcohol use presents with persistent epigastric pain radiating to the back and significant weight loss. Imaging reveals pancreatic calcifications and atrophy. Laboratory studies reveal steatorrhea and mild fasting hyperglycemia. Which of the following best explains the development of this condition?",
    "choices": [
      "Autodigestion of the pancreas due to premature activation of trypsin",
      "Fibrotic replacement of pancreatic parenchyma due to recurrent inflammation",
      "Obstruction of the common bile duct by a cholesterol gallstone",
      "Ischemic infarction due to splanchnic vessel thrombosis",
      "Infiltration of acini by neoplastic neuroendocrine cells"
    ],
    "correctAnswer": 1,
    "explanation": "This patient has chronic pancreatitis, most often caused by long-standing alcohol abuse. Recurrent bouts of inflammation cause progressive fibrosis and loss of both exocrine and endocrine pancreatic tissue. (A) Describes acute pancreatitis. (B) Correct. (C) Gallstones can cause acute but not chronic inflammation alone. (D) Ischemia may cause necrosis, not fibrosis. (E) Neuroendocrine tumors are usually focal and functional.)"
  },
  {
    "question": "A 70-year-old man presents with progressive jaundice, weight loss, and vague abdominal discomfort. He has a 50-pack-year smoking history. Physical examination reveals a palpable, non-tender gallbladder and scleral icterus. CT reveals a hypodense mass in the head of the pancreas. Which of the following best explains this patient’s symptoms?",
    "choices": [
      "Fibrosis of intrahepatic bile ducts due to chronic inflammation",
      "Infiltration of the porta hepatis by metastatic colon cancer",
      "Direct compression of the common bile duct by a pancreatic ductal adenocarcinoma",
      "Necrosis of the pancreas with subsequent pseudocyst formation",
      "Perineural invasion by pancreatic neuroendocrine tumor"
    ],
    "correctAnswer": 2,
    "explanation": "This patient has classic signs of pancreatic head adenocarcinoma: painless jaundice, weight loss, and Courvoisier sign (palpable non-tender gallbladder). Tumor obstructs the common bile duct. (A) Seen in primary sclerosing cholangitis, not pancreatic cancer. (B) Possible but not likely here. (C) Correct. (D) Pseudocyst presents post-acute pancreatitis, not with jaundice. (E) Neuroendocrine tumors are less likely to cause bile duct obstruction.)"
  },
  {
    "question": "A 2-month-old infant presents with persistent jaundice and pale stools. Physical exam reveals hepatomegaly. Laboratory tests show elevated conjugated bilirubin and mildly increased AST/ALT. Liver biopsy reveals florid bile duct obstruction, portal fibrosis, and bile plugs. Which of the following best describes the pathophysiology underlying this condition?",
    "choices": [
      "Autoimmune destruction of intrahepatic bile ducts",
      "Inflammatory and fibrotic obstruction of the extrahepatic biliary tree",
      "Metabolic enzyme deficiency causing copper accumulation",
      "Genetic mutation in MDR3 transporter gene",
      "Congenital hepatic venous outflow obstruction"
    ],
    "correctAnswer": 1,
    "explanation": "This is biliary atresia, the most common cause of neonatal cholestasis. It is caused by progressive inflammation and fibrosis of the extrahepatic bile ducts, leading to obstruction. (A) Primary biliary cholangitis affects adults. (B) Correct. (C) Describes Wilson disease. (D) MDR3 mutations cause progressive familial intrahepatic cholestasis. (E) Budd-Chiari syndrome causes hepatic venous congestion, not bile duct destruction.)"
  },
  {
    "question": "A 45-year-old woman is admitted with confusion and elevated serum ammonia levels. Imaging shows cirrhosis. Biopsy reveals bridging fibrosis and regenerative nodules. The pathogenesis of her condition primarily involves activation of which of the following cells within the liver?",
    "choices": [
      "Kupffer cells within the sinusoid lumen",
      "Cholangiocytes lining the bile duct",
      "Endothelial cells of the hepatic artery",
      "Hepatic stellate (Ito) cells in the space of Disse",
      "Periportal hepatocytes"
    ],
    "correctAnswer": 3,
    "explanation": "Hepatic stellate cells (Ito cells), located in the space of Disse, are the primary fibrogenic cells in the liver. Upon activation (often due to chronic injury), they transform into myofibroblast-like cells that produce collagen and contribute to fibrosis seen in cirrhosis. (A) Kupffer cells mediate immune surveillance but do not drive fibrosis. (B) Cholangiocytes contribute to bile transport. (C) Endothelial cells regulate flow and exchange, not fibrosis. (E) Hepatocytes perform metabolic functions but are not the primary source of fibrosis.)"
  },
  {
    "question": "A 36-year-old man presents after an acetaminophen overdose. Liver biopsy shows centrilobular (zone 3) necrosis. Which of the following best explains the preferential vulnerability of this hepatic zone to toxic injury?",
    "choices": [
      "Highest exposure to oxygen and nutrients",
      "Site of most glycogen and protein synthesis",
      "Location of bile canaliculi and bile production",
      "Lowest oxygenation and highest cytochrome P450 activity",
      "Direct drainage from the central vein"
    ],
    "correctAnswer": 3,
    "explanation": "Zone 3 (pericentral) of the hepatic acinus is farthest from the portal triad and receives the least oxygen, but it has the highest cytochrome P450 enzyme activity. This makes it particularly vulnerable to ischemia and to metabolism of toxins like acetaminophen into reactive intermediates. (A) Zone 1 has highest oxygen and nutrient supply. (B) Zone 1 is also primary for synthesis. (C) Bile production occurs broadly across hepatocytes, and bile flows toward the portal triads. (E) Central vein is the drainage point, not an origin for injury.)"
  },
  {
    "question": "A 55-year-old woman with gallstones undergoes cholecystectomy. Histologic examination of the gallbladder reveals a simple columnar epithelium, muscularis externa, and no submucosa. What histologic feature distinguishes the gallbladder from the rest of the GI tract?",
    "choices": [
      "Presence of Brunner’s glands in the submucosa",
      "Presence of muscularis mucosa between lamina propria and submucosa",
      "Lack of a submucosal layer",
      "Lymphoid follicles in lamina propria",
      "Simple squamous epithelium lining the lumen"
    ],
    "correctAnswer": 2,
    "explanation": "The gallbladder lacks a distinct submucosal layer, a feature that helps distinguish it histologically from much of the gastrointestinal tract. (A) Brunner's glands are in the duodenum. (B) Muscularis mucosa is absent in the gallbladder. (C) Correct. (D) Lymphoid follicles are found in Peyer’s patches of ileum, not gallbladder. (E) Gallbladder is lined by simple columnar, not squamous, epithelium.)"
  },
  {
    "question": "A 59-year-old man with a long history of alcohol use presents with abdominal distension and fatigue. On exam, he has ascites and spider angiomata. Paracentesis reveals ascitic fluid with an albumin level of 0.8 g/dL. His serum albumin level is 3.5 g/dL. Which of the following mechanisms best explains the development of his ascites?",
    "choices": [
      "Decreased hepatic production of angiotensinogen",
      "Decreased osmotic gradient due to low serum sodium",
      "Increased hydrostatic pressure in the portal venous system",
      "Obstruction of the thoracic duct with chyle leakage",
      "Lymphatic infiltration of the liver sinusoids"
    ],
    "correctAnswer": 2,
    "explanation": "Ascites in cirrhosis is primarily due to portal hypertension, which increases hydrostatic pressure in the portal system, driving fluid into the peritoneal cavity. The serum-ascites albumin gradient (SAAG) > 1.1 g/dL confirms portal hypertension as the cause. (A) Angiotensinogen levels affect systemic BP but not directly ascites formation. (B) Sodium affects volume status but not directly the pressure differential. (C) Correct. (D) Thoracic duct obstruction causes chylous ascites, not typical in cirrhosis. (E) Lymphatic infiltration may occur in malignancy, not alcoholic cirrhosis.)"
  },
  {
    "question": "A 62-year-old woman with cirrhosis presents with altered mental status. Family reports she recently had a GI bleed. She exhibits asterixis and disorientation. Labs reveal elevated ammonia levels. Which of the following best explains the pathophysiology of her condition?",
    "choices": [
      "Decreased albumin production leading to cerebral edema",
      "Autoimmune destruction of cerebral vasculature",
      "Increased glutamine formation in astrocytes causing cerebral edema",
      "Direct viral infection of CNS neurons",
      "Cerebral demyelination from vitamin B12 deficiency"
    ],
    "correctAnswer": 2,
    "explanation": "Hepatic encephalopathy results from impaired hepatic detoxification of ammonia, which crosses the blood-brain barrier. In astrocytes, ammonia is converted to glutamine, leading to osmotic swelling and cerebral edema. (A) Albumin affects oncotic pressure, not direct encephalopathy. (B) Autoimmune vasculitis is not involved. (C) Correct. (D) Viral infections cause encephalitis, not encephalopathy. (E) B12 deficiency causes subacute combined degeneration, not ammonia-mediated encephalopathy.)"
  },
  {
    "question": "A 58-year-old man with cirrhosis presents with hematemesis. Endoscopy reveals large esophageal varices. He is stabilized and started on octreotide. Which of the following best describes the mechanism of action of this therapy in the context of portal hypertension?",
    "choices": [
      "Enhances nitric oxide synthesis to dilate hepatic sinusoids",
      "Inhibits aldosterone-mediated sodium reabsorption in the kidney",
      "Reduces splanchnic blood flow via somatostatin receptor activation",
      "Promotes bile acid excretion through hepatic canaliculi",
      "Increases hepatic arterial perfusion to restore parenchymal oxygenation"
    ],
    "correctAnswer": 2,
    "explanation": "Octreotide is a somatostatin analog that reduces splanchnic blood flow by vasoconstriction, lowering portal pressure and controlling variceal bleeding. (A) NO promotes vasodilation and worsens portal hypertension. (B) Aldosterone blockade helps ascites, not varices. (C) Correct. (D) Bile excretion is unrelated. (E) Octreotide does not affect hepatic artery flow significantly.)"
  },
  {
    "question": "A 42-year-old woman is prescribed codeine for postoperative pain. After taking a standard dose, she experiences symptoms of opioid overdose, including respiratory depression and somnolence. Genetic testing reveals a CYP2D6 polymorphism. Which of the following best explains this patient's reaction?",
    "choices": [
      "She is a poor metabolizer, resulting in accumulation of inactive codeine",
      "She is an ultra-rapid metabolizer, leading to increased conversion of codeine to morphine",
      "She has increased glucuronidation activity, leading to rapid morphine clearance",
      "She has a defective CYP3A4 enzyme, leading to accumulation of codeine",
      "She has decreased renal clearance of codeine sulfate"
    ],
    "correctAnswer": 1,
    "explanation": "Codeine is a prodrug that is converted into morphine by CYP2D6. Ultra-rapid metabolizers have multiple copies of the CYP2D6 gene, leading to excessive conversion to morphine and increased risk of toxicity. (A) Poor metabolizers have reduced analgesia. (C) Glucuronidation affects phase II clearance, not conversion rate. (D) CYP3A4 does not activate codeine. (E) Renal clearance is not the major determinant of morphine levels.)"
  },
  {
    "question": "A 56-year-old man with chronic alcohol use is admitted for an acetaminophen overdose. He reports taking the maximum recommended dose. Labs reveal elevated AST, ALT, and INR. Which of the following mechanisms most likely explains his hepatotoxicity despite therapeutic dosing?",
    "choices": [
      "Decreased glucuronidation due to alcohol competition",
      "Inhibition of CYP3A4 by ethanol",
      "Induction of CYP2E1 leading to excess NAPQI production",
      "Impaired renal clearance of acetaminophen sulfate conjugates",
      "Conversion of acetaminophen to 5-aminosalicylic acid"
    ],
    "correctAnswer": 2,
    "explanation": "Chronic alcohol consumption induces CYP2E1, increasing conversion of acetaminophen to NAPQI, a toxic intermediate. When glutathione stores are depleted, NAPQI accumulates and causes hepatocellular necrosis. (A) Glucuronidation is not significantly altered. (B) Ethanol is a CYP2E1 inducer, not an inhibitor. (C) Correct. (D) Renal clearance of conjugates is not the limiting factor here. (E) Acetaminophen is not converted to 5-ASA.)"
  },
  {
    "question": "A 25-year-old man with cystic fibrosis is started on a combination therapy of lumacaftor and ivacaftor. After two weeks, his pulmonary function worsens. Lumacaftor is known to induce CYP3A4, while ivacaftor is a CYP3A4 substrate. Which of the following best explains the patient's clinical decline?",
    "choices": [
      "Increased plasma concentration of ivacaftor due to enzyme inhibition",
      "Decreased bioavailability of ivacaftor due to increased CYP3A4 activity",
      "Blockade of ivacaftor’s target receptor by lumacaftor",
      "Competition between lumacaftor and ivacaftor for renal excretion",
      "Activation of ivacaftor to a toxic metabolite"
    ],
    "correctAnswer": 1,
    "explanation": "Lumacaftor induces CYP3A4, which accelerates metabolism of ivacaftor, lowering its plasma concentration and therapeutic effect. This results in reduced CFTR modulation and worsening of symptoms. (A) Would occur with inhibitors, not inducers. (B) Correct. (C) There is no receptor-level antagonism. (D) CYP450 metabolism, not renal excretion, is the issue. (E) Ivacaftor is not converted to a toxic metabolite.)"
  },
  {
    "question": "A 24-year-old woman presents with severe epigastric pain radiating to the back, nausea, and vomiting. Her vitals show tachycardia and hypotension. Labs reveal elevated lipase (6,000 U/L), AST 370 U/L, and ALT 390 U/L. Abdominal ultrasound shows gallstones without common bile duct dilation. Which of the following is the most likely cause of her acute pancreatitis?",
    "choices": [
      "Alcohol use",
      "Gallstone migration causing transient ampullary obstruction",
      "Autoimmune pancreatitis",
      "Hypertriglyceridemia",
      "Drug-induced pancreatitis from sulfasalazine"
    ],
    "correctAnswer": 1,
    "explanation": "In acute pancreatitis, transaminase elevation (>3x normal), particularly ALT >150 U/L, strongly suggests a biliary etiology (e.g., gallstones obstructing the ampulla of Vater). (A) Alcohol is a common cause but usually with normal liver enzymes. (B) Correct – gallstone-induced ampullary obstruction is the most likely cause here. (C) Autoimmune pancreatitis typically shows elevated IgG4 and diffuse pancreatic enlargement. (D) Hypertriglyceridemia is a cause but requires TG >1,000 mg/dL. (E) Drug-induced pancreatitis is less common and requires drug exposure history.)"
  },
  {
    "question": "A 60-year-old man is admitted with acute pancreatitis secondary to alcohol use. His Ranson’s score is 4 on admission. On hospital day 3, he develops new fever, hypotension, and leukocytosis. CT shows >50% pancreatic necrosis with air bubbles within the necrotic collection. Which of the following is the best next step in management?",
    "choices": [
      "Initiate enteral nutrition via nasogastric tube",
      "Administer broad-spectrum IV antibiotics",
      "Urgent endoscopic retrograde cholangiopancreatography (ERCP)",
      "Percutaneous drainage of fluid collection",
      "Oral ciprofloxacin and discharge"
    ],
    "correctAnswer": 1,
    "explanation": "Infected pancreatic necrosis is suggested by CT findings of air in necrotic tissue. IV antibiotics are indicated, especially if necrosis >50%. (A) Nutrition is important but not the immediate priority. (B) Correct. (C) ERCP is for cholangitis or gallstone pancreatitis. (D) Drainage may be needed later but typically after stabilization and antibiotics. (E) Outpatient treatment is inappropriate for systemic illness.)"
  },
  {
    "question": "A 28-year-old man presents with severe abdominal pain, vomiting, and fever. He is diagnosed with acute pancreatitis. CT on day 6 shows a 6 cm peripancreatic fluid collection without internal debris. What is the most appropriate terminology and management for this complication?",
    "choices": [
      "Pancreatic pseudocyst; urgent drainage",
      "Acute necrotic collection; surgical debridement",
      "Walled-off necrosis; conservative management",
      "Acute peripancreatic fluid collection; supportive care",
      "Infected pseudocyst; broad-spectrum antibiotics"
    ],
    "correctAnswer": 3,
    "explanation": "In the first 4 weeks of interstitial edematous pancreatitis, fluid collections without necrosis or mature capsule are termed **acute peripancreatic fluid collections (APFCs)**. These typically resolve with supportive care. (A) Pseudocysts require ≥4 weeks to form. (B) Necrotic collections appear with debris or infection and occur in necrotizing pancreatitis. (C) Walled-off necrosis forms after 4 weeks. (D) Correct. (E) Infection requires imaging evidence of necrosis or clinical deterioration.)"
  },
  {
    "question": "A 14-year-old boy with autism is brought to the ED due to frequent falls and apparent vision problems. His diet consists mostly of crackers and chips. He has dry conjunctivae with foamy plaques over the temporal cornea, and he is noted to walk with his arms extended. Labs are unremarkable. Which of the following is the most likely underlying pathophysiology of this condition?",
    "choices": [
      "Failure to convert all-trans retinal to 11-cis retinal in rod cells",
      "Inhibition of rhodopsin degradation by transducin",
      "Destruction of cone cells leading to central vision loss",
      "Inhibition of opsin expression in photoreceptors",
      "Autoimmune demyelination of the optic nerve"
    ],
    "correctAnswer": 0,
    "explanation": "This boy has vitamin A deficiency, presenting with night blindness (nyctalopia) and Bitot’s spots. In the visual cycle, 11-cis retinal binds opsin to form rhodopsin, the pigment in rod cells essential for night vision. Vitamin A is required to regenerate 11-cis retinal from all-trans retinal. (A) Correct. (B–D) are unrelated to the biochemical defect in vitamin A deficiency. (E) Describes optic neuritis seen in MS."
  },
  {
    "question": "A 3-month-old exclusively breastfed infant presents with a bulging fontanelle and altered mental status. CT reveals a large intracranial hemorrhage. Labs show prolonged PT and PTT. Which of the following best explains the likely cause of this condition?",
    "choices": [
      "Decreased synthesis of clotting factors due to liver immaturity",
      "Deficiency of a cofactor for γ-carboxylation of clotting proteins",
      "Autoantibodies against platelet glycoproteins",
      "Abnormal platelet adhesion due to vWF deficiency",
      "Defect in fibrin cross-linking from factor XIII deficiency"
    ],
    "correctAnswer": 1,
    "explanation": "This child has late-onset vitamin K deficiency bleeding (VKDB). Newborns have low vitamin K stores due to poor placental transfer, low content in breast milk, and immature gut flora. Vitamin K is required for γ-carboxylation of glutamate residues in clotting factors II, VII, IX, and X. (A) Synthesis may be immature but the key issue is the post-translational modification. (C–E) involve platelet and fibrin defects, not the vitamin K-dependent pathway."
  },
  {
    "question": "A 6-year-old boy from Eastern Europe presents with chronic foul-smelling diarrhea, bruising, and gait disturbances. He has no deep tendon reflexes and triglyceride levels <20 mg/dL. Small bowel biopsy shows enterocytes filled with lipid droplets. Which of the following best explains his neurological findings?",
    "choices": [
      "Defective chylomicron assembly due to MTP gene mutation",
      "Deficient bile acid synthesis due to CYP7A1 mutation",
      "Congenital absence of brush border enzymes",
      "Inability to synthesize pancreatic lipase",
      "Loss of functional CFTR leading to ductal obstruction"
    ],
    "correctAnswer": 0,
    "explanation": "This boy has abetalipoproteinemia, a rare AR condition due to microsomal triglyceride transfer protein (MTP) deficiency. This prevents chylomicron assembly, causing fat and fat-soluble vitamin malabsorption, especially vitamin E, leading to neurologic symptoms like ataxia and loss of reflexes. (A) Correct. (B) Affects bile salts but doesn’t cause such severe malabsorption. (C–E) relate to digestion, not chylomicron secretion."
  },
  {
    "question": "A 58-year-old man presents with fatigue, dark urine, and jaundice. Lab results show elevated total and direct bilirubin. Imaging reveals a gallstone obstructing the common bile duct. Which of the following best explains the pale color of his stool?",
    "choices": [
      "Reduced heme breakdown due to liver dysfunction",
      "Failure to conjugate bilirubin in hepatocytes",
      "Loss of albumin-bound bilirubin transport to the liver",
      "Impaired excretion of conjugated bilirubin into the intestines",
      "Overproduction of unconjugated bilirubin by tissue macrophages"
    ],
    "correctAnswer": 3,
    "explanation": "In obstructive jaundice, conjugated bilirubin cannot be secreted into the intestine due to blockage of the bile ducts (e.g., gallstones). This prevents conversion to stercobilin by gut bacteria, leading to pale/clay-colored stools. (A) Heme breakdown occurs normally. (B) Conjugation still happens; the issue is secretion. (C) Albumin transport affects unconjugated bilirubin. (D) Correct. (E) Overproduction of unconjugated bilirubin causes hemolytic jaundice, not pale stools.)"
  },
  {
    "question": "A 2-week-old newborn presents with yellowing of the skin and sclerae. The infant is otherwise healthy and feeding well. Labs show total bilirubin of 9 mg/dL, primarily unconjugated. Which of the following best explains the pathophysiology of this patient’s condition?",
    "choices": [
      "Overexpression of hepatic UDP-glucuronyl transferase",
      "Hemolysis due to ABO incompatibility",
      "Delayed expression of bilirubin-conjugating enzyme",
      "Obstruction of the extrahepatic biliary ducts",
      "Inherited defect in bilirubin uptake into hepatocytes"
    ],
    "correctAnswer": 2,
    "explanation": "Neonatal jaundice is commonly due to delayed expression of UDP-glucuronyl transferase, the enzyme that conjugates bilirubin in hepatocytes. This leads to transient unconjugated hyperbilirubinemia. (A) It is underexpression, not overexpression. (B) Would cause hemolytic jaundice and more severe anemia. (C) Correct. (D) Would lead to conjugated hyperbilirubinemia. (E) Seen in some inherited conditions, but not the typical cause in healthy neonates.)"
  },
  {
    "question": "A 35-year-old woman undergoes ileal resection following trauma. She later develops steatorrhea and fat-soluble vitamin deficiencies. Which of the following is the most likely cause of her symptoms?",
    "choices": [
      "Failure of hepatic bile acid synthesis",
      "Impaired pancreatic lipase secretion",
      "Loss of bile salt reabsorption and enterohepatic circulation",
      "Obstruction of the cystic duct",
      "Deficiency of intestinal brush border enzymes"
    ],
    "correctAnswer": 2,
    "explanation": "Bile salts are actively reabsorbed in the terminal ileum. Resection of this segment interrupts the enterohepatic circulation, leading to bile salt loss in stool, reduced micelle formation, fat malabsorption, and vitamin deficiencies. (A) Hepatic synthesis increases to compensate but can’t fully replace loss. (B) Affects digestion but not bile salt dynamics. (C) Correct. (D) Would impair bile storage, not absorption. (E) Causes carbohydrate malabsorption, not fat.)"
  },
  {
    "question": "A 16-year-old boy presents with polyuria, polydipsia, and weight loss. Lab studies reveal hyperglycemia, metabolic acidosis, and elevated ketones. He is diagnosed with type 1 diabetes mellitus. Which of the following best explains the mechanism by which insulin deficiency promotes ketone body formation?",
    "choices": [
      "Increased glycogenolysis in skeletal muscle",
      "Inhibition of fatty acid oxidation in adipocytes",
      "Decreased GLUT2-mediated hepatic glucose uptake",
      "Increased hormone-sensitive lipase activity in adipose tissue",
      "Upregulation of GLUT4 expression in muscle cells"
    ],
    "correctAnswer": 3,
    "explanation": "In insulin deficiency, such as in type 1 diabetes, hormone-sensitive lipase (HSL) in adipose tissue is uninhibited. This promotes the breakdown of triglycerides into free fatty acids, which are transported to the liver and converted into ketone bodies. (A) Glycogenolysis occurs but doesn't explain ketogenesis. (B) Fatty acid oxidation is actually increased. (C) GLUT2 is insulin-independent. (D) Correct. (E) GLUT4 is downregulated in insulin deficiency.)"
  },
  {
    "question": "A researcher investigates insulin signaling in hepatocytes. She finds that insulin binding activates a membrane receptor with intrinsic kinase activity. This initiates a cascade resulting in increased glycogen synthesis. Which of the following best describes the receptor type and downstream target responsible for insulin’s effect?",
    "choices": [
      "G-protein coupled receptor; adenylyl cyclase",
      "Nuclear hormone receptor; SREBP-1c",
      "Receptor tyrosine kinase; glycogen synthase kinase-3",
      "Cytokine receptor; JAK-STAT pathway",
      "Ligand-gated ion channel; PKA"
    ],
    "correctAnswer": 2,
    "explanation": "The insulin receptor is a receptor tyrosine kinase. Insulin binding leads to phosphorylation of IRS proteins and activation of PI3K/Akt pathway, which inhibits glycogen synthase kinase-3 (GSK-3), promoting glycogen synthesis. (A) GPCRs work through second messengers like cAMP. (B) Nuclear receptors modulate gene expression, not acute signaling. (C) Correct. (D) JAK-STAT is used by cytokines, not insulin. (E) Insulin does not use ligand-gated ion channels.)"
  },
  {
    "question": "A 50-year-old woman with type 2 diabetes is started on an oral medication that inhibits dipeptidyl peptidase-4 (DPP-4). Which of the following best describes the mechanism by which this medication improves glycemic control?",
    "choices": [
      "Inhibits glucagon secretion and delays gastric emptying",
      "Increases insulin-independent GLUT4 expression",
      "Blocks sodium-glucose transport in the renal tubules",
      "Stimulates hepatic glucose uptake via glycogen phosphorylase activation",
      "Reduces intestinal glucose absorption via α-glucosidase inhibition"
    ],
    "correctAnswer": 0,
    "explanation": "DPP-4 inhibitors (e.g., sitagliptin) increase circulating levels of GLP-1 by preventing its degradation. GLP-1 enhances glucose-dependent insulin secretion and inhibits glucagon secretion, contributing to lower blood glucose. It also delays gastric emptying. (A) Correct. (B) GLUT4 is insulin-dependent. (C) This describes SGLT2 inhibitors. (D) Glycogen phosphorylase promotes glucose release, not uptake. (E) Describes α-glucosidase inhibitors like acarbose.)"
  },
  {
    "question": "A 32-year-old woman presents with fatigue, pruritus, and right upper quadrant discomfort. Labs reveal elevated alkaline phosphatase, conjugated hyperbilirubinemia, and positive antimitochondrial antibodies (AMA). A liver biopsy reveals portal tract inflammation with destruction of interlobular bile ducts, lymphocytic infiltrates, and granulomas. Which of the following is the most likely diagnosis?",
    "choices": [
      "Primary sclerosing cholangitis",
      "Primary biliary cholangitis",
      "Autoimmune hepatitis",
      "Chronic hepatitis B",
      "Hepatocellular carcinoma"
    ],
    "correctAnswer": 1,
    "explanation": "This patient has classic features of primary biliary cholangitis (PBC), an autoimmune disease primarily affecting middle-aged women. It involves chronic granulomatous destruction of intrahepatic bile ducts and is strongly associated with positive AMA. (A) PSC affects both intra- and extrahepatic ducts and is associated with p-ANCA and ulcerative colitis. (B) Correct. (C) AIH presents with elevated transaminases, ANA, and ASMA, not cholestasis. (D) HBV shows ground-glass hepatocytes, not granulomatous duct destruction. (E) HCC presents with mass lesions and elevated AFP, not ductal destruction.)"
  },
  {
    "question": "A 45-year-old man with type 2 diabetes and obesity presents for evaluation of elevated liver enzymes. AST is 65 U/L and ALT is 95 U/L. He denies alcohol use. Liver biopsy shows macrovesicular steatosis, ballooning degeneration of hepatocytes, Mallory-Denk bodies, and perivenular fibrosis. Which of the following is the most likely diagnosis?",
    "choices": [
      "Alcoholic steatohepatitis",
      "Metabolic-associated steatohepatitis",
      "Hepatitis C infection",
      "Primary biliary cholangitis",
      "Reye syndrome"
    ],
    "correctAnswer": 1,
    "explanation": "This is metabolic-associated steatohepatitis (MASH), the progressive form of MASLD. Histology mirrors alcoholic steatohepatitis but occurs in the absence of alcohol use. Key features include macrovesicular steatosis, hepatocyte ballooning, Mallory-Denk bodies, and pericellular fibrosis in zone 3. (A) Would be correct if alcohol use were present. (B) Correct. (C) HCV shows lymphocytic portal infiltrates. (D) PBC features bile duct loss and granulomas. (E) Reye syndrome is a pediatric condition with microvesicular steatosis.)"
  },
  {
    "question": "A 27-year-old man presents with behavioral changes and jaundice. He has no prior medical history but reports tremors and difficulty concentrating. Slit lamp exam shows brownish rings at the corneal periphery. Liver biopsy reveals periportal hepatocyte necrosis and a rhodanine stain shows intracellular copper. Which of the following is the most likely underlying defect in this patient?",
    "choices": [
      "Mutation in ATP7B gene affecting copper transport",
      "Deficiency of ceruloplasmin synthesis by hepatocytes",
      "Mutation in HFE gene causing iron overload",
      "PiZZ genotype leading to α1-antitrypsin accumulation",
      "Impaired mitochondrial fatty acid oxidation"
    ],
    "correctAnswer": 0,
    "explanation": "This patient has Wilson disease, an autosomal recessive disorder caused by mutations in the ATP7B gene. This prevents copper excretion into bile and incorporation into ceruloplasmin, leading to hepatic and neurologic copper accumulation. (A) Correct. (B) Ceruloplasmin is low, but the primary defect is copper transport. (C) HFE mutation causes hemochromatosis (iron, not copper). (D) AAT deficiency causes PAS+ inclusions and early cirrhosis, not copper buildup. (E) Describes Reye syndrome or fatty acid oxidation disorders.)"
  },
  {
    "question": "A 28-year-old HIV-positive man is about to start abacavir as part of his antiretroviral regimen. Genetic screening is performed beforehand and reveals the presence of HLA-B*57:01. What is the most appropriate next step in his management?",
    "choices": [
      "Initiate abacavir with slow dose escalation and monitor liver enzymes",
      "Start abacavir only in combination with corticosteroids",
      "Switch to an alternative antiretroviral regimen to avoid hypersensitivity",
      "Continue abacavir; hypersensitivity risk is limited to HLA-B*15:02 carriers",
      "Start abacavir and monitor for SJS/TEN during the first two weeks"
    ],
    "correctAnswer": 2,
    "explanation": "HLA-B*57:01 is strongly associated with abacavir-induced hypersensitivity, which can be life-threatening. All patients should be screened prior to initiating abacavir, and those who test positive must avoid the drug. (A, B) Dose modification or corticosteroid use does not reduce the risk. (C) Correct. (D) HLA-B*15:02 is relevant to carbamazepine, not abacavir. (E) SJS/TEN is more relevant to allopurinol or phenytoin in specific genotypes.)"
  },
  {
    "question": "A 34-year-old woman of East Asian descent is prescribed carbamazepine for trigeminal neuralgia. Genetic testing shows she carries the HLA-B*15:02 allele. Which of the following best explains why this result is clinically significant?",
    "choices": [
      "She is at increased risk for agranulocytosis with carbamazepine",
      "She will require a higher dose of carbamazepine due to rapid metabolism",
      "She is at increased risk for Stevens-Johnson syndrome or toxic epidermal necrolysis",
      "She will not achieve therapeutic levels due to poor GI absorption",
      "She is likely to experience serotonin syndrome when taking carbamazepine"
    ],
    "correctAnswer": 2,
    "explanation": "HLA-B*15:02 is associated with a significantly increased risk of severe cutaneous adverse reactions (SJS/TEN) to carbamazepine, particularly in Han Chinese and Southeast Asian populations. (A) Agranulocytosis is a known but unrelated risk. (B) This is not related to HLA genotype. (C) Correct. (D) Absorption is not genetically mediated in this case. (E) Carbamazepine is not serotonergic.)"
  },
  {
    "question": "A 68-year-old man of European descent is started on warfarin for atrial fibrillation. Genetic testing reveals that he is heterozygous for CYP2C9*3 and has the VKORC1 -1639AA genotype. Which of the following best describes the implications for his warfarin therapy?",
    "choices": [
      "He will require a higher dose due to rapid clearance of warfarin",
      "He will be resistant to the anticoagulant effect of warfarin",
      "He is at increased risk for bleeding and requires a lower initial dose",
      "He will develop warfarin-induced skin necrosis regardless of dosing",
      "There is no impact; genetic variation does not affect warfarin metabolism"
    ],
    "correctAnswer": 2,
    "explanation": "The CYP2C9*3 allele reduces metabolic clearance of warfarin, and VKORC1 -1639AA leads to increased sensitivity to warfarin. Together, these variants place the patient at high risk of over-anticoagulation and bleeding. (A) The patient will have slower clearance. (B) The genotype indicates sensitivity, not resistance. (C) Correct. (D) Skin necrosis is a rare complication not strictly tied to these polymorphisms. (E) These polymorphisms are well-known to impact warfarin dosing.)"
  },
  {
    "question": "A 15-year-old girl with a recent diagnosis of Crohn's disease reports emotional distress, weight gain, and poor body image after starting corticosteroid therapy. She also expresses frustration with her medical regimen and states, 'I just want to be normal again.' Based on the psychosocial impacts of IBD, which of the following interventions is most appropriate to support her adjustment and improve adherence?",
    "choices": [
      "Begin a ketogenic diet to reduce inflammatory triggers",
      "Discontinue steroids and switch to biologics immediately",
      "Initiate cognitive-behavioral therapy focusing on maladaptive beliefs",
      "Refer for psychiatric evaluation and start antidepressants",
      "Enroll in a competitive sport to improve mood and body image"
    ],
    "correctAnswer": 2,
    "explanation": "This patient demonstrates psychological struggles common in adolescents with IBD, such as poor body image, loss of normalcy, and emotional lability. CBT helps reframe maladaptive cognitions, improve coping, and enhance treatment engagement. (A) Diet may help but doesn’t address psychological needs. (B) Medication change without addressing the root distress is premature. (C) Correct. (D) Antidepressants may be helpful but are not first-line. (E) Exercise is beneficial but should be part of a broader behavioral plan.)"
  },
  {
    "question": "A 17-year-old boy with ulcerative colitis presents for follow-up. He reports missing medications due to feeling overwhelmed and isolated, particularly during school. His parents have recently stopped attending visits with him. Which of the following is the most likely contributor to poor disease management in this case?",
    "choices": [
      "Adverse effects of immunosuppressants",
      "Transition of disease management responsibility from parent to adolescent",
      "Onset of steroid-induced psychosis",
      "Unrealistic expectations of disease remission",
      "Malingering to avoid school responsibilities"
    ],
    "correctAnswer": 1,
    "explanation": "The premature transition of care responsibility from parent to adolescent is a key barrier to effective IBD care, especially during high-stress periods like school. Support and coordinated transition are critical. (A) May contribute, but emotional burden is emphasized here. (B) Correct. (C) Psychosis is rare and extreme. (D) Unrealistic remission hopes can cause distress but aren’t the main issue. (E) No evidence of malingering is presented.)"
  },
  {
    "question": "A multidisciplinary team is evaluating a pediatric patient with IBD. They note high levels of pain, anxiety, and difficulty adhering to medical regimens. Which of the following team additions would most directly address the unmet need highlighted as a common barrier in effective IBD programs?",
    "choices": [
      "Pediatric rheumatologist",
      "Clinical pharmacist",
      "Psychosocial care provider",
      "School liaison officer",
      "Surgical consult"
    ],
    "correctAnswer": 2,
    "explanation": "A major barrier to effective IBD management is the lack of integrated psychosocial support. Incorporating psychologists or social workers helps manage stress, promote adherence, and improve quality of life. (A) Rheumatology is useful for overlap syndromes. (B) Pharmacists support education but not emotional needs. (C) Correct. (D) Liaison may assist with school but not core psychosocial barriers. (E) Surgery is not indicated at this stage.)"
  }
];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let answeredQuestions = JSON.parse(sessionStorage.getItem("answeredQuestions")) || new Array(quizData.length).fill(false);
let explanationsShown = JSON.parse(sessionStorage.getItem("explanationsShown")) || new Array(quizData.length).fill(false);
let selectedAnswers = JSON.parse(sessionStorage.getItem("selectedAnswers")) || new Array(quizData.length).fill(null);

// DOM Elements
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const explanationBox = document.getElementById("explanation");
const progressText = document.getElementById("progress");
const correctText = document.getElementById("correct");
const incorrectText = document.getElementById("incorrect");
const questionList = document.getElementById("question-list");
const quizContainer = document.querySelector(".quiz-content");
const resultsContainer = document.getElementById("results-container");

// Display Hotkey Info Popup
window.onload = function() {
    alert("Welcome to the quiz!\n\nHotkeys Available:\n- Space: Next Question\n- B: Previous Question\n- 1-5: Select Answer Choices\n Anki remotes should be compatible! \n\nGood luck!");
};

// Load Questions into Sidebar
quizData.forEach((_, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = index + 1;
    listItem.classList.add("question-bubble");
    listItem.onclick = () => loadQuestion(index);
    listItem.setAttribute("data-index", index);
    questionList.appendChild(listItem);
});

// Load Question
function loadQuestion(index) {
    if (index >= quizData.length) {
        showResults();
        return;
    }

    currentQuestionIndex = index;
    const q = quizData[index];
    
    questionText.textContent = q.question;
    choicesContainer.innerHTML = "";
    
    q.choices.forEach((choice, i) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => checkAnswer(i, button);
        button.classList.add("choice-btn");
        
        if (selectedAnswers[currentQuestionIndex] !== null) {
            if (i === selectedAnswers[currentQuestionIndex]) {
                button.style.backgroundColor = selectedAnswers[currentQuestionIndex] === q.correctAnswer ? "green" : "red";
            }
            if (i === q.correctAnswer) {
                button.style.backgroundColor = "green";
            }
        }
        
        choicesContainer.appendChild(button);
    });

    if (explanationsShown[currentQuestionIndex]) {
        explanationBox.textContent = q.explanation;
        explanationBox.classList.remove("hidden");
    } else {
        explanationBox.textContent = "";
        explanationBox.classList.add("hidden");
    }

    updateProgress();
}

// Check Answer
function checkAnswer(selectedIndex, button) {
    if (answeredQuestions[currentQuestionIndex]) return; // Prevent multiple answers

    const q = quizData[currentQuestionIndex];
    explanationBox.textContent = q.explanation;
    explanationBox.classList.remove("hidden");

    const questionBubble = document.querySelector(`.question-bubble[data-index="${currentQuestionIndex}"]`);

    if (selectedIndex === q.correctAnswer) {
        button.style.backgroundColor = "green";
        questionBubble.style.backgroundColor = "green";
        correctAnswers++;
    } else {
        button.style.backgroundColor = "red";
        questionBubble.style.backgroundColor = "red";
        incorrectAnswers++;
        
        // Highlight correct answer in green
        const buttons = choicesContainer.getElementsByTagName("button");
        buttons[q.correctAnswer].style.backgroundColor = "green";
    }

    answeredQuestions[currentQuestionIndex] = true; // Mark as answered
    explanationsShown[currentQuestionIndex] = true; // Keep explanation visible
    selectedAnswers[currentQuestionIndex] = selectedIndex;
    
    sessionStorage.setItem("answeredQuestions", JSON.stringify(answeredQuestions));
    sessionStorage.setItem("explanationsShown", JSON.stringify(explanationsShown));
    sessionStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
    
    updateProgress();
}

// Update Progress
function updateProgress() {
    progressText.textContent = `${currentQuestionIndex + 1}/${quizData.length}`;
    correctText.textContent = correctAnswers;
    incorrectText.textContent = incorrectAnswers;
}

// Show Final Results Popup
function showResultsPopup() {
    const scorePercentage = ((correctAnswers / quizData.length) * 100).toFixed(2);
    alert(`Quiz Completed!\n\nYour Score: ${correctAnswers}/${quizData.length} (${scorePercentage}%)\n\nCongratulations on finishing the quiz!`);
}

// Navigation Controls
document.getElementById("next-btn").onclick = () => {
    if (currentQuestionIndex + 1 >= quizData.length) {
        showResultsPopup();
    } else {
        loadQuestion(currentQuestionIndex + 1);
    }
};
document.getElementById("prev-btn").onclick = () => loadQuestion(Math.max(currentQuestionIndex - 1, 0));

// Hotkey Navigation & Answer Selection
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        loadQuestion(currentQuestionIndex + 1);
    } else if (event.code === "KeyB") {
        loadQuestion(Math.max(currentQuestionIndex - 1, 0));
    } else if (event.key >= "1" && event.key <= "5") {
        const answerIndex = parseInt(event.key) - 1;
        if (answerIndex < quizData[currentQuestionIndex].choices.length) {
            const buttons = choicesContainer.getElementsByTagName("button");
            if (buttons[answerIndex]) {
                buttons[answerIndex].click();
            }
        }
    }
});

// Load First Question on Start
loadQuestion(0);
