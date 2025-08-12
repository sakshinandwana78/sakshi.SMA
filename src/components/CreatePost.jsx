import React, { useState } from "react";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    content: "",
    platforms: [],
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        platforms: checked
          ? [...prev.platforms, value]
          : prev.platforms.filter((p) => p !== value),
      }));
    } else if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("content", formData.content);

    // ✅ Append platforms one-by-one
    formData.platforms.forEach((platform) => {
      formDataToSend.append("platforms", platform);
    });

    // ✅ Append image if selected
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      const res = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await res.json();

      if (res.ok) {
        alert("Post created successfully!");
        // Reset form
        setFormData({ content: "", platforms: [], image: null });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Error submitting post.");
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center px-6 pt-24">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Create & Schedule a Post
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Post Content */}
          <div>
            <label
              htmlFor="content"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Post Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your post here..."
              className="w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows="4"
              required
            />
          </div>

          {/* Platforms */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Select Platforms
            </label>
            <div className="flex gap-4 border-gray-300 w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-none ">
              {["Instagram", "Twitter", "LinkedIn", "Facebook"].map(
                (platform) => (
                  <label key={platform} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={platform}
                      checked={formData.platforms.includes(platform)}
                      onChange={handleChange}
                    />
                    {platform}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Upload Image */}
          <div>
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-700 w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-none"
            >
              Upload Image (optional)
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-md font-semibold transition"
          >
            Post & Schedule
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
