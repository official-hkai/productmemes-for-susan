import ArticleCard from "@/components/ArticleCard";
import { Timeline } from "@/components/ui/timeline";
import TableOfContents from "@/components/TableOfContents";
import CategoryDivider from "@/components/CategoryDivider";
import { ProductDock } from "@/components/ProductDock";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import qwenIcon from "@/assets/qwen-icon.png";
import gptIcon from "@/assets/gpt-icon.png";
import pixelIcon from "@/assets/pixel-icon.jpg";
import deepseekIcon from "@/assets/deepseek-color.svg";
import geminiIcon from "@/assets/gemini-color.svg";
import flowIcon from "@/assets/flow-icon.jpg";
import claudeIcon from "@/assets/claude-color.svg";
import metasoIcon from "@/assets/metaso-icon.png";
import wenxinIcon from "@/assets/wenxin-color.svg";
import liblibaiIcon from "@/assets/liblibai-icon.jpg";
import fireIcon from "@/assets/fire-icon.png";
interface TimelineItem {
  date: string;
  title: string;
  details: string[];
}
interface Article {
  id: string;
  icon: string;
  productName: string;
  title: string;
  date: string;
  category: string;
  content?: string;
  subtitles?: string[];
  timeline?: TimelineItem[];
}
const Index = () => {
  const articles: Article[] = [
    // 基础大模型
    {
      id: "qwen-updates",
      icon: qwenIcon,
      productName: "通义千问",
      title: "通义千问密集发布多款AI模型，技术突破与产品创新齐头并进",
      date: "2025年9月23日",
      category: "基础大模型",
      subtitles: ["旗舰模型Qwen3-Max强势登场", "Qwen3-VL多模态模型全面升级", "Qwen3-Coder代码模型优化升级", "安全护栏模型Qwen3Guard保障交互", "图像编辑模型Qwen-Image-Edit-2509增强一致性", "多模态同传模型Qwen3-LiveTranslate实现实时翻译", "旅行规划助手打造智能行程"],
      content: `在今日的密集发布浪潮中，通义千问团队通过社交媒体预告了6个重大更新，涵盖新产品、开源项目和API接口，彰显了其在AI领域的快速迭代与全面布局。以下为今日发布的具体内容。

旗舰模型Qwen3-Max强势登场
通义千问团队发布了全新旗舰模型Qwen3-Max，无需预览直接提供强大能力，在编码和智能代理技能方面实现显著提升，基于大规模数据和计算资源优化。
- 模型版本：提供Qwen3-Max-Instruct和Qwen3-Max-Thinking两个版本，Instruct版本在不启用思考模式下即在多项核心基准测试中媲美顶级模型性能。
- 性能表现：在SWE-Bench、Tau2-Bench、SuperGPQA、LiveCodeBench和AIME25等权威编程基准测试中达到领先水平，Thinking版本配备工具使用能力并在重型模式下部署，在关键基准测试中接近完美表现。
- 训练优化：基于海量数据规模和持续计算资源扩展，在预训练和强化学习阶段进行深度优化。
- 可用性：用户可通过Qwen Chat平台和官方API接口直接体验。

Qwen3-VL多模态模型全面升级
团队升级了Qwen3-VL系列多模态模型，推出旗舰模型Qwen3-VL-235B-A22B，在视觉感知、推理能力和长视频理解等多个维度实现全面跃升。
- 模型版本：包含Instruct和Thinking两个版本，Instruct版在视觉感知任务中性能达到或超越Gemini 2.5 Pro，Thinking版在多模态推理任务中取得SOTA表现。
- 核心功能：新增视觉智能体能力（支持操作电脑和手机界面）、代码生成（从图像生成Draw.io/HTML/CSS/JS代码）、空间感知升级（2D定位改为相对坐标，新增3D边界框预测）。
- 长上下文支持：原生支持256K token上下文长度，可扩展至1M token，支持长达2小时视频的完整理解和秒级精确定位。
- OCR扩展：支持语言从10种扩展到32种，模型已在Hugging Face和ModelScope开源发布。

Qwen3-Coder代码模型优化升级
推出了Qwen3-Coder代码模型的升级版，新API服务qwen3-coder-plus现已上线，在终端任务处理、编码代理能力和代码安全性方面实现显著提升。
- 性能增强：终端任务能力优化，在Terminal Bench基准测试中表现优于Qwen Code和Claude Code；SWE-Bench验证性能达到69.6分。
- 安全性提升：模型生成代码的安全性显著增强，减少潜在安全漏洞。
- 产品集成：Qwen Code产品新增多模态模型集成和子代理支持，用户可通过阿里云Model Studio API或Qwen Code平台使用。

安全护栏模型Qwen3Guard保障交互
发布了Qwen3Guard安全护栏模型，基于Qwen3架构，专为AI交互提供精准的安全保障和风险识别。
- 模型版本：提供Qwen3Guard-Gen（生成式版）和Qwen3Guard-Stream（流式检测版）两大专业版本，每个版本均含0.6B、4B、8B三种参数规模。
- 实时检测：支持实时流式检测，可在模型逐词生成回复过程中进行低延迟安全审核。
- 风险分类：引入三级风险等级分类（安全、争议性、不安全），支持根据应用场景灵活调整安全策略。
- 多语言支持：覆盖119种语言及方言的安全检测，模型已在Hugging Face和ModelScope开源。

图像编辑模型Qwen-Image-Edit-2509增强一致性
更新了Qwen-Image-Edit-2509图像编辑模型，作为Qwen-Image-Edit系列的月迭代版本，新增多图编辑支持并显著提升单图编辑的一致性。
- 多图编辑：支持多图像输入编辑，提供"人物+人物"、"人物+商品"、"人物+场景"等多种组合玩法。
- 一致性提升：人物编辑增强人脸ID保持，支持姿势变换；商品编辑优化商品ID保持；文字编辑支持字体、色彩和材质修改。
- ControlNet集成：原生支持深度图、边缘图、关键点图等ControlNet常用控制条件。
- 可用性：模型已在Qwen Chat平台正式上线，用户可通过选择"图像编辑"功能直接体验。

多模态同传模型Qwen3-LiveTranslate实现实时翻译
推出了Qwen3-LiveTranslate多模态同传模型，支持视、听、说全模态实时翻译，适用于会议、讲座、旅行等多种跨语言沟通场景。
- 多模态融合：采用Transformer架构，能够同时处理语音、文本和图像信息，实现更准确的翻译。
- 语言支持：覆盖100多种语言，具备低延迟和高准确率特点。
- 应用场景：专为会议翻译、讲座同传、旅行实时翻译等场景优化。
- 开源发布：模型已在GitHub、ModelScope和Hugging Face平台开源，用户可通过Qwen Chat平台直接使用。

旅行规划助手打造智能行程
发布了基于Multi-Agent架构的旅行规划助手，能够处理复杂的多城市或多景点行程安排，提供个性化的智能行程设计。
- 核心功能：生成精确到小时的每日行程表，涵盖交通、住宿、景点、用餐等环节，并附带预算估算和注意事项提醒。
- 实时数据：通过调用高德地图、飞猪等第三方接口获取实时信息，一次3天行程可能调用超过70次工具。
- 动态优化：基于Qwen模型的推理与反思能力，可根据实时交通或景点开放情况调整行程顺序。
- 产品上线：已在Qwen Chat平台上线，支持行程下载和分享功能。

今日的系列发布不仅展示了通义千问在AI技术前沿的持续突破，还通过开源与产品化结合，推动了整个生态的协同发展，为开发者和用户提供了更丰富的工具与体验。`
    },
    {
      id: "chatgpt-updates",
      icon: gptIcon,
      productName: "ChatGPT",
      title: "ChatGPT新动态：专用代码模型发布，全球开发者活动与算力基建同步扩张",
      date: "2025年9月23日",
      category: "基础大模型",
      subtitles: ["专为代码而生，新模型GPT-5-Codex正式上线API", "携手Oracle与SoftBank，OpenAI加速万亿级AI基础设施建设", "连接全球开发者，DevDay [Exchange]系列线下活动开放申请"],
      content: `OpenAI正从核心技术的产品化、全球开发者生态的建设，到关乎未来的AI基础设施布局等多个维度，加速其发展步伐。

专为代码而生，新模型GPT-5-Codex正式上线API
OpenAI宣布推出一款专为编码场景设计的特殊用途模型gpt-5-Codex。官方强调了该模型的一些关键特性：
- 模型为Codex CLI专用：这是一款为配合该命令行工具而专门构建和优化的模型，并非为取代其他模型设计的通用产品。
- 模型已在API中上线：该模型已在Responses API中提供，持有API密钥的Codex CLI用户可直接调用。
- 并非通用模型替代品：官方强调，为获得最佳性能，用户需参考专门的提示词指南进行操作，不能将其作为其他模型的直接替代品。
- 可集成于代码代理应用：该模型已准备好被集成到各类代码代理（agentic coding）应用和相关工作流中。

携手Oracle与SoftBank，OpenAI加速万亿级AI基础设施建设
OpenAI公布了其"Stargate"AI基础设施平台的重大扩展计划，宣布与Oracle及SoftBank达成战略合作，在美国本土新建五个AI数据中心站点。此次合作使Stargate的总规划容量接近7吉瓦，未来三年的总投资额将超过4000亿美元，有望在2025年底前提前完成其5000亿美元、10吉瓦的宏大投资承诺。在清晰的分工下，与Oracle的合作主要包括共同开发三个新站点，分别位于德克萨斯州沙克尔福德县、新墨西哥州多尼亚安娜县以及一个即将公布的中西部地点，并计划扩建德州阿比林的旗舰数据中心。而与SoftBank的合作则侧重于另外两个站点的开发，分别位于俄亥俄州洛兹敦和德克萨斯州米拉姆县，旨在通过先进设计和快速构建方案，在未来18个月内将容量扩展至1.5吉瓦。此举被视为解锁下一代AI技术突破的关键一步，预计将为美国创造超过25,000个现场工作岗位。

连接全球开发者，DevDay [Exchange]系列线下活动开放申请
在开发者生态建设方面，OpenAI启动了名为"DevDay [Exchange]"的系列线下活动，并已开放申请通道。这被定义为一系列"小范围的亲密聚会"，旨在连接世界各地的本地开发者。活动将在全球五大城市巡回举办，包括圣保罗（10月16日）、伦敦（10月21日）、班加罗尔（11月4日）、东京（11月11日）和首尔（11月13日）。由于活动席位有限，有兴趣的开发者需要通过官方链接提交申请。

另外值得关注的是，OpenAI与NVIDIA的合作也达到了新的里程碑。NVIDIA宣布将与OpenAI建立合作伙伴关系，使用数百万颗NVIDIA GPU为OpenAI构建多个吉瓦规模的"AI工厂"，为其数据中心提供10吉瓦的GPU算力。OpenAI CEO Sam Altman与联合创始人Greg Brockman均对双方近十年的合作表示高度肯定。Sam Altman本人分享了一篇题为"丰裕智能"（Abundant Intelligence）的文章，引发了外界的广泛关注。`
    },
    {
      id: "gemini-updates",
      icon: geminiIcon,
      productName: "Gemini",
      title: "Gemini 全线出击：从原生语音 API 到 AI 学习助手",
      date: "2025年9月23日",
      category: "基础大模型",
      subtitles: ["Gemini Live API 更新，发布 2.5 Flash 原生音频模型", "Gemini 应用上线\"引导学习\"模式，由 LearnLM 模型驱动", "Google AI Plus 订阅服务扩展至40个新国家，加速 Gemini 市场布局", "石家庄 GDG 社区周四开讲：Gemini API、Nano 与 AI Edge RAG 开发实战", "谷歌联手 Kaggle 开设\"AI Agents 5日集训营\"", "官方亲自下场\"整活\"：Nano Banana 提示词玩法大赏"],
      content: `Gemini迎来一次全方位的产品更新。在开发者层面，Live API 迎来了具备原生音频能力的 Gemini 2.5 Flash 新模型，大幅提升了语音交互的可靠性。在应用层面，Gemini 应用本身推出了由 LearnLM 模型家族驱动的"引导学习"新模式。商业拓展方面，包含 Gemini 功能的 Google AI Plus 订阅计划正被加速推向40个新兴市场。同时，围绕 Gemini API 和 AI Agents 的开发者活动也已排上日程。

Gemini Live API 更新，发布 2.5 Flash 原生音频模型
Gemini 的 Live API 今日迎来重大更新，正式向开发者发布了 gemini-2.5-flash-native-audio-preview-09-2025 模型。此次更新的核心是引入了原生音频 (native audio) 处理能力，旨在打造更自然、更流畅的语音智能代理。新模型显著提升了语音交互的可靠性与自然度。
- 原生音频模型引入：发布了 gemini-2.5-flash-native-audio-preview-09-2025 新模型，该模型基于原生音频构建，使对话的听感和体验更加自然。
- 功能调用可靠性x2：新模型的功能调用 (function calling) 可靠性提升了2倍，并得到了显著改进。
- 语音打断处理优化：新模型能更准确地检测用户打断，并改进了对语音切断 (speech cut off) 的处理。
- 对话流畅度提升：通过更好地理解对话中的自然停顿，减少了错误的打断。同时，对闲聊、暂停和恢复对话等场景也进行了优化。

Gemini 应用上线"引导学习"模式，由 LearnLM 模型驱动
Gemini 应用中正式推出"引导学习"(Guided Learning) 新功能，旨在扮演一个互动式的"学习搭档"。该功能由专为学习优化的 LearnLM 模型家族提供支持，核心是帮助用户建立更深的知识理解，而不是直接提供答案。
- 互动式引导学习：新模式会向用户提问，根据用户的水平定制指导，并在讲解概念后进行测试，而不是直接给出答案。
- 支持多种学习材料：用户可以上传课程材料、请求调试代码，或学习复杂的概念。
- 富媒体内容辅助：该功能可以从高质量数据库中提取图表和图像，并从 YouTube 查找相关视频来辅助解释和学习。

Google AI Plus 订阅服务扩展至40个新国家，加速 Gemini 市场布局
谷歌今日宣布，在印度尼西亚成功试点后，将其"Google AI Plus"订阅计划大幅扩展至另外40个国家，主要覆盖非洲、亚洲和拉丁美洲的新兴市场。该计划被定位为一项更易负担的AI方案，旨在以更低价格向新兴市场用户提供 AI 生产力与创意工具。订阅内容包含 Gemini 在应用、Workspace 套件中的多项核心功能，如 Nano Banana 图像模型和 Veo 3 Fast 视频模型的更高使用限额、NotebookLM 的更高限额，以及 200GB 的云存储空间。

石家庄 GDG 社区周四开讲：Gemini API、Nano 与 AI Edge RAG 开发实战
谷歌开发者社区 (GDG) 的"社区说"系列活动本周将聚焦AI移动开发。由石家庄 GDG 社区主办的线上分享会定于9月25日（周四）晚7点举行。本次活动邀请了三位技术专家，议程涵盖使用 Gemini API 构建聊天应用、Gemini Nano 的端侧 AI 体系原理（涉及 AICore, LoRA）以及 Android 上的 Google AI Edge RAG 技术细节。对于专注出海和端侧 AI 的开发者来说，这是一次不容错过的技术交流机会。

谷歌联手 Kaggle 开设"AI Agents 5日集训营"
继年初吸引28万学习者的 GenAI 课程之后，谷歌现与 Kaggle 合作，将目光投向了 AI Agents 这一前沿领域。双方宣布将联合推出"AI Agents 5日强化课程"，定于11月10日至14日举行。该课程由谷歌AI研究员和工程师亲自设计，内容覆盖从简单 AI Agent 到复杂多智能体系统的构建，包括架构、工具、记忆和评估等模块。课程形式为深度讲解与 Codelab 动手实验相结合，学员还有机会通过最终的 capstone 项目赢取奖品。

官方亲自下场"整活"：Nano Banana 提示词玩法大赏
最新的 Nano Banana 图像模型显然正当红，连 Gemini 官方推特都忍不住亲自下场"带货"，教用户如何用提示词"将你的梦想宠物P进现实"。从将宠物猫做成胶囊玩具，到制作3D人偶和可视化建筑，社区和官方正在热情分享各种"复制粘贴"提示词。这波营销攻势，看来是铁了心要让所有人都体验一把 P 图的快乐。`
    },
    {
      id: "flow-updates",
      icon: flowIcon,
      productName: "Flow",
      title: "Flow 推出全新图像编辑与 Prompt Expanders 功能，强化 AI 创作体验",
      date: "2025年9月23日",
      category: "基础大模型",
      content: `Flow上线两项全新创作功能——图像编辑功能与Prompt Expanders 提示扩展功能，进一步拓展了用户在视觉与视频生成领域的创作边界。

全新的图像编辑功能允许用户在 Flow 平台中直接通过提示语（prompts）对图像进行编辑与优化。无论是改变光线、调整环境，还是切换艺术风格，Flow 都能在保持主体或场景一致性的同时实现自然变换。用户只需上传或生成图像，点击左上角的铅笔图标，即可开启智能编辑体验。官方表示，这一功能通过与 @NanoBanana 的合作，确保图像在多样化场景中依旧保持高保真视觉效果。

同时，Flow 还推出了 Prompt Expanders 功能，利用 Google 的 Gemini 模型 增强用户提示语，为视频创作提供更多风格化选择。该功能支持多种预设风格，如 Action Figure（动作人偶）、Film Noir（黑色电影） 和 Cinematic（电影风格），帮助创作者轻松生成具有特定审美取向的视频作品。

Flow 团队表示，这两项更新旨在降低创作门槛，赋能用户在 AI 影像生成与艺术表达中探索更多可能。即日起，用户可在 Flow 平台上体验新版功能，亲自感受 AI 驱动的创意进化。`
    },
    {
      id: "claude-updates",
      icon: claudeIcon,
      productName: "Claude",
      title: "Claude 动向：集成微软 365 Copilot，发力设计-代码转化",
      date: "2025年9月23日",
      category: "基础大模型",
      subtitles: ["Claude Code 发布 Figma 插件，实现设计稿一键转代码", "Anthropic 与微软达成合作，Claude 模型全面集成至 Microsoft 365 Copilot"],
      content: `Claude重要动态:在商业合作层面，Claude 宣布其模型正式集成至微软的 Microsoft 365 Copilot 生态，标志着其在企业级市场的进一步扩张。在产品功能层面，Claude 官方展示了其在设计-代码转化领域的最新能力，展示了 Claude Code 与 Figma 的结合应用。

Claude Code 发布 Figma 插件，实现设计稿一键转代码
Claude 官方今日发布推文，正式展示了其最新的代码生成能力：Claude Code 与设计工具 Figma 的集成。这一新功能旨在打通设计师与开发者之间的壁垒，通过 MCP (Model-Component-Properties) 协议，Claude 能够以数据级别深度理解 Figma 设计稿，并将其直接转化为生产就绪的前端代码。
- 设计稿深度解析：通过 MCP 协议，Claude 能够直接读取 Figma 文件的组件层级、设计令牌 (design tokens) 和自动布局规则，从根本上理解设计意图，而非简单的图像识别。
- 生成生产级代码：基于对设计稿数据层面的理解，Claude 能够生成高质量、可直接用于生产环境的代码，大幅提升从设计到开发的转换效率。

Anthropic 与微软达成合作，Claude 模型全面集成至 Microsoft 365 Copilot
Anthropic 公司宣布与微软达成一项重要合作，自9月24日起，旗下的 Claude Sonnet 4 和 Opus 4.1 模型将正式作为可选项，集成至 Microsoft 365 Copilot 的企业级服务中。此次集成是 Anthropic 扩大其在企业级市场影响力的关键一步，将使其先进的 AI 能力触达数百万通过微软生产力平台工作的企业用户。

根据公告，企业客户现在可以在微软的 Researcher 代理和 Copilot Studio 中选择使用 Claude 模型。在 Researcher 代理中，Claude Opus 4.1 将被用于支持复杂的、多步骤的研究任务，例如市场进入策略分析、产品趋势研究等，该代理能够整合网络数据、第三方数据以及用户的邮件、文件等内部工作内容进行深度推理。在 Copilot Studio 中，Claude Sonnet 4 和 Opus 4.1 将作为模型选项，赋能企业构建和定制用于深度推理、工作流自动化的企业级 AI 代理。

该功能将通过微软的"前沿计划"(Frontier Program)向已获得 Microsoft 365 Copilot 许可的客户逐步推出。`
    },
    {
      id: "deepseek-updates",
      icon: deepseekIcon,
      productName: "DeepSeek",
      title: "DeepSeek更新回顾",
      date: "2025年9月23日",
      category: "基础大模型",
      timeline: [{
        date: "2025-09-29",
        title: "DeepSeek-V3.2-Exp",
        details: ["deepseek-chat 和 deepseek-reasoner 都已升级为 DeepSeek-V3.2-Exp", "deepseek-chat 对应非思考模式，deepseek-reasoner 对应思考模式"]
      }, {
        date: "2025-09-22",
        title: "DeepSeek-V3.1-Terminus",
        details: ["语言一致性：缓解了中英文混杂、偶发异常字符等情况", "Agent能力：进一步优化了 Code Agent 与 Search Agent 的表现"]
      }, {
        date: "2025-08-21",
        title: "DeepSeek-V3.1",
        details: ["混合推理架构：一个模型同时支持思考模式与非思考模式", "更高的思考效率：相比 DeepSeek-R1-0528，能在更短时间内给出答案", "更强的 Agent 能力：SWE-bench Verified 达到 66.0"]
      }, {
        date: "2025-05-28",
        title: "deepseek-reasoner升级",
        details: ["推理能力增强：AIME 2025 从 70.0 提升至 87.5，GPQA 从 71.5 提升至 81.0", "Web前端开发能力优化：生成的网页与游戏更加美观", "幻觉降低：极大程度抑制了幻觉问题", "新增 JSON Output 与 Function Calling 支持"]
      }, {
        date: "2025-03-24",
        title: "deepseek-chat升级",
        details: ["推理能力增强：MMLU-Pro 从 75.9 提升至 81.2，AIME 从 39.6 提升至 59.4", "Web前端开发能力优化：代码生成准确率提升", "中文写作能力升级：实现与R1写作风格对齐", "Function Calling 能力改进"]
      }, {
        date: "2025-01-20",
        title: "DeepSeek-R1正式发布",
        details: ["推出新模型 deepseek-reasoner (DeepSeek-R1)", "专注于推理能力的提升"]
      }, {
        date: "2024-12-26",
        title: "DeepSeek-V3正式发布",
        details: ["deepseek-chat 模型升级为 DeepSeek-V3", "全面提升各项能力指标"]
      }, {
        date: "2024-12-10",
        title: "DeepSeek-V2.5-1210",
        details: ["数学能力：MATH-500 从 74.8% 提升至 82.8%", "代码能力：LiveCodebench 从 29.2% 提升至 34.38%", "优化文件上传和网页总结功能"]
      }]
    },
    // 通用明星产品
    {
      id: "metaso-updates",
      icon: metasoIcon,
      productName: "秘塔",
      title: "秘塔 AI 搜索进化：推出 Agentic Search，模型规模提升 10 倍",
      date: "2025年9月23日",
      category: "通用明星产品",
      content: `秘塔AI搜索宣布推出一项名为"Agentic Search"的重大功能更新，旨在将传统搜索从"找答案"转变为"完成任务"。该功能背后的模型参数规模相比旧版提升了10倍，以实现更强的推理能力和更稳定的工具调用。新版在内部盲测中对旧版胜率达到73%。

- 自主多步规划与执行：Agentic Search 能够自主规划步骤、编写代码并调用工具来完成复杂任务。相比旧版的单次搜索，新版一次能自主完成5-15步的工具调用。

- 模型规模10倍提升：为支撑更强的推理能力和工具调用稳定性，新版模型的参数规模提升了10倍。

- 内置20+工具集：目前版本内置了超过20种常见工具。功能示例包括：编写并运行代码来解方程以获得精确结果、按需生成文案并发送邮件、P图以及通过"美化输出"功能生成网站页面。

- 文献数据量扩充：为支撑搜索能力，秘塔宣布在最近一个月新索引了3000万篇论文。`
    },
    {
      id: "wenxin-updates",
      icon: wenxinIcon,
      productName: "文心一言",
      title: "文心一言动态：百度 AI 生态加速扩张，安全合规体系获国家级认可",
      date: "2025年9月23日",
      category: "通用明星产品",
      subtitles: ["百度数据安全治理与智能合规平台获双重国家级认可", "百度于 WAVE SUMMIT 2025 拓展 AI 生态，文心 4.5 获 30+ 平台接入"],
      content: `百度 AI 及其文心大模型在产业生态拓展与安全合规建设上均取得显著进展。在 WAVE SUMMIT 2025 产业论坛上，百度宣布7家企业加入其 AI 生态伙伴圈，同时文心4.5系列开源模型在发布当天即获30余家平台接入。在企业治理层面，百度的智能合规平台与数据安全治理体系在2025年国家网络安全宣传周期间获得了行业最高评级与大赛头名。

百度数据安全治理与智能合规平台获双重国家级认可
在2025年国家网络安全宣传周期间，百度在数据安全与合规治理方面获得了两项重要认可。首先，百度凭借其前瞻性的治理理念和技术布局，首批获评"个人信息保护合规审计自审计能力评价（PCA-SC）"的最高等级"规范级"。此评价由全国网络安全标准化技术委员会秘书处等机构联合发起，获得"规范级"标志着百度已构建起独立、规范且可重复执行的合规审计管理体系。其次，在2025年中国网络安全创新创业大赛中，百度的"智能合规平台"凭借其个人信息保护合规审计服务应用实践，荣获网络安全解决方案第一名。该平台通过"智能研判"核心，将复杂的法规标准转化为结构化的证据库和风险池，实现了合规检查、风险可视化和处置流程的自动化。

百度于 WAVE SUMMIT 2025 拓展 AI 生态，文心 4.5 获 30+ 平台接入
在近日于北京举行的 WAVE SUMMIT 2025 深度学习开发者大会产业论坛上，百度宣布其 AI 技术生态进一步扩张。百度 AI 技术生态副总经理周奇向7家新晋技术伙伴代表授牌，包括碧兴物联、北京海新智能、合肥语记和讼道技术等。这些合作伙伴已将百度的文心大模型和飞桨技术应用于多元化场景：碧兴物联利用 ERNIE-4.5-21B-A3B 模型实现了智慧水务管理；北京海新智能基于 ERNIE 4.5 开源模型打造了"时光之语"APP；合肥语记则将其应用于智能语音鼠标等 C 端产品。此外，百度强调了其开源生态的快速发展，宣布在文心4.5系列模型开源当天，便有 30+ 开源社区和算力平台完成了接入。GitCode、硅基流动、金山云和魔搭社区等9家平台成为首批开源技术服务平台伙伴。`
    },
    // 图像模型
    {
      id: "pixel-updates",
      icon: pixelIcon,
      productName: "像素蛋糕",
      title: "AI修图再进化：像素蛋糕发布手机版重磅更新，并邀行业伙伴共探增长",
      date: "2025年9月23日",
      category: "图像模型",
      subtitles: ["手机版迎AI功能革新，精修与创意玩法全面升级", "聚焦AI与商业增长，像素系列核心会员峰会启动报名"],
      content: `专业后期软件像素蛋糕正从产品功能和行业生态两个方向发力，为用户及合作伙伴带来一系列更新。

手机版迎AI功能革新，精修与创意玩法全面升级
像素蛋糕手机版迎来了重大版本更新（Android 1.1版与iPhone 1.3版），上线了一系列由AI驱动的创意及精修功能，同时宣布多项基础功能永久免费。
- AI祛路人功能上线：iPhone版新增智能消除路人功能，可智能检测并移除画面中的路人，同时保证画质无损，解决户外拍摄的常见痛点。
- AI追色功能拯救调色灵感：Android版新增该功能，可智能提取样片参数，帮助用户快速实现同款高级调色质感。
- 表情管理实现完美微笑：iPhone版新增该功能，通过智能调整嘴角微笑弧度，精细管理人像表情，还原完美状态。
- 新增多项实用修图模块：Android版加入了包含裁剪和旋转的构图模块与"衣服边缘平整"功能；iPhone版则全面升级了背景调整功能，可针对纯色背景进行去瑕疵、光影均匀等处理。
- 基础功能宣布永久免费：包括基础调色、液化在内的多项基础功能将对所有用户永久免费开放。

聚焦AI与商业增长，像素系列核心会员峰会启动报名
像素蛋糕宣布，将于10月20日至21日在广州万富希尔顿酒店举办"像素系列 | 核心会员经营增长峰会"。本次峰会聚焦AI时代的影像生产力重构，旨在为摄影行业的商家伙伴探讨"开源回流、提效降本"的增长之道。峰会汇集了来自前小米、前阿里巴巴的资深专家以及摄影行业的顶尖从业者，将围绕AI工作流、短视频获客、爆品打造、经营管理等核心议题展开分享。活动将设置经营主会场与技术专业分会场，以满足不同角色的学习需求。目前峰会已开放报名，限定200席位，像素系列会员可享专属优惠价格。`
    },
    {
      id: "liblibai-updates",
      icon: liblibaiIcon,
      productName: "LiblibAI",
      title: "LiblibAI 上线 WAN 2.5 多感官叙事模型，开启声画融合新纪元",
      date: "2025年9月23日",
      category: "图像模型",
      content: `LiblibAI 正式上线全新一代多模态生成模型——WAN 2.5，并携手通义万相共同举办全球同步发布会。本次发布以"多感官叙事：想象声色俱全"为主题，聚焦视觉与听觉的融合创新，展示了 AI 在跨媒体内容创作领域的最新突破。

WAN 2.5 是 LiblibAI 与通义万相团队联合研发的前沿多感官模型，旨在让创作者能够以更加自然的方式生成声画一体的叙事内容。模型在视觉理解、声音生成及跨模态协同等方面实现显著升级，为艺术家、视频创作者与开发者提供了全新的创作体验。

本次发布会于北京时间 9 月 24 日上午 10 点正式开启，设置了中文、日语、英文三大语言专场，覆盖全球主要创作者社区。活动邀请了来自 WaytoAGI、ComfyUI、Systms 等知名机构与社区的技术专家与创意领袖，共同探讨多感官 AI 的创作潜力与技术前沿。

官方直播通过哗哩哗哩与微信视频号同步播出，LiblibAI 与通义万相的官方账号联合主持，吸引了全球 AIGC 创作者与开发者的关注。WAN 2.5 模型现已在 LiblibAI 官网全球同步上线，用户可即刻体验 AI 带来的多感官叙事新世界。`
    }
  ];
  const deepseekArticle = articles.find(a => a.id === "deepseek-updates");
  const qwenArticle = articles.find(a => a.id === "qwen-updates");

  // 解析通义千问的内容，按subtitle分割
  const parseQwenContent = (content: string, subtitles: string[]) => {
    const sections: {
      title: string;
      content: string;
    }[] = [];
    const lines = content.split('\n');
    let currentSection = {
      title: '',
      content: ''
    };
    let inSection = false;
    for (const line of lines) {
      const trimmed = line.trim();

      // 检查是否是subtitle
      if (subtitles.includes(trimmed)) {
        // 保存前一个section
        if (currentSection.title && currentSection.content) {
          sections.push({
            ...currentSection
          });
        }
        // 开始新section
        currentSection = {
          title: trimmed,
          content: ''
        };
        inSection = true;
      } else if (inSection && trimmed) {
        // 添加内容到当前section
        currentSection.content += (currentSection.content ? '\n' : '') + trimmed;
      }
    }

    // 保存最后一个section
    if (currentSection.title && currentSection.content) {
      sections.push(currentSection);
    }
    return sections;
  };
  return <div className="min-h-screen bg-background">
      <TableOfContents items={articles.map(a => ({
      id: a.id,
      title: a.title,
      category: a.category
    }))} />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2 text-center">9月23日AI产品动态推送</h1>
          <p className="text-sm text-muted-foreground text-center">最新的人工智能技术更新与产品发布</p>
        </header>

        <ProductDock products={articles.map(article => {
          const count = article.subtitles?.length || (article.timeline ? article.timeline.length : 1);
          return {
            name: article.productName,
            icon: article.icon,
            count: count,
            id: article.id,
            category: article.category
          };
        })} />

        <main>
          {articles.map((article, index) => {
          const showDivider = index > 0 && articles[index - 1].category !== article.category;
          return <div key={index}>
                {showDivider && <CategoryDivider category={article.category} />}
                {article.id === "deepseek-updates" && deepseekArticle?.timeline ? <ArticleCard id={article.id} icon={article.icon} productName={article.productName} title={article.title} date={article.date}>
                    <Timeline data={deepseekArticle.timeline.map(item => ({
                      title: item.date,
                      content: (
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-foreground mb-3">{item.title}</h4>
                          <div className="bg-muted/30 rounded-lg p-4 border border-border">
                            <ul className="space-y-2">
                              {item.details.map((detail, idx) => (
                                <li key={idx} className="text-sm text-foreground/90 leading-relaxed flex gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span className="flex-1">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )
                    }))} />
                  </ArticleCard> : article.id === "qwen-updates" && qwenArticle?.subtitles && qwenArticle?.content ? <ArticleCard id={article.id} icon={article.icon} productName={article.productName} title={article.title} date={article.date}>
                    <div className="prose prose-slate max-w-none">
                      <p className="text-foreground/90 mb-6 leading-relaxed">
                        在今日的密集发布浪潮中，通义千问团队通过社交媒体预告了6个重大更新，涵盖新产品、开源项目和API接口，彰显了其在AI领域的快速迭代与全面布局。以下为今日发布的具体内容。
                      </p>
                      <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                        {parseQwenContent(qwenArticle.content, qwenArticle.subtitles).map((section, idx) => <AccordionItem key={idx} value={`item-${idx}`}>
                            <AccordionTrigger className="text-left">
                              <div>
                                <h3 className="text-lg font-semibold text-foreground">
                                  {String(idx + 1).padStart(2, '0')} {section.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {section.content.split('\n').find(line => line.trim() && !line.trim().startsWith('-')) || ''}
                                </p>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-foreground/90">
                              <div className="mt-2">
                              {section.content.split('\n').map((line, lineIdx) => {
                          const trimmed = line.trim();
                          if (trimmed.startsWith('-')) {
                            return <li key={lineIdx} className="ml-6 mb-2 list-disc">
                                      {trimmed.substring(1).trim()}
                                    </li>;
                          }
                          return <p key={lineIdx} className="mb-3 leading-relaxed">
                                    {trimmed}
                                  </p>;
                        })}
                              </div>
                            </AccordionContent>
                          </AccordionItem>)}
                      </Accordion>
                    </div>
                  </ArticleCard> : <ArticleCard id={article.id} icon={article.icon} productName={article.productName} title={article.title} date={article.date} content={article.content} subtitles={article.subtitles} />}
              </div>;
        })}
        </main>

        <footer className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 AI动态简报 · 技术突破与产品创新</p>
        </footer>
      </div>
      <ScrollToTop />
    </div>;
};
export default Index;