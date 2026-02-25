import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Portfolio admin dashboard",
};

export default function AdminPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-base-200 p-4">
          <h2 className="text-lg font-semibold">Total Projects</h2>
          <p className="text-4xl font-bold">0</p>
        </div>
        <div className="card bg-base-200 p-4">
          <h2 className="text-lg font-semibold">Blog Posts</h2>
          <p className="text-4xl font-bold">0</p>
        </div>
        <div className="card bg-base-200 p-4">
          <h2 className="text-lg font-semibold">Total Views</h2>
          <p className="text-4xl font-bold">0</p>
        </div>
      </div>

      <div className="card bg-base-200 p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <p className="text-base-content/60">No recent activity</p>
      </div>

      <div className="card bg-base-200 p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <button type="button" className="btn btn-primary">Add Project</button>
          <button type="button" className="btn btn-secondary">Write Blog Post</button>
          <button type="button" className="btn btn-outline">View Analytics</button>
        </div>
      </div>
    </div>
  );
}
