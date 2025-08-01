import React, { useState, useEffect, useRef } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaCalendarAlt,
  FaUsers,
  FaChartLine,
  FaPaperPlane,
} from "react-icons/fa";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-white shadow-md z-50 py-4 px-6 flex justify-between items-center">
    <div
      onClick={() => scrollTo("home")}
      className="font-bold text-xl cursor-pointer text-yellow-600"
    >
      SocialPro
    </div>
    <div className="space-x-6 hidden md:flex">
      {["home", "features", "contact", "login"].map((sec) => (
        <button
          key={sec}
          onClick={() => scrollTo(sec)}
          className="capitalize hover:text-yellow-500 text-gray-700"
        >
          {sec === "login" ? "Login" : sec}
        </button>
      ))}
    </div>
  </nav>
);


const Section = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`py-20 px-6 scroll-mt-20 max-w-7xl mx-auto ${className}`}
  >
    {children}
  </section>
);

const Home = () => (
  <Section id="home" className="bg-yellow-50 text-center pt-32">
    <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
      The Complete Solution to Take Care of Your Social Media Profiles
    </h1>
    <p className="text-xl text-gray-700 mb-10 max-w-4xl mx-auto">
      SocialPro empowers individuals, creators, and businesses to master their
      social media presence effortlessly. Schedule posts, collaborate with
      your team, and get deep insights — all from one intuitive platform.
      Simplify your workflow, boost engagement, and watch your online community
      grow with tools designed for success.
    </p>
    <div className="inline-flex rounded-md shadow-sm">
      <input
        type="email"
        placeholder="Enter your email"
        className="p-4 rounded-l-md border border-gray-300 w-80 text-gray-900 focus:outline-yellow-500"
      />
      <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-4 rounded-r-md font-semibold transition">
        Get Started Now
      </button>
    </div>
    <div
      onClick={() => scrollTo("features")}
      className="mt-16 text-yellow-600 cursor-pointer animate-bounce inline-block"
      aria-label="Scroll down"
      title="Scroll down to Features"
    >
      ▼
    </div>
  </Section>
);

const Features = () => {
  const featuresData = [
    {
      title: "Smart Scheduling",
      desc: `Leverage AI to automatically schedule your posts for optimal engagement times, ensuring your content reaches your audience when they're most active.`,
      icon: <FaCalendarAlt className="text-yellow-500 text-4xl" />,
    },
    {
      title: "All-in-One Dashboard",
      desc: `Manage multiple social media accounts in one place. Post, monitor, and respond seamlessly without juggling between different apps.`,
      icon: <FaUsers className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Performance Analytics",
      desc: `Gain valuable insights with comprehensive analytics. Track growth, engagement metrics, and content performance to refine your strategy.`,
      icon: <FaChartLine className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Bulk Scheduling",
      desc: `Upload multiple posts in one go and save hours of manual work.`,
      icon: <FaCalendarAlt className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Best-Time Suggestions",
      desc: `Get AI-powered recommendations on when to post for maximum engagement.`,
      icon: <FaChartLine className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Team Collaboration",
      desc: `Invite your team members, assign roles, and work on posts together seamlessly.`,
      icon: <FaUsers className="text-yellow-500 text-4xl" />,
    },
  ];

  return (
    <Section id="features" className="bg-white text-center">
      <h2 className="text-4xl font-bold mb-12 text-black">
        Features Designed to Empower Your Social Media Strategy
      </h2>
      <div className="grid md:grid-cols-3 gap-10 text-left">
        {featuresData.map(({ title, desc, icon }) => (
          <div
            key={title}
            className="p-8 bg-gray-50 shadow rounded hover:shadow-lg transition cursor-default"
          >
            <div className="flex items-center gap-4 mb-4">{icon}</div>
            <h3 className="font-semibold text-xl mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-700">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Planner = () => {
  // Simple static calendar mockup
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);

  // Mock scheduled posts on certain days
  const scheduledPosts = {
    3: ["Instagram Post", "LinkedIn Article"],
    10: ["Twitter Thread"],
    18: ["Facebook Promo"],
    23: ["Instagram Story"],
  };

  return (
    <Section id="planner" className="bg-yellow-50">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
        Content Planner Snapshot
      </h2>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md">
        <div className="grid grid-cols-7 gap-2 text-center font-semibold text-gray-700 border-b pb-2">
          {days.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 mt-2">
          {dates.map((date) => (
            <div
              key={date}
              className={`h-28 border rounded p-2 relative cursor-pointer hover:shadow-lg transition bg-white ${
                scheduledPosts[date] ? "bg-yellow-100" : ""
              }`}
              title={
                scheduledPosts[date]
                  ? `Scheduled: ${scheduledPosts[date].join(", ")}`
                  : ""
              }
            >
              <div className="font-bold text-right text-gray-600">{date}</div>
              {scheduledPosts[date] && (
                <ul className="text-xs mt-1 text-yellow-700 list-disc list-inside h-20 overflow-auto">
                  {scheduledPosts[date].map((post, idx) => (
                    <li key={idx}>{post}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-semibold transition shadow-md">
          Create New Post
        </button>
      </div>
    </Section>
  );
};


 function TeamCollaboration() {
  const [teamMembers, setTeamMembers] = useState([
    { name: "Alice Johnson", role: "Content Manager" },
    { name: "Bob Smith", role: "Social Media Strategist" },
    { name: "Carol Lee", role: "Graphic Designer" },
  ]);

  const [comments, setComments] = useState([
    { id: 1, author: "Bob Smith", text: "Great post idea! Let’s add more hashtags.", time: "2 hours ago" },
    { id: 2, author: "Alice Johnson", text: "Scheduled the post for Thursday morning.", time: "1 hour ago" },
  ]);

  const [newComment, setNewComment] = useState("");

  // Handler to add new comment
  const postComment = () => {
    if (newComment.trim() === "") return;

    setComments([
      ...comments,
      {
        id: Date.now(),
        author: "You", // or any default author name
        text: newComment,
        time: "Just now",
      },
    ]);
    setNewComment("");
  };

  // Handler to invite new member (for simplicity, just add a fixed dummy)
  const inviteMember = () => {
    const newMemberName = prompt("Enter new member's name");
    if (newMemberName && newMemberName.trim() !== "") {
      setTeamMembers([...teamMembers, { name: newMemberName, role: "New Member" }]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-yellow-50 rounded-md shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Team Collaboration Snapshot</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Team Members */}
        <div className="bg-yellow-100 p-6 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Team Members</h2>
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="mb-3 p-3 bg-white rounded shadow-sm"
            >
              <p className="font-semibold">{member.name}</p>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
          <button
            onClick={inviteMember}
            className="mt-4 w-full bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-600 transition"
          >
            Invite Member
          </button>
        </div>

        {/* Recent Comments */}
        <div className="bg-yellow-100 p-6 rounded-md flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Recent Comments</h2>
          <div className="flex-1 overflow-auto space-y-4 mb-4 max-h-72">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-white p-4 rounded shadow-sm border-l-4 border-yellow-500"
              >
                <p className="font-semibold">{comment.author}</p>
                <p>{comment.text}</p>
                <p className="text-gray-500 text-xs mt-1">{comment.time}</p>
              </div>
            ))}
          </div>

          <textarea
            rows={3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="resize-none p-3 rounded border border-gray-300 mb-3 text-gray-900"
          />
          <button
            onClick={postComment}
            className="self-end bg-yellow-500 text-black font-semibold px-5 py-2 rounded hover:bg-yellow-600 transition"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}


const Analytics = () => {
  // Simple SVG bar chart mockup
  const data = [
    { label: "Jan", value: 40 },
    { label: "Feb", value: 55 },
    { label: "Mar", value: 75 },
    { label: "Apr", value: 65 },
    { label: "May", value: 90 },
    { label: "Jun", value: 100 },
  ];

  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <Section id="analytics" className="bg-yellow-50">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
        Performance Analytics Overview
      </h2>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
        <svg
          viewBox="0 0 600 300"
          width="100%"
          height="200"
          className="mb-6"
          aria-label="Bar chart of monthly social media engagement"
          role="img"
        >
          {data.map(({ label, value }, idx) => {
            const barHeight = (value / maxValue) * 200;
            return (
              <g key={label} transform={`translate(${idx * 100 + 50}, 200)`}>
                <rect
                  x={-25}
                  y={-barHeight}
                  width={50}
                  height={barHeight}
                  fill="#F59E0B"
                  rx="5"
                />
                <text
                  x={0}
                  y={15}
                  textAnchor="middle"
                  fontSize="14"
                  fill="#374151"
                >
                  {label}
                </text>
                <text
                  x={0}
                  y={-barHeight - 10}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#B45309"
                >
                  {value}
                </text>
              </g>
            );
          })}
        </svg>
        <p className="text-center text-gray-700 text-lg">
          Track your monthly engagement and see what content works best.
        </p>
      </div>
    </Section>
  );
};

const Connect = () => {
  const social = [
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/yourprofile",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/yourprofile",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
      color: "hover:text-blue-700",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/yourprofile",
      label: "GitHub",
      color: "hover:text-gray-900",
    },
  ];

  return (
    <Section id="connect" className="bg-white text-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-900">
        Connect with Us on Social Media
      </h2>
      <div className="flex justify-center gap-12 text-5xl text-gray-700">
        {social.map(({ icon, href, label, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`${color} transition-colors`}
          >
            {icon}
          </a>
        ))}
      </div>
    </Section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophia Martinez",
      role: "Influencer",
      text: `“SocialPro transformed how I manage my brand. The scheduling and analytics helped me double my engagement in just 3 months!”`,
    },
    {
      name: "David Kim",
      role: "Small Business Owner",
      text: `“The team collaboration features make working with my marketing team seamless and efficient. Highly recommend!”`,
    },
    {
      name: "Emma Watson",
      role: "Content Creator",
      text: `“I love how intuitive the platform is. It saves me hours every week and helps me stay consistent.”`,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((v) => (v + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <Section id="testimonials" className="bg-yellow-50">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
        What Our Users Say
      </h2>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow-lg text-center">
        <p className="italic text-gray-800 text-lg mb-6">
          {testimonials[current].text}
        </p>
        <p className="font-semibold text-yellow-600">
          {testimonials[current].name}
        </p>
        <p className="text-gray-600 text-sm">{testimonials[current].role}</p>
      </div>
    </Section>
  );
};
const Contact = () => {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    setSubmitted(true);
  };

  return (
    <Section id="contact" className="bg-white">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
        Get in Touch
      </h2>
      {!submitted ? (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            aria-label="Contact form"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="p-4 border rounded border-gray-300 focus:outline-yellow-400"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="p-4 border rounded border-gray-300 focus:outline-yellow-400"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              required
              className="p-4 border rounded border-gray-300 focus:outline-yellow-400 resize-none"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black py-4 rounded font-semibold transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="text-gray-700">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="mb-4">
              <strong>Phone:</strong> <a href="tel:+1234567890" className="text-yellow-600 hover:underline">+1 (234) 567-890</a>
            </p>
            <p className="mb-4">
              <strong>Email:</strong> <a href="mailto:contact@socialpro.com" className="text-yellow-600 hover:underline">contact@socialpro.com</a>
            </p>
            <p className="mb-4">
              <strong>Address:</strong> <br />
              123 SocialPro Lane,<br />
              San Francisco, CA 94105,<br />
              USA
            </p>
            <p>
              <strong>Working Hours:</strong><br />
              Mon - Fri: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center text-green-600 font-semibold text-xl">
          Thank you! We will get back to you shortly.
        </p>
      )}
    </Section>
  );
};


const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-8 text-center">
    <p>© {new Date().getFullYear()} SocialPro. All rights reserved.</p>
    <div className="mt-4 flex justify-center gap-8 text-2xl">
      <a
        href="https://instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-pink-500 transition"
      >
        <FaInstagram />
      </a>
      <a
        href="https://twitter.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="hover:text-blue-400 transition"
      >
        <FaTwitter />
      </a>
      <a
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-blue-700 transition"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-gray-400 transition"
      >
        <FaGithub />
      </a>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Navbar />
      <main className="pt-20">
        <Home />
        <Features />
        <Planner />
        <TeamCollaboration />
        <Analytics />
        <Connect />
        <Testimonials />
        <Contact />
        <Section
          id="login"
          className="bg-white text-center py-20 max-w-md mx-auto rounded shadow mt-20"
        >
          <h2 className="text-3xl font-bold mb-6">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded w-full mb-4 focus:outline-yellow-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border rounded w-full mb-6 focus:outline-yellow-500"
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-semibold transition w-full">
            Login
          </button>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

