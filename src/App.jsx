// import React, { useState } from "react";

// const App = () => {
//   const [page, setPage] = useState("home");

//   const renderPage = () => {
//     switch (page) {
//       case "home":
//         return (
//           <div className="text-center space-y-6">
//             <h1 className="text-4xl font-extrabold text-blue-500">Automate Your Social Media Like a Pro</h1>
//             <p className="text-gray-300">
//               Save time and grow your presence across all major platforms with powerful scheduling and analytics.
//             </p>
//             <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold mt-4">
//               Get Started Free
//             </button>

//             <h2 className="text-2xl font-bold mt-10 text-white">Features</h2>
//             <div className="space-y-4 text-left max-w-xl mx-auto text-gray-300">
//               <div>
//                 <h3 className="font-bold text-white">📱 Multi-Platform Posting</h3>
//                 <p>Post to Instagram, Twitter, LinkedIn, and Facebook simultaneously.</p>
//               </div>
//               <div>
//                 <h3 className="font-bold text-white">⏱ Smart Scheduling</h3>
//                 <p>Choose the best time and day. Set it and forget it.</p>
//               </div>
//               <div>
//                 <h3 className="font-bold text-white">📊 Analytics Dashboard</h3>
//                 <p>Track likes, comments, and reach from one place.</p>
//               </div>
//             </div>
//           </div>
//         );
//       case "about":
//         return <p className="text-gray-300 text-center">We are building the best social automation tool for creators and businesses. 🚀</p>;
//       case "contact":
//         return <p className="text-gray-300 text-center">Contact us at <a className="text-blue-400" href="mailto:support@autopost.com">support@autopost.com</a></p>;
//       case "login":
//         return (
//           <div className="max-w-sm mx-auto text-left text-gray-300">
//             <h2 className="text-2xl text-white font-bold mb-4">Login</h2>
//             <input
//               className="w-full mb-3 p-2 bg-gray-700 text-white rounded"
//               type="email"
//               placeholder="Email"
//             />
//             <input
//               className="w-full mb-3 p-2 bg-gray-700 text-white rounded"
//               type="password"
//               placeholder="Password"
//             />
//             <button className="bg-blue-600 px-4 py-2 rounded w-full">Login</button>
//           </div>
//         );
//       default:
//         return <p className="text-red-500">404 Page Not Found</p>;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 text-white font-sans px-6 py-10">
//       <header className="flex justify-between items-center mb-10">
//         <h1 className="text-2xl font-bold text-blue-500">AutoPost</h1>
//         <nav className="space-x-4">
//           <button onClick={() => setPage("home")} className="hover:text-blue-400">Home</button>
//           <button onClick={() => setPage("about")} className="hover:text-blue-400">About</button>
//           <button onClick={() => setPage("contact")} className="hover:text-blue-400">Contact</button>
//           <button onClick={() => setPage("login")} className="hover:text-blue-400">Login</button>
//         </nav>
//       </header>

//       <main>{renderPage()}</main>

//       <footer className="mt-16 text-sm text-gray-500 text-center border-t border-gray-800 pt-6">
//         <p>© 2025 AutoPost. All rights reserved.</p>
//         <div className="space-x-4 mt-2">
//           <a href="#" className="hover:text-white">Privacy</a>
//           <a href="#" className="hover:text-white">Terms</a>
//           <a href="#" className="hover:text-white">Support</a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";

const App = () => {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return (
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-extrabold text-violet-700">Automate Your Social Media Like a Pro</h1>
            <p className="text-violet-800">
              Save time and grow your presence across all major platforms with powerful scheduling and analytics.
            </p>
            <button className="bg-violet-600 hover:bg-violet-700 px-6 py-2 rounded-lg font-semibold mt-4 text-white">
              Get Started Free
            </button>

            <h2 className="text-2xl font-bold mt-10 text-violet-800">Features</h2>
            <div className="space-y-4 text-left max-w-xl mx-auto text-violet-700">
              <div>
                <h3 className="font-bold text-violet-900">📱 Multi-Platform Posting</h3>
                <p>Post to Instagram, Twitter, LinkedIn, and Facebook simultaneously.</p>
              </div>
              <div>
                <h3 className="font-bold text-violet-900">⏱ Smart Scheduling</h3>
                <p>Choose the best time and day. Set it and forget it.</p>
              </div>
              <div>
                <h3 className="font-bold text-violet-900">📊 Analytics Dashboard</h3>
                <p>Track likes, comments, and reach from one place.</p>
              </div>
            </div>
          </div>
        );
      case "about":
        return <p className="text-violet-700 text-center">We are building the best social automation tool for creators and businesses. 🚀</p>;
      case "contact":
        return (
          <p className="text-violet-700 text-center">
            Contact us at{" "}
            <a className="text-violet-900 underline" href="mailto:support@autopost.com">
              support@autopost.com
            </a>
          </p>
        );
      case "login":
        return (
          <div className="max-w-sm mx-auto text-left text-violet-800">
            <h2 className="text-2xl text-violet-900 font-bold mb-4">Login</h2>
            <input
              className="w-full mb-3 p-2 bg-violet-200 text-violet-900 rounded"
              type="email"
              placeholder="Email"
            />
            <input
              className="w-full mb-3 p-2 bg-violet-200 text-violet-900 rounded"
              type="password"
              placeholder="Password"
            />
            <button className="bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded w-full text-white">Login</button>
          </div>
        );
      default:
        return <p className="text-red-600">404 Page Not Found</p>;
    }
  };

  return (
    <div className="min-h-screen px-6 py-10">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-violet-800">AutoPost</h1>
        <nav className="space-x-4">
          <button onClick={() => setPage("home")} className="hover:text-violet-500">Home</button>
          <button onClick={() => setPage("about")} className="hover:text-violet-500">About</button>
          <button onClick={() => setPage("contact")} className="hover:text-violet-500">Contact</button>
          <button onClick={() => setPage("login")} className="hover:text-violet-500">Login</button>
        </nav>
      </header>

      <main>{renderPage()}</main>

      <footer className="mt-16 text-sm text-violet-600 text-center border-t border-violet-300 pt-6">
        <p>© 2025 AutoPost. All rights reserved.</p>
        <div className="space-x-4 mt-2">
          <a href="#" className="hover:text-violet-900">Privacy</a>
          <a href="#" className="hover:text-violet-900">Terms</a>
          <a href="#" className="hover:text-violet-900">Support</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
