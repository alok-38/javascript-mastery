const Templates = [
  {
    name: "Blog Title",
    description:
      "An AI tool that generates blog titles depending on the information provided.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/3168/3168398.png",
    aiPrompt:
      "Give me five bullet points of blog topic ideas based on a given niche and outline in a rich text editor format.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
        required: false, // Optional field
      },
    ],
  },
  {
    name: "Social Media Post Generator",
    description: "Generates engaging social media posts based on user input.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/2204/2204567.png",
    aiPrompt:
      "Provide keywords or a brief description for your social media post.",
    slug: "generate-social-media-post",
    form: [
      {
        label: "Enter keywords or description",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Select platform (optional)",
        field: "dropdown",
        name: "platform",
        required: false,
      },
    ],
  },
  {
    name: "Product Description Generator",
    description: "Automatically generates compelling product descriptions.",
    category: "E-commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/3072/3072181.png",
    aiPrompt: "Describe your product and its key features.",
    slug: "generate-product-description",
    form: [
      {
        label: "Product name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Key features",
        field: "textarea",
        name: "features",
        required: false, // Optional field
      },
    ],
  },
  {
    name: "Email Subject Line Generator",
    description: "Generates catchy subject lines for email campaigns.",
    category: "Email Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/3190/3190494.png",
    aiPrompt: "Briefly describe your email content or campaign theme.",
    slug: "generate-email-subject-line",
    form: [
      {
        label: "Campaign theme",
        field: "input",
        name: "theme",
        required: true,
      },
      {
        label: "Additional details (optional)",
        field: "textarea",
        name: "details",
        required: false, // Optional field
      },
    ],
  },
  {
    name: "SEO Meta Description Generator",
    description: "Creates SEO-friendly meta descriptions for web pages.",
    category: "SEO",
    icon: "https://cdn-icons-png.flaticon.com/128/3857/3857343.png",
    aiPrompt:
      "Enter the main keywords and a brief description of your webpage.",
    slug: "generate-seo-meta-description",
    form: [
      {
        label: "Main keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Page description",
        field: "textarea",
        name: "pageDescription",
        required: false, // Optional field
      },
    ],
  },
  {
    name: "YouTube Video Title Generator",
    description: "Generates compelling titles for YouTube videos.",
    category: "Video Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/1539/1539603.png",
    aiPrompt: "Describe your video content and target audience.",
    slug: "generate-youtube-video-title",
    form: [
      {
        label: "Video content description",
        field: "textarea",
        name: "videoContent",
        required: true,
      },
      {
        label: "Target audience (optional)",
        field: "input",
        name: "audience",
        required: false, // Optional field
      },
    ],
  },
];

export default Templates;
