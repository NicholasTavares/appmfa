import { signInPost } from "../../api/signInAPI";
import { memo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";
import { isValidEmail } from "../../utils/isValidEmail";
import * as S from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

type SignInPost = {
  email: string;
  password: string;
};

const SignIn = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { isValid, errors },
  } = useForm<SignInPost>({ mode: "onChange" });
  const onSubmit: SubmitHandler<SignInPost> = ({ email, password }) => {
    mutate({ email, password });
  };
  const { mutate, isLoading } = useMutation(signInPost, {
    onSuccess: ({ accessToken }) => {
      localStorage.setItem("jwt", accessToken);
      auth?.setJwt(accessToken);
      navigate("/");
    },
    onError: () => {
      setError("password", {
        message: "Incorrect email and/or password",
      });
    },
  });
  const [seePassword, setSeePassword] = useState(false);
  return (
    <S.Container>
      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.LogoContainer>
          <S.Logo />
          <S.LogoText>Multi Factor Auth</S.LogoText>
        </S.LogoContainer>

        <S.LabelFieldContainer>
          <S.Label htmlFor="email">Email</S.Label>
          <S.FieldContainer>
            <S.Field
              type="email"
              placeholder="maria@email.com"
              autoComplete="off"
              {...register("email", { required: true, validate: isValidEmail })}
            />
          </S.FieldContainer>
        </S.LabelFieldContainer>

        <S.LabelFieldContainer>
          <S.Label htmlFor="password">Password</S.Label>
          <S.FieldContainer>
            <S.Field
              type={seePassword ? "text" : "password"}
              placeholder="password"
              {...register("password", { required: true })}
            />
            <S.IconContainer onClick={() => setSeePassword(!seePassword)}>
              {seePassword ? <S.SeePasswordIcon /> : <S.DontSeePasswordIcon />}
            </S.IconContainer>
          </S.FieldContainer>
          {errors.password && (
            <S.ErrorMessage>Incorrect email or password</S.ErrorMessage>
          )}
        </S.LabelFieldContainer>

        <S.Button disabled={!isValid || isLoading}>SignIn</S.Button>

        <S.LinkContainer>
          <S.LinkPage to="/">Forgot password?</S.LinkPage>
        </S.LinkContainer>

        <S.LinkContainer>
          <S.LinkPage to="/signup">Sign up</S.LinkPage>
        </S.LinkContainer>
      </S.FormContainer>
    </S.Container>
  );
};

export default memo(SignIn);
