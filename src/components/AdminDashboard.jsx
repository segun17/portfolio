import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminDashboard({ dark }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [demo, setDemo] = useState('');
  const [image, setImage] = useState('');
  const [skills, setSkills] = useState('');
  const [message, setMessage] = useState('');
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null); // For edit mode
  const navigate = useNavigate();

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin-login');
    }
  }, [navigate]);

  // Fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://portifolio-server-3oco.onrender.com/api/projects', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProjects(response.data);
      } catch (err) {
        console.error('Error fetching projects:', err.response?.data || err.message);
        setMessage('Error fetching projects');
      }
    };
    fetchProjects();
  }, []);

  // Handle add/edit project submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const skillsArray = skills.split(',').map((skill) => skill.trim()).filter((skill) => skill);
      const projectData = { title, desc, demo, image, skills: skillsArray };

      if (editingProject) {
        // Update existing project
        const response = await axios.put(
          `https://portifolio-server-3oco.onrender.com/api/projects/${editingProject._id}`,
          projectData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setProjects(projects.map((p) => (p._id === editingProject._id ? response.data.project : p)));
        setMessage('Project updated successfully!');
      } else {
        // Add new project
        const response = await axios.post(
          'https://portifolio-server-3oco.onrender.com/api/projects',
          projectData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setProjects([...projects, response.data.project]);
        setMessage('Project added successfully!');
      }

      // Reset form
      setTitle('');
      setDesc('');
      setDemo('');
      setImage('');
      setSkills('');
      setEditingProject(null);
    } catch (err) {
      console.error('Error saving project:', err.response?.data || err.message);
      setMessage('Error saving project');
    }
  };

  // Handle delete project
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`https://portifolio-server-3oco.onrender.com/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(projects.filter((p) => p._id !== id));
      setMessage('Project deleted successfully!');
    } catch (err) {
      console.error('Error deleting project:', err.response?.data || err.message);
      setMessage('Error deleting project');
    }
  };

  // Handle edit project
  const handleEdit = (project) => {
    setEditingProject(project);
    setTitle(project.title);
    setDesc(project.desc);
    setDemo(project.demo);
    setImage(project.image || '');
    setSkills(project.skills.join(', '));
  };

  // Clear form
  const handleCancelEdit = () => {
    setEditingProject(null);
    setTitle('');
    setDesc('');
    setDemo('');
    setImage('');
    setSkills('');
  };

  return (
    <section className="py-16 min-h-[60vh]">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Admin Dashboard</h2>
          <p className="mt-2 text-2xl text-black-400 dark:text-gray-400">
            Manage your portfolio projects
          </p>
        </div>
        <div
          className={`p-6 rounded-xl mb-8 ${
            dark ? 'bg-white/5' : 'bg-gray-200 border border-gray-300 hover:bg-gray-100'
          }`}
        >
          <h3 className="text-xl font-semibold mb-4">
            {editingProject ? 'Edit Project' : 'Add New Project'}
          </h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Project Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-3 rounded-md border border-[#555] text-sm placeholder-gray-500 dark:placeholder-gray-400"
              required
            />
            <textarea
              placeholder="Project Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="p-3 rounded-md border border-[#555] text-sm h-36 resize-none placeholder-gray-500 dark:placeholder-gray-400"
              required
            />
            <input
              type="url"
              placeholder="Live Demo URL"
              value={demo}
              onChange={(e) => setDemo(e.target.value)}
              className="p-3 rounded-md border border-[#555] text-sm placeholder-gray-500 dark:placeholder-gray-400"
              required
            />
            <input
              type="url"
              placeholder="Image URL (optional)"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="p-3 rounded-md border border-[#555] text-sm placeholder-gray-500 dark:placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Skills (comma-separated, e.g., React, Node.js)"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="p-3 rounded-md border border-[#555] text-sm placeholder-gray-500 dark:placeholder-gray-400"
            />
            <div className="flex gap-4">
              <button
                type="submit"
                className="px-4 py-2 text-sm text-white rounded-md bg-gradient-to-r from-violet-600 to-cyan-400"
              >
                {editingProject ? 'Update Project' : 'Add Project'}
              </button>
              {editingProject && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="px-4 py-2 text-sm text-white rounded-md bg-gray-500 hover:bg-gray-600"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
          {message && (
            <p
              className={`mt-4 text-center ${
                message.includes('Error') ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {message}
            </p>
          )}
        </div>
        <div
          className={`p-6 rounded-xl ${
            dark ? 'bg-white/5' : 'bg-gray-200 border border-gray-300 hover:bg-gray-100'
          }`}
        >
          <h3 className="text-xl font-semibold mb-4">Existing Projects</h3>
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <div
                  key={project._id}
                  className={`p-4 rounded-md ${
                    dark ? 'bg-white/10' : 'bg-gray-300'
                  }`}
                >
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <p className="text-sm text-black-300 dark:text-gray-300">{project.desc}</p>
                  <p className="text-xs text-black-400 dark:text-gray-400">
                    Demo: <a href={project.demo} className="hover:text-violet-300">{project.demo}</a>
                  </p>
                  {project.image && (
                    <p className="text-xs text-black-400 dark:text-gray-400">
                      Image: <a href={project.image} className="hover:text-violet-300">{project.image}</a>
                    </p>
                  )}
                  <p className="text-xs text-black-400 dark:text-gray-400">
                    Skills: {project.skills.join(', ')}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleEdit(project)}
                      className="px-3 py-1 text-sm text-white rounded-md bg-blue-500 hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="px-3 py-1 text-sm text-white rounded-md bg-red-500 hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400">No projects available</p>
          )}
        </div>
      </div>
    </section>
  );
}