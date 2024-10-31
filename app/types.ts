// types.ts
export interface Website {
  id: string;
  title: string;
  url: string;
  description: string;
  category: string;
}

export const websites: Website[] = [
  {
      "id": "1",
      "title": "ChatGPT",
      "url": "https://chat.openai.com",
      "description": "Advanced AI language model for conversation and text generation",
      "category": "AI Assistant"
    },
    {
      "id": "2",
      "title": "Midjourney",
      "url": "https://midjourney.com",
      "description": "AI art generation tool for creating unique images from text descriptions",
      "category": "AI Art"
    },
    {
      "id": "3",
      "title": "Claude",
      "url": "https://claude.ai",
      "description": "Anthropic's AI assistant for analysis, writing, and coding",
      "category": "AI Assistant"
    },
    {
      "id": "4",
      "title": "DALL-E",
      "url": "https://labs.openai.com",
      "description": "OpenAI's AI system for generating images from text descriptions",
      "category": "AI Art"
    },
    {
      "id": "5",
      "title": "Copy.ai",
      "url": "https://copy.ai",
      "description": "AI-powered copywriting tool for marketing content",
      "category": "Content Creation"
    },
    {
      "id": "6",
      "title": "Jasper",
      "url": "https://jasper.ai",
      "description": "AI content creation platform for marketing and business",
      "category": "Content Creation"
    },
    {
      "id": "7",
      "title": "Grammarly",
      "url": "https://grammarly.com",
      "description": "AI-powered writing assistant for grammar and style improvement",
      "category": "Writing"
    },
    {
      "id": "8",
      "title": "Stable Diffusion",
      "url": "https://stability.ai",
      "description": "Open-source AI image generation model",
      "category": "AI Art"
    },
    {
      "id": "9",
      "title": "Notion AI",
      "url": "https://notion.so",
      "description": "AI-powered workspace for notes and collaboration",
      "category": "Productivity"
    },
    {
      "id": "10",
      "title": "Otter.ai",
      "url": "https://otter.ai",
      "description": "AI meeting transcription and note-taking assistant",
      "category": "Productivity"
    },
    {
      "id": "11",
      "title": "RunwayML",
      "url": "https://runway.ml",
      "description": "AI-powered video editing and generation platform",
      "category": "Video"
    },
    {
      "id": "12",
      "title": "Synthesia",
      "url": "https://synthesia.io",
      "description": "AI video generation platform for creating video content",
      "category": "Video"
    },
    {
      "id": "13",
      "title": "Descript",
      "url": "https://descript.com",
      "description": "AI-powered audio and video editing platform",
      "category": "Audio/Video"
    },
    {
      "id": "14",
      "title": "Murf.ai",
      "url": "https://murf.ai",
      "description": "AI voice generator and text-to-speech platform",
      "category": "Audio"
    },
    {
      "id": "15",
      "title": "Beautiful.ai",
      "url": "https://beautiful.ai",
      "description": "AI-powered presentation creation tool",
      "category": "Presentation"
    },
    {
      "id": "16",
      "title": "GitHub Copilot",
      "url": "https://github.com/features/copilot",
      "description": "AI pair programmer for code suggestions",
      "category": "Development"
    },
    {
      "id": "17",
      "title": "Hugging Face",
      "url": "https://huggingface.co",
      "description": "AI model repository and development platform",
      "category": "Development"
    },
    {
      "id": "18",
      "title": "Tome",
      "url": "https://tome.app",
      "description": "AI-powered storytelling and presentation platform",
      "category": "Presentation"
    },
    {
      "id": "19",
      "title": "Pictory",
      "url": "https://pictory.ai",
      "description": "AI video creation from long-form content",
      "category": "Video"
    },
    {
      "id": "20",
      "title": "Writesonic",
      "url": "https://writesonic.com",
      "description": "AI writing assistant for marketing and content",
      "category": "Content Creation"
    },
    {
      "id": "21",
      "title": "Fireflies.ai",
      "url": "https://fireflies.ai",
      "description": "AI meeting assistant for transcription and analysis",
      "category": "Productivity"
    },
    {
      "id": "22",
      "title": "Anthropic Claude API",
      "url": "https://anthropic.com/api",
      "description": "API access to Claude AI assistant",
      "category": "AI API"
    },
    {
      "id": "23",
      "title": "OpenAI API",
      "url": "https://openai.com/api",
      "description": "API access to GPT models and DALL-E",
      "category": "AI API"
    },
    {
      "id": "24",
      "title": "Elevenlabs",
      "url": "https://elevenlabs.io",
      "description": "AI voice cloning and synthesis platform",
      "category": "Audio"
    },
    {
      "id": "25",
      "title": "Replicate",
      "url": "https://replicate.com",
      "description": "Platform for running AI models in the cloud",
      "category": "Development"
    },
    {
      "id": "26",
      "title": "Gamma",
      "url": "https://gamma.app",
      "description": "AI-powered presentation and documentation tool",
      "category": "Presentation"
    },
    {
      "id": "27",
      "title": "Dreamstudio",
      "url": "https://dreamstudio.ai",
      "description": "Stable Diffusion-powered image generation platform",
      "category": "AI Art"
    },
    {
      "id": "28",
      "title": "Leonardo.ai",
      "url": "https://leonardo.ai",
      "description": "AI art generation platform for gaming assets",
      "category": "AI Art"
    },
    {
      "id": "29",
      "title": "Taskade",
      "url": "https://taskade.com",
      "description": "AI-powered project management and collaboration tool",
      "category": "Productivity"
    },
    {
      "id": "30",
      "title": "Anyword",
      "url": "https://anyword.com",
      "description": "AI copywriting platform with performance prediction",
      "category": "Content Creation"
    },
    {
      "id": "31",
      "title": "Vercel AI SDK",
      "url": "https://sdk.vercel.ai",
      "description": "Developer tools for building AI-powered applications",
      "category": "Development"
    },
    {
      "id": "32",
      "title": "Langchain",
      "url": "https://langchain.com",
      "description": "Framework for developing applications with LLMs",
      "category": "Development"
    },
    {
      "id": "33",
      "title": "Moonbeam",
      "url": "https://moonbeam.ai",
      "description": "AI-powered exchange rate and financial data platform",
      "category": "Finance"
    },
    {
      "id": "34",
      "title": "Framer",
      "url": "https://framer.com",
      "description": "AI website builder and design tool",
      "category": "Web Development"
    },
    {
      "id": "35",
      "title": "Gemini",
      "url": "https://gemini.google.com",
      "description": "Google's multimodal AI model",
      "category": "AI Assistant"
    },
    {
      "id": "36",
      "title": "Perplexity AI",
      "url": "https://perplexity.ai",
      "description": "AI-powered search engine and research assistant",
      "category": "Search"
    },
    {
      "id": "37",
      "title": "Ideogram",
      "url": "https://ideogram.ai",
      "description": "AI image generation with text and logo handling",
      "category": "AI Art"
    },
    {
      "id": "38",
      "title": "AutoDraw",
      "url": "https://autodraw.com",
      "description": "AI-assisted drawing tool",
      "category": "Design"
    },
    {
      "id": "39",
      "title": "DeepL",
      "url": "https://deepl.com",
      "description": "AI-powered language translation platform",
      "category": "Translation"
    },
    {
      "id": "40",
      "title": "Zapier AI",
      "url": "https://zapier.com/ai",
      "description": "AI automation platform for workflow optimization",
      "category": "Automation"
    },
    {
      "id": "41",
      "title": "Adobe Firefly",
      "url": "https://firefly.adobe.com",
      "description": "AI creative tools integrated with Adobe products",
      "category": "Design"
    },
    {
      "id": "42",
      "title": "Duolingo Max",
      "url": "https://duolingo.com/max",
      "description": "AI-powered language learning platform",
      "category": "Education"
    },
    {
      "id": "43",
      "title": "Canva AI",
      "url": "https://canva.com",
      "description": "AI-powered design platform",
      "category": "Design"
    },
    {
      "id": "44",
      "title": "Cogniflow",
      "url": "https://cogniflow.ai",
      "description": "No-code AI model creation platform",
      "category": "Development"
    },
    {
      "id": "45",
      "title": "Poe",
      "url": "https://poe.com",
      "description": "Platform for accessing multiple AI chatbots",
      "category": "AI Assistant"
    },
    {
      "id": "46",
      "title": "HeyGen",
      "url": "https://heygen.com",
      "description": "AI video generation platform for marketing",
      "category": "Video"
    },
    {
      "id": "47",
      "title": "Mem.ai",
      "url": "https://mem.ai",
      "description": "AI-powered personal knowledge management",
      "category": "Productivity"
    },
    {
      "id": "48",
      "title": "Cleanup.pictures",
      "url": "https://cleanup.pictures",
      "description": "AI-powered image editing and object removal",
      "category": "Image Editing"
    },
    {
      "id": "49",
      "title": "Lexica",
      "url": "https://lexica.art",
      "description": "AI art search engine and generation platform",
      "category": "AI Art"
    },
    {
      "id": "50",
      "title": "Cursor",
      "url": "https://cursor.sh",
      "description": "AI-powered code editor",
      "category": "Development"
    },
    {
      "id": "51",
      "title": "Replit",
      "url": "https://replit.com",
      "description": "AI-powered collaborative coding platform",
      "category": "Development"
    },
    {
      "id": "52",
      "title": "Kaiber",
      "url": "https://kaiber.ai",
      "description": "AI video generation and animation platform",
      "category": "Video"
    },
    {
      "id": "53",
      "title": "Genmo",
      "url": "https://genmo.ai",
      "description": "AI video generation from text descriptions",
      "category": "Video"
    },
    {
      "id": "54",
      "title": "Soundraw",
      "url": "https://soundraw.io",
      "description": "AI music generation platform",
      "category": "Audio"
    },
    {
      "id": "55",
      "title": "Boomy",
      "url": "https://boomy.com",
      "description": "AI music creation platform",
      "category": "Audio"
    },
    {
      "id": "56",
      "title": "Rytr",
      "url": "https://rytr.me",
      "description": "AI writing assistant for content creation",
      "category": "Content Creation"
    },
    {
      "id": "57",
      "title": "Yoodli",
      "url": "https://yoodli.ai",
      "description": "AI speech coaching platform",
      "category": "Communication"
    },
    {
      "id": "58",
      "title": "Mydock",
      "url": "https://mydock.ai",
      "description": "AI-powered meeting preparation platform",
      "category": "Productivity"
    },
    {
      "id": "59",
      "title": "Getimg.ai",
      "url": "https://getimg.ai",
      "description": "AI image generation and editing platform",
      "category": "AI Art"
    },
    {
      "id": "60",
      "title": "Promptbase",
      "url": "https://promptbase.com",
      "description": "Marketplace for AI prompts",
      "category": "Resources"
    },
    {
      "id": "61",
      "title": "Character.ai",
      "url": "https://character.ai",
      "description": "Platform for creating AI characters",
      "category": "AI Assistant"
    },
    {
      "id": "62",
      "title": "Nova AI",
      "url": "https://nova-ai.com",
      "description": "AI website builder and design assistant",
      "category": "Web Development"
    },
    {
      "id": "63",
      "title": "Forefront",
      "url": "https://forefront.ai",
      "description": "Platform for fine-tuning language models",
      "category": "Development"
    },
    {
      "id": "64",
      "title": "Diagrams.net",
      "url": "https://diagrams.net",
      "description": "AI-assisted diagram creation tool",
      "category": "Design"
    },
    {
      "id": "65",
      "title": "ResumeWorded",
      "url": "https://resumeworded.com",
      "description": "AI-powered resume optimization platform",
      "category": "Career"
    },
    {
      "id": "66",
      "title": "Soundful",
      "url": "https://soundful.com",
      "description": "AI music generation for content creators",
      "category": "Audio"
    },
    {
      "id": "67",
      "title": "Zoom IQ",
      "url": "https://zoom.ai",
      "description": "AI-powered meeting assistant and summarizer",
      "category": "Productivity"
    },
    {
      "id": "68",
      "title": "Causaly",
      "url": "https://causaly.com",
      "description": "AI-powered biomedical research platform",
      "category": "Research"
    },
    {
      "id": "69",
      "title": "Mintlify",
      "url": "https://mintlify.com",
      "description": "AI-powered documentation writing assistant",
      "category": "Development"
    },
    {
      "id": "70",
      "title": "VoiceFlow",
      "url": "https://voiceflow.com",
      "description": "AI voice app and chatbot design platform",
      "category": "Development"
    },
    {
      "id": "71",
      "title": "Brandmark",
      "url": "https://brandmark.io",
      "description": "AI logo design and brand identity platform",
      "category": "Design"
    },
    {
      "id": "72",
      "title": "Looka",
      "url": "https://looka.com",
      "description": "AI-powered brand design platform",
      "category": "Design"
    },
    {
      "id": "73",
      "title": "Watermark Remover",
      "url": "https://watermarkremover.io",
      "description": "AI-powered watermark removal tool",
      "category": "Image Editing"
    },
    {
      "id": "74",
      "title": "Photoroom",
      "url": "https://photoroom.com",
      "description": "AI background removal and photo editing",
      "category": "Image Editing"
    },
    {
      "id": "75",
      "title": "Krisp",
      "url": "https://krisp.ai",
      "description": "AI noise cancellation for calls",
      "category": "Audio"
    },
    {
      "id": "76",
      "title": "Stability AI API",
      "url": "https://stability.ai/api",
      "description": "API access to Stable Diffusion models",
      "category": "AI API"
    },
    {
      "id": "77",
      "title": "Webflow AI",
      "url": "https://webflow.com/ai",
      "description": "AI-powered website builder",
      "category": "Web Development"
    },
    {
      "id": "78",
      "title": "Teachable Machine",
      "url": "https://teachablemachine.withgoogle.com",
      "description": "Create machine learning models without code",
      "category": "Development"
    },
    {
      "id": "79",
      "title": "Runway Gen-2",
      "url": "https://runwayml.com/gen-2",
      "description": "AI video generation platform",
      "category": "Video"
    },
    {
      "id": "80",
      "title": "AssemblyAI",
      "url": "https://assemblyai.com",
      "description": "AI speech recognition and analysis API",
      "category": "AI API"
    },
    {
      "id": "81",
      "title": "Civitai",
      "url": "https://civitai.com",
      "description": "Community platform for AI art models",
      "category": "AI Art"
    },
    {
      "id": "82",
      "title": "PlaygroundAI",
      "url": "https://playgroundai.com",
      "description": "AI image generation platform",
      "category": "AI Art"
    },
    {
      "id": "83",
      "title": "Webflow AI",
      "url": "https://webflow.com/ai",
      "description": "AI-powered website building platform",
      "category": "Web Development"
    },
    {
      "id": "84",
      "title": "Glean",
      "url": "https://glean.ai",
      "description": "AI-powered enterprise search platform",
      "category": "Search"
    },
    {
      "id": "85",
      "title": "Anthropic Cloud",
      "url": "https://console.anthropic.com",
      "description": "Enterprise AI platform for Claude deployment",
      "category": "Enterprise"
    },
    {
      "id": "86",
      "title": "Roboflow",
      "url": "https://roboflow.com",
      "description": "Computer vision model training platform",
      "category": "Development"
    },
    {
      "id": "87",
      "title": "Autodoc",
      "url": "https://autodoc.ai",
      "description": "AI documentation generator for code",
      "category": "Development"
    },
    {
      "id": "88",
      "title": "Moonbeam Exchange",
      "url": "https://moonbeam.ai",
      "description": "AI-powered cryptocurrency exchange platform",
      "category": "Finance"
    },
    {
      "id": "89",
      "title": "Namelix",
      "url": "https://namelix.com",
      "description": "AI business name generator",
      "category": "Business"
    },
    {
      "id": "90",
      "title": "Stockimg",
      "url": "https://stockimg.ai",
      "description": "AI stock image generation platform",
      "category": "AI Art"
    },
    {
      "id": "91",
      "title": "Dataiku",
      "url": "https://dataiku.com",
      "description": "Enterprise AI and machine learning platform",
      "category": "Enterprise"
    },
    {
      "id": "92",
      "title": "H2O.ai",
      "url": "https://h2o.ai",
      "description": "Open-source AI and ML platform",
      "category": "Development"
    },
    {
      "id": "93",
      "title": "Obviously AI",
      "url": "https://obviously.ai",
      "description": "No-code machine learning platform",
      "category": "Development"
    },
    {
      "id": "94",
      "title": "Pinecone",
      "url": "https://pinecone.io",
      "description": "Vector database for AI applications",
      "category": "Development"
    },
    {
      "id": "95",
      "title": "Weights & Biases",
      "url": "https://wandb.ai",
      "description": "ML experiment tracking platform",
      "category": "Development"
    },
    {
      "id": "96",
      "title": "Streamlit",
      "url": "https://streamlit.io",
      "description": "Framework for building ML applications",
      "category": "Development"
    },
    {
      "id": "97",
      "title": "Gradio",
      "url": "https://gradio.app",
      "description": "Platform for creating ML demos",
      "category": "Development"
    },
    {
      "id": "98",
      "title": "Modal",
      "url": "https://modal.com",
      "description": "Cloud platform for AI deployment",
      "category": "Development"
    },
    {
      "id": "99",
      "title": "Together AI",
      "url": "https://together.ai",
      "description": "Infrastructure for training and deploying AI models",
      "category": "Development"
    },
    {
      "id": "100",
      "title": "Cohere",
      "url": "https://cohere.ai",
      "description": "NLP models and APIs for businesses",
      "category": "AI API"
    },
    {
      "id": "101",
      "title": "Codeium",
      "url": "https://codeium.com",
      "description": "AI code completion and generation tool",
      "category": "Development"
    },
    {
      "id": "102",
      "title": "Gamma Labs",
      "url": "https://gamma.app/labs",
      "description": "AI experimentation and prototyping platform",
      "category": "Development"
    },
    {
      "id": "103",
      "title": "Runway Gen-1",
      "url": "https://runwayml.com/gen-1",
      "description": "AI video editing and generation platform",
      "category": "Video"
    },
    {
      "id": "104",
      "title": "Mutable",
      "url": "https://mutable.ai",
      "description": "AI software development assistant",
      "category": "Development"
    },
    {
      "id": "105",
      "title": "Retune",
      "url": "https://retune.so",
      "description": "AI model fine-tuning platform",
      "category": "Development"
    },
    {
      "id": "106",
      "title": "Imagine",
      "url": "https://imagine.art",
      "description": "AI art generation with style control",
      "category": "AI Art"
    },
    {
      "id": "107",
      "title": "Flair AI",
      "url": "https://flair.ai",
      "description": "AI-powered design automation platform",
      "category": "Design"
    },
    {
      "id": "108",
      "title": "Causaly AI",
      "url": "https://causaly.com",
      "description": "AI-powered medical research platform",
      "category": "Healthcare"
    },
    {
      "id": "109",
      "title": "Ora",
      "url": "https://ora.ai",
      "description": "AI product development assistant",
      "category": "Product Development"
    },
    {
      "id": "110",
      "title": "Pebblely",
      "url": "https://pebblely.com",
      "description": "AI product photography generator",
      "category": "Marketing"
    },
    {
      "id": "111",
      "title": "Theresanaiforthat",
      "url": "https://theresanaiforthat.com",
      "description": "AI tool discovery platform",
      "category": "Resources"
    },
    {
      "id": "112",
      "title": "Levity",
      "url": "https://levity.ai",
      "description": "No-code AI workflow automation",
      "category": "Automation"
    },
    {
      "id": "113",
      "title": "Veed AI",
      "url": "https://veed.io/ai",
      "description": "AI video editing and generation",
      "category": "Video"
    },
    {
      "id": "114",
      "title": "Debuild",
      "url": "https://debuild.app",
      "description": "AI-powered web app builder",
      "category": "Development"
    },
    {
      "id": "115",
      "title": "Glif",
      "url": "https://glif.app",
      "description": "AI image editing and enhancement",
      "category": "Image Editing"
    },
    {
      "id": "116",
      "title": "Phind",
      "url": "https://phind.com",
      "description": "AI search engine for developers",
      "category": "Development"
    },
    {
      "id": "117",
      "title": "You",
      "url": "https://you.com",
      "description": "AI-powered search engine",
      "category": "Search"
    },
    {
      "id": "118",
      "title": "Sourcegraph",
      "url": "https://sourcegraph.com",
      "description": "AI-powered code search and navigation",
      "category": "Development"
    },
    {
      "id": "119",
      "title": "Tabnine",
      "url": "https://tabnine.com",
      "description": "AI code completion tool",
      "category": "Development"
    },
    {
      "id": "120",
      "title": "Speak",
      "url": "https://speak.com",
      "description": "AI language learning platform",
      "category": "Education"
    },
    {
      "id": "121",
      "title": "Gradio Labs",
      "url": "https://gradio.app",
      "description": "AI demo creation platform",
      "category": "Development"
    },
    {
      "id": "122",
      "title": "Rosebud AI",
      "url": "https://rosebud.ai",
      "description": "AI character and avatar generation",
      "category": "AI Art"
    },
    {
      "id": "123",
      "title": "Descript Video",
      "url": "https://descript.com/video",
      "description": "AI video editing platform",
      "category": "Video"
    },
    {
      "id": "124",
      "title": "Inflection AI",
      "url": "https://inflection.ai",
      "description": "Conversational AI platform",
      "category": "AI Assistant"
    },
    {
      "id": "125",
      "title": "Glean AI",
      "url": "https://glean.ai",
      "description": "AI-powered enterprise search",
      "category": "Enterprise"
    },
    {
      "id": "126",
      "title": "Vercel AI SDK",
      "url": "https://vercel.com/ai",
      "description": "AI development toolkit",
      "category": "Development"
    },
    {
      "id": "127",
      "title": "Mintlify Writer",
      "url": "https://writer.mintlify.com",
      "description": "AI documentation assistant",
      "category": "Writing"
    },
    {
      "id": "128",
      "title": "Rephrase AI",
      "url": "https://rephrase.ai",
      "description": "AI video synthesis platform",
      "category": "Video"
    },
    {
      "id": "129",
      "title": "Qdrant",
      "url": "https://qdrant.tech",
      "description": "Vector similarity search engine",
      "category": "Development"
    },
    {
      "id": "130",
      "title": "Weaviate",
      "url": "https://weaviate.io",
      "description": "Vector database for AI applications",
      "category": "Development"
    },
    {
      "id": "131",
      "title": "Roboflow Universe",
      "url": "https://universe.roboflow.com",
      "description": "Computer vision model marketplace",
      "category": "Development"
    },
    {
      "id": "132",
      "title": "Labelbox",
      "url": "https://labelbox.com",
      "description": "AI data labeling platform",
      "category": "Development"
    },
    {
      "id": "133",
      "title": "Scale AI",
      "url": "https://scale.com",
      "description": "AI training data platform",
      "category": "Development"
    },
    {
      "id": "134",
      "title": "Relevance AI",
      "url": "https://relevance.ai",
      "description": "AI-powered search platform",
      "category": "Search"
    },
    {
      "id": "135",
      "title": "MonsterAPI",
      "url": "https://monsterapi.ai",
      "description": "AI model marketplace and API",
      "category": "AI API"
    },
    {
      "id": "136",
      "title": "MagicStudio",
      "url": "https://magic.dev",
      "description": "AI code generation platform",
      "category": "Development"
    },
    {
      "id": "137",
      "title": "Databricks",
      "url": "https://databricks.com",
      "description": "Enterprise AI and data platform",
      "category": "Enterprise"
    },
    {
      "id": "138",
      "title": "Vertex AI",
      "url": "https://cloud.google.com/vertex-ai",
      "description": "Google's AI platform",
      "category": "Enterprise"
    },
    {
      "id": "139",
      "title": "Azure AI",
      "url": "https://azure.microsoft.com/ai",
      "description": "Microsoft's AI platform",
      "category": "Enterprise"
    },
    {
      "id": "140",
      "title": "AWS SageMaker",
      "url": "https://aws.amazon.com/sagemaker",
      "description": "Amazon's ML platform",
      "category": "Enterprise"
    },
    {
      "id": "141",
      "title": "Bria",
      "url": "https://bria.ai",
      "description": "AI image editing API",
      "category": "AI API"
    },
    {
      "id": "142",
      "title": "Luma AI",
      "url": "https://lumalabs.ai",
      "description": "3D asset creation platform",
      "category": "3D"
    },
    {
      "id": "143",
      "title": "Scenario",
      "url": "https://scenario.com",
      "description": "AI-powered game asset creation",
      "category": "Gaming"
    },
    {
      "id": "144",
      "title": "Mindshow",
      "url": "https://mindshow.ai",
      "description": "AI animation platform",
      "category": "Animation"
    },
    {
      "id": "145",
      "title": "Deep Agency",
      "url": "https://deepagency.com",
      "description": "AI model management platform",
      "category": "Enterprise"
    },
    {
      "id": "146",
      "title": "Nanonets",
      "url": "https://nanonets.com",
      "description": "OCR and document processing AI",
      "category": "Document Processing"
    },
    {
      "id": "147",
      "title": "Rossum",
      "url": "https://rossum.ai",
      "description": "AI document understanding platform",
      "category": "Document Processing"
    },
    {
      "id": "148",
      "title": "Klevu",
      "url": "https://klevu.com",
      "description": "AI-powered ecommerce search",
      "category": "Ecommerce"
    },
    {
      "id": "149",
      "title": "Constructor",
      "url": "https://constructor.io",
      "description": "AI product discovery platform",
      "category": "Ecommerce"
    },
    {
      "id": "150",
      "title": "Algolia",
      "url": "https://algolia.com",
      "description": "AI search and discovery platform",
      "category": "Search"
    },
    {
      "id": "151",
      "title": "Miro AI",
      "url": "https://miro.com/ai",
      "description": "AI-powered visual collaboration",
      "category": "Collaboration"
    },
    {
      "id": "152",
      "title": "Figma AI",
      "url": "https://figma.com/ai",
      "description": "AI design features in Figma",
      "category": "Design"
    },
    {
      "id": "153",
      "title": "Mendable",
      "url": "https://mendable.ai",
      "description": "AI documentation search",
      "category": "Search"
    },
    {
      "id": "154",
      "title": "Fixie AI",
      "url": "https://fixie.ai",
      "description": "AI agent development platform",
      "category": "Development"
    },
    {
      "id": "155",
      "title": "Humanloop",
      "url": "https://humanloop.com",
      "description": "AI model training platform",
      "category": "Development"
    },
    {
      "id": "156",
      "title": "Superagent",
      "url": "https://superagent.sh",
      "description": "AI agent orchestration platform",
      "category": "Development"
    },
    {
      "id": "157",
      "title": "Wordtune",
      "url": "https://wordtune.com",
      "description": "AI writing enhancement tool",
      "category": "Writing"
    },
    {
      "id": "158",
      "title": "Writer.com",
      "url": "https://writer.com",
      "description": "AI content platform for teams",
      "category": "Content Creation"
    },
    {
      "id": "159",
      "title": "Lex",
      "url": "https://lex.page",
      "description": "AI writing environment",
      "category": "Writing"
    },
    {
      "id": "160",
      "title": "Deepgram",
      "url": "https://deepgram.com",
      "description": "AI speech recognition API",
      "category": "AI API"
    },
    {
      "id": "161",
      "title": "Riffusion",
      "url": "https://riffusion.com",
      "description": "AI music generation from text",
      "category": "Audio"
    },
    {
      "id": "162",
      "title": "Supernormal",
      "url": "https://supernormal.com",
      "description": "AI meeting notes platform",
      "category": "Productivity"
    },
    {
      "id": "163",
      "title": "Whereby AI",
      "url": "https://whereby.com/ai",
      "description": "AI-powered video meetings",
      "category": "Communication"
    },
    {
      "id": "164",
      "title": "Lens Studio AI",
      "url": "https://ar.snap.com/lens-studio",
      "description": "AI-powered AR creation tool",
      "category": "AR/VR"
    },
    {
      "id": "165",
      "title": "Aiden AI",
      "url": "https://aiden.ai",
      "description": "AI marketing optimization",
      "category": "Marketing"
    },
    {
      "id": "166",
      "title": "Marketmuse",
      "url": "https://marketmuse.com",
      "description": "AI content strategy platform",
      "category": "Marketing"
    },
    {
      "id": "167",
      "title": "Clearbit X",
      "url": "https://clearbit.com/x",
      "description": "AI-powered customer data platform",
      "category": "Marketing"
    },
    {
      "id": "168",
      "title": "Descript Storyboard",
      "url": "https://descript.com/storyboard",
      "description": "AI video storyboarding tool",
      "category": "Video"
    },
    {
      "id": "169",
      "title": "Replit Ghost Writer",
      "url": "https://replit.com/ghostwriter",
      "description": "AI pair programming assistant",
      "category": "Development"
    },
    {
      "id": "170",
      "title": "Anthropic Developer",
      "url": "https://developer.anthropic.com",
      "description": "AI development platform for Claude",
      "category": "Development"
    },
    {
      "id": "171",
      "title": "Modelz",
      "url": "https://modelz.ai",
      "description": "MLOps platform for AI deployment",
      "category": "Development"
    },
    {
      "id": "172",
      "title": "Moonbeam AI",
      "url": "https://moonbeam.ai",
      "description": "AI-powered data analysis",
      "category": "Data Analysis"
    },
    {
      "id": "173",
      "title": "Tavus",
      "url": "https://tavus.io",
      "description": "AI personalized video platform",
      "category": "Video"
    },
    {
      "id": "174",
      "title": "DeepL Write",
      "url": "https://deepl.com/write",
      "description": "AI writing improvement tool",
      "category": "Writing"
    },
    {
      "id": "175",
      "title": "Regex.ai",
      "url": "https://regex.ai",
      "description": "AI-powered regex generation",
      "category": "Development"
    },
    {
      "id": "176",
      "title": "Akkio",
      "url": "https://akkio.com",
      "description": "No-code AI analytics platform",
      "category": "Analytics"
    },
    {
      "id": "177",
      "title": "Vectara",
      "url": "https://vectara.com",
      "description": "AI search and discovery platform",
      "category": "Search"
    },
    {
      "id": "178",
      "title": "Reka",
      "url": "https://reka.ai",
      "description": "AI design automation platform",
      "category": "Design"
    },
    {
      "id": "179",
      "title": "Liner",
      "url": "https://liner.ai",
      "description": "AI research assistant",
      "category": "Research"
    },
    {
      "id": "180",
      "title": "Seamless",
      "url": "https://seamless.ai",
      "description": "AI sales intelligence platform",
      "category": "Sales"
    },
    {
      "id": "181",
      "title": "Textio",
      "url": "https://textio.com",
      "description": "AI writing analysis platform",
      "category": "Writing"
    },
    {
      "id": "182",
      "title": "Clarifai",
      "url": "https://clarifai.com",
      "description": "Computer vision and NLP platform",
      "category": "Development"
    },
    {
      "id": "183",
      "title": "Reface",
      "url": "https://reface.ai",
      "description": "AI face swap app",
      "category": "Entertainment"
    },
    {
      "id": "184",
      "title": "Movio",
      "url": "https://movio.la",
      "description": "AI spokesperson video creator",
      "category": "Video"
    },
    {
      "id": "185",
      "title": "Lumen5",
      "url": "https://lumen5.com",
      "description": "AI video creation platform",
      "category": "Video"
    },
    {
      "id": "186",
      "title": "Zyro AI",
      "url": "https://zyro.com/ai",
      "description": "AI website builder",
      "category": "Web Development"
    },
    {
      "id": "187",
      "title": "Unbounce Smart Copy",
      "url": "https://unbounce.com/smart-copy",
      "description": "AI copywriting tool",
      "category": "Marketing"
    },
    {
      "id": "188",
      "title": "Hyperwrite",
      "url": "https://hyperwrite.com",
      "description": "AI writing assistant",
      "category": "Writing"
    },
    {
      "id": "189",
      "title": "Compose AI",
      "url": "https://compose.ai",
      "description": "AI email writing assistant",
      "category": "Writing"
    },
    {
      "id": "190",
      "title": "Texta",
      "url": "https://texta.ai",
      "description": "AI text analysis platform",
      "category": "Analytics"
    },
    {
      "id": "191",
      "title": "Glasp",
      "url": "https://glasp.co",
      "description": "AI-powered web highlighter",
      "category": "Productivity"
    },
    {
      "id": "192",
      "title": "Merlin",
      "url": "https://merlin.foyer.work",
      "description": "AI browser assistant",
      "category": "Productivity"
    },
    {
      "id": "193",
      "title": "Outwrite",
      "url": "https://outwrite.com",
      "description": "AI writing improvement platform",
      "category": "Writing"
    },
    {
      "id": "194",
      "title": "Textcortex",
      "url": "https://textcortex.com",
      "description": "AI content generation API",
      "category": "AI API"
    },
    {
      "id": "195",
      "title": "Anyword",
      "url": "https://anyword.com",
      "description": "AI copywriting platform",
      "category": "Marketing"
    },
    {
      "id": "196",
      "title": "Typeface",
      "url": "https://typeface.ai",
      "description": "AI brand content platform",
      "category": "Marketing"
    },
    {
      "id": "197",
      "title": "Marketplan",
      "url": "https://marketplan.io",
      "description": "AI marketing planning tool",
      "category": "Marketing"
    },
    {
      "id": "198",
      "title": "Botpress",
      "url": "https://botpress.com",
      "description": "Open-source chatbot platform",
      "category": "Development"
    },
    {
      "id": "199",
      "title": "Rasa",
      "url": "https://rasa.com",
      "description": "Open source conversational AI",
      "category": "Development"
    },
    {
      "id": "200",
      "title": "MindsDB",
      "url": "https://mindsdb.com",
      "description": "AI database integration platform",
      "category": "Development"
    },
    {
      "id": "201",
      "title": "Stability for Teams",
      "url": "https://stability.ai/teams",
      "description": "Enterprise AI image generation platform",
      "category": "Enterprise"
    },
    {
      "id": "202",
      "title": "Clipdrop",
      "url": "https://clipdrop.co",
      "description": "AI image editing toolkit",
      "category": "Image Editing"
    },
    {
      "id": "203",
      "title": "Nuclia",
      "url": "https://nuclia.com",
      "description": "AI-powered knowledge management",
      "category": "Knowledge Management"
    },
    {
      "id": "204",
      "title": "Superwise",
      "url": "https://superwise.ai",
      "description": "AI model monitoring platform",
      "category": "Development"
    },
    {
      "id": "205",
      "title": "Diffbot",
      "url": "https://diffbot.com",
      "description": "AI web data extraction platform",
      "category": "Data"
    },
    {
      "id": "206",
      "title": "Yous",
      "url": "https://yous.ai",
      "description": "AI personal development coach",
      "category": "Personal Development"
    },
    {
      "id": "207",
      "title": "Alphy",
      "url": "https://alphy.app",
      "description": "AI video content analysis",
      "category": "Video"
    },
    {
      "id": "208",
      "title": "Stenography",
      "url": "https://stenography.dev",
      "description": "AI code documentation generator",
      "category": "Development"
    },
    {
      "id": "209",
      "title": "Namelix",
      "url": "https://namelix.com",
      "description": "AI business name generator",
      "category": "Business"
    },
    {
      "id": "210",
      "title": "Everypixel",
      "url": "https://everypixel.com",
      "description": "AI image quality assessment",
      "category": "Image"
    },
    {
      "id": "211",
      "title": "Flatlogic",
      "url": "https://flatlogic.com",
      "description": "AI web app template generator",
      "category": "Development"
    },
    {
      "id": "212",
      "title": "Mlflow",
      "url": "https://mlflow.org",
      "description": "Open source ML lifecycle platform",
      "category": "Development"
    },
    {
      "id": "213",
      "title": "Kubeflow",
      "url": "https://kubeflow.org",
      "description": "ML toolkit for Kubernetes",
      "category": "Development"
    },
    {
      "id": "214",
      "title": "DVC",
      "url": "https://dvc.org",
      "description": "Open-source ML version control",
      "category": "Development"
    },
    {
      "id": "215",
      "title": "Metaflow",
      "url": "https://metaflow.org",
      "description": "ML lifecycle management framework",
      "category": "Development"
    },
    {
      "id": "216",
      "title": "Prefect",
      "url": "https://prefect.io",
      "description": "ML workflow orchestration platform",
      "category": "Development"
    },
    {
      "id": "217",
      "title": "Neptune.ai",
      "url": "https://neptune.ai",
      "description": "ML experiment tracking platform",
      "category": "Development"
    },
    {
      "id": "218",
      "title": "Determined AI",
      "url": "https://determined.ai",
      "description": "ML model training platform",
      "category": "Development"
    },
    {
      "id": "219",
      "title": "Deepnote",
      "url": "https://deepnote.com",
      "description": "Collaborative AI notebook platform",
      "category": "Development"
    },
    {
      "id": "220",
      "title": "Paperspace",
      "url": "https://paperspace.com",
      "description": "ML development cloud platform",
      "category": "Development"
    },
    {
      "id": "221",
      "title": "Activeloop",
      "url": "https://activeloop.ai",
      "description": "Data streaming for AI training",
      "category": "Data"
    },
    {
      "id": "222",
      "title": "Galileo AI",
      "url": "https://usegalileo.ai",
      "description": "AI UI/UX design platform",
      "category": "Design"
    },
    {
      "id": "223",
      "title": "Mintlify Doc Writer",
      "url": "https://mintlify.com",
      "description": "AI documentation generator",
      "category": "Documentation"
    },
    {
      "id": "224",
      "title": "Shellkit",
      "url": "https://shellkit.ai",
      "description": "AI command line assistant",
      "category": "Development"
    },
    {
      "id": "225",
      "title": "Whimsical AI",
      "url": "https://whimsical.com/ai",
      "description": "AI-powered diagramming tool",
      "category": "Design"
    },
    {
      "id": "226",
      "title": "Cogram",
      "url": "https://cogram.com",
      "description": "AI meeting assistant",
      "category": "Productivity"
    },
    {
      "id": "227",
      "title": "Aomni",
      "url": "https://aomni.com",
      "description": "AI-powered market research",
      "category": "Research"
    },
    {
      "id": "228",
      "title": "Tldrdev",
      "url": "https://tldrdev.ai",
      "description": "AI code documentation tool",
      "category": "Development"
    },
    {
      "id": "229",
      "title": "Dora",
      "url": "https://dora.run",
      "description": "AI development workflow platform",
      "category": "Development"
    },
    {
      "id": "230",
      "title": "Superposition",
      "url": "https://superposition.com",
      "description": "AI design tool integration",
      "category": "Design"
    },
    {
      "id": "231",
      "title": "Harvey AI",
      "url": "https://harvey.ai",
      "description": "AI legal research assistant",
      "category": "Legal"
    },
    {
      "id": "232",
      "title": "Spellbook",
      "url": "https://spellbook.legal",
      "description": "AI contract drafting tool",
      "category": "Legal"
    },
    {
      "id": "233",
      "title": "Viable",
      "url": "https://askviable.com",
      "description": "AI customer feedback analysis",
      "category": "Business"
    },
    {
      "id": "234",
      "title": "Poly AI",
      "url": "https://poly.ai",
      "description": "AI customer service voice assistant",
      "category": "Customer Service"
    },
    {
      "id": "235",
      "title": "Remarkability",
      "url": "https://remarkability.ai",
      "description": "AI content optimization platform",
      "category": "Marketing"
    },
    {
      "id": "236",
      "title": "Dubbing.ai",
      "url": "https://dubbing.ai",
      "description": "AI video dubbing platform",
      "category": "Video"
    },
    {
      "id": "237",
      "title": "Audiostack",
      "url": "https://audiostack.ai",
      "description": "AI audio processing platform",
      "category": "Audio"
    },
    {
      "id": "238",
      "title": "Voicemod AI",
      "url": "https://voicemod.ai",
      "description": "AI voice transformation tool",
      "category": "Audio"
    },
    {
      "id": "239",
      "title": "Supertranslate",
      "url": "https://supertranslate.ai",
      "description": "AI video translation platform",
      "category": "Translation"
    },
    {
      "id": "240",
      "title": "Rationale",
      "url": "https://rationale.jina.ai",
      "description": "AI decision-making assistant",
      "category": "Productivity"
    },
    {
      "id": "241",
      "title": "Artifact",
      "url": "https://artifact.news",
      "description": "AI news curation platform",
      "category": "News"
    },
    {
      "id": "242",
      "title": "Elicit",
      "url": "https://elicit.org",
      "description": "AI research assistant",
      "category": "Research"
    },
    {
      "id": "243",
      "title": "Consensus",
      "url": "https://consensus.app",
      "description": "AI academic research search",
      "category": "Research"
    },
    {
      "id": "244",
      "title": "Semantic Scholar",
      "url": "https://semanticscholar.org",
      "description": "AI-powered academic search",
      "category": "Research"
    },
    {
      "id": "245",
      "title": "Scispace",
      "url": "https://scispace.com",
      "description": "AI research paper explorer",
      "category": "Research"
    },
    {
      "id": "246",
      "title": "Paperpal",
      "url": "https://paperpal.com",
      "description": "AI academic writing assistant",
      "category": "Research"
    },
    {
      "id": "247",
      "title": "Explainpaper",
      "url": "https://explainpaper.com",
      "description": "AI research paper explainer",
      "category": "Research"
    },
    {
      "id": "248",
      "title": "Scholarcy",
      "url": "https://scholarcy.com",
      "description": "AI research summarization tool",
      "category": "Research"
    },
    {
      "id": "249",
      "title": "Typeset",
      "url": "https://typeset.io",
      "description": "AI research writing platform",
      "category": "Research"
    },
    {
      "id": "250",
      "title": "Jenni",
      "url": "https://jenni.ai",
      "description": "AI academic writing assistant",
      "category": "Writing"
    },
    {
      "id": "251",
      "title": "Parsec",
      "url": "https://parsec.ai",
      "description": "AI manufacturing optimization",
      "category": "Manufacturing"
    },
    {
      "id": "252",
      "title": "Voxel",
      "url": "https://voxel.ai",
      "description": "AI workplace safety platform",
      "category": "Safety"
    },
    {
      "id": "253",
      "title": "Faktory",
      "url": "https://faktory.ai",
      "description": "AI industrial automation",
      "category": "Manufacturing"
    },
    {
      "id": "254",
      "title": "Robust Intelligence",
      "url": "https://robustintelligence.com",
      "description": "AI model security platform",
      "category": "Security"
    },
    {
      "id": "255",
      "title": "Arthur AI",
      "url": "https://arthur.ai",
      "description": "AI monitoring platform",
      "category": "Development"
    },
    {
      "id": "256",
      "title": "Monitaur",
      "url": "https://monitaur.ai",
      "description": "AI governance platform",
      "category": "Governance"
    },
    {
      "id": "257",
      "title": "Truera",
      "url": "https://truera.com",
      "description": "AI model quality platform",
      "category": "Development"
    },
    {
      "id": "258",
      "title": "Arize",
      "url": "https://arize.com",
      "description": "ML observability platform",
      "category": "Development"
    },
    {
      "id": "259",
      "title": "Fiddler",
      "url": "https://fiddler.ai",
      "description": "AI monitoring and explainability",
      "category": "Development"
    },
    {
      "id": "260",
      "title": "Weights & Biases",
      "url": "https://wandb.ai",
      "description": "ML experiment tracking",
      "category": "Development"
    },
    {
      "id": "261",
      "title": "Aporia",
      "url": "https://aporia.com",
      "description": "ML monitoring platform",
      "category": "Development"
    },
    {
      "id": "262",
      "title": "Graft",
      "url": "https://graft.ai",
      "description": "AI deployment platform",
      "category": "Development"
    },
    {
      "id": "263",
      "title": "BentoML",
      "url": "https://bentoml.com",
      "description": "ML model serving framework",
      "category": "Development"
    },
    {
      "id": "264",
      "title": "Seldon",
      "url": "https://seldon.io",
      "description": "ML deployment platform",
      "category": "Development"
    },
    {
      "id": "265",
      "title": "Valohai",
      "url": "https://valohai.com",
      "description": "MLOps platform",
      "category": "Development"
    },
    {
      "id": "266",
      "title": "Deepchecks",
      "url": "https://deepchecks.com",
      "description": "ML testing platform",
      "category": "Development"
    },
    {
      "id": "267",
      "title": "Whylabs",
      "url": "https://whylabs.ai",
      "description": "ML monitoring platform",
      "category": "Development"
    },
    {
      "id": "268",
      "title": "Evidently AI",
      "url": "https://evidentlyai.com",
      "description": "ML monitoring tools",
      "category": "Development"
    },
    {
      "id": "269",
      "title": "Datatron",
      "url": "https://datatron.com",
      "description": "MLOps automation platform",
      "category": "Development"
    },
    {
      "id": "270",
      "title": "Domino Data Lab",
      "url": "https://dominodatalab.com",
      "description": "Enterprise MLOps platform",
      "category": "Enterprise"
    },
    {
      "id": "271",
      "title": "Snorkel AI",
      "url": "https://snorkel.ai",
      "description": "Data labeling automation platform",
      "category": "Data"
    },
    {
      "id": "272",
      "title": "Weights & Biases",
      "url": "https://wandb.ai",
      "description": "ML experiment tracking platform",
      "category": "Development"
    },
    {
      "id": "273",
      "title": "Explorium",
      "url": "https://explorium.ai",
      "description": "External data platform for ML",
      "category": "Data"
    },
    {
      "id": "274",
      "title": "Deepset",
      "url": "https://deepset.ai",
      "description": "NLP framework and platform",
      "category": "Development"
    },
    {
      "id": "275",
      "title": "Baseplate",
      "url": "https://baseplate.ai",
      "description": "AI application framework",
      "category": "Development"
    },
    {
      "id": "276",
      "title": "Mathpix",
      "url": "https://mathpix.com",
      "description": "AI math OCR and conversion",
      "category": "Education"
    },
    {
      "id": "277",
      "title": "Photoroom Business",
      "url": "https://business.photoroom.com",
      "description": "AI product photography platform",
      "category": "Photography"
    },
    {
      "id": "278",
      "title": "Stable Attribution",
      "url": "https://stable.art",
      "description": "AI art attribution platform",
      "category": "AI Art"
    },
    {
      "id": "279",
      "title": "Vectorart.ai",
      "url": "https://vectorart.ai",
      "description": "AI vector art generation",
      "category": "Design"
    },
    {
      "id": "280",
      "title": "Alpaca",
      "url": "https://alpaca.ai",
      "description": "AI trading API platform",
      "category": "Finance"
    },
    {
      "id": "281",
      "title": "Axiom",
      "url": "https://axiom.ai",
      "description": "AI browser automation platform",
      "category": "Automation"
    },
    {
      "id": "282",
      "title": "Datasaur",
      "url": "https://datasaur.ai",
      "description": "AI data labeling platform",
      "category": "Data"
    },
    {
      "id": "283",
      "title": "Deepbrain",
      "url": "https://deepbrain.io",
      "description": "AI avatar creation platform",
      "category": "Video"
    },
    {
      "id": "284",
      "title": "Smartwriter",
      "url": "https://smartwriter.ai",
      "description": "AI personalized email writer",
      "category": "Writing"
    },
    {
      "id": "285",
      "title": "Whereby Meetings",
      "url": "https://whereby.com",
      "description": "AI-powered video meetings",
      "category": "Communication"
    },
    {
      "id": "286",
      "title": "Scenario",
      "url": "https://scenario.gg",
      "description": "AI game asset generation",
      "category": "Gaming"
    },
    {
      "id": "287",
      "title": "Inworld",
      "url": "https://inworld.ai",
      "description": "AI character creation platform",
      "category": "Gaming"
    },
    {
      "id": "288",
      "title": "Respeecher",
      "url": "https://respeecher.com",
      "description": "AI voice cloning for media",
      "category": "Audio"
    },
    {
      "id": "289",
      "title": "Resemble",
      "url": "https://resemble.ai",
      "description": "AI voice cloning platform",
      "category": "Audio"
    },
    {
      "id": "290",
      "title": "Symbl.ai",
      "url": "https://symbl.ai",
      "description": "Conversation intelligence API",
      "category": "API"
    },
    {
      "id": "291",
      "title": "Delphia",
      "url": "https://delphia.com",
      "description": "AI investment platform",
      "category": "Finance"
    },
    {
      "id": "292",
      "title": "Akkio",
      "url": "https://akkio.com",
      "description": "No-code AI analytics platform",
      "category": "Analytics"
    },
    {
      "id": "293",
      "title": "Noogata",
      "url": "https://noogata.com",
      "description": "No-code AI analytics platform",
      "category": "Analytics"
    },
    {
      "id": "294",
      "title": "Diagrams",
      "url": "https://diagrams.net",
      "description": "AI-assisted diagramming tool",
      "category": "Productivity"
    },
    {
      "id": "295",
      "title": "Liner.ai",
      "url": "https://liner.ai",
      "description": "AI research assistant",
      "category": "Research"
    },
    {
      "id": "296",
      "title": "Lobe",
      "url": "https://lobe.ai",
      "description": "Easy ML model training",
      "category": "Development"
    },
    {
      "id": "297",
      "title": "Voiceflow",
      "url": "https://voiceflow.com",
      "description": "Conversational AI design platform",
      "category": "Development"
    },
    {
      "id": "298",
      "title": "Brancher",
      "url": "https://brancher.ai",
      "description": "AI workflow automation platform",
      "category": "Automation"
    },
    {
      "id": "299",
      "title": "Shaped",
      "url": "https://shaped.ai",
      "description": "AI testing automation platform",
      "category": "Development"
    },
    {
      "id": "300",
      "title": "Deep AI",
      "url": "https://deepai.org",
      "description": "AI model API marketplace",
      "category": "API"
    },
    {
      "id": "301",
      "title": "Outverse",
      "url": "https://outverse.com",
      "description": "AI community building platform",
      "category": "Community"
    },
    {
      "id": "302",
      "title": "Patronus AI",
      "url": "https://patronus.ai",
      "description": "AI model monitoring and security",
      "category": "Security"
    },
    {
      "id": "303",
      "title": "Contextual",
      "url": "https://contextual.ai",
      "description": "AI context understanding platform",
      "category": "Development"
    },
    {
      "id": "304",
      "title": "Steamship",
      "url": "https://steamship.com",
      "description": "AI application backend platform",
      "category": "Development"
    },
    {
      "id": "305",
      "title": "Marvin",
      "url": "https://askmarvin.ai",
      "description": "AI developer assistant",
      "category": "Development"
    },
    {
      "id": "306",
      "title": "Embedchain",
      "url": "https://embedchain.ai",
      "description": "AI data embedding platform",
      "category": "Development"
    },
    {
      "id": "307",
      "title": "Petals",
      "url": "https://petals.dev",
      "description": "Distributed AI model running",
      "category": "Development"
    },
    {
      "id": "308",
      "title": "Vellum",
      "url": "https://vellum.ai",
      "description": "LLM development platform",
      "category": "Development"
    },
    {
      "id": "309",
      "title": "Galileo XP",
      "url": "https://galileo-xp.ai",
      "description": "AI experience design platform",
      "category": "Design"
    },
    {
      "id": "310",
      "title": "Aleph Alpha",
      "url": "https://aleph-alpha.com",
      "description": "Enterprise AI development platform",
      "category": "Enterprise"
    },
    {
      "id": "311",
      "title": "Safehaven",
      "url": "https://safehaven.ai",
      "description": "AI security testing platform",
      "category": "Security"
    },
    {
      "id": "312",
      "title": "Datomize",
      "url": "https://datomize.com",
      "description": "AI synthetic data platform",
      "category": "Data"
    },
    {
      "id": "313",
      "title": "Gretel",
      "url": "https://gretel.ai",
      "description": "Synthetic data generation platform",
      "category": "Data"
    },
    {
      "id": "314",
      "title": "Mostly AI",
      "url": "https://mostly.ai",
      "description": "AI synthetic data generation",
      "category": "Data"
    },
    {
      "id": "315",
      "title": "Tonic",
      "url": "https://tonic.ai",
      "description": "Synthetic data platform",
      "category": "Data"
    },
    {
      "id": "316",
      "title": "Datagen",
      "url": "https://datagen.tech",
      "description": "Synthetic data for computer vision",
      "category": "Data"
    },
    {
      "id": "317",
      "title": "Synthesis AI",
      "url": "https://synthesis.ai",
      "description": "Synthetic data for AI training",
      "category": "Data"
    },
    {
      "id": "318",
      "title": "CVAT",
      "url": "https://cvat.ai",
      "description": "Computer vision annotation tool",
      "category": "Development"
    },
    {
      "id": "319",
      "title": "V7 Labs",
      "url": "https://v7labs.com",
      "description": "AI training data platform",
      "category": "Development"
    },
    {
      "id": "320",
      "title": "Dataloop",
      "url": "https://dataloop.ai",
      "description": "Data pipeline automation platform",
      "category": "Data"
    },
    {
      "id": "321",
      "title": "Hasty",
      "url": "https://hasty.ai",
      "description": "AI-powered data labeling",
      "category": "Data"
    },
    {
      "id": "322",
      "title": "Supervisely",
      "url": "https://supervisely.com",
      "description": "Computer vision development platform",
      "category": "Development"
    },
    {
      "id": "323",
      "title": "Encord",
      "url": "https://encord.com",
      "description": "Training data platform",
      "category": "Development"
    },
    {
      "id": "324",
      "title": "Lightly",
      "url": "https://lightly.ai",
      "description": "Data curation platform",
      "category": "Data"
    },
    {
      "id": "325",
      "title": "Segments",
      "url": "https://segments.ai",
      "description": "AI data annotation platform",
      "category": "Data"
    },
    {
      "id": "326",
      "title": "Datasaur",
      "url": "https://datasaur.ai",
      "description": "NLP data labeling platform",
      "category": "Data"
    },
    {
      "id": "327",
      "title": "Humanloop",
      "url": "https://humanloop.com",
      "description": "AI feedback collection platform",
      "category": "Development"
    },
    {
      "id": "328",
      "title": "Argilla",
      "url": "https://argilla.io",
      "description": "Data curation for NLP",
      "category": "Data"
    },
    {
      "id": "329",
      "title": "Label Studio",
      "url": "https://labelstud.io",
      "description": "Open source data labeling",
      "category": "Data"
    },
    {
      "id": "330",
      "title": "Toloka",
      "url": "https://toloka.ai",
      "description": "Crowdsourced data labeling",
      "category": "Data"
    },
    {
      "id": "331",
      "title": "Heartex",
      "url": "https://heartex.ai",
      "description": "Data labeling automation",
      "category": "Data"
    },
    {
      "id": "332",
      "title": "Mindee",
      "url": "https://mindee.com",
      "description": "Document parsing API",
      "category": "API"
    },
    {
      "id": "333",
      "title": "Docugami",
      "url": "https://docugami.com",
      "description": "Document understanding AI",
      "category": "Documents"
    },
    {
      "id": "334",
      "title": "Doculabs",
      "url": "https://doculabs.io",
      "description": "Document intelligence platform",
      "category": "Documents"
    },
    {
      "id": "335",
      "title": "Attestiv",
      "url": "https://attestiv.com",
      "description": "Digital media authentication",
      "category": "Security"
    },
    {
      "id": "336",
      "title": "Deepware",
      "url": "https://deepware.ai",
      "description": "Deepfake detection platform",
      "category": "Security"
    },
    {
      "id": "337",
      "title": "Sensity",
      "url": "https://sensity.ai",
      "description": "Deep fake detection platform",
      "category": "Security"
    },
    {
      "id": "338",
      "title": "Originality.ai",
      "url": "https://originality.ai",
      "description": "AI content detection",
      "category": "Content"
    },
    {
      "id": "339",
      "title": "GPTZero",
      "url": "https://gptzero.me",
      "description": "AI text detection tool",
      "category": "Content"
    },
    {
      "id": "340",
      "title": "Undetectable.ai",
      "url": "https://undetectable.ai",
      "description": "AI text humanization",
      "category": "Content"
    },
    {
      "id": "341",
      "title": "Sapling",
      "url": "https://sapling.ai",
      "description": "AI writing assistant",
      "category": "Writing"
    },
    {
      "id": "342",
      "title": "Hemingway",
      "url": "https://hemingwayapp.com",
      "description": "AI writing clarity tool",
      "category": "Writing"
    },
    {
      "id": "343",
      "title": "ProWritingAid",
      "url": "https://prowritingaid.com",
      "description": "AI writing enhancement",
      "category": "Writing"
    },
    {
      "id": "344",
      "title": "Watchtower",
      "url": "https://watchtower.ai",
      "description": "AI privacy compliance",
      "category": "Security"
    },
    {
      "id": "345",
      "title": "Snowflake AI",
      "url": "https://snowflake.com/ai",
      "description": "Enterprise AI data platform",
      "category": "Enterprise"
    },
    {
      "id": "346",
      "title": "Alloy",
      "url": "https://alloy.ai",
      "description": "AI supply chain optimization",
      "category": "Business"
    },
    {
      "id": "347",
      "title": "Particular",
      "url": "https://particular.ai",
      "description": "AI graphic design platform",
      "category": "Design"
    },
    {
      "id": "348",
      "title": "Primer",
      "url": "https://primer.ai",
      "description": "AI intelligence analysis",
      "category": "Intelligence"
    },
    {
      "id": "349",
      "title": "Abnormal Security",
      "url": "https://abnormalsecurity.com",
      "description": "AI email security platform",
      "category": "Security"
    },
    {
      "id": "350",
      "title": "Cyberint",
      "url": "https://cyberint.com",
      "description": "AI threat intelligence",
      "category": "Security"
    },
    {
      "id": "351",
      "title": "Darktrace",
      "url": "https://darktrace.com",
      "description": "AI cybersecurity platform",
      "category": "Security"
    },
    {
      "id": "352",
      "title": "Blue Hexagon",
      "url": "https://bluehexagon.ai",
      "description": "AI security platform",
      "category": "Security"
    },
    {
      "id": "353",
      "title": "SentinelOne",
      "url": "https://sentinelone.com",
      "description": "AI endpoint security",
      "category": "Security"
    },
    {
      "id": "354",
      "title": "Vectra AI",
      "url": "https://vectra.ai",
      "description": "AI threat detection",
      "category": "Security"
    },
    {
      "id": "355",
      "title": "Deep Instinct",
      "url": "https://deepinstinct.com",
      "description": "AI cybersecurity prevention",
      "category": "Security"
    },
    {
      "id": "356",
      "title": "Cylance",
      "url": "https://cylance.com",
      "description": "AI antivirus platform",
      "category": "Security"
    },
    {
      "id": "357",
      "title": "Recorded Future",
      "url": "https://recordedfuture.com",
      "description": "AI threat intelligence",
      "category": "Security"
    },
    {
      "id": "358",
      "title": "RapidSOS",
      "url": "https://rapidsos.com",
      "description": "AI emergency response",
      "category": "Emergency"
    },
    {
      "id": "359",
      "title": "Carbyne",
      "url": "https://carbyne911.com",
      "description": "AI emergency call platform",
      "category": "Emergency"
    },
    {
      "id": "360",
      "title": "Eigen Technologies",
      "url": "https://eigen.co",
      "description": "AI document analysis",
      "category": "Documents"
    },
    {
      "id": "361",
      "title": "Hypersonix",
      "url": "https://hypersonix.ai",
      "description": "AI business intelligence",
      "category": "Business"
    },
    {
      "id": "362",
      "title": "Skai",
      "url": "https://skai.io",
      "description": "AI marketing intelligence",
      "category": "Marketing"
    },
    {
      "id": "363",
      "title": "Crayon",
      "url": "https://crayon.co",
      "description": "AI competitive intelligence",
      "category": "Business"
    },
    {
      "id": "364",
      "title": "Klue",
      "url": "https://klue.com",
      "description": "AI competitive analysis",
      "category": "Business"
    },
    {
      "id": "365",
      "title": "Cipher",
      "url": "https://cipher.ai",
      "description": "AI competitive intelligence",
      "category": "Business"
    },
    {
      "id": "366",
      "title": "Pathmind",
      "url": "https://pathmind.com",
      "description": "AI reinforcement learning",
      "category": "Development"
    },
    {
      "id": "367",
      "title": "Cohere For AI",
      "url": "https://cohere.for.ai",
      "description": "AI research lab platform",
      "category": "Research"
    },
    {
      "id": "368",
      "title": "AllenAI",
      "url": "https://allenai.org",
      "description": "AI research institute",
      "category": "Research"
    },
    {
      "id": "369",
      "title": "EleutherAI",
      "url": "https://eleuther.ai",
      "description": "Open AI research group",
      "category": "Research"
    },
    {
      "id": "370",
      "title": "CarperAI",
      "url": "https://carper.ai",
      "description": "AI research organization",
      "category": "Research"
    },
    {
      "id": "371",
      "title": "StabilityAI Research",
      "url": "https://research.stability.ai",
      "description": "AI research platform",
      "category": "Research"
    },
    {
      "id": "372",
      "title": "Laion",
      "url": "https://laion.ai",
      "description": "Open AI research org",
      "category": "Research"
    },
    {
      "id": "373",
      "title": "Together Research",
      "url": "https://together.xyz/research",
      "description": "Collaborative AI research",
      "category": "Research"
    },
    {
      "id": "374",
      "title": "BigScience",
      "url": "https://bigscience.huggingface.co",
      "description": "Open science AI initiative",
      "category": "Research"
    },
    {
      "id": "375",
      "title": "MosaiQ",
      "url": "https://mosaiq.ai",
      "description": "AI chip design platform",
      "category": "Hardware"
    },
    {
      "id": "376",
      "title": "Graphcore",
      "url": "https://graphcore.ai",
      "description": "AI processor technology",
      "category": "Hardware"
    },
    {
      "id": "377",
      "title": "Cerebras",
      "url": "https://cerebras.net",
      "description": "AI compute systems",
      "category": "Hardware"
    },
    {
      "id": "378",
      "title": "SambaNova",
      "url": "https://sambanova.ai",
      "description": "AI computing platform",
      "category": "Hardware"
    },
    {
      "id": "379",
      "title": "Groq",
      "url": "https://groq.com",
      "description": "AI tensor processing",
      "category": "Hardware"
    },
    {
      "id": "380",
      "title": "Rain AI",
      "url": "https://rain.ai",
      "description": "AI chip technology",
      "category": "Hardware"
    },
    {
      "id": "381",
      "title": "Mythic",
      "url": "https://mythic-ai.com",
      "description": "Analog AI processors",
      "category": "Hardware"
    },
    {
      "id": "382",
      "title": "Lightmatter",
      "url": "https://lightmatter.co",
      "description": "Photonic AI computing",
      "category": "Hardware"
    },
    {
      "id": "383",
      "title": "Luminous",
      "url": "https://luminous.co",
      "description": "AI computing infrastructure",
      "category": "Hardware"
    },
    {
      "id": "384",
      "title": "Hailo",
      "url": "https://hailo.ai",
      "description": "Edge AI processors",
      "category": "Hardware"
    },
    {
      "id": "385",
      "title": "Tenstorrent",
      "url": "https://tenstorrent.com",
      "description": "AI processor architecture",
      "category": "Hardware"
    },
    {
      "id": "386",
      "title": "BrainChip",
      "url": "https://brainchip.com",
      "description": "Neuromorphic AI chips",
      "category": "Hardware"
    },
    {
      "id": "387",
      "title": "Blaize",
      "url": "https://blaize.com",
      "description": "Edge AI computing",
      "category": "Hardware"
    },
    {
      "id": "388",
      "title": "Kneron",
      "url": "https://kneron.com",
      "description": "Edge AI solutions",
      "category": "Hardware"
    },
    {
      "id": "389",
      "title": "Synthesia Studio",
      "url": "https://synthesia.io/studio",
      "description": "AI video creation suite",
      "category": "Video"
    },
    {
      "id": "390",
      "title": "AIFluence",
      "url": "https://aifluence.com",
      "description": "AI influencer marketing",
      "category": "Marketing"
    },
    {
      "id": "391",
      "title": "Veritone",
      "url": "https://veritone.com",
      "description": "Enterprise AI platform",
      "category": "Enterprise"
    },
    {
      "id": "392",
      "title": "Deep Learning Studio",
      "url": "https://deepcognition.ai",
      "description": "Visual deep learning platform",
      "category": "Development"
    },
    {
      "id": "393",
      "title": "Konstellation",
      "url": "https://konstellation.com",
      "description": "AI investment platform",
      "category": "Finance"
    },
    {
      "id": "394",
      "title": "Qraft",
      "url": "https://qraft.ai",
      "description": "AI-powered investment",
      "category": "Finance"
    },
    {
      "id": "395",
      "title": "WorldQuant",
      "url": "https://worldquant.com",
      "description": "AI quantitative investing",
      "category": "Finance"
    },
    {
      "id": "396",
      "title": "SigTech",
      "url": "https://sigtech.com",
      "description": "AI trading platform",
      "category": "Finance"
    },
    {
      "id": "397",
      "title": "Kavout",
      "url": "https://kavout.com",
      "description": "AI investment research",
      "category": "Finance"
    },
    {
      "id": "398",
      "title": "EquBot",
      "url": "https://equbot.com",
      "description": "AI investment analysis",
      "category": "Finance"
    },
    {
      "id": "399",
      "title": "Causality Link",
      "url": "https://causalitylink.com",
      "description": "AI financial research",
      "category": "Finance"
    },
    {
      "id": "400",
      "title": "RavenPack",
      "url": "https://ravenpack.com",
      "description": "AI news analytics",
      "category": "Analytics"
    },
    {
      "id": "401",
      "title": "Amenity Analytics",
      "url": "https://amenityanalytics.com",
      "description": "AI text analytics",
      "category": "Analytics"
    },
    {
      "id": "402",
      "title": "Accern",
      "url": "https://accern.com",
      "description": "AI financial analytics",
      "category": "Finance"
    },
    {
      "id": "403",
      "title": "AlphaSense",
      "url": "https://alpha-sense.com",
      "description": "AI market intelligence",
      "category": "Business"
    },
    {
      "id": "404",
      "title": "Sentieo",
      "url": "https://sentieo.com",
      "description": "AI financial research",
      "category": "Finance"
    },
    {
      "id": "405",
      "title": "Kensho",
      "url": "https://kensho.com",
      "description": "AI market analytics",
      "category": "Finance"
    },
    {
      "id": "406",
      "title": "Orbital Insight",
      "url": "https://orbitalinsight.com",
      "description": "AI geospatial analytics",
      "category": "Analytics"
    },
    {
      "id": "407",
      "title": "SpaceKnow",
      "url": "https://spaceknow.com",
      "description": "Satellite imagery analytics",
      "category": "Analytics"
    },
    {
      "id": "408",
      "title": "Cape Analytics",
      "url": "https://capeanalytics.com",
      "description": "AI property intelligence",
      "category": "Real Estate"
    },
    {
      "id": "409",
      "title": "Skyway AI",
      "url": "https://skyway.ai",
      "description": "AI aerospace analytics",
      "category": "Aviation"
    },
    {
      "id": "410",
      "title": "Merlin Labs",
      "url": "https://merlinlabs.com",
      "description": "AI aircraft autonomy",
      "category": "Aviation"
    },
    {
      "id": "411",
      "title": "Shield AI",
      "url": "https://shield.ai",
      "description": "AI defense systems",
      "category": "Defense"
    },
    {
      "id": "412",
      "title": "Anduril",
      "url": "https://anduril.com",
      "description": "AI defense technology",
      "category": "Defense"
    },
    {
      "id": "413",
      "title": "Scale Federal",
      "url": "https://scale.com/federal",
      "description": "AI government solutions",
      "category": "Government"
    },
    {
      "id": "414",
      "title": "Palantir",
      "url": "https://palantir.com",
      "description": "AI data analytics platform",
      "category": "Analytics"
    },
    {
      "id": "415",
      "title": "Rebellion Defense",
      "url": "https://rebelliondefense.com",
      "description": "AI defense software",
      "category": "Defense"
    },
    {
      "id": "416",
      "title": "Primer Federal",
      "url": "https://primer.ai/federal",
      "description": "AI intelligence platform",
      "category": "Government"
    },
    {
      "id": "417",
      "title": "Cogniac",
      "url": "https://cogniac.co",
      "description": "Visual AI platform",
      "category": "Computer Vision"
    },
    {
      "id": "418",
      "title": "Blue River",
      "url": "https://bluerivertechnology.com",
      "description": "AI agriculture technology",
      "category": "Agriculture"
    },
    {
      "id": "419",
      "title": "Prospera",
      "url": "https://prospera.ag",
      "description": "AI farming platform",
      "category": "Agriculture"
    },
    {
      "id": "420",
      "title": "Taranis",
      "url": "https://taranis.ag",
      "description": "AI crop intelligence",
      "category": "Agriculture"
    },
    {
      "id": "421",
      "title": "Farmers Edge",
      "url": "https://farmersedge.ca",
      "description": "AI farm management",
      "category": "Agriculture"
    },
    {
      "id": "422",
      "title": "Arable",
      "url": "https://arable.com",
      "description": "AI crop monitoring",
      "category": "Agriculture"
    },
    {
      "id": "423",
      "title": "Trace Genomics",
      "url": "https://tracegenomics.com",
      "description": "AI soil intelligence",
      "category": "Agriculture"
    },
    {
      "id": "424",
      "title": "Cibo Technologies",
      "url": "https://cibotechnologies.com",
      "description": "AI land intelligence",
      "category": "Agriculture"
    },
    {
      "id": "425",
      "title": "Agrimage",
      "url": "https://agrimage.com",
      "description": "AI crop analysis",
      "category": "Agriculture"
    },
    {
      "id": "426",
      "title": "OneSoil",
      "url": "https://onesoil.ai",
      "description": "AI precision farming platform",
      "category": "Agriculture"
    },
    {
      "id": "427",
      "title": "Plantix",
      "url": "https://plantix.net",
      "description": "AI plant disease detection",
      "category": "Agriculture"
    },
    {
      "id": "428",
      "title": "FarmWise",
      "url": "https://farmwise.io",
      "description": "AI farming robotics",
      "category": "Agriculture"
    },
    {
      "id": "429",
      "title": "Syngenta Digital",
      "url": "https://syngenta.digital",
      "description": "AI crop optimization",
      "category": "Agriculture"
    },
    {
      "id": "430",
      "title": "Infarm",
      "url": "https://infarm.com",
      "description": "AI vertical farming",
      "category": "Agriculture"
    },
    {
      "id": "431",
      "title": "Climate AI",
      "url": "https://climate.ai",
      "description": "AI climate risk platform",
      "category": "Climate"
    },
    {
      "id": "432",
      "title": "ClimateTrace",
      "url": "https://climatetrace.org",
      "description": "AI emissions monitoring",
      "category": "Climate"
    },
    {
      "id": "433",
      "title": "Pachama",
      "url": "https://pachama.com",
      "description": "AI forest carbon analysis",
      "category": "Climate"
    },
    {
      "id": "434",
      "title": "Carbon Chain",
      "url": "https://carbonchain.com",
      "description": "AI carbon tracking",
      "category": "Climate"
    },
    {
      "id": "435",
      "title": "Tomorrow.io",
      "url": "https://tomorrow.io",
      "description": "AI weather intelligence",
      "category": "Climate"
    },
    {
      "id": "436",
      "title": "ClimaCell",
      "url": "https://climacell.co",
      "description": "AI weather forecasting",
      "category": "Climate"
    },
    {
      "id": "437",
      "title": "Cervest",
      "url": "https://cervest.earth",
      "description": "AI climate intelligence",
      "category": "Climate"
    },
    {
      "id": "438",
      "title": "ClimateAi",
      "url": "https://climate.ai",
      "description": "Climate prediction AI",
      "category": "Climate"
    },
    {
      "id": "439",
      "title": "Watershed",
      "url": "https://watershed.com",
      "description": "AI climate platform",
      "category": "Climate"
    },
    {
      "id": "440",
      "title": "Persefoni",
      "url": "https://persefoni.com",
      "description": "AI carbon management",
      "category": "Climate"
    },
    {
      "id": "441",
      "title": "DeepMind Climate",
      "url": "https://deepmind.com/climate",
      "description": "AI climate solutions",
      "category": "Climate"
    },
    {
      "id": "442",
      "title": "Sylvera",
      "url": "https://sylvera.com",
      "description": "AI carbon offset ratings",
      "category": "Climate"
    },
    {
      "id": "443",
      "title": "Carbon Direct",
      "url": "https://carbon-direct.com",
      "description": "AI carbon removal",
      "category": "Climate"
    },
    {
      "id": "444",
      "title": "Insilico Medicine",
      "url": "https://insilico.com",
      "description": "AI drug discovery",
      "category": "Healthcare"
    },
    {
      "id": "445",
      "title": "Atomwise",
      "url": "https://atomwise.com",
      "description": "AI drug development",
      "category": "Healthcare"
    },
    {
      "id": "446",
      "title": "Recursion",
      "url": "https://recursion.com",
      "description": "AI drug discovery platform",
      "category": "Healthcare"
    },
    {
      "id": "447",
      "title": "Insitro",
      "url": "https://insitro.com",
      "description": "AI drug development",
      "category": "Healthcare"
    },
    {
      "id": "448",
      "title": "BenevolentAI",
      "url": "https://benevolent.ai",
      "description": "AI drug discovery",
      "category": "Healthcare"
    },
    {
      "id": "449",
      "title": "Deep Genomics",
      "url": "https://deepgenomics.com",
      "description": "AI genetic medicine",
      "category": "Healthcare"
    },
    {
      "id": "450",
      "title": "Tempus",
      "url": "https://tempus.com",
      "description": "AI precision medicine",
      "category": "Healthcare"
    },
    {
      "id": "451",
      "title": "PathAI",
      "url": "https://pathai.com",
      "description": "AI pathology platform",
      "category": "Healthcare"
    },
    {
      "id": "452",
      "title": "Paige",
      "url": "https://paige.ai",
      "description": "AI cancer diagnosis",
      "category": "Healthcare"
    },
    {
      "id": "453",
      "title": "Zebra Medical",
      "url": "https://zebra-med.com",
      "description": "AI medical imaging",
      "category": "Healthcare"
    },
    {
      "id": "454",
      "title": "Babylon Health",
      "url": "https://babylonhealth.com",
      "description": "AI healthcare platform",
      "category": "Healthcare"
    },
    {
      "id": "455",
      "title": "K Health",
      "url": "https://khealth.com",
      "description": "AI primary care",
      "category": "Healthcare"
    },
    {
      "id": "456",
      "title": "Ada Health",
      "url": "https://ada.com",
      "description": "AI symptom assessment",
      "category": "Healthcare"
    },
    {
      "id": "457",
      "title": "Butterfly Network",
      "url": "https://butterflynetwork.com",
      "description": "AI ultrasound platform",
      "category": "Healthcare"
    },
    {
      "id": "458",
      "title": "Olive AI",
      "url": "https://oliveai.com",
      "description": "AI healthcare automation",
      "category": "Healthcare"
    },
    {
      "id": "459",
      "title": "Relay Medical",
      "url": "https://relaymedical.ai",
      "description": "AI diagnostic solutions",
      "category": "Healthcare"
    },
    {
      "id": "460",
      "title": "Viz.ai",
      "url": "https://viz.ai",
      "description": "AI stroke detection",
      "category": "Healthcare"
    },
    {
      "id": "461",
      "title": "Tempus Labs",
      "url": "https://tempus.com",
      "description": "AI clinical data analysis",
      "category": "Healthcare"
    },
    {
      "id": "462",
      "title": "Eko Health",
      "url": "https://ekohealth.com",
      "description": "AI cardiac monitoring",
      "category": "Healthcare"
    },
    {
      "id": "463",
      "title": "Cardiac AI",
      "url": "https://cardiacai.com",
      "description": "AI heart disease detection",
      "category": "Healthcare"
    },
    {
      "id": "464",
      "title": "Arterys",
      "url": "https://arterys.com",
      "description": "AI medical imaging",
      "category": "Healthcare"
    },
    {
      "id": "465",
      "title": "Subtle Medical",
      "url": "https://subtlemedical.com",
      "description": "AI medical imaging",
      "category": "Healthcare"
    },
    {
      "id": "466",
      "title": "Qure.ai",
      "url": "https://qure.ai",
      "description": "AI radiology platform",
      "category": "Healthcare"
    },
    {
      "id": "467",
      "title": "Enlitic",
      "url": "https://enlitic.com",
      "description": "AI medical imaging",
      "category": "Healthcare"
    },
    {
      "id": "468",
      "title": "RapidAI",
      "url": "https://rapidai.com",
      "description": "AI stroke imaging",
      "category": "Healthcare"
    },
    {
      "id": "469",
      "title": "Aidoc",
      "url": "https://aidoc.com",
      "description": "AI radiology platform",
      "category": "Healthcare"
    },
    {
      "id": "470",
      "title": "Nanox",
      "url": "https://nanox.vision",
      "description": "AI medical imaging",
      "category": "Healthcare"
    },
    {
      "id": "471",
      "title": "Mediktor",
      "url": "https://mediktor.com",
      "description": "AI symptom checker",
      "category": "Healthcare"
    },
    {
      "id": "472",
      "title": "Buoy Health",
      "url": "https://buoyhealth.com",
      "description": "AI health navigator",
      "category": "Healthcare"
    },
    {
      "id": "473",
      "title": "Infermedica",
      "url": "https://infermedica.com",
      "description": "AI diagnostic platform",
      "category": "Healthcare"
    },
    {
      "id": "474",
      "title": "Symptom.AI",
      "url": "https://symptom.ai",
      "description": "AI health assessment",
      "category": "Healthcare"
    },
    {
      "id": "475",
      "title": "Your.MD",
      "url": "https://your.md",
      "description": "AI health assistant",
      "category": "Healthcare"
    },
    {
      "id": "476",
      "title": "Biomind",
      "url": "https://biomind.ai",
      "description": "AI brain imaging analysis",
      "category": "Healthcare"
    },
    {
      "id": "477",
      "title": "BrainCo",
      "url": "https://brainco.tech",
      "description": "AI brain-computer interface",
      "category": "Healthcare"
    },
    {
      "id": "478",
      "title": "Neuralink",
      "url": "https://neuralink.com",
      "description": "AI brain interface tech",
      "category": "Healthcare"
    },
    {
      "id": "479",
      "title": "Kernel",
      "url": "https://kernel.com",
      "description": "AI neurotechnology",
      "category": "Healthcare"
    },
    {
      "id": "480",
      "title": "CTRL-labs",
      "url": "https://ctrl-labs.com",
      "description": "AI neural interface",
      "category": "Healthcare"
    },
    {
      "id": "481",
      "title": "Paradromics",
      "url": "https://paradromics.com",
      "description": "AI neural interface chips",
      "category": "Healthcare"
    },
    {
      "id": "482",
      "title": "DeepLearning.AI",
      "url": "https://deeplearning.ai",
      "description": "AI education platform",
      "category": "Education"
    },
    {
      "id": "483",
      "title": "Fast.ai",
      "url": "https://fast.ai",
      "description": "AI learning platform",
      "category": "Education"
    },
    {
      "id": "484",
      "title": "AI4ALL",
      "url": "https://ai-4-all.org",
      "description": "AI education nonprofit",
      "category": "Education"
    },
    {
      "id": "485",
      "title": "Coursera AI",
      "url": "https://coursera.org/ai",
      "description": "AI course platform",
      "category": "Education"
    },
    {
      "id": "486",
      "title": "Udacity AI",
      "url": "https://udacity.com/ai",
      "description": "AI nanodegree programs",
      "category": "Education"
    },
    {
      "id": "487",
      "title": "OpenAI Gym",
      "url": "https://gym.openai.com",
      "description": "AI training environments",
      "category": "Development"
    },
    {
      "id": "488",
      "title": "Third Space Learning",
      "url": "https://thirdspacelearning.com",
      "description": "AI math tutoring",
      "category": "Education"
    },
    {
      "id": "489",
      "title": "Carnegie Learning",
      "url": "https://carnegielearning.com",
      "description": "AI math education",
      "category": "Education"
    },
    {
      "id": "490",
      "title": "Querium",
      "url": "https://querium.com",
      "description": "AI STEM tutoring",
      "category": "Education"
    },
    {
      "id": "491",
      "title": "Knewton",
      "url": "https://knewton.com",
      "description": "AI adaptive learning",
      "category": "Education"
    },
    {
      "id": "492",
      "title": "Century Tech",
      "url": "https://century.tech",
      "description": "AI learning platform",
      "category": "Education"
    },
    {
      "id": "493",
      "title": "Cognii",
      "url": "https://cognii.com",
      "description": "AI virtual learning assistant",
      "category": "Education"
    },
    {
      "id": "494",
      "title": "Gradescope",
      "url": "https://gradescope.com",
      "description": "AI grading platform",
      "category": "Education"
    },
    {
      "id": "495",
      "title": "Riiid",
      "url": "https://riiid.com",
      "description": "AI education platform",
      "category": "Education"
    },
    {
      "id": "496",
      "title": "Duolingo AI Lab",
      "url": "https://duolingo.com/ai",
      "description": "AI language learning",
      "category": "Education"
    },
    {
      "id": "497",
      "title": "Lingokids",
      "url": "https://lingokids.com",
      "description": "AI language learning for kids",
      "category": "Education"
    },
    {
      "id": "498",
      "title": "ELSA Speak",
      "url": "https://elsaspeak.com",
      "description": "AI pronunciation coach",
      "category": "Education"
    },
    {
      "id": "499",
      "title": "Knowji",
      "url": "https://knowji.com",
      "description": "AI vocabulary learning",
      "category": "Education"
    },
    {
      "id": "500",
      "title": "Busuu",
      "url": "https://busuu.com",
      "description": "AI language learning",
      "category": "Education"
    },
    {
      "id": "501",
      "title": "Liveperson",
      "url": "https://liveperson.com",
      "description": "AI customer engagement",
      "category": "Customer Service"
    },
    {
      "id": "502",
      "title": "Drift",
      "url": "https://drift.com",
      "description": "AI conversational platform",
      "category": "Marketing"
    },
    {
      "id": "503",
      "title": "Ada Support",
      "url": "https://ada.cx",
      "description": "AI customer service",
      "category": "Customer Service"
    },
    {
      "id": "504",
      "title": "Intercom AI",
      "url": "https://intercom.com/ai",
      "description": "AI customer messaging",
      "category": "Customer Service"
    },
    {
      "id": "505",
      "title": "Zendesk AI",
      "url": "https://zendesk.com/ai",
      "description": "AI customer support",
      "category": "Customer Service"
    },
    {
      "id": "506",
      "title": "Freshworks AI",
      "url": "https://freshworks.com/ai",
      "description": "AI customer engagement",
      "category": "Customer Service"
    },
    {
      "id": "507",
      "title": "Cognigy",
      "url": "https://cognigy.com",
      "description": "Conversational AI platform",
      "category": "Customer Service"
    },
    {
      "id": "508",
      "title": "Ultimate AI",
      "url": "https://ultimate.ai",
      "description": "AI customer service",
      "category": "Customer Service"
    },
    {
      "id": "509",
      "title": "Kore.ai",
      "url": "https://kore.ai",
      "description": "Enterprise chatbot platform",
      "category": "Enterprise"
    },
    {
      "id": "510",
      "title": "Yellow.ai",
      "url": "https://yellow.ai",
      "description": "AI customer experience",
      "category": "Customer Service"
    },
    {
      "id": "511",
      "title": "Amelia",
      "url": "https://amelia.ai",
      "description": "AI business assistant",
      "category": "Enterprise"
    },
    {
      "id": "512",
      "title": "Moveworks",
      "url": "https://moveworks.com",
      "description": "AI IT support",
      "category": "IT"
    },
    {
      "id": "513",
      "title": "Espressive",
      "url": "https://espressive.com",
      "description": "AI employee support",
      "category": "HR"
    },
    {
      "id": "514",
      "title": "Capacity",
      "url": "https://capacity.com",
      "description": "AI knowledge sharing",
      "category": "Enterprise"
    },
    {
      "id": "515",
      "title": "Directly",
      "url": "https://directly.com",
      "description": "AI customer support",
      "category": "Customer Service"
    },
    {
      "id": "516",
      "title": "Forethought",
      "url": "https://forethought.ai",
      "description": "AI customer support",
      "category": "Customer Service"
    },
    {
      "id": "517",
      "title": "Thankful",
      "url": "https://thankful.ai",
      "description": "AI customer service",
      "category": "Customer Service"
    },
    {
      "id": "518",
      "title": "Neuralspace",
      "url": "https://neuralspace.ai",
      "description": "Multilingual AI platform",
      "category": "Language"
    },
    {
      "id": "519",
      "title": "Lilt",
      "url": "https://lilt.com",
      "description": "AI translation platform",
      "category": "Language"
    },
    {
      "id": "520",
      "title": "Unbabel",
      "url": "https://unbabel.com",
      "description": "AI translation service",
      "category": "Language"
    },
    {
      "id": "521",
      "title": "Lengoo",
      "url": "https://lengoo.com",
      "description": "AI translation platform",
      "category": "Language"
    },
    {
      "id": "522",
      "title": "Smartling",
      "url": "https://smartling.com",
      "description": "AI localization platform",
      "category": "Language"
    },
    {
      "id": "523",
      "title": "Language I/O",
      "url": "https://languageio.com",
      "description": "AI customer language",
      "category": "Language"
    },
    {
      "id": "524",
      "title": "Lokalise AI",
      "url": "https://lokalise.com/ai",
      "description": "AI localization tool",
      "category": "Language"
    },
    {
      "id": "525",
      "title": "XTM AI",
      "url": "https://xtm.ai",
      "description": "AI translation management",
      "category": "Language"
    },
    {
      "id": "526",
      "title": "BuildAI",
      "url": "https://buildai.space",
      "description": "AI-powered web development platform",
      "category": "Web Development"
    },
    {
      "id": "527",
      "title": "Wix ADI",
      "url": "https://wix.com/adi",
      "description": "AI website builder",
      "category": "Web Development"
    },
    {
      "id": "528",
      "title": "10Web",
      "url": "https://10web.io",
      "description": "AI website automation platform",
      "category": "Automation"
    },
    {
      "id": "529",
      "title": "Algolia Search",
      "url": "https://algolia.com",
      "description": "AI-powered search engine",
      "category": "Search"
    },
    {
      "id": "530",
      "title": "Elastic AI",
      "url": "https://elastic.co/ai",
      "description": "AI search and analytics",
      "category": "Search"
    },
    {
      "id": "531",
      "title": "DesignBot",
      "url": "https://designbot.ai",
      "description": "AI design automation",
      "category": "Design"
    },
    {
      "id": "532",
      "title": "Designs AI",
      "url": "https://designs.ai",
      "description": "AI design creation platform",
      "category": "Design"
    },
    {
      "id": "533",
      "title": "DataRobot",
      "url": "https://datarobot.com",
      "description": "Enterprise AI data analysis",
      "category": "Data Analysis"
    },
    {
      "id": "534",
      "title": "Databricks",
      "url": "https://databricks.com",
      "description": "Data analytics platform",
      "category": "Analytics"
    },
    {
      "id": "535",
      "title": "SalesWhale",
      "url": "https://saleswhale.com",
      "description": "AI sales engagement",
      "category": "Sales"
    },
    {
      "id": "536",
      "title": "Gong.io",
      "url": "https://gong.io",
      "description": "AI sales intelligence",
      "category": "Sales"
    },
    {
      "id": "537",
      "title": "Chorus.ai",
      "url": "https://chorus.ai",
      "description": "AI sales conversations",
      "category": "Sales"
    },
    {
      "id": "538",
      "title": "Highspot",
      "url": "https://highspot.com",
      "description": "AI sales enablement",
      "category": "Sales"
    },
    {
      "id": "539",
      "title": "Mindshow",
      "url": "https://mindshow.com",
      "description": "AI animation platform",
      "category": "Animation"
    },
    {
      "id": "540",
      "title": "Synthesia",
      "url": "https://synthesia.io",
      "description": "AI video creation",
      "category": "Entertainment"
    },
    {
      "id": "541",
      "title": "Guru",
      "url": "https://getguru.com",
      "description": "AI knowledge management",
      "category": "Knowledge Management"
    },
    {
      "id": "542",
      "title": "Starmind",
      "url": "https://starmind.ai",
      "description": "AI knowledge network",
      "category": "Knowledge Management"
    },
    {
      "id": "543",
      "title": "Bloomreach",
      "url": "https://bloomreach.com",
      "description": "AI-powered ecommerce",
      "category": "Ecommerce"
    },
    {
      "id": "544",
      "title": "Constructor.io",
      "url": "https://constructor.io",
      "description": "AI product discovery",
      "category": "Ecommerce"
    },
    {
      "id": "545",
      "title": "Syte",
      "url": "https://syte.ai",
      "description": "Visual AI for ecommerce",
      "category": "Ecommerce"
    },
    {
      "id": "546",
      "title": "Attentive",
      "url": "https://attentivemobile.com",
      "description": "AI mobile marketing",
      "category": "Marketing"
    },
    {
      "id": "547",
      "title": "Albert",
      "url": "https://albert.ai",
      "description": "AI marketing automation",
      "category": "Marketing"
    },
    {
      "id": "548",
      "title": "Persado",
      "url": "https://persado.com",
      "description": "AI content generation",
      "category": "Content"
    },
    {
      "id": "549",
      "title": "Phrasee",
      "url": "https://phrasee.co",
      "description": "AI copywriting",
      "category": "Content"
    },
    {
      "id": "550",
      "title": "Unity AI",
      "url": "https://unity.com/products/machine-learning-agents",
      "description": "AI game development",
      "category": "Gaming"
    },
    {
      "id": "551",
      "title": "Playfab",
      "url": "https://playfab.com",
      "description": "AI gaming platform",
      "category": "Gaming"
    },
    {
      "id": "552",
      "title": "ModuleWorks",
      "url": "https://moduleworks.com",
      "description": "AI manufacturing software",
      "category": "Manufacturing"
    },
    {
      "id": "553",
      "title": "Augury",
      "url": "https://augury.com",
      "description": "AI machine health",
      "category": "Manufacturing"
    },
    {
      "id": "554",
      "title": "Viscosity",
      "url": "https://viscosity.ai",
      "description": "3D AI modeling",
      "category": "3D"
    },
    {
      "id": "555",
      "title": "Gravity Sketch",
      "url": "https://gravitysketch.com",
      "description": "AI 3D design",
      "category": "3D"
    },
    {
      "id": "556",
      "title": "Magic3D",
      "url": "https://magic3d.ai",
      "description": "AI 3D generation",
      "category": "3D"
    },
    {
      "id": "557",
      "title": "Kdan AI",
      "url": "https://kdanmobile.com/ai",
      "description": "AI document processing",
      "category": "Document Processing"
    },
    {
      "id": "558",
      "title": "Docsumo",
      "url": "https://docsumo.com",
      "description": "AI document analysis",
      "category": "Document Processing"
    },
    {
      "id": "559",
      "title": "DeepL Write",
      "url": "https://deepl.com/write",
      "description": "AI writing assistance",
      "category": "Documentation"
    },
    {
      "id": "560",
      "title": "Smartlook",
      "url": "https://smartlook.com",
      "description": "AI user analytics",
      "category": "Analytics"
    },
    {
      "id": "561",
      "title": "Mixpanel AI",
      "url": "https://mixpanel.com/ai",
      "description": "Product analytics AI",
      "category": "Analytics"
    },
    {
      "id": "562",
      "title": "Workday AI",
      "url": "https://workday.com/ai",
      "description": "AI HR platform",
      "category": "HR"
    },
    {
      "id": "563",
      "title": "Eightfold",
      "url": "https://eightfold.ai",
      "description": "AI talent intelligence",
      "category": "HR"
    },
    {
      "id": "564",
      "title": "Beamery",
      "url": "https://beamery.com",
      "description": "AI talent acquisition",
      "category": "HR"
    },
    {
      "id": "565",
      "title": "Phenom",
      "url": "https://phenom.com",
      "description": "AI talent experience",
      "category": "HR"
    },
    {
      "id": "566",
      "title": "HiredScore",
      "url": "https://hiredscore.com",
      "description": "AI recruiting platform",
      "category": "HR"
    },
    {
      "id": "567",
      "title": "Pymetrics",
      "url": "https://pymetrics.ai",
      "description": "AI talent matching",
      "category": "HR"
    },
    {
      "id": "568",
      "title": "HiredScore",
      "url": "https://hiredscore.com",
      "description": "AI recruitment platform",
      "category": "HR"
    },
    {
      "id": "569",
      "title": "TestGorilla",
      "url": "https://testgorilla.com",
      "description": "AI skills assessment",
      "category": "HR"
    },
    {
      "id": "570",
      "title": "Ideal",
      "url": "https://ideal.com",
      "description": "AI talent screening",
      "category": "HR"
    },
    {
      "id": "571",
      "title": "HiredScore",
      "url": "https://hiredscore.com",
      "description": "AI recruitment automation",
      "category": "HR"
    },
    {
      "id": "572",
      "title": "Visier",
      "url": "https://visier.com",
      "description": "AI people analytics",
      "category": "HR"
    },
    {
      "id": "573",
      "title": "retrain.ai",
      "url": "https://retrain.ai",
      "description": "AI workforce intelligence",
      "category": "HR"
    },
    {
      "id": "574",
      "title": "SeekOut",
      "url": "https://seekout.com",
      "description": "AI talent search",
      "category": "HR"
    },
    {
      "id": "575",
      "title": "Plum",
      "url": "https://plum.io",
      "description": "AI talent assessment",
      "category": "HR"
    },
    {
      "id": "576",
      "title": "RetailNext",
      "url": "https://retailnext.net",
      "description": "AI retail analytics platform",
      "category": "Analytics"
    },
    {
      "id": "577",
      "title": "Cuebiq",
      "url": "https://cuebiq.com",
      "description": "AI location intelligence",
      "category": "Analytics"
    },
    {
      "id": "578",
      "title": "Placer.ai",
      "url": "https://placer.ai",
      "description": "Foot traffic analytics",
      "category": "Analytics"
    },
    {
      "id": "579",
      "title": "SimilarWeb",
      "url": "https://similarweb.com",
      "description": "Digital intelligence platform",
      "category": "Analytics"
    },
    {
      "id": "580",
      "title": "Heap Analytics",
      "url": "https://heap.io",
      "description": "Digital insights platform",
      "category": "Analytics"
    },
    {
      "id": "581",
      "title": "Lattice",
      "url": "https://lattice.com",
      "description": "HR performance management",
      "category": "HR"
    },
    {
      "id": "582",
      "title": "ClearCompany",
      "url": "https://clearcompany.com",
      "description": "Talent management platform",
      "category": "HR"
    },
    {
      "id": "583",
      "title": "Greenhouse AI",
      "url": "https://greenhouse.io",
      "description": "AI recruiting software",
      "category": "HR"
    },
    {
      "id": "584",
      "title": "Climacell",
      "url": "https://climacell.co",
      "description": "Climate intelligence platform",
      "category": "Climate"
    },
    {
      "id": "585",
      "title": "ClimateAi",
      "url": "https://climate.ai",
      "description": "Climate risk platform",
      "category": "Climate"
    },
    {
      "id": "586",
      "title": "Jupiter Intelligence",
      "url": "https://jupiterintel.com",
      "description": "Climate risk analytics",
      "category": "Climate"
    },
    {
      "id": "587",
      "title": "Overstory",
      "url": "https://overstory.com",
      "description": "Climate vegetation monitoring",
      "category": "Climate"
    },
    {
      "id": "588",
      "title": "NCX",
      "url": "https://ncx.com",
      "description": "Forest carbon marketplace",
      "category": "Climate"
    },
    {
      "id": "589",
      "title": "AquaSight",
      "url": "https://aquasight.io",
      "description": "Agricultural water management",
      "category": "Agriculture"
    },
    {
      "id": "590",
      "title": "Cropin",
      "url": "https://cropin.com",
      "description": "Agri-business intelligence",
      "category": "Agriculture"
    },
    {
      "id": "591",
      "title": "AgNext",
      "url": "https://agnext.com",
      "description": "Agricultural quality analysis",
      "category": "Agriculture"
    },
    {
      "id": "592",
      "title": "Kore.ai",
      "url": "https://kore.ai",
      "description": "Customer service automation",
      "category": "Customer Service"
    },
    {
      "id": "593",
      "title": "Talkdesk AI",
      "url": "https://talkdesk.com/ai",
      "description": "AI contact center",
      "category": "Customer Service"
    },
    {
      "id": "594",
      "title": "NICE Enlighten",
      "url": "https://nice.com/enlighten",
      "description": "Customer interaction AI",
      "category": "Customer Service"
    },
    {
      "id": "595",
      "title": "Cortex XSOAR",
      "url": "https://paloaltonetworks.com/cortex",
      "description": "Security orchestration",
      "category": "Security"
    },
    {
      "id": "596",
      "title": "Securonix",
      "url": "https://securonix.com",
      "description": "Security analytics platform",
      "category": "Security"
    },
    {
      "id": "597",
      "title": "Exabeam",
      "url": "https://exabeam.com",
      "description": "Security intelligence",
      "category": "Security"
    },
    {
      "id": "598",
      "title": "Alation",
      "url": "https://alation.com",
      "description": "Data intelligence platform",
      "category": "Data"
    },
    {
      "id": "599",
      "title": "Collibra",
      "url": "https://collibra.com",
      "description": "Data governance platform",
      "category": "Data"
    },
    {
      "id": "600",
      "title": "Talend",
      "url": "https://talend.com",
      "description": "Data integration platform",
      "category": "Data"
    },
    {
      "id": "601",
      "title": "Lingvanex",
      "url": "https://lingvanex.com",
      "description": "AI translation engine",
      "category": "Language"
    },
    {
      "id": "602",
      "title": "Translated",
      "url": "https://translated.com",
      "description": "AI translation service",
      "category": "Language"
    },
    {
      "id": "603",
      "title": "Systran",
      "url": "https://systran.com",
      "description": "Enterprise translation AI",
      "category": "Language"
    },
    {
      "id": "604",
      "title": "Carbon Clean",
      "url": "https://carbonclean.com",
      "description": "Industrial carbon capture",
      "category": "Climate"
    },
    {
      "id": "605",
      "title": "ClimateView",
      "url": "https://climateview.global",
      "description": "Climate transition planning",
      "category": "Climate"
    },
    {
      "id": "606",
      "title": "PrecisionHawk",
      "url": "https://precisionhawk.com",
      "description": "Drone data analytics",
      "category": "Agriculture"
    },
    {
      "id": "607",
      "title": "AgEagle",
      "url": "https://ageagle.com",
      "description": "Agricultural drone solutions",
      "category": "Agriculture"
    },
    {
      "id": "608",
      "title": "Sentera",
      "url": "https://sentera.com",
      "description": "Agricultural intelligence",
      "category": "Agriculture"
    },
    {
      "id": "609",
      "title": "CrowdStrike",
      "url": "https://crowdstrike.com",
      "description": "AI security platform",
      "category": "Security"
    },
    {
      "id": "610",
      "title": "ForgeRock",
      "url": "https://forgerock.com",
      "description": "Identity security platform",
      "category": "Security"
    },
    {
      "id": "611",
      "title": "Abnormal Security",
      "url": "https://abnormalsecurity.com",
      "description": "Email security AI",
      "category": "Security"
    },
    {
      "id": "612",
      "title": "SparkCognition",
      "url": "https://sparkcognition.com",
      "description": "Industrial AI solutions",
      "category": "Manufacturing"
    },
    {
      "id": "613",
      "title": "Bright Machines",
      "url": "https://brightmachines.com",
      "description": "Manufacturing automation",
      "category": "Manufacturing"
    },
    {
      "id": "614",
      "title": "Vanti Analytics",
      "url": "https://vanti-analytics.com",
      "description": "Manufacturing analytics",
      "category": "Manufacturing"
    },
    {
      "id": "615",
      "title": "NuraLogix",
      "url": "https://nuralogix.ai",
      "description": "Healthcare analytics",
      "category": "Analytics"
    },
    {
      "id": "616",
      "title": "Tessian",
      "url": "https://tessian.com",
      "description": "Email security AI",
      "category": "Security"
    },
    {
      "id": "617",
      "title": "Material Security",
      "url": "https://material.security",
      "description": "Email security platform",
      "category": "Security"
    },
    {
      "id": "618",
      "title": "Contrast Security",
      "url": "https://contrastsecurity.com",
      "description": "Application security",
      "category": "Security"
    },
    {
      "id": "619",
      "title": "Snyk",
      "url": "https://snyk.io",
      "description": "Development security",
      "category": "Security"
    },
    {
      "id": "620",
      "title": "Checkmarx",
      "url": "https://checkmarx.com",
      "description": "Application security",
      "category": "Security"
    },
    {
      "id": "621",
      "title": "AgriWebb",
      "url": "https://agriwebb.com",
      "description": "Livestock management",
      "category": "Agriculture"
    },
    {
      "id": "622",
      "title": "Farmers Business Network",
      "url": "https://fbn.com",
      "description": "Agricultural intelligence",
      "category": "Agriculture"
    },
    {
      "id": "623",
      "title": "ClimateAi Crop",
      "url": "https://climate.ai/crop",
      "description": "Crop yield prediction",
      "category": "Climate"
    },
    {
      "id": "624",
      "title": "Carbon Engineering",
      "url": "https://carbonengineering.com",
      "description": "Direct air capture",
      "category": "Climate"
    },
    {
      "id": "625",
      "title": "Nice CXone",
      "url": "https://nice.com/cxone",
      "description": "Customer experience platform",
      "category": "Customer Service"
    },
    {
      "id": "626",
      "title": "Climeworks",
      "url": "https://climeworks.com",
      "description": "Direct air capture tech",
      "category": "Climate"
    },
    {
      "id": "627",
      "title": "Project Canary",
      "url": "https://projectcanary.com",
      "description": "Climate emissions monitoring",
      "category": "Climate"
    },
    {
      "id": "628",
      "title": "Teledyne FLIR",
      "url": "https://flir.com",
      "description": "Thermal imaging hardware",
      "category": "Hardware"
    },
    {
      "id": "629",
      "title": "Prophesee",
      "url": "https://prophesee.ai",
      "description": "Neuromorphic vision sensors",
      "category": "Hardware"
    },
    {
      "id": "630",
      "title": "Leap Motion",
      "url": "https://ultraleap.com",
      "description": "Hand tracking hardware",
      "category": "Hardware"
    },
    {
      "id": "631",
      "title": "Infineon AI",
      "url": "https://infineon.com/ai",
      "description": "AI semiconductor solutions",
      "category": "Hardware"
    },
    {
      "id": "632",
      "title": "Samba Nova",
      "url": "https://sambanova.ai",
      "description": "AI processing units",
      "category": "Hardware"
    },
    {
      "id": "633",
      "title": "Genesys DX",
      "url": "https://genesys.com/dx",
      "description": "Digital customer service",
      "category": "Customer Service"
    },
    {
      "id": "634",
      "title": "Dixa",
      "url": "https://dixa.com",
      "description": "Customer friendship platform",
      "category": "Customer Service"
    },
    {
      "id": "635",
      "title": "Simplr",
      "url": "https://simplr.ai",
      "description": "Customer service automation",
      "category": "Customer Service"
    },
    {
      "id": "636",
      "title": "AgritecFMS",
      "url": "https://agritecfms.com",
      "description": "Farm management system",
      "category": "Agriculture"
    },
    {
      "id": "637",
      "title": "Grownetics",
      "url": "https://grownetics.co",
      "description": "Cultivation optimization",
      "category": "Agriculture"
    },
    {
      "id": "638",
      "title": "Slang.ai",
      "url": "https://slang.ai",
      "description": "Multilingual AI platform",
      "category": "Language"
    },
    {
      "id": "639",
      "title": "Verbit.ai",
      "url": "https://verbit.ai",
      "description": "Transcription and captioning",
      "category": "Language"
    },
    {
      "id": "640",
      "title": "ROSS Intelligence",
      "url": "https://rossintelligence.com",
      "description": "Legal research platform",
      "category": "Legal"
    },
    {
      "id": "641",
      "title": "Luminance",
      "url": "https://luminance.com",
      "description": "Legal document analysis",
      "category": "Legal"
    },
    {
      "id": "642",
      "title": "Graphcore IPU",
      "url": "https://graphcore.ai/ipu",
      "description": "Intelligence processing units",
      "category": "Hardware"
    },
    {
      "id": "643",
      "title": "Syntiant",
      "url": "https://syntiant.com",
      "description": "Deep learning chips",
      "category": "Hardware"
    },
    {
      "id": "644",
      "title": "Cornami",
      "url": "https://cornami.com",
      "description": "AI processor technology",
      "category": "Hardware"
    },
    {
      "id": "645",
      "title": "Koniku",
      "url": "https://koniku.com",
      "description": "Biocomputing hardware",
      "category": "Hardware"
    },
    {
      "id": "646",
      "title": "Workday Skills Cloud",
      "url": "https://workday.com/skills-cloud",
      "description": "HR skills intelligence",
      "category": "HR"
    },
    {
      "id": "647",
      "title": "Gloat",
      "url": "https://gloat.com",
      "description": "Talent marketplace",
      "category": "HR"
    },
    {
      "id": "648",
      "title": "Humantic AI",
      "url": "https://humantic.ai",
      "description": "Candidate assessment",
      "category": "HR"
    },
    {
      "id": "649",
      "title": "Paradox",
      "url": "https://paradox.ai",
      "description": "Recruitment automation",
      "category": "HR"
    },
    {
      "id": "650",
      "title": "Modern Hire",
      "url": "https://modernhire.com",
      "description": "Hiring assessment platform",
      "category": "HR"
    },
    {
      "id": "651",
      "title": "SilkRoad",
      "url": "https://silkroad.com",
      "description": "Talent acquisition platform",
      "category": "HR"
    },
    {
      "id": "652",
      "title": "Arctic Intelligence",
      "url": "https://arctic-intelligence.com",
      "description": "Risk assessment platform",
      "category": "Intelligence"
    },
    {
      "id": "653",
      "title": "AppZen",
      "url": "https://appzen.com",
      "description": "Finance AI platform",
      "category": "Analytics"
    },
    {
      "id": "654",
      "title": "Watershed Climate",
      "url": "https://watershed.com",
      "description": "Climate program platform",
      "category": "Climate"
    },
    {
      "id": "655",
      "title": "Carbon Lighthouse",
      "url": "https://carbonlighthouse.com",
      "description": "Building emissions reduction",
      "category": "Climate"
    },
    {
      "id": "656",
      "title": "Tanium",
      "url": "https://tanium.com",
      "description": "Endpoint security platform",
      "category": "Security"
    },
    {
      "id": "657",
      "title": "Illumio",
      "url": "https://illumio.com",
      "description": "Zero trust security",
      "category": "Security"
    },
    {
      "id": "658",
      "title": "ThreatMetrix",
      "url": "https://threatmetrix.com",
      "description": "Digital identity security",
      "category": "Security"
    },
    {
      "id": "659",
      "title": "BigID",
      "url": "https://bigid.com",
      "description": "Data security platform",
      "category": "Security"
    },
    {
      "id": "660",
      "title": "Datadog Security",
      "url": "https://datadoghq.com/security",
      "description": "Cloud security monitoring",
      "category": "Security"
    },
    {
      "id": "661",
      "title": "Cerebras CS-2",
      "url": "https://cerebras.net/cs2",
      "description": "AI supercomputer chip",
      "category": "Hardware"
    },
    {
      "id": "662",
      "title": "Mythic AI",
      "url": "https://mythic-ai.com",
      "description": "Analog AI processors",
      "category": "Hardware"
    },
    {
      "id": "663",
      "title": "Mixpanel Trends",
      "url": "https://mixpanel.com/trends",
      "description": "Product analytics platform",
      "category": "Analytics"
    },
    {
      "id": "664",
      "title": "Amplitude",
      "url": "https://amplitude.com",
      "description": "Product intelligence platform",
      "category": "Analytics"
    },
    {
      "id": "665",
      "title": "Arable Labs",
      "url": "https://arable.com",
      "description": "Crop intelligence platform",
      "category": "Agriculture"
    },
    {
      "id": "666",
      "title": "Semios",
      "url": "https://semios.com",
      "description": "Precision farming platform",
      "category": "Agriculture"
    },
    {
      "id": "667",
      "title": "Pyka",
      "url": "https://pyka.com",
      "description": "Autonomous agricultural aircraft",
      "category": "Aviation"
    },
    {
      "id": "668",
      "title": "Beta Technologies",
      "url": "https://beta.team",
      "description": "Electric aviation AI",
      "category": "Aviation"
    },
    {
      "id": "669",
      "title": "Anyscale",
      "url": "https://anyscale.com",
      "description": "Distributed computing platform",
      "category": "Data"
    },
    {
      "id": "670",
      "title": "TimeScale",
      "url": "https://timescale.com",
      "description": "Time-series data platform",
      "category": "Data"
    },
    {
      "id": "671",
      "title": "Ascend.io",
      "url": "https://ascend.io",
      "description": "Data pipeline automation",
      "category": "Data"
    },
    {
      "id": "672",
      "title": "Alloy Automation",
      "url": "https://alloy.com",
      "description": "Ecommerce automation platform",
      "category": "Ecommerce"
    },
    {
      "id": "673",
      "title": "Vue.ai",
      "url": "https://vue.ai",
      "description": "Retail automation platform",
      "category": "Ecommerce"
    },
    {
      "id": "674",
      "title": "Clarifai Gov",
      "url": "https://clarifai.com/government",
      "description": "Government AI solutions",
      "category": "Government"
    },
    {
      "id": "675",
      "title": "Palantir Apollo",
      "url": "https://palantir.com/apollo",
      "description": "Government operations platform",
      "category": "Government"
    },
    {
      "id": "676",
      "title": "Socure",
      "url": "https://socure.com",
      "description": "Digital identity verification",
      "category": "Security"
    },
    {
      "id": "677",
      "title": "Planck",
      "url": "https://planckdata.com",
      "description": "Commercial insurance AI",
      "category": "Data"
    },
    {
      "id": "678",
      "title": "Verdant Robotics",
      "url": "https://verdantrobotics.com",
      "description": "Agricultural robotics",
      "category": "Agriculture"
    },
    {
      "id": "679",
      "title": "Iterative",
      "url": "https://iterative.ai",
      "description": "MLOps platform",
      "category": "Data"
    },
    {
      "id": "680",
      "title": "Weights & Biases",
      "url": "https://wandb.ai",
      "description": "Machine learning platform",
      "category": "Data"
    },
    {
      "id": "681",
      "title": "Clearmetal",
      "url": "https://clearmetal.com",
      "description": "Supply chain analytics",
      "category": "Analytics"
    },
    {
      "id": "682",
      "title": "Transfix",
      "url": "https://transfix.io",
      "description": "Transportation analytics",
      "category": "Analytics"
    },
    {
      "id": "683",
      "title": "Project44",
      "url": "https://project44.com",
      "description": "Supply chain visibility",
      "category": "Analytics"
    },
    {
      "id": "684",
      "title": "Lingokids",
      "url": "https://lingokids.com",
      "description": "Language learning for kids",
      "category": "Language"
    },
    {
      "id": "685",
      "title": "Memrise",
      "url": "https://memrise.com",
      "description": "Language learning platform",
      "category": "Language"
    },
    {
      "id": "686",
      "title": "Verkada",
      "url": "https://verkada.com",
      "description": "AI security cameras",
      "category": "Security"
    },
    {
      "id": "687",
      "title": "Turing Labs",
      "url": "https://turing.com",
      "description": "Developer recruitment platform",
      "category": "HR"
    },
    {
      "id": "688",
      "title": "Carbon Robotics",
      "url": "https://carbonrobotics.com",
      "description": "Agricultural weeding robots",
      "category": "Agriculture"
    },
    {
      "id": "689",
      "title": "Charm Industrial",
      "url": "https://charmindustrial.com",
      "description": "Carbon removal technology",
      "category": "Climate"
    },
    {
      "id": "690",
      "title": "Babbel",
      "url": "https://babbel.com",
      "description": "Language learning AI",
      "category": "Language"
    },
    {
      "id": "691",
      "title": "Peltarion",
      "url": "https://peltarion.com",
      "description": "Deep learning platform",
      "category": "Data"
    },
    {
      "id": "692",
      "title": "Dataiku DSS",
      "url": "https://dataiku.com",
      "description": "Data science platform",
      "category": "Data Analysis"
    },
    {
      "id": "693",
      "title": "RapidMiner",
      "url": "https://rapidminer.com",
      "description": "Data science automation",
      "category": "Data Analysis"
    },
    {
      "id": "694",
      "title": "Cisco Meraki",
      "url": "https://meraki.cisco.com",
      "description": "AI-powered networking",
      "category": "Hardware"
    },
    {
      "id": "695",
      "title": "Arista Networks",
      "url": "https://arista.com",
      "description": "AI networking hardware",
      "category": "Hardware"
    },
    {
      "id": "696",
      "title": "Samsara",
      "url": "https://samsara.com",
      "description": "Industrial IoT platform",
      "category": "Hardware"
    },
    {
      "id": "697",
      "title": "Brain Corp",
      "url": "https://braincorp.com",
      "description": "Autonomous navigation AI",
      "category": "Hardware"
    },
    {
      "id": "698",
      "title": "Nexar",
      "url": "https://getnexar.com",
      "description": "AI dash cams",
      "category": "Hardware"
    },
    {
      "id": "699",
      "title": "OtterTune",
      "url": "https://ottertune.com",
      "description": "Database optimization AI",
      "category": "Data"
    },
    {
      "id": "700",
      "title": "TigerGraph",
      "url": "https://tigergraph.com",
      "description": "Graph analytics platform",
      "category": "Analytics"
    },
    {
      "id": "701",
      "title": "Materialize",
      "url": "https://materialize.com",
      "description": "Streaming analytics",
      "category": "Analytics"
    },
    {
      "id": "702",
      "title": "Atlan",
      "url": "https://atlan.com",
      "description": "Data collaboration platform",
      "category": "Data"
    },
    {
      "id": "703",
      "title": "Tecton",
      "url": "https://tecton.ai",
      "description": "Feature store platform",
      "category": "Data"
    },
    {
      "id": "704",
      "title": "Aqua Security",
      "url": "https://aquasec.com",
      "description": "Cloud security platform",
      "category": "Security"
    },
    {
      "id": "705",
      "title": "Lacework",
      "url": "https://lacework.com",
      "description": "Cloud security automation",
      "category": "Security"
    },
    {
      "id": "706",
      "title": "Rosette",
      "url": "https://rosette.com",
      "description": "Text analytics API",
      "category": "Language"
    },
    {
      "id": "707",
      "title": "Basis Technology",
      "url": "https://basistech.com",
      "description": "Multilingual text analytics",
      "category": "Language"
    },
    {
      "id": "708",
      "title": "AgriTask",
      "url": "https://agritask.com",
      "description": "Agricultural management platform",
      "category": "Agriculture"
    },
    {
      "id": "709",
      "title": "Fieldin",
      "url": "https://fieldin.com",
      "description": "Agricultural operations platform",
      "category": "Agriculture"
    },
    {
      "id": "710",
      "title": "CloudFactory",
      "url": "https://cloudfactory.com",
      "description": "Data processing workforce",
      "category": "Data"
    },
    {
      "id": "711",
      "title": "DefenseAI",
      "url": "https://defense.ai",
      "description": "Military AI solutions",
      "category": "Defense"
    },
    {
      "id": "712",
      "title": "Shield AI",
      "url": "https://shield.ai",
      "description": "Defense autonomy platform",
      "category": "Defense"
    },
    {
      "id": "713",
      "title": "Anduril Industries",
      "url": "https://anduril.com",
      "description": "Defense technology systems",
      "category": "Defense"
    },
    {
      "id": "714",
      "title": "Prove",
      "url": "https://prove.com",
      "description": "Digital identity verification",
      "category": "Security"
    },
    {
      "id": "715",
      "title": "Onfido",
      "url": "https://onfido.com",
      "description": "Identity verification AI",
      "category": "Security"
    },
    {
      "id": "716",
      "title": "Intezer",
      "url": "https://intezer.com",
      "description": "Genetic malware analysis",
      "category": "Security"
    },
    {
      "id": "717",
      "title": "Salt Security",
      "url": "https://salt.security",
      "description": "API protection platform",
      "category": "Security"
    },
    {
      "id": "718",
      "title": "Noname Security",
      "url": "https://nonamesecurity.com",
      "description": "API security platform",
      "category": "Security"
    },
    {
      "id": "719",
      "title": "Databricks Unity",
      "url": "https://databricks.com/unity",
      "description": "Data analytics catalog",
      "category": "Analytics"
    },
    {
      "id": "720",
      "title": "Hive",
      "url": "https://thehive.ai",
      "description": "Content moderation API",
      "category": "API"
    },
    {
      "id": "721",
      "title": "Eden AI",
      "url": "https://edenai.co",
      "description": "Unified AI API platform",
      "category": "API"
    },
    {
      "id": "722",
      "title": "RapidAPI AI",
      "url": "https://rapidapi.com/ai",
      "description": "AI API marketplace",
      "category": "API"
    },
    {
      "id": "723",
      "title": "BreezoMeter",
      "url": "https://breezometer.com",
      "description": "Environmental intelligence",
      "category": "Climate"
    },
    {
      "id": "724",
      "title": "ClimateTrace",
      "url": "https://climatetrace.org",
      "description": "Emissions tracking platform",
      "category": "Climate"
    },
    {
      "id": "725",
      "title": "Xsight Labs",
      "url": "https://xsightlabs.com",
      "description": "Data center chips",
      "category": "Hardware"
    },
    {
      "id": "726",
      "title": "Fluent.ai",
      "url": "https://fluent.ai",
      "description": "Speech recognition tech",
      "category": "Language"
    },
    {
      "id": "727",
      "title": "AgNext",
      "url": "https://agnext.com",
      "description": "Agricultural quality assessment",
      "category": "Agriculture"
    },
    {
      "id": "728",
      "title": "Jane",
      "url": "https://jane.hr",
      "description": "HR automation platform",
      "category": "HR"
    },
    {
      "id": "729",
      "title": "Oyster HR",
      "url": "https://oysterhr.com",
      "description": "Global employment platform",
      "category": "HR"
    },
    {
      "id": "730",
      "title": "Remote",
      "url": "https://remote.com",
      "description": "Global HR platform",
      "category": "HR"
    },
    {
      "id": "731",
      "title": "Deel",
      "url": "https://deel.com",
      "description": "Global payroll platform",
      "category": "HR"
    },
    {
      "id": "732",
      "title": "HiredScore",
      "url": "https://hiredscore.com",
      "description": "Talent intelligence platform",
      "category": "HR"
    },
    {
      "id": "733",
      "title": "Workato",
      "url": "https://workato.com",
      "description": "Enterprise automation",
      "category": "Automation"
    },
    {
      "id": "734",
      "title": "UiPath",
      "url": "https://uipath.com",
      "description": "Automation platform",
      "category": "Automation"
    },
    {
      "id": "735",
      "title": "Blippar",
      "url": "https://blippar.com",
      "description": "AR platform",
      "category": "AR/VR"
    },
    {
      "id": "736",
      "title": "Contentstudio",
      "url": "https://contentstudio.io",
      "description": "Content marketing platform",
      "category": "Content"
    },
    {
      "id": "737",
      "title": "MarketMuse",
      "url": "https://marketmuse.com",
      "description": "Content intelligence platform",
      "category": "Content"
    },
    {
      "id": "738",
      "title": "Frase",
      "url": "https://frase.io",
      "description": "Content optimization platform",
      "category": "Content"
    },
    {
      "id": "739",
      "title": "Surfer",
      "url": "https://surferseo.com",
      "description": "Content optimization tool",
      "category": "Content"
    },
    {
      "id": "740",
      "title": "Clearscope",
      "url": "https://clearscope.io",
      "description": "Content optimization platform",
      "category": "Content"
    },
    {
      "id": "741",
      "title": "DataStax",
      "url": "https://datastax.com",
      "description": "Real-time data platform",
      "category": "Data"
    },
    {
      "id": "742",
      "title": "Kyndi",
      "url": "https://kyndi.com",
      "description": "Natural language search",
      "category": "Search"
    },
    {
      "id": "743",
      "title": "Yext AI Search",
      "url": "https://yext.com/ai-search",
      "description": "Enterprise search platform",
      "category": "Search"
    },
    {
      "id": "744",
      "title": "Coveo",
      "url": "https://coveo.com",
      "description": "Enterprise search AI",
      "category": "Search"
    },
    {
      "id": "745",
      "title": "Lucidworks",
      "url": "https://lucidworks.com",
      "description": "Search & discovery platform",
      "category": "Search"
    },
    {
      "id": "746",
      "title": "Tractable",
      "url": "https://tractable.ai",
      "description": "Visual damage assessment",
      "category": "Computer Vision"
    },
    {
      "id": "747",
      "title": "Nexthink",
      "url": "https://nexthink.com",
      "description": "Digital employee experience",
      "category": "IT"
    },
    {
      "id": "748",
      "title": "Chronosphere",
      "url": "https://chronosphere.io",
      "description": "Cloud monitoring platform",
      "category": "Analytics"
    },
    {
      "id": "749",
      "title": "Observe.ai",
      "url": "https://observe.ai",
      "description": "Contact center intelligence",
      "category": "Customer Service"
    },
    {
      "id": "750",
      "title": "Uniphore",
      "url": "https://uniphore.com",
      "description": "Conversational service automation",
      "category": "Customer Service"
    },
    {
      "id": "751",
      "title": "Cresta",
      "url": "https://cresta.com",
      "description": "Real-time coaching platform",
      "category": "Customer Service"
    },
    {
      "id": "752",
      "title": "Palo Alto Networks",
      "url": "https://paloaltonetworks.com",
      "description": "Cybersecurity platform",
      "category": "Security"
    },
    {
      "id": "753",
      "title": "LangChain",
      "url": "https://langchain.com",
      "description": "Language model framework",
      "category": "Language"
    },
    {
      "id": "754",
      "title": "RemNote",
      "url": "https://remnote.com",
      "description": "AI note-taking platform",
      "category": "Personal Development"
    },
    {
      "id": "755",
      "title": "Vanta",
      "url": "https://vanta.com",
      "description": "Security compliance automation",
      "category": "Security"
    },
    {
      "id": "756",
      "title": "Contrast Security",
      "url": "https://contrastsecurity.com",
      "description": "Application security platform",
      "category": "Security"
    },
    {
      "id": "757",
      "title": "Resilience",
      "url": "https://resilience.com",
      "description": "Cyber insurance platform",
      "category": "Security"
    },
    {
      "id": "758",
      "title": "Ambient.ai",
      "url": "https://ambient.ai",
      "description": "Physical security intelligence",
      "category": "Security"
    },
    {
      "id": "759",
      "title": "DataGrail",
      "url": "https://datagrail.io",
      "description": "Privacy platform",
      "category": "Security"
    },
    {
      "id": "760",
      "title": "Noogata",
      "url": "https://noogata.com",
      "description": "AI analytics platform",
      "category": "Analytics"
    },
    {
      "id": "761",
      "title": "Metaview",
      "url": "https://metaview.ai",
      "description": "Interview intelligence platform",
      "category": "HR"
    },
    {
      "id": "762",
      "title": "Skai",
      "url": "https://skai.io",
      "description": "Marketing intelligence platform",
      "category": "Marketing"
    },
    {
      "id": "763",
      "title": "Rev.ai",
      "url": "https://rev.ai",
      "description": "Speech recognition API",
      "category": "Language"
    },
    {
      "id": "764",
      "title": "OneAI",
      "url": "https://oneai.com",
      "description": "Language AI platform",
      "category": "Language"
    },
    {
      "id": "765",
      "title": "AgriLogic",
      "url": "https://agrilogic.com",
      "description": "Agricultural risk management",
      "category": "Agriculture"
    },
    {
      "id": "766",
      "title": "Climate Impact X",
      "url": "https://climateimpact.com",
      "description": "Carbon credit platform",
      "category": "Climate"
    },
    {
      "id": "767",
      "title": "Sylvera",
      "url": "https://sylvera.com",
      "description": "Carbon project ratings",
      "category": "Climate"
    },
    {
      "id": "768",
      "title": "Persefoni",
      "url": "https://persefoni.com",
      "description": "Climate management platform",
      "category": "Climate"
    },
    {
      "id": "769",
      "title": "Watershed",
      "url": "https://watershed.com",
      "description": "Enterprise climate platform",
      "category": "Climate"
    },
    {
      "id": "770",
      "title": "Clarity AI",
      "url": "https://clarity.ai",
      "description": "Sustainability analytics",
      "category": "Climate"
    },
    {
      "id": "771",
      "title": "Ribbon",
      "url": "https://ribbonhome.com",
      "description": "Real estate technology",
      "category": "Real Estate"
    },
    {
      "id": "772",
      "title": "Matterport",
      "url": "https://matterport.com",
      "description": "Digital twin platform",
      "category": "3D"
    },
    {
      "id": "773",
      "title": "Gathering AI",
      "url": "https://gathering.ai",
      "description": "Warehouse automation",
      "category": "Manufacturing"
    },
    {
      "id": "774",
      "title": "ModalAI",
      "url": "https://modalai.com",
      "description": "Autonomous systems",
      "category": "Hardware"
    },
    {
      "id": "775",
      "title": "NewsGuard",
      "url": "https://newsguardtech.com",
      "description": "News reliability ratings",
      "category": "News"
    },
    {
      "id": "776",
      "title": "TruEra",
      "url": "https://truera.com",
      "description": "AI quality management",
      "category": "Governance"
    },
    {
      "id": "777",
      "title": "Pictory",
      "url": "https://pictory.ai",
      "description": "Video content creation",
      "category": "Entertainment"
    },
    {
      "id": "778",
      "title": "RunwayML",
      "url": "https://runwayml.com",
      "description": "Creative tools platform",
      "category": "Entertainment"
    },
    {
      "id": "779",
      "title": "AgriWebb",
      "url": "https://agriwebb.com",
      "description": "Livestock management platform",
      "category": "Agriculture"
    },
    {
      "id": "780",
      "title": "Proagrica",
      "url": "https://proagrica.com",
      "description": "Agricultural intelligence",
      "category": "Agriculture"
    },
    {
      "id": "781",
      "title": "PhotoRoom",
      "url": "https://photoroom.com",
      "description": "AI photo editing",
      "category": "Photography"
    },
    {
      "id": "782",
      "title": "Typeform AI",
      "url": "https://typeform.com/ai",
      "description": "Conversational forms",
      "category": "Communication"
    },
    {
      "id": "783",
      "title": "Keeper",
      "url": "https://keeper.ai",
      "description": "Document management AI",
      "category": "Documents"
    },
    {
      "id": "784",
      "title": "DocuSign Insight",
      "url": "https://docusign.com/insight",
      "description": "Contract analytics",
      "category": "Documents"
    },
    {
      "id": "785",
      "title": "Kofax",
      "url": "https://kofax.com",
      "description": "Intelligent automation",
      "category": "Documents"
    },
    {
      "id": "786",
      "title": "Moxion",
      "url": "https://moxion.io",
      "description": "Digital dailies platform",
      "category": "Image"
    },
    {
      "id": "787",
      "title": "Documate",
      "url": "https://documate.org",
      "description": "Legal document automation",
      "category": "Legal"
    },
    {
      "id": "788",
      "title": "Disco",
      "url": "https://csdisco.com",
      "description": "Legal discovery platform",
      "category": "Legal"
    },
    {
      "id": "789",
      "title": "Truepic",
      "url": "https://truepic.com",
      "description": "Image verification platform",
      "category": "Security"
    },
    {
      "id": "790",
      "title": "Pixactly",
      "url": "https://pixactly.ai",
      "description": "Visual data analysis",
      "category": "Data Analysis"
    },
    {
      "id": "791",
      "title": "Prefect",
      "url": "https://prefect.io",
      "description": "Dataflow automation",
      "category": "Data"
    },
    {
      "id": "792",
      "title": "Census",
      "url": "https://getcensus.com",
      "description": "Operational analytics",
      "category": "Data"
    },
    {
      "id": "793",
      "title": "Arize AI",
      "url": "https://arize.com",
      "description": "ML observability platform",
      "category": "Data"
    },
    {
      "id": "794",
      "title": "Honeycomb",
      "url": "https://honeycomb.io",
      "description": "Observability platform",
      "category": "Data"
    },
    {
      "id": "795",
      "title": "AgroSmart",
      "url": "https://agrosmart.com.br",
      "description": "Digital agriculture platform",
      "category": "Agriculture"
    },
    {
      "id": "796",
      "title": "Seerist",
      "url": "https://seerist.com",
      "description": "Risk intelligence platform",
      "category": "Intelligence"
    },
    {
      "id": "797",
      "title": "CircleCI",
      "url": "https://circleci.com",
      "description": "Development automation",
      "category": "Automation"
    },
    {
      "id": "798",
      "title": "Vena",
      "url": "https://venasolutions.com",
      "description": "Business planning platform",
      "category": "Business"
    },
    {
      "id": "799",
      "title": "Canvass Analytics",
      "url": "https://canvass.io",
      "description": "Industrial AI platform",
      "category": "Manufacturing"
    },
    {
      "id": "800",
      "title": "Uptake",
      "url": "https://uptake.com",
      "description": "Industrial intelligence",
      "category": "Manufacturing"
    },
    {
      "id": "801",
      "title": "Shield Eye",
      "url": "https://shieldeye.ai",
      "description": "Security monitoring platform",
      "category": "Security"
    },
    {
      "id": "802",
      "title": "Cognyte",
      "url": "https://cognyte.com",
      "description": "Security analytics platform",
      "category": "Security"
    },
    {
      "id": "803",
      "title": "Armis",
      "url": "https://armis.com",
      "description": "Asset security platform",
      "category": "Security"
    },
    {
      "id": "804",
      "title": "Deepnote",
      "url": "https://deepnote.com",
      "description": "Data science notebooks",
      "category": "Data Analysis"
    },
    {
      "id": "805",
      "title": "Mode Analytics",
      "url": "https://mode.com",
      "description": "Analytics platform",
      "category": "Analytics"
    },
    {
      "id": "806",
      "title": "DeepL Write",
      "url": "https://deepl.com/write",
      "description": "AI writing assistant",
      "category": "Language"
    },
    {
      "id": "807",
      "title": "Semrush AI",
      "url": "https://semrush.com/ai",
      "description": "Marketing intelligence platform",
      "category": "Marketing"
    },
    {
      "id": "808",
      "title": "OneTrust",
      "url": "https://onetrust.com",
      "description": "Privacy management platform",
      "category": "Governance"
    },
    {
      "id": "809",
      "title": "Agrology",
      "url": "https://agrology.ag",
      "description": "Predictive agriculture",
      "category": "Agriculture"
    },
    {
      "id": "810",
      "title": "Drishti",
      "url": "https://drishti.com",
      "description": "Manufacturing analytics",
      "category": "Manufacturing"
    },
    {
      "id": "811",
      "title": "ClearML",
      "url": "https://clear.ml",
      "description": "MLOps automation platform",
      "category": "Data"
    },
    {
      "id": "812",
      "title": "Eightfold Talent",
      "url": "https://eightfold.ai",
      "description": "Talent Intelligence",
      "category": "HR"
    },
    {
      "id": "813",
      "title": "NetVirta",
      "url": "https://netvirta.com",
      "description": "3D body scanning",
      "category": "3D"
    },
    {
      "id": "814",
      "title": "Rescale",
      "url": "https://rescale.com",
      "description": "High performance computing",
      "category": "Hardware"
    },
    {
      "id": "815",
      "title": "Weights & Biases",
      "url": "https://wandb.ai",
      "description": "ML experiment tracking",
      "category": "Data"
    },
    {
      "id": "816",
      "title": "AgritecFMS",
      "url": "https://agritecfms.com",
      "description": "Farm management system",
      "category": "Agriculture"
    },
    {
      "id": "817",
      "title": "Climavision",
      "url": "https://climavision.com",
      "description": "Weather intelligence",
      "category": "Climate"
    },
    {
      "id": "818",
      "title": "Nethermind",
      "url": "https://nethermind.io",
      "description": "Blockchain infrastructure",
      "category": "Data"
    },
    {
      "id": "819",
      "title": "Arbol",
      "url": "https://arbolmarket.com",
      "description": "Climate risk solutions",
      "category": "Climate"
    },
    {
      "id": "820",
      "title": "Benchling",
      "url": "https://benchling.com",
      "description": "R&D automation platform",
      "category": "Automation"
    },
    {
      "id": "821",
      "title": "Knowde",
      "url": "https://knowde.com",
      "description": "Chemical marketplace",
      "category": "Manufacturing"
    },
    {
      "id": "822",
      "title": "Arcadia",
      "url": "https://arcadia.io",
      "description": "Healthcare data platform",
      "category": "Data"
    },
    {
      "id": "823",
      "title": "Dedrone",
      "url": "https://dedrone.com",
      "description": "Airspace security",
      "category": "Security"
    },
    {
      "id": "824",
      "title": "Verusen",
      "url": "https://verusen.com",
      "description": "Supply chain intelligence",
      "category": "Analytics"
    },
    {
      "id": "825",
      "title": "Socure",
      "url": "https://socure.com",
      "description": "Digital identity verification",
      "category": "Security"
    },
    {
      "id": "826",
      "title": "Rev.com",
      "url": "https://rev.com",
      "description": "Speech to text platform",
      "category": "Language"
    },
    {
      "id": "827",
      "title": "SkyWatch",
      "url": "https://skywatch.com",
      "description": "Earth observation platform",
      "category": "Data"
    },
    {
      "id": "828",
      "title": "Kebotix",
      "url": "https://kebotix.com",
      "description": "Materials discovery platform",
      "category": "Research"
    },
    {
      "id": "829",
      "title": "Citrine",
      "url": "https://citrine.io",
      "description": "Materials informatics",
      "category": "Research"
    },
    {
      "id": "830",
      "title": "Vectra AI",
      "url": "https://vectra.ai",
      "description": "Network detection",
      "category": "Security"
    },
    {
      "id": "831",
      "title": "Form Energy",
      "url": "https://formenergy.com",
      "description": "Energy storage systems",
      "category": "Climate"
    },
    {
      "id": "832",
      "title": "Quaise Energy",
      "url": "https://quaise.energy",
      "description": "Geothermal energy tech",
      "category": "Climate"
    },
    {
      "id": "833",
      "title": "Heirloom",
      "url": "https://heirloom.net",
      "description": "Carbon capture technology",
      "category": "Climate"
    },
    {
      "id": "834",
      "title": "Living Carbon",
      "url": "https://livingcarbon.com",
      "description": "Enhanced carbon capture",
      "category": "Climate"
    },
    {
      "id": "835",
      "title": "Saleswhale",
      "url": "https://saleswhale.com",
      "description": "Sales engagement AI",
      "category": "Sales"
    },
    {
      "id": "836",
      "title": "Outreach",
      "url": "https://outreach.io",
      "description": "Sales execution platform",
      "category": "Sales"
    },
    {
      "id": "837",
      "title": "Groove",
      "url": "https://groove.co",
      "description": "Sales engagement platform",
      "category": "Sales"
    },
    {
      "id": "838",
      "title": "Apollo.io",
      "url": "https://apollo.io",
      "description": "Sales intelligence platform",
      "category": "Sales"
    },
    {
      "id": "839",
      "title": "ZoomInfo",
      "url": "https://zoominfo.com",
      "description": "Sales intelligence platform",
      "category": "Sales"
    },
    {
      "id": "840",
      "title": "Tribal",
      "url": "https://tribal.credit",
      "description": "Business payment platform",
      "category": "Business"
    },
    {
      "id": "841",
      "title": "Clarifai",
      "url": "https://clarifai.com",
      "description": "Computer vision platform",
      "category": "Computer Vision"
    },
    {
      "id": "842",
      "title": "Socure",
      "url": "https://socure.com",
      "description": "Digital identity platform",
      "category": "Security"
    },
    {
      "id": "843",
      "title": "Deepgram",
      "url": "https://deepgram.com",
      "description": "Speech recognition API",
      "category": "API"
    },
    {
      "id": "844",
      "title": "Persona",
      "url": "https://withpersona.com",
      "description": "Identity verification",
      "category": "Security"
    },
    {
      "id": "845",
      "title": "Evervault",
      "url": "https://evervault.com",
      "description": "Data encryption platform",
      "category": "Security"
    },
    {
      "id": "846",
      "title": "Gretel AI",
      "url": "https://gretel.ai",
      "description": "Synthetic data platform",
      "category": "Data"
    },
    {
      "id": "847",
      "title": "Dataiku",
      "url": "https://dataiku.com",
      "description": "Enterprise AI platform",
      "category": "Data"
    },
    {
      "id": "848",
      "title": "Snorkel AI",
      "url": "https://snorkel.ai",
      "description": "Data labeling automation",
      "category": "Data"
    },
    {
      "id": "849",
      "title": "Yseop",
      "url": "https://yseop.com",
      "description": "Natural language generation",
      "category": "Language"
    },
    {
      "id": "850",
      "title": "Cohere",
      "url": "https://cohere.ai",
      "description": "NLP platform",
      "category": "Language"
    },
    {
      "id": "851",
      "title": "AgXeed",
      "url": "https://agxeed.com",
      "description": "Autonomous farming",
      "category": "Agriculture"
    },
    {
      "id": "852",
      "title": "Samsara",
      "url": "https://samsara.com",
      "description": "Industrial IoT platform",
      "category": "Manufacturing"
    },
    {
      "id": "853",
      "title": "BrainCo",
      "url": "https://brainco.tech",
      "description": "Neural interface technology",
      "category": "Hardware"
    },
    {
      "id": "854",
      "title": "SOSV Climate Tech",
      "url": "https://sosv.com/climate",
      "description": "Climate tech platform",
      "category": "Climate"
    },
    {
      "id": "855",
      "title": "Opseyes",
      "url": "https://opseyes.ai",
      "description": "Security operations AI",
      "category": "Security"
    },
    {
      "id": "856",
      "title": "Recorded Future",
      "url": "https://recordedfuture.com",
      "description": "Intelligence platform",
      "category": "Intelligence"
    },
    {
      "id": "857",
      "title": "BehavioSec",
      "url": "https://behaviosec.com",
      "description": "Behavioral biometrics",
      "category": "Security"
    },
    {
      "id": "858",
      "title": "Orbital Insight",
      "url": "https://orbitalinsight.com",
      "description": "Geospatial analytics",
      "category": "Analytics"
    },
    {
      "id": "859",
      "title": "SpaceKnow",
      "url": "https://spaceknow.com",
      "description": "Satellite imagery analytics",
      "category": "Analytics"
    },
    {
      "id": "860",
      "title": "CLEAR",
      "url": "https://clearme.com",
      "description": "Identity verification platform",
      "category": "Security"
    },
    {
      "id": "861",
      "title": "Dataminr",
      "url": "https://dataminr.com",
      "description": "Real-time information discovery",
      "category": "Analytics"
    },
    {
      "id": "862",
      "title": "RightHand Robotics",
      "url": "https://righthandrobotics.com",
      "description": "Warehouse automation",
      "category": "Manufacturing"
    },
    {
      "id": "863",
      "title": "Plus One Robotics",
      "url": "https://plusonerobotics.com",
      "description": "Warehouse robotics vision",
      "category": "Computer Vision"
    },
    {
      "id": "864",
      "title": "Invenia Labs",
      "url": "https://invenia.ca",
      "description": "Grid optimization",
      "category": "Climate"
    },
    {
      "id": "865",
      "title": "Sidewalk Infrastructure",
      "url": "https://sidewalkinfra.com",
      "description": "Urban infrastructure AI",
      "category": "Government"
    },
    {
      "id": "866",
      "title": "Clarifai Gov",
      "url": "https://clarifai.com/government",
      "description": "Government AI solutions",
      "category": "Government"
    },
    {
      "id": "867",
      "title": "Shield AI Defense",
      "url": "https://shield.ai",
      "description": "Defense autonomy systems",
      "category": "Defense"
    },
    {
      "id": "868",
      "title": "Rebellion Defense",
      "url": "https://rebelliondefense.com",
      "description": "Defense software platform",
      "category": "Defense"
    },
    {
      "id": "869",
      "title": "Adarga",
      "url": "https://adarga.ai",
      "description": "Defense intelligence platform",
      "category": "Defense"
    },
    {
      "id": "870",
      "title": "Community.ai",
      "url": "https://community.ai",
      "description": "Community engagement platform",
      "category": "Community"
    },
    {
      "id": "871",
      "title": "Saltlending",
      "url": "https://saltlending.com",
      "description": "Digital asset platform",
      "category": "Business"
    },
    {
      "id": "872",
      "title": "DeepBrain",
      "url": "https://deepbrainai.io",
      "description": "AI avatar platform",
      "category": "Entertainment"
    },
    {
      "id": "873",
      "title": "Squirro",
      "url": "https://squirro.com",
      "description": "Insights engine",
      "category": "Analytics"
    },
    {
      "id": "874",
      "title": "Abridge",
      "url": "https://abridge.com",
      "description": "Medical conversation AI",
      "category": "Communication"
    },
    {
      "id": "875",
      "title": "Remarkable AI",
      "url": "https://remarkable.ai",
      "description": "Document processing",
      "category": "Documents"
    },
    {
      "id": "876",
      "title": "Pinecone",
      "url": "https://pinecone.io",
      "description": "Vector database platform",
      "category": "Data"
    },
    {
      "id": "877",
      "title": "RavenPack",
      "url": "https://ravenpack.com",
      "description": "Financial analytics AI",
      "category": "Analytics"
    },
    {
      "id": "878",
      "title": "Relativity6",
      "url": "https://relativity6.com",
      "description": "Business classification AI",
      "category": "Business"
    },
    {
      "id": "879",
      "title": "Arago",
      "url": "https://arago.co",
      "description": "IT automation platform",
      "category": "IT"
    },
    {
      "id": "880",
      "title": "Amelia",
      "url": "https://amelia.ai",
      "description": "Conversational AI platform",
      "category": "Customer Service"
    },
    {
      "id": "881",
      "title": "Voxel Analytics",
      "url": "https://voxel.ai",
      "description": "Workplace safety AI",
      "category": "Safety"
    },
    {
      "id": "882",
      "title": "SparkCognition Gov",
      "url": "https://sparkcognition.com/government",
      "description": "Government AI solutions",
      "category": "Government"
    },
    {
      "id": "883",
      "title": "Manifold",
      "url": "https://manifold.ai",
      "description": "Machine learning platform",
      "category": "Data"
    },
    {
      "id": "884",
      "title": "Securiti",
      "url": "https://securiti.ai",
      "description": "Data governance platform",
      "category": "Governance"
    },
    {
      "id": "885",
      "title": "Hive",
      "url": "https://thehive.ai",
      "description": "AI content moderation",
      "category": "Content"
    },
    {
      "id": "886",
      "title": "Spectral AI",
      "url": "https://spectral.ai",
      "description": "Code security platform",
      "category": "Security"
    },
    {
      "id": "887",
      "title": "Verdant AI",
      "url": "https://verdant.ai",
      "description": "Sustainable agriculture",
      "category": "Agriculture"
    },
    {
      "id": "888",
      "title": "Atomwise",
      "url": "https://atomwise.com",
      "description": "Drug discovery AI",
      "category": "Research"
    },
    {
      "id": "889",
      "title": "Veritone",
      "url": "https://veritone.com",
      "description": "Enterprise AI platform",
      "category": "Enterprise"
    },
    {
      "id": "890",
      "title": "Agora Lab",
      "url": "https://agora.io",
      "description": "Real-time engagement",
      "category": "Communication"
    },
    {
      "id": "891",
      "title": "Gradiant",
      "url": "https://gradiant.org",
      "description": "Applied AI research",
      "category": "Research"
    },
    {
      "id": "892",
      "title": "Hyro",
      "url": "https://hyro.ai",
      "description": "Adaptive communications",
      "category": "Communication"
    },
    {
      "id": "893",
      "title": "ReciGen",
      "url": "https://recigen.ai",
      "description": "Recipe generation AI",
      "category": "Content"
    },
    {
      "id": "894",
      "title": "Osmo",
      "url": "https://osmo.ai",
      "description": "Manufacturing quality control",
      "category": "Manufacturing"
    },
    {
      "id": "895",
      "title": "Pactum",
      "url": "https://pactum.com",
      "description": "AI negotiation platform",
      "category": "Business"
    },
    {
      "id": "896",
      "title": "Weights & Biases",
      "url": "https://wandb.ai",
      "description": "ML experiment tracking",
      "category": "Development"
    },
    {
      "id": "897",
      "title": "Roboflow",
      "url": "https://roboflow.com",
      "description": "Computer vision platform",
      "category": "Computer Vision"
    },
    {
      "id": "898",
      "title": "Cogniac",
      "url": "https://cogniac.co",
      "description": "Visual automation platform",
      "category": "Computer Vision"
    },
    {
      "id": "899",
      "title": "LogicMonitor",
      "url": "https://logicmonitor.com",
      "description": "Infrastructure monitoring",
      "category": "IT"
    },
    {
      "id": "900",
      "title": "Lexion",
      "url": "https://lexion.ai",
      "description": "Contract management AI",
      "category": "Legal"
    },
    {
      "id": "901",
      "title": "Modzy",
      "url": "https://modzy.com",
      "description": "Enterprise AI platform",
      "category": "Enterprise"
    },
    {
      "id": "902",
      "title": "Accubits",
      "url": "https://accubits.com",
      "description": "Blockchain AI solutions",
      "category": "Enterprise"
    },
    {
      "id": "903",
      "title": "Eightfold",
      "url": "https://eightfold.ai",
      "description": "Talent management AI",
      "category": "HR"
    },
    {
      "id": "904",
      "title": "Intellimize",
      "url": "https://intellimize.com",
      "description": "Website optimization AI",
      "category": "Marketing"
    },
    {
      "id": "905",
      "title": "Abnormal Security",
      "url": "https://abnormalsecurity.com",
      "description": "Email security platform",
      "category": "Security"
    },
    {
      "id": "906",
      "title": "Armorblox",
      "url": "https://armorblox.com",
      "description": "Communications security",
      "category": "Security"
    },
    {
      "id": "907",
      "title": "Deepgram Enterprise",
      "url": "https://deepgram.com/enterprise",
      "description": "Speech recognition platform",
      "category": "Enterprise"
    },
    {
      "id": "908",
      "title": "AgriTech Gateway",
      "url": "https://agritech-gateway.com",
      "description": "Agricultural tech platform",
      "category": "Agriculture"
    },
    {
      "id": "909",
      "title": "Envisible",
      "url": "https://envisible.co",
      "description": "Supply chain transparency",
      "category": "Analytics"
    },
    {
      "id": "910",
      "title": "Hypergiant",
      "url": "https://hypergiant.com",
      "description": "Industrial AI systems",
      "category": "Manufacturing"
    },
    {
      "id": "911",
      "title": "FarmSense",
      "url": "https://farmsense.io",
      "description": "Smart pest monitoring",
      "category": "Agriculture"
    },
    {
      "id": "912",
      "title": "NWO.ai",
      "url": "https://nwo.ai",
      "description": "Trend prediction platform",
      "category": "Analytics"
    },
    {
      "id": "913",
      "title": "Mobius Labs",
      "url": "https://mobius-labs.com",
      "description": "Computer vision solutions",
      "category": "Computer Vision"
    },
    {
      "id": "914",
      "title": "Daedalean",
      "url": "https://daedalean.ai",
      "description": "Aviation autopilot systems",
      "category": "Aviation"
    },
    {
      "id": "915",
      "title": "ZeroEyes",
      "url": "https://zeroeyes.com",
      "description": "Weapons detection system",
      "category": "Security"
    },
    {
      "id": "916",
      "title": "ClimateAi Pro",
      "url": "https://climate.ai/pro",
      "description": "Climate risk platform",
      "category": "Climate"
    },
    {
      "id": "917",
      "title": "OpenSpace",
      "url": "https://openspace.ai",
      "description": "Construction imagery platform",
      "category": "Image"
    },
    {
      "id": "918",
      "title": "Trueface",
      "url": "https://trueface.ai",
      "description": "Identity verification system",
      "category": "Security"
    },
    {
      "id": "919",
      "title": "Sway AI",
      "url": "https://sway-ai.com",
      "description": "No-code AI platform",
      "category": "Development"
    },
    {
      "id": "920",
      "title": "Graviti",
      "url": "https://graviti.com",
      "description": "Data versioning platform",
      "category": "Data"
    },
    {
      "id": "921",
      "title": "Reejig",
      "url": "https://reejig.com",
      "description": "Workforce intelligence",
      "category": "HR"
    },
    {
      "id": "922",
      "title": "BosonNLP",
      "url": "https://bosonlp.com",
      "description": "Natural language platform",
      "category": "Language"
    },
    {
      "id": "923",
      "title": "Roadbotics",
      "url": "https://roadbotics.com",
      "description": "Road assessment AI",
      "category": "Government"
    },
    {
      "id": "924",
      "title": "Urbint",
      "url": "https://urbint.com",
      "description": "Infrastructure AI",
      "category": "Safety"
    },
    {
      "id": "925",
      "title": "Everlaw",
      "url": "https://everlaw.com",
      "description": "Legal discovery platform",
      "category": "Legal"
    },
    {
      "id": "926",
      "title": "MarkovML",
      "url": "https://markovml.com",
      "description": "AutoML platform",
      "category": "Data"
    },
    {
      "id": "927",
      "title": "HyperScience",
      "url": "https://hyperscience.com",
      "description": "Document processing automation",
      "category": "Documents"
    },
    {
      "id": "928",
      "title": "Instabase",
      "url": "https://instabase.com",
      "description": "Automation platform",
      "category": "Automation"
    },
    {
      "id": "929",
      "title": "Syndio",
      "url": "https://synd.io",
      "description": "Workplace equity platform",
      "category": "HR"
    },
    {
      "id": "930",
      "title": "Viz.ai",
      "url": "https://viz.ai",
      "description": "Medical imaging AI",
      "category": "Image"
    },
    {
      "id": "931",
      "title": "Drishti",
      "url": "https://drishti.com",
      "description": "Manufacturing process AI",
      "category": "Manufacturing"
    },
    {
      "id": "932",
      "title": "SafeAI",
      "url": "https://safeai.ai",
      "description": "Autonomous heavy equipment",
      "category": "Safety"
    },
    {
      "id": "933",
      "title": "Weights & Biases",
      "url": "https://wandb.ai",
      "description": "ML experiment tracking",
      "category": "Data"
    },
    {
      "id": "934",
      "title": "DataRobot MLOps",
      "url": "https://datarobot.com/mlops",
      "description": "ML operations platform",
      "category": "Data"
    },
    {
      "id": "935",
      "title": "Domino Data Lab",
      "url": "https://dominodatalab.com",
      "description": "Enterprise MLOps",
      "category": "Data"
    },
    {
      "id": "936",
      "title": "Truera",
      "url": "https://truera.com",
      "description": "AI Quality Management",
      "category": "Data"
    },
    {
      "id": "937",
      "title": "AgriLogic",
      "url": "https://agrilogic.com",
      "description": "Agricultural risk platform",
      "category": "Agriculture"
    },
    {
      "id": "938",
      "title": "FarmWise",
      "url": "https://farmwise.io",
      "description": "Agricultural robotics",
      "category": "Agriculture"
    },
    {
      "id": "939",
      "title": "Terramera",
      "url": "https://terramera.com",
      "description": "Agricultural technology",
      "category": "Agriculture"
    },
    {
      "id": "940",
      "title": "BrainBox AI",
      "url": "https://brainboxai.com",
      "description": "Building climate control",
      "category": "Climate"
    },
    {
      "id": "941",
      "title": "AiDash",
      "url": "https://aidash.com",
      "description": "Satellite analytics",
      "category": "Analytics"
    },
    {
      "id": "942",
      "title": "Orbital Sidekick",
      "url": "https://orbitalsidekick.com",
      "description": "Hyperspectral monitoring",
      "category": "Analytics"
    },
    {
      "id": "943",
      "title": "Deduce",
      "url": "https://deduce.com",
      "description": "Identity intelligence",
      "category": "Security"
    },
    {
      "id": "944",
      "title": "Dragos",
      "url": "https://dragos.com",
      "description": "Industrial cybersecurity",
      "category": "Security"
    },
    {
      "id": "945",
      "title": "Claroty",
      "url": "https://claroty.com",
      "description": "Cybersecurity platform",
      "category": "Security"
    },
    {
      "id": "946",
      "title": "CybelAngel",
      "url": "https://cybelangel.com",
      "description": "Digital risk protection",
      "category": "Security"
    },
    {
      "id": "947",
      "title": "Vehere",
      "url": "https://vehere.com",
      "description": "Cybersecurity intelligence",
      "category": "Intelligence"
    },
    {
      "id": "948",
      "title": "Cobalt Speech",
      "url": "https://cobaltspeech.com",
      "description": "Speech recognition platform",
      "category": "Language"
    },
    {
      "id": "949",
      "title": "Deepset",
      "url": "https://deepset.ai",
      "description": "NLP solution platform",
      "category": "Language"
    },
    {
      "id": "950",
      "title": "SparkNLP",
      "url": "https://spark-nlp.org",
      "description": "Natural language library",
      "category": "Language"
    },
    {
      "id": "951",
      "title": "OneClick.ai",
      "url": "https://oneclick.ai",
      "description": "Automated AI platform",
      "category": "Automation"
    },
    {
      "id": "952",
      "title": "Labelbox",
      "url": "https://labelbox.com",
      "description": "Data labeling platform",
      "category": "Data"
    },
    {
      "id": "953",
      "title": "Mobius Labs",
      "url": "https://mobiuslabs.com",
      "description": "Computer vision SDK",
      "category": "Computer Vision"
    },
    {
      "id": "954",
      "title": "Algolux",
      "url": "https://algolux.com",
      "description": "Computer vision platform",
      "category": "Computer Vision"
    },
    {
      "id": "955",
      "title": "Nexar",
      "url": "https://getnexar.com",
      "description": "Vehicle vision platform",
      "category": "Computer Vision"
    },
    {
      "id": "956",
      "title": "Aware",
      "url": "https://aware.com",
      "description": "Enterprise collaboration governance",
      "category": "Governance"
    },
    {
      "id": "957",
      "title": "SkyWatch",
      "url": "https://skywatch.com",
      "description": "Satellite imagery platform",
      "category": "Data"
    },
    {
      "id": "958",
      "title": "Spire",
      "url": "https://spire.com",
      "description": "Space-based data analytics",
      "category": "Data Analysis"
    },
    {
      "id": "959",
      "title": "Descartes Labs",
      "url": "https://descarteslabs.com",
      "description": "Geospatial intelligence",
      "category": "Intelligence"
    },
    {
      "id": "960",
      "title": "Tomorrow.io",
      "url": "https://tomorrow.io",
      "description": "Weather intelligence platform",
      "category": "Climate"
    },
    {
      "id": "961",
      "title": "Everlaw",
      "url": "https://everlaw.com",
      "description": "Legal discovery platform",
      "category": "Legal"
    },
    {
      "id": "962",
      "title": "LexCheck",
      "url": "https://lexcheck.com",
      "description": "Contract analysis AI",
      "category": "Legal"
    },
    {
      "id": "963",
      "title": "Eigen",
      "url": "https://eigen.co",
      "description": "Document intelligence platform",
      "category": "Documents"
    },
    {
      "id": "964",
      "title": "Flatfile",
      "url": "https://flatfile.com",
      "description": "Data onboarding platform",
      "category": "Data"
    },
    {
      "id": "965",
      "title": "Dataiku",
      "url": "https://dataiku.com",
      "description": "Collaborative data science",
      "category": "Data Science"
    },
    {
      "id": "966",
      "title": "Astronomer",
      "url": "https://astronomer.io",
      "description": "Data orchestration platform",
      "category": "Data"
    },
    {
      "id": "967",
      "title": "BeyondMinds",
      "url": "https://beyondminds.ai",
      "description": "Enterprise AI solutions",
      "category": "Enterprise"
    },
    {
      "id": "968",
      "title": "Ergatta",
      "url": "https://ergatta.com",
      "description": "AI fitness technology",
      "category": "Personal Development"
    },
    {
      "id": "969",
      "title": "Darktrace OT",
      "url": "https://darktrace.com/ot",
      "description": "Industrial security AI",
      "category": "Security"
    },
    {
      "id": "970",
      "title": "DeepCube",
      "url": "https://deepcube.ai",
      "description": "Deep learning optimization",
      "category": "Data"
    },
    {
      "id": "971",
      "title": "Groq",
      "url": "https://groq.com",
      "description": "AI processor technology",
      "category": "Hardware"
    },
    {
      "id": "972",
      "title": "Cerebras Systems",
      "url": "https://cerebras.net",
      "description": "AI compute hardware",
      "category": "Hardware"
    },
    {
      "id": "973",
      "title": "Mythic",
      "url": "https://mythic-ai.com",
      "description": "AI processor chips",
      "category": "Hardware"
    },
    {
      "id": "974",
      "title": "Syntiant",
      "url": "https://syntiant.com",
      "description": "Neural decision processors",
      "category": "Hardware"
    },
    {
      "id": "975",
      "title": "Blaize",
      "url": "https://blaize.com",
      "description": "AI edge computing",
      "category": "Hardware"
    },
    {
      "id": "976",
      "title": "Tenstorrent",
      "url": "https://tenstorrent.com",
      "description": "AI hardware architecture",
      "category": "Hardware"
    },
    {
      "id": "977",
      "title": "Atmosec",
      "url": "https://atmosec.com",
      "description": "SaaS security platform",
      "category": "Security"
    },
    {
      "id": "978",
      "title": "Sourcewhale",
      "url": "https://sourcewhale.com",
      "description": "Sales automation platform",
      "category": "Sales"
    },
    {
      "id": "979",
      "title": "Truewind",
      "url": "https://truewind.ai",
      "description": "Business automation",
      "category": "Business"
    },
    {
      "id": "980",
      "title": "Pixis",
      "url": "https://pixis.ai",
      "description": "Marketing AI platform",
      "category": "Marketing"
    },
    {
      "id": "981",
      "title": "Moveworks",
      "url": "https://moveworks.com",
      "description": "Employee support AI",
      "category": "HR"
    },
    {
      "id": "982",
      "title": "Eightfold Talent",
      "url": "https://eightfold.ai",
      "description": "Talent intelligence",
      "category": "HR"
    },
    {
      "id": "983",
      "title": "TrustRadius",
      "url": "https://trustradius.com",
      "description": "B2B technology reviews",
      "category": "Resources"
    },
    {
      "id": "984",
      "title": "Jellyfish",
      "url": "https://jellyfish.co",
      "description": "Engineering analytics",
      "category": "Analytics"
    },
    {
      "id": "985",
      "title": "Vectice",
      "url": "https://vectice.com",
      "description": "Data science platform",
      "category": "Data"
    },
    {
      "id": "986",
      "title": "Arize",
      "url": "https://arize.com",
      "description": "ML observability platform",
      "category": "Analytics"
    },
    {
      "id": "987",
      "title": "Noogata",
      "url": "https://noogata.com",
      "description": "No-code AI analytics",
      "category": "Analytics"
    },
    {
      "id": "988",
      "title": "Airbyte",
      "url": "https://airbyte.com",
      "description": "Data integration platform",
      "category": "Data"
    },
    {
      "id": "989",
      "title": "AgFunder",
      "url": "https://agfunder.com",
      "description": "Agtech investment platform",
      "category": "Agriculture"
    },
    {
      "id": "990",
      "title": "Planted",
      "url": "https://planted.ai",
      "description": "Agricultural AI platform",
      "category": "Agriculture"
    },
    {
      "id": "991",
      "title": "CarbonChain",
      "url": "https://carbonchain.com",
      "description": "Carbon footprint tracking",
      "category": "Climate"
    },
    {
      "id": "992",
      "title": "ClimateView",
      "url": "https://climateview.global",
      "description": "Climate transition platform",
      "category": "Climate"
    },
    {
      "id": "993",
      "title": "Arcadia Power",
      "url": "https://arcadia.com",
      "description": "Clean energy platform",
      "category": "Climate"
    },
    {
      "id": "994",
      "title": "Watershed",
      "url": "https://watershed.com",
      "description": "Climate platform",
      "category": "Climate"
    },
    {
      "id": "995",
      "title": "Regrow",
      "url": "https://regrow.ag",
      "description": "Agricultural sustainability",
      "category": "Agriculture"
    },
    {
      "id": "996",
      "title": "Truebot",
      "url": "https://truebot.com",
      "description": "Customer service automation",
      "category": "Customer Service"
    },
    {
      "id": "997",
      "title": "Cognigy",
      "url": "https://cognigy.com",
      "description": "Conversational AI",
      "category": "Customer Service"
    },
    {
      "id": "998",
      "title": "Deepsense",
      "url": "https://deepsense.ai",
      "description": "AI consulting platform",
      "category": "Enterprise"
    },
    {
      "id": "999",
      "title": "Determined AI",
      "url": "https://determined.ai",
      "description": "ML training platform",
      "category": "Data"
    },
    {
      "id": "1000",
      "title": "Deepset",
      "url": "https://deepset.ai",
      "description": "NLP development platform",
      "category": "Language"
    },
    {
      "id": "1001",
      "title": "Allganize",
      "url": "https://allganize.ai",
      "description": "Document intelligence",
      "category": "Documents"
    },
    {
      "id": "1002",
      "title": "Viso.ai",
      "url": "https://viso.ai",
      "description": "Computer vision platform",
      "category": "Computer Vision"
    },
    {
      "id": "1003",
      "title": "BlueRiver",
      "url": "https://bluerivertechnology.com",
      "description": "Agricultural robotics",
      "category": "Agriculture"
    },
    {
      "id": "1004",
      "title": "CNH Industrial",
      "url": "https://cnhindustrial.com",
      "description": "Agricultural automation",
      "category": "Agriculture"
    },
    {
      "id": "1005",
      "title": "Guardian Analytics",
      "url": "https://guardiananalytics.com",
      "description": "Fraud detection AI",
      "category": "Security"
    },
    {
      "id": "1006",
      "title": "Privacera",
      "url": "https://privacera.com",
      "description": "Data governance platform",
      "category": "Governance"
    },
    {
      "id": "1007",
      "title": "Immuta",
      "url": "https://immuta.com",
      "description": "Data access governance",
      "category": "Governance"
    },
    {
      "id": "1008",
      "title": "Collibra",
      "url": "https://collibra.com",
      "description": "Data intelligence platform",
      "category": "Data"
    },
    {
      "id": "1009",
      "title": "Alation",
      "url": "https://alation.com",
      "description": "Data catalog platform",
      "category": "Data"
    },
    {
      "id": "1010",
      "title": "Informatica",
      "url": "https://informatica.com",
      "description": "Data management platform",
      "category": "Data"
    },
    {
      "id": "1011",
      "title": "Precisely",
      "url": "https://precisely.com",
      "description": "Data integrity platform",
      "category": "Data"
    },
    {
      "id": "1012",
      "title": "Talend",
      "url": "https://talend.com",
      "description": "Data integration platform",
      "category": "Data"
    },
    {
      "id": "1013",
      "title": "Tamr",
      "url": "https://tamr.com",
      "description": "Data mastering platform",
      "category": "Data"
    },
    {
      "id": "1014",
      "title": "Quantum Machines",
      "url": "https://quantum-machines.co",
      "description": "Quantum computing control",
      "category": "Hardware"
    },
    {
      "id": "1015",
      "title": "Rigetti",
      "url": "https://rigetti.com",
      "description": "Quantum computing systems",
      "category": "Hardware"
    },
    {
      "id": "1016",
      "title": "IonQ",
      "url": "https://ionq.com",
      "description": "Quantum computing hardware",
      "category": "Hardware"
    },
    {
      "id": "1017",
      "title": "PsiQuantum",
      "url": "https://psiquantum.com",
      "description": "Quantum computing systems",
      "category": "Hardware"
    },
    {
      "id": "1018",
      "title": "Xanadu",
      "url": "https://xanadu.ai",
      "description": "Photonic quantum computing",
      "category": "Hardware"
    },
    {
      "id": "1019",
      "title": "AgricultureAI",
      "url": "https://agriculture.ai",
      "description": "Crop prediction platform",
      "category": "Agriculture"
    },
    {
      "id": "1020",
      "title": "FarmAI",
      "url": "https://farm.ai",
      "description": "Agricultural monitoring",
      "category": "Agriculture"
    },
    {
      "id": "1021",
      "title": "ClimateEngine",
      "url": "https://climateengine.com",
      "description": "Climate data platform",
      "category": "Climate"
    },
    {
      "id": "1022",
      "title": "ClimateScore",
      "url": "https://climatescore.com",
      "description": "Climate risk analytics",
      "category": "Climate"
    },
    {
      "id": "1023",
      "title": "Kensho",
      "url": "https://kensho.com",
      "description": "Business analytics AI",
      "category": "Analytics"
    },
    {
      "id": "1024",
      "title": "H2O.ai",
      "url": "https://h2o.ai",
      "description": "AI cloud platform",
      "category": "Enterprise"
    },
    {
      "id": "1025",
      "title": "LightTag",
      "url": "https://lighttag.io",
      "description": "Data annotation platform",
      "category": "Data"
    },
    {
      "id": "1026",
      "title": "Labellerr",
      "url": "https://labellerr.com",
      "description": "Data labeling platform",
      "category": "Data"
    },
    {
      "id": "1027",
      "title": "Kili Technology",
      "url": "https://kili-technology.com",
      "description": "Training data platform",
      "category": "Data"
    },
    {
      "id": "1028",
      "title": "HyperAnna",
      "url": "https://hyperanna.com",
      "description": "Data analytics AI",
      "category": "Analytics"
    },
    {
      "id": "1029",
      "title": "DeepSphere",
      "url": "https://deepsphere.ai",
      "description": "Enterprise AI solutions",
      "category": "Enterprise"
    },
    {
      "id": "1030",
      "title": "Lexion",
      "url": "https://lexion.ai",
      "description": "Legal contract AI",
      "category": "Legal"
    },
    {
      "id": "1031",
      "title": "ContractPodAi",
      "url": "https://contractpod.com",
      "description": "Contract management AI",
      "category": "Legal"
    },
    {
      "id": "1032",
      "title": "AgEagle",
      "url": "https://ageagle.com",
      "description": "Drone imaging platform",
      "category": "Agriculture"
    },
    {
      "id": "1033",
      "title": "AgroSmart",
      "url": "https://agrosmart.com.br",
      "description": "Agricultural monitoring",
      "category": "Agriculture"
    },
    {
      "id": "1034",
      "title": "SecurityScorecard",
      "url": "https://securityscorecard.com",
      "description": "Security rating platform",
      "category": "Security"
    },
    {
      "id": "1035",
      "title": "BitSight",
      "url": "https://bitsight.com",
      "description": "Security ratings platform",
      "category": "Security"
    },
    {
      "id": "1036",
      "title": "Ople.AI",
      "url": "https://ople.ai",
      "description": "AutoML platform",
      "category": "Data"
    },
    {
      "id": "1037",
      "title": "Neural Magic",
      "url": "https://neuralmagic.com",
      "description": "Deep learning optimization",
      "category": "Data"
    },
    {
      "id": "1038",
      "title": "Mobius Labs",
      "url": "https://mobiuslabs.com",
      "description": "Computer vision API",
      "category": "API"
    },
    {
      "id": "1039",
      "title": "Rossum",
      "url": "https://rossum.ai",
      "description": "Document processing AI",
      "category": "Documents"
    },
    {
      "id": "1040",
      "title": "Klue",
      "url": "https://klue.com",
      "description": "Competitive intelligence",
      "category": "Intelligence"
    },
    {
      "id": "1041",
      "title": "Crayon",
      "url": "https://crayon.co",
      "description": "Market intelligence",
      "category": "Intelligence"
    },
    {
      "id": "1042",
      "title": "Chorus.ai",
      "url": "https://chorus.ai",
      "description": "Conversation intelligence",
      "category": "Communication"
    },
    {
      "id": "1043",
      "title": "Gong.io",
      "url": "https://gong.io",
      "description": "Revenue intelligence",
      "category": "Sales"
    },
    {
      "id": "1044",
      "title": "People.ai",
      "url": "https://people.ai",
      "description": "Revenue operations AI",
      "category": "Sales"
    },
    {
      "id": "1045",
      "title": "Drift",
      "url": "https://drift.com",
      "description": "Conversational marketing",
      "category": "Marketing"
    }
];