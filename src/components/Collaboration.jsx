import React, { useState } from "react";

const Collaboration = () => {
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

  const postComment = () => {
    if (newComment.trim() === "") return;

    setComments([
      ...comments,
      {
        id: Date.now(),
        author: "You",
        text: newComment,
        time: "Just now",
      },
    ]);
    setNewComment("");
  };

  const inviteMember = () => {
    const newMemberName = prompt("Enter new member's name");
    if (newMemberName && newMemberName.trim() !== "") {
      setTeamMembers([...teamMembers, { name: newMemberName, role: "New Member" }]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-yellow-50 rounded-md shadow-md mt-10">
      <h1 className="text-4xl text-center font-bold mb-12 text-black">
        Team Collaboration Snapshot
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Team Members */}
        <section
          aria-label="Team Members"
          className="bg-yellow-100 p-6 rounded-md"
        >
          <h2 className="text-xl font-semibold mb-4 text-yellow-800">
            Team Members
          </h2>
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="mb-3 p-3 bg-white rounded shadow-sm"
            >
              <p className="font-semibold text-gray-900">{member.name}</p>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
          <button
            onClick={inviteMember}
            className="mt-4 w-full bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-600 transition"
          >
            Invite Member
          </button>
        </section>

        {/* Recent Comments */}
        <section
          aria-label="Recent Comments"
          className="bg-yellow-100 p-6 rounded-md flex flex-col"
        >
          <h2 className="text-xl font-semibold mb-4 text-yellow-800">
            Recent Comments
          </h2>
          <div className="flex-1 overflow-auto space-y-4 mb-4 max-h-72">
            {comments.map((comment) => (
              <article
                key={comment.id}
                className="bg-white p-4 rounded shadow-sm border-l-4 border-yellow-500"
                aria-label={`Comment by ${comment.author}`}
              >
                <p className="font-semibold text-gray-900">{comment.author}</p>
                <p className="text-gray-800">{comment.text}</p>
                <p className="text-gray-500 text-xs mt-1">{comment.time}</p>
              </article>
            ))}
          </div>

          <textarea
            rows={3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="resize-none p-3 rounded border border-gray-300 mb-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            onClick={postComment}
            className="self-end bg-yellow-500 text-black font-semibold px-5 py-2 rounded hover:bg-yellow-600 transition"
          >
            Post
          </button>
        </section>
      </div>
    </div>
  );
}


export default Collaboration;
