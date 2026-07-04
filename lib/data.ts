export const BG_WORDS = [
  "C", "C++", "C#", "Python", "Tailwind", "Next.js", "TypeScript",
  "Nmap", "Wireshark", "Metasploit", "Burp Suite", "Linux", "Bash",
  "TCP/IP", "Firewall", "VPN", "SSH", "Git", "HTML", "CSS",
  "Kali", "OSI", "DNS", "HTTP", "HTTPS", "SQL", "JWT",
];

export const PROJECTS = [
  {
    title: "Cybersecurity Home Lab",
    description: "Segmented Active Directory home lab for offensive/defensive security practice: OPNsense firewall, Wazuh SIEM, and Kali Linux across isolated client and server subnets.",
    tags: ["OPNsense", "Active Directory", "Wazuh", "Kali Linux"],
    link: "https://github.com/briw4/home_lab",
    image: "/projects/home-lab.jpg"
  },
  {
    title: "Monitoring Stack Automation",
    description: "Ansible playbooks that deploy a full Prometheus + Grafana monitoring stack across multiple nodes, with tag-based selective rollout and centralized metrics collection.",
    tags: ["Ansible", "Prometheus", "Grafana"],
    link: "https://github.com/briw4/grafana-prometheus",
    image: "/projects/grafana_prometheus.png"
  },
  {
    title: "Private IPFS Cluster",
    description: "Infrastructure-as-code for a private IPFS network with cluster-based pin management, Vault-encrypted secrets, and least-privilege systemd services.",
    tags: ["Ansible", "IPFS", "Ansible Vault"],
    link: "https://github.com/briw4/IPFS_Ansible",
    image: "/projects/ipfs_project.png"
  },
  {
    title: "Incremental Game Backend",
    description: "ASP.NET Core backend for an incremental clicker game: JWT auth, SignalR real-time events, and EF Core persistence for upgrades, achievements, and resets.",
    tags: [".NET", "SignalR", "Entity Framework"],
    link: "https://github.com/H-raf0/Incremental_Game",
    image: "/projects/clicker_game.png"
  },
];

export const SKILLS = [
  { name: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "C#",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "HTML",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Linux",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Bash",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
];
