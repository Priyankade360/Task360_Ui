import React, { useState } from "react";
import "./styles/Sidebar.css";


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
// channels
import lock from './Assets/Lock.svg';
import hash from './Assets/Hash.svg';
// plusicon
import plusIcon from './Assets/add.png';
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
  { name: "Sucharita Paul", avatar: sucharita, status: "online", unread: false }
];

// Initial project data
const initialProjects = [
  {name: "Pizza Hut",icon: pizzahut,},
  {name: "Chanel",icon:  chanel,},
  {name: "Starbucks",icon: starbucks,},
  {name: "Adidas",icon: adidas,},
  {name: "Crocs",icon: crocs,},
  {name: "Apple",icon: apple,},
];

// Initial teams data
const initialTeams = [
  { name: "App-Development", icon: teams },
  { name: "General", icon: teams },
  { name: "Development", icon: teams },
  { name: "Inernational Projects", icon: teams  },
  { name: "Digital Marketing", icon: teams },
  { name: "Wordpress-Development", icon: teams  }, 
];

// Initial channels data
const initialChannels = [
  { name: "App-DeActivevelopment", locked: true },
  { name: "General", locked: false },
  { name: "Development", locked: true },
  { name: "International Projects", locked: true },
  { name: "Digital-marketing", locked: false },
  { name: "Wordpress-Development", locked: false },
];

const Sidebar = () => {
    // Toggle states for each section
  const [isOpen, setIsOpen] = useState(true);
  const [isMessageOpen, setIsMessageOpen] = useState(true);
  const [isTeamsOpen, setIsTeamsOpen] = useState(true);
  const [isChannelsOpen, setIsChannelsOpen] = useState(true);

  // State variables for dynamic lists
  const [directMessages, setDirectMessages] = useState(initialUsers);
  const [projects, setProjects] = useState(initialProjects);
  const [teams, setTeams] = useState(initialTeams);
  const [channels, setChannels] = useState(initialChannels);

  const [selectedChat, setSelectedChat] = useState(null);  // Track selected user 
  const openChat = (user) => {
    setSelectedChat(user);
  };
  // A helper function to close all sections except the one specified
  const closeOtherSections = (section) => {
    if (section !== "messages") setIsMessageOpen(false);
    if (section !== "projects") setIsOpen(false);
    if (section !== "teams") setIsTeamsOpen(false);
    if (section !== "channels") setIsChannelsOpen(false);
  };

  // Toggle functions for each section that close the other sections when opening one
  const handleToggleMessage = () => {
    // If currently closed, open it and close others; otherwise, simply toggle off.
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
    // Open direct messages and close other sections
    closeOtherSections("messages");
    setIsMessageOpen(true);
    const moreUsers = [
      { name: "Abhijeet Das", avatar: avijeet, status: "online", unread: true },
      { name: "Jayanta Mahato", avatar: jayanta, status: "online", unread: true },
      { name: "Sucharita Paul", avatar: sucharita, status: "online", unread: false },
    ];
    setDirectMessages((prev) => [...prev, ...moreUsers]);
  };

  // Function to load more projects
  const loadMoreProjects = (e) => {
    e.preventDefault();
    // Open projects and close other sections
    closeOtherSections("projects");
    setIsOpen(true);
    const moreProjects = [
      {
        name: "Microsoft",
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      },
      {
        name: "Google",
        icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      },
      {
        name: "Amazon",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      },
    ];
    setProjects((prev) => [...prev, ...moreProjects]);
  };

  // Function to load more teams
  const loadMoreTeams = (e) => {
    e.preventDefault();
    // Open teams and close other sections
    closeOtherSections("teams");
    setIsTeamsOpen(true);
    const moreTeams = [
      { name: "UX-Design", icon: "https://img.icons8.com/ios-filled/50/000000/conference-call.png" },
      { name: "Marketing", icon: "https://img.icons8.com/ios-filled/50/000000/conference-call.png" },
      { name: "Sales", icon: "https://img.icons8.com/ios-filled/50/000000/conference-call.png" },
    ];
    setTeams((prev) => [...prev, ...moreTeams]);
  };

  // Function to load more channels
  const loadMoreChannels = (e) => {
    e.preventDefault();
    // Open channels and close other sections
    closeOtherSections("channels");
    setIsChannelsOpen(true);
    const moreChannels = [
      { name: "Announcements", locked: false },
      { name: "Random", locked: false },
      { name: "Tech-Talk", locked: true },
    ];
    setChannels((prev) => [...prev, ...moreChannels]);
    };
    
  return (
    <div className="sidebar">
      {/* My Task */}
      <div className="sidebar-mytask-box">
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
        <div className="direct-message-header">
          <span className="projects-arrow" onClick={handleToggleMessage}>
            {isMessageOpen ? "▾" : "▸"}
          </span>
          <span className="direct-message-text">Direct Message</span>
          <div className="direct-message-add-button">
    <button>
    <img src={plusIcon} alt="Add" />
    </button>
    </div>
          
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
            More Conversations
          </a>
        </div>
      </div>

      {selectedChat && (
  <div className="chat-window">
    <div className="chat-header">
      <img src={selectedChat.avatar} alt={selectedChat.name} className="chat-avatar" />
      <span className="chat-username">{selectedChat.name}</span>
      {/* <button onClick={() => setSelectedChat(null)} className="close-chat">X</button> */}
          </div>
          
  </div>
)}
      {/* Projects Section */}
      <div className="projects-section">
        <div className="projects-header">
          <span className="projects-arrow" onClick={handleToggleProjects}>
            {isOpen ? "▾" : "▸"}
          </span>
          <span className="Project-text">Projects</span>
          <div className="projects-add-button">
        <button>
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
            More Projects
          </a>
        </div>
      </div>

      {/* Teams Section */}
      <div className="teams-section">
        <div className="teams-header">
          <span className="projects-arrow" onClick={handleToggleTeams}>
            {isTeamsOpen ? "▾" : "▸"}
          </span>
          <span className="Teams-text">Teams</span>
          <div className="teams-add-button">
        <button>
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
            More Teams
          </a>
        </div>
      </div>

      {/* Channels Section */}
      <div className="channels-section">
        <div className="channels-header">
          <span className="projects-arrow" onClick={handleToggleChannels}>
            {isChannelsOpen ? "▾" : "▸"}
          </span>
          <span>Channels</span>
          <div className="channels-add-button">
        <button>
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
            More Channels
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
