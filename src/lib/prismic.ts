import { createClient } from '@/prismicio'

export const client = createClient()

export async function getPortfolioData() {
  const config = await client.getSingle('portafolio_configuration')
  const services = await client.getAllByType('services', {
    orderings: 'my.services.order'
  })
  const skills = await client.getAllByType('skills')
  const education = await client.getAllByType('education', {
    orderings: 'my.education.order desc'
  })
  const experience = await client.getAllByType('work_experience', {
    orderings: 'my.work_experience.order desc'
  })
  
  return { config, services, skills, education, experience }
}