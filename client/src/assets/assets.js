import logo from './logo.png'
import usergroup from './user-group.png'
import {SquarePen,Hash,Image,Eraser,Scissors,FileText} from 'lucide-react'




export const assets={
    logo,
    usergroup
    
}

export const AiToolsData = [
  {
    title: 'AI Article Writer',
    description: 'Generate high-quality, engaging articles on any topic with our AI writing technology.',
    Icon: SquarePen,
    bg: { from: '#3588F2', to: '#0BB0D7' },
    path: '/ai/write-article',
  },
  {
    title: 'Blog Title Generator',
    description: 'Find the perfect, catchy title for your blog posts with our AI-powered generator.',
    Icon: Hash,
    bg: { from: '#B153EA', to: '#E549A3' },
    path: '/ai/blog-titles',
  },
  {
    title: 'AI Image Generator',
    description: 'Create stunning images from text prompts using cutting-edge AI models.',
    Icon: Image,
    bg: { from: '#20C363', to: '#11B97E' },
    path: '/ai/generate-images',
  },
  {
    title: 'Background Removal',
    description: 'Discover the best SEO keywords to rank higher in search results with AI suggestions.',
    Icon: Eraser,
    bg: { from: '#F76C1C', to: '#F04A3C' },
    path: '/ai/remove-background',
  },
  {
    title: 'Object Removal',
    description: 'Integrate a smart chatbot into your website to engage with visitors 24/7.',
    Icon: Scissors,
    bg: { from: '#5C6AF1', to: '#427DF5' },
    path: '/ai/remove-object',
  },
  {
    title: 'Resume Reviewer',
    description: 'Integrate a smart chatbot into your website to engage with visitors 24/7.',
    Icon: FileText,
    bg: { from: '#12B7AC', to: '#08B6CE' },
    path: '/ai/review-resume',
  }
];