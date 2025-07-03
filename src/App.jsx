// import React from "react";
// import Sidebar from "./Sidebar";
// import Topbar from "./Topbar";
// import TeamPage from "./TeamPage";

// function App() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Sidebar />
//       <div className="ml-64">
//         <Topbar />
//         <div className="p-6">
//           <TeamPage />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import TeamPage from "./TeamPage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (<div>
    <header  ><Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} /></header>
       <div className="flex"> 
      <Sidebar isOpen={isSidebarOpen} />
      
        
          <TeamPage />
        </div>
    </div>

  );
}

export default App;
