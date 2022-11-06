import { memo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { isValidEmail } from "../../utils/isValidEmail";
import * as S from "./styles";

type SignInPost = {
  email: string;
  password: string;
};

const SignIn = () => {
  const [seePassword, setSeePassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<SignInPost>({ mode: "onChange" });
  const onSubmit: SubmitHandler<SignInPost> = ({ email, password }) => {
    console.log(email, password);
  };

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
              {...register("email", { required: true, validate: isValidEmail })}
            />
          </S.FieldContainer>
        </S.LabelFieldContainer>

        <S.LabelFieldContainer>
          <S.Label htmlFor="password">Password</S.Label>
          <S.FieldContainer>
            <S.Field
              type={!seePassword ? "password" : "text"}
              placeholder="password"
              {...register("password", { required: true })}
            />
            <S.IconContainer onClick={() => setSeePassword(!seePassword)}>
              {!seePassword ? <S.DontSeePasswordIcon /> : <S.SeePasswordIcon />}
            </S.IconContainer>
          </S.FieldContainer>
        </S.LabelFieldContainer>

        <S.Button disabled={!isValid}>SignIn</S.Button>

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
