import { LanguageListResponse } from "../language/languageListResponse";
import { SchoolListResponse } from "../school/schoolListResponse";
import { SkillListResponse } from "../skill/skillListResponse";
import { CandidateJobExperienceListResponce } from "./candidate-experience/candidateExperienceList";

export interface Candidate{
    id:number
    firstName:string
    lastName:string
    email:string
    password:string
    birthYear:number
    nationalityId:string
    candidateJobExperiences: CandidateJobExperienceListResponce[];
    candidateSkills: SkillListResponse[];
    candidateLanguages: LanguageListResponse[];
    candidateSchools: SchoolListResponse[];
}