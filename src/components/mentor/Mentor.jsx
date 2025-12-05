import { useMemo, useState } from "react";
import MentorCard from "./MentorCard";

const initialMentors = [
  {
    id: 1,
    name: "Jonny Rose",
    title: "Sr. Software Engineering at Google",
    company: "Google",
    avatar: "https://i.pravatar.cc/120?img=12",
    bio: "PM @Bytespectrum || xCloud @Google || XML summer @Amazon || DSA || Team Development || Growth Management || Full Stack Developer (MERN)",
    rating: 4.8,
    reviewsCount: 13,
    verified: true,
  },
  {
    id: 2,
    name: "Dev Jain",
    title: "Sr. Software Engineering at Microsoft",
    company: "Microsoft",
    avatar: "https://i.pravatar.cc/120?img=15",
    bio: "PM @Bytespectrum || xCloud @Google || XML summer @Amazon || Team Development || Growth Management || Full Stack Developer (MERN)",
    rating: 4.6,
    reviewsCount: 8,
    verified: true,
  },
  {
    id: 3,
    name: "Rishi Mehta",
    title: "Sr. Software Engineering at JP Morgan",
    company: "JP Morgan",
    avatar: "https://i.pravatar.cc/120?img=20",
    bio: "Prev Application Engineer @Google",
    rating: 4.7,
    reviewsCount: 12,
    verified: false,
  },
  {
    id: 4,
    name: "Heet Mistry",
    title: "Sr. Software Engineering at Zomato",
    company: "Zomato",
    avatar: "https://i.pravatar.cc/120?img=25",
    bio: "PM @Bytespectrum || xCloud @Google || XML summer @Amazon || Team Development",
    rating: 4.5,
    reviewsCount: 3,
    verified: true,
  },
];

const Mentor = () => {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState("All");
  const [company, setCompany] = useState("All");
  const [slot, setSlot] = useState("All");
  const [rating, setRating] = useState("All");

  // derive company options from data
  const companyOptions = useMemo(
    () => ["All", ...Array.from(new Set(initialMentors.map((m) => m.company)))],
    []
  );

  const filtered = initialMentors.filter((m) => {
    const matchesQuery =
      query.trim() === "" ||
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.title.toLowerCase().includes(query.toLowerCase()) ||
      m.bio.toLowerCase().includes(query.toLowerCase());

    const matchesCompany = company === "All" || m.company === company;
    const matchesRating =
      rating === "All" || Math.floor(m.rating) >= Number(rating);
    // slot & role are placeholders for now
    return matchesQuery && matchesCompany && matchesRating;
  });

  return (
    <div className="max-w-6xl mx-auto">
      {/* header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Mentors</h2>
        <button className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
          Become a mentor
        </button>
      </div>

      {/* search + filters */}
      <div className="bg-white p-4 rounded-md shadow-sm mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <div className="flex-1">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name"
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
            />
          </div>

          <div className="mt-3 md:mt-0 flex items-center space-x-2">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border border-gray-200 rounded-md px-3 py-2"
            >
              <option>All</option>
              <option>Mentor</option>
              <option>Mentee</option>
            </select>

            <select
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="border border-gray-200 rounded-md px-3 py-2"
            >
              {companyOptions.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <select
              value={slot}
              onChange={(e) => setSlot(e.target.value)}
              className="border border-gray-200 rounded-md px-3 py-2"
            >
              <option>All</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>

            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="border border-gray-200 rounded-md px-3 py-2"
            >
              <option value="All">Rating</option>
              <option value="4">4 & up</option>
              <option value="3">3 & up</option>
              <option value="2">2 & up</option>
            </select>
          </div>
        </div>
      </div>

      {/* list */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="text-center py-8 bg-white rounded-md shadow-sm">
            No mentors found
          </div>
        ) : (
          filtered.map((m) => <MentorCard key={m.id} mentor={m} />)
        )}
      </div>
    </div>
  );
};

export default Mentor;
