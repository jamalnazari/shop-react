import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";    //یه تابع از کتابخانه Firebase Auth 
import { auth } from "../../../Firebase/firebase"; 
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  
  const handleRegister = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);

      
      await updateProfile(userCred.user, { displayName: name });

      navigate("/");
    } catch (e2) {
      setErr(e2.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 500 }}>
      <h3 className="text-center">ثبت‌نام</h3>

      <form onSubmit={handleRegister}>
        <input
          className="form-control my-2"
          placeholder="نام"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <button className="btn btn-success w-100 mt-2" disabled={loading}>
          {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
        </button>
      </form>

      <p className="text-center mt-3">
        قبلاً ثبت‌نام کردی؟ <Link to="/login">ورود</Link>
      </p>
    </div>
  );
};

export default Register;