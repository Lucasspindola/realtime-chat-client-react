import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { instance } from "../../Services/api";
import { useNavigate } from "react-router-dom";
import { RegisterContainer } from "./style";

const schema = yup.object().shape({
  nickname: yup
    .string()
    .required("Campo obrigatório!")
    .matches(/^\S*$/, "O nickname não pode conter espaços em branco")
    .min(5, "O nickname deve ter no mínimo 5 caracteres")
    .max(12, "O nickname deve ter no máximo 12 caracteres"),
  password: yup
    .string()
    .required("Campo obrigatório!")
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .max(15, "A senha deve ter no máximo 15 caracteres"),
});

const Register = () => {
  const navigate = useNavigate();
  const registerUser = (data) => {
    instance
      .post("/users", data)
      .then((res) => {
        localStorage.removeItem("authToken");

        console.log(res);
        navigate(`/login`);
      })
      .catch((err) => {
        console.log(err);
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
    registerUser(data);
    console.log(data);
  };

  return (
    <RegisterContainer>
      <div className="cotainerMain">
        <div className="title">
          <h3>Registre-se agora! </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="nickname">Nickname</label>
            <input
              id="nickname"
              type="text"
              placeholder="Digite seu nickname"
              {...register("nickname")}
            />
            {errors.nickname && <p>{errors.nickname.message}</p>}
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div>
            <button type="submit">Registrar</button>
            <button onClick={() => navigate("/login")}>
              Junte-se a nós! Faça login agora!{" "}
            </button>
          </div>
        </form>
      </div>
    </RegisterContainer>
  );
};

export default Register;
