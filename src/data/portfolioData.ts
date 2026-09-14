export interface DeveloperProfile {
  name: string;
  initials: string;
  title: string;
  headline: string;
  bio: string;
  email: string;
  itch: string;
  github: string;
  linkedin: string;
  currentStatus: {
    label: string;
    project: string;
  };
}

export interface TechnicalHighlight {
  title: string;
  description: string;
}

export interface FlagshipProject {
  title: string;
  subtitle: string;
  status: string;
  role: string;
  thumbnail: string;
  fallbackThumbnail?: string;
  tags: string[];
  highlights: TechnicalHighlight[];
  demoVideoTitle?: string;
  demoUrl?: string;
  repoUrl?: string;
  codeSnippet: {
    filename: string;
    pattern: string;
    code: string;
  };
}

export interface ShippedProject {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  url: string;
  thumbnail: string;
  fallbackThumbnail?: string;
  tags: string[];
  description: string;
  highlights?: string[];
}

export interface PrototypeFeature {
  number: string;
  title: string;
  description: string;
}

export interface PrototypeProject {
  id: string;
  title: string;
  category: string;
  badge: string;
  url: string;
  thumbnail: string;
  fallbackThumbnail?: string;
  description: string;
  tags: string[];
  features: PrototypeFeature[];
}

export interface SkillItem {
  name: string;
  context: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export const developerProfile: DeveloperProfile = {
  name: "Harvey Jay Pilapil",
  initials: "HJP",
  title: "Unity & Gameplay Programmer",
  headline: "Unity & Gameplay Programmer specializing in decoupled gameplay systems, finite state machine AI, and performant C# architecture.",
  bio: "I design and build game architectures with strict adherence to SOLID principles, ScriptableObject-driven event channels, zero-allocation pooling loops, and responsive player feel.",
  email: "harveyjaypilapil24@gmail.com",
  itch: "https://hushgames24.itch.io/",
  github: "https://github.com/hushgames24",
  linkedin: "https://www.linkedin.com/in/harvey-jay-pilapil-65703b33a/",
  currentStatus: {
    label: "Actively engineering",
    project: "Banana Farm Chaos"
  }
};

export const flagshipProject: FlagshipProject = {
  title: "Banana Farm Chaos",
  subtitle: "Management Loop & NPC AI Production",
  status: "In Active Development",
  role: "Solo Gameplay Programmer & Designer",
  thumbnail: "/assets/banana-farm-chaos.png",
  fallbackThumbnail: "/assets/banana-farm-chaos-screenshot.png",
  tags: [
    "Unity",
    "C#",
    "UI Toolkit",
    "ScriptableObjects",
    "OOP / SOLID",
    "Object Pooling",
    "FSM AI"
  ],
  highlights: [
    {
      title: "Decoupled Management Loop",
      description: "Built an event-driven loop featuring banana maturation cycles, dynamic stall inventory capacities, and queue-based customer checkout flows without tight coupling between simulation sub-systems."
    },
    {
      title: "NPC AI State Machines",
      description: "Engineered hierarchical finite state machines governing customer purchasing decisions, dynamic obstacle path routing, and opportunist thief routines with predictable transitions."
    },
    {
      title: "SOLID Principles & Pooling",
      description: "Applied ScriptableObject architecture for modular data decoupling and custom zero-allocation object pooling to eliminate runtime GC hiccups and ensure deterministic frame pacing."
    }
  ],
  demoVideoTitle: "Banana Farm Chaos — Gameplay Demonstration",
  repoUrl: "https://github.com/hushgames24",
  codeSnippet: {
    filename: "BananaFarmChaos / Scripts / AI / CustomerAIStateMachine.cs",
    pattern: "Decoupled State Pattern",
    code: `public class CustomerAI : MonoBehaviour, IPoolable
{
    [SerializeField] private GameEventChannelSO _onCheckoutCompleted;
    [SerializeField] private CustomerConfigSO _config;
    
    private StateMachine _stateMachine;
    public NavMeshAgent Agent { get; private set; }

    private void Awake()
    {
        _stateMachine = new StateMachine();
        var browseState = new BrowseStallState(this, _config);
        var queueState  = new QueueCheckoutState(this, _config);
        var exitState   = new ExitStoreState(this);

        _stateMachine.AddTransition(browseState, queueState, () => HasSelectedItems());
        _stateMachine.AddTransition(queueState, exitState, () => TransactionComplete());
        _stateMachine.SetState(browseState);
    }
}`
  }
};

export const shippedProjects: ShippedProject[] = [
  {
    id: "divorce-papers",
    title: "Divorce Papers",
    subtitle: "First-Person Psychological Horror",
    badge: "Published on itch.io",
    url: "https://hushgames24.itch.io/divorce-paper",
    thumbnail: "/assets/divorce-papers.png",
    fallbackThumbnail: "/assets/divorce-papers-screenshot.png",
    tags: ["Unity", "C#", "First-Person", "Audio Triggers"],
    description: "Engineered an event-driven scare and atmosphere pipeline driven by spatial audio triggers and player proximity. Built responsive first-person physical interaction mechanics and item inspection routines for published itch.io distribution.",
    highlights: [
      "Spatial audio trigger pipeline coupled with listener distance attenuation",
      "Modular item inspection mechanics with mouse-orbit orientation",
      "Optimized first-person controller with smooth bobbing and collision feel"
    ]
  },
  {
    id: "wrong-door",
    title: "Wrong Door",
    subtitle: "Procedural & State-Based Puzzle Flow",
    badge: "Published on itch.io",
    url: "https://hushgames24.itch.io/wrong-door",
    thumbnail: "/assets/wrong-door.png",
    fallbackThumbnail: "/assets/wrong-door-screenshot.png",
    tags: ["Unity", "C#", "Puzzle Logic", "State Management"],
    description: "Architected dynamic trigger systems and state-based puzzle flow logic for branching exit conditions. Implemented clean scene resets, state serialization, and audiovisual cues optimized for WebGL and itch.io deployment.",
    highlights: [
      "Branching state machine tracking room progression and door validation",
      "Instantaneous scene reload mechanism with preserved session flags",
      "Zero-overhead WebGL target optimization with minimal build memory profile"
    ]
  }
];

export const prototypeProjects: PrototypeProject[] = [
  {
    id: "sister-claires-orphanage",
    title: "Sister Claire's Orphanage (Demo Prototype)",
    category: "Horror & Navigation R&D",
    badge: "Released Demo Prototype",
    url: "https://9l-studio.itch.io/sister-claires-orphanage",
    thumbnail: "/assets/sister-claires.png",
    fallbackThumbnail: "/assets/sister-claires-screenshot.png",
    description: "An experimental playable prototype focused on establishing custom mathematical motion handling, slope ray-projection, and high-fidelity sensory awareness for tension-driven first-person horror navigation.",
    tags: [
      "Unity 3D",
      "Kinematic Physics",
      "Sensory Raycasting",
      "IInteractable",
      "Vector Math"
    ],
    features: [
      {
        number: "01",
        title: "Kinematic Motion",
        description: "Custom movement controller with acceleration curves, slope ray-projection, and stair step-snapping without standard rigid-body jitter."
      },
      {
        number: "02",
        title: "Line-of-Sight",
        description: "Multi-raycast vision cone testing, shadow occlusion checks, and peripheral vision awareness algorithms for AI stealth mechanics."
      },
      {
        number: "03",
        title: "Modular Interactions",
        description: "Decoupled IInteractable event pipeline supporting tap, hold, physics manipulation, and examine states with contextual UI prompts."
      }
    ]
  }
];

export const technicalSkills: SkillCategory[] = [
  {
    category: "Engine & Languages",
    items: [
      { name: "C#", context: "Advanced OOP, Generics, LINQ" },
      { name: "Unity Engine", context: "2021 / 2022 / Unity 6" },
      { name: "Gameplay Math", context: "Vectors, Quaternions, Trigonometry" },
      { name: "Physics & Raycasts", context: "Kinematics, Collision Layers" }
    ]
  },
  {
    category: "Architecture & Patterns",
    items: [
      { name: "ScriptableObjects", context: "Event Channels & Modular Data" },
      { name: "State Machines", context: "Hierarchical Finite State Machines" },
      { name: "SOLID Principles", context: "Decoupled, Testable Systems" },
      { name: "Observer / Pub-Sub", context: "Event-Driven Gameplay Flow" }
    ]
  },
  {
    category: "Optimization & UI",
    items: [
      { name: "Object Pooling", context: "Zero Runtime GC Allocations" },
      { name: "UI Toolkit / UGUI", context: "Responsive USS & Dynamic Layouts" },
      { name: "Profiler & Frame Budget", context: "CPU/GPU Profiling, Batching" },
      { name: "Memory Management", context: "Structs, References, Asset Unloading" }
    ]
  },
  {
    category: "Pipeline & Tooling",
    items: [
      { name: "Git & Git LFS", context: "Branching, PRs, Large Binary Assets" },
      { name: "Blender", context: "Low-poly Modeling & Armature Rigging" },
      { name: "VS / Rider", context: "Debugging, Profiling, Roslyn Analyzers" },
      { name: "WebGL / Desktop Builds", context: "AssetBundles, Player Settings" }
    ]
  }
];

export const summarySkillBadges: string[] = [
  "C#",
  "Unity Engine",
  "ScriptableObjects",
  "State Machines (HFSM)",
  "Object Pooling",
  "SOLID Architecture",
  "Kinematic Physics",
  "UI Toolkit / UGUI",
  "Git / Git LFS",
  "Blender (Low-poly)",
  "Spatial Audio"
];
