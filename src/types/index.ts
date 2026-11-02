export interface ProjectPreview {
  type: 'image' | 'video'
  title: string
  url: string
  videoUrl?: string
  thumbnail?: string
}

export interface Project {
  id: string
  number: string
  title: string
  titleEn?: string
  category: string
  categoryEn?: string
  status: 'In development' | 'In production' | 'Terminé'
  description: string
  descriptionEn?: string
  features?: string[]
  featuresEn?: string[]
  additionalInfo?: string
  additionalInfoEn?: string
  tags: string[]
  link?: string
  github?: string
  stickerEmoji?: string
  stickerSvg?: 'box' | 'afrisecure' | 'portfolio' | 'gateway' | 'taskflow' | 'commerce'
  accentColor: string
  year: string
  previews?: ProjectPreview[]
}

export interface TechItem {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'tools'
  experience?: string
  iconName?: string
}

export interface TechCategoryData {
  id: string
  title: string
  subtitle: string
  skills: string[]
  iconName: string
}

export interface PersonalInfo {
  name: string
  role: string
  roleEn: string
  title: string
  subtitle: string
  tagline: string
  bio: string
  bioEn: string
  email: string
  phone: string
  location: string
  availableForWork: boolean
  cvUrl: string
  school: string
  internshipGoal: string
  linkedin: string
  github: string
}
