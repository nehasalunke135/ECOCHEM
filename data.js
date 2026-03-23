const REACTIONS_DB = [
  // ══════════════════════════════════════════════════════
  // PETROLEUM & PETROCHEMICALS
  // ══════════════════════════════════════════════════════
  {
    id:"P001", reactants:"Crude Oil fractions (C12–C40)", product:"Gasoline + Diesel + LPG",
    equation:"CₙH₂ₙ₊₂ → lighter fractions (cracking)", process:"Fluid Catalytic Cracking (FCC)",
    industry:"Petroleum & Petrochemicals", conditions:"500°C, zeolite catalyst, fluidized bed",
    toxins:["SO₂ (acid rain precursor)","NOₓ","Polycyclic Aromatic Hydrocarbons (PAH)","Spent catalyst (Ni, V heavy metals)","VOCs"],
    toxinLevel:"VERY HIGH", greenScore:1, sustainabilityRating:"CRITICAL",
    greenPrinciples:[1,2,5,7,12],
    info:"Primary fuel production accounting for ~35% of global energy supply",
    realWorldImpact:"Petroleum refining = largest single-source of industrial SO₂ globally",
    greenAlternatives:[
      "Bio-FCC using waste cooking oils or algae as renewable feedstock — drops fossil CO₂ by 70%",
      "Electric cracking furnaces powered by renewables — eliminates combustion NOₓ",
      "Green hydrogen hydrotreating to remove sulfur before cracking",
      "Catalytic pyrolysis of plastic waste as circular feedstock (waste-to-fuel loop)"
    ],
    annualWaste:"~500M tonnes CO₂eq/year globally from FCC units"
  },
  {
    id:"P002", reactants:"Naphtha + Steam", product:"Ethylene + Propylene",
    equation:"CₙH₂ₙ₊₂ + H₂O (heat) → C₂H₄ + C₃H₆ + H₂ + CH₄",
    process:"Steam Cracking", industry:"Petroleum & Petrochemicals",
    conditions:"800–900°C, millisecond residence time",
    toxins:["CO₂ (~1.5 t per t ethylene)","NOₓ from furnace","Pyrolysis fuel oil (carcinogenic PAH)","Acetylene (explosive byproduct)"],
    toxinLevel:"HIGH", greenScore:2, sustainabilityRating:"POOR",
    greenPrinciples:[2,5,6,7],
    info:"Produces >200M tonnes/year of olefins — backbone of global plastics",
    realWorldImpact:"Steam cracking consumes ~8% of global petrochemical energy",
    greenAlternatives:[
      "Ethanol dehydration to ethylene using bio-ethanol from sugarcane — carbon neutral",
      "Methanol-to-Olefins (MTO) from green methanol — decouples from crude oil",
      "Oxidative dehydrogenation (ODH) with CO₂ — turns greenhouse gas into feedstock",
      "Electric steam cracker (Dow/Shell pilot) — 90% lower direct emissions"
    ],
    annualWaste:"~300M tonnes CO₂eq/year"
  },
  {
    id:"P003", reactants:"Benzene + Propylene", product:"Phenol + Acetone",
    equation:"C₆H₆ + C₃H₆ → C₆H₅CH(CH₃)₂ → C₆H₅OH + CH₃COCH₃",
    process:"Hock (Cumene) Process", industry:"Petroleum & Petrochemicals",
    conditions:"Room temperature to 80°C, acid catalyst",
    toxins:["Phenol (aquatic toxin at ppb)","Cumene hydroperoxide (explosive)","α-methylstyrene","Acidic wastewater pH<3"],
    toxinLevel:"HIGH", greenScore:3, sustainabilityRating:"POOR",
    greenPrinciples:[1,3,5,12],
    info:"Produces 10M+ tonnes phenol/year for resins, bisphenol-A, caprolactam",
    realWorldImpact:"Phenol spill (Hooghly river, India) cut water supply for 50,000 people",
    greenAlternatives:[
      "Direct benzene hydroxylation with H₂O₂ — eliminates explosive intermediate",
      "Lignin depolymerization for bio-phenol — 100% renewable carbon",
      "Biocatalytic routes via engineered Pseudomonas — ambient conditions",
      "Electrocatalytic oxidation — removes acid catalyst and toxic intermediates"
    ],
    annualWaste:"~2M tonnes hazardous aqueous waste/year"
  },
  {
    id:"P004", reactants:"Ethylene + Cl₂", product:"PVC (via EDC/VCM)",
    equation:"C₂H₄ + Cl₂ → ClCH₂CH₂Cl → CH₂=CHCl → (C₂H₃Cl)ₙ",
    process:"Oxychlorination Polymerization", industry:"Petroleum & Petrochemicals",
    conditions:"250–300°C, CuCl₂ catalyst",
    toxins:["Vinyl Chloride Monomer — Group 1 IARC carcinogen","Dioxins on incineration","HCl waste gas","Chlorinated organic residues"],
    toxinLevel:"VERY HIGH", greenScore:1, sustainabilityRating:"CRITICAL",
    greenPrinciples:[1,3,4,12],
    info:"PVC = world's 3rd most produced plastic, ~45M tonnes/year",
    realWorldImpact:"VCM causes angiosarcoma of the liver — confirmed occupational carcinogen",
    greenAlternatives:[
      "Bio-PVC using bio-ethylene from sugarcane — same performance, renewable carbon",
      "PHA bioplastics from microbial fermentation — fully biodegradable",
      "PLA (polylactic acid) from corn starch for rigid packaging applications",
      "Closed-loop HCl recycling recovers 95% acid, cuts chlorine demand"
    ],
    annualWaste:"Millions of tonnes dioxin-risk waste in landfills globally"
  },
  {
    id:"P005", reactants:"Methane + Steam", product:"Hydrogen (Grey)",
    equation:"CH₄ + H₂O → CO + 3H₂ (then CO + H₂O → CO₂ + H₂)",
    process:"Steam Methane Reforming (SMR)", industry:"Petroleum & Petrochemicals",
    conditions:"700–1000°C, Ni catalyst, 15–40 bar",
    toxins:["CO₂ (~10 kg per kg H₂)","CO (toxic off-gas)","Methane slip (34× GWP of CO₂)","NOₓ from furnace"],
    toxinLevel:"HIGH", greenScore:2, sustainabilityRating:"POOR",
    greenPrinciples:[5,7,10],
    info:"Produces 95% of world's hydrogen — entirely from fossil methane",
    realWorldImpact:"Grey hydrogen production emits ~900M tonnes CO₂/year",
    greenAlternatives:[
      "Green hydrogen via PEM electrolysis + wind/solar — zero CO₂ emissions",
      "Biomethane reforming (bio-SMR) using anaerobic digestion gas",
      "Photocatalytic water splitting — sunlight + water = H₂, pure O₂ only byproduct",
      "CCS-equipped SMR ('Blue hydrogen') as transition bridge technology"
    ],
    annualWaste:"~900M tonnes CO₂/year from global H₂ production"
  },

  // ══════════════════════════════════════════════════════
  // TEXTILE & DYEING
  // ══════════════════════════════════════════════════════
  {
    id:"T001", reactants:"Aniline + NaNO₂ + HCl", product:"Azo Dye (via Diazonium salt)",
    equation:"C₆H₅NH₂ + NaNO₂ + HCl → C₆H₅N₂⁺Cl⁻ → Azo dye + coupling",
    process:"Diazotization & Coupling", industry:"Textile & Dyeing",
    conditions:"0–5°C, strongly acidic, batch process",
    toxins:["Carcinogenic aromatic amines (benzidine, naphthylamine)","Heavy metals (Cr, Cu, Zn) from mordants","High COD effluent (color > 5000 Pt-Co)","Chlorinated byproducts"],
    toxinLevel:"VERY HIGH", greenScore:1, sustainabilityRating:"CRITICAL",
    greenPrinciples:[1,3,4,5,10,11],
    info:"Azo dyes = 70% of all synthetic dyes; 280,000 tonnes discharged annually into water",
    realWorldImpact:"Textile dyeing causes 20% of global industrial water pollution",
    greenAlternatives:[
      "Natural plant-based dyes (indigo, turmeric, madder) — zero toxic effluent, carbon sink",
      "Enzymatic dyeing using fungal laccases — 40% less water, no heavy metals",
      "Supercritical CO₂ dyeing (DyeCoo technology) — waterless, zero effluent",
      "Reactive dyes with low-salt processes — 80% less NaCl in effluent"
    ],
    annualWaste:"280,000+ tonnes dyes discharged into waterways annually"
  },
  {
    id:"T002", reactants:"Cellulose + NaOH + CS₂", product:"Viscose Rayon",
    equation:"Cellulose + NaOH + CS₂ → Cellulose xanthate → Viscose → Rayon fiber",
    process:"Viscose Process", industry:"Textile & Dyeing",
    conditions:"50–60°C, multi-stage chemical treatment",
    toxins:["Carbon disulfide CS₂ — neurotoxin, atmospheric pollutant","H₂S gas release","Zinc sulfate in effluent","Zinc contamination in river sediments"],
    toxinLevel:"VERY HIGH", greenScore:1, sustainabilityRating:"CRITICAL",
    greenPrinciples:[1,3,4,12],
    info:"Rayon production uses 700,000 tonnes CS₂/year — toxic to workers and nearby communities",
    realWorldImpact:"CS₂ exposure linked to cardiovascular disease clusters near viscose plants",
    greenAlternatives:[
      "Lyocell (TENCEL™) closed-loop NMMO process — 99.5% solvent recovery, no CS₂",
      "Ionic liquid dissolution of cellulose (ILs) — recyclable, non-toxic medium",
      "Hemp/flax mechanical processing — no chemical fiber dissolution needed",
      "Cold NaOH/urea system — eliminates CS₂ entirely"
    ],
    annualWaste:"~500,000 tonnes CS₂ + zinc-contaminated water/year"
  },
  {
    id:"T003", reactants:"Cotton + Cl₂ / NaOCl", product:"Bleached Textile",
    equation:"Cl₂ + H₂O → HOCl + HCl → oxidizes chromophores in fiber",
    process:"Chlorine Bleaching", industry:"Textile & Dyeing",
    conditions:"50–80°C, pH 10–11, continuous pad-batch",
    toxins:["Adsorbable organic halides (AOX) — persistent","Dioxins and furans (trace)","Chloramines","High BOD/COD in effluent"],
    toxinLevel:"HIGH", greenScore:3, sustainabilityRating:"POOR",
    greenPrinciples:[1,3,5,11],
    info:"Chlorine bleaching generates AOX compounds that bioaccumulate in fish",
    realWorldImpact:"AOX detected in river fish tissue 80 km downstream of textile mills",
    greenAlternatives:[
      "H₂O₂ bleaching — only water as byproduct, fully biodegradable",
      "Ozone bleaching — zero chemical residue, effluent can be recycled",
      "Enzymatic biobleaching using xylanases and laccases",
      "UV/TiO₂ photocatalytic bleaching — sunlight-powered"
    ],
    annualWaste:"Thousands of tonnes AOX discharged globally per year"
  },
  {
    id:"T004", reactants:"PTA + Ethylene Glycol", product:"Polyester (PET) Fiber",
    equation:"C₈H₆O₄ + C₂H₆O₂ → (C₁₀H₈O₄)ₙ + nH₂O",
    process:"Melt Polycondensation", industry:"Textile & Dyeing",
    conditions:"280°C, antimony catalyst, vacuum",
    toxins:["Antimony trioxide catalyst (probable carcinogen)","Acetaldehyde emissions","Microplastic shedding (washing)","Ethylene glycol aqueous waste"],
    toxinLevel:"MEDIUM", greenScore:5, sustainabilityRating:"MODERATE",
    greenPrinciples:[1,5,7,9],
    info:"54M tonnes/year PET fiber — largest volume synthetic textile",
    realWorldImpact:"500,000 tonnes microplastics enter ocean annually from synthetic textile washing",
    greenAlternatives:[
      "Recycled PET (rPET) from bottles — 79% lower CO₂, same performance",
      "Bio-PET using sugarcane-derived MEG — 20% bio-based carbon today",
      "Titanium catalysts replacing antimony — non-toxic, same activity",
      "Mechanical textile-to-textile recycling to close the loop"
    ],
    annualWaste:"Microplastic ocean pollution + millions of tonnes landfill/year"
  },

  // ══════════════════════════════════════════════════════
  // STEEL & METALLURGY
  // ══════════════════════════════════════════════════════
  {
    id:"M001", reactants:"Fe₂O₃ + Coke (C) + CaCO₃", product:"Pig Iron",
    equation:"Fe₂O₃ + 3CO → 2Fe + 3CO₂ (inside blast furnace at 1500°C)",
    process:"Blast Furnace Ironmaking", industry:"Steel & Metallurgy",
    conditions:"1500°C, continuous operation, injected hot air at 1200°C",
    toxins:["CO₂ (~2 tonnes per tonne steel)","Blast furnace gas (CO, H₂S)","Slag with heavy metals (As, Pb, Cd)","PM2.5 and PM10 particulate emissions","Coke oven benzene and PAH"],
    toxinLevel:"VERY HIGH", greenScore:1, sustainabilityRating:"CRITICAL",
    greenPrinciples:[5,7,10,12],
    info:"Blast furnace steel = 7–9% of ALL global CO₂ emissions",
    realWorldImpact:"Steel sector emits 3.3 billion tonnes CO₂/year — equal to all EU emissions combined",
    greenAlternatives:[
      "Direct Reduced Iron (DRI) with green H₂ — HYBRIT process, near-zero CO₂",
      "Electric Arc Furnace (EAF) on 100% renewable power for scrap steel",
      "Hydrogen plasma smelting reduction — replaces coke entirely",
      "Slag valorization as Portland cement substitute (CO₂ sink)"
    ],
    annualWaste:"3.3 billion tonnes CO₂ + millions of tonnes toxic slag/year"
  },
  {
    id:"M002", reactants:"Scrap Steel + Electricity", product:"Steel (EAF route)",
    equation:"Fe (scrap) + electrical energy → molten steel + slag",
    process:"Electric Arc Furnace (EAF)", industry:"Steel & Metallurgy",
    conditions:"~1600°C arc temperature, 40–60 min heat cycle",
    toxins:["EAF dust (Zn, Pb, Cd — listed hazardous waste)","Dioxins if contaminated scrap","NOₓ from high-temperature arc","Slag with low-level heavy metals"],
    toxinLevel:"MEDIUM", greenScore:6, sustainabilityRating:"MODERATE",
    greenPrinciples:[5,7,9,10],
    info:"EAF = 75% lower CO₂ than blast furnace — fastest growing steelmaking route",
    realWorldImpact:"Europe shifted 42% of steel production to EAF by 2023",
    greenAlternatives:[
      "100% renewable electricity supply — near-zero Scope 2 emissions",
      "Waelz kiln recycling of EAF dust — recovers zinc as ZnO product",
      "Scrap sorting AI to eliminate contaminated materials before melting",
      "Hydrogen injection into arc zone to reduce NOₓ by 30%"
    ],
    annualWaste:"~12M tonnes EAF dust/year (hazardous waste)"
  },
  {
    id:"M003", reactants:"CuFeS₂ (chalcopyrite) + O₂", product:"Blister Copper",
    equation:"4CuFeS₂ + 13O₂ → 4Cu + 4FeO + 8SO₂",
    process:"Pyrometallurgical Copper Smelting", industry:"Steel & Metallurgy",
    conditions:"1200°C, flash smelting furnace, oxygen-enriched blast",
    toxins:["SO₂ (massive volumes — acid rain)","Arsenic trioxide in flue dust","Lead and cadmium in slag","Slag heap leachate (heavy metals in groundwater)"],
    toxinLevel:"HIGH", greenScore:3, sustainabilityRating:"POOR",
    greenPrinciples:[1,3,10,12],
    info:"~23M tonnes copper produced annually; smelting causes widespread acid rain",
    realWorldImpact:"Norilsk (Russia) copper smelting SO₂ kills forests over 10,000 km²",
    greenAlternatives:[
      "Hydromet heap leach + SX-EW — no SO₂, 40% less energy, ambient temperature",
      "Bioleaching with Acidithiobacillus — solar-powered, no smelter emissions",
      "Urban mining of e-waste (printed circuit boards) — 100x richer than ore",
      "SO₂ capture to sulfuric acid — byproduct monetization, zero acid rain"
    ],
    annualWaste:"~8M tonnes SO₂ + millions of tonnes toxic slag/year"
  },
  {
    id:"M004", reactants:"Al₂O₃ (alumina) + Electricity", product:"Primary Aluminium",
    equation:"2Al₂O₃ → 4Al + 3O₂ (electrolysis at 960°C in molten cryolite)",
    process:"Hall-Héroult Electrolysis", industry:"Steel & Metallurgy",
    conditions:"960°C, 4–6 V, 150–300 kA per cell",
    toxins:["PFCs — CF₄ (GWP 7390×CO₂) and C₂F₆ (GWP 12200×)","HF gas (highly toxic, causes fluorosis)","Spent potlining (hazardous waste, cyanide-containing)","Red mud from Bayer upstream (caustic, 150M tonnes/year)"],
    toxinLevel:"HIGH", greenScore:3, sustainabilityRating:"POOR",
    greenPrinciples:[1,5,7,10],
    info:"Primary aluminium = 15 MWh/tonne; second most energy-intensive metal",
    realWorldImpact:"Ajka red mud disaster (Hungary 2010) — toxic spill covered 40 km², 10 deaths",
    greenAlternatives:[
      "Aluminium recycling = only 5% of primary energy — most impactful circular action",
      "Inert anode technology — produces O₂ instead of CO₂ + PFCs (zero direct GHG)",
      "Hydropower smelters (Iceland, Norway) — near-zero grid carbon intensity",
      "Red mud valorization for titanium, iron, rare earth recovery"
    ],
    annualWaste:"150M tonnes red mud/year + PFCs with 10,000+ year atmospheric lifetime"
  },

  // ══════════════════════════════════════════════════════
  // PHARMACEUTICAL MANUFACTURING
  // ══════════════════════════════════════════════════════
  {
    id:"PH001", reactants:"6-APA + D-Phenylglycine acid chloride", product:"Amoxicillin",
    equation:"6-APA + acid chloride → Amoxicillin + HCl (E-factor >40)",
    process:"Chemical Acylation (traditional)", industry:"Pharmaceuticals",
    conditions:"−5°C to 5°C, organic solvents (DCM), anhydrous conditions",
    toxins:["Dichloromethane (DCM) — probable carcinogen, ozone depleter","Acid chloride reactive waste","Residual antibiotics in effluent → antimicrobial resistance (AMR)","High E-factor: 40+ kg waste per kg product"],
    toxinLevel:"HIGH", greenScore:3, sustainabilityRating:"POOR",
    greenPrinciples:[1,3,5,6,8,11],
    info:"Most prescribed antibiotic globally; traditional synthesis extremely wasteful",
    realWorldImpact:"Antibiotic effluent from Hyderabad pharma cluster created AMR hotspot in Musi river",
    greenAlternatives:[
      "Enzymatic synthesis via Penicillin G Acylase — E-factor drops from 40 to 5",
      "Water as sole reaction medium — eliminates DCM entirely",
      "Immobilized enzyme bioreactor — catalyst reuse for 1000+ cycles",
      "Continuous flow chemistry — 60% less solvent, precise temperature control"
    ],
    annualWaste:"~40 tonnes hazardous solvent waste per tonne amoxicillin"
  },
  {
    id:"PH002", reactants:"Isobutylbenzene (IBB) + reagents", product:"Ibuprofen (Traditional Route)",
    equation:"IBB → 6 steps, stoichiometric AlCl₃, HF → Ibuprofen (40% atom efficiency)",
    process:"Boots Multi-step Synthesis", industry:"Pharmaceuticals",
    conditions:"Various temps, HF catalyst (corrosive), multiple organic solvents",
    toxins:["HF (hydrofluoric acid) — contact with skin causes systemic toxicity","Stoichiometric aluminium waste streams","Multiple organic halide byproducts","Low atom economy (60% atoms become waste)"],
    toxinLevel:"HIGH", greenScore:2, sustainabilityRating:"POOR",
    greenPrinciples:[1,2,5,8,9],
    info:"Traditional 6-step route with only 40% atom efficiency — most atoms become waste",
    realWorldImpact:"Model case for how NOT to do pharmaceutical synthesis",
    greenAlternatives:[
      "BHC Green Route — 3 steps, 77% atom efficiency, acetic acid only byproduct (Presidential Green Chemistry Award winner)",
      "Continuous flow Pd-catalysis replacing stoichiometric metal reagents",
      "Enzymatic resolution for direct enantioselective synthesis",
      "Solvent-free mechanochemical synthesis using ball milling"
    ],
    annualWaste:"60% of all input atoms become waste in traditional route"
  },
  {
    id:"PH003", reactants:"Glucose + Engineered E. coli", product:"Human Insulin",
    equation:"C₆H₁₂O₆ + O₂ + nutrients → Proinsulin → Insulin + CO₂ + H₂O + biomass",
    process:"Recombinant DNA Fermentation", industry:"Pharmaceuticals",
    conditions:"37°C, aerobic bioreactor, pH 7, 60–80 h fermentation",
    toxins:["Fermentation broth with high BOD (~5000 mg/L)","CIP chemical waste (NaOH, HNO₃, detergents)","Spent biomass (Category C biological waste)","Chromatography solvent residues"],
    toxinLevel:"LOW", greenScore:8, sustainabilityRating:"GOOD",
    greenPrinciples:[7,9,10,11],
    info:"Replaced animal pancreas extraction — 100× more efficient, cruelty-free",
    realWorldImpact:"Biofermentation feeds 500M+ diabetics worldwide sustainably",
    greenAlternatives:[
      "Anaerobic digestion of spent broth → biogas for energy self-sufficiency",
      "Single-use bioreactor systems — eliminates CIP chemical waste",
      "Plant-based expression in safflower seeds — no fermentation facility needed",
      "Membrane bioreactors for in-situ product separation — higher yield, less waste"
    ],
    annualWaste:"Lower impact vs chemical synthesis; still generates biological waste streams"
  },
  {
    id:"PH004", reactants:"Salicylic Acid + Acetic Anhydride", product:"Aspirin",
    equation:"C₇H₆O₃ + C₄H₆O₃ → C₉H₈O₄ + CH₃COOH",
    process:"Fischer Acetylation", industry:"Pharmaceuticals",
    conditions:"60–90°C, H₃PO₄ or H₂SO₄ catalyst, batch",
    toxins:["Acetic acid waste streams (large volume)","Phosphoric/sulfuric acid catalyst residues","Organic solvents (ethanol, acetone) for recrystallization","Unreacted salicylic acid in effluent"],
    toxinLevel:"MEDIUM", greenScore:5, sustainabilityRating:"MODERATE",
    greenPrinciples:[1,5,9,11],
    info:"~40,000 tonnes/year — world's most consumed analgesic",
    realWorldImpact:"Pharmaceutical compounds detected in 40% of European river water samples",
    greenAlternatives:[
      "Solvent-free mechanochemical synthesis in ball mill — no solvent waste",
      "Lipase-catalyzed acetylation in supercritical CO₂ — recyclable solvent",
      "Continuous flow microreactor — 3× yield, minimal waste",
      "Acetic acid recovery and recycle loop — >90% recovery possible"
    ],
    annualWaste:"~5 tonnes solvent waste per tonne aspirin in traditional process"
  },
  {
    id:"PH005", reactants:"Ephedrine/Pseudoephedrine + reagents", product:"Methamphetamine precursor intermediates",
    equation:"(Legal pharma context) Multi-step organic synthesis with reductive amination",
    process:"Reductive Amination", industry:"Pharmaceuticals",
    conditions:"Various, often involving heavy metal catalysts or hydride reductions",
    toxins:["LiAlH₄ waste (pyrophoric, reacts violently with water)","Heavy metal catalyst residues (Pd, Pt, Ni)","Chlorinated solvent waste streams","Boron-containing byproducts"],
    toxinLevel:"HIGH", greenScore:3, sustainabilityRating:"POOR",
    greenPrinciples:[1,3,5,12],
    info:"Reductive amination is used across pharma; hazardous metal hydrides are common",
    realWorldImpact:"Metal hydride waste at pharma sites is a leading cause of lab fires and incidents",
    greenAlternatives:[
      "Transfer hydrogenation using isopropanol as H-donor — no metal hydrides",
      "Biocatalytic reductive amination via transaminase enzymes — aqueous, ambient",
      "Asymmetric organocatalysis replacing precious metal catalysts",
      "H₂ gas catalytic hydrogenation in continuous flow — safe, scalable"
    ],
    annualWaste:"Metal hydride waste streams are acutely hazardous and expensive to dispose"
  },

  // ══════════════════════════════════════════════════════
  // AGROCHEMICALS & FERTILIZERS
  // ══════════════════════════════════════════════════════
  {
    id:"A001", reactants:"N₂ + H₂ (from natural gas)", product:"Ammonia (Haber-Bosch)",
    equation:"N₂ + 3H₂ → 2NH₃ (450°C, 200 atm, Fe catalyst)",
    process:"Haber-Bosch Process", industry:"Agrochemicals & Fertilizers",
    conditions:"400–500°C, 150–300 atm, promoted Fe catalyst (K₂O, Al₂O₃)",
    toxins:["CO₂ (~9 tonnes per tonne NH₃ from SMR upstream)","Methane slip from reformer","Ammonia emissions to atmosphere (eutrophication)","NOₓ from combustion heaters"],
    toxinLevel:"HIGH", greenScore:3, sustainabilityRating:"POOR",
    greenPrinciples:[5,7,10],
    info:"Feeds ~50% of humanity; consumes 2% of global energy; emits 450M tonnes CO₂/year",
    realWorldImpact:"Haber-Bosch is the single most impactful industrial process in human history — for better and worse",
    greenAlternatives:[
      "Green ammonia: electrolysis H₂ + Haber-Bosch with renewable power — net-zero NH₃",
      "Biological N-fixation: engineer crops to fix N₂ directly (long-term breakthrough path)",
      "Electrochemical N₂ reduction at ambient conditions — active research, no high P/T",
      "Precision fertilization + nitrification inhibitors to cut over-application by 40%"
    ],
    annualWaste:"450M tonnes CO₂eq/year — single largest industrial chemical process emission"
  },
  {
    id:"A002", reactants:"Phosphate Rock + H₂SO₄", product:"Superphosphate Fertilizer",
    equation:"Ca₃(PO₄)₂ + 2H₂SO₄ → Ca(H2PO4)₂ + 2CaSO₄",
    process:"Wet Process Phosphoric Acid", industry:"Agrochemicals & Fertilizers",
    conditions:"80°C, excess H₂SO₄, filter press separation",
    toxins:["Phosphogypsum waste (5 tonnes per tonne P₂O₅) — radioactive (Ra-226)","HF and SiF₄ off-gases","Cadmium contamination in phosphate ore","Fluoride-contaminated wastewater"],
    toxinLevel:"HIGH", greenScore:2, sustainabilityRating:"POOR",
    greenPrinciples:[1,3,5,10,12],
    info:"Phosphorus is a finite, non-renewable resource; current reserves may last <300 years",
    realWorldImpact:"1 billion tonnes phosphogypsum stockpiled in US alone, many sites uncontrolled",
    greenAlternatives:[
      "Phosphorus recovery from wastewater as struvite (MgNH₄PO₄) — circular resource",
      "Bioavailability enhancement with mycorrhizal fungi — cuts P application by 30%",
      "Cadmium removal from ore by flotation before processing",
      "Urine diversion and struvite recovery — closes the phosphorus loop from humans"
    ],
    annualWaste:"~300M tonnes phosphogypsum per year globally"
  },
  {
    id:"A003", reactants:"NH₃ + HNO₃", product:"Ammonium Nitrate Fertilizer",
    equation:"NH₃ + HNO₃ → NH₄NO₃",
    process:"Neutralization + Prilling", industry:"Agrochemicals & Fertilizers",
    conditions:"140°C neutralization, prilling tower or granulator",
    toxins:["N₂O from soil application — GWP 298× CO₂","Nitrate leaching to groundwater (WHO limit: 50 mg/L)","Eutrophication of rivers and coastal zones","Dust from prilling (respiratory hazard)"],
    toxinLevel:"HIGH", greenScore:2, sustainabilityRating:"POOR",
    greenPrinciples:[1,5,10,11],
    info:"Nitrogen runoff from AN fertilizer causes eutrophication in 400+ ocean dead zones",
    realWorldImpact:"Gulf of Mexico dead zone (22,000 km²) caused entirely by Mississippi nitrogen runoff",
    greenAlternatives:[
      "Slow-release polymer-coated urea — 30% less N₂O, same agronomic effect",
      "DMPP nitrification inhibitor — blocks N₂O formation pathway by 50%",
      "Biochar soil amendment improves N retention, cuts leaching by 40%",
      "Fertigation (drip irrigation + dissolved fertilizer) — 60% less application needed"
    ],
    annualWaste:"~400 ocean dead zones worldwide linked to nitrogen runoff"
  },
  {
    id:"A004", reactants:"Glycine + HCHO + H₃PO₃", product:"Glyphosate Herbicide",
    equation:"Glycine + formaldehyde + phosphorous acid → Glyphosate (C₃H₈NO₅P)",
    process:"Strecker-type Phosphonomethylation", industry:"Agrochemicals & Fertilizers",
    conditions:"70–80°C, acidic medium, multiple steps",
    toxins:["Formaldehyde (IARC Group 1 carcinogen) as intermediate","AMPA degradation product — persistent in soil and water","Phosphonate effluent streams","Disrupts non-target plant microbiome and soil biology"],
    toxinLevel:"HIGH", greenScore:2, sustainabilityRating:"POOR",
    greenPrinciples:[1,3,4,12],
    info:"World's most used herbicide — 8.6 billion kg applied since 1974",
    realWorldImpact:"Glyphosate detected in 70% of US Midwest rainfall samples; in 80% of food items tested",
    greenAlternatives:[
      "Robotic laser weeding (Carbon Robotics LaserWeeder) — zero herbicide, AI-guided",
      "Allelopathic cover crop rotation — natural chemical weed suppression",
      "Fermentation-derived bio-herbicide (Phoma macrostoma) from natural fungi",
      "Integrated pest management reduces herbicide dependency by 60%"
    ],
    annualWaste:"8.6 billion kg cumulative soil and water contamination"
  },

  // ══════════════════════════════════════════════════════
  // PULP & PAPER
  // ══════════════════════════════════════════════════════
  {
    id:"PP001", reactants:"Wood chips + NaOH + Na₂S (white liquor)", product:"Cellulose Pulp",
    equation:"Lignin bonds + NaOH/Na₂S → soluble lignin fragments + cellulose",
    process:"Kraft (Sulphate) Pulping", industry:"Pulp & Paper",
    conditions:"170°C, 7–8 bar, 1.5–3 hr cook",
    toxins:["TRS gases: H₂S, CH₃SH, dimethyl sulfide (odor, toxicity)","Black liquor (organic waste, ~50% of wood becomes waste)","AOX in bleaching effluent","Dioxins from chlorine bleaching stages"],
    toxinLevel:"HIGH", greenScore:4, sustainabilityRating:"POOR",
    greenPrinciples:[5,6,7,10,11],
    info:"Kraft = 80% of global chemical pulp; black liquor is largest biomass energy source",
    realWorldImpact:"Pulp mills are among top 5 contributors to river dioxin contamination in Asia",
    greenAlternatives:[
      "Black liquor gasification for renewable power + syngas — energy self-sufficient mills",
      "Organosolv pulping with ethanol — recyclable solvent, no sulfur compounds",
      "Biopulping with white-rot fungi — 30% less energy, no TRS emissions",
      "Total Chlorine Free (TCF) bleaching with O₃/H₂O₂ — eliminates dioxins"
    ],
    annualWaste:"200M+ tonnes black liquor annually — major organic waste stream"
  },
  {
    id:"PP002", reactants:"Waste Paper + NaOH + Na₂SiO₃", product:"Recycled Pulp",
    equation:"Ink + fiber bonds + NaOH → de-inked pulp + ink particles (flotation)",
    process:"Deinking and Recycling", industry:"Pulp & Paper",
    conditions:"50–60°C, pH 10–11, flotation cells",
    toxins:["Deinking sludge (ink, clay, fibers — difficult to dispose)","Surfactant-contaminated effluent","Sodium silicate scaling in equipment","Organic micropollutants from inks (photoinitiators)"],
    toxinLevel:"MEDIUM", greenScore:7, sustainabilityRating:"GOOD",
    greenPrinciples:[5,7,9,10],
    info:"Paper recycling saves 17 trees and 26,000 L water per tonne vs virgin",
    realWorldImpact:"Each tonne of recycled paper prevents 3 tonnes CO₂ vs landfill",
    greenAlternatives:[
      "Enzymatic deinking with cellulases — eliminates NaOH, milder pH",
      "Plasma-based ink removal — dry process, zero effluent",
      "Deinking sludge as biomass boiler fuel — energy recovery",
      "Water circuit closure to reduce effluent volume by 80%"
    ],
    annualWaste:"~50M tonnes deinking sludge globally/year"
  },

  // ══════════════════════════════════════════════════════
  // CEMENT & CONSTRUCTION CHEMICALS
  // ══════════════════════════════════════════════════════
  {
    id:"C001", reactants:"CaCO₃ + Clay (SiO₂, Al₂O₃, Fe₂O₃)", product:"Portland Cement Clinker",
    equation:"CaCO₃ → CaO + CO₂ (then CaO + SiO₂ → Ca₂SiO₄ etc.)",
    process:"Rotary Kiln Calcination", industry:"Cement & Construction",
    conditions:"1450°C rotary kiln, 1 kg coal per kg clinker",
    toxins:["CO₂ (~0.9 tonne per tonne cement — process + fuel combined)","NOₓ from high-temperature combustion","SO₂ from fuel sulfur","Heavy metals from raw materials (Cr, Hg) in particulates"],
    toxinLevel:"VERY HIGH", greenScore:2, sustainabilityRating:"CRITICAL",
    greenPrinciples:[5,7,10,12],
    info:"Cement = 8% of global CO₂ — more than aviation + shipping combined",
    realWorldImpact:"4 billion tonnes cement/year generates ~4 billion tonnes CO₂",
    greenAlternatives:[
      "Supplementary cementitious materials (SCM): fly ash, GGBS replace 40–70% clinker",
      "Geopolymer cement from alkali-activated slag/fly ash — 80% lower CO₂",
      "Solidia® low-calcium silicate cement + CO₂ curing — absorbs CO₂ as it hardens",
      "Carbon capture at kiln (oxyfuel or calcium looping) for unavoidable process CO₂"
    ],
    annualWaste:"4 billion tonnes CO₂/year — process emissions are chemically unavoidable without new chemistry"
  },
  {
    id:"C002", reactants:"CaO + H₂O", product:"Calcium Hydroxide (Slaked Lime)",
    equation:"CaO + H₂O → Ca(OH)₂  ΔH = −65 kJ/mol (exothermic)",
    process:"Lime Hydration", industry:"Cement & Construction",
    conditions:"Exothermic reaction — temperature reaches 150°C+",
    toxins:["Caustic lime dust (pH >12) — severe respiratory and eye hazard","Calcium oxide particulate (CaO) — reactive","Calcium hydroxide in runoff raises water pH, kills aquatic life"],
    toxinLevel:"MEDIUM", greenScore:6, sustainabilityRating:"MODERATE",
    greenPrinciples:[1,3,12],
    info:"Widely used for water treatment, flue gas desulfurization, and pH control",
    realWorldImpact:"Lime dust is a leading cause of occupational lung disease in construction workers",
    greenAlternatives:[
      "Magnesium oxide (MgO) as lower-temperature alternative for some applications",
      "Enclosed hydration systems — zero dust emissions, heat recovery",
      "Lime from industrial byproducts (carbide waste, paper mill residues)",
      "Biosorbents (eggshell, shellfish waste) for water pH adjustment"
    ],
    annualWaste:"Significant occupational health burden; runoff pH impact on water bodies"
  },

  // ══════════════════════════════════════════════════════
  // FOOD & BEVERAGE PROCESSING
  // ══════════════════════════════════════════════════════
  {
    id:"F001", reactants:"Glucose (C₆H₁₂O₆) + Yeast (Saccharomyces cerevisiae)", product:"Ethanol + CO₂",
    equation:"C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂",
    process:"Alcoholic Fermentation", industry:"Food & Beverage",
    conditions:"30–35°C, anaerobic, pH 4–5, 2–7 days",
    toxins:["Spent yeast biomass (high BOD waste)","Distillery stillage (vinasse) — BOD 50,000+ mg/L","CO₂ in confined spaces (asphyxiation risk)","Ethanol vapor (flammable)"],
    toxinLevel:"MEDIUM", greenScore:7, sustainabilityRating:"GOOD",
    greenPrinciples:[7,9,10,11],
    info:"Largest volume bio-process globally — food, beverage, and biofuel",
    realWorldImpact:"Untreated distillery vinasse discharged to rivers causes catastrophic oxygen depletion",
    greenAlternatives:[
      "Vinasse as anaerobic digestion feedstock — biogas energy recovery, recovers nutrients",
      "Spent yeast as animal feed protein — high value from waste stream",
      "Continuous fermentation with cell recycling — 40% more efficient",
      "CO₂ capture and use in carbonated beverages or as C-feedstock"
    ],
    annualWaste:"Billions of litres vinasse/year globally — undertreated in developing world"
  },
  {
    id:"F002", reactants:"Vegetable Oil + NaOH/KOH + Methanol", product:"Biodiesel (FAME) + Glycerol",
    equation:"Triglyceride + 3CH₃OH → 3 FAME (biodiesel) + Glycerol",
    process:"Transesterification", industry:"Food & Beverage",
    conditions:"60°C, alkali catalyst, methanol:oil ratio 6:1, 1 hr",
    toxins:["Methanol (toxic, volatile — risk of vapor inhalation)","Crude glycerol (contaminated with methanol, soap, catalyst — difficult to dispose)","Alkaline wastewater from washing steps","Soap formation as unwanted byproduct"],
    toxinLevel:"MEDIUM", greenScore:6, sustainabilityRating:"MODERATE",
    greenPrinciples:[1,5,7,9,10],
    info:"Crude glycerol from biodiesel glut — 10 kg glycerol per 100 kg biodiesel",
    realWorldImpact:"Glycerol oversupply from biodiesel boom created a global disposal problem",
    greenAlternatives:[
      "Enzymatic (lipase) transesterification — no alkali, mild conditions, cleaner glycerol",
      "Supercritical methanol process — no catalyst, higher purity glycerol",
      "Glycerol conversion to propylene glycol (catalytic hydrogenation) — valuable product",
      "Used cooking oil feedstock (UCO biodiesel) vs food-grade oil — avoids food competition"
    ],
    annualWaste:"~4M tonnes crude contaminated glycerol/year from global biodiesel production"
  },

  // ══════════════════════════════════════════════════════
  // ELECTRONICS & SEMICONDUCTORS
  // ══════════════════════════════════════════════════════
  {
    id:"E001", reactants:"SiH₄ (Silane) + substrate", product:"Thin-film Silicon Wafer",
    equation:"SiH₄ → Si (film) + 2H₂ (CVD at ~650°C)",
    process:"Chemical Vapor Deposition (CVD)", industry:"Electronics & Semiconductors",
    conditions:"600–900°C, low pressure reactor, ultra-pure gas",
    toxins:["Silane (SiH₄) — pyrophoric, explodes on contact with air","PFC cleaning gases (NF₃, SF₆ — GWP 17,200 and 22,800 ×CO₂)","HF acid in wafer cleaning steps","TEOS (tetraethylorthosilicate) — reproductive toxin"],
    toxinLevel:"HIGH", greenScore:4, sustainabilityRating:"POOR",
    greenPrinciples:[1,3,4,12],
    info:"Semiconductor fab PFC emissions are a tiny volume but enormous GWP impact",
    realWorldImpact:"NF₃ from chip fabs has atmospheric lifetime >500 years; growing problem",
    greenAlternatives:[
      "Remote plasma cleaning to fully decompose NF₃ before release",
      "Point-of-use abatement scrubbers for pyrophoric gas streams",
      "F₂/HF substitution with less persistent fluorinated compounds",
      "Atomic layer deposition (ALD) — uses 99% less precursor gas than CVD"
    ],
    annualWaste:"PFC GWP impact equivalent to millions of tonnes CO₂/year"
  },
  {
    id:"E002", reactants:"Printed Circuit Board + HNO₃/H₂SO₄", product:"Recovered Copper + Precious Metals",
    equation:"Cu + 4HNO₃(conc) → Cu(NO₃)₂ + 2NO₂ + 2H₂O",
    process:"Hydrometallurgical E-Waste Recovery", industry:"Electronics & Semiconductors",
    conditions:"Room temp to 80°C, strong acid leach, solvent extraction",
    toxins:["NO₂ fumes (brown gas — severe respiratory toxin)","Lead, cadmium, mercury solubilized in acid leach","Brominated flame retardant residues (PBDEs)","Acidic effluent with dissolved heavy metals"],
    toxinLevel:"VERY HIGH", greenScore:3, sustainabilityRating:"POOR",
    greenPrinciples:[1,3,10,12],
    info:"E-waste is the fastest growing waste stream — 57M tonnes/year, only 20% recycled formally",
    realWorldImpact:"Agbogbloshie (Ghana) informal e-waste burning causes soil Pb levels 100× safe limit",
    greenAlternatives:[
      "Bioleaching with Chromobacterium violaceum for gold extraction — no cyanide/acid",
      "Ionic liquid selective metal dissolution — targets one metal at a time, recyclable",
      "Electrostatic separation for dry physical recovery — no chemicals",
      "Design for disassembly: modular electronics that can be repaired and upgraded"
    ],
    annualWaste:"57M tonnes e-waste/year with <20% formal recovery rate"
  },

  // ══════════════════════════════════════════════════════
  // MINING & MINERALS
  // ══════════════════════════════════════════════════════
  {
    id:"MI001", reactants:"Gold ore + NaCN + O₂", product:"Gold",
    equation:"4Au + 8NaCN + O₂ + 2H₂O → 4Na[Au(CN)₂] + 4NaOH",
    process:"Cyanide Heap Leaching", industry:"Mining & Minerals",
    conditions:"Ambient temperature, alkaline pH >10, heap or tank leach",
    toxins:["Sodium cyanide (acutely lethal >1 mg/L in water)","Cyanide tailings ponds (dam failure risk)","Heavy metal contamination in waste rock","Thiocyanate and metal-cyanide complexes in effluent"],
    toxinLevel:"VERY HIGH", greenScore:1, sustainabilityRating:"CRITICAL",
    greenPrinciples:[1,3,4,12],
    info:"Cyanide is used in ~75% of global gold mining — extremely toxic if released",
    realWorldImpact:"Baia Mare (Romania) cyanide spill 2000 — killed all fish in 2000 km of rivers across 5 countries",
    greenAlternatives:[
      "Thiosulfate leaching — non-toxic, approved at Barrick Gold's Nevada operation",
      "Glycine leaching — amino acid-based, biodegradable, selective for gold",
      "Chloride/bromine leaching systems — lower toxicity than cyanide",
      "Urban gold mining from e-waste — 40× richer than ore, no land disturbance"
    ],
    annualWaste:"Millions of litres cyanide-contaminated tailings — catastrophic if dam fails"
  },
  {
    id:"MI002", reactants:"Lithium brine (LiCl solution)", product:"Lithium Carbonate (battery-grade)",
    equation:"LiCl brine → Li₂CO₃ via solar evaporation + carbonate precipitation",
    process:"Solar Evaporation + Precipitation", industry:"Mining & Minerals",
    conditions:"Solar evaporation 12–24 months, then chemical precipitation",
    toxins:["Depleted brine (high Mg, K, B — toxic to local vegetation)","Freshwater consumption in hyper-arid regions (water stress)","Soda ash (Na₂CO₃) reagent waste","Manganese filter cake waste"],
    toxinLevel:"MEDIUM", greenScore:5, sustainabilityRating:"MODERATE",
    greenPrinciples:[5,10,11,12],
    info:"Lithium demand growing 30%/year for EV batteries — supply sustainability critical",
    realWorldImpact:"Atacama brine extraction reduced flamingo habitat by 40% and lowered water table",
    greenAlternatives:[
      "Direct lithium extraction (DLE) — 90% less water than evaporation, 10× faster",
      "Geothermal brine co-extraction: extract Li while generating renewable energy",
      "Lithium battery recycling (LithoRec, Li-Cycle) — secondary supply without mining",
      "Seawater lithium extraction via selective sorbents — ocean-abundant source"
    ],
    annualWaste:"Massive water footprint in water-scarce Andes; habitat disruption"
  },

  // ══════════════════════════════════════════════════════
  // CHLOR-ALKALI & BASIC CHEMICALS
  // ══════════════════════════════════════════════════════
  {
    id:"CA001", reactants:"NaCl (brine) + H₂O + electricity", product:"NaOH + Cl₂ + H₂",
    equation:"2NaCl + 2H₂O → 2NaOH + Cl₂ + H₂ (electrolysis)",
    process:"Chlor-Alkali Electrolysis (membrane cell)", industry:"Chlor-Alkali & Basic Chemicals",
    conditions:"90°C, 3–4 V, ion-exchange membrane, continuous",
    toxins:["Mercury from legacy Hg-cell plants (legacy contamination)","Chlorine gas (Cl₂) — acutely toxic, war gas","Chlorinated organics from Cl₂ side reactions","Brine treatment sludge with heavy metals"],
    toxinLevel:"HIGH", greenScore:4, sustainabilityRating:"POOR",
    greenPrinciples:[1,3,10,12],
    info:"Largest electrochemical industry; Cl₂ used for PVC, pharmaceuticals, disinfection",
    realWorldImpact:"Mercury-cell chlor-alkali plants contaminated Minamata Bay — thousands with neurological damage",
    greenAlternatives:[
      "Oxygen-depolarized cathode (ODC) technology — 30% less energy consumption",
      "All membrane-cell technology — completely eliminates mercury",
      "On-site use of H₂ in fuel cells for plant power (H₂ byproduct utilization)",
      "Electrochemical oxidation with O₃ replacing Cl₂ for some applications"
    ],
    annualWaste:"Mercury legacy contamination at former Hg-cell sites worldwide"
  },
  {
    id:"CA002", reactants:"SO₂ + O₂ (Contact Process)", product:"Sulfuric Acid (H₂SO₄)",
    equation:"2SO₂ + O₂ → 2SO₃  then  SO₃ + H₂O → H₂SO₄",
    process:"Double Contact Process", industry:"Chlor-Alkali & Basic Chemicals",
    conditions:"450–600°C, V₂O₅ catalyst, 4 absorption stages",
    toxins:["SO₂ tail gas (even 0.1% causes acid rain)","Spent V₂O₅ catalyst (toxic)","Acid mist emissions","Acidic scrubber effluent"],
    toxinLevel:"MEDIUM", greenScore:5, sustainabilityRating:"MODERATE",
    greenPrinciples:[1,5,7,9],
    info:"~270M tonnes/year H₂SO₄ — most produced industrial chemical globally",
    realWorldImpact:"H₂SO₄ plants historically caused widespread acid rain in surrounding regions",
    greenAlternatives:[
      "SO₂ from smelter off-gas captured to make H₂SO₄ — waste valorization",
      "Electrochemical SO₂ oxidation for lower-temperature operation",
      "Oleum-free storage/distribution to reduce transport spill risk",
      "Closed-loop SO₃ absorption with >99.9% efficiency modern plants"
    ],
    annualWaste:"SO₂ tail gas managed well in modern plants; older facilities remain problematic"
  },

  // ══════════════════════════════════════════════════════
  // PLASTICS & POLYMERS
  // ══════════════════════════════════════════════════════
  {
    id:"PL001", reactants:"C₂H₄ (ethylene)", product:"Polyethylene (HDPE/LDPE)",
    equation:"n(C₂H₄) → (−CH₂−CH₂−)ₙ",
    process:"Ziegler-Natta or Phillips Polymerization", industry:"Plastics & Polymers",
    conditions:"60–300°C, 1–300 bar, Ti/Cr catalyst",
    toxins:["Hexane/heptane solvent residues in product","Spent Ziegler-Natta catalyst (Ti, Al — reactive)","Ethylene monomer (flammable, asphyxiant)","Microplastic shedding (persistent in environment)"],
    toxinLevel:"MEDIUM", greenScore:4, sustainabilityRating:"POOR",
    greenPrinciples:[1,5,9,12],
    info:"Largest volume plastic — 120M tonnes/year; >90% ends in landfill or environment",
    realWorldImpact:"8 million tonnes plastic enters oceans annually; Great Pacific Garbage Patch = 1.6M km²",
    greenAlternatives:[
      "Bio-PE from sugarcane ethanol dehydration — carbon-neutral, same properties",
      "Chemical recycling (pyrolysis, gasification) for hard-to-recycle PE",
      "PHA bioplastics from bacterial fermentation — fully marine biodegradable",
      "Extended Producer Responsibility (EPR) legislation to fund recycling infrastructure"
    ],
    annualWaste:"300M+ tonnes plastic waste/year with <10% recycled globally"
  },
  {
    id:"PL002", reactants:"Lactic Acid from corn starch", product:"Polylactic Acid (PLA)",
    equation:"n(C₃H₆O₃) → (C₃H₄O₂)ₙ + nH₂O (ring-opening polymerization)",
    process:"Fermentation + Ring-Opening Polymerization", industry:"Plastics & Polymers",
    conditions:"Microbial fermentation 37°C, then ROP at 130°C with Sn catalyst",
    toxins:["Tin(II) octoate catalyst (tin-organic — toxic to aquatic organisms)","Lactic acid fermentation broth (high BOD)","Organic solvent in precipitation steps","CO₂ from composting (but biogenic, carbon neutral)"],
    toxinLevel:"LOW", greenScore:8, sustainabilityRating:"GOOD",
    greenPrinciples:[7,9,10,11],
    info:"PLA is compostable but only in industrial composting (58°C+) — not home compostable",
    realWorldImpact:"PLA reduces fossil carbon vs conventional plastic but needs composting infrastructure",
    greenAlternatives:[
      "Enzymatic ROP — replaces tin catalyst with lipase, non-toxic",
      "Second-generation feedstock: PLA from food waste or cellulosic sugars",
      "Home-compostable PLA grades via copolymerization with PBAT",
      "Mechanical recycling of PLA with dedicated sorting stream"
    ],
    annualWaste:"Lower footprint vs petroplastics; tin catalyst disposal remains issue"
  },
  {
    id:"PL003", reactants:"Diols + Diisocyanates", product:"Polyurethane (PU)",
    equation:"HO-R-OH + OCN-R'-NCO → Polyurethane (−O−R−O−CO−NH−R'−NH−CO−)ₙ",
    process:"Polyaddition", industry:"Plastics & Polymers",
    conditions:"Room temp to 100°C, tin or amine catalyst",
    toxins:["MDI and TDI isocyanates (respiratory sensitizers — occupational asthma)","HCFC and HFC blowing agents (ozone depletion / GWP)","Amine catalyst residues","Non-recyclable thermoset foam — landfill only"],
    toxinLevel:"HIGH", greenScore:3, sustainabilityRating:"POOR",
    greenPrinciples:[1,3,5,9,12],
    info:"PU used in mattresses, insulation, car seats — very difficult to recycle",
    realWorldImpact:"Isocyanate exposure is leading cause of occupational asthma in manufacturing workers",
    greenAlternatives:[
      "CO₂-blown PU foam (Bayer's Cardyon® technology) — uses CO₂ as building block",
      "Non-isocyanate polyurethanes (NIPU) from cyclic carbonates — safer synthesis",
      "Bio-based polyols from castor oil, soybean oil replacing petrochemical diols",
      "Chemical glycolysis recycling of PU foam to recover polyols"
    ],
    annualWaste:"~27M tonnes PU waste/year with near-zero recycling rate"
  }
];

// Export for use
if (typeof module !== 'undefined') module.exports = REACTIONS_DB;
