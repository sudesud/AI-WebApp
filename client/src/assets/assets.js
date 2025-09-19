import logo from './logo.png'
import usergroup from './user-group.png'
import {SquarePen,Hash,Image,Eraser,Scissors,FileText} from 'lucide-react'


// 21.8

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

export const dummyCreationData = [
  {
    "id": 9,
    "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    "prompt": "Generate a blog title for the keyword blog in the category Technology.",
    "content": "Here are a few blog title options for a technology blog:\n\n*General & Broad:\n- The Tech Blog: News, Reviews, and Insights\n- Technology Today: Your Daily Dose of Tech\n- The Future is Now: Exploring the World of Technology\n- Tech Talk: Unpacking the Latest Innovations\n\nSpecific & Intriguing:*\n- Decoding Tech: Making Sense of the Digital World\n- Beyond the Gadgets: The",
    "type": "blog-title",
    "publish": false,
    "likes": [],
    "created_at": "2025-07-01T11:09:50.492Z",
    "updated_at": "2025-07-01T11:09:50.492Z"
  },
  {
    "id": 8,
    "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    "prompt": "Generate a blog title for the keyword blog in the category General.",
    "content": "Here are a few blog title options for a blog in the General category:\n\n- Everyday Stories: Life, People, and More\n- The Daily Journal: Thoughts & Perspectives\n- Exploring the Ordinary: Blogs of Daily Wonders\n- Beyond Routine: Stories from Everyday Life",
    "type": "blog-title",
    "publish": false,
    "likes": [],
    "created_at": "2025-07-01T11:12:10.123Z",
    "updated_at": "2025-07-01T11:12:10.123Z"
  },
  {
    "id": 7,
    "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    "prompt": "Generate a blog title for the keyword blog in the category Travel.",
    "content": "Here are a few blog title options for a travel blog:\n\n- Wanderlust Diaries: Exploring the World\n- The Globe Trekker Blog: Adventures Across Continents\n- Hidden Gems: Discovering the Unseen Places\n- Beyond Borders: A Traveler’s Perspective",
    "type": "blog-title",
    "publish": false,
    "likes": [],
    "created_at": "2025-07-01T11:15:00.789Z",
    "updated_at": "2025-07-01T11:15:00.789Z"
  },
  {
    "id": 6,
    "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    "prompt": "Generate a blog title for the keyword blog in the category Food.",
    "content": "Here are a few blog title options for a food blog:\n\n- The Tasty Journal: Recipes and Reviews\n- Beyond the Plate: Food Stories & Flavors\n- Kitchen Chronicles: Cooking Made Simple\n- Bite by Bite: A Food Lover’s Blog",
    "type": "blog-title",
    "publish": false,
    "likes": [],
    "created_at": "2025-07-01T11:18:45.456Z",
    "updated_at": "2025-07-01T11:18:45.456Z"
  }
];