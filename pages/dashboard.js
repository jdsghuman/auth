import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  if (loading) return <h1>Loading...</h1>;
  if (!user) router.push("/auth/login");

  if (user) {
    return (
      <div>
        <h1>Welcome to your dashboard {user?.displayName}</h1>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </div>
    );
  }
}
