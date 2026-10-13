export type Template='standard'|'project'|'agra';
export interface Cover{
  id?:string;slug:string;title:string;subtitle?:string|null;template:Template;
  college_name:string;short_name?:string|null;city?:string|null;
  logo_url:string;background_url?:string|null;departments:string[];
  university_line?:string|null;address_line?:string|null;sort_order:number;active:boolean;
}
// Every field a cover can show. All strings so the form state stays simple.
export interface CoverValues{
  name:string;teacher:string;subject:string;subjectCode:string;session:string;
  department:string;semester:string;batch:string;rollNo:string;city:string;
  docType:string;fatherName:string;className:string;
  label:string;topic:string;designation:string;collegeName:string;border:boolean;
}
