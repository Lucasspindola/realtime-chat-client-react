import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { instance } from "../../Services/api";
import { useNavigate } from "react-router-dom";
import { LoginContainer } from "./style";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  nickname: yup
    .string()
    .required("Campo obrigatório!")
    .matches(/^\S*$/, "O nickname não pode conter espaços em branco"),
  password: yup.string().required("Campo obrigatório!"),
});

const Login = () => {
  const navigate = useNavigate();
  const loginUser = (data) => {
    instance
      .post("/session", data)
      .then((res) => {
        localStorage.removeItem("authToken");
        window.localStorage.setItem("authToken", res.data.token);
        toast.success(`Seja bem vindo(a)!`);

        // console.log(res);
        navigate(`/join`);
      })
      .catch((err) => {
        console.log(err);
        toast.error(`Ops, houve um erro confira seus dados. Tente novamente!`);
      });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    loginUser(data);
    console.log(data);
  };

  return (
    <LoginContainer>
      <div className="cotainerMain">
        <div className="title">
          <h3>Login</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="nickname">Nickname</label>
            <input
              id="nickname"
              placeholder="Digite seu nickname"
              type="text"
              {...register("nickname")}
            />
            {errors.nickname && (
              <p className="error">{errors.nickname.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              placeholder="Digite sua senha"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>
          <div>
            <button type="submit">Entrar</button>
            <button onClick={() => navigate("/register")}>
              Junte-se a nós! Registre-se agora!
            </button>
          </div>
        </form>
      </div>
    </LoginContainer>
  );
};

export default Login;
