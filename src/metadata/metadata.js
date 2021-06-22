module.exports = {
  name: "Tuan Nguyen",
  title: "Fullstack Developer",
  baseUrl: "https://kubeplusplus.github.io/cv/",
  facts: {
    Residence:
      '<a href="#"><i class="fa fa-home fact-icon"></i>District 3, HCM</a>',
    LinkedIn:
      '<a href="https://www.linkedin.com/in/tuannguyen1993/"><i class="fab fa-linkedin fact-icon"></i>tuannguyen1993</a>',
    GitHub:
      '<a href="https://github.com/kubeplusplus"><i class="fab fa-github fact-icon"></i>kubeplusplus</a>',
    Email:
      '<a href="mailto:tuan.nguyen930708@gmail.com">tuan.nguyen930708@gmail.com</a>',
  },
  skills: [
    ["Javascript", "++++"],
    ["Typescript", "++++"],
    ["ReactJS", "+++"],
    ["MongoDB", "++++"],
    ["Redis", "++++"],
    ["CI/CD", "++++"],
    ["Docker ", "+++"],
    ["Kubenetes ", "+++"],
    ["PostgreSQL", "++"],
    ["MySQL", "++"],
    ["Elasticsearch", "++"],
    ["RabbitMQ", "+"],
    ["AWS", "+"],
    ["GCP", "+"],
  ],
  summary:
    "I am a fullstack developer, focusing on backend development. My goals are design large scale systems, optimize applications and lead teams to achieve sucessfull. Love to refresh my self evert single day, always hungry to keep learning!",
  positions: [
    {
      company: "2359Media",
      location: "HCM",
      title: "Software Engineer",
      period: "Apr 2021 - Present",
      skills: [
        "NodeJS",
        "ReactJS",
        "Kubenetes",
        "Redis",
        "RabbitMQ",
        "AWS",
        "GCP",
      ],
      contents: `
Senior engineer of Product Team.

Responsibilities:

* Maintained DevOps workflow includes K8S clusters, CI/CD pipeline, testing setup and so on.
* Designed and implemented MVP projects for pre-sale actions. 
* Sharing knowledges to team members about coding, testing and problem solving.

Achievements:

* Applied GitOps workflow that helps us use Git as source of truth (performs by FluxCD and GitHub Action). Reduce time and complexibility of deploy and release.
* Designed and developed a Voice Bot Platform base on GCP and deployed to K8S clusters on Azure.
* Applied testing to ensure source code quality. Always require more than 80% of code coverage.
* Hosted tech talks. Topics: Design ETL pipeline helps us create reports on Google Data Studio, Deployed the ELK stacks for Log Monitoring, and Coding Trick & Tips, ...
`,
    },
    {
      company: "Boomerang.Isentia",
      location: "HCM",
      title: "Technical Leader",
      period: "Mar 2018 - Apr 2019",
      skills: [
        "NodeJS",
        "ReactJS",
        "MongoDB",
        "ELK Stack",
        "RabbitMQ",
        "Redis",
        "Kubenetes",
      ],
      contents: `
Senior engineer and technical leader of #1 media monitoring, intelligence and insights solution provider in VietNam. The platform helps clients monitor conversations of their in real-time.

Responsibilities:

* Developed a large scale system that allow us crawled a ton of data from the internet. Most data came from social channel like Facebook, Youtube, Instagram, Viet Nam Forum and so on.
* Maintained internal logging montior system that uses ELK Stack (Elasticsearch, Logstash, Kibana).
* Automate release workflow with GitOps. Used FluxCD, Github Actions and Kubernetes (hosted on dedicated servers).

Achievements:

* With 15 nodes kubenetes cluster, we used to performed more than **30 million requests** to got **15 million documents** per day on peak time.
* Maintained 2 Elasticsearch clusters that stores more than **5 billion documents** (~ 15Tb text data).
* Reduced release time from 2 hours to 30 minutes.
* Got at least 80% code coverage.
`,
    },
  ],
  insights: [
    {
      period: "2016 &ndash; 2018",
      contents: `Maintained a ecommerce platform that was based on Yii framwork (PHP) at <a href="https://tagrem.com/index.html" target="_blank">Tagrem Corp</a> for <a href="https://www.serta.com/" target="_blank">Mattresses by Serta</a> <br> Delivered freelance projects that wrote by NodeJS, ExpressJS and MySQL.`
    },
    {
      period: "2015 &ndash; 2016",
      contents: `Developed marketplace for realty (<a href="https://nhadatso.com/" target="_blank">NhaDatSo</a>), vehicles (<a href="https://xehoiviet.com/" target="_blank">XeHoiViet</a>) and jobs (<a href="https://www.mangvieclam.com/" target="_blank">MangViecLam</a>)`
    },
  ],
  others: [
    {
      contents: `Some of my interests and hobbies revolve around GitHub and open source community.<br>A complete list of side/hobby projects: <a href="https://github.com/kubeplusplus" target="_blank">kubeplusplus</a>`
    },
  ],
};
