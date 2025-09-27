import logo from './logo.png'
import usergroup from './user-group.png'
import {SquarePen,Hash,Image,Eraser,Scissors,FileText} from 'lucide-react'
import ai_gen_img_1 from './ai_gen_img_1.jpeg'
import ai_gen_img_2 from './ai_gen_img_2.jpeg'
import ai_gen_img_3 from './ai_gen_img_3.jpg'
import ai_gen_img_4 from './ai_gen_img_4.jpg'
import ai_gen_img_5 from './ai_gen_img_5.jpeg'


// 21.8   

export const assets={
    logo,
    usergroup,
    ai_gen_img_1,
    ai_gen_img_2,
    ai_gen_img_3,
    ai_gen_img_4,
    ai_gen_img_5
    
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

export const dummyPublishedCreationData = [
  {
    "id": 1,
    "user_id": "user_1AbCdEfGhIjKlMnOpQrSt",
    "prompt": "Generate an image of a futuristic city skyline in 2500 with flying cars, cyberpunk theme.",
    "content": ai_gen_img_1,
    "type": "image",
    "publish": true,
    "likes": [
      "user_XYZ123",
      "user_ABC456"
    ],
    "created_at": "2025-06-18T10:12:30.111Z",
    "updated_at": "2025-06-18T12:20:50.220Z"
  },
  {
    "id": 2,
    "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    "prompt": "Generate an image of A Boy Riding a bicycle on road and bicycle is from year 2201 in the style Anime style.",
    "content": ai_gen_img_2,
    "type": "image",
    "publish": true,
    "likes": [
      "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
      "user_2yaW5EHzeDfQbXdAJWYFnZo2bje"
    ],
    "created_at": "2025-06-19T08:16:54.614Z",
    "updated_at": "2025-06-19T09:58:40.072Z"
  },
  {
    "id": 3,
    "user_id": "user_7RtUvWxYz123456",
    "prompt": "Create a digital painting of a dragon flying over snowy mountains in a fantasy world.",
    "content": ai_gen_img_3,
    "type": "image",
    "publish": true,
    "likes": [
      "user_LMN789",
      "user_DEF101"
    ],
    "created_at": "2025-06-20T07:22:10.314Z",
    "updated_at": "2025-06-20T08:45:33.912Z"
  },
  {
    "id": 4,
    "user_id": "user_A1B2C3D4E5F6",
    "prompt": "Generate an oil painting style image of a peaceful village beside a river during sunset.",
    "content": ai_gen_img_4,
    "type": "image",
    "publish": true,
    "likes": [
      "user_ZYX999"
    ],
    "created_at": "2025-06-21T11:11:11.111Z",
    "updated_at": "2025-06-21T12:12:12.222Z"
  },
  {
    "id": 5,
    "user_id": "user_QWERTY123456",
    "prompt": "Generate a 3D render of a space station orbiting around Saturn with astronauts outside.",
    "content": ai_gen_img_5,
    "type": "image",
    "publish": true,
    "likes": [
      "user_HJK789",
      "user_OPQ321",
      "user_RST654"
    ],
    "created_at": "2025-06-22T14:30:00.500Z",
    "updated_at": "2025-06-22T16:00:45.750Z"
  }
];