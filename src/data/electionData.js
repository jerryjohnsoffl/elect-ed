export const timelineData = [
  {
    phase: "Months Before",
    title: "Election Announced & Candidates File",
    desc: "The government sets the election date and opens the nomination window. Political parties begin selecting their candidates through internal processes.",
    details: [
      { label: "Who Acts", val: "Government, Election Commission, Political Parties" },
      { label: "What Happens", val: "Election date set, writ issued, candidate nomination forms open" },
      { label: "Your Action", val: "Start following candidates and party platforms" },
      { label: "Key Term", val: "Nomination: The formal process of becoming an official candidate" },
    ],
  },
  {
    phase: "~6 Weeks Before",
    title: "Voter Registration Deadline",
    desc: "Most jurisdictions have a cutoff date for registering to vote. After this date, new voters typically cannot participate in the upcoming election.",
    details: [
      { label: "Who Acts", val: "Eligible citizens must register" },
      { label: "What Happens", val: "Voter rolls are finalized; registration typically closes" },
      { label: "Your Action", val: "Verify you are registered; help others register before the deadline" },
      { label: "Check Online", val: "Visit your national/state election authority website" },
    ],
  },
  {
    phase: "Weeks Before",
    title: "Campaign & Canvassing Period",
    desc: "Candidates and parties campaign vigorously through rallies, advertisements, debates, and door-to-door canvassing. Media coverage intensifies.",
    details: [
      { label: "Who Acts", val: "Candidates, political parties, volunteers, media" },
      { label: "What Happens", val: "Debates, rallies, ads, policy announcements" },
      { label: "Your Action", val: "Research candidates, attend events, read manifestos, fact-check claims" },
      { label: "Caution", val: "Beware of misinformation; rely on official and verified sources" },
    ],
  },
  {
    phase: "Days Before",
    title: "Campaign Blackout / Silent Period",
    desc: "Many countries enforce a campaign silence period (typically 24\u201348 hours before Election Day) where no new campaigning is allowed.",
    details: [
      { label: "Who Acts", val: "Candidates and media must observe silence" },
      { label: "What Happens", val: "No new campaign material, no public rallies, media blackout on new poll results" },
      { label: "Your Action", val: "Finalize your voting plan: know your polling place, ID needed, and travel time" },
      { label: "Why It Exists", val: "Protects voters from last-minute pressure and undue influence" },
    ],
  },
  {
    phase: "Election Day",
    title: "Polling Day \u2014 Cast Your Vote",
    desc: "Polling stations open (typically 6 AM \u2013 8 PM). Citizens go to their designated polling place, verify identity, receive a ballot, mark it, and deposit it.",
    details: [
      { label: "Who Acts", val: "Every eligible registered voter" },
      { label: "Bring With You", val: "Valid photo ID, voter registration card if required" },
      { label: "Your Action", val: "Vote! Arrive early to avoid queues. Ask election officials if unsure about anything" },
      { label: "Rights", val: "You have the right to a secret ballot and to vote without intimidation" },
    ],
  },
  {
    phase: "Same Night",
    title: "Polls Close & Counting Begins",
    desc: "Once polling stations close, ballots are collected, counted, and tallied \u2014 either by hand, machine, or both \u2014 under supervision of election officials and party observers.",
    details: [
      { label: "Who Acts", val: "Election officials, party scrutineers, independent observers" },
      { label: "What Happens", val: "Physical or digital count, results reported precinct by precinct" },
      { label: "Your Action", val: "Watch official results on trusted news sources" },
      { label: "Timeline", val: "Preliminary results usually within hours; final certified results may take days" },
    ],
  },
  {
    phase: "Days/Weeks After",
    title: "Results Certified & Winner Declared",
    desc: "The election authority reviews and certifies all ballots, resolves disputed ballots, and officially declares winners. Losers typically concede.",
    details: [
      { label: "Who Acts", val: "Election Commission, courts if disputed" },
      { label: "What Happens", val: "Official certification, any recounts or legal challenges resolved" },
      { label: "Your Action", val: "Engage with civic society; hold elected officials accountable" },
      { label: "Key Term", val: "Certification: The official legal confirmation of election results" },
    ],
  },
  {
    phase: "Transition Period",
    title: "Inauguration & Transfer of Power",
    desc: "The newly elected official is sworn into office in a formal ceremony. Outgoing officials facilitate a smooth handover of power.",
    details: [
      { label: "Who Acts", val: "Incoming and outgoing officeholders, judiciary" },
      { label: "What Happens", val: "Swearing-in ceremony, briefings, staff transitions" },
      { label: "Your Action", val: "Engage with your new representative; attend town halls; write to your MP/representative" },
      { label: "Why It Matters", val: "Peaceful transfer of power is a cornerstone of stable democracy" },
    ],
  },
];

export const stepsData = [
  {
    title: "Check Your Eligibility",
    text: "Most democracies require you to be a citizen aged 18 or older. Some places allow 16-year-olds to vote in local elections. Verify requirements for your country or state.",
    tip: "Eligibility rules vary by election type (national vs. local). Always check official government sources.",
  },
  {
    title: "Register to Vote",
    text: "Register with your local election authority before the deadline. You\u2019ll typically need proof of identity and address. Many countries offer online, mail-in, and in-person registration.",
    tip: "Registration usually closes 2\u20136 weeks before Election Day. Don\u2019t miss it!",
  },
  {
    title: "Confirm Your Registration",
    text: "After registering, verify your registration status on your election authority\u2019s website. Check your polling station assignment and that all your details are correct.",
    tip: "Changed address? Update your registration if you\u2019ve moved, even within the same district.",
  },
  {
    title: "Research the Candidates & Issues",
    text: "Study the candidates\u2019 platforms, past record, endorsements, and party positions. Read multiple sources and watch official debates. Look up how incumbents voted on key issues.",
    tip: "Most election bodies publish official candidate bios and policy platforms.",
  },
  {
    title: "Find Your Polling Place",
    text: "Your assigned polling station is usually based on your registered address. Find it on your voter card or your election authority\u2019s website. Plan your route in advance.",
    tip: "If you need a wheelchair-accessible station or language assistance, request it in advance.",
  },
  {
    title: "Prepare What to Bring",
    text: "Gather your required ID (government-issued photo ID, voter card, or passport, depending on jurisdiction). Know your voter ID number if applicable.",
    tip: "Some places don\u2019t require ID \u2014 check your specific jurisdiction\u2019s rules ahead of time.",
  },
  {
    title: "Cast Your Vote",
    text: "Go to your polling station during voting hours (usually 6 AM\u20138 PM). Present your ID, receive your ballot, mark it in private, and deposit it in the ballot box. Follow instructions carefully.",
    tip: "Spoilt ballots don\u2019t count. If you make a mistake, ask for a replacement ballot before depositing.",
  },
  {
    title: "Track Results & Stay Engaged",
    text: "Follow official election results on trusted news channels or the election authority website. Once your representative is elected, hold them accountable through letters, petitions, and town halls.",
    tip: "Democracy doesn\u2019t end on Election Day. Civic engagement between elections matters just as much.",
  },
];

export const quizData = [
  {
    q: "What is the primary purpose of a general election?",
    opts: ["To select political party leaders", "To elect representatives to government", "To decide national budget priorities", "To appoint judges and officials"],
    ans: 1,
    exp: "A general election is held to elect representatives to the legislature or executive branch of government. Citizens vote for the candidates they want to represent them.",
  },
  {
    q: "What does 'voter registration' require you to do?",
    opts: ["Donate to a political party", "Add your name to the official voter roll before the election deadline", "Choose which party you support permanently", "Visit a government office on Election Day"],
    ans: 1,
    exp: "Voter registration is the process of adding your name to the official electoral roll so you are eligible to vote. Most jurisdictions require this to be done before a set deadline.",
  },
  {
    q: "What is a 'secret ballot'?",
    opts: ["A ballot only for secret society members", "A voting process where your individual vote is private and anonymous", "A ballot used only in by-elections", "A digital ballot cast online"],
    ans: 1,
    exp: "The secret ballot ensures that no one can see how you voted. This protects voters from intimidation and undue influence, and is a fundamental right in free elections.",
  },
  {
    q: "What is 'gerrymandering'?",
    opts: ["A voting fraud technique involving ballot stuffing", "Manipulating electoral district boundaries to favor a particular party", "The process of counting absentee ballots", "A campaign finance violation"],
    ans: 1,
    exp: "Gerrymandering is the manipulation of electoral district boundaries to give one party an unfair advantage. It\u2019s named after Governor Elbridge Gerry, whose Massachusetts redistricting in 1812 created a salamander-shaped district.",
  },
  {
    q: "What is a 'runoff election'?",
    opts: ["An election held when a candidate withdraws", "A second election when no candidate wins a required majority in the first round", "An early election called by the prime minister", "A local council election"],
    ans: 1,
    exp: "A runoff is held when no candidate receives the required threshold (often 50%+1) in the first round. The top two candidates face each other in a second vote to determine the winner.",
  },
  {
    q: "Who typically oversees and administers elections?",
    opts: ["The ruling political party", "The military", "An independent election commission or authority", "The Supreme Court"],
    ans: 2,
    exp: "Elections are administered by independent election commissions or electoral management bodies to ensure impartiality. Examples include the Election Commission of India, the FEC in the USA, and the Electoral Commission in the UK.",
  },
  {
    q: "What does 'proportional representation' mean?",
    opts: ["Only wealthy voters receive proportional votes", "Each party receives seats in proportion to its share of the total votes", "Representatives must proportionally reflect demographics", "Votes are weighted by population density"],
    ans: 1,
    exp: "In proportional representation systems, parties earn seats in parliament roughly proportional to the percentage of votes they receive. This contrasts with winner-takes-all or \u2018first past the post\u2019 systems.",
  },
  {
    q: "What is an 'exit poll'?",
    opts: ["A poll of voters who decide not to vote", "A survey of voters taken just after they cast their ballots", "A final pre-election opinion poll", "An official count of invalid ballots"],
    ans: 1,
    exp: "Exit polls survey voters immediately after they\u2019ve cast their ballots. They\u2019re used by media outlets to predict results before official counting is complete, though they are not official results.",
  },
  {
    q: "What is an 'electoral mandate'?",
    opts: ["A legal requirement to vote", "The authority given to an elected official to carry out their promised policies", "A court order during election disputes", "The official nomination document for candidates"],
    ans: 1,
    exp: "An electoral mandate is the authority and legitimacy given to an elected government or official to pursue the policies they campaigned on. A strong majority is often said to give a larger mandate.",
  },
  {
    q: "What does 'first past the post' (FPTP) voting mean?",
    opts: ["The first candidate to file their nomination wins", "The candidate with the most votes wins, regardless of whether they have a majority", "Candidates must reach 50%+1 to win", "The party that reaches 100 seats first wins the government"],
    ans: 1,
    exp: "In First Past the Post (FPTP), also called plurality voting, the candidate with the most votes wins \u2014 even if they don\u2019t have an absolute majority. Used in the UK, USA, Canada, and India for national elections.",
  },
];

export const glossaryData = [
  { term: "Ballot", tag: "Voting", def: "The physical paper or digital form used to cast a vote. Each ballot lists the candidates and/or measures being decided." },
  { term: "By-Election", tag: "Elections", def: "A special election held to fill a vacancy in a legislative seat between general elections, usually caused by death, resignation, or disqualification of a member." },
  { term: "Campaign Finance", tag: "Campaigns", def: "The money raised and spent by candidates and parties to win elections. Most countries have laws regulating who can donate, how much, and how it\u2019s reported." },
  { term: "Caucus", tag: "Process", def: "A meeting of party members to select candidates or determine party positions, used notably in US presidential primaries." },
  { term: "Constituency", tag: "Districts", def: "A geographic area whose residents are represented by a single elected official. Also called a \u2018riding\u2019, \u2018electorate\u2019, or \u2018district\u2019 in different countries." },
  { term: "Disenfranchisement", tag: "Rights", def: "The removal or denial of the right to vote from a citizen or group, through legal barriers, suppression, or other means." },
  { term: "Electoral College", tag: "Systems", def: "A body of electors established by the US Constitution who formally elect the President and Vice President. Each state has a number of electors based on its congressional representation." },
  { term: "Electoral Roll", tag: "Registration", def: "The official list of all registered voters in a jurisdiction. Only people on this list are allowed to vote on Election Day." },
  { term: "Exit Poll", tag: "Data", def: "A survey of voters taken immediately after they cast their ballots, used to predict results before official counts are complete." },
  { term: "Franchise", tag: "Rights", def: "The right to vote in public elections. \u2018Universal franchise\u2019 means all eligible adults have this right regardless of gender, race, or property." },
  { term: "Gerrymandering", tag: "Districts", def: "The manipulation of electoral district boundaries to give one political party an unfair advantage over opponents." },
  { term: "Hung Parliament", tag: "Results", def: "A situation where no single party wins an outright majority of seats, requiring coalition negotiations to form a government." },
  { term: "Incumbent", tag: "Candidates", def: "The current holder of an elected office who is seeking re-election." },
  { term: "Manifesto", tag: "Campaigns", def: "A public declaration by a political party of its policies, aims, and values \u2014 essentially their promises to voters." },
  { term: "Majority Government", tag: "Results", def: "A government formed by a single party (or coalition) that holds more than half the seats in the legislature, allowing it to pass legislation without relying on opposition support." },
  { term: "Minority Government", tag: "Results", def: "A government formed by a party that holds fewer than half the seats in the legislature, and must negotiate support from other parties to govern." },
  { term: "Nomination", tag: "Process", def: "The formal process by which a candidate declares their intention to run for office and qualifies to appear on the ballot." },
  { term: "Polling Station", tag: "Voting", def: "The physical location where voters go to cast their ballots on Election Day." },
  { term: "Popular Vote", tag: "Results", def: "The total number of individual votes cast by citizens across an election. In some systems (like the US Electoral College), winning the popular vote doesn\u2019t guarantee winning the election." },
  { term: "Preferential Voting", tag: "Systems", def: "A voting system where voters rank candidates in order of preference. If no candidate gets a majority of first choices, the least-popular candidate is eliminated and their votes redistribute to next preferences." },
  { term: "Primary Election", tag: "Process", def: "A pre-election contest within a political party to choose which candidate will represent the party in the general election." },
  { term: "Proportional Representation", tag: "Systems", def: "An electoral system where parties receive seats in proportion to their share of the total votes cast." },
  { term: "Quorum", tag: "Legislature", def: "The minimum number of members required to be present for a legislative body to conduct official business and pass legislation." },
  { term: "Redistricting", tag: "Districts", def: "The redrawing of electoral district boundaries, typically done after each census to reflect population changes." },
  { term: "Runoff Election", tag: "Process", def: "A second election held when no candidate achieves the required vote threshold (usually a majority) in the first round. The top two candidates compete again." },
  { term: "Scrutineer", tag: "Oversight", def: "A representative of a candidate or party who observes the ballot counting process to ensure accuracy and fairness." },
  { term: "Swing State / Marginal Seat", tag: "Results", def: "A constituency or state where support is divided roughly equally between parties, making it highly competitive and often decisive in election outcomes." },
  { term: "Turnout", tag: "Data", def: "The percentage of eligible voters who actually cast a ballot. High turnout generally indicates strong democratic engagement." },
  { term: "Writ of Election", tag: "Process", def: "The official legal document that triggers an election. Issuing the writ officially starts the election period." },
  { term: "Polling Day", tag: "Voting", def: "The official day on which citizens cast their votes. Also called Election Day." },
].sort((a, b) => a.term.localeCompare(b.term));

export const suggestedChips = [
  "How do I register?",
  "What ID do I need?",
  "How is my vote kept secret?",
  "What is FPTP?",
  "When are results announced?",
  "What is gerrymandering?",
];
