import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Auth = ({setUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let userCredential;
      if (isLogin) {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      } setUser(userCredential.user);
      navigate("/posts");
    } catch (error) {
      console.error("Ошибка аутентификации", error);
    }
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
      <h2>{isLogin ? "Войти" : "Регистрация"}</h2>
        <input
          type="email"
          value={email}
          placeholder="Электронная почта"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          value={password}
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? "Войти" : "Регистрация"}</button>
      </form>
    </div>
  );
};

export default Auth;