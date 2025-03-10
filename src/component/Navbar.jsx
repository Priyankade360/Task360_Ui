import React, { useState } from "react";
import "./styles/Navbar.css";


import vectorIcon from './Assets/Vector.svg';
import vectorIcon2 from './Assets/Vector_unread.svg';
import add1 from './Assets/add (1).svg';
import openArrowIcon from "./Assets/down_arrow.svg";
import closedArrowIcon from "./Assets/side-arrow.svg";
import avijeet from './Assets/avijeet.png';
import jayanta from './Assets/jayanta.png';
import sucharita from './Assets/sucharita.png';
import sucharitaprofile from './Assets/sucharita1.png';
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
  ];
  
  // Initial teams data
  const initialTeams = [
    { name: "App-Development", icon: teams},
    { name: "General", icon: teams },
    { name: "Development", icon: teams },
  ];
  
  // Initial channels data
  const initialChannels = [
    { name: "App-DeActivevelopment", locked: true },
    { name: "General", locked: false },
    { name: "Development", locked: true },
  ];
  
const Navbar = () => {
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
    const [selectedChat, setSelectedChat] = useState(null);  
    const [showAll, setShowAll] = useState(false); 
    const [isSearching, setIsSearching] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [showAllTeams, setShowAllTeams] = useState(false);
  const [showAllChannels, setShowAllChannels] = useState(false);
  
  const [isprofileOpen, setIsprofileOpen] = useState(false); // Define state in Navbar
  const openChat = (user) => {
    setSelectedChat(user);
    };

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
 
 const loadMoreTeams = (e) => {
   e.preventDefault();
   setShowAllTeams(!showAllTeams);
 
   if (!showAllTeams) {
     const moreTeams = [
       { name: "UX-Design", icon: teamsitem },
       { name: "Marketing", icon: teamsitem },
       { name: "Sales", icon: teamsitem },
       { name: "Inernational Projects", icon: teamsitem  },
   { name: "Digital Marketing", icon: teamsitem },
   { name: "Wordpress-Development", icon: teamsitem  }, 
     ];
     setTeams([...initialTeams, ...moreTeams]);
   } else {
     setTeams(initialTeams);
   }
 };
 
 
 const loadMoreChannels = (e) => {
   e.preventDefault();
 
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
 const toggleDropdown = () => {
  setIsprofileOpen((prev) => !prev);
};
  return (
      <div className="navbar">
          <div className="navbar-component">
              {/* My Task */}
      <div className="navbar-mytask-box">
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
        <div className="header-section"
            onClick={(e) => {
            if (!e.target.closest(".search-box")) {
            handleToggleMessage();
            }}}
        >
            {!isSearching ? (
            <>
            <span className="down-arrow">
            <img src={isMessageOpen ? openArrowIcon : closedArrowIcon} alt="Toggle Icon"  />
            </span>
            <span className="text-section">Direct Message</span>
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
            </div> )}

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
            </li>))}
            </ul>
        )}
        <div className="more-section">
        <a href="#more-conversation" onClick={loadMoreConversations}>
        {!showAll ? "More" : "Less "}
        </a>
        </div>
        </div>
              
         {/* Projects Section */}
        <div className="projects-section">
        <div className="header-section"
            onClick={(e) => {
            if (!e.target.closest(".projects-add-button")) {
            setIsOpen((prev) => !prev); }}}
        >
        <span className="down-arrow">
        <img src={isOpen ? openArrowIcon : closedArrowIcon} alt="Toggle Icon"  />
        </span>
        <span className="text-section">Projects</span>
  
        <div className="add-button">
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
        <div className="more-section">
        <a href="#more-projects" onClick={loadMoreProjects}>
        {!showAllProjects ? "More" : "Less"}
        </a>
        </div>
        </div>

      {/* Teams Section */}
      <div className="teams-section">
      <div className="header-section"
        onClick={(e) => {
        if (!e.target.closest(".add-button")) {
        setIsTeamsOpen((prev) => !prev);  // Toggle Teams section only
      }}}
      >
      <span className="down-arrow">
      <img src={isTeamsOpen ? openArrowIcon : closedArrowIcon} alt="Toggle Icon"  />
      </span>
      <span className="text-section">Teams</span>
  
      <div className="add-button">
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
        <div className="more-section">
        <a href="#more-teams" onClick={loadMoreTeams}>
        {!showAllTeams ? "More" : "Less"}
        </a>
        </div>
      </div>

      {/* Channels Section */}
      <div className="channels-section">
      <div className="header-section"
      onClick={(e) => {
      if (!e.target.closest(".add-button")) {
      setIsChannelsOpen((prev) => !prev);  // Toggle Channels section only
      }}}
      >
      <span className="down-arrow">
      <img src={isChannelsOpen ? openArrowIcon : closedArrowIcon} alt="Toggle Icon"  />
      </span>
      <span className="text-section">Channels</span>

      <div className="add-button">
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
        <div className="more-section">
        <a href="#more-channels" onClick={loadMoreChannels}>
        {!showAllChannels ? "More" : "Less"}
        </a>
        </div>
        </div>
        </div>
      
          <div className="navbar-footer">
          <div className="footer-company">
  <img src={companyLogo} alt="Company Logo" className="company-logo" />
        </div>
        
        {/* Profile Section */}
        <div className="footer-profile" onClick={toggleDropdown}>
            <img src={sucharita} alt="Profile" className="profile-avatar" />
            <span className="profile-name">Profile Name</span>
            <span className="profilename-arrow">
              <img src={profilenameArrow} alt="Toggle Dropdown" />
            </span>
          </div>

      {/* Dropdown (Toast) */}
      {isprofileOpen && (
            <div className="profile-dropdown">
              <div className="profile-header">
                <img src={sucharitaprofile} alt="Profile" className="dropdown-avatar" />
                <div className="profile-info">
                  <span className="profile-name">Profile Name</span>
                  <span className="profile-status">
                    <span className="active-status-dot"></span> Active
                  </span>
                </div>
              </div>

              <ul className="profile-options">
              <li><strong><span className="set-yourself">Set yourself as </span>
                <span className="away-text">away</span></strong></li>
                <li className="toggle-option">
                  Notifications <input type="checkbox" className="toggle-switch" />
                </li>
                <li>Profile</li>
                <li>Settings</li>
                <li>Help Center</li>
              </ul>
            </div>
          )}

        </div>      
    </div>
  );
};

export default Navbar;
