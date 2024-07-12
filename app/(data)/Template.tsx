import airplane from '../../components/airplane.png';
import bibimbap from '../../components/bibimbap.png';
import git from '../../components/github.png';
import reward from '../../components/reward.png';
import programming from '../../components/programming.png';
import tools from '../../components/tools.png';
import fitness from '../../components/fitness.png';
import translator from '../../components/google.png';
import rewriteArticle from '../../components/article.png';
import textImprover from '../../components/note.png';
import addEmojis from '../../components/star.png';
import instagramPostGenerator from '../../components/instagram.png';

export default [
    {
        name: "Trip Planner",
        desc: "Your Friendly Trip Planner 😉",
        case: "Ai",
        icon: airplane,
        prompt: "Plan a trip",
        slug: "generate-trip",
        form: [
            {
                label: "Enter your Destination",
                field: "input",
                name: "trip",
                required: true
            }
        ]
    },
    {
        name: "Code Assistant",
        desc: "Your Friendly Code Assistant 😉",
        case: "Ai",
        icon: programming,
        prompt: "Write a Code",
        slug: "generate-code",
        form: [
            {
                label: "Enter your Coding Doubt",
                field: "input",
                name: "code",
                required: true
            }
        ]
    },
    {
        name: "Motivational Quotes",
        desc: "Get your daily dose of motivation! 🌟",
        case: "Ai",
        icon: reward,
        prompt: "Get a motivational quote",
        slug: "generate-quote",
        form: [
            {
                label: "Enter your Mood or Theme (optional)",
                field: "input",
                name: "mood",
                required: false
            }
        ]
    },
    {
        name: "Read me gen",
        desc: "Your Friendly git hub read me bot 🌤️",
        case: "Ai",
        icon: git,
        prompt: "Genrate a git hub read me",
        slug: "generate-read-me",
        form: [
            {
                label: "Enter your Location",
                field: "input",
                name: "location",
                required: true
            }
        ]
    },
    {
        name: "Recipe Finder",
        desc: "Your Friendly Recipe Finder 🍽️",
        case: "Ai",
        icon: bibimbap,
        prompt: "Find a recipe",
        slug: "generate-recipe",
        form: [
            {
                label: "Enter Ingredients",
                field: "input",
                name: "ingredients",
                required: true
            }
        ]
    },
    {
        name: "Math Solver",
        desc: "Solve any math problem instantly! 🧮",
        case: "Ai",
        icon: tools,
        prompt: "Solve a math problem",
        slug: "generate-solution",
        form: [
            {
                label: "Enter your Math Problem",
                field: "textarea",
                name: "problem",
                required: true
            }
        ]
    },
    {
        name: "Fitness Tracker",
        desc: "Your Personal Fitness Tracker 💪",
        case: "Ai",
        icon: fitness,
        prompt: "Track your fitness activities",
        slug: "generate-fitness",
        form: [
            {
                label: "Enter Activity Type",
                field: "input",
                name: "activity",
                required: true
            }
        ]
    },
    {
        name: "Language Translator",
        desc: "Your Language Translator 🌐",
        case: "Ai",
        icon: translator,
        prompt: "Translate text to another language",
        slug: "generate-translation",
        form: [
            {
                label: "Enter Text to Translate",
                field: "textarea",
                name: "text",
                required: true
            }
        ]
    },
    {
        name: "Research paper helper",
        desc: "Your Friendly Rp Bot 📝",
        case: "Ai",
        icon: rewriteArticle,
        prompt: "Generate research paper",
        slug: "generate-research-paper",
        form: [
            {
                label: "Enter Article Text",
                field: "textarea",
                name: "article",
                required: true
            }
        ]
    },
    {
        name: "Text Improver",
        desc: "Text Improver and Corrector Bot ✅",
        case: "Ai",
        icon: textImprover,
        prompt: "Improve text",
        slug: "generate-text-improver",
        form: [
            {
                label: "Enter Text",
                field: "textarea",
                name: "text",
                required: true
            }
        ]
    },
    {
        name: "Add Emojis to Text",
        desc: "Your Emoji Translator bot 😀",
        case: "Ai",
        icon: addEmojis,
        prompt: "Add emojis to text",
        slug: "generate-add-emojis",
        form: [
            {
                label: "Enter Text",
                field: "textarea",
                name: "text",
                required: true
            }
        ]
    },
    {
        name: "Instagram Post Generator",
        desc: "Your Insta post helper 📱",
        case: "Ai",
        icon: instagramPostGenerator,
        prompt: "Generate Instagram post",
        slug: "generate-instagram-post",
        form: [
            {
                label: "Enter Post Topic",
                field: "input",
                name: "topic",
                required: true
            }
        ]
    }
];