import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.email} 🎉</h1>
      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
