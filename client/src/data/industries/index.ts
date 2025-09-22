import { IndustryRegistry } from './types';
import { hvacData } from './hvac';
import { plumbingData } from './plumbing';
import { electricalData } from './electrical';
import { landscapingData } from './landscaping';
import { roofingData } from './roofing';
import { paintingData } from './painting';
import { generalContractingData } from './general-contracting';
import { cleaningServicesData } from './cleaning-services';
import { restaurantsCafesData } from './restaurants-cafes';
import { beautySalonsSpasData } from './beauty-salons-spas';
import { barbershopsData } from './barbershops';
import { gymsPersonalTrainersData } from './gyms-personal-trainers';
import { wellnessLifeCoachesData } from './wellness-life-coaches';
import { petGroomingBoardingData } from './pet-grooming-boarding';
import { brickMortarRetailData } from './brick-mortar-retail';
import { ecommerceBrandsData } from './ecommerce-brands';
import { cannabisRetailData } from './cannabis-retail';
import { specialtyFoodMakersData } from './specialty-food-makers';
import { localBoutiquesData } from './local-boutiques';
import { realEstateAgenciesData } from './real-estate-agencies';
import { lawFirmsData } from './law-firms';
import { accountingTaxFirmsData } from './accounting-tax-firms';
import { insuranceBrokersData } from './insurance-brokers';
import { hrRecruitingFirmsData } from './hr-recruiting-firms';
import { businessConsultantsData } from './business-consultants';
import { golfCoursesData } from './golf-courses';
import { storageCompaniesData } from './storage-companies';
import { remodelingRenovationData } from './remodeling-renovation';

// Industry registry - centralized management of all industry data
export const industryRegistry: IndustryRegistry = {
  hvac: hvacData,
  plumbing: plumbingData,
  electrical: electricalData,
  landscaping: landscapingData,
  roofing: roofingData,
  painting: paintingData,
  'general-contracting': generalContractingData,
  'cleaning-services': cleaningServicesData,
  'restaurants-cafes': restaurantsCafesData,
  'beauty-salons-spas': beautySalonsSpasData,
  barbershops: barbershopsData,
  'gyms-personal-trainers': gymsPersonalTrainersData,
  'wellness-life-coaches': wellnessLifeCoachesData,
  'pet-grooming-boarding': petGroomingBoardingData,
  'brick-mortar-retail': brickMortarRetailData,
  'ecommerce-brands': ecommerceBrandsData,
  'cannabis-retail': cannabisRetailData,
  'specialty-food-makers': specialtyFoodMakersData,
  'local-boutiques': localBoutiquesData,
  'real-estate-agencies': realEstateAgenciesData,
  'law-firms': lawFirmsData,
  'accounting-tax-firms': accountingTaxFirmsData,
  'insurance-brokers': insuranceBrokersData,
  'hr-recruiting-firms': hrRecruitingFirmsData,
  'business-consultants': businessConsultantsData,
  'golf-courses': golfCoursesData,
  'storage-companies': storageCompaniesData,
  'remodeling-renovation': remodelingRenovationData
};

// Helper functions
export function getIndustryData(slug: string) {
  return industryRegistry[slug];
}

export function getAllIndustries() {
  return Object.values(industryRegistry);
}

export function getIndustryBySlug(slug: string) {
  const industry = industryRegistry[slug];
  if (!industry) {
    throw new Error(`Industry with slug '${slug}' not found`);
  }
  return industry;
}

export function isValidIndustrySlug(slug: string): boolean {
  return slug in industryRegistry;
}

// Export types for use in components
export type { IndustryData } from './types';