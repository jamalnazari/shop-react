import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebase/firebase";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e2) {
      setErr(e2.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 500 }}>
      <h3 className="text-center">ورود</h3>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          className="form-control my-2"
          placeholder="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control my-2"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {err && <div className="alert alert-danger py-2">{err}</div>}

        <button className="btn btn-primary w-100 mt-2" disabled={loading}>
          {loading ? "در حال ورود..." : "ورود"}
        </button>
      </form>

      <p className="text-center mt-3">
        حساب نداری؟ <Link to="/register">ثبت‌نام</Link>
      </p>
    </div>
  );
};

export default Login;