import ArticleCard from "@/components/ArticleCard";
import Timeline from "@/components/Timeline";
import TableOfContents from "@/components/TableOfContents";
import CategoryDivider from "@/components/CategoryDivider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import qwenIcon from "@/assets/qwen-icon.png";
import gptIcon from "@/assets/gpt-icon.png";
import pixelIcon from "@/assets/pixel-icon.jpg";
import deepseekIcon from "@/assets/deepseek-color.svg";
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
  const articles: Article[] = [{
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
  }, {
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
  }, {
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
  }, {
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
  }];
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

        <div className="relative mb-12">
          <nav className="p-4 bg-muted/50 rounded-lg border border-border">
            <div className="flex gap-4 items-center justify-center">
              {articles.map(article => {
              const subtitleCount = article.subtitles?.length || (article.timeline ? 1 : 0);
              return <a key={article.id} href={`#${article.id}`} className="relative group transition-transform hover:scale-110">
                    <img src={article.icon} alt={article.title} className="w-8 h-8 rounded-lg object-cover transition-all" />
                    {subtitleCount > 0 && <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full text-[10px] font-semibold flex items-center justify-center" style={{
                  backgroundColor: '#9333EA',
                  color: 'white'
                }}>
                        {subtitleCount}
                      </span>}
                  </a>;
            })}
            </div>
          </nav>
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none rounded-l-lg" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none rounded-r-lg" />
        </div>

        <main>
          {articles.map((article, index) => {
          const showDivider = index > 0 && articles[index - 1].category !== article.category;
          return <div key={index}>
                {showDivider && <CategoryDivider category={article.category} />}
                {article.id === "deepseek-updates" && deepseekArticle?.timeline ? <ArticleCard id={article.id} icon={article.icon} productName={article.productName} title={article.title} date={article.date}>
                    <Timeline items={deepseekArticle.timeline} />
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
    </div>;
};
export default Index;