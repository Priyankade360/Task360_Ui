import React, { useState } from "react";

import "./styles/Sidebar.css";

import add1 from './Assets/add (1).svg';
import vectorIcon from './Assets/Vector.svg';
import vectorIcon2 from './Assets/Vector_unread.svg';
import avijeet from './Assets/avijeet.png';
import jayanta from './Assets/jayanta.png';
import sucharita from './Assets/sucharita.png';
// Projects
import apple from './Assets/Apple.png';
import adidas from './Assets/Adidas.png';
import starbucks from './Assets/Starbucks.png';
import crocs from './Assets/Crocs.png';
import chanel from './Assets/Chanel.png';
import pizzahut from './Assets/PizzaHut.png'
// teams
import teams from './Assets/teams.svg';
import teamsitem from './Assets/teams.svg';
// channels
import lock from './Assets/Lock.svg';
import hash from './Assets/Hash.svg';
// plusicon
import plusIcon from './Assets/add.svg';
// companyLogo
import companyLogo from './Assets/360tasklogo.svg';
// profile-avatar
import profileavatar from './Assets/image.svg';
// profilenameArrow
import profilenameArrow from './Assets/profile-add.png';


// Initial users for Direct Messages
const initialUsers = [
  { name: "Abhijeet Das", avatar: avijeet, status: "online", unread: true },
  { name: "Jayanta Mahato", avatar: jayanta, status: "online", unread: true },
  { name: "Sucharita Paul", avatar: sucharita, status: "online", unread: false },
  { name: "Abhijeet Das", avatar: avijeet, status: "online", unread: true },
  { name: "Jayanta Mahato", avatar: jayanta, status: "online", unread: true },
  { name: "Sucharita Paul", avatar: sucharita, status: "online", unread: false }
  
];

// Initial project data
const initialProjects = [
  {name: "Pizza Hut",icon: pizzahut,},
  {name: "Chanel",icon:  chanel,},
  {name: "Starbucks",icon: starbucks,},
  // {name: "Adidas",icon: adidas,},
  // {name: "Crocs",icon: crocs,},
  // {name: "Apple",icon: apple,},
];

// Initial teams data
const initialTeams = [
  { name: "App-Development", icon: teams},
  { name: "General", icon: teams },
  { name: "Development", icon: teams },
  // { name: "Inernational Projects", icon: teams  },
  // { name: "Digital Marketing", icon: teams },
  // { name: "Wordpress-Development", icon: teams  }, 
];

// Initial channels data
const initialChannels = [
  { name: "App-DeActivevelopment", locked: true },
  { name: "General", locked: false },
  { name: "Development", locked: true },
  // { name: "International Projects", locked: true },
  // { name: "Digital-marketing", locked: false },
  // { name: "Wordpress-Development", locked: false },
];

const Sidebar = ({ setActivePage }) => {
  
    // Toggle states for each section
    const [isMessageOpen, setIsMessageOpen] = useState(true);
    const [isOpen, setIsOpen] = useState(true);
  const [isTeamsOpen, setIsTeamsOpen] = useState(true);
  const [isChannelsOpen, setIsChannelsOpen] = useState(true);
  

  // State variables for dynamic lists
  const [directMessages, setDirectMessages] = useState(initialUsers);
  const [projects, setProjects] = useState(initialProjects);
  const [teams, setTeams] = useState(initialTeams);
  const [channels, setChannels] = useState(initialChannels);

  const [selectedChat, setSelectedChat] = useState(null);  // T
  const [showAll, setShowAll] = useState(false);
  const openChat = (user) => {
    setSelectedChat(user);
  };

  const [isSearching, setIsSearching] = useState(false);
const [searchQuery, setSearchQuery] = useState("");
  // A helper function to close all sections except the one specified
  const closeOtherSections = (section) => {
    if (section !== "messages") {
      setIsMessageOpen(false);
    }
  };

  // Toggle functions for each section that close the other sections when opening one
  const handleToggleMessage = () => {
    if (!isMessageOpen) {
      closeOtherSections("messages");
    }
    setIsMessageOpen(!isMessageOpen);
  };

  const handleToggleProjects = () => {
    if (!isOpen) {
      closeOtherSections("projects");
    }
    setIsOpen(!isOpen);
  };

  const handleToggleTeams = () => {
    if (!isTeamsOpen) {
      closeOtherSections("teams");
    }
    setIsTeamsOpen(!isTeamsOpen);
  };

  const handleToggleChannels = () => {
    if (!isChannelsOpen) {
      closeOtherSections("channels");
    }
    setIsChannelsOpen(!isChannelsOpen);
  };

  // Function to load more conversations
  const loadMoreConversations = (e) => {
    e.preventDefault();
    setShowAll(!showAll);
    closeOtherSections("messages");
    if (!showAll) {
      const moreUsers = [
        { name: "Rahul Sharma", avatar: avijeet, status: "offline", unread: false },
        { name: "Priyanka Roy", avatar: sucharita, status: "online", unread: true }
      ];
      setDirectMessages([...initialUsers, ...moreUsers]);
    } else {
      setDirectMessages(initialUsers);
    }
  };

  // Function to load more projects
  // State to track project visibility
const [showAllProjects, setShowAllProjects] = useState(false);

const loadMoreProjects = (e) => {
  e.preventDefault();

  setShowAllProjects(!showAllProjects);

  if (!showAllProjects) {
    const moreProjects = [
      { name: "Microsoft", icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
      { name: "Google", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
      { name: "Amazon", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
      {name: "Adidas",icon: adidas,},
  {name: "Crocs",icon: crocs,},
  {name: "Apple",icon: apple,},
    ];
    setProjects([...initialProjects, ...moreProjects]);
  } else {
    setProjects(initialProjects);
  }
};


  // Function to load more teams
 // State to track team visibility
const [showAllTeams, setShowAllTeams] = useState(false);

const loadMoreTeams = (e) => {
  e.preventDefault();
  closeOtherSections("teams");

  setShowAllTeams(!showAllTeams);

  if (!showAllTeams) {
    const moreTeams = [
      { name: "UX-Design", icon: teamsitem },
      { name: "Marketing", icon: teamsitem },
      { name: "Sales", icon: teamsitem },
      { name: "Inernational Projects", icon: teams  },
  { name: "Digital Marketing", icon: teams },
  { name: "Wordpress-Development", icon: teams  }, 
    ];
    setTeams([...initialTeams, ...moreTeams]);
  } else {
    setTeams(initialTeams);
  }
};


  // Function to load more channels
  // State to track channel visibility
const [showAllChannels, setShowAllChannels] = useState(false);

const loadMoreChannels = (e) => {
  e.preventDefault();
  closeOtherSections("channels");

  setShowAllChannels(!showAllChannels);

  if (!showAllChannels) {
    const moreChannels = [
      { name: "Announcements", locked: false },
      { name: "Random", locked: false },
      { name: "Tech-Talk", locked: true },
      { name: "International Projects", locked: true },
  { name: "Digital-marketing", locked: false },
  { name: "Wordpress-Development", locked: false },
    ];
    setChannels([...initialChannels, ...moreChannels]);
  } else {
    setChannels(initialChannels);
  }
  };
  

const handleClick = () => {
  alert("Search!");
};

const handleSearchClick = () => {
  setIsSearching(true);
};


const handleSearchComplete = (e) => {
  if (e.key === "Enter") {
    console.log("Searching for:", searchQuery);
    setIsSearching(false); // Hide search input after search
    setSearchQuery(""); // Clear input
  }
};

  return (
    <div className="sidebar">
      {/* My Task */}
      <div className="sidebar-mytask-box" onClick={() => setActivePage("task")} >
       <img src={vectorIcon} alt="" className="mytask-icon" />
        <span className="mytask-text">My Task</span>
      </div>

      {/* Unread */}
      <div className="unread-box">
      <img src={vectorIcon2} alt="" className="unread-icon " />
        <span className="unread-text">Unread</span>
      </div>

      {/* Direct Message Section */}
      <div className="direct-message-section">
      <div className="direct-message-header"
        onClick={(e) => {
        if (!e.target.closest(".search-box")) {
        handleToggleMessage();
        }
        }}
        >
    {!isSearching ? (
    <>
      <span className="projects-arrow">
        {isMessageOpen ? "▾" : "▸"}
      </span>
      <span className="direct-message-text">Direct Message</span>
    </>
  ) : (

    <div className="search-box">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleSearchComplete}
        autoFocus
      />
      <button onClick={handleSearchClick} className="search-button">
        <img src={add1} alt="Search" />
      </button>
    </div>
  )}

  {!isSearching && (
    <div className="direct-message-add-button">
      <button onClick={handleSearchClick} className="tooltip-button">
        <img src={add1} alt="Search" />
      </button>
    </div>
  )}
</div>


        {isMessageOpen && (
          <ul className="direct-message-list">
            {directMessages.map((user, index) => (
    <li 
      key={index} 
      className={`direct-message-item ${selectedChat?.name === user.name ? "active-chat" : ""}`} 
      onClick={() => openChat(user)}
    >
      <img src={user.avatar} alt={`${user.name}'s avatar`} className="user-avatar" />
      <span className="user-name">{user.name}</span>
      {user.status === "online" && <span className="status-dot"></span>}
    </li>
  ))}
          </ul>
        )}
        <div className="more-conversation">
        <a href="#more-conversation" onClick={loadMoreConversations}>
    {!showAll ? "More" : "Less "}
  </a>
        </div>
      </div>

      {selectedChat && (
  <div className="chat-window">
    <div className="chat-header">
      <img src={selectedChat.avatar} alt={selectedChat.name} className="chat-avatar" />
      <span className="chat-username">{selectedChat.name}</span>
          </div>
          
  </div>
)}
      {/* Projects Section */}
      <div className="projects-section">
      
      <div 
  className="projects-header"
  onClick={(e) => {
    if (!e.target.closest(".projects-add-button")) {
      setIsOpen((prev) => !prev);  // Toggle Projects section only
    }
  }}
>
  <span className="projects-arrow">
    {isOpen ? "▾" : "▸"}
  </span>
  <span className="Project-text">Projects</span>
  
  <div className="projects-add-button">
    <button onClick={handleClick}>
      <img src={plusIcon} alt="Add" />
    </button>
  </div>
</div>



        {isOpen && (
          <ul className="projects-list">
            {projects.map((project, index) => (
              <li key={index} className="project-item">
                <img
                  src={project.icon}
                  alt={`${project.name}'s logo`}
                  className="profile-logo"
                />
                <span className="user-name">{project.name}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="more-projects">
  <a href="#more-projects" onClick={loadMoreProjects}>
    {!showAllProjects ? "More" : "Less"}
  </a>
</div>

      </div>

      {/* Teams Section */}
      <div className="teams-section">
      <div 
  className="teams-header"
  onClick={(e) => {
    if (!e.target.closest(".teams-add-button")) {
      setIsTeamsOpen((prev) => !prev);  // Toggle Teams section only
    }
  }}
>
  <span className="projects-arrow">
    {isTeamsOpen ? "▾" : "▸"}
  </span>
  <span className="Teams-text">Teams</span>
  
  <div className="teams-add-button">
    <button onClick={handleClick}>
      <img src={plusIcon} alt="Add" />
    </button>
  </div>
</div>
        {isTeamsOpen && (
          <ul className="teams-list">
            {teams.map((team, index) => (
              <li key={index} className="team-item">
                <img
                  src={team.icon}
                  alt={`${team.name} icon`}
                  className="team-icon"
                />
                <span className="team-name">{team.name}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="more-teams">
  <a href="#more-teams" onClick={loadMoreTeams}>
    {!showAllTeams ? "More" : "Less"}
  </a>
</div>

      </div>

      {/* Channels Section */}
      <div className="channels-section">
      <div 
  className="channels-header"
  onClick={(e) => {
    if (!e.target.closest(".channels-add-button")) {
      setIsChannelsOpen((prev) => !prev);  // Toggle Channels section only
    }
  }}
>
  <span className="projects-arrow">
    {isChannelsOpen ? "▾" : "▸"}
  </span>
  <span>Channels</span>

  <div className="channels-add-button">
    <button onClick={handleClick}>
      <img src={plusIcon} alt="Add" />
    </button>
  </div>
</div>

        {isChannelsOpen && (
          <ul className="channels-list">
            {channels.map((channel, index) => (
              <li key={index} className="channel-item">
                {channel.locked ? (
                  <img src={lock} alt="" className="channel-icon" />

              
                ) : (
                  <img src={hash} alt="" className="channel-icon" />
                )}
                <span className="channel-name">{channel.name}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="more-channels">
  <a href="#more-channels" onClick={loadMoreChannels}>
    {!showAllChannels ? "More" : "Less"}
  </a>
</div>

      </div>

      {/* Footer (Company + Profile) */}
      <div className="sidebar-footer">
       <div className="footer-company">
  <img src={companyLogo} alt="Company Logo" className="company-logo" />
        </div>
        
        <div className="footer-profile">
        <img src={profileavatar} alt="" className="profile-avatar" />
          
          <span className="profile-name">Profile Name</span>
          <span className="profilename-arrow">
            <img src={profilenameArrow} alt="" /></span>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
