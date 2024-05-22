const mongoose = require("mongoose");

const symptomSchema = new mongoose.Schema({
  chestPain: { type: Boolean, default: null },
  cough: { type: Boolean, default: null },
  shortnessOfBreath: { type: Boolean, default: null },
  wheezing: { type: Boolean, default: null },
  fatigue: { type: Boolean, default: null },
  lightheadedness: { type: Boolean, default: null },
  drowsiness: { type: Boolean, default: null },
  headache: { type: Boolean, default: null },
  nausea: { type: Boolean, default: null },
  vomiting: { type: Boolean, default: null },
  bloodInVomit: { type: Boolean, default: null },
  yellowishVomit: { type: Boolean, default: null },
  chills: { type: Boolean, default: null },
  fever: { type: Boolean, default: null },
  stiffness: { type: Boolean, default: null },
  neckStiffness: { type: Boolean, default: null },
  sputum: { type: Boolean, default: null },
  yellowishGreenSputum: { type: Boolean, default: null },
  rustColoredSputum: { type: Boolean, default: null },
  whitishClearSputum: { type: Boolean, default: null },
  rashesSkinProblems: { type: Boolean, default: null },
  bluenessInSkin: { type: Boolean, default: null },
  lossOfAppetite: { type: Boolean, default: null },
  allergies: { type: Boolean, default: null },
  jointPains: { type: Boolean, default: null },
  rednessInBackOfThroat: { type: Boolean, default: null },
  thrombosis: { type: Boolean, default: null },
  weightLoss: { type: Boolean, default: null },
  weightGain: { type: Boolean, default: null },
  lossOrBreakingOfVoice: { type: Boolean, default: null },
  lossOfSmell: { type: Boolean, default: null },
  lossOfTaste: { type: Boolean, default: null },
  soreThroat: { type: Boolean, default: null },
  soreStomach: { type: Boolean, default: null },
  throatPain: { type: Boolean, default: null },
  sore: { type: Boolean, default: null },
  abdominalPain: { type: Boolean, default: null },
  runnyNose: { type: Boolean, default: null },
  stuffyNose: { type: Boolean, default: null },
  bodyMuscleAches: { type: Boolean, default: null },
  coughingUpBlood: { type: Boolean, default: null },
  swelling: { type: Boolean, default: null },
  smoke: { type: Boolean, default: null },
  diabetes: { type: Boolean, default: null },
  flu: { type: Boolean, default: null },
  infection: { type: Boolean, default: null },
  earInfection: { type: Boolean, default: null },
  nasalObstruction: { type: Boolean, default: null },
  nasalCongestion: { type: Boolean, default: null },
  tractInfection: { type: Boolean, default: null },
  toxicChemical: { type: Boolean, default: null },
  exposureToDustOrSmokeOrAnimals: { type: Boolean, default: null },
  sexuallyTransmittedInfection: { type: Boolean, default: null },
  chestInfection: { type: Boolean, default: null },
  viralInfection: { type: Boolean, default: null },
  viralSymptoms: { type: Boolean, default: null },
  congestiveHeartFailure: { type: Boolean, default: null },
  tightFeelingInTheChest: { type: Boolean, default: null },
  pneumonia: { type: Boolean, default: null },
  cold: { type: Boolean, default: null },
  dryCough: { type: Boolean, default: null },
  wetCough: { type: Boolean, default: null },
  coughingUpYellowOrGreenMucus: { type: Boolean, default: null },
  chronicCough: { type: Boolean, default: null },
  greenishCough: { type: Boolean, default: null },
  aCoughThatLastsMoreThanThreeWeek: { type: Boolean, default: null },
  itchiness: { type: Boolean, default: null },
  itchyEyes: { type: Boolean, default: null },
  itchyEar: { type: Boolean, default: null },
  itchyNose: { type: Boolean, default: null },
  redEye: { type: Boolean, default: null },
  nightSweats: { type: Boolean, default: null },
  palpitation: { type: Boolean, default: null },
  phlegm: { type: Boolean, default: null },
  asthma: { type: Boolean, default: null },
  bowel: { type: Boolean, default: null },
  constipation: { type: Boolean, default: null },
  diarrhea: { type: Boolean, default: null },
  fainting: { type: Boolean, default: null },
  heartRacing: { type: Boolean, default: null },
  pastSurgeries: { type: Boolean, default: null },
  earDischarge: { type: Boolean, default: null },
  whitishEarDischarge: { type: Boolean, default: null },
  yellowishEarDischarge: { type: Boolean, default: null },
  eyeDischarge: { type: Boolean, default: null },
  alcohol: { type: Boolean, default: null },
  worsenWithExercise: { type: Boolean, default: null },
  worsenWithCold: { type: Boolean, default: null },
  changesInVision: { type: Boolean, default: null },
  changesInVoice: { type: Boolean, default: null },
  changesInHearing: { type: Boolean, default: null },
  lungConditions: { type: Boolean, default: null },
  geneticDiseases: { type: Boolean, default: null },
  familyHistoryOfAsthma: { type: Boolean, default: null },
  familyHistoryOfEczema: { type: Boolean, default: null },
  familyHistoryOfAllergy: { type: Boolean, default: null },
  familyHistoryOfCataract: { type: Boolean, default: null },
  familyHistoryOfMigraine: { type: Boolean, default: null },
  familyHistoryOfRheumatoidArthritis: { type: Boolean, default: null },
  familyHistoryOfLupus: { type: Boolean, default: null },
  familyHistoryOfDiabetes: { type: Boolean, default: null },
  familyHistoryOfHighBloodPressure: { type: Boolean, default: null },
  familyHistoryOfHighCholesterol: { type: Boolean, default: null },
  familyHistoryOfFamilialHypercholesterolemia: { type: Boolean, default: null },
  familyHistoryOfCrohnsDisease: { type: Boolean, default: null },
  familyHistoryOfUlcerativeColitis: { type: Boolean, default: null },
  familyHistoryOfEarIssue: { type: Boolean, default: null },
  familyHistoryOfStroke: { type: Boolean, default: null },
  familyHistoryOfHormoneProblem: { type: Boolean, default: null },
  familyHistoryOfDepression: { type: Boolean, default: null },
  familyHistoryOfDigestiveProblem: { type: Boolean, default: null },
  familyHistoryOfCeliacDisease: { type: Boolean, default: null },
  familyHistoryOfLiverDisease: { type: Boolean, default: null },
  familyHistoryOfBleedingClottingDisorder: { type: Boolean, default: null },
  familyHistoryOfDeepVeinThrombosis: { type: Boolean, default: null },
  familyHistoryOfCancer: { type: Boolean, default: null },
  familyHistoryOfLungCondition: { type: Boolean, default: null },
  familyHistoryOfHeartCondition: { type: Boolean, default: null },
  troubleBreathing: { type: Boolean, default: null },
  calfPain: { type: Boolean, default: null },
  allergiesToSteroid: { type: Boolean, default: null },
  vitamin: { type: Boolean, default: null },
  medicationForCrohnsDisease: { type: Boolean, default: null },
  medicationForCOPD: { type: Boolean, default: null },
  medicationForPain: { type: Boolean, default: null },
  medicationForCold: { type: Boolean, default: null },
  medicationForCough: { type: Boolean, default: null },
  medicationForAsthma: { type: Boolean, default: null },
  medicationForStomachAcidReflux: { type: Boolean, default: null },
  medicationForCholesterol: { type: Boolean, default: null },
  medicationForDiabetes: { type: Boolean, default: null },
  medicationForBloodPressure: { type: Boolean, default: null },
  medicationForAllergies: { type: Boolean, default: null },
  medicationForEczema: { type: Boolean, default: null },
  medicationForInfection: { type: Boolean, default: null },
  medicationForBirthControl: { type: Boolean, default: null },
  medicationForSexualDisease: { type: Boolean, default: null },
  medicationForThyroid: { type: Boolean, default: null },
  medicationForAnxiety: { type: Boolean, default: null },
  medicationForSeizure: { type: Boolean, default: null },
  betaAgonistInhaler: { type: Boolean, default: null },
  drugsOrMarijuana: { type: Boolean, default: null },
  travel: { type: Boolean, default: null },
  bronchiolitis: { type: Boolean, default: null },
  swollenAreasOnHisNeck: { type: Boolean, default: null },
  swollenLimbs: { type: Boolean, default: null },
  painWithSwallowing: { type: Boolean, default: null },
  COPD: { type: Boolean, default: null },
  GERD: { type: Boolean, default: null },
  urinaryProblems: { type: Boolean, default: null },
  highBloodPressure: { type: Boolean, default: null },
  lowerBackPain: { type: Boolean, default: null },
  bluishSkin: { type: Boolean, default: null },
  rapidHeartbeat: { type: Boolean, default: null },
  snore: { type: Boolean, default: null },
  sharpPainWhileBreathing: { type: Boolean, default: null },
  muscleWeakness: { type: Boolean, default: null },
  bloodInStool: { type: Boolean, default: null },
  darkOrTarryLookingStool: { type: Boolean, default: null },
  highCholesterol: { type: Boolean, default: null },
  chestTrauma: { type: Boolean, default: null },
  nasalDischarge: { type: Boolean, default: null },
  clearNasalDischarge: { type: Boolean, default: null },
  yellowNasalDischarge: { type: Boolean, default: null },
  medicalCondition: { type: Boolean, default: null },
  hospitalized: { type: Boolean, default: null },
  sickEnvironment: { type: Boolean, default: null },
  sexuallyActive: { type: Boolean, default: null },
  vaginalDiscomfortDischarge: { type: Boolean, default: null },
  insomnia: { type: Boolean, default: null },
  itchyThroat: { type: Boolean, default: null },
  pain: { type: Boolean, default: null },
  earPain: { type: Boolean, default: null },
  eyePain: { type: Boolean, default: null },
  eczema: { type: Boolean, default: null },
  seizure: { type: Boolean, default: null },
  sinus: { type: Boolean, default: null },
  birthControl: { type: Boolean, default: null },
  birthComplications: { type: Boolean, default: null },
  sneeze: { type: Boolean, default: null },
  painInCheeksWhenBendOver: { type: Boolean, default: null },
  stress: { type: Boolean, default: null },
  runnyEyes: { type: Boolean, default: null },
  exposureForCovid: { type: Boolean, default: null },
  memoryLoss: { type: Boolean, default: null },
  fattyLiver: { type: Boolean, default: null },
  acidReflux: { type: Boolean, default: null },
  earSwelling: { type: Boolean, default: null },
  lossOfBalanceOrCoordination: { type: Boolean, default: null },
  numbnessOrTingling: { type: Boolean, default: null },
  excessiveSweating: { type: Boolean, default: null },
  pressureInFace: { type: Boolean, default: null },
  pressureInHead: { type: Boolean, default: null },
  anxiety: { type: Boolean, default: null },
  panicAttacks: { type: Boolean, default: null },
  heartAttack: { type: Boolean, default: null },
  stroke: { type: Boolean, default: null },
  depression: { type: Boolean, default: null },
  obese: { type: Boolean, default: null },
  deepVeinThrombosis: { type: Boolean, default: null },
  pulmonaryEmbolism: { type: Boolean, default: null },
  kidneyProblem: { type: Boolean, default: null },
  hypothyroid: { type: Boolean, default: null },
  worsenWithLayingDown: { type: Boolean, default: null },
  migraines: { type: Boolean, default: null },
  arthritis: { type: Boolean, default: null },
  osteoporosis: { type: Boolean, default: null },
  crohnDisease: { type: Boolean, default: null },
  immunizations: { type: Boolean, default: null },
});

const Symptom = mongoose.model("Symptom", symptomSchema);

module.exports = Symptom;